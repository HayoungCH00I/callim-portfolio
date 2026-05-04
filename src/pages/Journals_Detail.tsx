import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Reveal } from '../components/Common';
import mainBottomJournal01 from "../images/journal/journal01.jpg";

const Journals_Detail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Journal</span>
            <h1 className="text-4xl md:text-5xl serif-kor leading-tight text-brand-ink/90">가정의 달 기념 신상 봉투 출시</h1>
            <div className="flex items-center gap-4 text-xs font-bold opacity-30">
              <span>2026.04.23</span>
              <div className="w-8 h-px bg-brand-ink/20" />
              <span>By Calli-M</span>
            </div>
            <p className="text-lg opacity-70 serif leading-relaxed max-w-2xl">
              5월 가정의 달을 맞이하여 사랑을 전달할 수 있는 <br className="hidden md:block" />
              캘리엠의 봉투 4종을 제작하였습니다.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Image Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-12">
        <Reveal delay={0.2}>
          <div className="rounded-[2rem] overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <img 
              src={mainBottomJournal01} 
              alt="Family Month Envelope" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <Reveal delay={0.4}>
            <p className="text-brand-accent serif text-xl md:text-2xl leading-relaxed italic">
              “꽃을 건네듯 마음을 담아 <br />
              오래 두고 볼 수 있는 <br />
              봉투와 카드를 제작했습니다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80 serif">
          <Reveal delay={0.5}>
            <p>
              캘리엠은 가정의 달을 맞아 마음을 전하는 작은 방법을 고민했습니다. 
              우리가 마주하는 수많은 기념일 중에서도 5월은 유난히 따뜻한 마음이 많이 오가는 달입니다. 
              그 소중한 진심을 담아낼 그릇을 만드는 일에 정성을 기울였습니다.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>
              단순한 포장재를 넘어, 그 자체로 하나의 선물이 될 수 있도록 
              종이의 질감부터 섬세한 박 가공까지 모든 과정을 꼼꼼히 살폈습니다. 
              캘리엠만의 감성적인 타이포그래피와 차분한 색감은 
              전하는 이의 마음을 더욱 깊이 있게 전달해줄 것입니다.
            </p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              일상 속 선물의 순간이 조금 더 따뜻하게 기억되기를 바랍니다. 
              캘리엠과 함께 당신의 소중한 사람들에게 변치 않는 온기를 전해보세요.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer / Back Button */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <Link 
            to="/#journal" 
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

export default Journals_Detail;
