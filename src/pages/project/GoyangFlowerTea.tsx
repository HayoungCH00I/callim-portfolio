import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Images from Goyang Milktea project
import heroImg from '../../images/project/goyang-milktea/1-1.webp';
import heroImgMobile from '../../images/project/goyang-milktea/1-1 mobile.webp';

import sec1Img2 from '../../images/project/goyang-milktea/3-1.webp';
import sec1Img2Mobile from '../../images/project/goyang-milktea/3-1 mobile.webp';
import sec1Img3 from '../../images/project/goyang-milktea/3-2.webp';
import sec1Img3Mobile from '../../images/project/goyang-milktea/3-2 mobile.webp';

import sec2Img1 from '../../images/project/goyang-milktea/2-4.webp';
import sec2Img2 from '../../images/project/goyang-milktea/1-2.webp';
import sec2Img3 from '../../images/project/goyang-milktea/2-1.webp';

import sec3Img1 from '../../images/project/goyang-milktea/2-2.webp';
import sec3Img2 from '../../images/project/goyang-milktea/2-3.webp';



const GoyangFlowerTea = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 01 HERO SECTION */}
      <section className="relative h-[78vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImgMobile} 
            alt="Goyang International Flower Exhibition Tea Hero Mobile" 
            className="md:hidden w-full h-full object-cover object-center"
          />
          <img 
            src={heroImg} 
            alt="Goyang International Flower Exhibition Tea Hero" 
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
                    고양국제꽃박람회 <br />
                    밀크티백 세트
                  </h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    GOYANG FLOWER TEA BAG SET
                  </p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left">
                  고양시의 문화와 풍경을 감성적인 일러스트와  <br className="hidden md:block" />
                  밀크티로 풀어낸 지역 특화 상품 개발 프로젝트입니다.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">고양국제박람회재단</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">Package Design / Branding</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line">Product Design / Package Design / Illustration / Branding</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed">Goyang / Local Goods / Illustration / Milk Tea / Tourism</p>
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
              지역의 이야기를 상품으로 만들다
            </h3>
            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                고양시는 아름다운 자연과 문화가 공존하는 도시입니다. <br className="hidden md:block" />
                캘리엠은 단순한 기념품이 아닌, 지역의 풍경과 감성을 담아 오래 기억될 수 있는 상품을 만들고자 했습니다.
              </p>
              <p>
                고양국제꽃박람회와 일산호수공원 등 지역의 상징적인 장소를 일러스트로 표현하고, <br className="hidden md:block" />
                이를 밀크티와 결합하여 새로운 형태의 지역 굿즈를 제안했습니다.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 02 Section 01: 3종 세트 연출컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={sec1Img2Mobile} alt="3종 세트 연출컷 02 Mobile" className="md:hidden w-full h-auto object-cover" />
              <img src={sec1Img2} alt="3종 세트 연출컷 02" className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={sec1Img3Mobile} alt="3종 세트 연출컷 03 Mobile" className="md:hidden w-full h-auto object-cover" />
              <img src={sec1Img3} alt="3종 세트 연출컷 03" className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              고양의 순간을 담은 일러스트
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              제품에 사용된 일러스트는 고양시를 대표하는 장소와 풍경을 바탕으로 제작되었습니다. <br className="hidden md:block" />
              지역의 이미지를 단순히 기록하는 것이 아니라, 따뜻한 감성과 이야기로 재해석하여 <br className="hidden md:block" />
              누구나 편안하게 공감할 수 있는 시각 언어로 표현했습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 03 Section 02: 티백 디자인 개별컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={sec2Img2} alt="티백 디자인 개별컷 02" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={sec2Img3} alt="티백 디자인 개별컷 03" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              패키지에 담은 지역의 가치
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              밀크티백 세트는 선물용으로도 활용할 수 있도록 패키지 구조부터 세심하게 설계했습니다. <br className="hidden md:block" />
              친환경 크라프트 패키지와 절제된 그래픽 구성은 지역 상품이 지닌 진정성과 <br className="hidden md:block" />
              따뜻한 감성을 자연스럽게 전달하도록 디자인되었습니다.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* 04 Section 03: 패키지 오픈컷 & 구조컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={sec3Img1} alt="패키지 오픈컷" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={sec3Img2} alt="패키지 구조컷" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              지역을 기억하는 새로운 방식
            </h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              이번 프로젝트는 단순한 식음료 상품 개발을 넘어, 지역의 풍경과 이야기를 사람들의 일상 속으로 연결하는 작업이었습니다. <br className="hidden md:block" />
              한 장의 일러스트와 한 잔의 차를 통해 고양을 경험하고 <br className="hidden md:block" />
              기억할 수 있는 새로운 관광 콘텐츠를 제안하고자 했습니다.
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
                A Cup Filled With Goyang
              </h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>고양시의 대표적인 풍경과 이야기를 따뜻한 일러스트와 서정적인 색감으로 한 잔의 밀크티에 담아냈습니다.</p>
              <p>단순한 상품 디자인을 넘어, 고양의 소중한 순간들이 누구나 일상 속에서 오랫동안 꺼내어 볼 수 있는 따뜻한 기억으로 남을 수 있도록 완성하였습니다.</p>
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

export default GoyangFlowerTea;
