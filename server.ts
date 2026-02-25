import express from "express";
import { createServer as createViteServer } from "vite";
import multer from "multer";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Multer configuration for file uploads
const upload = multer({ dest: "uploads/" });

app.use(express.json());

// API Routes
app.post("/api/feedback", upload.single("image"), async (req, res) => {
  try {
    const { type, message, name, date } = req.body;
    const file = req.file;

    // 1. Append to Google Sheets
    if (process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_SHEET_ID) {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:E",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[date, type, name || "Anônimo", message, file ? "Sim (ver email)" : "Não"]],
        },
      });
    }

    // 2. Send Email Notification
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions: any = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFICATION_EMAIL || "wellington.rodovalho@gmail.com",
        subject: `Novo Feedback: ${type}`,
        text: `
          Data: ${date}
          Tipo: ${type}
          Nome: ${name || "Anônimo"}
          Mensagem: ${message}
        `,
      };

      if (file) {
        mailOptions.attachments = [
          {
            filename: file.originalname,
            path: file.path,
          },
        ];
      }

      await transporter.sendMail(mailOptions);
    }

    // Clean up uploaded file
    if (file) {
      fs.unlinkSync(file.path);
    }

    res.json({ success: true, message: "Feedback enviado com sucesso!" });
  } catch (error) {
    console.error("Error processing feedback:", error);
    res.status(500).json({ success: false, message: "Erro ao processar feedback." });
  }
});

// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve("dist/index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
