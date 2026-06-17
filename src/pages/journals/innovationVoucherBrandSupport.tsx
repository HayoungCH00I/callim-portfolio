import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/innovation-voucher-brand-support/innovation-voucher-brand-support (1).webp";
import journalHeroImage2 from "../../images/journal/innovation-voucher-brand-support/innovation-voucher-brand-support (2).webp";

const InnovationVoucherBrandSupport = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('voucher-final-approval');

  if (!journal) {
    return null;
  }

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Journal</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl serif-kor leading-tight text-brand-ink/90 whitespace-pre-line">
              {journal.detailTitle || journal.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-bold opacity-30">
              <span>{journal.date}</span>
              <div className="w-8 h-px bg-brand-ink/20" />
              <span>By Calli-M</span>
            </div>
            <p className="text-lg opacity-70 serif-kor leading-relaxed max-w-2xl whitespace-pre-line">
              {journal.detailDesc || journal.desc}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Image Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal delay={0.2}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage1} 
                alt="브랜드 지원 최종 승인 01" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage2} 
                alt="브랜드 지원 최종 승인 02" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <Reveal delay={0.4}>
            <p className="text-brand-accent serif-kor text-xl md:text-2xl leading-relaxed italic whitespace-pre-line">
              “브랜드의 철학을 담아{"\n"}
              더 오래 기억되는{"\n"}
              정체성을 만들다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80 break-keep">
          <Reveal delay={0.5}>
            <p>
              2024년 7월부터 캘리엠은 중소벤처기업부 주관 중소기업 혁신바우처 사업의 수행기관으로서, <span className="font-semibold">{"<**** 디자인>"}</span>의 브랜드 아이덴티티(BI), 브랜드 슬로건, 브랜드 스토리 개발 프로젝트를 진행해왔습니다.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="space-y-2">
              <p className="font-semibold border-l-2 border-brand-accent/50 pl-3 text-brand-ink/90">
                약 8개월간 이어진 이번 프로젝트는
              </p>
              <ul className="list-decimal list-inside pl-4 space-y-1">
                <li>브랜드의 방향성과 철학 정립,</li>
                <li>소비자와의 접점을 고려한 트렌디한 BI 설계,</li>
                <li>브랜드의 진정성과 차별화를 담은 스토리 구성</li>
              </ul>
              <p className="pt-2">
                등을 중심으로, 캘리엠의 디자인 전략과 콘텐츠 기획 노하우를 바탕으로 진행되었습니다.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              그리고 2025년 3월 17일, 해당 과제는 최종 승인을 받았습니다.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="p-6 bg-brand-ink/5 rounded-sm space-y-3 border-l-4 border-brand-accent">
              <p className="italic font-medium text-brand-ink/85 whitespace-pre-line">
                "수행계획서 대비 수행내용과 최종 성과물이 누락 사항 없이 모두 제시되었으며, 수행 과정과 서비스 내용이 명확하게 기록됨. 최종 성과물이 트렌디하고 완성도 있게 완료된 것으로 평가됨."
              </p>
              <p className="text-xs opacity-60 text-right">- 최종평가 코멘트 中</p>
            </div>
          </Reveal>
          <Reveal delay={0.9}>
            <p>
              이번 평가는 단순한 승인 이상의 의미를 담고 있습니다. 기획부터 실행, 최종 결과물까지의 전 과정을 명확하고 세심하게 수행한 점, 그리고 결과물의 완성도와 브랜드 트렌드를 반영한 점이 높은 평가를 받은 것입니다.
            </p>
          </Reveal>
          <Reveal delay={1.0}>
            <p className="font-medium text-brand-ink/90">
              앞으로도 캘리엠은 브랜드가 가진 고유의 색을 더 깊이 있게 정의하고, 그 가치를 시각적으로 설득력 있게 전할 수 있도록 정성과 전문성을 더하겠습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer / Back Button */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <Link 
            to="/journals" 
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] hover:gap-6 transition-all border-b border-brand-ink/30 pb-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Journals
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationVoucherBrandSupport;
