/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journals_Detail from './pages/Journals_Detail';
import Journals from './pages/Journals';
import Product from './pages/Product';
import Branding from './pages/Branding';
import Package from './pages/Package';
import Project from './pages/Project';
import HonestKFood from './pages/package/HonestKFood';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/product" element={<Product />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/package" element={<Package />} />
        <Route path="/project" element={<Project />} />
        <Route path="/package/honest-k-food" element={<HonestKFood />} />
        <Route path="/journal/family-month-envelope" element={<Journals_Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
