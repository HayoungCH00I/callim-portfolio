import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/goyang-2025-printer's-day/goyang-2025-printer's-day (7).jpg";
import journalHeroImage2 from "../../images/journal/goyang-2025-printer's-day/goyang-2025-printer's-day (5).jpg";

const GoyangPrintersDay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('goyang-2025-printer-day');

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
            <h1 className="text-4xl md:text-5xl serif-kor leading-tight text-brand-ink/90 whitespace-pre-line">
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
            <div className="overflow-hidden aspect-[16/11] rounded-sm">
              <img 
                src={journalHeroImage1} 
                alt="Goyang Printer's Day Award 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm">
              <img 
                src={journalHeroImage2} 
                alt="Goyang Printer's Day Award 2" 
                className="w-full h-full object-cover"
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
            <p className="text-brand-accent serif-kor text-xl md:text-2xl leading-relaxed italic">
              “고양의 이야기를 담은 <br />
              한 잔의 차, <br />
              지역의 가치를 디자인하다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80">
          <Reveal delay={0.5}>
            <p>
              캘리엠은 고양시의 대표 명소를 감성 일러스트로 재해석한 「Moments of Goyang」 밀크티백 세트를 기획하였습니다. 단순한 관광기념품을 넘어, 일상 속에서도 지역의 이야기를 경험할 수 있는 새로운 형태의 지역 굿즈를 제안하고자 했습니다.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>
              고양꽃박람회, 일산호수공원, 킨텍스, 행주산성 등 여섯 개 명소를 하나의 컬렉션으로 구성하였으며, 차와 디자인을 결합해 선물용과 소장용 모두에 적합한 제품으로 개발하였습니다.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              재사용 가능한 패키지 구조와 감성적인 일러스트, 고품질 인쇄 기술을 결합하여 지역성과 실용성을 동시에 구현하였으며, 이러한 완성도를 인정받아 2025 고양 인쇄기술경진대회 금상을 수상하였습니다.
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

export default GoyangPrintersDay;
