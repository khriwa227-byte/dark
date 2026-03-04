
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { SeoContent } from './components/SeoContent';
import { SportEvents } from './components/SportEvents';
import { SportCalendar } from './components/SportCalendar';

const BANNER_HEIGHT = 48;

const AnnouncementBanner: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => (
  <div
    className="banner-wrap banner-bg fixed top-0 left-0 right-0 z-[100] flex items-center justify-center gap-3 sm:gap-4 px-12 border-b border-white/10"
    style={{ height: `${BANNER_HEIGHT}px` }}
  >
    <span className="banner-text hidden sm:inline text-xs font-extrabold uppercase tracking-widest text-white">⚡ Tijdelijke Actie</span>
    <span className="banner-badge px-3 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wide"
      style={{ background: '#AE1C28', color: '#ffffff' }}>
      🎁 3 MAANDEN GRATIS
    </span>
    <span className="text-xs sm:text-sm text-white font-medium">bij elk abonnement</span>
    <a
      href="/prijzen"
      className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/10 transition-colors"
    >
      Bekijk aanbod
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
    </a>
    <button
      onClick={onDismiss}
      className="absolute right-3 sm:right-5 p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
      aria-label="Sluiten"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
    </button>
  </div>
);

/* ─── layout wrapper (header + footer shared across all pages) ─────────────── */

const Layout: React.FC<{ children: React.ReactNode; bannerVisible: boolean; onDismiss: () => void }> = ({ children, bannerVisible, onDismiss }) => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="grid-line grid-line-left" />
      <div className="grid-line grid-line-right" />
      {bannerVisible && <AnnouncementBanner onDismiss={onDismiss} />}
      <Header isScrolled={scrollY > 50} bannerOffset={bannerVisible ? BANNER_HEIGHT : 0} lightText={location.pathname === '/sportklaender'} />
      {children}
      <Footer />
    </div>
  );
};

/* ─── pages ─────────────────────────────────────────────────────────────────── */

const HomePage: React.FC = () => (
  <main>
    <section className="reveal"><Hero /></section>
    <section className="reveal"><SportEvents /></section>
    <section className="reveal"><FilmsAndShows /></section>
    <section className="reveal"><Pricing /></section>
    <section className="reveal"><Benefits /></section>
    <section className="reveal"><ServicesGrid /></section>
    <section className="reveal"><Reviews /></section>
    <section className="reveal"><PaymentMethods /></section>
    <section className="reveal"><FAQ /></section>
    <section className="reveal"><SeoContent /></section>
  </main>
);

const KanalenPage: React.FC = () => <main><Channels /></main>;
const VoordelenPage: React.FC = () => <main className="pt-28"><Benefits /></main>;
const PrijzenPage: React.FC = () => <main className="pt-28"><Pricing /></main>;
const ResellerPage: React.FC = () => <main><ResellerPacks /></main>;
const FAQPage: React.FC = () => <main className="pt-28"><FAQ /></main>;
const AlgemeneVoorwaardenPage: React.FC = () => <main><AlgemeneVoorwaarden /></main>;
const PrivacybeleidPage: React.FC = () => <main><Privacybeleid /></main>;
const SportklaenderPage: React.FC = () => <main><SportCalendar /></main>;

/* ─── app ────────────────────────────────────────────────────────────────────── */

const AppInner: React.FC = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <Layout bannerVisible={bannerVisible} onDismiss={() => setBannerVisible(false)}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kanalen" element={<KanalenPage />} />
        <Route path="/voordelen" element={<VoordelenPage />} />
        <Route path="/prijzen" element={<PrijzenPage />} />
        <Route path="/reseller" element={<ResellerPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaardenPage />} />
        <Route path="/privacybeleid" element={<PrivacybeleidPage />} />
        <Route path="/sportklaender" element={<SportklaenderPage />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
