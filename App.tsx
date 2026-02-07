
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
import { DesignAssistant } from './components/DesignAssistant';
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
      <DesignAssistant />
    </div>
  );
};

export default App;
