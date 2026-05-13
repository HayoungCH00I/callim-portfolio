import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

import featuredImage from '../images/package/honest-k-food/featured-honest-k-food.png';

const packageProjects = [
  {
    id: 1,
    title: '어니스트케이푸드\n까나리어간장',
    desc: '어니스트케이푸드의 깊은 풍미와 정성을 담은 프리미엄 까나리어간장 패키지',
    image: featuredImage,
    year: 2024,
    isFeatured: true,
    link: '/package/honest-k-food',
  },
  {
    id: 2,
    title: '전통 차 세트 디자인',
    desc: '차의 은은한 향기를 정갈한 붓놀림으로 표현한 전통 차 패키지',
    image: 'https://images.unsplash.com/photo-1594631252845-2d330ae9c6f1?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 3,
    title: '코스메틱 브랜드 패키지',
    desc: '자연 유래 성분의 순수함을 담은 미니멀한 텍스처와 라벨 디자인',
    image: 'https://images.unsplash.com/photo-1556229167-731383569762?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 4,
    title: '스페셜티 커피 원두 백',
    desc: '산지의 이야기를 담은 일러스트와 캘리그라피의 조화',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 5,
    title: '스테이 무드 어메니티 세트',
    desc: '쉼의 가치를 전달하는 차분한 톤의 숙소 전용 어메니티 패키지',
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=800',
    year: 2021,
  },
  {
    id: 6,
    title: '계절 과일 청 패키지',
    desc: '달콤한 결실을 축하하는 화사한 색감의 라벨 시스템',
    image: 'https://images.unsplash.com/photo-1589733904268-9de9048a1081?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
  {
    id: 7,
    title: '프리미엄 와인 라벨 디자인',
    desc: '깊은 풍미와 세월의 가치를 담은 클래식한 실링 왁스와 타이포그래피',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800',
    year: 2024,
  },
  {
    id: 8,
    title: '아트북 한정판 케이스',
    desc: '섬세한 종이 질감과 수작업의 정성을 느낄 수 있는 북케이스',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    year: 2022,
  },
  {
    id: 9,
    title: '오가닉 패브릭 패키지',
    desc: '부드러운 손길을 연상시키는 타이포 위주의 친환경 포장 재질',
    image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5ea?auto=format&fit=crop&q=80&w=800',
    year: 2023,
  },
];

const Package = () => {
  const navigate = useNavigate();
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
    let result = [...packageProjects];

    // Apply Year Filter
    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    // Apply Sorting
    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [yearRange, sortBy]);

  const featuredProject = packageProjects.find(p => p.isFeatured) || packageProjects[0];

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 md:px-12 lg:px-24 max-w-[2400px] mx-auto">
        <Reveal>
          <div className="space-y-4">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">Portfolio</span>
            <h1 className="text-[40px] md:text-[53px] font-serif tracking-tight leading-tight text-brand-ink/90">PACKAGE</h1>
            <p className="text-[18px] opacity-60 serif-kor leading-relaxed max-w-2xl">
              제품의 가치를 손끝으로 전하는 <br />
              감도 깊은 패키지 솔루션을 제안합니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Latest Featured Portfolio Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 max-w-[2400px] mx-auto overflow-hidden">
        <Reveal>
          <div className="grid grid-cols-1 xl:grid-cols-[1000px_1fr] gap-12 md:gap-20 items-center">
            {/* Wide Hero Image */}
            <div 
              className="relative overflow-hidden w-full lg:max-w-[1000px] h-[400px] md:h-[800px] bg-brand-ink/5 group cursor-pointer"
              onClick={() => featuredProject.link && navigate(featuredProject.link)}
            >
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 left-8 bg-brand-accent/90 text-white text-[10px] font-bold tracking-[0.2em] px-4 py-1.5 uppercase">
                NEWEST CASE
              </div>
            </div>
            
            {/* Project Details */}
            <div 
              className="space-y-8 py-8 pr-12 cursor-pointer group/text"
              onClick={() => featuredProject.link && navigate(featuredProject.link)}
            >
              <div className="space-y-4">
                <span className="text-[11px] font-bold tracking-[0.2em] opacity-40 uppercase">{featuredProject.year} Package Case</span>
                <h2 className="text-[40px] md:text-[53px] lg:text-[66px] serif-kor leading-tight whitespace-pre-line">{featuredProject.title}</h2>
                <p className="text-[20px] serif-kor opacity-60 leading-relaxed w-[455px] max-w-full">
                  {featuredProject.desc}
                </p>
              </div>
              <div className="pt-2">
                <button 
                  className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase border-b border-brand-ink/20 pb-1 hover:border-brand-accent hover:text-brand-accent transition-all group"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (featuredProject.link) navigate(featuredProject.link);
                  }}
                >
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

      {/* Filter Button Bar */}
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
                <div className="aspect-[656.7/460] overflow-hidden bg-brand-ink/5 mb-[20px] relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    style={{ height: '460px', width: '656.656px' }}
                  />
                  <div className="absolute bottom-4 left-4 bg-brand-ink/90 text-white text-[10px] font-bold tracking-[0.2em] px-2 py-0.5">
                    {project.year}
                  </div>
                </div>
                <div className="space-y-2 max-w-[400px] mx-auto">
                  <h3 className="text-[26px] font-sans font-medium leading-snug tracking-normal whitespace-pre-line">{project.title}</h3>
                </div>
              </div>
            </Reveal>
            );
          })}
        </div>
      </Section>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 w-12 h-12 bg-[#b7b7b7]/60 backdrop-blur-md border border-[#b7b7b7]/20 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform group"
          >
            <ArrowUp className="text-brand-ink w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Package;
