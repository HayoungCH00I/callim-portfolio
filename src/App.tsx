/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journals_Detail from './pages/journals/familymonth';
import GoyangPrintersDay from "./pages/journals/goyang-2025-printer's-day";
import PopupMessageCard from './pages/journals/popupcard';
import ExhibitionBetweenPoemAndCup from './pages/journals/exhibitionBetweenPoemAndCup';
import InnovationVoucherBrandSupport from './pages/journals/innovationVoucherBrandSupport';
import Journals from './pages/journals/Journals';
import Product from './pages/Product';
import Branding from './pages/Branding';
import Package from './pages/Package';
import Project from './pages/Project';
import About from './pages/About';
import BrandRenewal from './pages/branding/BrandRenewal';
import HonestKFood from './pages/package/HonestKFood';
import LiteracyArtExhibition from './pages/project/LiteracyArtExhibition';
import GoyangFlowerTea from './pages/project/GoyangFlowerTea';
import SeongbukPostcard from './pages/project/SeongbukPostcard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/product" element={<Product />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/package" element={<Package />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/brand-renewal" element={<BrandRenewal />} />
        <Route path="/package/honest-k-food" element={<HonestKFood />} />
        <Route path="/project/literacy-art-exhibition" element={<LiteracyArtExhibition />} />
        <Route path="/project/goyang-flower-tea" element={<GoyangFlowerTea />} />
        <Route path="/project/seongbuk-postcard" element={<SeongbukPostcard />} />
        <Route path="/journal/family-month-envelope" element={<Journals_Detail />} />
        <Route path="/journal/goyang-2025-printer-day" element={<GoyangPrintersDay />} />
        <Route path="/journal/popup-message-card" element={<PopupMessageCard />} />
        <Route path="/journal/exhibition-between-poem-and-cup" element={<ExhibitionBetweenPoemAndCup />} />
        <Route path="/journal/innovation-voucher-brand-support" element={<InnovationVoucherBrandSupport />} />
      </Routes>
    </BrowserRouter>
  );
}
