import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import logoImage from '../images/logo.png';

export const Navigation = ({ transparent = false }: { transparent?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const menuItems = [
    { name: 'About', href: isHome ? "#about" : "/#about" },
    { name: 'Portfolio', href: isHome ? "#portfolio" : "/#portfolio" },
    { name: 'JOURNALS', href: "/journals", isLink: true },
    { name: 'Contact', href: isHome ? "#contact" : "/#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
      transparent && !isOpen ? "bg-transparent" : "bg-brand-bg/50 backdrop-blur-xl"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-24 flex items-center justify-between">
        <Link to="/" className="z-50 block" onClick={() => setIsOpen(false)}>
          <img src={logoImage} alt="CALLI-M" className="h-10 md:h-10 w-auto" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
          {menuItems.map((item) => (
            item.isLink ? (
              <Link key={item.name} to={item.href} className="hover:opacity-100 transition-opacity">
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className="hover:opacity-100 transition-opacity">
                {item.name}
              </a>
            )
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 -mr-2 text-brand-ink/60 hover:text-brand-ink transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 left-0 w-screen h-dvh bg-white/85 backdrop-blur-md md:hidden flex flex-col pt-32 px-10 gap-8 z-40"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                {item.isLink ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold tracking-[0.2em] uppercase text-brand-ink/60 hover:text-brand-ink transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold tracking-[0.2em] uppercase text-brand-ink/60 hover:text-brand-ink transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
