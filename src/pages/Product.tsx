import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import featuredImage from '../images/main/product.jpg';
import prod1 from '../images/product/1.webp';
import prod2 from '../images/product/2.webp';
import prod3 from '../images/product/3.webp';
import prod4 from '../images/product/4.webp';

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'card', label: '카드' },
  { id: 'postcard', label: '엽서' },
  { id: 'envelope', label: '봉투' },
  { id: 'lifestyle', label: '라이프스타일' },
];

const categoryColors: Record<string, string> = {
  card: '#b67a68',
  postcard: '#8c9b7b',
  envelope: '#7d91a3',
  lifestyle: '#9a7b8c',
};

const products = [
  {
    id: 1,
    category: 'envelope',
    title: 'E2204 늘 사랑하고 감사드립니다',
    desc: '캘리엠의 시그니처 캘리그라피가 담긴 프리미엄 봉투',
    image: prod1,
    year: 2026,
    isFeatured: true,
  },
  {
    id: 2,
    category: 'envelope',
    title: 'E2601HN 늘 사랑하고 감사드립니다',
    desc: '포근한 질감의 종이에 담긴 따뜻한 축하의 말',
    image: prod2,
    year: 2026,
  },
  {
    id: 3,
    category: 'envelope',
    title: 'E2403YA 사랑과 은혜',
    desc: '계절의 변화를 담은 수채화 스타일의 아트 엽서',
    image: prod3,
    year: 2026,
  },
  {
    id: 4,
    category: 'envelope',
    title: 'E2601CA LOVE(Pink)',
    desc: '오롯이 나에게 집중하는 시간을 위한 정갈한 노트',
    image: prod4,
    year: 2026,
  },
  {
    id: 5,
    category: 'envelope',
    title: '은은한 펄 무드 봉투',
    desc: '특별한 날을 더욱 빛내줄 고급스러운 펄 텍스처',
    image: 'https://images.unsplash.com/photo-1598532213005-5225efd344d3?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2021,
    isPlaceholder: true,
  },
  {
    id: 6,
    category: 'card',
    title: '감사 응원 카드',
    desc: '진심이 닿기를 바라는 마음으로 적어 내려가는 카드',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2023,
    isPlaceholder: true,
  },
  {
    id: 7,
    category: 'postcard',
    title: '도시의 조각들 엽서',
    desc: '무심결에 지나친 풍경 속 따스한 시선을 담은 사진 엽서',
    image: 'https://images.unsplash.com/photo-1493130952181-47e36589f64d?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2020,
    isPlaceholder: true,
  },
  {
    id: 8,
    category: 'lifestyle',
    title: '오가닉 에코 머그',
    desc: '지구의 마음을 생각한 친환경 소재와 디자인',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2022,
    isPlaceholder: true,
  },
  {
    id: 9,
    category: 'envelope',
    title: '앤티크 실링 왁스 세트',
    desc: '깊은 여운을 남기는 클래식한 봉투 마감의 미학',
    image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2022,
    isPlaceholder: true,
  },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [yearRange, setYearRange] = useState({ min: 2016, max: 2026 });
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      // Close filter panel when scrolling
      setIsFilterOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => !p.isPlaceholder);

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [activeCategory, yearRange, sortBy]);

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Shop Our Collections</span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-brand-ink/90">Products</h1>
            <p className="text-lg opacity-60 serif-kor leading-relaxed max-w-2xl">
              캘리그라피의 온기와 고유한 디자인이 담긴 <br />
              캘리엠의 제품들을 만나보세요.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Category Filter & Filter Toggle */}
      <div className="bg-brand-bg border-b border-brand-ink/5 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-9">
          <div className="flex justify-between items-center py-6">
            <div className="flex gap-[20px] md:gap-8 overflow-x-auto no-scrollbar h-[50px] md:h-auto items-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "text-[11px] font-bold tracking-[0.1em] whitespace-nowrap transition-all pb-1 border-b-2",
                    activeCategory === cat.id 
                      ? "text-brand-ink border-brand-accent opacity-100" 
                      : "text-brand-ink/40 border-transparent hover:opacity-100"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-full border transition-all hover:opacity-100",
                isFilterOpen ? "text-brand-accent border-brand-accent scale-105" : "text-brand-ink/20 border-brand-ink/20"
              )}
            >
              {isFilterOpen ? <X className="w-4 h-4" /> : <SlidersHorizontal className="w-4 h-4" />}
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
                {/* Year Range Slider */}
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
                    <span>2016</span>
                    <span>2018</span>
                    <span>2020</span>
                    <span>2022</span>
                    <span>2024</span>
                    <span>2026</span>
                  </div>
                </div>

                {/* Sort Order Toggle */}
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

      {/* Product Grid */}
      <Section className="pb-32 pt-[50px] !max-w-none px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-16 max-w-[1800px] mx-auto">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} delay={(idx % 4) * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-square overflow-hidden bg-brand-ink/5 mb-3 md:mb-4 relative transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Mobile Layout (2 Cols) */}
                <div className="lg:hidden space-y-1 text-left">
                  <p 
                    className="text-[14px] font-medium leading-snug"
                    style={{ color: categoryColors[product.category] }}
                  >
                    #{categories.find(c => c.id === product.category)?.label}
                  </p>
                  <h3 className="text-[14px] font-sans font-semibold leading-snug text-brand-ink">
                    {product.title}
                  </h3>
                </div>

                {/* PC Layout (4 Cols) */}
                <div className="hidden lg:flex items-baseline justify-between gap-4 text-left">
                  <h3 className="text-[23px] font-sans font-semibold leading-snug text-brand-ink">
                    {product.title}
                  </h3>
                  <div className="shrink-0 font-normal leading-snug text-right text-brand-ink">
                    <span style={{ color: categoryColors[product.category] }} className="text-[14px]">
                      {categories.find(c => c.id === product.category)?.label}
                    </span>
                    <span className="text-[12px]"> · {product.year}</span>
                  </div>
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

export default Product;

