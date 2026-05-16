import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Image imports (Prepared as requested, using placeholders if files are missing)
// import heroImg from '../../images/project/brand-renewal/hero.webp';
// import brandPhilosophyImg from '../../images/project/brand-renewal/brand-philosophy.webp';
// import brandAnalysisImg from '../../images/project/brand-renewal/brand-analysis.webp';
// import biRenewalImg from '../../images/project/brand-renewal/bi-renewal.webp';
// import guidelineImg from '../../images/project/brand-renewal/guideline.webp';
// import application01Img from '../../images/project/brand-renewal/application-01.webp';
// import application02Img from '../../images/project/brand-renewal/application-02.webp';
// import finalImg from '../../images/project/brand-renewal/final.webp';

// Placeholder fallback URLs to prevent build errors
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb58f1?auto=format&fit=crop&q=80&w=2000';
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=1600';

const BrandRenewal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={FALLBACK_HERO} 
            alt="BRAND RENEWAL PROJECT Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <Reveal>
            <div className="space-y-6 text-white">
              <span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase opacity-70 block">
                BRAND RENEWAL PROJECT
              </span>
              <h1 className="text-4xl md:text-7xl font-maruburi font-medium leading-tight tracking-tight">
                친환경 원목 어린이 가구 <br /> 브랜드 리뉴얼
              </h1>
              <p className="text-base md:text-xl font-light opacity-80 max-w-2xl mx-auto">
                브랜드의 철학과 감성을 다시 정의하며 시각적 일관성과 <br className="hidden md:block" />
                브랜드 방향성을 구축한 전략 브랜딩 프로젝트입니다.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-ink/5 pt-12 pb-24">
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base">친환경 원목 어린이 가구 브랜드</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base">Brand Identity / Strategy</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base whitespace-pre-line">BI Renewal / CI System / {"\n"}Brand Guideline / Brand Story</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base leading-relaxed">Emotional · Honest · {"\n"}Local · Natural</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={FALLBACK_IMG} 
              alt="Brand Philosophy" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              브랜드의 본질을 다시 정리하는 일
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                브랜드 리뉴얼은 단순히 로고를 새롭게 바꾸는 작업이 아니라, 브랜드가 지닌 철학과 감성을 다시 정의하는 과정입니다. 
                캘리엠은 친환경 원목 어린이 가구 브랜드가 가진 따뜻함과 신뢰감을 중심으로 브랜드의 언어와 시각 방향성을 정리했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. BRAND ANALYSIS */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={FALLBACK_IMG} 
              alt="Brand Analysis" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              고객에게 전해져야 할 감성의 기준
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                브랜드가 전하고자 하는 자연스러움, 정직함, 안정감의 이미지를 분석하고, 이를 일관된 시각 언어로 확장할 수 있도록 방향을 설정했습니다. 
                제품의 소재감과 아이를 위한 브랜드라는 특성이 함께 느껴질 수 있도록 부드럽고 차분한 브랜딩 톤을 구축했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 5. BI / CI RENEWAL */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={FALLBACK_IMG} 
              alt="BI / CI Renewal" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              따뜻함과 신뢰감을 담은 아이덴티티
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                BI와 CI 시스템은 브랜드의 첫인상을 결정하는 핵심 요소로, 형태와 색, 타이포그래피가 하나의 방향으로 느껴지도록 정리했습니다. 
                과하지 않은 조형과 자연스러운 색감을 바탕으로 브랜드가 가진 건강한 이미지를 시각화했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 6. BRAND GUIDELINE */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={FALLBACK_IMG} 
              alt="Brand Guideline" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              브랜드가 흔들리지 않도록 만드는 기준
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                브랜드 가이드는 다양한 매체에서 동일한 인상을 유지하기 위한 기준입니다. 
                로고 사용 방식, 컬러 시스템, 타이포그래피, 이미지 톤을 정리하여 브랜드가 일관된 목소리로 전달될 수 있도록 구성했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 7. APPLICATION DESIGN */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={FALLBACK_IMG} alt="Application 01" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={FALLBACK_IMG} alt="Application 02" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              브랜드 경험으로 확장되는 디자인
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-70">
              패키지, 인쇄물, 온라인 콘텐츠 등 실제 접점에서 브랜드 아이덴티티가 자연스럽게 이어질 수 있도록 응용 디자인을 구성했습니다. 
              사용자가 브랜드를 만나는 모든 순간에 따뜻하고 신뢰감 있는 인상이 남도록 전체 경험을 설계했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 8. FINAL RESULT */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">Final Result</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                브랜드의 방향을 다시 세우는 리뉴얼
              </h2>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              이번 프로젝트는 브랜드가 가진 감성과 철학을 다시 정리하고, 앞으로의 커뮤니케이션 방향을 세우는 작업이었습니다. 
              캘리엠은 브랜드가 오래도록 신뢰받을 수 있도록 본질에 가까운 시각 언어를 만들어갑니다.
            </p>
            <div className="pt-8">
              <div className="w-1 h-24 bg-brand-accent/20 mx-auto" />
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
};

export default BrandRenewal;
