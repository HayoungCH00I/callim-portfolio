import { Fragment } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Section, Reveal } from '../components/Common';
import biImage01 from '../images/about/bi-01.webp';
import biImage02 from '../images/about/bi-02.webp';

const PageHeader = () => (
  <Section id="page-header" className="pt-32 pb-2 md:pt-48 md:pb-4">
    <Reveal>
      <h1 className="text-5xl md:text-8xl serif tracking-tighter text-brand-ink opacity-10">
        ABOUT
      </h1>
    </Reveal>
  </Section>
);

const BrandIntro = () => (
  <Section id="brand-intro" className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start pb-20 md:pb-32">
    <div className="md:w-1/2">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight serif-kor">
          아날로그의 온기로 <br /> 일상의 가치를 디자인합니다
        </h2>
      </Reveal>
    </div>
    <div className="md:w-1/2">
      <Reveal delay={0.2}>
        <div className="space-y-6 text-base md:text-lg leading-relaxed opacity-80">
          <p>
            우리는 빠르게 변화하는 디지털 환경 속에서도 변하지 않는 본질의 가치를 믿습니다. 
            손끝에서 전해지는 질감, 종이 위의 번짐, 그리고 그 안에 담긴 시간의 흔적들.
          </p>
          <p>
            캘리엠은 이러한 아날로그적 정서를 현대적 디자인 솔루션으로 해석하여, 
            단순히 아름다운 결과물을 넘어 사용자의 마음과 맞닿는 경험을 창조합니다.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);

const BrandValues = () => (
  <Section id="brand-values" className="bg-[#a2ac93] !max-w-none px-6 py-24 md:py-40 text-white">
    <div className="max-w-[1088px] md:max-w-[1640px] mx-auto px-0 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
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
          <div className="relative">
            <Reveal delay={idx * 0.1}>
              <div className="space-y-6 text-center md:text-left">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">{item.title}</span>
                <h3 className="text-2xl md:text-3xl serif-kor">{item.subtitle}</h3>
                <p className="text-sm md:text-base leading-relaxed text-white/80 font-light max-w-xs mx-auto md:mx-0">{item.content}</p>
              </div>
            </Reveal>
            {idx < 2 && (
              <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20" />
            )}
          </div>
          {idx < 2 && (
            <div className="py-6 md:hidden">
              <div className="w-16 h-px bg-white/30 mx-auto" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  </Section>
);

const BrandIdentity = () => (
  <Section id="brand-identity" className="py-24 md:py-40">
    <Reveal>
      <div className="mb-12 md:mb-20 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">Design Assets</span>
        <h2 className="text-3xl md:text-4xl serif mt-4">Brand Identity</h2>
      </div>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {[biImage01, biImage02].map((img, idx) => (
        <Reveal key={idx} delay={idx * 0.2}>
          <div className="bg-white border border-brand-ink/5 rounded-2xl p-12 md:p-20 aspect-[4/3] flex items-center justify-center overflow-hidden">
            <img 
              src={img} 
              alt={`CALLI-M BI ${idx + 1}`} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

const History = () => {
  const historyData = [
    { year: "2026", content: "CALLI-M Portfolio Renewal", highlight: true },
    { year: "2024", content: "패키지 / 브랜딩 / 공공 프로젝트 포트폴리오 확장" },
    { year: "2022", content: "지역 기반 디자인 프로젝트 참여" },
    { year: "2020", content: "브랜드 디자인 및 패키지 디자인 프로젝트 확장" },
    { year: "2018", content: "감성 문구 및 디자인 제품 제작 확대" },
    { year: "2016", content: "CALLI-M 설립", highlight: true },
  ];

  return (
    <Section id="history" className="py-24 md:py-40 border-t border-brand-ink/5">
      <Reveal>
        <div className="mb-16 md:mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">Timeline</span>
          <h2 className="text-3xl md:text-4xl serif mt-4">History</h2>
        </div>
      </Reveal>
      <div className="max-w-2xl mx-auto px-6 relative">
        {/* Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-ink/10 -translate-x-1/2" />
        
        <div className="space-y-12 md:space-y-20 relative">
          {historyData.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className={`flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className={`flex flex-col items-start ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <span className={`font-serif leading-none mb-2 ${item.highlight ? 'text-4xl md:text-6xl text-brand-accent' : 'text-2xl md:text-3xl opacity-30 text-brand-ink'}`}>
                      {item.year}
                    </span>
                    <p className={`text-base md:text-lg serif-kor tracking-tight ${item.highlight ? 'font-bold opacity-90' : 'opacity-60'}`}>
                      {item.content}
                    </p>
                  </div>
                </div>
                <div className="flex absolute left-6 md:left-1/2 -translate-x-1/2 items-center justify-center top-2 md:top-auto">
                  <div className={`w-3 h-3 rounded-full border-2 border-brand-bg ${item.highlight ? 'bg-brand-accent scale-125' : 'bg-brand-ink/20'}`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

const About = () => {
  return (
    <div className="selection:bg-brand-accent/20 bg-brand-bg">
      <Navigation />
      <main>
        <PageHeader />
        <BrandIntro />
        <BrandValues />
        <BrandIdentity />
        <History />
      </main>
      <Footer />
    </div>
  );
};

export default About;
