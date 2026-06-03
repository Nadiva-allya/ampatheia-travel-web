    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    // Layout Assets
    import heroKiri from '../assets/hero-kiri.svg';
    import heroKanan from '../assets/hero-kanan.svg';
    import bgDestinasi from '../assets/bg-destinasi.png';
    import bgPaket from '../assets/bg-paket.jpg';

    // Destinasi
    import imgWayag from '../assets/wayag.png';
    import imgPasirTimbul from '../assets/pasir.png';
    import imgMisool from '../assets/misool.png';
    import imgManta from '../assets/manta.png';

    // Paket
    import imgDiving from '../assets/diving.png';
    import imgBulanMadu from '../assets/bulan-madu.png';
    import imgKeluarga from '../assets/keluarga.png';
    import imgSnorkeling from '../assets/snorkeling.png';
    import imgYatch from '../assets/yatch.png';
    import imgHopping from '../assets/hopping.png';
    import imgBawahLaut from '../assets/bawah-laut.png';
    import imgBerdua from '../assets/berdua.png';
    import imgHealing from '../assets/healing.png';

    // Galeri
    import imgGaleri1 from '../assets/gambar1.png';
    import imgGaleri2 from '../assets/gambar2.png';
    import imgGaleri3 from '../assets/gambar3.png';
    import imgGaleri4 from '../assets/gambar4.png';
    import imgGaleri5 from '../assets/gambar5.png';
    import imgGaleri6 from '../assets/gambar6.png';

    function Beranda() {
    const ampatheiaBlue = "text-[#36499B]";
    const bgOrange = "bg-[#F2994A]";
    
    const [isPesanTerkirim, setIsPesanTerkirim] = useState(false);
    const [formKontak, setFormKontak] = useState({
        nama: '',
        email: '',
        pesan: ''
    });

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
        
        {/* 1. NAVBAR GLOBAL */}
        <Navbar />

        {/* ==== 2. HERO SECTION ===== */}
        <div className="relative w-full min-h-[650px] lg:min-h-[800px] overflow-hidden bg-white -mt-2">
            <img 
            src={heroKiri} 
            alt="Ombak Kiri" 
            className="absolute bottom-0 left-0 w-full md:w-[55%] lg:w-[52%] object-contain object-bottom z-0" 
            />
            <img 
            src={heroKanan} 
            alt="Ombak Kanan" 
            className="absolute top-0 right-0 w-[80%] md:w-[55%] lg:w-[55%] h-full object-contain object-right z-0" 
            />
            <div className="relative z-10 flex flex-col h-full pt-10 px-8 lg:px-20 max-w-7xl mx-auto w-full">
            <div className="max-w-lg mt-10 lg:mt-16 text-left">
                <h1 className={`text-5xl lg:text-[4rem] font-bold ${ampatheiaBlue} leading-tight mb-4`}>
                Jelajahi Raja Ampat
                </h1>
                <p className="text-lg font-bold text-slate-800 mb-10">
                Rasakan habitat laut paling beragam di dunia
                </p>
                <button 
                onClick={() => document.getElementById('paket-unggulan').scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-[#F2994A] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 mt-4 cursor-pointer"
                >
                Lihat Paket Wisata
                </button>
            </div>
            </div>
        </div>

        {/* ==== 3. STATISTIK ===== */}
        <section className="flex flex-wrap justify-between items-center gap-10 px-8 lg:px-32 py-16 max-w-7xl mx-auto relative z-10 bg-white w-full">
            <div className="text-center"><h2 className={`text-5xl font-bold ${ampatheiaBlue} mb-2`}>300+</h2><p className="text-[#1A2E46] font-semibold text-sm">Wisatawan Puas</p></div>
            <div className="text-center"><h2 className={`text-5xl font-bold ${ampatheiaBlue} mb-2`}>10+</h2><p className="text-[#1A2E46] font-semibold text-sm">Paket Wisata</p></div>
            <div className="text-center"><h2 className={`text-5xl font-bold ${ampatheiaBlue} mb-2`}>4.9</h2><p className="text-[#1A2E46] font-semibold text-sm">Rating Pengguna</p></div>
            <div className="text-center"><h2 className={`text-5xl font-bold ${ampatheiaBlue} mb-2`}>100%</h2><p className="text-[#1A2E46] font-semibold text-sm">Pemandu Lokal</p></div>
        </section>

        {/* ==== 4. DESTINASI POPULER ===== */}
        <section className="relative w-full py-24 overflow-hidden mt-10">
            <img 
            src={bgDestinasi} 
            alt="Background Destinasi" 
            className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 px-8 lg:px-20 max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight border-l-[6px] border-[#5EEAD4] pl-5 mb-14 text-left">
                Destinasi<br/>Populer
            </h2> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                { nama: "Kepulauan Wayag", gambar: imgWayag },
                { nama: "Pantai Pasir Timbul", gambar: imgPasirTimbul },
                { nama: "Pulau Misool", gambar: imgMisool },
                { nama: "Manta Sandy", gambar: imgManta }
                ].map((item, index) => (
                <div 
                    key={index} 
                    className="group bg-white rounded-3xl p-4 shadow-2xl flex flex-col cursor-pointer hover:-translate-y-3 hover:shadow-orange-900/30 transition-all duration-300"
                >
                    <div className="w-full aspect-square overflow-hidden rounded-2xl mb-5">
                    <img 
                        src={item.gambar} 
                        alt={item.nama} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    </div>
                    <h3 className="font-bold text-[#F2994A] text-center mb-2 text-[1.1rem] group-hover:text-orange-600 transition-colors duration-300">
                    {item.nama}
                    </h3>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* ==== 5. KENAPA PILIH AMPATHEIA ==== */}
        <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold ${ampatheiaBlue} mb-4`}>
            Kenapa Pilih Ampatheia?
            </h2>
            <p className="text-slate-600 mb-20 font-medium">
            Rencanakan perjalanan ke Raja Ampat dengan lebih mudah, jelas, dan tanpa ribet.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
                {
                ikon: "✓", 
                title: "Informasi Lengkap dalam Satu Platform", 
                desc: "Temukan semua informasi destinasi, aktivitas, hingga paket wisata tanpa perlu berpindah website."
                },
                {
                ikon: "💼", 
                title: "Pemandu Lokal Ahli", 
                desc: "Didampingi oleh pemandu lokal berpengalaman yang mengenal Raja Ampat secara mendalam."
                },
                {
                ikon: "📅", 
                title: "Itinerary Terstruktur & Mudah", 
                desc: "Setiap perjalanan dilengkapi dengan rencana harian yang jelas, sehingga Anda bisa membayangkan alur perjalanan."
                },
                {
                ikon: "⭐", 
                title: "Review & Pengalaman Nyata", 
                desc: "Lihat ulasan dan dokumentasi dari wisatawan lain untuk membantu Anda memilih paket terbaik."
                }
            ].map((fitur, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <div className={`w-12 h-12 ${bgOrange} rounded-full flex items-center justify-center text-white text-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {fitur.ikon}
                    </div>
                </div>
                <h3 className={`font-bold ${ampatheiaBlue} mb-3 text-sm lg:text-base px-2`}>
                    {fitur.title}
                </h3>
                <p className="text-xs lg:text-sm text-slate-500 leading-relaxed px-2">
                    {fitur.desc}
                </p>
                </div>
            ))}
            </div>
        </section>

        {/* ==== 6. PAKET WISATA UNGGULAN ===== */}
        <section id="paket-unggulan" className="relative w-full py-24 overflow-hidden bg-slate-900">
            <img 
            src={bgPaket} 
            alt="Background Paket Wisata" 
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
            />
            <div className="absolute inset-0 bg-black/10 z-0"></div>

            <div className="relative z-10 pl-8 lg:pl-20 max-w-[1400px] mx-auto text-left">
            <div className="pr-8 lg:pr-20 mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                Paket Wisata Unggulan
                </h2>
                <p className="text-white text-lg drop-shadow-md font-medium">
                Temukan paket wisata terbaik untuk pengalaman Raja Ampat yang tak terlupakan
                </p>
            </div>

            <div className="flex flex-nowrap gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory pr-8 lg:pr-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {[
                {nama: "Petualangan Diving Ultimate", harga: "Rp. 37.500.000", rating: "5.0", durasi: "7 Hari/6 Malam", gambar: imgDiving},
                {nama: "Paket Bulan Madu Surga", harga: "Rp. 27.000.000", rating: "5.0", durasi: "5 Hari/4 Malam", gambar: imgBulanMadu},
                {nama: "Tur Eksplorasi Keluarga", harga: "Rp. 35.000.000", rating: "4.8", durasi: "6 Hari/5 Malam", gambar: imgKeluarga},
                {nama: "Pengalaman Surga Snorkeling", harga: "Rp. 21.000.000", rating: "4.9", durasi: "4 Hari/3 Malam", gambar: imgSnorkeling},
                {nama: "Kapal Phinisi Yatch Mewah", harga: "Rp. 67.500.000", rating: "4.9", durasi: "10 Hari/9 Malam", gambar: imgYatch},
                {nama: "Petualangan Island Hopping", harga: "Rp. 42.000.000", rating: "5.0", durasi: "6 Hari/5 Malam", gambar: imgHopping},
                {nama: "Eksplorasi Bawah Laut", harga: "Rp. 37.500.000", rating: "5.0", durasi: "7 Hari/6 Malam", gambar: imgBawahLaut},
                {nama: "Pesona Raja Ampat Berdua", harga: "Rp. 43.700.000", rating: "4.9", durasi: "5 Hari/4 Malam", gambar: imgBerdua},
                {nama: "Raja Ampat Healing Trip", harga: "Rp. 18.750.000", rating: "4.9", durasi: "4 Hari/3 Malam", gambar: imgHealing}
                ].map((paket, i) => (
                <div 
                    key={i} 
                    className="flex-none w-[300px] lg:w-[340px] bg-white rounded-3xl p-4 shadow-xl snap-center group cursor-pointer hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-900/20 transition-all duration-300"
                >
                    <div className="w-full h-48 bg-slate-200 rounded-2xl mb-4 overflow-hidden">
                    <img 
                        src={paket.gambar} 
                        alt={paket.nama} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    </div>
                    <h3 className={`font-bold ${ampatheiaBlue} text-[1.1rem] mb-2 leading-tight group-hover:text-[#F2994A] transition-colors duration-300 min-h-[2.75rem]`}>
                    {paket.nama}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 font-medium">
                    <span className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">⭐</span> {paket.rating}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="text-slate-400 text-sm">🕒</span> {paket.durasi}
                    </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <div>
                        <p className="font-bold text-[1.1rem] text-slate-800 tracking-tight">
                        {paket.harga}
                        </p>
                        <p className="text-[0.65rem] text-slate-500 uppercase tracking-wider">
                        /orang
                        </p>
                    </div>
                    <Link to={`/paket/${i + 1}`} className="border-2 border-[#F2994A] text-[#F2994A] px-5 py-2 rounded-full text-sm font-bold group-hover:bg-[#F2994A] group-hover:text-white transition-colors duration-300">
                        Pesan
                    </Link>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* ==== 7. TESTIMONI ===== */}
        <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold ${ampatheiaBlue} mb-4`}>
            Apa Kata Mereka?
            </h2>
            <p className="text-slate-600 mb-16 font-medium">
            Pengalaman nyata dari wisatawan yang telah menjelajahi Raja Ampat bersama Ampatheia
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
                {
                teks: "Paketnya lengkap banget, itinerary harian udah tersusun rapi jadi tinggal ikutin aja. Snorkeling di Wayag beneran surreal, nggak nyesel sama sekali!",
                nama: "Swen Wijaya, Surabaya"
                },
                {
                teks: "Estimasi biayanya transparan dari awal jadi bisa nabung dengan target yang jelas. Pengalaman island hopping-nya nggak terlupakan!",
                nama: "Arif Hidayat, Semarang"
                },
                {
                teks: "Awalnya takut ribet ngurusin perjalanan ke Raja Ampat sendiri, tapi lewat Ampatheia semua udah keurus. Pemandu lokalnya ramah dan tau spot-spot tersembunyi yang keren!",
                nama: "Nadia Putri, Jakarta"
                }
            ].map((testi, i) => (
                <div 
                key={i} 
                className="bg-[#EAEAEA] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
                >
                <div>
                    <div className="text-[#F2994A] mb-4 text-lg tracking-widest">⭐⭐⭐⭐⭐</div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-8">
                    "{testi.teks}"
                    </p>
                </div>
                <p className="font-bold text-sm text-slate-900">{testi.nama}</p>
                </div>
            ))}
            </div>
        </section>

        {/* ==== 8. GALERI PENGUNJUNG ===== */}
        <section className="py-16 px-8 lg:px-20 max-w-7xl mx-auto text-center">
            <h2 className={`text-4xl lg:text-5xl font-bold ${ampatheiaBlue} mb-12`}>
            Galeri Pengunjung
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                imgGaleri1, imgGaleri2, imgGaleri3, 
                imgGaleri4, imgGaleri5, imgGaleri6
            ].map((gambar, i) => (
                <div 
                key={i} 
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 group cursor-pointer border border-slate-200 shadow-sm"
                >
                <img 
                    src={gambar} 
                    alt={`Galeri Pengunjung ${i + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                </div>
            ))}
            </div>
        </section>

        {/* ==== 9. KONTAK ===== */}
        <section className="py-24 px-8 lg:px-20 max-w-7xl mx-auto relative mb-12 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-center w-full">
            
            {/* Kiri: Blok Teks Pertanyaan */}
            <div className="w-full lg:w-1/2 text-left">
            <h2 className={`text-4xl lg:text-5xl font-bold ${ampatheiaBlue} mb-6 leading-tight`}>
                Punya<br/>Pertanyaan?
            </h2>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed">
                Kirimi pesan dan tim kami akan segera menghubungi Anda untuk merencanakan liburan impian ke Raja Ampat
            </p>
            </div>

            {/* Kanan: Form Card Wrapper */}
            <div className="w-full lg:w-1/2 relative">

            <div className={`w-full bg-white p-8 rounded-3xl shadow-[0_4px_40px_rgba(0,0,0,0.05)] border border-slate-100 transition-all duration-500 ease-in-out ${isPesanTerkirim ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input 
                    type="text" 
                    placeholder="Nama Lengkap"
                    value={formKontak.nama}
                    onChange={(e) => setFormKontak({...formKontak, nama: e.target.value})}
                    className="w-full md:w-1/2 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-400 text-slate-700 bg-transparent text-sm font-semibold"
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    value={formKontak.email}
                    onChange={(e) => setFormKontak({...formKontak, email: e.target.value})}
                    className="w-full md:w-1/2 px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-400 text-slate-700 bg-transparent text-sm font-semibold"
                />
                </div>
                <textarea 
                rows="4" 
                placeholder="Tulis pesan atau pertanyaan..."
                value={formKontak.pesan}
                onChange={(e) => setFormKontak({...formKontak, pesan: e.target.value})}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-orange-400 text-slate-700 bg-transparent mb-6 resize-none text-sm font-semibold"
                ></textarea>
                
                <div className="flex justify-end">
                <button 
                    onClick={(e) => {
                    e.preventDefault(); 
                    if (!formKontak.nama || !formKontak.email || !formKontak.pesan) {
                        alert("Oops! Harap isi Nama, Email, dan Pesan terlebih dahulu sebelum mengirim.");
                        return;
                    }
                    setIsPesanTerkirim(true); 
                    setFormKontak({ nama: '', email: '', pesan: '' });
                    setTimeout(() => {
                        setIsPesanTerkirim(false);
                    }, 3500);
                    }}
                    className="bg-[#F2994A] hover:bg-orange-500 text-white font-bold py-3 px-10 rounded-xl transition-colors shadow-md hover:shadow-lg text-sm cursor-pointer"
                >
                    Kirim
                </button>
                </div>
            </div>

            <div className={`absolute inset-0 bg-white p-8 rounded-3xl shadow-xl border border-[#36499B]/10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out ${isPesanTerkirim ? 'opacity-100 z-10 scale-100' : 'opacity-0 -z-10 scale-95 pointer-events-none'}`}>
                <div className="w-14 h-14 rounded-full border-2 border-[#F2994A] flex items-center justify-center text-[#F2994A] text-3xl mb-5">
                ✓
                </div>
                <h3 className={`font-bold ${ampatheiaBlue} text-xl mb-2`}>Pesan Terkirim!</h3>
                <p className="text-sm text-slate-500">Tim kami akan segera menghubungi Anda.</p>
            </div>

            </div>
        </div>
        </section>

        {/* 3. GLOBAL FOOTER */}
        <Footer />

        </div>
    );
    }

    export default Beranda;