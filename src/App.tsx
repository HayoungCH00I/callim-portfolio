/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Journals_Detail from './pages/Journals_Detail';
import Journals from './pages/Journals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/journal/family-month-envelope" element={<Journals_Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
