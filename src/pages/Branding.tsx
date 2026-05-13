import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import featuredImage from '../images/main/branding.jpg';

const brandingProjects = [
  {
    id: 1,
    title: '미분당 브랜드 아이덴티티',
    desc: '쌀국수 전문점의 고유한 감성을 담은 붓터치 로고와 브랜딩 시스템',
    image: featuredImage,
    year: 2024,
    isFeatured: true,
  },
  {
    id: 2,
    title: '서울시청 온오프라인 캠페인',
    desc: '시민의 목소리를 담은 캘리그라피 아트워크와 그래픽 가이드',
    image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 3,
    title: '자연의 숨 브랜딩',
    desc: '친환경 화장품 브랜드의 결을 살린 서체와 비주얼 디자인',
    image: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 4,
    title: '월간 캘리엠 굿즈 패키지',
    desc: '매달 새로운 붓글씨로 만나는 일상 속 예술 프로젝트',
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 5,
    title: '오래된 정원 북디자인',
    desc: '시간의 흔적과 문학적 감수성을 담아낸 캘리그라피 커버',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    year: 2021,
  },
  {
    id: 6,
    title: '전통주 향기 브랜딩',
    desc: '전통의 현대적 재해석, 우아한 붓놀림으로 표현된 로고',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 7,
    title: '스테이 무드 브랜딩',
    desc: '쉼의 가치를 담은 감성 숙소의 통합 시각 언어 구축',
    image: 'https://images.unsplash.com/photo-1506422748170-36946330058b?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 8,
    title: '한글의 미 전시 브랜딩',
    desc: '국립한글박물관 특별 전시의 메인 테마 및 어플리케이션 디자인',
    image: 'https://images.unsplash.com/photo-1512411425032-15f793540c4a?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 9,
    title: '카페 림(Lymm) 아이덴티티',
    desc: '숲속의 여유로운 휴식을 형상화한 유기적 라인의 로고 마크',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
];

const Branding = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [yearRange, setYearRange] = useState({ min: 2020, max: 2024 });
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsFilterOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = useMemo(() => {
    let result = [...brandingProjects];

    // Apply Year Filter
    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    // Apply Sorting
    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [yearRange, sortBy]);

  const featuredProject = brandingProjects.find(p => p.isFeatured) || brandingProjects[0];

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24 max-w-[2400px] mx-auto">
        <Reveal>
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-brand-ink/90">BRANDING</h1>
            <p className="text-base opacity-60 serif-kor leading-relaxed max-w-2xl">
              브랜드의 본질을 담는 캘리그라피와 <br />
              감도 깊은 비주얼 아이덴티티를 제안합니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Latest Featured Portfolio Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 max-w-[2400px] mx-auto overflow-hidden">
        <Reveal>
          <div className="grid grid-cols-1 xl:grid-cols-[1000px_1fr] gap-12 md:gap-20 items-center">
            {/* Wide Hero Image - Adjusted to user's targeted size (1000px x 800px) */}
            <div className="relative overflow-hidden w-full lg:max-w-[1000px] h-[400px] md:h-[800px] bg-brand-ink/5 group">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-brand-accent/90 text-white text-[9px] font-bold tracking-[0.2em] px-4 py-1.5 uppercase">
                NEWEST CASE
              </div>
            </div>
            
            {/* Project Details */}
            <div className="space-y-8 py-8 pr-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">{featuredProject.year} Branding Case</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl serif-kor leading-tight">{featuredProject.title}</h2>
                <p className="text-lg serif-kor opacity-60 leading-relaxed w-[455px] max-w-full">
                  {featuredProject.desc}
                </p>
              </div>
              <div className="pt-2">
                <button className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase border-b border-brand-ink/20 pb-1 hover:border-brand-accent hover:text-brand-accent transition-all group">
                  View Case Study
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >→</motion.span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Filter Button Bar (No Categories) */}
      <div className="bg-brand-bg border-b border-brand-ink/5 mb-8">
        <div className="max-w-[2800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-end items-center py-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] transition-all hover:opacity-100",
                isFilterOpen ? "text-brand-accent scale-105" : "text-brand-ink/40"
              )}
            >
              {isFilterOpen ? <X className="w-3.5 h-3.5" /> : <SlidersHorizontal className="w-3.5 h-3.5" />}
              FILTER
            </button>
          </div>
        </div>

        {/* Expandable Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-brand-ink/[0.02] border-t border-brand-ink/5"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-bold tracking-widest opacity-40 uppercase">Publication Year</span>
                    <span className="text-lg serif-kor">{yearRange.min} — {yearRange.max}</span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <div className="absolute w-full h-[1px] bg-brand-ink/10" />
                    <div 
                      className="absolute h-[2px] bg-brand-accent"
                      style={{
                        left: `${((yearRange.min - 2020) / 4) * 100}%`,
                        right: `${100 - ((yearRange.max - 2020) / 4) * 100}%`
                      }}
                    />
                    <input
                      type="range"
                      min="2020"
                      max="2024"
                      value={yearRange.min}
                      onChange={(e) => setYearRange({ ...yearRange, min: Math.min(Number(e.target.value), yearRange.max) })}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                    />
                    <input
                      type="range"
                      min="2020"
                      max="2024"
                      value={yearRange.max}
                      onChange={(e) => setYearRange({ ...yearRange, max: Math.max(Number(e.target.value), yearRange.min) })}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-bold opacity-30 mt-2">
                    <span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-[10px] font-bold tracking-widest opacity-40 uppercase">Sort Order</span>
                  <div className="flex bg-brand-ink/5 p-1 rounded-full w-fit">
                    <button
                      onClick={() => setSortBy('latest')}
                      className={cn(
                        "px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all",
                        sortBy === 'latest' ? "bg-white text-brand-ink shadow-sm" : "opacity-40"
                      )}
                    >
                      LATEST FIRST
                    </button>
                    <button
                      onClick={() => setSortBy('oldest')}
                      className={cn(
                        "px-6 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all",
                        sortBy === 'oldest' ? "bg-white text-brand-ink shadow-sm" : "opacity-40"
                      )}
                    >
                      OLDEST FIRST
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Square Project Grid */}
      <Section className="pb-32 pt-[50px] !max-w-none px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 text-center max-w-[2400px] mx-auto">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={(idx % 3) * 0.1}>
              <div 
                className={cn(
                  "group cursor-pointer transition-transform duration-500",
                  idx % 3 === 1 && "lg:translate-y-20"
                )}
              >
                <div className="aspect-[656.7/460] overflow-hidden bg-brand-ink/5 mb-[20px] relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    style={{ height: '460px', width: '656.656px' }}
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-ink/90 text-white text-[9px] font-bold tracking-[0.2em] px-2 py-0.5">
                    {project.year}
                  </div>
                </div>
                <div className="space-y-2 max-w-[400px] mx-auto">
                  <h3 className="text-2xl font-sans font-medium leading-snug tracking-normal">{project.title}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-[#b7b7b7]/60 backdrop-blur-md border border-[#b7b7b7]/20 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
            id="scroll-to-top"
          >
            <ArrowUp className="text-brand-ink w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Branding;
