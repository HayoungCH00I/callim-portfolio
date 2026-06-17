import journalListItem01 from "../../images/journal/family-month/journal01.jpg";
import journalListItem02 from "../../images/journal/goyang-2025-printer's-day/goyang-2025-printer's-day (7).jpg";
import journalListItem03 from "../../images/journal/pop-up-massage-card/pop-up-massage-card02.webp";
import journalListItem04 from "../../images/journal/kyoha-library-exhibition/kyoha-library-exhibition01.webp";
import journalListItem05 from "../../images/journal/innovation-voucher-brand-support/innovation-voucher-brand-support (1).webp";

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  detailTitle?: string;
  desc: string;
  detailDesc?: string;
  link?: string;
  image: string;
}

export const journalList: JournalEntry[] = [
  {
    id: "popup-message-card",
    date: "2026.06.15",
    title: "신제품, 팝업 메시지 카드 25종 출시",
    detailTitle: "신제품, 팝업 메시지 카드 25종 출시",
    desc: "캘리엠에서 처음 선보이는 팝업 메시지 카드 25종을 출시했습니다. 일상 속 작은 메시지와 감성을 전할 수 있는 새로운 카드 컬렉션입니다.",
    detailDesc: "캘리엠에서 처음 선보이는 팝업 메시지 카드 25종을 출시했습니다.\n일상 속 작은 메시지와 감성을 전할 수 있는 새로운 카드 컬렉션입니다.",
    link: "/journal/popup-message-card",
    image: journalListItem03
  },
  {
    id: "family-month-envelope",
    date: "2026.04.23",
    title: "가정의 달 기념 신상 봉투 출시",
    detailTitle: "가정의 달 기념 신상 봉투 출시",
    desc: "5월, 가정의 달을 맞이하여 사랑을 전달할 수 있는 캘리엠의 봉투 4종을 제작하였습니다.",
    detailDesc: "5월 가정의 달을 맞이하여 사랑을 전달할 수 있는\n캘리엠의 봉투 4종을 제작하였습니다.",
    link: "/journal/family-month-envelope",
    image: journalListItem01
  },
  {
    id: "goyang-2025-printer-day",
    date: "2025.11.27",
    title: "2025 고양 인쇄인의 날, 고양 인쇄기술경진대회 금상 수상",
    detailTitle: "2025 고양 인쇄인의 날\n고양 인쇄기술경진대회 금상 수상",
    desc: "출품작인 'Moments of Goyang · 고양시 감성 밀크티 세트'가 금상을 수상하였습니다.",
    detailDesc: "출품작인 'Moments of Goyang · 고양시 감성 밀크티 세트'가\n수많은 훌륭한 출품작들 사이에서 금상을 수상하는 영예를 안았습니다.",
    link: "/journal/goyang-2025-printer-day",
    image: journalListItem02
  },
  {
    id: "voucher-final-approval",
    date: "2025.03.17",
    title: "중소기업혁신바우처 수행기관 브랜드 지원 최종 승인",
    detailTitle: "중소기업혁신바우처 수행기관\n브랜드 지원 최종 승인",
    desc: "8개월간 진행된 브랜드 개발 프로젝트로 캘리엠의 브랜드 고유의 색을 더 깊이 있게 정의해 보았습니다.",
    detailDesc: "8개월간 진행된 브랜드 개발 프로젝트로\n캘리엠의 브랜드 고유의 색을 더 깊이 있게 정의해 보았습니다.",
    link: "/journal/innovation-voucher-brand-support",
    image: journalListItem05
  },
  {
    id: "exhibition-between-poem-and-cup",
    date: "2025.01.07",
    title: "전시 참가: 시와 찻잔 사이 (교하도서관)",
    detailTitle: "전시 참가: 시와 찻잔 사이 (교하도서관)",
    desc: "2025년 1월 7일부터 23일까지 전시회가 진행됩니다.",
    detailDesc: "2025년 1월 7일부터 23일까지 전시회가 진행됩니다.",
    link: "/journal/exhibition-between-poem-and-cup",
    image: journalListItem04
  }
];

export const getJournalById = (id: string): JournalEntry | undefined => {
  return journalList.find(item => item.id === id);
};
