import { useEffect, useState, useMemo } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal, Section } from '../components/Common';
import { cn } from '../lib/utils';
import { ArrowUp, SlidersHorizontal, X, Search, RotateCcw } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import featuredImage from '../images/main/product.jpg';
import prod1 from '../images/product/envelope/E2204.webp';
import prod2 from '../images/product/envelope/E2601HN.webp';
import prod3 from '../images/product/envelope/E2403YA.webp';
import prod4 from '../images/product/envelope/E2601CA.webp';
import prod5 from '../images/product/little-things-precious.jpg';
import prod6 from '../images/product/card/MCCA2601.webp'
import prod7 from '../images/product/card/MCCA2602.webp'
import prod8 from '../images/product/card/MCCA2603.webp'
import prod9 from '../images/product/postcard/PHN2401.webp'

const TEMP_PRODUCT_DETAIL = {
  size: '100 x 210 mm',
  storeUrl: 'https://smartstore.naver.com/',
};

const TEMP_KEYWORDS = ['감사', '선물', '일상', '캘리그라피'];

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'card', label: '카드' },
  { id: 'postcard', label: '엽서' },
  { id: 'envelope', label: '봉투' },
  { id: 'lifestyle', label: '라이프스타일' },
];

const categoryColors: Record<string, string> = {
  card: '#b67a68',
  postcard: '#c31aa6',
  envelope: '#3798ee',
  lifestyle: '#279843',
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
    size: '80 x 170 mm',
    keywords: ['감사', '선물', '봉투', '캘리그라피'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 2,
    category: 'envelope',
    title: 'E2601HN 늘 사랑하고 감사드립니다',
    desc: '포근한 질감의 종이에 담긴 따뜻한 축하의 말',
    image: prod2,
    year: 2026,
    size: '80 x 170 mm',
    keywords: ['사랑', '축하', '봉투', '캘리그라피'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 3,
    category: 'envelope',
    title: 'E2403YA 사랑과 은혜',
    desc: '계절의 변화를 담은 수채화 스타일 of 아트 엽서',
    image: prod3,
    year: 2026,
    size: '80 x 170 mm',
    keywords: ['수채화', '은혜', '봉투', '그림'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 4,
    category: 'envelope',
    title: 'E2601CA LOVE(Pink)',
    desc: '오롯이 나에게 집중하는 시간을 위한 정갈한 노트',
    image: prod4,
    year: 2026,
    size: '80 x 170 mm',
    keywords: ['핑크', '사랑', '봉투', '러브'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 5,
    category: 'lifestyle',
    title: 'Little Things More Precious',
    desc: '작은 것들로 채워지는 더 소중한 하루',
    image: prod5,
    year: 2026,
    size: '445 x 550 mm',
    keywords: ['라이프스타일', '선물', '프리미엄'],
    storeUrl: 'https://calli-m.com/product/detail.html?product_no=631&cate_no=27&display_group=1',
  },
  {
    id: 6,
    category: 'card',
    title: 'MCCA2601 하트(LOVE)',
    desc: '진심이 닿기를 바라는 마음으로 적어 내려가는 카드',
    image: prod6,
    year: 2026,
    size: '90 x 90 mm',
    keywords: ['하트', '러브', '카드', '기념일'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 7,
    category: 'card',
    title: 'MCCA2602_카네이션02(LOVE)',
    desc: '무심결에 지나친 풍경 속 따스한 시선을 담은 사진 엽서',
    image: prod7,
    year: 2026,
    size: '90 x 90 mm',
    keywords: ['카네이션', '감사', '카드', '어버이날'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 8,
    category: 'card',
    title: 'MCCA2603 카네이션01(사랑합니다)',
    desc: '지구의 마음을 생각한 친환경 소재와 디자인',
    image: prod8,
    year: 2026,
    size: '90 x 90 mm',
    keywords: ['카네이션', '사랑', '카드', '스승의날'],
    storeUrl: 'https://smartstore.naver.com/',
  },
  {
    id: 9,
    category: 'postcard',
    title: 'PHN 2401 BE YOURSEFL',
    desc: '깊은 여운을 남기는 클래식한 봉투 마감의 미학',
    image: prod9,
    year: 2025,
    size: '100 x 148 mm',
    keywords: ['엽서', '클래식', '여운', '인생'],
    storeUrl: 'https://smartstore.naver.com/',
  },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter States
  const [yearRange, setYearRange] = useState({ min: 2016, max: 2026 });
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [searchQuery, setSearchQuery] = useState('');
  const [committedSearchQuery, setCommittedSearchQuery] = useState('');
  const [tempKeywords, setTempKeywords] = useState<string[]>([]);
  const [committedKeywords, setCommittedKeywords] = useState<string[]>([]);
  const [isAllKeywordsExpanded, setIsAllKeywordsExpanded] = useState(false);

  // Selected Product State for Modal
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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

  // Handle Escape key and scroll lock for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Collect unique keywords dynamically sorted
  const allKeywords = useMemo(() => {
    const set = new Set<string>();
    products.forEach(p => {
      if (p.keywords) {
        p.keywords.forEach(k => set.add(k));
      }
    });
    return Array.from(set).sort();
  }, []);

  // Filter listed keywords based on Search query dynamically
  const filteredKeywords = useMemo(() => {
    if (!searchQuery.trim()) return allKeywords;
    const q = searchQuery.toLowerCase().trim();
    return allKeywords.filter(k => k.toLowerCase().includes(q));
  }, [allKeywords, searchQuery]);

  const displayedKeywords = useMemo(() => {
    return isAllKeywordsExpanded ? filteredKeywords : filteredKeywords.slice(0, 10);
  }, [filteredKeywords, isAllKeywordsExpanded]);

  const filteredProducts = useMemo(() => {
    let result = products.filter(p => !(p as any).isPlaceholder);

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (committedKeywords.length > 0) {
      result = result.filter(p => {
        const pKeywords = p.keywords ?? [];
        return committedKeywords.some(k => pKeywords.includes(k));
      });
    }

    if (committedSearchQuery.trim()) {
      const q = committedSearchQuery.toLowerCase().trim();
      result = result.filter(p => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const descMatch = p.desc.toLowerCase().includes(q);
        const keywordMatch = (p.keywords ?? []).some(k => k.toLowerCase().includes(q));
        return titleMatch || descMatch || keywordMatch;
      });
    }

    result = result.filter(p => p.year >= yearRange.min && p.year <= yearRange.max);

    result.sort((a, b) => {
      return sortBy === 'latest' ? b.year - a.year : a.year - b.year;
    });

    return result;
  }, [activeCategory, committedKeywords, committedSearchQuery, yearRange, sortBy]);

  const handleResetFilters = () => {
    setYearRange({ min: 2016, max: 2026 });
    setSortBy('latest');
    setSearchQuery('');
    setCommittedSearchQuery('');
    setTempKeywords([]);
    setCommittedKeywords([]);
  };

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-[92px] md:pt-40 pb-4 md:pb-8 px-6 md:px-12 lg:px-24 max-w-[2400px] mx-auto">
        <Reveal>
          <div className="space-y-1.5 md:space-y-4">
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase opacity-40">Shop Our Collections</span>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight text-brand-ink/90">Products</h1>
            <p className="text-[14px] md:text-[18px] opacity-60 serif-kor leading-relaxed max-w-2xl">
              캘리그라피의 온기와 고유한 디자인이 담긴 <br />
              캘리엠의 제품들을 만나보세요.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Category Filter & Filter Toggle */}
      <div className="bg-brand-bg border-b border-brand-ink/5 mb-0 md:mb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-9">
          <div className="flex justify-between items-center pt-6 pb-2">
            <div className="flex gap-[20px] md:gap-8 overflow-x-auto no-scrollbar h-[40px] md:h-auto items-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "text-[11px] font-bold tracking-[0.1em] whitespace-nowrap transition-all pb-1 border-b-2 cursor-pointer",
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
                "flex items-center justify-center w-9 h-9 rounded-full border transition-all hover:opacity-100 cursor-pointer",
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
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 text-left">
                {/* Section 1: Keywords and Search (Col Span 2) */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold tracking-[0.18em] opacity-40 uppercase">키워드 및 검색 (Keywords & Search)</span>
                  </div>
                  
                  {/* Search Bar Container with removable tag pills inside */}
                  <div className="flex flex-col sm:flex-row sm:items-end gap-3 max-w-xl">
                    <div className="flex-1 relative flex flex-wrap items-center gap-1.5 border-b border-brand-ink/20 py-1.5 focus-within:border-brand-accent transition-colors min-h-[42px] text-left">
                      <Search className="w-4 h-4 text-brand-ink/30 mr-1 flex-shrink-0" />
                      
                      {/* Selected Tags inside Input Box */}
                      {tempKeywords.map((kw) => (
                        <span 
                          key={kw} 
                          className="inline-flex items-center gap-1 bg-brand-accent/10 text-brand-accent text-[11px] font-medium px-2 py-0.5 rounded-sm select-none"
                        >
                          #{kw}
                          <button 
                            type="button"
                            onClick={() => setTempKeywords(tempKeywords.filter(k => k !== kw))}
                            className="text-brand-accent hover:text-brand-ink transition-colors cursor-pointer"
                            title="삭제"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}

                      {/* Text Input */}
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={tempKeywords.length === 0 ? "이름이나 설명 검색..." : "추가 텍스트 검색..."}
                        className="flex-1 min-w-[124px] bg-transparent text-[13px] text-brand-ink placeholder:text-brand-ink/30 focus:outline-none py-1 h-[26px]"
                      />
                      
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')} 
                          className="text-brand-ink/40 hover:text-brand-accent p-1 cursor-pointer"
                          title="검색어 초기화"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    {/* 최종 검색 (Commit Search) Button */}
                    <button
                      onClick={() => {
                        setCommittedKeywords(tempKeywords);
                        setCommittedSearchQuery(searchQuery);
                        setIsFilterOpen(false);
                      }}
                      className="px-5 py-2 bg-brand-accent hover:opacity-90 text-white text-[11px] font-bold tracking-widest transition-all rounded-sm cursor-pointer whitespace-nowrap"
                    >
                      최종 검색
                    </button>
                  </div>

                  {/* Keywords Pill Board */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {displayedKeywords.map((keyword) => {
                        const isSelected = tempKeywords.includes(keyword);
                        return (
                          <button
                            key={keyword}
                            onClick={() => {
                              if (isSelected) {
                                setTempKeywords(tempKeywords.filter(k => k !== keyword));
                              } else {
                                setTempKeywords([...tempKeywords, keyword]);
                              }
                            }}
                            className={cn(
                              "px-2.5 py-1 text-[11px] font-medium transition-colors border rounded-sm cursor-pointer",
                              isSelected
                                ? "bg-brand-accent border-brand-accent text-white"
                                : "bg-transparent border-brand-ink/15 text-brand-ink/70 hover:border-brand-accent hover:text-brand-accent"
                            )}
                          >
                            #{keyword}
                          </button>
                        );
                      })}
                    </div>

                    {/* Show more/less toggle button */}
                    {filteredKeywords.length > 10 && (
                      <button
                        onClick={() => setIsAllKeywordsExpanded(!isAllKeywordsExpanded)}
                        className="text-[11px] font-bold text-brand-accent hover:opacity-80 transition-opacity uppercase tracking-wider py-1 cursor-pointer"
                      >
                        {isAllKeywordsExpanded ? "▲ 접기 (Show Less)" : `▼ 키워드 더보기 (Show More) (+${filteredKeywords.length - 10})`}
                      </button>
                    )}
                  </div>
                </div>

                {/* Section 2: Year Select & Sorting & Reset (Col Span 1) */}
                <div className="lg:border-l lg:border-brand-ink/5 lg:pl-10 space-y-6 flex flex-col justify-between">
                  {/* Publication Year */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-bold tracking-[0.18em] opacity-40 uppercase">출시 연도 (Publication Year)</span>
                    <div className="flex items-center gap-2">
                      <select 
                        value={yearRange.min} 
                        onChange={(e) => setYearRange({ ...yearRange, min: Number(e.target.value) })}
                        className="bg-transparent border border-brand-ink/15 rounded-sm px-2.5 py-1.5 text-[12px] font-medium text-brand-ink/80 focus:outline-none focus:border-brand-accent transition-colors cursor-pointer"
                      >
                        {Array.from({ length: 11 }, (_, i) => 2016 + i).map(y => (
                          <option key={y} value={y}>{y}년</option>
                        ))}
                      </select>
                      <span className="opacity-40 text-xs">—</span>
                      <select 
                        value={yearRange.max} 
                        onChange={(e) => setYearRange({ ...yearRange, max: Number(e.target.value) })}
                        className="bg-transparent border border-brand-ink/15 rounded-sm px-2.5 py-1.5 text-[12px] font-medium text-brand-ink/80 focus:outline-none focus:border-brand-accent transition-colors cursor-pointer"
                      >
                        {Array.from({ length: 11 }, (_, i) => 2016 + i).map(y => (
                          <option key={y} value={y}>{y}년</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sort Order */}
                  <div className="space-y-2">
                    <span className="block text-[10px] font-bold tracking-[0.18em] opacity-40 uppercase">정렬 방식 (Sort Order)</span>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setSortBy('latest')}
                        className={cn(
                          "text-[12px] font-medium tracking-wide pb-1 transition-all border-b-2 cursor-pointer",
                          sortBy === 'latest' ? "border-brand-accent text-brand-ink font-semibold" : "border-transparent text-brand-ink/40 hover:text-brand-ink"
                        )}
                      >
                        최신순
                      </button>
                      <button
                        onClick={() => setSortBy('oldest')}
                        className={cn(
                          "text-[12px] font-medium tracking-wide pb-1 transition-all border-b-2 cursor-pointer",
                          sortBy === 'oldest' ? "border-brand-accent text-brand-ink font-semibold" : "border-transparent text-brand-ink/40 hover:text-brand-ink"
                        )}
                      >
                        오래된순
                      </button>
                    </div>
                  </div>

                  {/* Reset Button */}
                  {(searchQuery || tempKeywords.length > 0 || committedKeywords.length > 0 || committedSearchQuery || yearRange.min !== 2016 || yearRange.max !== 2026 || sortBy !== 'latest') && (
                    <div className="pt-2">
                      <button
                        onClick={handleResetFilters}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-ink/60 hover:text-brand-accent transition-colors py-1 uppercase tracking-wider cursor-pointer font-sans"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        필터 초기화 (Reset Filters)
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
     
      {(committedKeywords.length > 0 || committedSearchQuery) && (
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 pt-4 flex flex-wrap gap-2 text-left items-center bg-brand-bg">
          <span className="text-[11px] font-bold tracking-[0.1em] text-brand-ink/40 mr-1 uppercase">선택된 필터:</span>
          {committedKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => {
                const updated = committedKeywords.filter(k => k !== kw);
                setCommittedKeywords(updated);
                setTempKeywords(updated);
              }}
              className="inline-flex items-center gap-1.5 border border-brand-accent/30 bg-brand-accent/5 px-2.5 py-1 text-[11px] font-medium text-brand-accent hover:bg-brand-accent hover:text-white transition-all rounded-sm cursor-pointer"
            >
              #{kw}
              <X className="w-3 h-3" />
            </button>
          ))}
          {committedSearchQuery && (
            <button
              type="button"
              onClick={() => {
                setCommittedSearchQuery('');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 border border-brand-ink/15 bg-brand-ink/[0.02] px-2.5 py-1 text-[11px] font-medium text-brand-ink/70 hover:border-brand-accent hover:text-brand-accent transition-all rounded-sm cursor-pointer"
            >
              검색어: "{committedSearchQuery}"
              <X className="w-3 h-3" />
            </button>
          )}

          <button
            onClick={handleResetFilters}
            className="text-[11px] font-bold text-brand-ink/40 hover:text-brand-accent ml-2 underline underline-offset-2 cursor-pointer transition-colors"
          >
            모두 비우기
          </button>
        </div>
      )}

      {/* Product Grid */}
      <Section className="pb-32 pt-3 md:pt-[50px] !max-w-none px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 lg:gap-x-10 lg:gap-y-16 max-w-[1800px] mx-auto">
          {filteredProducts.map((product, idx) => (
            <Reveal key={product.id} delay={(idx % 4) * 0.1}>
              <div className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
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

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const detailImages = selectedProduct.images ?? [selectedProduct.image];
          const activeCategoryLabel = categories.find(c => c.id === selectedProduct.category)?.label || '';
          
          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
              {/* Background dim */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="fixed inset-0 bg-brand-ink/20 backdrop-blur-[3px] cursor-pointer"
              />

              {/* Content Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-brand-bg w-full max-w-[960px] border border-brand-ink/10 shadow-2xl overflow-hidden z-10 my-8 flex flex-col md:flex-row md:h-[580px] overflow-y-auto md:overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full border border-brand-ink/10 bg-brand-bg/80 backdrop-blur-md opacity-60 hover:opacity-100 hover:border-brand-accent hover:text-brand-accent transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left: Product Image */}
                <div className="w-full md:w-[50%] h-[320px] md:h-full bg-brand-ink/[0.02] flex-shrink-0 relative overflow-hidden border-b md:border-b-0 md:border-r border-brand-ink/10">
                  <img 
                    src={detailImages[0]} 
                    alt={selectedProduct.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right: Product Meta & Detail Info */}
                <div className="w-full md:w-[50%] p-6 md:p-10 flex flex-col justify-between md:h-full overflow-y-auto">
                  <div className="space-y-6 md:space-y-8">
                    <div className="space-y-2 text-left">
                      <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">
                        {activeCategoryLabel} · {selectedProduct.year}
                      </span>
                      <h2 className="text-2xl md:text-[28px] font-serif tracking-tight leading-tight text-brand-ink/90 serif-kor break-keep">
                        {selectedProduct.title}
                      </h2>
                    </div>

                    <p className="text-[14px] leading-relaxed text-brand-ink/70 serif-kor break-keep whitespace-pre-line text-left">
                      {selectedProduct.desc}
                    </p>

                    {/* Keywords */}
                    <div className="space-y-2 text-left">
                       <span className="block text-[9px] font-bold tracking-[0.18em] uppercase text-brand-ink/35">
                         Keywords
                       </span>
                       <div className="flex flex-wrap gap-2">
                         {(selectedProduct.keywords ?? TEMP_KEYWORDS).map((keyword: string) => (
                           <button
                             key={keyword}
                             type="button"
                             onClick={() => {
                               setTempKeywords([keyword]);
                                setCommittedKeywords([keyword]);
                               setActiveCategory('all');
                               setSelectedProduct(null);
                             }}
                             className="border border-brand-ink/15 px-3 py-1.5 text-[12px] font-medium text-brand-ink/70 hover:border-brand-accent hover:text-brand-accent transition-colors"
                           >
                             #{keyword}
                           </button>
                         ))}
                       </div>
                     </div>

                    {/* Size Box */}
                    <div className="border border-brand-ink/10 px-4 py-3 space-y-1 text-left">
                       <span className="block text-[9px] font-bold tracking-[0.15em] opacity-40 uppercase">SIZE</span>
                       <span className="block text-[13px] serif-kor text-brand-ink/80">{selectedProduct.size ?? TEMP_PRODUCT_DETAIL.size}</span>
                    </div>
                  </div>

                  <div className="pt-8 md:pt-4">
                    <a 
                      href={selectedProduct.storeUrl ?? TEMP_PRODUCT_DETAIL.storeUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center w-full border border-brand-ink/20 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:border-brand-accent hover:text-brand-accent hover:bg-brand-ink/[0.01] transition-all duration-300"
                    >
                      네이버 스마트스토어 바로가기
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

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

