import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DaftarMasukLayout from './DaftarMasukLayout';

const labelStyle = "block text-sm font-semibold text-slate-800 mb-1.5";
const inputStyle = "w-full px-5 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F2994A]/30 focus:border-[#F2994A] placeholder:text-slate-400 text-sm font-semibold text-slate-700";
const buttonStyle = "w-full bg-[#F2994A] hover:bg-[#eb8c3e] text-white font-bold py-3.5 px-6 rounded-xl transition-colors mt-6 text-sm tracking-wide flex items-center justify-center cursor-pointer";
const demoButtonStyle = "w-full border-2 border-[#F2994A] text-[#F2994A] hover:bg-[#F2994A] hover:text-white font-bold py-3.5 px-6 rounded-xl transition-all mt-3 text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer";
const orangeTextFigma = "text-[#F2994A]";

function MasukAkun() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      navigate("/");
    }, 1000);
  };

  return (
    <DaftarMasukLayout 
      title="Masuk Akun" 
      subtitle="Masuk ke akun Ampatheia Anda"
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className={labelStyle}>Alamat Email</label>
          <input 
            type="text" 
            placeholder="nama@email.com"
            className={inputStyle}
            required
          />
        </div>

        <div>
          <label className={labelStyle}>Kata Sandi</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className={inputStyle}
            required
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4 accent-[#F2994A] border-slate-300 rounded" />
            <label className="text-sm text-slate-600 font-medium">Ingat Saya</label>
          </div>
          <a href="#" className={`text-sm font-semibold ${orangeTextFigma} hover:underline`}>Lupa Kata Sandi?</a>
        </div>

        <button type="submit" disabled={isSubmitting} className={buttonStyle}>
          {isSubmitting ? "Memproses..." : "Masuk Akun"}
        </button>

        <button type="button" onClick={() => navigate("/")} className={demoButtonStyle}>
          ✨ Masuk Tanpa Login (Demo Mode)
        </button>
      </form>

      <p className="text-sm text-center text-slate-600 mt-8 font-medium">
        Belum punya akun? <Link to="/daftar" className={`${orangeTextFigma} font-bold hover:underline`}>Daftar</Link>
      </p>
    </DaftarMasukLayout>
  );
}

export default MasukAkun;