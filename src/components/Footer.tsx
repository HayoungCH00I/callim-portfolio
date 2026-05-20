import { Mail, Instagram, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '../images/logo.png';
import threadsIcon from '../images/icons/threads.png';
import smartstoreIcon from '../images/icons/smartstore.png';

export const Footer = () => (
  <footer className="bg-brand-bg pt-14 md:pt-24 pb-8 md:pb-12 border-t border-brand-ink/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
      {/* BRAND SECTION */}
      <div className="md:col-span-2 space-y-6 md:space-y-8">
        <div className="flex items-center">
          <img src={logoImage} alt="CALLI-M" className="h-8 md:h-12 w-auto" />
        </div>
        <p className="text-sm opacity-60 leading-relaxed">
          <span className="md:hidden">아날로그의 온기를 전하는 감성 디자인 에이전시</span>
          <span className="hidden md:inline md:whitespace-nowrap">
            아날로그의 온기를 현대적 디자인 솔루션으로 풀어내는 감성 디자인 에이전시.
          </span>
        </p>
        <div className="flex gap-3">
          <a 
            href="https://www.instagram.com/callim_official/" 
            target="_blank" 
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a 
            href="https://www.threads.com/@callim_official" 
            target="_blank" 
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors"
          >
            <img src={threadsIcon} alt="Threads" className="w-3.5 h-3.5 object-contain" />
          </a>
          <a 
            href="https://smartstore.naver.com/callim1014" 
            target="_blank" 
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors"
          >
            <img src={smartstoreIcon} alt="Smart Store" className="w-3.5 h-3.5 object-contain" />
          </a>
          <a 
            href="https://calli-m.com/" 
            target="_blank" 
            rel="noreferrer"
            className="w-7 h-7 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* MENU SECTION */}
      <div className="space-y-4 md:space-y-6">
        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Menu</h4>
        <nav className="grid grid-cols-2 gap-y-2 gap-x-8 md:flex md:flex-col md:gap-3">
          <Link to="/#about" className="text-sm opacity-60 hover:opacity-100 hover:text-brand-accent transition-all w-fit">About</Link>
          <Link to="/#portfolio" className="text-sm opacity-60 hover:opacity-100 hover:text-brand-accent transition-all w-fit">Portfolio</Link>
          <Link to="/journals" className="text-sm opacity-60 hover:opacity-100 hover:text-brand-accent transition-all w-fit">Journals</Link>
          <Link to="/#contact" className="text-sm opacity-60 hover:opacity-100 hover:text-brand-accent transition-all w-fit">Contact</Link>
        </nav>
      </div>

      {/* CONTACT SECTION */}
      <div className="space-y-4 md:space-y-6">
        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Contact</h4>
        <div className="space-y-3 md:space-y-4 text-sm opacity-60">
          <div className="flex gap-3">
            <MapPin className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>경기 고양시 일산서구 <br /> 킨텍스로 240 오피스동 511호</span>
          </div>
          <div className="flex gap-3">
            <Phone className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>031-911-1607</span>
          </div>
          <div className="flex gap-3">
            <Mail className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>callim.design@gmail.com</span>
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 md:mt-24 pt-6 md:pt-8 border-t border-brand-ink/5 text-[10px] font-bold uppercase tracking-widest opacity-20 flex flex-col md:flex-row justify-between gap-3 md:gap-4">
      <span>© 2026 CALLI-M. All rights reserved.</span>
      <span>Designed with Warmth in Goyang</span>
    </div>
  </footer>
);
