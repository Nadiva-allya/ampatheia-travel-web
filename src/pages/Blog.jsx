    import { useState, useEffect } from 'react';
    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';

    import bgBlogHero from '../assets/hero-paket.png';       
    import bgFeaturedPost from '../assets/blog-banner.png';   

    import imgDiving from '../assets/diving.png';
    import imgBawahLaut from '../assets/bawah-laut.png';
    import imgSnorkeling from '../assets/snorkeling.png';

    function Blog() {
    const ampatheiaBlue = "text-[#36499B]";

    const [selectedArticleId, setSelectedArticleId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [selectedArticleId]);

    const daftarArtikel = [
        {
        id: 1,
        tag: "Diving",
        author: "Sarah Johnson",
        tanggal: "March 15, 2026",
        judul: "Top 10 Diving Spots in Raja Ampat",
        deskripsi: "Discover the most breathtaking underwater locations in the world's most biodiverse marine ecosystem.",
        gambar: imgDiving
        },
        {
        id: 2,
        tag: "Travel & Tips",
        author: "Michael Chen",
        tanggal: "March 12, 2026",
        judul: "Best Time to Visit Raja Ampat",
        deskripsi: "Learn about the ideal seasons and weather conditions for your perfect Raja Ampat adventure.",
        gambar: bgBlogHero
        },
        {
        id: 3,
        tag: "Destinations",
        author: "Emma Davis",
        tanggal: "March 9, 2026",
        judul: "A Guide to Pianemo: The Icon of Raja Ampat",
        deskripsi: "Discover the most breathtaking underwater locations in the world's most biodiverse marine ecosystem.",
        gambar: imgBawahLaut
        },
        {
        id: 4,
        tag: "Photography",
        author: "David Kim",
        tanggal: "March 5, 2026",
        judul: "Underwater Photography Tips for Raja Ampat",
        deskripsi: "Capture the stunning marine life with these expert photography techniques.",
        gambar: imgSnorkeling
        },
        {
        id: 5,
        tag: "Culture",
        author: "Lisa Anderson",
        tanggal: "February 28, 2026",
        judul: "Local Culture and Traditions in Raja Ampat",
        deskripsi: "Immerse yourself in the rich cultural heritage of the local communities.",
        gambar: bgBlogHero
        },
        {
        id: 6,
        tag: "Sustainability",
        author: "James Wilson",
        tanggal: "February 20, 2026",
        judul: "Sustainable Tourism in Raja Ampat",
        deskripsi: "How to travel responsibly and help preserve this paradise for future generations.",
        gambar: imgDiving
        }
    ];

    const relatedArticles = daftarArtikel.filter(art => art.id !== selectedArticleId).slice(0, 3);

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans antialiased">
        
        {/* 1. GLOBAL NAVBAR */}
        <Navbar />

        {/* =========================================
            KONDISI A: TAMPILAN UTAMA LIST BLOG
        ========================================= */}
        {selectedArticleId === null ? (
            <>
            {/* BANNER 1: TOP HERO BANNER */}
            <section className="relative w-full h-[380px] flex items-center justify-center overflow-hidden">
                <img src={bgBlogHero} alt="Hero Banner" className="absolute inset-0 w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#36499B] tracking-tight mb-3">
                    Travel Blog & Stories
                </h1>
                <p className="text-slate-800 text-xs md:text-sm font-bold max-w-md mx-auto leading-relaxed">
                    Get inspired by travel stories, tips, and guides from Raja Ampat
                </p>
                </div>
            </section>

            {/* KONTEN UTAMA LIST */}
            <main className="max-w-7xl mx-auto w-full px-8 lg:px-20 py-12 flex flex-col gap-10">
                
                {/* BANNER 2: FEATURED POST */}
                <div className="relative w-full h-[360px] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100">
                <img src={bgFeaturedPost} alt="Featured Post" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 md:p-14 max-w-xl text-white z-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Raja Ampat: Surga <br/>Bawah Laut Indonesia
                    </h2>
                    <p className="text-xs md:text-sm opacity-90 font-medium mb-6 leading-relaxed">
                    Menyelami Keindahan Raja Ampat, rumah bagi keanekaragaman hayati laut teebesar di dunia
                    </p>
                    <button onClick={() => setSelectedArticleId(1)} className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold py-2.5 px-6 rounded-xl transition-all shadow flex items-center gap-2 w-fit cursor-pointer">
                    Read More <span>→</span>
                    </button>
                </div>
                </div>

                {/* SEARCH BOX */}
                <div className="w-full flex gap-3 items-center">
                <div className="relative flex-grow">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
                    <input 
                    type="text" 
                    placeholder="Search articles, destinations, diving, tips..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-cyan-300 font-medium text-slate-700 placeholder-slate-400 bg-white"
                    />
                </div>
                <button className="bg-[#5EEAD4] hover:bg-teal-300 text-[#36499B] font-bold px-6 py-3.5 rounded-xl text-xs transition-colors">
                    cari
                </button>
                </div>

                {/* GRID 6 KARTU ARTIKEL */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                {daftarArtikel.map((artikel) => (
                    <div key={artikel.id} className="bg-white rounded-[2rem] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between group">
                    <div>
                        <div className="w-full h-48 rounded-2xl overflow-hidden relative mb-4 bg-slate-50">
                        <img src={artikel.gambar} alt={artikel.judul} className="w-full h-full object-cover" />
                        <span className="absolute top-3 left-3 bg-[#5EEAD4] text-[#36499B] text-[0.65rem] font-bold px-3 py-1.5 rounded-lg">
                            {artikel.tag}
                        </span>
                        </div>
                        <div className="flex items-center gap-3 text-[0.68rem] font-medium text-slate-400 mb-3 px-1">
                        <span>👤 {artikel.author}</span>
                        <span>🗓 {artikel.tanggal}</span>
                        </div>
                        <div className="px-1 text-left">
                        <h3 className={`font-bold ${ampatheiaBlue} text-base mb-2 leading-snug line-clamp-2 min-h-[2.75rem]`}>
                            {artikel.judul}
                        </h3>
                        <p className="text-[0.72rem] text-slate-400 leading-relaxed font-medium line-clamp-3 mb-4">
                            {artikel.deskripsi}
                        </p>
                        </div>
                    </div>
                    <div className="px-1 pt-1 text-left">
                        <button 
                        onClick={() => setSelectedArticleId(artikel.id)} 
                        className="text-cyan-400 hover:text-cyan-500 text-[0.7rem] font-bold inline-flex items-center gap-1 cursor-pointer"
                        >
                        Read more <span className="text-xs">→</span>
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </main>
            </>
        ) : (
            // =========================================
            // KONDISI B: TAMPILAN READ MORE DETAIL POST
            // =========================================
            <main className="max-w-4xl mx-auto w-full px-8 py-10 flex flex-col text-left">
            
            <button 
                onClick={() => setSelectedArticleId(null)}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#36499B] mb-6 transition-colors w-fit cursor-pointer"
            >
                ← Kembali ke List Blog
            </button>

            <div className="relative w-full h-[380px] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                <img src={imgDiving} alt="Detail Post Hero" className="w-full h-full object-cover" />
                <span className="absolute top-5 left-5 bg-[#5EEAD4] text-[#36499B] text-xs font-bold px-4 py-1.5 rounded-xl">
                Diving
                </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Top 10 Diving Spots in Raja Ampat
            </h1>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-6">
                <span>👤 Sarah Johnson</span>
                <span>•</span>
                <span>🗓 March 15, 2026</span>
            </div>

            <hr className="border-slate-100 mb-8" />

            <div className="text-slate-600 text-sm leading-relaxed space-y-6">
                <p>
                Raja Ampat is home to some of the most spectacular diving locations on the planet. With over 1,500 species of fish and 600 species of coral, it's a diver's paradise unlike any other.
                </p>

                <div className="space-y-4 pt-2">
                <div>
                    <h3 className="font-bold text-slate-800 text-base">1. Cape Kri</h3>
                    <p className="text-slate-500 mt-1">Cape Kri holds the world record for the most fish species counted in a single dive - an astounding 374 species! The current here brings in large schools of fish, making it a thrilling dive for experienced divers.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-base">2. Manta Sandy</h3>
                    <p className="text-slate-500 mt-1">This cleaning station is famous for its resident manta rays. Watch these gentle giants glide gracefully overhead as cleaner fish tend to them. The best time to visit is during the dry season from October to April.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-base">3. Blue Magic</h3>
                    <p className="text-slate-500 mt-1">Named for the incredible blue water visibility, this site offers encounters with sharks, barracudas, and massive schools of trevally. The strong currents here make it suitable for advanced divers.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-base">4. Sardine Reef</h3>
                    <p className="text-slate-500 mt-1">True to its name, you'll find enormous schools of sardines creating mesmerizing formations. This site also features beautiful coral gardens and is suitable for divers of all levels.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-base">5. Melissa's Garden</h3>
                    <p className="text-slate-500 mt-1">A stunning coral garden with excellent biodiversity. Perfect for macro photography, you'll spot pygmy seahorses, nudibranchs, and countless colorful reef fish.</p>
                </div>
                </div>

                <div className="pt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Tips for Diving in Raja Ampat</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-500">
                    <li>Book with a reputable dive operator that follows sustainable practices</li>
                    <li>Bring an underwater camera - the photo opportunities are endless</li>
                    <li>Be mindful of currents and always dive within your certification level</li>
                    <li>Respect marine life and never touch the coral</li>
                    <li>Consider getting dive insurance before your trip</li>
                </ul>
                </div>

                <p className="pt-4 font-medium">
                Raja Ampat's underwater world is truly magical. Whether you're a beginner or an experienced diver, these spots will leave you in awe of nature's beauty.
                </p>
            </div>

            <section className="mt-16 pt-10 border-t border-slate-100 w-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((item) => (
                    <div 
                    key={item.id} 
                    onClick={() => setSelectedArticleId(item.id)}
                    className="bg-white rounded-2xl p-3 border border-slate-200/60 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                    >
                    <div className="w-full h-32 rounded-xl overflow-hidden bg-slate-50 mb-3">
                        <img src={item.gambar} alt={item.judul} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <h4 className={`font-bold ${ampatheiaBlue} text-xs leading-snug line-clamp-2 text-left px-1 mb-2`}>
                        {item.judul}
                    </h4>
                    </div>
                ))}
                </div>
            </section>

            </main>
        )}

        {/* 2. GLOBAL FOOTER */}
        <Footer />

        </div>
    );
    }

    export default Blog;