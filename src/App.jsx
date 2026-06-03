import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import MasukAkun from './pages/MasukAkun';
import DaftarAkun from './pages/DaftarAkun';
import Profil from './pages/Profil';
import PaketWisata from './pages/PaketWisata';
import DetailPaket from './pages/DetailPaket';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/masuk" element={<MasukAkun />} />
        <Route path="/daftar" element={<DaftarAkun />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/paket" element={<PaketWisata />} />
        <Route path="/paket/:id" element={<DetailPaket />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;