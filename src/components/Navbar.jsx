    import { Link } from 'react-router-dom';

    function Navbar() {
    const ampatheiaBlue = "text-[#36499B]";

    return (
        <nav className="flex justify-between items-center px-8 lg:px-20 py-6 max-w-7xl mx-auto w-full bg-white relative z-20">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold ${ampatheiaBlue} hover:text-orange-500 transition-colors`}>
            Ampatheia
        </Link>
        
        {/* Menu Links */}
        <div className={`flex space-x-8 font-medium ${ampatheiaBlue} items-center text-sm`}>
            <Link to="/paket" className="hover:text-orange-400 transition">Paket Wisata</Link>
            <Link to="/blog" className="hover:text-orange-400 transition">Blog</Link>
            <Link to="/masuk" className="hover:text-orange-400 transition">Masuk</Link>
            <Link to="/daftar" className="hover:text-orange-400 transition">Daftar</Link>
            
            {/* User Profile - Irene & IR */}
            <Link to="/profil" className="group flex items-center gap-3 border border-orange-400 bg-orange-50 rounded-full pl-4 pr-1 py-1 ml-2 cursor-pointer shadow-sm transition-all duration-300">
            <span className="text-sm text-slate-700 font-medium">
                Halo, <span className="font-bold text-orange-500">Irene</span>
            </span>
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                IR
            </div>
            </Link>
        </div>
        </nav>
    );
    }

    export default Navbar;