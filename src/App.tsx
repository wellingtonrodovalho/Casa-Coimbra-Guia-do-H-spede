/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  Key, 
  Home, 
  MapPin, 
  ShieldAlert, 
  Info, 
  LogOut, 
  Utensils, 
  Bed, 
  TreePine, 
  Tv, 
  Phone,
  Clock,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { HOUSE_INFO, LOCAL_GUIDE } from './constants';

function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Branches */}
      <path d="M50 85V35" stroke="#5D4037" strokeWidth="8" strokeLinecap="round"/>
      <path d="M50 75L25 55" stroke="#5D4037" strokeWidth="8" strokeLinecap="round"/>
      <path d="M50 75L75 55" stroke="#5D4037" strokeWidth="8" strokeLinecap="round"/>
      {/* Circles */}
      <circle cx="50" cy="25" r="20" fill="#FBC02D"/>
      <circle cx="20" cy="55" r="18" fill="#FBC02D"/>
      <circle cx="80" cy="55" r="18" fill="#FBC02D"/>
    </svg>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('welcome');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'welcome', label: 'Início', icon: Home },
    { id: 'checkin', label: 'Check-in', icon: Key },
    { id: 'house', label: 'A Casa', icon: Info },
    { id: 'rules', label: 'Regras', icon: ShieldAlert },
    { id: 'local', label: 'Guia Local', icon: MapPin },
    { id: 'emergency', label: 'Emergência', icon: Phone },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] font-sans selection:bg-[#d4a373] selection:text-white pb-12 lg:pb-0 overflow-x-hidden">
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo className="w-8 h-8" />
          <span className="font-serif font-bold text-xl tracking-tight">Casa Coimbra</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-black/5 p-6 shadow-sm">
        <div className="mb-10 flex flex-col items-center text-center">
          <Logo className="w-16 h-16 mb-4" />
          <h1 className="font-serif text-2xl font-bold text-[#1a1a1a] mb-1">Casa Coimbra</h1>
          <p className="text-[10px] uppercase tracking-widest text-[#d4a373] font-bold">Guia Digital</p>
        </div>

        <nav className="flex-1 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                activeTab === tab.id 
                  ? 'bg-[#d4a373] text-white shadow-md shadow-[#d4a373]/20' 
                  : 'text-[#1a1a1a]/60 hover:bg-black/5 hover:text-[#1a1a1a]'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-black/5">
          <a 
            href={`https://${HOUSE_INFO.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[11px] font-bold text-[#d4a373] hover:underline flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            {HOUSE_INFO.website}
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="lg:hidden fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col"
          >
            <nav className="space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all ${
                    activeTab === tab.id 
                      ? 'bg-[#d4a373] text-white' 
                      : 'bg-black/5 text-[#1a1a1a]/60'
                  }`}
                >
                  <tab.icon className="w-6 h-6" />
                  <span className="font-bold text-lg">{tab.label}</span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-10 max-w-6xl mx-auto min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col"
          >
            {activeTab === 'welcome' && <WelcomeSection onNavigate={setActiveTab} tabs={tabs} />}
            {activeTab === 'checkin' && <CheckInSection />}
            {activeTab === 'house' && <HouseSection />}
            {activeTab === 'rules' && <RulesSection />}
            {activeTab === 'local' && <LocalGuideSection />}
            {activeTab === 'emergency' && <EmergencySection />}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-auto pt-8 pb-4 text-center">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Gertrudes+26+Setor+Coimbra+Goiania+GO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-[#1a1a1a]/40 hover:text-[#d4a373] transition-colors"
          >
            Rua Santa Gertrudes (antiga 252), nº 26, Setor Coimbra, Goiânia/GO
          </a>
        </footer>
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 lg:hidden">
        {activeTab !== 'welcome' && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveTab('welcome')}
            className="w-14 h-14 bg-[#d4a373] text-white rounded-full shadow-2xl flex items-center justify-center"
          >
            <Home className="w-6 h-6" />
          </motion.button>
        )}
        <motion.a
          href="https://wa.me/5562985451980"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Desktop WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <motion.a
          href="https://wa.me/5562985451980"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-2xl border border-black/5 group"
        >
          <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="font-bold text-sm text-[#1a1a1a]">Fale com o Anfitrião</span>
        </motion.a>
      </div>
    </div>
  );
}

function WelcomeSection({ onNavigate, tabs }: { onNavigate: (id: string) => void, tabs: any[] }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 space-y-8 py-4 lg:py-0">
      <div className="text-center space-y-2">
        <Logo className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-4" />
        <h2 className="font-serif text-4xl lg:text-6xl font-bold text-[#1a1a1a]">Casa Coimbra</h2>
        <p className="text-[#d4a373] font-bold uppercase tracking-[0.2em] text-xs lg:text-sm">Guia Digital de Boas-Vindas</p>
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Gertrudes+26+Setor+Coimbra+Goiania+GO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-[10px] lg:text-xs text-[#1a1a1a]/40 hover:text-[#d4a373] transition-colors mt-2"
        >
          <MapPin className="w-3 h-3" />
          <span>Rua Santa Gertrudes (antiga 252), nº 26, Setor Coimbra, Goiânia/GO</span>
        </a>
      </div>

      {/* Compact App-like Button Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4 w-full max-w-2xl">
        {tabs.filter(t => t.id !== 'welcome').map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate(tab.id)}
            className="bg-white p-4 lg:p-6 rounded-3xl shadow-sm border border-black/5 flex flex-col items-center text-center gap-3 transition-all hover:shadow-lg hover:shadow-[#d4a373]/10 group"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#f5f2ed] rounded-2xl flex items-center justify-center group-hover:bg-[#d4a373] transition-colors">
              <tab.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#d4a373] group-hover:text-white transition-colors" />
            </div>
            <span className="font-bold text-[#1a1a1a] text-xs lg:text-sm tracking-tight">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      <div className="pt-4 text-center">
        <p className="text-[#1a1a1a]/40 text-[10px] uppercase tracking-widest font-bold">Toque em uma opção para começar</p>
      </div>
    </div>
  );
}

function CheckInSection() {
  return (
    <div className="space-y-8 flex flex-col flex-1">
      <div className="space-y-2">
        <h2 className="font-serif text-3xl font-bold">Check-in & Acesso</h2>
        <p className="text-[#1a1a1a]/60 text-sm">Instruções para sua entrada e saída.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#d4a373]/10 rounded-xl flex items-center justify-center">
              <Key className="text-[#d4a373] w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold">Entrada</h3>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-[#d4a373] text-xs uppercase tracking-wider">Portão</h4>
              <p className="text-[#1a1a1a]/70 leading-relaxed text-xs bg-[#f5f2ed] p-4 rounded-xl">
                {HOUSE_INFO.checkIn.gate}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#d4a373] text-xs uppercase tracking-wider">Chaves</h4>
              <p className="text-[#1a1a1a]/70 leading-relaxed text-xs bg-[#f5f2ed] p-4 rounded-xl">
                {HOUSE_INFO.checkIn.keys}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-8 rounded-[2.5rem] shadow-xl text-white space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <LogOut className="text-white w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold">Saída</h3>
          </div>

          <div className="space-y-3">
            {HOUSE_INFO.checkOut.rules.slice(0, 5).map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#d4a373] shrink-0 mt-0.5" />
                <span className="text-[11px] text-white/80 leading-snug">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HouseSection() {
  const rooms = [
    {
      title: "Wi-Fi",
      desc: `Rede: ${HOUSE_INFO.wifi.network} | Senha: ${HOUSE_INFO.wifi.password}`,
      icon: Wifi,
      isWifi: true
    },
    {
      title: "Salas",
      desc: "Para sua comodidade, nossa casa tem duas salas: uma de estar e uma de TV, um alpendre e uma garagem para dois veículos pequenos.",
      icon: Home,
    },
    {
      title: "Sala de TV",
      desc: "Tv Lcd 55”, Rack de madeira, Aparador com vaso, Duas poltronas, Um sofá de três lugares e Ventilador de teto.",
      icon: Tv,
    },
    {
      title: "Cozinha",
      desc: "Fogão de seis bocas com forno, eletrodomésticos, mesa para refeições de seis lugares, rica em armários, air fryer e refrigerador duplex.",
      icon: Utensils,
    },
    {
      title: "Quartos",
      desc: "3 quartos com ventilador de teto: Suíte (Cama casal, AC, TV 32\"), Quarto 1 (Cama casal) e Quarto 2 (Duas camas solteiro).",
      icon: Bed,
    },
    {
      title: "Área Externa",
      desc: "Jardim ornamental e frutífero, área com mesa e cadeiras, rede, churrasqueira portátil a carvão e ducha.",
      icon: TreePine,
    }
  ];

  return (
    <div className="space-y-6 flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="font-serif text-3xl font-bold">A Casa</h2>
          <p className="text-[#1a1a1a]/60 text-sm">Estrutura completa para sua estadia.</p>
        </div>
        <div className="bg-[#d4a373] px-4 py-2 rounded-2xl text-white flex items-center gap-2 shadow-sm">
          <Zap className="w-4 h-4" />
          <span className="font-bold text-xs uppercase tracking-wider">Tensão 220V</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[65vh] pr-1">
        {rooms.map((room, idx) => (
          <div 
            key={idx}
            className="bg-white p-5 rounded-3xl shadow-sm border border-black/5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-[#f5f2ed] rounded-xl flex items-center justify-center">
                <room.icon className="text-[#d4a373] w-5 h-5" />
              </div>
              {room.isWifi && (
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(HOUSE_INFO.wifi.password);
                    alert('Senha copiada!');
                  }}
                  className="px-3 py-1 bg-[#f5f2ed] rounded-lg text-[9px] font-bold uppercase text-[#d4a373] hover:bg-[#d4a373] hover:text-white transition-all shadow-sm"
                >
                  Copiar Senha
                </button>
              )}
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold mb-1">{room.title}</h3>
              <p className="text-[#1a1a1a]/60 text-[10px] leading-relaxed">{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RulesSection() {
  return (
    <div className="space-y-6 flex flex-col flex-1">
      <div className="bg-[#d4a373] p-6 rounded-[2rem] text-white flex items-center gap-4">
        <AlertTriangle className="w-8 h-8 shrink-0" />
        <div>
          <h2 className="font-serif text-2xl font-bold">Regras</h2>
          <p className="text-white/80 text-xs">Diretrizes para uma boa convivência.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-black/5 flex-1 overflow-y-auto max-h-[60vh]">
        <div className="grid grid-cols-1 gap-3">
          {HOUSE_INFO.rules.map((rule, idx) => (
            <div key={idx} className="flex items-start gap-3 p-2 hover:bg-[#f5f2ed] rounded-xl transition-colors">
              <div className="w-1.5 h-1.5 bg-[#d4a373] rounded-full mt-1.5 shrink-0"></div>
              <span className="text-[#1a1a1a]/70 font-medium text-[11px] leading-snug">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocalGuideSection() {
  const categories = [
    { id: 'shoppings', label: 'Shoppings', icon: MapPin },
    { id: 'gastronomy', label: 'Comer', icon: Utensils },
    { id: 'tourism', label: 'Lazer', icon: TreePine },
    { id: 'health', label: 'Saúde', icon: ShieldAlert },
    { id: 'banks', label: 'Bancos', icon: Info },
    { id: 'services', label: 'Serviços', icon: Info },
  ];

  const [activeCat, setActiveCat] = useState('shoppings');

  return (
    <div className="space-y-6 flex flex-col flex-1">
      <div className="space-y-1">
        <h2 className="font-serif text-3xl font-bold">Guia Local</h2>
        <p className="text-[#1a1a1a]/60 text-sm">O melhor do Setor Coimbra.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 rounded-full text-[10px] font-bold transition-all ${
              activeCat === cat.id 
                ? 'bg-[#d4a373] text-white shadow-md' 
                : 'bg-white text-[#1a1a1a]/60 border border-black/5'
            }`}
          >
            <cat.icon className="w-3 h-3" />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[55vh] pr-1">
        {LOCAL_GUIDE[activeCat].map((place, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-3xl shadow-sm border border-black/5 flex flex-col"
          >
            <h3 className="font-serif text-sm font-bold mb-1 text-[#d4a373]">{place.name}</h3>
            <p className="text-[10px] text-[#1a1a1a]/60 leading-relaxed mb-3 flex-1">{place.description}</p>
            <div className="space-y-2 pt-3 border-t border-black/5">
              {place.address && (
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[9px] text-[#1a1a1a]/40 hover:text-[#d4a373] transition-colors"
                >
                  <MapPin className="w-3 h-3 shrink-0" />
                  <span>{place.address}</span>
                </a>
              )}
              {place.phone && (
                <a 
                  href={`tel:${place.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-2 text-[9px] text-[#1a1a1a]/40 hover:text-[#d4a373] transition-colors"
                >
                  <Phone className="w-3 h-3 shrink-0" />
                  <span>{place.phone}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmergencySection() {
  return (
    <div className="space-y-6 flex flex-col flex-1">
      <div className="space-y-1">
        <h2 className="font-serif text-3xl font-bold">Emergência</h2>
        <p className="text-[#1a1a1a]/60 text-sm">Contatos úteis.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto max-h-[50vh] pr-1">
        {HOUSE_INFO.emergencies.map((contact, idx) => (
          <a
            key={idx}
            href={`tel:${contact.phone.replace(/\D/g, '')}`}
            className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 group hover:border-[#d4a373] transition-colors"
          >
            <div className="w-10 h-10 bg-[#f5f2ed] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#d4a373] group-hover:text-white transition-all">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold leading-tight">{contact.name}</p>
              <p className="text-sm font-serif font-bold group-hover:text-[#d4a373] transition-colors">{contact.phone}</p>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
}
