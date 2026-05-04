import { Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { NaverIcon } from './Common';

export const Footer = () => (
  <footer className="bg-brand-bg pt-24 pb-12 border-t border-brand-ink/5">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2 space-y-8">
        <h2 className="text-3xl font-bold serif">CALLI-M</h2>
        <p className="text-sm opacity-60 leading-relaxed max-w-sm">
          아날로그의 온기를 현대적 디자인 솔루션으로 풀어내는 감성 디자인 에이전시. 
          우리는 보이지 않는 가치를 믿습니다.
        </p>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors cursor-pointer">
            <Instagram className="w-4 h-4" />
          </div>
          <div className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors cursor-pointer">
            <NaverIcon className="w-4 h-4" />
          </div>
          <div className="w-10 h-10 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Locations</h4>
        <div className="space-y-4 text-sm opacity-60">
          <div className="flex gap-3">
            <MapPin className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>경기도 고양시 일산서구 대화동 <br /> (Detailed Address)</span>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40">Contact</h4>
        <div className="space-y-4 text-sm opacity-60">
          <div className="flex gap-3">
            <Phone className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>010-0000-0000</span>
          </div>
          <div className="flex gap-3">
            <Mail className="w-4 h-4 shrink-0 text-brand-accent" />
            <span>callim.design@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-brand-ink/5 text-[10px] font-bold uppercase tracking-widest opacity-20 flex flex-col md:flex-row justify-between gap-4">
      <span>© 2024 CALLI-M. All rights reserved.</span>
      <span>Designed with Warmth in Goyang</span>
    </div>
  </footer>
);
