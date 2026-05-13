import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import featuredImage from '../images/main/product.jpg';

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'card', label: '카드' },
  { id: 'postcard', label: '엽서' },
  { id: 'envelope', label: '봉투' },
  { id: 'lifestyle', label: '라이프스타일' },
];

const products = [
  {
    id: 1,
    category: 'envelope',
    title: '사랑을 전하는 봉투 세트',
    desc: '캘리엠의 시그니처 캘리그라피가 담긴 프리미엄 봉투',
    image: featuredImage,
    year: 2024,
    isFeatured: true,
  },
  {
    id: 2,
    category: 'card',
    title: '생일 축하 메시지 카드',
    desc: '포근한 질감의 종이에 담긴 따뜻한 축하의 말',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2023,
  },
  {
    id: 3,
    category: 'postcard',
    title: '숲의 계절 엽서 시리즈',
    desc: '계절의 변화를 담은 수채화 스타일의 아트 엽서',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2022,
  },
  {
    id: 4,
    category: 'lifestyle',
    title: '데일리 기록 노트',
    desc: '오롯이 나에게 집중하는 시간을 위한 정갈한 노트',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2024,
  },
  {
    id: 5,
    category: 'envelope',
    title: '은은한 펄 무드 봉투',
    desc: '특별한 날을 더욱 빛내줄 고급스러운 펄 텍스처',
    image: 'https://images.unsplash.com/photo-1598532213005-5225efd344d3?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2021,
  },
  {
    id: 6,
    category: 'card',
    title: '감사 응원 카드',
    desc: '진심이 닿기를 바라는 마음으로 적어 내려가는 카드',
    image: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2023,
  },
  {
    id: 7,
    category: 'postcard',
    title: '도시의 조각들 엽서',
    desc: '무심결에 지나친 풍경 속 따스한 시선을 담은 사진 엽서',
    image: 'https://images.unsplash.com/photo-1493130952181-47e36589f64d?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2020,
  },
  {
    id: 8,
    category: 'lifestyle',
    title: '오가닉 에코 머그',
    desc: '지구의 마음을 생각한 친환경 소재와 디자인',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2024,
  },
  {
    id: 9,
    category: 'envelope',
    title: '앤티크 실링 왁스 세트',
    desc: '깊은 여운을 남기는 클래식한 봉투 마감의 미학',
    image: 'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?auto=format&fit=crop&q=80&w=600&grayscale',
    year: 2022,
  },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [yearRange, setYearRange] = useState({ min: 2020, max: 2024 });
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
    let result = activeCategory === 'all' 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);

    // Apply Year Filter
    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    // Apply Sorting
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
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-brand-ink/90">Our Products</h1>
            <p className="text-lg opacity-60 serif-kor leading-relaxed max-w-2xl">
              캘리그라피의 온기와 고유한 디자인이 담긴 <br />
              캘리엠의 제품들을 만나보세요.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Category Filter & Filter Toggle */}
      <div className="bg-brand-bg border-b border-brand-ink/5 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
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
                    <span>2020</span>
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
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
      <Section className="pb-32 pt-[50px] md:pl-24 !max-w-none px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-10 text-center max-w-[2800px] mx-auto">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} delay={(idx % 3) * 0.1}>
              <div 
                className={cn(
                  "group cursor-pointer transition-transform duration-500",
                  idx % 3 === 0 && "lg:translate-y-0",
                  idx % 3 === 1 && "lg:translate-y-30",
                  idx % 3 === 2 && "lg:translate-y-0"
                )}
              >
                <div className="aspect-[656.7/460] overflow-hidden bg-brand-ink/5 mb-[10px] relative">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    style={{ height: '460px', width: '656.656px' }}
                  />
                  <div className="absolute top-4 right-4 bg-white/60 backdrop-blur-sm px-2 py-1 text-[9px] font-bold tracking-widest">
                    {product.year}
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold tracking-widest opacity-30 uppercase">
                    {categories.find(c => c.id === product.category)?.label}
                  </span>
                  <h3 className="text-xl font-sans font-medium leading-snug tracking-normal">{product.title}</h3>
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

