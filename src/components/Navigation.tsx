import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
      transparent ? "bg-transparent" : "bg-brand-bg/50 backdrop-blur-xl"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-[0.3em] serif">CALLI-M</Link>
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
          <a href={isHome ? "#about" : "/#about"} className="hover:opacity-100 transition-opacity">About</a>
          <a href={isHome ? "#portfolio" : "/#portfolio"} className="hover:opacity-100 transition-opacity">Portfolio</a>
          <Link to="/journals" className="hover:opacity-100 transition-opacity">JOURNALS</Link>
          <a href={isHome ? "#contact" : "/#contact"} className="hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <div className="md:hidden w-6 h-px bg-brand-ink/40" />
      </div>
    </nav>
  );
};
