import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Section, Reveal } from '../components/Common';
import biImage01 from '../images/about/bi-01.webp';
import bravoMyLifeVideo from '../images/about/bravo-my-life.mp4';

const PageHeader = () => (
  <Section id="page-header" className="pt-16 pb-1 md:pt-48 md:pb-4">
    <Reveal>
      <h1 className="pt-5 text-5xl md:text-8xl serif tracking-tighter text-brand-ink opacity-10">
        ABOUT
      </h1>
    </Reveal>
  </Section>
);

const BrandIntro = () => (
  <Section id="brand-intro" className="flex flex-col md:flex-row gap-8 lg:gap-24 items-start pt-[26px] pb-[140px] md:pb-32">
    <div className="md:w-1/2">
      <Reveal>
        <h2 className="text-[22px] md:text-4xl font-bold leading-tight serif-kor">
          아날로그의 온기로 <br /> 일상의 가치를 디자인합니다
        </h2>
      </Reveal>
    </div>
    <div className="md:w-1/2">
      <Reveal delay={0.2}>
        <div className="w-full max-w-[450px] h-auto space-y-6 text-[14px] md:text-lg leading-relaxed opacity-80">
          <p className="w-full md:w-[450px]">
            우리는 빠르게 변화하는 디지털 환경 속에서도 변하지 않는 본질의 가치를 믿습니다. 
            손끝에서 전해지는 질감, 종이 위의 번짐, 그리고 그 안에 담긴 시간의 흔적들.
          </p>
          <p className="w-full md:w-[450px]">
            캘리엠은 이러한 아날로그적 정서를 현대적 디자인 솔루션으로 해석하여, 
            단순히 아름다운 결과물을 넘어 사용자의 마음과 맞닿는 경험을 창조합니다.
          </p>
        </div>
      </Reveal>
    </div>
  </Section>
);

const BrandValues = () => (
  <Section id="brand-values" className="bg-[#a2ac93] !max-w-none px-0 py-5 md:px-6 md:py-40 text-white">
    <div className="max-w-[1088px] md:max-w-[1640px] mx-auto px-0 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-24">
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
            className={`relative min-h-[280px] flex items-center justify-center px-6 py-12 md:min-h-0 md:block md:px-0 md:py-0 ${
              idx === 1 ? 'w-full bg-[#f7f6f5] text-brand-ink md:w-auto md:bg-transparent md:text-white' : 'w-full bg-[#a2ac93] text-white md:w-auto md:bg-transparent'
            }`}
          >  
            <Reveal delay={idx * 0.1}>
              <div className="space-y-6 text-center md:text-left">
                <span
                  className={`text-[10px] uppercase tracking-[0.3em] font-bold ${
                    idx === 1 ? 'text-brand-ink/40 md:text-white/60' : 'text-white/60'
                  }`}
                >
                  {item.title}
                </span>
                <h3 className="text-2xl md:text-3xl serif-kor">{item.subtitle}</h3>
                <p className={`text-sm md:text-base leading-relaxed font-light max-w-xs mx-auto md:mx-0 ${
                  idx === 1 ? 'text-brand-ink/70 md:text-white/80' : 'text-white/80'
                }`}>
                  {item.content}
                </p>
              </div>
            </Reveal>
            {idx < 2 && (
              <div className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 w-px h-24 bg-white/20" />
            )}
          </div>
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
        <h2 className="text-[20px] md:text-4xl font-sans font-medium tracking-tight mt-4">Brand Identity</h2>
      </div>
    </Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <Reveal delay={0}>
        <div className="bg-white border border-brand-ink/5 rounded-2xl p-12 md:p-20 aspect-[4/3] flex items-center justify-center overflow-hidden">
          <img 
            src={biImage01} 
            alt="CALLI-M BI 1" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-white border border-brand-ink/5 rounded-2xl p-0 md:p-0 aspect-[4/3] flex items-center justify-center overflow-hidden">
          <video
            src={bravoMyLifeVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="CALLI-M brand identity motion"
            className="w-full h-full object-contain"
          />
        </div>
      </Reveal>
    </div>
  </Section>
);

const History = () => {
  const historyData = [
    { year: "2026", content: "CALLI-M Portfolio Renewal", highlight: true },
    { year: "2024", content: "기업장작전담부서 인정(문화체육관광부)" },
    { year: "2023", content: [
                      "경기가족친화 일하기 좋은 기업 인증 (경기도)",
                      "캘리엠 상표 등록 (제 40-1981338 호)",
                      "산업디자인전문회사 (종합디자인) 신고 (제 11123 호)",
                      "중소기업 혁신바우처 사업 수행기관 선정 (중소벤처기업진흥공단)",
                      "고양인쇄기술경진대회 대상 (제 23-002-00895호)",
                      "한국사회적기업중앙협의회 표창장 (제 2023-008호)",
                      "소상공인 O2O 플랫폼 진출 지원사업 선정",
                      "하나파워온 혁신기업 인턴십 지원 선정",
                      "한국사회적기업진흥원 사회적경제기업 크라우드펀딩 지원사업 선정",
                      "다산 page 입점 계약",
                      "시흥꿈상회 입점 계약",
                      "국가공인 옥외광고사 자격 취득 (232010182)",
                      "우수기술기업 인증 (시각디자인기술분야)",
                      "ESG 경영기업인증 (KoDATA)"
                   ],
    }, 
    { year: "2022", content: [
                      "신중년 도시재생 장업지원 프로젝트 JUMP-UP 5060 재도약 사업 지원",
                      "캘리엠 엽서가게 편집샵 오픈",
                      "폐섬유 업사이클링 다이어리 디자인 개발 (유한킴벌리사 납품계약)",
                      "K문구일본수쥴계약",
                      "제 21 회 서울디자인페스티벌 잠가 (서울 코엑스)",
                   ],
    }, 
    { year: "2021", content: [
                      "예비사회적 기업 지정 (경기 제 2021-27호/고용노동부형_제 2020-065호)",
                      "기업부설연구소 인증 (제 2021112047호)",
                      "벤저기업 인증 (제 20210624030124호)",
                      "고양시 사회적경제 유공자 표장 (고양시의회의장상)",
                      "서울대병원 지유글판 디자인 계약",
                   ],
    }, 
    { year: "2020", content: [
                      "도시재생 사회적 기업가 육성사업 선정 (한국 사회적 기업 진흥원)",
                      "UMP-UP 도시재생 사업화 지원 사업 선정 (LH 공사, 서울특별시 50플러스)",
                      "국민 카드 OPEN STAGE 스타트업 기업 선정",
                      "산업 디자인 전문회사 인증",
                      "디자인 컨설턴트 (DCC-E-0026_한국디자인진흥원)",
                   ],
    }, 
    { year: "2019", content: [
                      "주식회사 캘리엠 법인 전환",
                      "고양시 사회적 기업 장업 지원 사업 선정",
                      "베트남 서울 브랜드관 전시 (서울 산업 진흥원))",
                      "K서울 디자인 페스티벌 코엑스 잠가",
                   ],
    highlight: true}, 
  ];

  return (
    <Section id="history" className="py-24 md:py-40 border-t border-brand-ink/5">
      <Reveal>
        <div className="mb-16 md:mb-32 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold">Timeline</span>
          <h2 className="text-[20px] md:text-4xl font-sans font-medium tracking-tight mt-4">History</h2>
        </div>
      </Reveal>
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Timeline Line - Mobile: Align with first column, Desktop: Center */}
        <div className="absolute left-[48px] md:left-1/2 top-0 bottom-0 w-px bg-brand-ink/10 -translate-x-1/2" />
        
        <div className="space-y-0 relative">
          {historyData.map((item, idx) => {
            const isRight = idx % 2 === 1;

            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="grid grid-cols-[48px_1fr] md:grid-cols-[1fr_48px_1fr] items-start mb-12 md:mb-24 last:mb-0">
                  
                  {/* Left Column (Desktop: Left items only) */}
                  <div className="hidden md:flex justify-end">
                    {!isRight && (
                      <div className="max-w-[520px] w-full text-right pr-0 group">
                        <div className="flex items-center justify-end gap-6 h-12 md:h-20">
                          <span className={`font-serif leading-none tracking-tighter ${
                            item.highlight 
                              ? 'text-4xl lg:text-5xl text-brand-accent' 
                              : 'text-2xl lg:text-3xl opacity-20 text-brand-ink'
                          }`}>
                            {item.year}
                          </span>
                          <div className="w-12 h-px bg-brand-ink/20 shrink-0" />
                        </div>
                        <div className={`text-[13px] md:text-[15px] serif-kor tracking-tight leading-relaxed mt-2 ${
                          item.highlight ? 'font-bold opacity-90' : 'opacity-60'
                        }`}>
                          {Array.isArray(item.content) ? (
                            <ul className="space-y-1.5 list-none p-0 inline-block">
                              {item.content.map((text, i) => (
                                <li key={i} className="md:whitespace-nowrap">{text}</li>
                              ))}
                            </ul>
                          ) : (
                            <p className="md:whitespace-nowrap">{item.content}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Column (Timeline Dot) */}
                  <div className="flex justify-center h-12 md:h-20 items-center">
                    <div className={`
                      w-3 h-3 rounded-full border-2 border-brand-bg relative z-10
                      ${item.highlight ? 'bg-brand-accent scale-150 shadow-[0_0_10px_rgba(var(--brand-accent-rgb),0.2)]' : 'bg-brand-ink/30'}
                    `} />
                  </div>

                  {/* Right Column (Mobile: All items, Desktop: Right items only) */}
                  <div className="flex justify-start min-h-[60px]">
                    <div className={`max-w-[520px] w-full text-left ${isRight ? 'block' : 'md:hidden'}`}>
                      <div className="flex items-center gap-6 h-12 md:h-20">
                        <div className="w-12 h-px bg-brand-ink/20 shrink-0" />
                        <span className={`font-serif leading-none tracking-tighter ${
                          item.highlight 
                            ? 'text-4xl lg:text-5xl text-brand-accent' 
                            : 'text-2xl lg:text-3xl opacity-20 text-brand-ink'
                        }`}>
                          {item.year}
                        </span>
                      </div>
                      <div className={`text-[13px] md:text-[15px] serif-kor tracking-tight leading-relaxed mt-2 ${
                        item.highlight ? 'font-bold opacity-90' : 'opacity-60'
                      }`}>
                        {Array.isArray(item.content) ? (
                          <ul className="space-y-1.5 list-none p-0 inline-block">
                            {item.content.map((text, i) => (
                              <li key={i} className="md:whitespace-nowrap">{text}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="md:whitespace-nowrap">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
