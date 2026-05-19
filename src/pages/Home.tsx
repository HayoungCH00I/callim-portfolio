import { useEffect, Fragment } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Section, Reveal } from '../components/Common';

import heroImage from "../images/main/hero.webp";
import heroMobileImage from "../images/main/hero_mobile.webp";
import mainMiddleProduct from "../images/main/product.jpg";
import mainMiddleProductMobile from "../images/main/product_mobile.webp";
import mainMiddlePackage from "../images/main/package.jpg";
import mainMiddleBranding from "../images/main/branding.jpg";
import mainMiddleProject from "../images/main/project.jpg";
// import branding02 from "../images/main/branding_02.jpg"; // 포트폴리오 추가 이미지 예정
// import package02 from "../images/main/package_02.jpg"; // 포트폴리오 추가 이미지 예정

import mainBottomJournal01 from "../images/main/journal.jpg";
import mainBottomJournalMobile from "../images/main/journal_mobile.webp";
// import journal02 from "../images/main/journal02.jpg"; // 저널 추가 이미지 예정
// import journal03 from "../images/main/journal03.jpg"; // 저널 추가 이미지 예정


const Hero = () => (
  <section className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src={heroMobileImage}
        alt="Hero Background Mobile"
        className="md:hidden w-full h-full object-cover object-center"
      />
      <img
        src={heroImage}
        alt="Hero Background"
        className="hidden md:block w-full h-full object-cover object-center"
      />
    </div>
    <div className="relative z-10 text-center px-6 max-w-[1500px] mx-auto">
      <Reveal>
        <h1 className="w-full md:w-[1500px] mx-auto text-[40px] md:text-[100px] font-serif italic mb-8 text-white leading-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
          Little Things, <br className="md:hidden" /> More Precious
        </h1>
      </Reveal>
      <Reveal delay={0.2}>
        <h2 className="text-[14px] md:text-[30px] font-bold mb-6 md:mb-10 serif-kor tracking-widest text-white/100 drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
          아날로그의 온기로 <br className="md:hidden" />일상의 가치를 디자인합니다
        </h2>
      </Reveal>
      <div className="hidden md:block">
        <Reveal delay={0.4}>
          <div className="w-40 h-[2px] bg-white/40 mx-auto mb-10" />
          <p className="text-[19px] text-white/100 max-w-xl mx-auto leading-relaxed tracking-[0.1em] uppercase font-bold drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
            소소한 일상의 기록부터 기업의 가치를 담는 브랜딩까지, <br />
            캘리엠이 전하는 따스한 시각 언어
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

const About = () => (
  <Section id="about" className="pt-10 pb-2 md:!pt-[150px] md:!pb-[150px]">
    <Reveal>
      <div className="mb-5 md:mb-8">
        <h2 className="relative inline-block text-[16px] font-sans font-medium uppercase tracking-tight md:pt-5 md:text-8xl md:font-serif md:tracking-tighter md:text-brand-ink md:opacity-10">
          ABOUT
          <span className="absolute -bottom-2 right-0 h-[2px] w-screen bg-brand-ink/20 md:hidden" />
        </h2>
      </div>
    </Reveal>
    <div className="flex flex-col md:flex-row gap-8 lg:gap-24 items-start">
      <div className="md:w-1/2">
        <Reveal>
          <Link to="/project/brand-renewal" className="block group">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight serif-kor group-hover:text-brand-accent transition-colors">
              아날로그의 온기로 <br /> 일상의 가치를 디자인합니다
            </h2>
          </Link>
        </Reveal>
      </div>
      <div className="md:w-1/2">
        <Reveal delay={0.2}>
          <div className="space-y-6 text-sm md:text-base leading-relaxed opacity-80">
            <p>
              우리는 빠르게 변화하는 디지털 환경 속에서도 변하지 않는 본질의 가치를 믿습니다. 
              손끝에서 전해지는 질감, 종이 위의 번짐, 그리고 그 안에 담긴 시간의 흔적들.
            </p>
            <p className="text-left">
              캘리엠은 이러한 아날로그적 정서를 현대적 디자인 솔루션으로 해석하여, 
              단순히 아름다운 결과물을 넘어 사용자의 마음과 맞닿는 경험을 창조합니다.
            </p>
            <div className="hidden md:block pt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-brand-ink/30 pb-1 text-brand-ink/80 hover:text-brand-accent hover:border-brand-accent transition-all"
              >
                READ MORE <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

const BrandCore = () => (
  <Section id="philosophy" className="mt-0 mb-0 pb-0 md:!pt-0 md:pb-0 md:my-12 !px-0 w-full !max-w-none overflow-hidden">
    <div className="relative pt-0 pb-0 h-auto md:py-[200px] bg-[#a2ac93] w-screen left-1/2 -translate-x-1/2 md:w-auto md:left-auto md:translate-x-0">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-16 w-full max-w-none md:max-w-[1640px] mx-auto px-0 md:px-20">
        {[
          {
            title: "Philosophy",
            subtitle: "본질의 온기",
            content: "모든 존재의 진정성을 바탕으로 감성으로 시각화합니다. 우리는 겉으로 보이는 화려함보다 숨겨진 본질의 가치를 깊이 있게 들여다봅니다."
          },
          {
            title: "Vision",
            subtitle: "감성의 허브",
            content: "아날로그 감성과 미래 기술이 공존하는 글로벌 디자인 허브를 지향합니다. 인류의 보편적 정서를 담아 전 세계로 뻗어나가는 디자인을 만듭니다."
          },
          {
            title: "Mission",
            subtitle: "가치의 연결",
            content: "가치의 발견(Discover), 감성의 디자인(Design), 사회적 연결(Connect)을 통해 사람과 지역사회를 잇는 공감의 채널을 형성합니다."
          }
        ].map((item, idx) => (
          <Fragment key={item.title}>
            <div
              className={`relative min-h-[300px] flex items-center justify-center px-6 py-16 md:min-h-0 md:block md:px-0 md:py-0 ${
                idx === 1
                  ? 'w-full bg-[#f7f6f5] text-brand-ink md:w-auto md:bg-transparent md:text-white'
                  : 'w-full bg-[#a2ac93] text-white md:w-auto md:bg-transparent'
              }`}
            >
              <Reveal delay={idx * 0.1}>
                <div className="space-y-3 md:space-y-6 text-center">
                  <span
                    className={`text-[10px] uppercase tracking-[0.3em] font-bold ${
                      idx === 1 ? 'text-brand-ink/40 md:text-white/60' : 'text-white/60'
                    }`}
                  >
                    {item.title}
                  </span>

                  <h3
                    className={`text-2xl md:text-3xl serif-kor ${
                      idx === 1 ? 'text-brand-ink md:text-white' : 'text-white'
                    }`}
                  >
                    {item.subtitle}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed font-light max-w-xs mx-auto ${
                      idx === 1 ? 'text-brand-ink/70 md:text-white/80' : 'text-white/80'
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
              </Reveal>
              {idx === 2 && (
                <Link
                  to="/about"
                  className="absolute bottom-6 right-6 md:hidden inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white/70 pb-1 text-white/90"
                >
                  READ MORE <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {idx < 2 && (
                <div className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 w-[1px] h-[150px] bg-white/20" />
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  </Section>
);

const Portfolio = () => {
  const categories = [
    {
      id: 'product_featured',
      type: 'PRODUCT',
      image: mainMiddleProduct,
      mobileImage: mainMiddleProductMobile,
      cols: 'col-span-12'
    },
    {
      id: 'branding',
      type: 'BRANDING',
      image: mainMiddleBranding,
      cols: 'col-span-12 md:col-span-4'
    },
    {
      id: 'package',
      type: 'PACKAGE',
      image: mainMiddlePackage,
      cols: 'col-span-12 md:col-span-4'
    },
    {
      id: 'project',
      type: 'PROJECT',
      image: mainMiddleProject,
      cols: 'col-span-12 md:col-span-4'
    }
  ];

  return (
    <Section id="portfolio" className="space-y-6 md:space-y-6 pt-10 md:!pt-[100px] !pb-0">
      <Reveal>
      <div className="mb-[30px] md:mb-[8px]">
        <h2 className="relative inline-block text-[16px] font-sans font-medium uppercase tracking-tight md:pt-5 md:text-8xl md:font-serif md:tracking-tighter md:text-brand-ink md:opacity-10">
          PORTFOLIO
          <span className="absolute -bottom-2 right-0 h-[2px] w-screen bg-brand-ink/20 md:hidden" />
        </h2>
      </div>
    </Reveal>
      <div className="grid grid-cols-12 gap-2 md:gap-12 -mt-1 md:mt-0">
        {categories.map((cat, idx) => (
          <Link 
            key={cat.id} 
            to={
              cat.id === 'branding' ? "/branding" : 
              cat.id === 'package' ? "/package" : 
              cat.id === 'project' ? "/project" : 
              "/product"
            }
            className={cn("group cursor-pointer block", cat.cols)}
          >
            <Reveal delay={0.1 * idx}>
              <div className={cn("overflow-hidden relative appearance-none mb-6", cat.id === 'product_featured' ? "w-full aspect-square md:!h-[500px] md:!w-[1089px] md:!aspect-auto mx-auto" : "aspect-square")}>
                {cat.id === 'product_featured' && cat.mobileImage ? (
                  <>
                    <img 
                      src={cat.mobileImage} 
                      alt={`${cat.type} Mobile`} 
                      className="md:hidden w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src={cat.image} 
                      alt={cat.type} 
                      className="hidden md:block w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </>
                ) : (
                  <img 
                    src={cat.image} 
                    alt={cat.type} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}

              {/* READ MORE */}
              <span 
                className={cn(
                   "absolute z-10 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] border-b pb-1 transition-all duration-300",
                  cat.id === "product_featured"
                    ? "right-4 md:right-auto md:left-[490px] bottom-[16px] text-brand-ink/80 border-brand-ink/20 hover:gap-5"
                    : "right-4 md:right-auto md:left-[220px] bottom-[16px] text-brand-ink/80 border-brand-ink/20 hover:gap-5"
                )}
              >
                READ MORE
                <span className="text-base leading-none">→</span>
              </span>
            </div>
            </Reveal>
          </Link>
        ))}
      </div>
    </Section>
  );
};

const BrandJournal = () => (
  <Section id="journal" className="relative overflow-hidden pt-[28px] pb-[48px] md:pt-[120px]">
    {/* Mobile Title */}
    <div className="md:hidden mb-5">
      <Link to="/journals" className="flex justify-between items-baseline">
        <h2 className="relative inline-block text-[16px] font-sans font-medium uppercase tracking-tight text-brand-ink/90">
          JOURNALS
          <span className="absolute -bottom-2 right-0 h-[2px] w-screen bg-brand-ink/20" />
        </h2>
        <span className="text-[10px] opacity-40 font-bold tracking-[0.3em] uppercase">VIEW ALL</span>
      </Link>
    </div>

    {/* PC Title - ABOUT / PORTFOLIO처럼 왼쪽 정렬 */}
    <div className="hidden md:block mb-8">
      <Reveal>
        <Link to="/journals" className="group flex justify-between items-baseline">
          <h2 className="relative inline-block text-3xl font-sans font-medium uppercase tracking-tight text-brand-ink/90 md:pt-5 md:text-8xl md:font-serif md:tracking-tighter md:text-brand-ink md:opacity-10 group-hover:text-brand-accent transition-all">
            JOURNALS
          </h2>
          <span className="text-[10px] opacity-40 font-bold tracking-[0.3em] uppercase group-hover:opacity-60 transition-opacity">
            VIEW ALL
          </span>
        </Link>
      </Reveal>
    </div>

    {/* Image + Journal List */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
      <div className="md:w-1/2 self-start h-[220px] md:h-[600px] w-full overflow-hidden">
        <Reveal>
          <div className="h-[220px] md:h-[600px] w-full">
            <img 
              src={mainBottomJournalMobile}
              alt="Brand Journal Mobile" 
              className="md:hidden w-full h-full object-cover object-[center_85%]"
              referrerPolicy="no-referrer"
            />
            <img 
              src={mainBottomJournal01}
              alt="Brand Journal" 
              className="hidden md:block w-full h-full object-cover object-[center_85%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </div>

      <div className="md:w-1/2 space-y-6 md:space-y-12 divide-y divide-brand-ink/5">
        {[
          {
            date: "2026.04.23",
            title: "가정의 달 기념 신상 봉투 출시",
            desc: "5월, 가정의 달을 맞이하여 사랑을 전달할 수 있는 캘리엠의 봉투 4종을 제작하였습니다.",
            link: "/journal/family-month-envelope"
          },
          {
            date: "2026.01.15",
            title: "2025 고양 인쇄인의 날, 고양 인쇄기술경진대회 금상 수상",
            desc: "출품작인 '밀크티백 센트 형태의 인쇄패키지 작품'이 금상을 수상하였습니다."
          },
          {
            date: "2025.03.17",
            title: "중소기업혁신바우처 수행기관 브랜드 지원 최종 승인",
            desc: "8개월간 진행된 브랜드 개발 프로젝트로 캘리엠의 브랜드 고유의 색을 더 깊이 있게 정의해보았습니다."
          },
          {
            date: "2025.02.20",
            title: "전시 참가: 시와 찻잔 사이 (교하도서관)",
            desc: "1월 7일부터 23일까지 전시회가 진행됩니다."
          }
        ].map((item, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <Link 
              to={item.link || '#'} 
              className={cn(
                "pt-6 md:pt-12 first:pt-0 group block",
                item.link ? "cursor-pointer" : "cursor-default"
              )}
            >
              <span className="text-[10px] font-bold tracking-widest opacity-40 mb-2 md:mb-3 block">{item.date}</span>
              <h3 className={cn(
                "serif-kor mb-3 md:mb-4 duration-300 group-hover:text-[#7A5C50]/70 transition-colors leading-snug",
                idx === 0 ? "text-base md:text-xl" : "text-[15px] md:text-xl"
              )}>
                {item.title}
              </h3>
              <p className="hidden md:block text-sm opacity-60 leading-relaxed font-light">
                {item.desc}
              </p>
              <div className="mt-4 hidden md:flex items-center gap-2 md:group-hover:gap-5 text-[10px] font-bold uppercase tracking-widest opacity-60 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-60 md:group-hover:translate-x-0 transition-all ease-out">
                READ MORE <span className="text-base leading-none">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" className="py-32">
    <div className="bg-brand-accent/5 rounded-[3rem] p-12 md:p-24 text-center space-y-12">
      <Reveal>
        <span className="italic-serif text-brand-accent text-lg">Connect with us</span>
        <h2 className="text-[17px] md:text-[28px] serif-kor mt-4">
          당신의 소중한 가치에 <br /> 캘리엠의 온기를 더해보세요
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <form className="max-w-xl mx-auto space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-brand-bg border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-brand-bg border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
            />
          </div>
          <textarea 
            placeholder="Tell us about your project" 
            rows={4} 
            className="w-full bg-brand-bg border border-brand-ink/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors resize-none"
          />
          <button className="w-full bg-brand-ink text-brand-bg rounded-xl py-4 font-semibold text-sm hover:opacity-90 transition-opacity tracking-widest uppercase">
            Send Inquiry
          </button>
        </form>
      </Reveal>
    </div>
  </Section>
);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="selection:bg-brand-accent/20">
      <Navigation />
      <Hero />
      <About />
      <BrandCore />
      <Portfolio />
      <BrandJournal />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
