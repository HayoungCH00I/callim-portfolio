import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Imported real postcard assets
import postcard1 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (1).webp';
import postcard2 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (2).webp';
import postcard3 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (3).webp';
import postcard4 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (4).webp';
import postcard5 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (5).webp';
import postcard6 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (6).webp';
import postcard7 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (7).webp';
import mobileHero from '../../images/journal/seongbuk-dong-postcard/mobile-hero.webp';

const SeongbukPostcard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 01 HERO SECTION */}
      <section className="relative h-[78vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile Hero Image (mobileHero) */}
          <img 
            src={mobileHero} 
            alt="Seongbuk-dong Postcard Hero Mobile" 
            className="block md:hidden w-full h-full object-cover object-center"
          />
          {/* Desktop Hero Image (postcard1) */}
          <img 
            src={postcard1} 
            alt="Seongbuk-dong Postcard Hero" 
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* PROJECT INTRO & OVERVIEW SECTION */}
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
                    성북동 엽서 프로젝트
                  </h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    SEONGBUK-DONG POSTCARD PROJECT
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left break-keep">
                  성북동 구도심의 오래된 골목과 건물이 품고 있는 도시의 서정적인 정서와 일상의 시간을 엽서 한 장에 따뜻한 일러스트와 감각적인 시선으로 풀어낸 기록입니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">성북동 엽서가게</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">Illustration / Local Goods</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line">Postcard Design / Art Illustration / Art Direction</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed">Seongbuk / Old Town / Postcard / Memory / Local Archives</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECT MESSAGE */}
      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              어… 이 골목 알 것 같다. 이 가게 지나간 적 있어.
            </h3>
            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep">
              <p>
                성북동은 오래된 건물과 골목들이 도시의 시간을 조용히 품고 있는 동네입니다. 캘리엠은 작업하며 가졌던 성북동 구도심의 친근함과 골목길 너머로 피어나는 서정적인 분위기를 전하고 싶었습니다.
              </p>
              <p>
                캘리엠이 그린 성북동의 소소한 풍경들이 보시는 한 분 한 분의 소중한 기억과 연결되며, 일상에 서정적이고 잔잔한 즐거움이 되었으면 하는 바람을 담았습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 02 Section 01: 골목과 따뜻한 느낌의 연출컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={postcard2} alt="성북동 골목 풍경" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={postcard3} alt="성북동 고유한 정취" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              도시의 유산과 일상의 가치를 기록하다
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep">
              과거와 현재가 자연스럽게 손닿아 이어져 가는 성북동의 특별한 장소들은 그 존재 자체만으로 깊은 이야기를 조용히 전해 주고 있습니다. 그렇기에 이번 작업은 단순한 드로잉을 넘어, 우리 삶터의 귀중한 헤리티지를 기록하는 가치 있는 기록으로 다가왔습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 03 Section 02: 엽서 실물 느낌의 카드 연출 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={postcard4} alt="성북동 엽서 실물 1" className="w-full h-full object-cover object-center" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={postcard5} alt="드로잉 디테일 연출" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              실물에 고스란히 배어든 따뜻함
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep">
              실제 종이 엽서로 구현된 실물은 화면 너머로 보던 이미지보다 훨씬 밀도 높고 포근함을 선사합니다. 구도심 고유의 스쳐 흘러가기 쉬운 소탈한 장면들과 햇살이 스민 순간들을 포커싱하여 보는 이의 가슴속 깊이 오래오래 아로새겨질 수 있는 따스한 일러스트 레이아웃을 구축했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 04 Section 03: 일상의 작고 따뜻한 순간들의 모음 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={postcard6} alt="드로잉 디테일 연출 2" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={postcard7} alt="드로잉 디테일 연출 3" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              성북동을 추억하는 다정한 매개체
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep">
              세월이 내려앉은 구도심의 낡은 비포장 길과 간판, 흐릿해진 벽보들이 캘리엠의 정교하고 부드러운 핸드드로잉 붓끝에서 새로운 생명력과 서정적인 아름다움으로 기록되었습니다. 그 정성이 담긴 실물 엽서 세트는 손에서 손으로 포근히 닿을 수 있는 가장 아름다운 기억의 매개체가 될 것입니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">Final Message</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                Warm Memories of Old Alleys
              </h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70 break-keep">
              <p>소중한 순간, 언제든 다정하게 가 닿아 안부를 건넬 수 있는 한 장의 따뜻한 엽서가 되기를 바랍니다.</p>
              <p>캘리엠은 도시가 품고 있는 보석 같은 아날로그의 장면들을 계속해서 차분히 기록해 나가겠습니다.</p>
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

export default SeongbukPostcard;
