import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import featuredImage from '../images/main/project.jpg';

const projectList = [
  {
    id: 1,
    title: '전주 문화유산 브랜딩 프로젝트',
    desc: '시간의 궤적을 잇는 전통 문양의 현대적 재구성 및 통합 아이덴티티',
    image: featuredImage,
    year: 2024,
    isFeatured: true,
  },
  {
    id: 2,
    title: '현대 예술 재단 비주얼 시스템',
    desc: '예술적 가치와 대중의 연결을 형상화한 유연한 그래픽 모티프',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 3,
    title: '도시 상생 프로젝트 ‘결’',
    desc: '지역 공동체의 활성화를 돕는 따뜻한 시선의 커뮤니티 디자인',
    image: 'https://images.unsplash.com/photo-1449156001935-cf2d41a7911b?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 4,
    title: '미래 교육 연구소 심볼 디자인',
    desc: '지식의 확산과 성장을 담은 기하학적 라인 아트 프로젝트',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 5,
    title: '자연 보호 캠페인 ‘숨’',
    desc: '자연의 회복력을 붓터치의 생동감으로 표현한 환경 프로젝트',
    image: 'https://images.unsplash.com/photo-1542601906970-d4d80754037b?auto=format&fit=crop&q=80&w=800',
    year: 2021,
  },
  {
    id: 6,
    title: '글로벌 포럼 시각 언어 구축',
    desc: '다양한 국적과 문화의 화합을 상징하는 다채로운 패턴 시스템',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 7,
    title: '스타트업 액셀러레이터 브랜딩',
    desc: '도전과 혁신의 에너지를 담은 대담한 컬러와 타이포그래피',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 8,
    title: '전시공간 ‘이음’ 공간 브랜딩',
    desc: '공간의 흐름과 작품이 하나로 어우러지는 경험 디자인 프로젝트',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 9,
    title: '디지털 아카이브 비주얼 가이드',
    desc: '방대한 데이터를 직관적으로 탐색할 수 있는 체계적인 디자인 시스템',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
];

const Project = () => {
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
    let result = [...projectList];

    // Apply Year Filter
    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    // Apply Sorting
    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [yearRange, sortBy]);

  const featuredProject = projectList.find(p => p.isFeatured) || projectList[0];

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24 max-w-[2400px] mx-auto">
        <Reveal>
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-brand-ink/90">PROJECT</h1>
            <p className="text-base opacity-60 serif-kor leading-relaxed max-w-2xl">
              사회와 브랜드에 긍정적인 파동을 일으키는 <br />
              다양한 프로젝트의 여정을 기록합니다.
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
                <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">{featuredProject.year} Project Case</span>
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

export default Project;
