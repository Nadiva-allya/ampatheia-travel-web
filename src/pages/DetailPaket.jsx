    import { useState, useEffect } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    import div1 from '../assets/diving/1.png';
    import div2 from '../assets/diving/2.png';
    import div3 from '../assets/diving/3.png';
    import div4 from '../assets/diving/4.png';

    import imgBulanMadu from '../assets/bulan-madu.png';
    import imgKeluarga from '../assets/keluarga.png';
    import imgSnorkeling from '../assets/snorkeling.png';
    import imgYatch from '../assets/yatch.png';
    import imgHopping from '../assets/hopping.png';
    import imgBawahLaut from '../assets/bawah-laut.png';
    import imgBerdua from '../assets/berdua.png';
    import imgHealing from '../assets/healing.png';

    function DetailPaket() {
    const { id } = useParams();
    const ampatheiaBlue = "text-[#36499B]";

    // ==== DATABASE 9 PAKET WISATA =====
    const databasePaket = {
        1: {
        id: 1,
        nama: "Petualangan Diving Ultimate Raja Ampat",
        hargaAngka: 37500000,
        hargaText: "Rp. 37.500.000",
        rating: "5.0",
        ulasanCount: "127 ulasan",
        durasiText: "7 Hari / 6 Malam",
        maksOrang: "Maks 12 orang",
        gambarSlider: [div1, div2, div3, div4],
        deskripsi: "Petualangan Diving Ultimate Raja Ampat adalah paket wisata eksklusif yang menawarkan pengalaman menyelam di keindahan bawah laut Raja Ampat, Papua Barat. Selama 7 hari 6 malam, wisatwan akan diajak menjelajahi spot diving terbaik dengan pemandangan terumbu karang yang masih alami, biota laut yang beragam, serta panorama laut tropis yang memukau.",
        itinerary: [
            { hari: 1, judul: "Kedatangan & Sambutan", isi: "Tiba di bandara Sorong, transfer ke hotel, makan malam selamat datang." },
            { hari: 2, judul: "Mulai Island Hopping", isi: "Berangkat ke Kepulauan Wayag, sesi diving pertama di Manta Point." }
        ],
        termasuk: ["Akomodasi resort premium", "Makan penuh (B, L, D)", "Instruktur diving profesional"],
        tidakTermasuk: ["Tiket pesawat menuju Sorong", "Pengeluaran pribadi"]
        },
        2: {
        id: 2,
        nama: "Paket Bulan Madu Surga Raja Ampat",
        hargaAngka: 27000000,
        hargaText: "Rp. 27.000.000",
        rating: "5.0",
        ulasanCount: "94 ulasan",
        durasiText: "5 Hari / 4 Malam",
        maksOrang: "Khusus Pasangan (2 orang)",
        gambarSlider: [imgBulanMadu, imgBulanMadu, imgBulanMadu, imgBulanMadu],
        deskripsi: "Ciptakan momen romantis tak terlupakan bersama pasangan di surga tersembunyi Raja Ampat. Paket ini dirancang khusus untuk kenyamanan dan keintiman tingkat tinggi dengan private resort, candle-light dinner di pinggir pantai, serta kunjungan ke pulau eksotis tak berpenghuni.",
        itinerary: [
            { hari: 1, judul: "Welcome Couple to Sorong", isi: "Penjemputan VIP di Bandara, perjalanan dengan private speed boat menuju resort romantis pilihan." }
        ],
        termasuk: ["Honeymoon Suite decoration", "Private speedboat selama tour", "Romantis Candle-Light dinner"],
        tidakTermasuk: ["Tiket pesawat ke Sorong", "Pengeluaran pribadi"]
        },
        3: {
        id: 3,
        nama: "Tur Eksplorasi Keluarga Raja Ampat",
        hargaAngka: 35000000,
        hargaText: "Rp. 35.000.000",
        rating: "4.8",
        ulasanCount: "62 ulasan",
        durasiText: "6 Hari / 5 Malam",
        maksOrang: "Rombongan Keluarga",
        gambarSlider: [imgKeluarga, imgKeluarga, imgKeluarga, imgKeluarga],
        deskripsi: "Paket liburan ramah anak dan lansia yang aman, edukatif, namun tetap seru. Mengajak seluruh anggota keluarga menikmati keasrian alam Raja Ampat, berinteraksi dengan kebudayaan desa adat lokal.",
        itinerary: [
            { hari: 1, judul: "Family Gathering", isi: "Penjemputan keluarga di bandara, makan malam santai bernuansa kekeluargaan." }
        ],
        termasuk: ["Family Cottage luas", "Kids-friendly food", "Pemandu ramah khusus keluarga"],
        tidakTermasuk: ["Keperluan jajan", "Tiket penerbangan"]
        },
        4: {
        id: 4,
        nama: "Pengalaman Surga Snorkeling Raja Ampat",
        hargaAngka: 21000000,
        hargaText: "Rp. 21.000.000",
        rating: "4.9",
        ulasanCount: "148 ulasan",
        durasiText: "4 Hari / 3 Malam",
        maksOrang: "Maks 15 orang",
        gambarSlider: [imgSnorkeling, imgSnorkeling, imgSnorkeling, imgSnorkeling],
        deskripsi: "Bagi Anda yang ingin menikmati akuarium alam terbesar dunia tanpa perlu lisensi menyelam, paket snorkeling ini adalah jawabannya. Kita akan mendatangi spot-spot dangkal terbaik.",
        itinerary: [
            { hari: 1, judul: "Transit & Basecamp", isi: "Check-in homestay apung estetik, pengenalan alat snorkeling." }
        ],
        termasuk: ["Alat snorkeling premium", "Snorkel Guide berpengalaman", "Konsumsi penuh selama trip"],
        tidakTermasuk: ["PIN Raja Ampat", "Keperluan pribadi"]
        },
        5: {
        id: 5,
        nama: "Kapal Phinisi Luxury Yacht Mewah",
        hargaAngka: 67500000,
        hargaText: "Rp. 67.500.000",
        rating: "4.9",
        ulasanCount: "31 ulasan",
        durasiText: "10 Hari / 9 Malam",
        maksOrang: "Maks 8 orang VVIP",
        gambarSlider: [imgYatch, imgYatch, imgYatch, imgYatch],
        deskripsi: "Jelajahi surga terjauh Raja Ampat menaiki kapal Phinisi kayu mewah bergaya modern. Rasakan sensasi tidur di atas lautan dengan pelayanan bintang lima, koki pribadi, dan fasilitas berkelas tinggi.",
        itinerary: [
            { hari: 1, judul: "Boarding & Sailing", isi: "Welcome drink mewah, pengenalan kabin ber-AC, berlayar menuju Selat Dampier." }
        ],
        termasuk: ["Kabin mewah ber-AC", "Gourmet Chef pribadi", "Fasilitas Kayak & Paddleboard"],
        tidakTermasuk: ["Tiket pesawat", "Pengeluaran laundry/oleh-oleh"]
        },
        6: {
        id: 6,
        nama: "Petualangan Island Hopping Raja Ampat",
        hargaAngka: 42000000,
        hargaText: "Rp. 42.000.000",
        rating: "5.0",
        ulasanCount: "58 ulasan",
        durasiText: "6 Hari / 5 Malam",
        maksOrang: "Maks 10 orang",
        gambarSlider: [imgHopping, imgHopping, imgHopping, imgHopping],
        deskripsi: "Paket petualang sejati untuk mendatangi pulau-pulau ikonik tersembunyi paling spektakuler di Raja Ampat. Dari puncak karst tertinggi hingga gua misterius tengah pulau.",
        itinerary: [
            { hari: 1, judul: "Basecamp Arrival", isi: "Briefing rute pulau, persiapan kamera, penyeberangan rute kilat." }
        ],
        termasuk: ["Speedboat ekspedisi cepat", "Tim Dokumentasi (Foto+Drone)", "Makan kuliner lokal segar"],
        tidakTermasuk: ["Uang jajan pribadi", "Tiket pesawat bandara"]
        },
        7: {
        id: 7,
        nama: "Eksplorasi Bawah Laut Raja Ampat",
        hargaAngka: 37500000,
        hargaText: "Rp. 37.500.000",
        rating: "5.0",
        ulasanCount: "41 ulasan",
        durasiText: "7 Hari / 6 Malam",
        maksOrang: "Maks 10 orang",
        gambarSlider: [imgBawahLaut, imgBawahLaut, imgBawahLaut, imgBawahLaut],
        deskripsi: "Fokus penuh pada ekosistem keanekaragaman hayati makro bawah laut. Dirancang khusus bagi fotografer bawah air dan biolog amatir.",
        itinerary: [
            { hari: 1, judul: "Check-in Marine Center", isi: "Briefing keamanan maritim, setting peralatan kamera bawah laut." }
        ],
        termasuk: ["Tabung oksigen penuh", "Dive Resort eksklusif", "Spotter guide foto makro"],
        tidakTermasuk: ["Sewa kamera underwater utama", "Asuransi selam khusus"]
        },
        8: {
        id: 8,
        nama: "Pesona Raja Ampat Berdua (Selingka Trip)",
        hargaAngka: 43700000,
        hargaText: "Rp. 43.700.000",
        rating: "4.9",
        ulasanCount: "73 ulasan",
        durasiText: "5 Hari / 4 Malam",
        maksOrang: "Semi-Private (2-4 orang)",
        gambarSlider: [imgBerdua, imgBerdua, imgBerdua, imgBerdua],
        deskripsi: "Nikmati pesona eksotisme budaya seni dan keindahan alam secara privat berdua saja. Menawarkan estetika liburan yang tenang, puitis, dan jauh dari keramaian masal.",
        itinerary: [
            { hari: 1, judul: "Serenity Welcome", isi: "Transfer ke oceanfront cottage sunyi, menikmati sore santai di tepi pantai." }
        ],
        termasuk: ["Premium Oceanfront Cottage", "Kayak Transparan gratis", "Paket piknik pantai estetik"],
        tidakTermasuk: ["Oleh-oleh pribadi", "Tiket pesawat terbang"]
        },
        9: {
        id: 9,
        nama: "Raja Ampat Healing Trip (Mindfulness)",
        hargaAngka: 18750000,
        hargaText: "Rp. 18.750.000",
        rating: "4.9",
        ulasanCount: "112 ulasan",
        durasiText: "4 Hari / 3 Malam",
        maksOrang: "Maks 6 orang",
        gambarSlider: [imgHealing, imgHealing, imgHealing, imgHealing],
        deskripsi: "Lepaskan semua kepenatan rutinitas kerja lewat meditasi dan yoga alam. Menggabungkan ketenangan magis suara ombak Raja Ampat dengan aktivitas mindfulness.",
        itinerary: [
            { hari: 1, judul: "Digital Detox Commences", isi: "Tiba di eco-lodge non-wifi, penyerahan gadget, sesi meditasi malam." }
        ],
        termasuk: ["Eco-lodge alami", "Instruktur Yoga berlisensi", "Makanan sehat organik"],
        tidakTermasuk: ["Aktivitas sports ekstrem", "Keperluan belanja komersial"]
        }
    };

    const currentId = Number(id) || 1;
    const paketData = databasePaket[currentId] || databasePaket[1];

    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [jumlahOrang, setJumlahOrang] = useState(2);
    const [tanggalPemesanan, setTanggalPemesanan] = useState('');

    useEffect(() => {
        setActiveImgIndex(0);
        setJumlahOrang(2);
        setTanggalPemesanan('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    const rekomendasiPaket = Object.values(databasePaket)
        .filter(p => p.id !== currentId)
        .slice(0, 3);

    const handlePrevImage = () => {
        setActiveImgIndex((prev) => (prev === 0 ? paketData.gambarSlider.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setActiveImgIndex((prev) => (prev === paketData.gambarSlider.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans">
        
        {/* 1. GLOBAL NAVBAR */}
        <Navbar />

        {/* ==== 2. TOMBOL KEMBALI ===== */}
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-20 pt-6 flex flex-col">
            <Link 
            to="/paket" 
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#36499B] mb-6 transition-colors group w-fit"
            >
            <span className="text-lg group-hover:-translate-x-1 transition-transform duration-200">←</span> 
            Kembali ke Paket Wisata
            </Link>
        </div>

        {/* ==== 3. LAYOUT DETAIL ===== */}
        <div className="max-w-7xl mx-auto w-full px-8 lg:px-20 pb-16 flex flex-col lg:flex-row gap-10 flex-grow">

            <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <div className="relative w-full h-[450px] bg-slate-100 rounded-3xl overflow-hidden group shadow-sm">
                <img src={paketData.gambarSlider[activeImgIndex]} alt={paketData.nama} className="w-full h-full object-cover transition-all duration-500" />
                <button onClick={handlePrevImage} className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md font-bold text-slate-700 hover:bg-white transition-colors cursor-pointer">❮</button>
                <button onClick={handleNextImage} className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md font-bold text-slate-700 hover:bg-white transition-colors cursor-pointer">❯</button>
            </div>

            {/* GRID THUMBNAIL */}
            <div className="grid grid-cols-4 gap-4">
                {paketData.gambarSlider.map((img, index) => (
                <div key={index} onClick={() => setActiveImgIndex(index)} className={`h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${activeImgIndex === index ? 'border-[#36499B] scale-95 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                ))}
            </div>

            {/* SPESIFIKASI */}
            <div className="mt-4 text-left">
                <h1 className={`text-3xl md:text-4xl font-bold ${ampatheiaBlue} mb-3 leading-tight`}>{paketData.nama}</h1>
                <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-500">
                <span className="flex items-center gap-1"><span className="text-yellow-400 text-base">⭐</span> {paketData.rating} <span className="text-slate-400 font-normal">({paketData.ulasanCount})</span></span>
                <span className="flex items-center gap-1"><span className="text-slate-400 text-base">🕒</span> {paketData.durasiText}</span>
                <span className="flex items-center gap-1"><span className="text-slate-400 text-base">👤</span> {paketData.maksOrang}</span>
                </div>
            </div>

            {/* DESKRIPSI */}
            <div className="border-t border-slate-200 pt-6 text-left">
                <h3 className="text-lg font-bold text-slate-800 mb-3">Deskripsi</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify">{paketData.deskripsi}</p>
            </div>

            {/* ITINERARY */}
            <div className="border-t border-slate-200 pt-6 text-left">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Itinerary</h3>
                <div className="relative pl-6 border-l-2 border-slate-200 flex flex-col gap-8 ml-3">
                {paketData.itinerary.map((iti) => (
                    <div key={iti.hari} className="relative">
                    <div className="absolute -left-[35px] top-0 w-6 h-6 bg-[#5EEAD4] text-white font-bold text-xs rounded-full flex items-center justify-center border-4 border-white shadow-sm">{iti.hari}</div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Hari {iti.hari}: {iti.judul}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{iti.isi}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* INCLUDE EXCLUDE BOX */}
            <div className="border border-slate-200 rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 bg-white shadow-sm text-left">
                <div>
                <h4 className="font-bold text-slate-800 mb-4 text-sm tracking-wide uppercase">Yang Termasuk</h4>
                <ul className="space-y-3 text-xs font-semibold text-slate-600">
                    {paketData.termasuk.map((item, idx) => <li key={idx} className="flex items-start gap-2.5"><span className="text-emerald-500 text-sm">✔</span> {item}</li>)}
                </ul>
                </div>
                <div className="border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8">
                <h4 className="font-bold text-slate-800 mb-4 text-sm tracking-wide uppercase">Yang Tidak Termasuk</h4>
                <ul className="space-y-3 text-xs font-semibold text-slate-500">
                    {paketData.tidakTermasuk.map((item, idx) => <li key={idx} className="flex items-start gap-2.5"><span className="text-red-400 text-sm">❌</span> {item}</li>)}
                </ul>
                </div>
            </div>
            </div>

            {/* KOLOM KANAN: SIDEBAR PEMESANAN STICKY */}
            <div className="w-full lg:w-1/3 text-left">
            <div className="bg-white rounded-3xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-slate-100 sticky top-10 flex flex-col gap-6">
                <div>
                <h2 className="text-2xl font-bold text-slate-900">Rp {paketData.hargaAngka.toLocaleString('id-ID')}</h2>
                <p className="text-xs text-slate-400 font-medium mt-0.5">per orang</p>
                </div>
                <div className="flex flex-col gap-4">
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5 uppercase tracking-wide">🗓 Pilih Tanggal</label>
                    <input type="date" value={tanggalPemesanan} onChange={(e) => setTanggalPemesanan(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#36499B] bg-slate-50 text-slate-700 font-medium cursor-pointer" />
                </div>
                <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5 uppercase tracking-wide">👥 Jumlah Orang</label>
                    <div className="flex items-center justify-between w-full border border-slate-200 rounded-xl px-4 py-2 bg-slate-50">
                    <button onClick={() => setJumlahOrang((prev) => (prev > 1 ? prev - 1 : 1))} className="w-8 h-8 rounded-lg border border-slate-300 bg-white flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">-</button>
                    <span className="font-bold text-slate-800 text-sm">{jumlahOrang}</span>
                    <button onClick={() => setJumlahOrang((prev) => prev + 1)} className="w-8 h-8 rounded-lg border border-slate-300 bg-white flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">+</button>
                    </div>
                </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs font-semibold text-slate-500">
                <div className="flex justify-between">
                    <span>Rp {paketData.hargaAngka.toLocaleString('id-ID')} × {jumlahOrang} orang</span>
                    <span>Rp {(paketData.hargaAngka * jumlahOrang).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-slate-900 pt-2 border-t border-dashed border-slate-200">
                    <span>Total</span>
                    <span className={ampatheiaBlue}>Rp {(paketData.hargaAngka * jumlahOrang).toLocaleString('id-ID')}</span>
                </div>
                </div>
                <button onClick={() => {
                if(!tanggalPemesanan) { alert('Harap pilih tanggal keberangkatan terlebih dahulu!'); return; }
                alert(`Yeay! Pesanan paket "${paketData.nama}" Berhasil dibuat.`);
                }} className="w-full bg-[#5EEAD4] hover:bg-teal-400 text-[#36499B] font-bold py-3.5 rounded-2xl transition-colors shadow-sm text-sm tracking-wide cursor-pointer">Pesan Sekarang</button>
            </div>
            </div>

        </div>

        {/* ==== 4. REKOMENDASI PAKET LAINNYA ===== */}
        <section className="bg-white border-t border-slate-100 py-16 w-full text-left">
            <div className="max-w-7xl mx-auto px-8 lg:px-20">
            <h3 className={`text-2xl font-bold ${ampatheiaBlue} mb-8`}>
                Rekomendasi Paket Lainnya
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rekomendasiPaket.map((paket) => (
                <div 
                    key={paket.id} 
                    className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl border border-slate-100 group transition-all duration-300 flex flex-col"
                >
                    <div className="w-full h-48 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                    <img 
                        src={paket.gambarSlider[0]} 
                        alt={paket.nama} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    
                    <div className="flex-grow">
                    <h4 className={`font-bold ${ampatheiaBlue} text-base mb-2 leading-tight group-hover:text-orange-500 transition-colors line-clamp-2`}>
                        {paket.nama}
                    </h4>
                    <p className="text-xs text-slate-400 mb-4 font-medium">🕒 {paket.durasiText}</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-slate-100 mt-auto">
                    <span className="font-bold text-sm text-slate-800">{paket.hargaText}</span>
                    <Link 
                        to={`/paket/${paket.id}`} 
                        className="bg-[#5EEAD4] hover:bg-teal-400 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors shadow-sm"
                    >
                        Lihat Detail
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* 2. GLOBAL FOOTER */}
        <Footer />

        </div>
    );
    }

    export default DetailPaket;