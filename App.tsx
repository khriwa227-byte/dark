
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ServicesGrid, FilmsAndShows } from './components/ServicesGrid';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Reviews } from './components/Reviews';
import { PaymentMethods } from './components/PaymentMethods';
import { Footer } from './components/Footer';
import { AlgemeneVoorwaarden } from './components/AlgemeneVoorwaarden';
import { Privacybeleid } from './components/Privacybeleid';
import { Channels } from './components/Channels';
import { ResellerPacks } from './components/ResellerPacks';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/algemene-voorwaarden') {
        setCurrentPage('algemene-voorwaarden');
        window.scrollTo(0, 0);
      } else if (hash === '#/privacybeleid') {
        setCurrentPage('privacybeleid');
        window.scrollTo(0, 0);
      } else if (hash === '#/kanalen') {
        setCurrentPage('kanalen');
        window.scrollTo(0, 0);
      } else if (hash === '#/reseller') {
        setCurrentPage('reseller');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    // Reveal animation observer
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [currentPage]);

  return (
    <div className="relative min-h-screen">
      <div className="grid-line grid-line-left"></div>
      <div className="grid-line grid-line-right"></div>

      <Header isScrolled={scrollY > 50} />

      {currentPage === 'algemene-voorwaarden' ? (
        <main>
          <AlgemeneVoorwaarden />
        </main>
      ) : currentPage === 'privacybeleid' ? (
        <main>
          <Privacybeleid />
        </main>
      ) : currentPage === 'kanalen' ? (
        <main>
          <Channels />
        </main>
      ) : currentPage === 'reseller' ? (
        <main>
          <ResellerPacks />
        </main>
      ) : (
        <main>
          <section className="reveal">
            <Hero />
          </section>
          <section className="reveal">
            <FilmsAndShows />
          </section>
          <section className="reveal">
            <Pricing />
          </section>
          <section className="reveal">
            <Benefits />
          </section>
          <section className="reveal">
            <ServicesGrid />
          </section>
          <section className="reveal">
            <Reviews />
          </section>
          <section className="reveal">
            <PaymentMethods />
          </section>
          <section className="reveal">
            <FAQ />
          </section>
        </main>
      )}

      <Footer />

      {/* Sticky CTA Button */}
      <a
        href="#pricing"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          width: '92%',
          maxWidth: '672px',
          background: 'linear-gradient(to right, #000, #1e003a, #000)',
          border: '2px solid rgba(168, 85, 247, 0.5)',
          borderRadius: '24px',
          padding: '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          textDecoration: 'none',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)',
        }}
        className="group"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span style={{ color: '#4ade80', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Live</span>
        <span style={{ color: '#fff', fontSize: '18px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Abonneer Nu</span>
        <svg style={{ width: '20px', height: '20px', color: '#fff' }} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
      </a>
    </div>
  );
};

export default App;
