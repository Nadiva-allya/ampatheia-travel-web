    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    import bgPaket from '../assets/hero-paket.png'; 
    import imgDiving from '../assets/diving.png';
    import imgBulanMadu from '../assets/bulan-madu.png';
    import imgKeluarga from '../assets/keluarga.png';
    import imgSnorkeling from '../assets/snorkeling.png';
    import imgYatch from '../assets/yatch.png';
    import imgHopping from '../assets/hopping.png';
    import imgBawahLaut from '../assets/bawah-laut.png';
    import imgBerdua from '../assets/berdua.png';
    import imgHealing from '../assets/healing.png';

    function PaketWisata() {
    const ampatheiaBlue = "text-[#36499B]";

    const [hargaMax, setHargaMax] = useState(75000000); 
    const [durasi, setDurasi] = useState('');
    const [kategori, setKategori] = useState('');
    const [cari, setCari] = useState('');

    // Database 9 Paket Wisata
    const daftarPaketRaw = [
        {id: 1, nama: "Petualangan Diving Ultimate", harga: "Rp. 37.500.000", hargaAngka: 37500000, rating: "5.0", durasi: "7 Hari/6 Malam", durasiTipe: "5-7", kategoriTipe: "diving", gambar: imgDiving},
        {id: 2, nama: "Paket Bulan Madu Surga", harga: "Rp. 27.000.000", hargaAngka: 27000000, rating: "5.0", durasi: "5 Hari/4 Malam", durasiTipe: "5-7", kategoriTipe: "honeymoon", gambar: imgBulanMadu},
        {id: 3, nama: "Tur Eksplorasi Keluarga", harga: "Rp. 35.000.000", hargaAngka: 35000000, rating: "4.8", durasi: "6 Hari/5 Malam", durasiTipe: "5-7", kategoriTipe: "keluarga", gambar: imgKeluarga},
        {id: 4, nama: "Pengalaman Surga Snorkeling", harga: "Rp. 21.000.000", hargaAngka: 21000000, rating: "4.9", durasi: "4 Hari/3 Malam", durasiTipe: "3-4", kategoriTipe: "diving", gambar: imgSnorkeling},
        {id: 5, nama: "Kapal Phinisi Yatch Mewah", harga: "Rp. 67.500.000", hargaAngka: 67500000, rating: "4.9", durasi: "10 Hari/9 Malam", durasiTipe: "8+", kategoriTipe: "luxury", gambar: imgYatch},
        {id: 6, nama: "Petualangan Island Hopping", harga: "Rp. 42.000.000", hargaAngka: 42000000, rating: "5.0", durasi: "6 Hari/5 Malam", durasiTipe: "5-7", kategoriTipe: "hopping", gambar: imgHopping},
        {id: 7, nama: "Eksplorasi Bawah Laut", harga: "Rp. 37.500.000", hargaAngka: 37500000, rating: "5.0", durasi: "7 Hari/6 Malam", durasiTipe: "5-7", kategoriTipe: "diving", gambar: imgBawahLaut},
        {id: 8, nama: "Pesona Raja Ampat Berdua", harga: "Rp. 43.700.000", hargaAngka: 43700000, rating: "4.9", durasi: "5 Hari/4 Malam", durasiTipe: "5-7", kategoriTipe: "honeymoon", gambar: imgBerdua},
        {id: 9, nama: "Raja Ampat Healing Trip", harga: "Rp. 18.750.000", hargaAngka: 18750000, rating: "4.9", durasi: "4 Hari/3 Malam", durasiTipe: "3-4", kategoriTipe: "healing", gambar: imgHealing}
    ];

    // Logika Filter Data
    const daftarPaketTerfilter = daftarPaketRaw.filter(paket => {
        const cocokHarga = paket.hargaAngka <= hargaMax;
        const cocokDurasi = durasi === '' || paket.durasiTipe === durasi;
        const cocokKategori = kategori === '' || paket.kategoriTipe === kategori;
        const cocokCari = paket.nama.toLowerCase().includes(cari.toLowerCase());
        return cocokHarga && cocokDurasi && cocokKategori && cocokCari;
    });

    const handleReset = () => {
        setHargaMax(75000000);
        setDurasi('');
        setKategori('');
        setCari('');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased">
        
        {/* 1. NAVBAR GLOBAL */}
        <Navbar />

        {/* ==== 2. HERO BANNER ===== */}
        <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
            <img 
            src={bgPaket} 
            alt="Banner Paket Wisata" 
            className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
            />
            <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#36499B] tracking-tight mb-4">
                Mulai Petualanganmu di Raja Ampat
            </h1>
            <p className="text-slate-800 text-sm md:text-base font-bold max-w-2xl mx-auto leading-relaxed">
                Temukan paket wisata pilihan dengan pengalaman seru, pemandangan menakjubkan,<br className="hidden md:block"/> dan perjalanan yang berkesan.
            </p>
            </div>
        </section>

        {/* ==== 3. KONTEN UTAMA ===== */}
        <section className="py-12 px-8 lg:px-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-10">

            {/* SIDEBAR FILTER (KIRI) */}
            <div className="w-full lg:w-[320px] flex-shrink-0 text-left">
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-slate-200/60 sticky top-10">
                <h3 className="text-xl font-bold text-[#36499B] mb-6">Filter Paket</h3>
                
                <div className="flex flex-col gap-6">
                {/* SLIDER RENTANG HARGA */}
                <div>
                    <label className="text-sm font-semibold text-slate-600 block mb-3">Rentang Harga</label>
                    <div className="relative w-full pt-2">
                    <input 
                        type="range" 
                        min="10000000" 
                        max="75000000" 
                        step="1000000"
                        value={hargaMax}
                        onChange={(e) => setHargaMax(Number(e.target.value))}
                        className="w-full h-[6px] bg-[#36499B] rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-200 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm" 
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-3 font-semibold tracking-wide">
                        <span>Rp 10 Juta</span>
                        <span className="text-[#36499B] font-bold">Maks: Rp {(hargaMax / 1000000).toFixed(0)} Juta</span>
                    </div>
                    </div>
                </div>

                {/* INPUT CARI TERSEMBUNYI (ATAU BISA DIKEMBALIKAN KE NAVBAR/SEARCHBOX) */}
                <div className="hidden">
                    <input 
                    type="text" 
                    placeholder="Cari..." 
                    value={cari} 
                    onChange={(e) => setCari(e.target.value)} 
                    />
                </div>

                {/* DROPDOWN DURASI */}
                <div>
                    <label className="text-sm font-semibold text-slate-600 block mb-2">Durasi</label>
                    <div className="relative">
                    <select 
                        value={durasi}
                        onChange={(e) => setDurasi(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#36499B]"
                    >
                        <option value="">Semua Durasi</option>
                        <option value="3-4">3-4 Hari</option>
                        <option value="5-7">5-7 Hari</option>
                        <option value="8+">Lebih dari 7 Hari</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[10px] text-slate-400">
                        ▲
                    </div>
                    </div>
                </div>

                {/* DROPDOWN KATEGORI */}
                <div>
                    <label className="text-sm font-semibold text-slate-600 block mb-2">Kategori</label>
                    <div className="relative">
                    <select 
                        value={kategori}
                        onChange={(e) => setKategori(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer focus:outline-none focus:border-[#36499B]"
                    >
                        <option value="">Semua Kategori</option>
                        <option value="diving">Diving & Snorkeling</option>
                        <option value="honeymoon">Bulan Madu</option>
                        <option value="keluarga">Keluarga</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[10px] text-slate-400">
                        ▲
                    </div>
                    </div>
                </div>

                {/* TOMBOL RESET FILTER */}
                <button 
                    onClick={handleReset}
                    className="w-full bg-[#5EEAD4] hover:bg-teal-300 text-[#36499B] font-bold py-3 rounded-xl transition-colors mt-2 text-xs tracking-wide shadow-xs cursor-pointer"
                >
                    Reset Filter
                </button>
                </div>
            </div>
            </div>

            {/* LIST KARTU PAKET WISATA (KANAN) */}
            <div className="w-full lg:w-3/4">
            <div className="mb-6 flex justify-between items-center px-1">
                <p className="text-sm text-slate-400 font-medium">
                Menampilkan <span className="font-bold text-slate-700">{daftarPaketTerfilter.length}</span> dari {daftarPaketRaw.length} paket pilihan
                </p>
            </div>

            {daftarPaketTerfilter.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {daftarPaketTerfilter.map((paket) => (
                    <div 
                    key={paket.id} 
                    className="bg-white rounded-[2rem] p-4 shadow-[0_4px_25px_rgba(0,0,0,0.015)] border border-slate-100 group transition-all duration-300 flex flex-col hover:shadow-md"
                    >
                    {/* Thumbnail Cover */}
                    <div className="w-full h-52 rounded-2xl overflow-hidden mb-4 bg-slate-50">
                        <img 
                        src={paket.gambar} 
                        alt={paket.nama} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    
                    {/* Informasi Teks Card */}
                    <div className="flex-grow text-left px-1">
                        <h3 className={`font-bold ${ampatheiaBlue} text-lg mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-1`}>
                        {paket.nama}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 font-semibold">
                        <span className="flex items-center gap-1">
                            <span className="text-yellow-400 text-sm">⭐</span> {paket.rating}
                        </span>
                        <span className="flex items-center gap-1">
                            <span className="text-slate-400 text-sm">🕒</span> {paket.durasi}
                        </span>
                        </div>
                    </div>
                    
                    {/* Bagian Bawah Card (Harga & Tombol Detail) */}
                    <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto px-1">
                        <div className="text-left">
                        <p className="font-bold text-lg text-slate-800 tracking-tight">
                            {paket.harga}
                        </p>
                        <p className="text-[0.65rem] text-slate-400 font-bold uppercase tracking-wider">
                            /orang
                        </p>
                        </div>
                        <Link 
                        to={`/paket/${paket.id}`} 
                        className="bg-[#5EEAD4] hover:bg-teal-400 text-[#36499B] px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-xs"
                        >
                        Lihat Detail
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                /* Kondisi Data Kosong */
                <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
                <span className="text-5xl block mb-3">🔍</span>
                <p className="text-slate-500 font-medium text-sm">Tidak ada paket wisata yang cocok dengan kriteria filter Anda.</p>
                </div>
            )}
            </div>

        </section>

        {/* 4. FOOTER GLOBAL */}
        <Footer />

        </div>
    );
    }

    export default PaketWisata;