import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import featuredImage from '../images/main/project.jpg';
import literacyFeatured from '../images/project/literacy-art-exhibition/featured.webp';

const projectList = [
  {
    id: 1,
    title: '성인문해교육 시화전',
    desc: '문해 학습자들의 시와 그림에 담긴 삶의 이야기를 따뜻한 시선으로 풀어낸 공공 디자인 프로젝트입니다.',
    image: literacyFeatured,
    year: 2026,
    link: '/project/literacy-art-exhibition',
    isFeatured: true,
  },
  {
    id: 2,
    title: '성인문해교육 시화전',
    desc: '문해 학습자들의 시와 그림에 담긴 삶의 이야기를 따뜻한 시선으로 풀어낸 공공 디자인 프로젝트입니다.',
    image: literacyFeatured,
    year: 2026,
  },
  {
    id: 3,
    title: '현대 예술 재단 비주얼 시스템',
    desc: '예술적 가치와 대중의 연결을 형상화한 유연한 그래픽 모티프',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=800',
    year: 2023,
    isPlaceholder: true,
  },
  {
    id: 4,
    title: '도시 상생 프로젝트 ‘결’',
    desc: '지역 공동체의 활성화를 돕는 따뜻한 시선의 커뮤니티 디자인',
    image: 'https://images.unsplash.com/photo-1449156001935-cf2d41a7911b?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    isPlaceholder: true,
  },
  {
    id: 5,
    title: '미래 교육 연구소 심볼 디자인',
    desc: '지식의 확산과 성장을 담은 기하학적 라인 아트 프로젝트',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    year: 2022,
    isPlaceholder: true,
  },
  {
    id: 6,
    title: '자연 보호 캠페인 ‘숨’',
    desc: '자연의 회복력을 붓터치의 생동감으로 표현한 환경 프로젝트',
    image: 'https://images.unsplash.com/photo-1542601906970-d4d80754037b?auto=format&fit=crop&q=80&w=800',
    year: 2021,
    isPlaceholder: true,
  },
  {
    id: 7,
    title: '글로벌 포럼 시각 언어 구축',
    desc: '다양한 국적과 문화의 화합을 상징하는 다채로운 패턴 시스템',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    year: 2023,
    isPlaceholder: true,
  },
  {
    id: 8,
    title: '스타트업 액셀러레이터 브랜딩',
    desc: '도전과 혁신의 에너지를 담은 대담한 컬러와 타이포그래피',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    year: 2024,
    isPlaceholder: true,
  },
  {
    id: 9,
    title: '전시공간 ‘이음’ 공간 브랜딩',
    desc: '공간의 흐름과 작품이 하나로 어우러지는 경험 디자인 프로젝트',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    year: 2022,
    isPlaceholder: true,
  },
  {
    id: 10,
    title: '디지털 아카이브 비주얼 가이드',
    desc: '방대한 데이터를 직관적으로 탐색할 수 있는 체계적인 디자인 시스템',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    year: 2023,
    isPlaceholder: true,
  },
];

const Project = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const [isMobile, setIsMobile] = useState(false);
  
  // Filter States
  const [yearRange, setYearRange] = useState({ min: 2016, max: 2026 });
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsFilterOpen(false);
    };

    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProjects = useMemo(() => {
    // Exclude featured projects from the main list
    let result = projectList.filter(p => !p.isFeatured && !p.isPlaceholder);

    // Apply Year Filter
    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    // Apply Sorting
    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [yearRange, sortBy]);

  const featuredProject = projectList.find(p => p.isFeatured) || projectList[0];

  const navigate = useNavigate();

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[92px] md:pt-40 pb-4 md:pb-8 px-6 md:px-12 lg:px-24 max-w-[2400px] mx-auto">
        <Reveal>
          <div className="space-y-1.5 md:space-y-4">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">Portfolio</span>
            <h1 className="text-[30px] md:text-[53px] font-serif tracking-tight leading-tight text-brand-ink/90">PROJECT</h1>
            <p className="text-[14px] md:text-[18px] opacity-60 serif-kor leading-relaxed max-w-2xl">
              사회와 브랜드에 긍정적인 파동을 일으키는 <br />
              다양한 프로젝트의 여정을 기록합니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Latest Featured Portfolio Section */}
      <section className="py-5 md:py-16 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 max-w-[2400px] mx-auto overflow-hidden">
        <Reveal>
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,760px)_minmax(0,560px)] gap-4 md:gap-12 xl:gap-16 items-center max-w-[1400px] mx-auto">
            {/* Wide Hero Image */}
            <div 
              className="relative overflow-hidden w-full h-[220px] md:h-[600px] bg-brand-ink/5 group cursor-pointer"
              onClick={() => featuredProject.link && navigate(featuredProject.link)}
            >
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="hidden md:block absolute top-4 left-4 md:top-8 md:left-8 bg-brand-accent/90 text-white text-[9px] md:text-[10px] font-bold tracking-[0.2em] px-3 md:px-4 py-1.5 uppercase">
                NEWEST CASE
              </div>
            </div>
            
            {/* Project Details */}
            <div 
              className="min-w-0 space-y-4 md:space-y-7 py-2 md:py-8 pr-0 max-w-[560px] cursor-pointer group/text"
              onClick={() => featuredProject.link && navigate(featuredProject.link)}
            >
              <div className="space-y-2 md:space-y-4">
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] opacity-40 uppercase">Newest Case · {featuredProject.year}</span>
                <h2 className="text-[24px] md:text-[44px] lg:text-[30px] serif-kor leading-tight whitespace-normal break-keep">{featuredProject.title}</h2>
                <p className="text-[14px] md:text-[18px] serif-kor opacity-60 leading-relaxed w-full max-w-full break-keep">
                  {featuredProject.desc}
                </p>
              </div>
              <div className="pt-0 md:pt-2">
                <button 
                  className="inline-flex items-center gap-2 md:gap-3 text-[10px] md:text-[11px] font-bold tracking-[0.25em] md:tracking-[0.3em] uppercase border-b border-brand-ink/20 pb-1 hover:border-brand-accent hover:text-brand-accent transition-all group"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (featuredProject.link) navigate(featuredProject.link);
                  }}
                >
                  View Case Study
                  <motion.span 
                    animate={isMobile ? { x: 0 } : { x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >→</motion.span>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Filter Button Bar */}
      <div className="bg-brand-bg border-b border-brand-ink/5 mb-2 md:mb-8">
        <div className="max-w-[2800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-end items-center py-3 md:py-6">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "inline-flex items-center  justify-center rounded-full border w-9 h-9 md:w-auto md:h-auto md:px-4 md:py-2 text-[10px] md:text-[11px] font-bold tracking-[0.16em] md:tracking-[0.1em] transition-all hover:opacity-100",
                isFilterOpen
                  ? "border-brand-accent/50 text-brand-accent"
                  : "border-brand-ink/15 text-brand-ink/45 hover:border-brand-ink/30 hover:text-brand-ink/70"
              )}
            >
              {isFilterOpen ? <X className="w-3.5 h-3.5" /> : <SlidersHorizontal className="w-3.5 h-3.5" />}
              <span className="sr-only md:not-sr-only">Filter</span>
            </button>
          </div>
        </div>

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
                        left: `${((yearRange.min - 2016) / 10) * 100}%`,
                        right: `${100 - ((yearRange.max - 2016) / 10) * 100}%`
                      }}
                    />
                    <input
                      type="range"
                      min="2016"
                      max="2026"
                      value={yearRange.min}
                      onChange={(e) => setYearRange({ ...yearRange, min: Math.min(Number(e.target.value), yearRange.max) })}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                    />
                    <input
                      type="range"
                      min="2016"
                      max="2026"
                      value={yearRange.max}
                      onChange={(e) => setYearRange({ ...yearRange, max: Math.max(Number(e.target.value), yearRange.min) })}
                      className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(255,255,255,1)]"
                    />
                  </div>
                  <div className="flex justify-between text-[9px] font-bold opacity-30 mt-2">
                    <span>2016</span><span>2022</span><span>2024</span><span>2026</span>
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
      <Section className="pb-20 md:pb-32 pt-3 md:pt-[50px] !max-w-none px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-7 md:gap-y-24 text-left md:text-center max-w-[2400px] mx-auto">
          {filteredProjects.map((project, idx) => {
            const thumbnailYOffsets = [
              "lg:translate-y-0",
              "lg:translate-y-12",
              "lg:translate-y-24",
            ];

            return (
             <Reveal key={project.id} delay={(idx % 3) * 0.1}>
              <div 
                className={cn(
                  "group cursor-pointer transition-transform duration-500",
                  thumbnailYOffsets[idx % 3]
                )}
                onClick={() => project.link && navigate(project.link)}
              >
                <div className="aspect-[656.7/460] overflow-hidden bg-brand-ink/5 mb-3 md:mb-[20px] relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-brand-ink/90 text-white text-[9px] md:text-[10px] font-bold tracking-[0.2em] px-2 py-0.5">
                    {project.year}
                  </div>
                </div>
                <div className="space-y-2 max-w-[400px] mr-auto md:mx-auto">
                  <h3 className="text-[17px] md:text-[26px] font-sans font-medium leading-snug tracking-normal whitespace-pre-line">{project.title}</h3>
                </div>
              </div>
            </Reveal>
            );
          })}
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
