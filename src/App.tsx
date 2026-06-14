/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, FormEvent } from 'react';
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
  MessageCircle,
  MessageSquare,
  Send,
  Camera,
  Check,
  Mail,
  Globe,
  User,
  Search
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const tabs = [
    { id: 'welcome', label: 'Início', icon: Home },
    { id: 'checkin', label: 'Check-in', icon: Key },
    { id: 'checkout', label: 'Checkout', icon: LogOut },
    { id: 'house', label: 'A Casa', icon: Info },
    { id: 'rules', label: 'Regras', icon: ShieldAlert },
    { id: 'local', label: 'Guia Local', icon: MapPin },
    { id: 'emergency', label: 'SOS', icon: Phone },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    scrollToTop();
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#f1fcf4] text-[#1a1a1a] font-sans selection:bg-[#009c3b] selection:text-[#ffdf00] pb-12 overflow-x-clip">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes wind {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(4px) rotate(3deg); }
        }
        .animate-wind {
          animation: wind 1.5s ease-in-out infinite;
          transform-origin: top center;
        }
        @keyframes bounce-ball {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-12px) scaleY(0.95); }
        }
        .animate-bounce-ball {
          animation: bounce-ball 2s ease-in-out infinite;
        }
        @keyframes float-cup {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        .animate-float-cup {
          animation: float-cup 2.5s ease-in-out infinite;
        }
        @keyframes toot-vuvuzela {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(-5deg) scale(1.1); }
        }
        .animate-toot {
          animation: toot-vuvuzela 1.8s ease-in-out infinite;
        }
        @keyframes slide-up-fade {
          0% { transform: translateY(20px) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }
        .animate-celebrate {
          animation: slide-up-fade 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
      `}</style>

      {/* Sticky Top Header with Brand & Compact Navigation Cards */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-yellow-400 py-3 px-4 lg:px-8 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-3 relative">
        {/* Dynamic Brazil String Flags (Bandeirolas) */}
        <div className="absolute top-full left-0 right-0 h-3 flex overflow-hidden pointer-events-none z-10 select-none">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="w-4 h-full shrink-0 animate-wind"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                backgroundColor: i % 3 === 0 ? '#009c3b' : i % 3 === 1 ? '#ffdf00' : '#002776',
                animationDelay: `${i * 0.05}s`,
                animationDuration: '1.4s'
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between w-full md:w-auto shrink-0">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Logo className="w-8 h-8 lg:w-9 lg:h-9 relative z-10" />
              {/* Golden background aura */}
              <div className="absolute inset-x-[-4px] inset-y-[-4px] bg-yellow-400/20 rounded-full blur-[4px]"></div>
            </div>
            <div>
              <span className="font-serif font-bold text-lg lg:text-xl tracking-tight text-[#1a1a1a] block leading-none">Casa Coimbra</span>
              <span className="text-[9px] uppercase tracking-wider text-[#009c3b] font-extrabold block mt-0.5 flex items-center gap-1">
                Guia Digital de Boas-Vindas <span className="text-xs">🇧🇷</span>
              </span>
            </div>
          </div>
          {/* Mobile Search Icon */}
          <div className="flex items-center gap-1 md:hidden">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="p-2 hover:bg-green-500/10 rounded-full transition-colors text-[#009c3b] active:scale-95"
              title="Pesquisar no Guia"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Compact Horizontal Navigation Cards */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 md:mx-0 md:px-0 w-full md:max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-200 shrink-0 border text-[11px] lg:text-xs font-bold uppercase tracking-wider ${
                activeTab === tab.id 
                  ? 'bg-[#009c3b] text-[#ffdf00] border-transparent shadow-md shadow-green-700/20 scale-102 font-extrabold ring-1 ring-yellow-400' 
                  : 'bg-white border-black/5 text-[#1a1a1a]/70 hover:bg-green-500/5 hover:border-green-500/20 hover:text-[#009c3b]'
              }`}
            >
              <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-[#ffdf00]' : 'text-[#009c3b]'}`} />
              <span>{tab.label}</span>
            </button>
          ))}
          
          {/* Desktop Search Button */}
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center justify-center p-2.5 bg-yellow-400/10 border border-yellow-400/25 rounded-xl text-[#009c3b] hover:text-[#002776] hover:bg-yellow-400/20 transition-colors shrink-0 active:scale-95"
            title="Pesquisar no Guia"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 lg:p-10 max-w-6xl mx-auto min-h-screen flex flex-col w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col"
          >
            {activeTab === 'welcome' && (
              <WelcomeSection 
                onNavigate={setActiveTab} 
                tabs={tabs} 
                onSearchClick={() => setIsSearchOpen(true)}
              />
            )}
            {activeTab === 'checkin' && <CheckInSection />}
            {activeTab === 'checkout' && <CheckOutSection />}
            {activeTab === 'house' && <HouseSection />}
            {activeTab === 'rules' && <RulesSection />}
            {activeTab === 'local' && <LocalGuideSection />}
            {activeTab === 'emergency' && <EmergencySection />}
            {activeTab === 'feedback' && <FeedbackSection />}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-auto pt-12 pb-8 border-t border-black/5">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-[#009c3b] font-bold">Endereço da Propriedade</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Gertrudes+26+Setor+Coimbra+Goiania+GO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1a1a1a]/60 hover:text-[#009c3b] transition-colors flex items-center justify-center md:justify-start gap-2 animate-wave-flag"
                >
                  <MapPin className="w-3 h-3 text-[#009c3b]" />
                  Rua Santa Gertrudes (antiga 252), nº 26, Setor Coimbra, Goiânia/GO
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-[#009c3b] font-bold">Corretor Responsável</p>
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#1a1a1a]/80 font-bold">
                  <User className="w-3 h-3 text-[#009c3b]" />
                  WELLINGTON RODOVALHO FONSECA
                </div>
                <div className="text-[10px] text-[#1a1a1a]/40 space-x-3">
                  <span>CAEPF: 269.462.701/001-49</span>
                  <span>CRECI: GO 42695</span>
                  <span>CNAI: 54826</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <p className="text-[10px] uppercase tracking-widest text-[#009c3b] font-bold">Contato & Links</p>
                <div className="flex flex-col gap-2 items-center md:items-start">
                  <a href="https://www.alugagoias.com.br" target="_blank" rel="noopener noreferrer" className="text-xs text-[#1a1a1a]/60 hover:text-[#009c3b] flex items-center gap-2">
                    <Globe className="w-3 h-3 text-[#009c3b]" />
                    www.alugagoias.com.br
                  </a>
                  <a href="https://wa.me/5562991514568" className="text-xs text-[#1a1a1a]/60 hover:text-[#009c3b] flex items-center gap-2">
                    <MessageCircle className="w-3 h-3 text-[#009c3b]" />
                    (62) 99151-4568
                  </a>
                  <a href="mailto:contato@alugagoias.com.br" className="text-xs text-[#1a1a1a]/60 hover:text-[#009c3b] flex items-center gap-2">
                    <Mail className="w-3 h-3 text-[#009c3b]" />
                    contato@alugagoias.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-black/5 text-center">
            <p className="text-[9px] text-[#1a1a1a]/20 uppercase tracking-widest">© {new Date().getFullYear()} Casa Coimbra - Copa do Mundo 🇧🇷 Todos os direitos reservados</p>
          </div>
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
            className="w-14 h-14 bg-[#009c3b] text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-yellow-400"
          >
            <Home className="w-6 h-6 text-[#ffdf00]" />
          </motion.button>
        )}
        <motion.a
          href="https://wa.me/5562991514568"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-white"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </div>

      {/* Desktop WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <motion.a
          href="https://wa.me/5562991514568"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-2xl border-2 border-[#009c3b] group"
        >
          <div className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-md">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="font-bold text-sm text-[#104e1c]">Fale com o Anfitrião</span>
        </motion.a>
      </div>

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onNavigate={(tabId) => {
          setActiveTab(tabId);
          setIsSearchOpen(false);
          setIsMenuOpen(false);
        }}
      />
    </div>
  );
}

function WelcomeSection({ onNavigate, tabs, onSearchClick }: { onNavigate: (id: string) => void, tabs: any[], onSearchClick: () => void }) {
  const [celebrations, setCelebrations] = useState<{ id: number; text: string; left: string }[]>([]);
  const [celebrationCount, setCelebrationCount] = useState(0);

  const playVuvuzelaSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
      
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      // Bb2 (approx 116.5 Hz) and Bb3 (approx 233 Hz) which are vuvuzela resonant pitches
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(116.54, audioCtx.currentTime);
      
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(233.08, audioCtx.currentTime);
      osc2.detune.setValueAtTime(18, audioCtx.currentTime); // buzzy detune
      
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(850, audioCtx.currentTime);
      
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      // Volume envelope: clean buzzy toot!
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.25, audioCtx.currentTime + 0.08);
      gainNode.gain.setValueAtTime(0.25, audioCtx.currentTime + 0.6);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.0);
      
      osc1.start();
      osc2.start();
      osc1.stop(audioCtx.currentTime + 1.1);
      osc2.stop(audioCtx.currentTime + 1.1);
    } catch (e) {
      console.warn("AudioContext block or not supported", e);
    }
  };

  const triggerCelebrate = () => {
    playVuvuzelaSound();
    
    // Add floating GOL elements
    const phrases = ["GOL!!! ⚽", "RUMO AO HEXA! 🏆", "BRASIL! 🇧🇷", "VUUUUVU! 🎺", "É CAMPEÃO! ⭐", "COPA 2026! ⚽"];
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    const newId = celebrationCount;
    setCelebrationCount(c => c + 1);

    const randomLeft = `${15 + Math.random() * 70}%`;
    setCelebrations(prev => [...prev, { id: newId, text: phrase, left: randomLeft }]);

    // Remove celebration element after animation completes
    setTimeout(() => {
      setCelebrations(prev => prev.filter(c => c.id !== newId));
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1 space-y-8 py-6 lg:py-4">
      {/* Absolute floating celebrations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
        <AnimatePresence>
          {celebrations.map((cb) => (
            <div
              key={cb.id}
              className="absolute text-xl md:text-3xl font-extrabold text-green-600 bg-yellow-300 border-2 border-green-600 px-4 py-2 rounded-full shadow-lg animate-celebrate select-none block"
              style={{ left: cb.left, top: '40%' }}
            >
              {cb.text}
            </div>
          ))}
        </AnimatePresence>
      </div>

      <div className="text-center space-y-2">
        <div className="relative inline-block">
          <Logo className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-3" />
          <span className="absolute bottom-1 right-1 text-3xl animate-bounce-ball inline-block">⚽</span>
        </div>
        <h2 className="font-serif text-4xl lg:text-5xl font-extrabold text-[#1a1a1a] tracking-tight">Casa Coimbra</h2>
        <div className="inline-flex items-center gap-2 bg-[#009c3b] px-4 py-1.5 rounded-full text-[#ffdf00] font-black text-xs uppercase tracking-widest shadow-md">
          <span>Seja Bem-Vindo!</span>
          <span className="text-sm">🇧🇷</span>
          <span>Rumo ao Hexa!</span>
        </div>
        
        <a 
          href="https://www.google.com/maps/search/?api=1&query=Rua+Santa+Gertrudes+26+Setor+Coimbra+Goiania+GO"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-[10px] lg:text-xs text-[#009c3b] hover:text-[#002776] font-bold transition-colors mt-3"
        >
          <MapPin className="w-3.5 h-3.5 animate-bounce-ball text-[#009c3b]" />
          <span className="underline decoration-dotted">Rua Santa Gertrudes (antiga 252), nº 26, Setor Coimbra, Goiânia/GO</span>
        </a>
      </div>

      {/* Prominent Body Search Box - Copa Styled */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-xl px-4"
      >
        <div 
          onClick={onSearchClick}
          className="bg-white border-2 border-[#009c3b]/30 p-4 lg:p-5 rounded-[2rem] shadow-xl shadow-green-900/5 flex items-center gap-4 cursor-pointer group hover:border-[#009c3b] hover:shadow-green-900/10 transition-all ring-1 ring-transparent hover:ring-yellow-400"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#ffdf00]/20 rounded-2xl flex items-center justify-center text-[#009c3b] group-hover:bg-[#009c3b] group-hover:text-[#ffdf00] transition-all duration-300">
            <Search className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm lg:text-base font-black text-[#1a1a1a] mb-0.5">O que você procura?</p>
            <p className="text-[10px] lg:text-xs text-[#1a1a1a]/40 font-bold">Ex: wi-fi, regras, check-in, farmácia...</p>
          </div>
        </div>
      </motion.div>

      {/* Soccer/Copa interactive widgets box */}
      <div className="bg-gradient-to-br from-[#009c3b]/10 to-[#ffdf00]/15 w-full max-w-xl p-6 rounded-[2.5rem] border-2 border-[#009c3b]/10 flex flex-col items-center justify-center space-y-4 shadow-sm text-center relative overflow-hidden">
        {/* Background visual watermarks */}
        <div className="absolute top-[-10px] left-[-10px] text-5xl opacity-10 select-none">🏆</div>
        <div className="absolute bottom-[-10px] right-[-10px] text-5xl opacity-10 select-none">⚽</div>

        <h3 className="font-serif text-lg font-black text-[#104e1c] flex items-center gap-2">
          <span>Estação da Torcida</span>
          <span>📣</span>
        </h3>
        
        <p className="text-xs text-slate-700 max-w-[280px] leading-relaxed font-semibold">
          Sinta a vibração da Copa na Casa Coimbra! Navegue pelas abas no topo ou clique para soprar a vuvuzela!
        </p>

        <div className="flex items-center justify-center gap-6 pt-2">
          {/* Animated bouncing Soccer ball */}
          <div className="flex flex-col items-center space-y-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-2xl animate-bounce-ball select-none cursor-grab active:cursor-grabbing border-2 border-[#009c3b]" title="Bola Oficial">
              ⚽
            </div>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#009c3b]">Bola</span>
          </div>

          {/* Golden Cup / Trophy */}
          <div className="flex flex-col items-center space-y-1">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-md text-2xl animate-float-cup select-none border-2 border-[#ffdf00]" title="Taça da Copa">
              🏆
            </div>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-[#002776]">Taça</span>
          </div>

          {/* Clickable Vuvuzela */}
          <div className="flex flex-col items-center space-y-1">
            <button 
              onClick={triggerCelebrate}
              className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg text-2xl animate-toot active:scale-90 transition-all border-2 border-yellow-400 hover:bg-blue-700" 
              title="Sopre a Vuvuzela!"
            >
              🎺
            </button>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-800 animate-pulse">Soprar!</span>
          </div>
        </div>

        <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest pt-1">
          Clique nos botões do topo para ver o guia completo!
        </div>
      </div>
    </div>
  );
}

function CheckInSection() {
  return (
    <div className="space-y-8 flex flex-col flex-1">
      <div className="space-y-2">
        <h2 className="font-serif text-3xl font-black text-[#009c3b] flex items-center gap-2">
          <span>Check-in & Acesso</span>
          <span>🗝️</span>
        </h2>
        <p className="text-[#1a1a1a]/60 text-sm">Instruções para sua entrada garantida.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#009c3b]/10 rounded-xl flex items-center justify-center">
                <Key className="text-[#009c3b] w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold">Entrada</h3>
            </div>
            <div className="bg-[#009c3b] px-3 py-1 rounded-full text-[#ffdf00] text-[10px] font-black uppercase tracking-wider">
              {HOUSE_INFO.checkIn.time}
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-bold text-[#009c3b] text-xs uppercase tracking-wider">Portão</h4>
              <p className="text-[#1a1a1a]/70 leading-relaxed text-xs bg-[#f1fcf4] p-4 rounded-xl border-l-4 border-[#009c3b]">
                {HOUSE_INFO.checkIn.gate}
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#009c3b] text-xs uppercase tracking-wider">Chaves</h4>
              <p className="text-[#1a1a1a]/70 leading-relaxed text-xs bg-[#f1fcf4] p-4 rounded-xl border-l-4 border-[#ffdf00]">
                {HOUSE_INFO.checkIn.keys}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#002776] p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-center items-center text-center space-y-4 border-2 border-yellow-400">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center animate-bounce-ball">
            <Clock className="w-8 h-8 text-[#ffdf00]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold">Horário de Check-in</h3>
            <p className="text-[#ffdf00] font-black text-2xl">{HOUSE_INFO.checkIn.time}</p>
          </div>
          <p className="text-white/70 text-xs max-w-[200px]">Seja bem-vindo à Casa Coimbra! Aproveite a Copa do Mundo com muito conforto.</p>
        </div>
      </div>
    </div>
  );
}

function CheckOutSection() {
  return (
    <div className="space-y-8 flex flex-col flex-1">
      <div className="space-y-2">
        <h2 className="font-serif text-3xl font-black text-[#009c3b] flex items-center gap-2">
          <span>Checkout</span>
          <span>👋</span>
        </h2>
        <p className="text-[#1a1a1a]/60 text-sm">Instruções para sua saída tranquila.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <div className="bg-[#002776] p-8 rounded-[2.5rem] shadow-xl text-white space-y-6 border-2 border-yellow-400">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <LogOut className="text-[#ffdf00] w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold">Saída</h3>
            </div>
            <div className="bg-yellow-400 px-3 py-1 rounded-full text-[#002776] text-[10px] font-black uppercase tracking-wider">
              {HOUSE_INFO.checkOut.time}
            </div>
          </div>

          <div className="space-y-3">
            {HOUSE_INFO.checkOut.rules.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-white/90 leading-snug font-bold">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col justify-center items-center text-center space-y-4">
          <div className="w-16 h-16 bg-[#f1fcf4] rounded-2xl flex items-center justify-center animate-bounce-ball">
            <Clock className="w-8 h-8 text-[#009c3b]" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold">Horário Limite</h3>
            <p className="text-[#009c3b] font-black text-2xl">{HOUSE_INFO.checkOut.time}</p>
          </div>
          <p className="text-[#1a1a1a]/40 text-xs max-w-[200px]">Agradecemos sua preferência na estadia e desejamos um ótimo retorno!</p>
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
          <h2 className="font-serif text-3xl font-black text-[#009c3b]">A Casa</h2>
          <p className="text-[#1a1a1a]/60 text-sm">Estrutura completa para sua estadia.</p>
        </div>
        <div className="bg-[#009c3b] px-4 py-2 rounded-2xl text-[#ffdf00] flex items-center gap-2 shadow-sm font-black text-xs ring-1 ring-yellow-400 animate-pulse">
          <Zap className="w-4 h-4" />
          <span className="uppercase tracking-wider">Tensão 220V</span>
        </div>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3">
        {rooms.map((room, idx) => (
          <div 
            key={idx}
            className="bg-white p-3 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between hover:border-[#009c3b] transition-all duration-200 gap-2 hover:shadow-md"
          >
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#f1fcf4] flex items-center justify-center shrink-0 mt-0.5">
                <room.icon className="text-[#009c3b] w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mt-0.5 gap-2">
                  <h3 className="font-serif text-[13px] font-black text-slate-900 truncate">{room.title}</h3>
                  {room.isWifi && (
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(HOUSE_INFO.wifi.password);
                        alert('Senha copiada!');
                      }}
                      className="px-2 py-0.5 bg-yellow-400 text-[#002776] rounded text-[8px] font-black uppercase hover:bg-[#009c3b] hover:text-white transition-all shadow-sm shrink-0"
                    >
                      Senha
                    </button>
                  )}
                </div>
                <p className="text-[#1a1a1a]/70 text-[10px] leading-relaxed font-bold mt-1">{room.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RulesSection() {
  const getRuleEmoji = (rule: string): string => {
    const r = rule.toLowerCase();
    if (r.includes('capacidade') || r.includes('hóspedes') || r.includes('pessoas')) return "👥";
    if (r.includes('visita')) return "🚫";
    if (r.includes('evento') || r.includes('festa')) return "🎉";
    if (r.includes('vizinho') || r.includes('som') || r.includes('silêncio') || r.includes('barulho')) return "🤫";
    if (r.includes('pet') || r.includes('animal') || r.includes('cachorror') || r.includes('gato')) return "🐾";
    if (r.includes('criança')) return "👶";
    if (r.includes('fumar') || r.includes('cigarro')) return "🚭";
    if (r.includes('vasilha') || r.includes('louça') || r.includes('suja') || r.includes('multa')) return "🍽️";
    if (r.includes('lixo')) return "🗑️";
    if (r.includes('máquina') || r.includes('lavar')) return "🧺";
    if (r.includes('aparelho') || r.includes('desligar') || r.includes('ar condicionado') || r.includes('luz')) return "💡";
    if (r.includes('churrasqueira') || r.includes('churrasco') || r.includes('quintal')) return "🍖";
    return "📋";
  };

  return (
    <div className="space-y-6 flex flex-col flex-1">
      <div className="bg-[#009c3b] p-6 rounded-[2rem] text-[#ffdf00] flex items-center gap-4 border-2 border-yellow-400">
        <AlertTriangle className="w-8 h-8 shrink-0 text-[#ffdf00]" />
        <div>
          <h2 className="font-serif text-2xl font-black">Regras da Casa</h2>
          <p className="text-white/90 text-xs font-semibold">Diretrizes importantes para uma boa convivência.</p>
        </div>
      </div>

      <div className="bg-white/50 p-4 lg:p-6 rounded-[2rem] shadow-sm border border-black/5 flex-1 overflow-y-auto max-h-[60vh] no-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {HOUSE_INFO.rules.map((rule, idx) => {
            const emoji = getRuleEmoji(rule);
            return (
              <div 
                key={idx} 
                className="bg-white p-3.5 rounded-2xl border-2 border-[#009c3b]/10 hover:border-[#009c3b] transition-all duration-200 flex items-start gap-3 shadow-sm hover:shadow-md group"
              >
                <div className="text-xl shrink-0 p-2 bg-[#f1fcf4] rounded-xl border border-[#009c3b]/10 group-hover:bg-[#ffdf00]/20 group-hover:border-yellow-400 transition-all flex items-center justify-center w-11 h-11">
                  {emoji}
                </div>
                <div className="flex-1 min-w-0 mt-0.5">
                  <p className="text-[#1a1a1a]/80 font-bold text-xs leading-snug group-hover:text-slate-900 transition-colors">
                    {rule}
                  </p>
                </div>
              </div>
            );
          })}
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
        <h2 className="font-serif text-3xl font-black text-[#009c3b]">Guia Local</h2>
        <p className="text-[#1a1a1a]/60 text-sm">O melhor do Setor Coimbra na torcida!</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 rounded-full text-[10px] font-black transition-all ${
              activeCat === cat.id 
                ? 'bg-[#009c3b] text-[#ffdf00] shadow-md ring-1 ring-yellow-400' 
                : 'bg-white text-[#1a1a1a]/60 border border-black/5 hover:bg-green-500/5'
            }`}
          >
            <cat.icon className="w-3 h-3 text-[#009c3b]" />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto max-h-[55vh] pr-1">
        {LOCAL_GUIDE[activeCat].map((place, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-3xl shadow-sm border border-black/5 flex flex-col hover:border-[#009c3b] transition-all"
          >
            <h3 className="font-serif text-sm font-black mb-1 text-[#009c3b]">{place.name}</h3>
            <p className="text-[10px] text-[#1a1a1a]/70 font-semibold leading-relaxed mb-3 flex-1">{place.description}</p>
            <div className="space-y-2 pt-3 border-t border-black/5">
              {place.address && (
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name} ${place.address}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[9px] text-[#1a1a1a]/50 hover:text-[#009c3b] transition-colors"
                >
                  <MapPin className="w-3 h-3 shrink-0 text-[#009c3b]" />
                  <span>{place.address}</span>
                </a>
              )}
              {place.phone && (
                <a 
                  href={`tel:${place.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-2 text-[9px] text-[#1a1a1a]/50 hover:text-[#009c3b] transition-colors"
                >
                  <Phone className="w-3 h-3 shrink-0 text-[#009c3b]" />
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
        <h2 className="font-serif text-3xl font-black text-[#009c3b] flex items-center gap-2">
          <span>SOS</span>
          <span className="text-red-500 animate-pulse">🚨</span>
        </h2>
        <p className="text-[#1a1a1a]/60 text-sm">Contatos de urgência úteis para qualquer momento.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-auto max-h-[50vh] pr-1">
        {HOUSE_INFO.emergencies.map((contact, idx) => (
          <a
            key={idx}
            href={`tel:${contact.phone.replace(/\D/g, '')}`}
            className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 flex items-center gap-4 group hover:border-[#009c3b] transition-colors"
          >
            <div className="w-10 h-10 bg-[#f1fcf4] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#009c3b] group-hover:text-white transition-all">
              <Phone className="w-4 h-4 text-[#009c3b]" />
            </div>
            <div className="text-left">
              <p className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold leading-tight">{contact.name}</p>
              <p className="text-sm font-serif font-black text-slate-800 group-hover:text-[#009c3b] transition-colors">{contact.phone}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function FeedbackSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    type: 'Feedback',
    name: '',
    message: '',
  });
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const data = new FormData();
    data.append('type', formData.type);
    data.append('name', formData.name);
    data.append('message', formData.message);
    data.append('date', new Date().toLocaleString('pt-BR'));
    if (image) {
      data.append('image', image);
    }

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ type: 'Feedback', name: '', message: '' });
        setImage(null);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-6 flex flex-col flex-1 max-w-2xl mx-auto w-full">
      <div className="space-y-1">
        <h2 className="font-serif text-3xl font-black text-[#009c3b]">Feedback & Contato</h2>
        <p className="text-[#1a1a1a]/60 text-sm">Elogios, dúvidas ou sugestões? Adoraríamos ouvir você.</p>
      </div>

      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 text-center space-y-4"
        >
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white">
            <Check className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-2xl font-bold">Obrigado!</h3>
          <p className="text-[#1a1a1a]/60">Sua mensagem foi enviada com sucesso e será analisada pelo anfitrião.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="px-6 py-2 bg-[#009c3b] text-[#ffdf00] rounded-full font-black text-sm ring-1 ring-yellow-400"
          >
            Enviar outra mensagem
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 lg:p-8 rounded-[2.5rem] shadow-sm border border-black/5 space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold ml-1">Tipo de Mensagem</label>
              <select 
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-[#f1fcf4] border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#009c3b] transition-all font-bold text-slate-800"
                required
              >
                <option>Elogio</option>
                <option>Dúvida</option>
                <option>Problema</option>
                <option>Sugestão</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold ml-1">Seu Nome (Opcional)</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Como podemos te chamar?"
                className="w-full bg-[#f1fcf4] border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#009c3b] transition-all font-bold text-slate-800"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold ml-1">Mensagem</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escreva aqui..."
                rows={4}
                className="w-full bg-[#f1fcf4] border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#009c3b] transition-all resize-none font-bold text-slate-800"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 font-bold ml-1">Anexar Imagem (Opcional)</label>
              <div className="relative">
                <input 
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="hidden"
                  id="image-upload"
                />
                <label 
                  htmlFor="image-upload"
                  className="flex items-center gap-3 w-full bg-[#f1fcf4] border-dashed border-2 border-green-200 rounded-2xl px-4 py-3 text-sm cursor-pointer hover:bg-green-500/5 transition-all"
                >
                  <Camera className="w-5 h-5 text-[#009c3b]" />
                  <span className="text-[#1a1a1a]/60 truncate font-semibold">
                    {image ? image.name : "Toque para selecionar uma foto"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {status === 'error' && (
            <p className="text-red-500 text-xs font-bold text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
          )}

          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#009c3b] text-[#ffdf00] py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-green-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 border-2 border-yellow-400"
          >
            {status === 'loading' ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-[#ffdf00]" />
                  <span>Enviar Mensagem 🇧🇷</span>
                </div>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

interface SearchItem {
  title: string;
  content: string;
  tabId: string;
  catId?: string;
}

function SearchOverlay({ isOpen, onClose, onNavigate }: { isOpen: boolean, onClose: () => void, onNavigate: (id: string, cat?: string) => void }) {
  const [query, setQuery] = useState('');
  
  const searchableContent: SearchItem[] = [
    { title: 'Check-in Acesso Portão', content: HOUSE_INFO.checkIn.gate, tabId: 'checkin' },
    { title: 'Cofre de Chaves', content: HOUSE_INFO.checkIn.keys, tabId: 'checkin' },
    { title: 'Horário Check-in', content: HOUSE_INFO.checkIn.time, tabId: 'checkin' },
    { title: 'Horário Checkout', content: HOUSE_INFO.checkOut.time, tabId: 'checkout' },
    ...HOUSE_INFO.checkOut.rules.map(r => ({ title: 'Regra de Checkout', content: r, tabId: 'checkout' })),
    ...HOUSE_INFO.rules.map(r => ({ title: 'Regra da Casa', content: r, tabId: 'rules' })),
    ...HOUSE_INFO.emergencies.map(e => ({ title: `Emergência: ${e.name}`, content: e.phone, tabId: 'emergency' })),
    { title: 'Wi-Fi Senha', content: `${HOUSE_INFO.wifi.network} ${HOUSE_INFO.wifi.password}`, tabId: 'house' },
    { title: 'Salas', content: "Estar, TV, alpendre, garagem", tabId: 'house' },
    { title: 'Sala de TV', content: "TV 55, Poltronas, Ventilador", tabId: 'house' },
    { title: 'Cozinha', content: "Fogão, Air Fryer, Geladeira", tabId: 'house' },
    { title: 'Quartos', content: "3 quartos, Ar Condicionado, Ventiladores", tabId: 'house' },
    { title: 'Área Externa', content: "Jardim, Churrasqueira, Ducha", tabId: 'house' },
    { title: 'Tensão Elétrica', content: "220V", tabId: 'house' },
  ];

  // Add Local Guide items
  Object.entries(LOCAL_GUIDE).forEach(([catId, places]) => {
    places.forEach(place => {
      searchableContent.push({ 
        title: place.name, 
        content: `${place.description} ${place.address || ''}`, 
        tabId: 'local',
        catId: catId
      });
    });
  });

  const filteredResults = query.trim() === '' 
    ? [] 
    : searchableContent.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.content.toLowerCase().includes(query.toLowerCase())
      );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm p-4 lg:p-20 flex flex-col items-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="bg-[#f1fcf4] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[70vh] lg:h-auto max-h-[80vh] border-2 border-[#009c3b]"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-black/5 bg-white flex items-center gap-3">
              <Search className="w-5 h-5 text-[#009c3b]" />
              <input 
                autoFocus
                type="text"
                placeholder="O que você precisa saber?"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none focus:ring-0 text-lg lg:text-xl font-bold placeholder:text-[#1a1a1a]/20 text-slate-900"
              />
              <button 
                onClick={onClose}
                className="p-2 hover:bg-green-500/10 rounded-full transition-colors text-[#009c3b]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
              {query.trim() === '' ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-3 p-10">
                  <div className="w-16 h-16 bg-white/55 rounded-full flex items-center justify-center text-[#009c3b]">
                    <Search className="w-8 h-8 opacity-40 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#009c3b] text-base">Pesquisa Inteligente da Torcida 🇧🇷</h3>
                    <p className="text-xs text-[#1a1a1a]/40 font-bold mt-1">Ex: "wifi", "telefone", "churrasqueira", "hospital"</p>
                  </div>
                </div>
              ) : filteredResults.length > 0 ? (
                filteredResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(result.tabId)}
                    className="w-full bg-white p-4 rounded-2xl border border-black/5 hover:border-[#009c3b] hover:shadow-md transition-all text-left flex items-start justify-between group"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#009c3b] bg-[#009c3b]/10 px-2 py-0.5 rounded-full">
                          {result.tabId}
                        </span>
                        <h4 className="font-bold text-sm lg:text-base text-[#1a1a1a]">{result.title}</h4>
                      </div>
                      <p className="text-xs text-[#1a1a1a]/60 line-clamp-2 leading-relaxed font-semibold">{result.content}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#009c3b] opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center opacity-70">
                  <Logo className="w-16 h-16 grayscale mb-4" />
                  <p className="font-extrabold text-slate-700">Nenhum resultado encontrado para "{query}"</p>
                  <p className="text-xs text-slate-500 font-semibold mt-1">Tente termos mais simples.</p>
                </div>
              )}
            </div>
            
            <div className="p-4 bg-white/50 border-t border-black/5 text-center">
              <p className="text-[10px] text-[#009c3b] uppercase tracking-widest font-black">Pesquisando no Guia Casa Coimbra Rumo ao Hexa! 🏆</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

