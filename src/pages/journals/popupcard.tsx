import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/pop-up-massage-card/pop-up-massage-card01.webp";
import journalHeroImage2 from "../../images/journal/pop-up-massage-card/pop-up-massage-card02.webp";

const PopupMessageCard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('popup-message-card');

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
                alt="Popup Message Card Release 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage2} 
                alt="Popup Message Card Release 2" 
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
            <p className="text-brand-accent serif-kor text-xl md:text-2xl leading-relaxed italic whitespace-pre-line">
              “25종의 다채로운 일러스트와 함께{"\n"}
              쓰고, 접고, 세워두는{"\n"}
              작은 즐거움을 담았습니다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80">
          <Reveal delay={0.5}>
            <p>
              캘리엠은 메시지를 전하는 순간이 일회성으로 끝나지 않고, 일상 속에 자연스럽게 머무를 수 있는 방법을 고민했습니다. 그렇게 탄생한 팝업 메시지 카드는 메모를 적고 접는 순간 일러스트가 입체적으로 드러나는 구조를 통해 전하는 사람과 받는 사람 모두에게 작은 즐거움을 선사합니다.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>
              메모 패드처럼 한 장씩 뜯어 사용할 수 있으며, 접어서 세워두면 하나의 작은 오브제가 되어 공간에 감성을 더합니다. 책상 위, 선반, 침대 헤드, 창가, 책꽂이 등 일상의 다양한 공간에서 데스크테리어 아이템으로 활용할 수 있도록 디자인했습니다.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              총 25종의 일러스트를 준비하여 각자의 취향에 맞는 디자인을 선택할 수 있도록 구성했습니다. 짧은 응원의 말부터 반가운 인사, 여행의 설렘을 전하는 메시지까지 다양한 상황에 어울리는 카드로 활용할 수 있습니다.
            </p>
          </Reveal>
          <Reveal delay={0.8}>
            <p>
              친구와 가족은 물론 직장 동료, 손님, 여행객에게도 부담 없이 마음을 전해보세요. 꼭 긴 편지가 아니어도 괜찮습니다. 오늘의 인사 한마디, 함께 나누고 싶은 제안, 환영의 메시지처럼 작지만 따뜻한 말들이 공간 속에 자연스럽게 스며들 수 있도록 만들었습니다.
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

export default PopupMessageCard;
