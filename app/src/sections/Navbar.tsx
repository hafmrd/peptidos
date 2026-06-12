import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, ArrowRight, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../lib/translations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, setIsOpen } = useCart();
  const { lang, toggle } = useLanguage();
  const T = translations[lang].nav;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleSectionLink = useCallback((sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  }, [location.pathname, navigate]);

  const navLinks: { label: string; action: () => void }[] = [
    { label: T.home, action: () => navigate('/') },
    { label: T.catalog, action: () => navigate('/catalog') },
    { label: T.science, action: () => handleSectionLink('science') },
    { label: T.quality, action: () => handleSectionLink('quality') },
    { label: T.about, action: () => handleSectionLink('about') },
    { label: T.contact, action: () => handleSectionLink('contact') },
  ];

  const isHome = location.pathname === '/';
  const cartBadge = totalItems > 99 ? '99+' : totalItems;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#042C53]/95 backdrop-blur-md shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/biohacks_isotipo_color.svg"
                alt="BIOHACKS"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-[0.2em]">BIOHACKS</span>
                <span className="text-[#85B7EB] text-[10px] tracking-[0.3em] -mt-1">PHARMACEUTICAL</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={l.action}
                  className="nav-link"
                >
                  {l.label}
                </button>
              ))}

              {/* Language toggle */}
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle language"
                className="text-white/70 hover:text-white text-xs font-bold tracking-widest border border-white/20 px-2 py-1 hover:border-white/50 transition-colors"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>

              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Toggle search"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`${totalItems}`}
                className="relative text-white/80 hover:text-white transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#378ADD] text-white text-[10px] font-bold min-w-[20px] h-5 flex items-center justify-center px-1">
                    {cartBadge}
                  </span>
                )}
              </button>
              <Link to="/catalog" className="btn-primary-bio text-xs flex items-center gap-2">
                {T.shopNow} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                type="button"
                onClick={toggle}
                aria-label="Toggle language"
                className="text-white/70 hover:text-white text-xs font-bold tracking-widest border border-white/20 px-2 py-1"
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                aria-label={`${totalItems}`}
                className="relative text-white"
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#378ADD] text-white text-[10px] font-bold min-w-[20px] h-5 flex items-center justify-center px-1">
                    {cartBadge}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="text-white"
              >
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="bg-[#042C53]/98 border-t border-white/10 py-4">
            <div className="max-w-7xl mx-auto section-padding">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={T.searchPlaceholder}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#378ADD]"
                  autoFocus
                />
                <button type="submit" className="px-6 py-2 bg-[#378ADD] text-white text-sm font-medium hover:bg-[#185FA5] transition-colors">
                  {T.search}
                </button>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="px-4 py-2 text-white/60 hover:text-white text-sm"
                >
                  {T.cancel}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#042C53]/98 backdrop-blur-lg border-t border-white/10">
            <div className="section-padding py-6 flex flex-col gap-4">
              {navLinks.map((l) => (
                <button
                  key={l.label}
                  type="button"
                  onClick={l.action}
                  className="text-white/80 hover:text-white text-sm tracking-widest uppercase py-2 border-b border-white/10 text-left"
                >
                  {l.label}
                </button>
              ))}
              <form onSubmit={handleSearch} className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={T.searchPlaceholder}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#378ADD]"
                />
                <button type="submit" aria-label="Search" className="px-4 py-2 bg-[#378ADD] text-white">
                  <Search className="w-4 h-4" />
                </button>
              </form>
              <Link to="/catalog" className="btn-primary-bio text-center mt-2">
                {T.shopNow}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
