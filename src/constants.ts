import { LocalPlace } from './types';

export const HOUSE_INFO = {
  name: "Casa Coimbra",
  address: "Rua Santa Gertrudes (antiga 252), 26, Setor Coimbra, Goiânia - Goiás",
  website: "www.alugagoias.com.br",
  wifi: {
    network: "frida",
    password: "faisca2021"
  },
  checkIn: {
    gate: "No teclado ao lado do portão, digite os 6 primeiros dígitos do seu número de telefone cadastrado, seguidos da tecla #.",
    keys: "Cofre das Chaves localizado na porta da sala. A senha corresponde aos 4 primeiros dígitos do seu número de telefone.",
    time: "A partir das 14h",
    voltage: "220V"
  },
  checkOut: {
    time: "Até às 11h",
    rules: [
      "Não acumule lixo, recolha lixo e coloque na lixeira na rua",
      "Não deixe acumular vasilhas sujas, lave-as sempre que terminar o uso",
      "Mantenha desligados as luzes, ventiladores e ar condicionado sempre que não estão em uso",
      "Fechar todas as portas e janelas",
      "Organize os espaços e deixe-os livres de sujeira",
      "Atraso sem consentimento gera cobrança de diária extra"
    ]
  },
  rules: [
    "Capacidade: até 6 hóspedes",
    "Não são permitidas visitas",
    "Não são permitidos eventos",
    "Não perturbe os vizinhos (sem som alto)",
    "Até 2 pets de porte médio permitidos",
    "Crianças sempre supervisionadas",
    "Fumar apenas na área externa",
    "Não deixe vasilhas sujas (multa R$100)",
    "Lixo: Coleta de 2ª a sábado, 18h às 22h",
    "Uso consciente da máquina de lavar",
    "Desligar aparelhos ao sair",
    "Churrasqueira apenas na varanda do quintal"
  ],
  emergencies: [
    { name: "Polícia Militar", phone: "190" },
    { name: "SAMU", phone: "192" },
    { name: "Corpo de Bombeiros", phone: "193" },
    { name: "Polícia Federal", phone: "194" },
    { name: "Guarda Municipal", phone: "153" },
    { name: "Hospital Estadual de Urgências", phone: "62 3201-4455" }
  ]
};

export const LOCAL_GUIDE: Record<string, LocalPlace[]> = {
  shoppings: [
    {
      name: "HIPER MOREIRA",
      description: "Impossível falar do Coimbra e não lembrar do Hiper Moreira. Ocupa um quarteirão inteiro em modernas instalações e se orgulha de ser o único hipermercado 100% goiano.",
      address: "Av. Perimetral, 2982 – St. Coimbra, Goiânia – GO, 74535-150",
      phone: "(62) 3257-1600"
    },
    {
      name: "FEIRA DAS NUVENS (Feira do Hiper Moreira)",
      description: "Especializada em vestuário, alimentação e calçados. Quarta-feira das 6h às 13h e Domingo das 16h às 22h.",
      address: "Av. T-1 com T-6 – Setor Coimbra"
    },
    {
      name: "Shopping Bougainville",
      description: "Shopping center elegante no Setor Marista.",
      address: "R. 9, 1855 - St. Marista, Goiânia - GO, 74150-130"
    },
    {
      name: "Shopping Cerrado",
      description: "Shopping moderno com diversas opções de lazer.",
      address: "Av. Anhanguera, 10790 - Aeroviário, Goiânia - GO, 74435-090"
    },
    {
      name: "Goiânia Shopping",
      description: "Um dos shoppings mais tradicionais da cidade, em frente ao Parque Vaca Brava.",
      address: "Av. T-10, 1300 - St. Bueno, Goiânia - GO, 74223-060"
    },
    {
      name: "Shopping Órion Complex",
      description: "Complexo de saúde, negócios e lazer.",
      address: "Av. Mutirão - St. Marista, Goiânia - GO, 74140-020"
    },
    {
      name: "Shopping Estação Goiânia",
      description: "Shopping com foco em moda e conveniência.",
      address: "Av. Goiás, 2151 - Centro, Goiânia - GO, 74063-300"
    },
    {
      name: "Araguaia Shopping",
      description: "Localizado no terminal rodoviário, com diversas lojas de outlet.",
      address: "R. 44, 399 - St. Central, Goiânia - GO, 74063-010"
    },
    {
      name: "Passeio das Águas Shopping",
      description: "O maior shopping do estado de Goiás.",
      address: "Av. Perimetral Norte, 8303 - Fazenda Caveiras, Goiânia - GO, 74573-260"
    },
    {
      name: "Flamboyant Shopping Center",
      description: "A 'vitrine' de Goiás, com marcas de luxo e excelentes restaurantes.",
      address: "Av. Dep. Jamel Cecílio, 3300 - Jardim Goiás, Goiânia - GO, 74810-907"
    }
  ],
  gastronomy: [
    {
      name: "OBELISQUE",
      description: "Um pedaço de Portugal no Setor Coimbra. Vale experimentar a batata ao murro, o bolinho de bacalhau e os pasteizinhos de Belém.",
      address: "R. 245, 172 – St. Coimbra",
      phone: "(62) 3087-5052"
    },
    {
      name: "VITAMINA LACERDA",
      description: "Um dos lanches mais tradicionais e queridos dos goianienses. Companheiro de todas as horas de boêmios a trabalhadores.",
      address: "Praça Benedita Silva Lobo(do Cigano), 116 – Setor Coimbra",
      phone: "(62) 3293-3437"
    },
    {
      name: "1960 BAR",
      description: "Bar aconchegante com ótimas opções de petiscos.",
      address: "Rua 237, 307 Esquina com, R. Santa Gertrúdes, Goiânia - GO, 74535-270"
    },
    {
      name: "RESTAURANTE GULOSO GOSTOSO",
      description: "Comida caseira de qualidade no Setor Coimbra.",
      address: "R. 237, 351 - St. Coimbra, Goiânia - GO, 74535-270"
    },
    {
      name: "POLOS PÃES & DOCES",
      description: "Padaria com excelentes opções de pães e doces.",
      address: "Av. R 1, 253 - St. Oeste, Goiânia - GO, 74125-020"
    },
    {
      name: "FRANCIS PÃES",
      description: "De frente a drogasil, na praça Ciro Lisita.",
      address: "Av. Castelo Branco, 1503 - St. Coimbra, Goiânia - GO, 74530-010"
    },
    {
      name: "HS - PÃES E DOCES",
      description: "Depois do Obelisque seguindo em frente.",
      address: "R. 229 A, 130 - St. Coimbra, Goiânia - GO, 74535-250"
    }
  ],
  tourism: [
    {
      name: "QUIOSQUE DO LAGO DAS ROSAS",
      description: "Atração turística com pedalinho e ótima pista para caminhada ao ar livre.",
      address: "Alameda das Rosas esquina com Rua R 3"
    },
    {
      name: "PARQUE ZOOLÓGICO DE GOIÂNIA",
      description: "Zoológico fundado em 1956, com leões, tigres, jaguares, hipopótamos e pássaros.",
      address: "Alameda das Rosas, Goiânia - GO"
    },
    {
      name: "PARQUE MUTIRAMA",
      description: "Parque de diversões clássico com área de dinossauros. Quarta a domingo, 10h às 16h.",
      address: "Av. Contorno, S/N - St. Central, Goiânia - GO, 74055-140"
    },
    {
      name: "MONUMENTO ÀS TRÊS RAÇAS",
      description: "Escultura icônica localizada no centro da Praça Cívica.",
      address: "Praça Cívica, Setor Central, Goiânia - GO"
    },
    {
      name: "PRAÇA DO RAXA",
      description: "Oficialmente Praça Godofredo Leopoldino, conhecida pelos rachas históricos. Bons bares por perto.",
      address: "Praça Godofredo Leopoldino, Setor Coimbra, Goiânia - GO"
    }
  ],
  health: [
    {
      name: "Drogasil",
      description: "Farmácia 24h.",
      address: "Av. Castelo Branco, 1492 - St. Coimbra, Goiânia - GO, 74530-010"
    },
    {
      name: "Drogaria São Felix Ltda",
      description: "Farmácia local.",
      address: "Praça Valter Santos, 364 - St. Coimbra, Goiânia - GO, 74533-250"
    },
    {
      name: "Drogaria Plusfarma",
      description: "Farmácia local.",
      address: "Av. Perimetral, 1972 - St. Coimbra, Goiânia - GO, 74533-020"
    },
    {
      name: "Hospital Samaritano de Goiânia",
      description: "Hospital geral.",
      address: "Praça Walter Santos, 1 - Coimbra, Goiânia - GO, 74733-250"
    },
    {
      name: "Hospital Memorial Batista do Centenário",
      description: "Hospital geral.",
      address: "R. T-42, 42 - St. Bueno, Goiânia - GO, 74210-350"
    },
    {
      name: "Hospital Urológico Puigvert",
      description: "Hospital especializado.",
      address: "Alameda das Rosas, 2155 - St. Oeste, Goiânia - GO, 74125-010"
    },
    {
      name: "Hospital Estadual da Mulher - HEMU",
      description: "Hospital especializado no atendimento à mulher.",
      address: "R. R-7, s/n - St. Oeste, Goiânia - GO, 74125-090"
    }
  ],
  banks: [
    {
      name: "Bradesco",
      description: "Agência bancária.",
      address: "Av. Castelo Branco, 1588 - Qd.47 Lt.31 - St. Coimbra, Goiânia - GO, 74530-010"
    },
    {
      name: "Itaú",
      description: "Agência bancária.",
      address: "Av. Castelo Branco, 1601 - St. Coimbra, Goiânia - GO, 74530-010"
    },
    {
      name: "Caixa",
      description: "Agência bancária.",
      address: "Av. Castelo Branco, 1568 - St. Coimbra, Goiânia - GO, 74530-010"
    }
  ],
  services: [
    {
      name: "SALÃO R e R CABELEIREIROS",
      description: "Serviços de cabeleireiro e estética.",
      address: "R. Santa Gertrúdes, Goiânia - GO, 74535-270"
    },
    {
      name: "LÊ CUCO LIVRARIA E BARBEARIA LITERÁRIA",
      description: "Um espaço único que une barbearia e livraria.",
      address: "R. 237, 348 - Coimbra, Goiânia - GO, 74535-270"
    }
  ]
};
