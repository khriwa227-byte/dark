
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
  bannerOffset?: number;
  lightText?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, bannerOffset = 0, lightText = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Kanalen', href: '/kanalen' },
    { name: 'Sport', href: '/sportklaender' },
    { name: 'Voordelen', href: '/voordelen' },
    { name: 'Prijzen', href: '/prijzen' },
    { name: 'Reseller', href: '/reseller' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? 'py-4 border-b'
            : 'bg-transparent py-4'
        }`}
        style={{
          top: `${bannerOffset}px`,
          ...(isScrolled || isMenuOpen
            ? { background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(20px)', borderColor: 'rgba(59,130,246,0.12)' }
            : {}),
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">DutchIPTV</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="transition-colors duration-200"
                style={{ color: 'rgba(241,245,249,0.7)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F1F5F9')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(241,245,249,0.7)')}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/prijzen"
              className="px-6 py-2.5 rounded-full text-white font-bold hover:brightness-110 transition-all"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}
            >
              Bekijk prijzen
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 focus:outline-none text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[49] transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden px-6`}
        style={{ background: '#0A0A0F', paddingTop: `${bannerOffset + 96}px` }}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeMenu}
              className="text-3xl font-black tracking-tighter text-white hover:opacity-60 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-8">
            <Link
              to="/prijzen"
              onClick={closeMenu}
              className="w-full py-5 rounded-3xl text-white text-xl font-bold hover:brightness-110 transition-all shadow-lg block text-center"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 8px 32px rgba(59,130,246,0.35)' }}
            >
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
