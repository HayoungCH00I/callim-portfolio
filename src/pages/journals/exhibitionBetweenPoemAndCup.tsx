import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/kyoha-library-exhibition/kyoha-library-exhibition01.webp";
import journalHeroImage2 from "../../images/journal/kyoha-library-exhibition/kyoha-library-exhibition02.webp";

const ExhibitionBetweenPoemAndCup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('exhibition-between-poem-and-cup');

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
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage1} 
                alt="교하도서관 전시 01" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage2} 
                alt="교하도서관 전시 02" 
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
              “전시관을 캘리엠의 꽃으로{"\n"}
              가득 채우다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80 break-keep">
          <Reveal delay={0.5}>
            <p>
              교하아트센터에서 1월 7일부터 23일까지 '2025 그림이야기 시그널 정기전'이 열리며, 장애 작가와 함께하는 '나이브 아트스토리' 기반의 지역 문화예술 공유 공간에서 진행됩니다.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>
              전시는 김소월, 윤동주, 정지용 등의 시를 바탕으로 한 시화 작품과 다양한 엽서를 선보이며, 방학을 맞은 아이들과 함께 감상하기 좋은 따뜻한 예술 체험을 제공합니다.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              주식회사 캘리엠은 16개의 꽃을 모티브로 한 작품을 전시하였습니다. 해당 제품은 교보문고 합정 예움에서 오프라인으로도 구매할 수 있습니다.
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

export default ExhibitionBetweenPoemAndCup;
