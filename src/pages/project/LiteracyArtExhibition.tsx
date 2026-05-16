import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Images
import heroPoster from '../../images/project/literacy-art-exhibition/featured.webp';
import heroPosterMobile from '../../images/project/literacy-art-exhibition/featured_mobile.webp';
import posterHorizontal from '../../images/project/literacy-art-exhibition/poster-horizontal.webp';
import posterVertical from '../../images/project/literacy-art-exhibition/poster-vertical.webp';
import calendarGrid from '../../images/project/literacy-art-exhibition/calendar-grid.webp';
import calendarDetail01 from '../../images/project/literacy-art-exhibition/calendar-detail-01.webp';
import calendarDetail02 from '../../images/project/literacy-art-exhibition/calendar-detail-02.webp';


const LiteracyArtExhibition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative h-[78vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPosterMobile} 
            alt="Literacy Art Exhibition Hero Mobile" 
            className="md:hidden w-full h-full object-cover object-center"
          />
          <img 
            src={heroPoster} 
            alt="Literacy Art Exhibition Hero" 
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* 2. PROJECT INTRO & OVERVIEW SECTION */}
      <section className="pt-10 md:pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro Information */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-8 md:pb-16">
              <div className="space-y-12">
                <span 
                  className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  Project Design Portfolio
                </span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]">
                    성인문해교육 <br />
                    시화전
                  </h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    LITERACY ART EXHIBITION
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left">
                  문해 학습자들의 시와 그림에 담긴 삶의 이야기를 <br className="hidden md:block" />
                  따뜻한 시선으로 풀어낸 공공 디자인 프로젝트입니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">국가평생교육진흥원</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">Public Design / Editorial Design</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line">Poster Design / Calendar Design</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed">Literacy / Learning / Community / Warmth</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECT MESSAGE */}
      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              배움은 삶을 다시 표현하는 일입니다
            </h3>
            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                문해교육은 단순히 글자를 읽고 쓰는 기술을 넘어, <br className="hidden md:block" />
                자신의 생각과 삶을 스스로 표현할 수 있도록 돕는 배움입니다.
              </p>
              <p>
                문해 학습자들의 시와 그림은 한 사람의 시간이 담긴 기록이자, <br className="hidden md:block" />
                다시 시작하는 삶의 용기를 보여줍니다. <br className="hidden md:block" />
                캘리엠은 이 따뜻한 이야기가 포스터와 캘린더 안에서 차분히 전해질 수 있도록 디자인했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. POSTER DESIGN SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={posterVertical} alt="Poster Vertical Design" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={posterHorizontal} alt="Poster Horizontal Design" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              진솔한 이야기를 전하는 포스터 디자인
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              문해 시화전 포스터는 학습자들의 시와 그림이 지닌 순수한 감동을 중심에 두고 구성했습니다. <br className="hidden md:block" />
              행사의 공공성과 교육적 의미가 분명하게 전달되도록 정보 구조는 명확하게 정리하되, <br className="hidden md:block" />
              전체 분위기는 따뜻하고 부드럽게 표현했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 5. CALENDAR SYSTEM SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={calendarGrid} 
              alt="Calendar System Grid" 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              한 해를 채운 배움의 문장들
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              2026년 캘린더는 문해 학습자들의 작품이 일상 속에서 오래 머물 수 있도록 기획한 디자인 결과물입니다. <br className="hidden md:block" />
              각 달마다 시와 그림이 가진 고유한 감정을 살리고, <br className="hidden md:block" />
              한 장 한 장 넘길 때마다 배움의 기쁨과 삶의 이야기가 자연스럽게 이어지도록 구성했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 6. DETAIL SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={calendarDetail01} alt="Calendar Detail 01" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={calendarDetail02} alt="Calendar Detail 02" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              작품의 온기를 살린 편집 디자인
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              캘린더의 각 페이지는 작품이 가진 분위기를 해치지 않도록 여백과 시선의 흐름을 섬세하게 조정했습니다. <br className="hidden md:block" />
              시 문구와 그림이 함께 읽히도록 타이포그래피의 크기와 배치를 정리하고, <br className="hidden md:block" />
              월별 정보는 조용히 배치해 작품 자체가 주인공이 되도록 했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 7. FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">Final Message</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                There Is No Age For Learning
              </h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>배움에는 나이가 없고, 한 사람의 이야기는 언제든 다시 시작될 수 있습니다.</p>
              <p>캘리엠은 앞으로도 사람의 마음과 삶을 연결하는 디자인을 이어가겠습니다.</p>
            </div>
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

export default LiteracyArtExhibition;
