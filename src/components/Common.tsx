import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const NaverIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 3v18l-8-10v10H6V3l8 10V3h4z" />
  </svg>
);

export const Section = ({ 
  children, 
  className, 
  id 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={cn("py-12 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}>
    {children}
  </section>
);

export const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);
