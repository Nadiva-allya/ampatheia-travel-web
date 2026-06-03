    import { Link } from 'react-router-dom';

    function Footer() {
    const ampatheiaBlue = "text-[#36499B]";

    return (
        <footer className="bg-[#5EEAD4] pt-20 pb-10 px-8 lg:px-20 mt-auto relative">
        {/* Aksen Ombak Atas */}
        <div className="absolute top-0 inset-x-0 -translate-y-[98%] h-5 bg-transparent overflow-hidden pointer-events-none">
            <svg className="w-full h-full fill-[#5EEAD4]" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,25 C240,45 480,5 720,25 C960,45 1200,5 1440,25 L1440,40 L0,40 Z"></path>
            </svg>
        </div>

        {/* Grid Konten Footer */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-slate-800 text-sm mb-10 text-left">
            <div>
            <h3 className={`font-bold text-lg mb-4 ${ampatheiaBlue}`}>Ampatheia</h3>
            <p className="text-xs leading-relaxed opacity-90">
                Ampatheia hadir untuk memudahkan perjalanan wisata Anda ke Raja Ampat. Temukan paket wisata lengkap, itinerary terstruktur, dan pemandu lokal terpercaya dalam satu platform.
            </p>
            </div>
            <div>
            <h3 className={`font-bold text-lg mb-4 ${ampatheiaBlue}`}>Tautan</h3>
            <ul className="space-y-3 text-xs font-semibold opacity-90">
                <li><Link to="/" className="hover:text-white transition-colors">Beranda</Link></li>
                <li><Link to="/paket" className="hover:text-white transition-colors">Paket Wisata</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
            </div>
            <div>
            <h3 className={`font-bold text-lg mb-4 ${ampatheiaBlue}`}>Hubungi Kami</h3>
            <ul className="space-y-3 text-xs font-semibold opacity-90">
                <li>Email: info@ampatheia.com</li>
                <li>Telepon: +62 812-3456-7890</li>
                <li>Alamat: Jakarta, Indonesia</li>
            </ul>
            </div>
            <div>
            <h3 className={`font-bold text-lg mb-4 ${ampatheiaBlue}`}>Ikuti Kami</h3>
            <ul className="space-y-2 text-xs font-semibold opacity-90">
                <li className="flex items-center gap-1.5">📷 @ampatheia.id</li>
                <li className="flex items-center gap-1.5">📘 @ampatheia.id</li>
                <li className="flex items-center gap-1.5">🌐 ampatheia.id</li>
            </ul>
            </div>
        </div>
        
        {/* Hak Cipta */}
        <div className="text-center text-xs text-slate-700 border-t border-teal-400/40 pt-6">
            Copyright © 2026 Ampatheia. Hak cipta dilindungi
        </div>
        </footer>
    );
    }

    export default Footer;