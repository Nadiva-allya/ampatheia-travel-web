    import { useState, useEffect } from 'react';
    import { Link, useNavigate } from 'react-router-dom';

    import bgPaket from '../assets/bg-paket.jpg'; 
    import imgDiving from '../assets/diving.png';
    import imgBawahLaut from '../assets/bawah-laut.png';

    function Profil() {
    const ampatheiaBlue = "text-[#36499B]";
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('informasi');

    // State data profil menggunakan Irene Larasati sesuai Figma
    const [profileData, setProfileData] = useState({
        nama: "Irene Larasati",
        email: "irenelarasati@gmail.com",
        phone: "08123456789"
    });

    const daftarPesanan = [
        {
        id: 1,
        namaPaket: "Paket Eksklusif Raja Ampat 3H2M",
        tanggal: "3 Juni 2026",
        peserta: "1 Orang",
        totalHarga: "Rp 4.950.000",
        status: "Pending",
        gambar: imgDiving
        },
        {
        id: 2,
        namaPaket: "Paket Eksklusif Raja Ampat 3H2M",
        tanggal: "3 Juni 2026",
        peserta: "1 Orang",
        totalHarga: "Rp 4.950.000",
        status: "Terkonfirmasi",
        gambar: imgBawahLaut
        },
        {
        id: 3,
        namaPaket: "Paket Eksklusif Raja Ampat 3H2M",
        tanggal: "15 Mei 2026",
        peserta: "2 Orang",
        totalHarga: "Rp 9.900.000",
        status: "Terkonfirmasi",
        gambar: bgPaket
        }
    ];

    const handleLogout = () => {
        if (window.confirm("Apakah Anda yakin ingin keluar dari akun?")) {
        navigate("/masuk");
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        
        {/* =========================================
            1. NAVBAR (SINKRON: IRENE & IR)
        ========================================= */}
        <nav className="flex justify-between items-center px-8 lg:px-20 py-6 max-w-7xl mx-auto w-full bg-slate-50 relative z-20">
            <Link to="/" className={`text-2xl font-bold ${ampatheiaBlue} hover:text-orange-500 transition-colors`}>
            Ampatheia
            </Link>
            <div className={`flex space-x-8 font-medium ${ampatheiaBlue} items-center`}>
            <Link to="/paket" className="hover:text-orange-400 transition">Paket Wisata</Link>
            <Link to="/blog" className="hover:text-orange-400 transition">Blog</Link>
            <Link to="/masuk" className="hover:text-orange-400 transition">Masuk</Link>
            <Link to="/daftar" className="hover:text-orange-400 transition">Daftar</Link>
            
            <div className="group flex items-center gap-3 border border-orange-400 bg-orange-50 rounded-full pl-4 pr-1 py-1 ml-2 cursor-pointer shadow-sm transition-all duration-300">
                <span className="text-sm text-slate-700 font-medium">
                Halo, <span className="font-bold text-orange-500">Irene</span>
                </span>
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                IR
                </div>
            </div>
            </div>
        </nav>

        {/* =========================================
            2. DASHBOARD LAYOUT CONTROLLER
        ========================================= */}
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-20 py-10 flex flex-col md:flex-row gap-8 flex-grow items-start">
            
            {/* SIDEBAR MENU (SINKRON: IR) */}
            <div className="w-full md:w-[280px] bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center flex-shrink-0">
            
            <div className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center text-white text-2xl font-black shadow-inner mb-3">
                IR
            </div>
            <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1 text-center">
                {profileData.nama}
            </h3>
            <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider mb-8">
                Pelanggan
            </span>

            <div className="w-full flex flex-col gap-2">
                <button 
                onClick={() => setActiveTab('informasi')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                    activeTab === 'informasi' 
                    ? 'bg-orange-50 text-orange-500 shadow-xs' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
                >
                👤 Informasi Akun
                </button>

                <button 
                onClick={() => setActiveTab('riwayat')}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold transition-all text-left ${
                    activeTab === 'riwayat' 
                    ? 'bg-orange-50 text-orange-500 shadow-xs' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                }`}
                >
                📋 Riwayat Pesanan
                </button>

                <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50/50 transition-all text-left mt-4 border-t border-slate-100 pt-6"
                >
                🚪 Keluar Akun
                </button>
            </div>

            </div>

            {/* CONTAINER PANEL KONTEN KANAN */}
            <div className="flex-grow w-full bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 min-h-[420px]">
            
            {/* TAB INFORMASI AKUN */}
            {activeTab === 'informasi' && (
                <div className="flex flex-col gap-6 text-left">
                <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-slate-800">⚙ Informasi Akun</h2>
                    <button 
                    onClick={() => alert("Fitur edit profil siap dihubungkan ke backend!")}
                    className="border border-slate-200 hover:border-orange-400 text-slate-600 hover:text-orange-500 font-bold px-4 py-2 rounded-xl text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                    ✏ Edit Profil
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Nama Lengkap</label>
                    <div className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700">
                        {profileData.nama}
                    </div>
                    </div>

                    <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Alamat Email</label>
                    <div className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400">
                        {profileData.email}
                    </div>
                    </div>

                    <div className="flex flex-col gap-2 md:col-span-2 max-w-md">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wide">Nomor Telepon</label>
                    <div className="w-full bg-slate-50 border border-slate-200/60 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-700">
                        {profileData.phone}
                    </div>
                    </div>
                </div>
                </div>
            )}

            {/* TAB RIWAYAT PESANAN */}
            {activeTab === 'riwayat' && (
                <div className="flex flex-col gap-6 text-left">
                <div className="border-b border-slate-100 pb-4 mb-2">
                    <h2 className="text-xl font-bold text-slate-800">🧳 Riwayat Pesanan</h2>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">Berikut adalah daftar pesanan paket wisata Anda.</p>
                </div>

                <div className="flex flex-col gap-4">
                    {daftarPesanan.map((pesanan) => (
                    <div 
                        key={pesanan.id} 
                        className="flex flex-col sm:flex-row items-center gap-5 p-4 border border-slate-200/70 rounded-2xl bg-white hover:border-slate-300 transition-all shadow-xs group"
                    >
                        <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                        <img src={pesanan.gambar} alt={pesanan.namaPaket} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>

                        <div className="flex-grow flex flex-col gap-1 text-center sm:text-left w-full">
                        <h4 className="font-extrabold text-slate-800 text-sm leading-tight">
                            {pesanan.namaPaket}
                        </h4>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-[11px] font-semibold text-slate-400 mt-1">
                            <span>🗓 Tanggal Berangkat: <span className="text-slate-600">{pesanan.tanggal}</span></span>
                            <span>👥 Jumlah Peserta: <span className="text-slate-600">{pesanan.peserta}</span></span>
                        </div>
                        </div>

                        <div className="flex flex-col items-center sm:items-end justify-between gap-3 h-full flex-shrink-0 w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-slate-100 pt-3 sm:pt-0 sm:pl-5">
                        <div className="flex items-center sm:flex-col items-end gap-2 sm:gap-0.5">
                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md ${
                            pesanan.status === 'Pending' 
                                ? 'bg-amber-50 text-amber-500' 
                                : 'bg-emerald-50 text-emerald-500'
                            }`}>
                            {pesanan.status}
                            </span>
                            <p className={`font-black text-sm tracking-tight ${ampatheiaBlue} mt-1`}>
                            {pesanan.totalHarga}
                            </p>
                        </div>

                        <button 
                            onClick={() => alert(`Membuka berkas pesanan ID #${pesanan.id}`)}
                            className="bg-slate-50 hover:bg-[#5EEAD4] text-slate-700 hover:text-[#36499B] font-bold text-[11px] px-4 py-2 rounded-xl transition-all border border-slate-200/70 w-full sm:w-auto shadow-xs"
                        >
                            {pesanan.status === 'Pending' ? 'Lihat Detail' : 'Download Tiket'}
                        </button>
                        </div>

                    </div>
                    ))}
                </div>
                </div>
            )}

            </div>

        </div>

        {/* =========================================
            3. FOOTER
        ========================================= */}
        <footer className="bg-[#5EEAD4] pt-12 pb-6 px-8 lg:px-20 mt-auto border-t border-teal-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-slate-700 font-medium gap-4">
            <span>Ampatheia Hub &copy; 2026. Hak cipta dilindungi.</span>
            <div className="flex gap-4">
                <Link to="/" className="hover:underline">Beranda</Link>
                <Link to="/paket" className="hover:underline">Paket Wisata</Link>
            </div>
            </div>
        </footer>

        </div>
    );
    }

    export default Profil;