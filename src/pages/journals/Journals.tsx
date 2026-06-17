import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';
import { cn } from '../../lib/utils';
import { journalList } from './journalData';


const Journals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-6 text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Calli-M Journals</span>
            <h1 className="text-4xl md:text-6xl font-serif tracking-tight leading-tight text-brand-ink/90">Brand Journals</h1>
            <p className="text-lg opacity-60 serif-kor leading-relaxed max-w-2xl">
              캘리엠의 소식과 프로젝트, 수상 기록, <br className="hidden md:block" />
              전시와 상품 이야기를 기록합니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Grid List */}
      <Section className="pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {journalList.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Link 
                to={item.link || '#'} 
                className={cn(
                  "group block space-y-8",
                  item.link ? "cursor-pointer" : "cursor-default opacity-80"
                )}
              >
                <div className="aspect-[4/3] overflow-hidden bg-brand-ink/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-widest opacity-40 block">{item.date}</span>
                  <h3 className="text-2xl serif-kor leading-tight group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed font-light line-clamp-2">
                    {item.desc}
                  </p>
                  <div className="pt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] border-b border-brand-ink/20 pb-1 opacity-0 group-hover:opacity-80 transition-all duration-300">
                    READ FULL STORY <span className="text-base leading-none">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Journals;
