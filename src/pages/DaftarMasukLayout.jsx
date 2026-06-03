import bgAuth from '../assets/login.png'; 
import { Link } from 'react-router-dom';

function DaftarMasukLayout({ children, title, subtitle }) {
  const orangeFigma = "bg-[#F2994A]"; 
  const orangeTextFigma = "text-[#F2994A]";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans">
      
      {/* Kotak Utama (Card)*/}
      <div className="flex w-full max-w-6xl bg-white shadow-2xl rounded-[40px] overflow-hidden h-[700px]">
        
        {/* Bagian Kiri*/}
        <div className="hidden lg:block w-1/2">
          <img 
            src={bgAuth} 
            alt="Pemandangan Raja Ampat" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Bagian Kanan*/}
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center relative">
          
          <Link to="/" className="absolute top-10 right-10 text-slate-400 hover:text-[#F2994A] font-semibold text-sm transition flex items-center gap-1">
            <span>&larr;</span> Kembali ke Beranda
          </Link>

          <h1 className="text-5xl font-bold text-slate-950 mb-3">{title}</h1>
          <p className="text-slate-500 mb-12 text-base">{subtitle}</p>

          {children}

        </div>

      </div>
    </div>
  )
}

export default DaftarMasukLayout;