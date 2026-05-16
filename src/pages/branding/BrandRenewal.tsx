import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

import heroImg from '../../images/branding/limewood/featured.webp';
import brandPhilosophyImg from '../../images/branding/limewood/overview.webp';
import brandAnalysisImg from '../../images/branding/limewood/block.webp';
import biRenewalImg from '../../images/branding/limewood/detail-01.webp';
import guidelineImg from '../../images/branding/limewood/detail-02.webp';
import application01Img from '../../images/branding/limewood/mockup-01.webp';
import application02Img from '../../images/branding/limewood/mockup-02.webp';

// Image imports (Prepared as requested, using placeholders if files are missing)
// import finalImg from '../../images/branding/limewood/detail-01.webp';

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
            src={heroImg} 
            alt="LIMEWOOD BRAND IDENTITY Hero" 
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
                라임우드 <br /> 브랜드 리뉴얼
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
                <p className="text-sm md:text-base">LImewood</p>
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
              src={brandPhilosophyImg} 
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
              아이의 성장을 위한 따뜻한 공간을 디자인하다
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                라임우드는 자연 친화적인 감성과 아이의 성장 환경을 함께 고민하는 유아 가구 브랜드입니다.
                이번 프로젝트는 단순한 로고 리뉴얼이 아닌, 브랜드의 방향성과 감성을 다시 정의하는 과정에 집중했습니다.
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
              src={brandAnalysisImg} 
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
              브랜드의 철학을 시각 언어로 재구성하다
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                나무를 단순화한 심볼, 블록을 쌓아 올린 듯한 형태, 부드러운 곡선과 따뜻한 컬러를 통해 놀이와 배움, 안정감과 상상력이 공존하는 브랜드 경험을 구축하고자 했습니다.
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
              src={biRenewalImg} 
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
              감성적이지만 정직한 브랜드 이미지
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                브랜드 핵심 키워드는 감성, 정직, 그리고 로컬 기반의 따뜻함입니다.
                친환경적인 분위기와 아이를 위한 안전한 성장 공간의 이미지를 시각적으로 전달하는 데 집중했습니다
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
              src={guidelineImg} 
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
              브랜드 전반에 적용 가능한 CI 시스템 구축
            </h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                심볼마크, 국·영문 워드마크, 컬러 시스템, 타이포그래피, 응용 디자인 가이드를 포함하여 온·오프라인 환경에서 일관된 브랜드 경험이 유지될 수 있도록 설계했습니다.
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
              <img src={application01Img} alt="Application 01" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={application02Img} alt="Application 02" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              실제 운영을 고려한 브랜드 응용 디자인
            </h2>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-70">
             명함, 봉투, 쇼핑백, 사원증 등 실무 환경에서 사용 가능한 항목까지 확장하여 브랜드 운영 과정에서도 통일된 인상을 유지할 수 있도록 구성했습니다.
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
                자연과 아이의 성장이 함께 어우러지는 브랜드 경험
              </h2>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              아이와 공간, 그리고 자연이 함께 어우러지는 브랜드 경험을 목표로 라임우드만의 따뜻한 아이덴티티를 구축했습니다.
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
