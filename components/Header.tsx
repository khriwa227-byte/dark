
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Kanalen', href: '#/kanalen' },
    { name: 'Voordelen', href: '#benefits' },
    { name: 'Prijzen', href: '#pricing' },
    { name: 'Reseller', href: '#/reseller' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tighter">PrimeKopenTV</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:opacity-60 transition-opacity">{link.name}</a>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <a href="#pricing" className="px-6 py-2.5 rounded-full bg-black text-white hover:opacity-80 transition-all block text-center">Bekijk prijzen</a>
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-black focus:outline-none" 
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
        className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden pt-24 px-6`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeMenu}
              className="text-3xl font-black tracking-tighter hover:text-gray-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-8">
            <a 
              href="#pricing"
              onClick={closeMenu}
              className="w-full py-5 rounded-3xl bg-black text-white text-xl font-bold hover:opacity-80 transition-all shadow-lg block text-center"
            >
              Bekijk prijzen
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
