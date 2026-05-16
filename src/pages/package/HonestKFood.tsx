import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

import mainHeroImg from '../../images/package/honest-k-food/featured-honest-k-food.png';
import brandStoryImgLocal from '../../images/package/honest-k-food/overview.webp';
import detailImg1Local from '../../images/package/honest-k-food/detail-01.webp';
import detailImg2Local from '../../images/package/honest-k-food/detail-02.webp';
import labelSystemImgLocal from '../../images/package/honest-k-food/label.webp';
import packageDesignImgLocal from '../../images/package/honest-k-food/outcome.jpg';

// Images
const mainHero = mainHeroImg;
const brandStoryImg = brandStoryImgLocal;
const detailImg1 = detailImg1Local;
const labelDetail02 = detailImg2Local;
const designConceptImg = detailImg1Local;
const labelSystemImg = labelSystemImgLocal;

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1594914141221-72782069ed89?auto=format&fit=crop&q=80&w=1600';
// Using placeholders for the rest of the visual story - updated names for future replacement
const labelSystemImg1 = labelSystemImg;
const labelSystemImg2 = labelDetail02;
const packageDesignImg = packageDesignImgLocal;

const HonestKFood = () => {
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
            src={mainHero} 
            alt="HONEST K FOOD Hero" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* 2. PROJECT INTRO & OVERVIEW SECTION */}
      <section className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-16">
              <div className="space-y-12">
                <span 
                  className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  Package Design Portfolio
                </span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]">
                    어니스트케이푸드 <br />
                    까나리어간장
                  </h1>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left">
                  백령도의 지역성과 건강한 식재료 철학을 담아 <br />
                  로컬 식품 브랜드의 진정성을 시각적으로 풀어낸 패키지 디자인 프로젝트
                </p>
              </div>
            </div>
          </div>

          {/* Overview Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-ink/5 pt-12 pb-24">
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans">Honest K Food</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans">Package Design</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans whitespace-pre-line">Label Sticker / Product Tag / {"\n"}Package Box</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans leading-relaxed">Local Food / Honest ingredients / {"\n"}Natural Branding / Locality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND STORY */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={brandStoryImg} 
              alt="Brand Story Visual" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              지역의 식재료로 정직한 먹거리를 만드는 브랜드
            </h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                어니스트케이푸드는 지역의 식재료를 바탕으로 건강한 먹거리를 만들어가는 로컬 식품 브랜드입니다. <br />
                대기업 중심의 식품 시장 속에서도 지역 상품만이 가질 수 있는 가치에 주목하며, <br />
                지역 경제와 생산자의 진정성을 함께 담아내는 브랜드 방향성을 이어가고 있습니다.
              </p>
              <p>
                천연 재료만을 사용해 보다 건강한 식재료를 만들고자 하는 철학은 제품 하나하나에 자연스럽게 담겨 있으며, <br />
                캘리엠은 이러한 브랜드의 마음이 소비자에게 차분하게 전달될 수 있도록 패키지 디자인 작업을 진행했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. DESIGN CONCEPT */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={designConceptImg} 
              alt="Design Concept Visual" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              백령도의 바다와 지역성을 담은 시각 언어
            </h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                패키지 디자인은 백령도의 청정한 이미지를 바탕으로 구성했습니다. <br />
                까나리 생선 일러스트와 바다를 연상시키는 그래픽 요소를 활용해 <br />
                제품의 원산지와 특징이 직관적으로 전달될 수 있도록 디자인했습니다.
              </p>
              <p>
                과장된 표현보다는 자연스럽고 정돈된 분위기에 집중했으며, <br />
                지역 식품이 가진 진정성과 신뢰감이 시각적으로 드러나도록 방향을 설정했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 5. LABEL SYSTEM */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={labelSystemImg1} alt="Label Detail 01" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={labelSystemImg2} alt="Label Detail 02" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              정보 전달은 명확하게, 인상은 차분하게
            </h3>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              병 라벨 스티커부터 제품 설명 태그까지 동일한 디자인 언어를 적용하여 브랜드의 일관성을 유지했습니다. <br />
              복잡한 정보는 읽기 쉽고 부담 없는 레이아웃으로 정리했으며, 제품의 특징과 원재료 정보가 <br />
              자연스럽게 전달될 수 있도록 타이포그래피와 정보 구조를 구성했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 6. PACKAGE DESIGN */}
      <Section className="px-6 md:px-12 lg:px-24 pb-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={packageDesignImg} 
              alt="Package Design Visual" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-12 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              선물용으로도 어울리는 패키지 디자인
            </h3>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              까나리어간장 병을 담는 포장 박스에도 동일한 디자인 시스템을 적용하여 제품 전체의 완성도를 높였습니다. <br />
              일상에서 사용하는 식재료이면서도, 지역의 이야기를 담은 특별한 선물처럼 느껴질 수 있도록 <br />
              차분하고 정돈된 패키지 분위기를 목표로 했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 7. FINAL OUTCOME */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">Final Outcome</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                로컬 브랜드의 가치를 <br />
                차분하게 전달하는 패키지 디자인
              </h2>
            </div>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              이번 프로젝트는 단순한 식품 패키지 제작을 넘어, 지역 식품 브랜드가 가진 진정성과 가치를 <br className="hidden md:block" />
              디자인으로 전달하는 작업이었습니다. 캘리엠은 앞으로도 사람과 지역을 연결하는 브랜드와 함께하며, <br className="hidden md:block" />
              작지만 의미 있는 이야기를 담은 디자인을 이어가고자 합니다.
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

export default HonestKFood;
