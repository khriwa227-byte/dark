
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

const WHATSAPP_NUMBER = '447414662070';
const WHATSAPP_MESSAGE = encodeURIComponent('Hoi, ik ben geïnteresseerd in IPTVDutch en wil graag een IPTV pakket kopen. Kunnen jullie mij meer informatie geven?');

const ContactRedirect: React.FC = () => {
  useEffect(() => {
    window.location.href = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}&type=phone_number&app_absent=0`;
  }, []);
  return null;
};

/* ─── Exit-intent popup ──────────────────────────────────────────────────── */

const ExitPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed inset-0 z-[200] flex items-center justify-center px-4"
    style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}
    onClick={onClose}
  >
    <div
      className="relative max-w-md w-full rounded-[40px] p-10 text-center"
      style={{ background: 'linear-gradient(160deg, #0F172A 0%, #1E1B4B 100%)', border: '1px solid rgba(124,58,237,0.35)', boxShadow: '0 0 80px rgba(124,58,237,0.2)' }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full text-white/40 hover:text-white transition-colors"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl" style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)' }}>
        🎁
      </div>

      <h3 className="text-3xl font-black tracking-tighter text-white mb-3">Wacht!</h3>
      <p className="text-lg font-semibold mb-2" style={{ color: 'rgba(241,245,249,0.7)' }}>
        Claim nog snel je <span className="text-white font-black">3 gratis maanden</span> voor je weggaat
      </p>
      <p className="text-sm mb-8" style={{ color: 'rgba(241,245,249,0.4)' }}>
        Deze aanbieding is tijdelijk beschikbaar. Mis het niet!
      </p>

      <a
        href={`https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Hoi, ik wil mijn 3 gratis maanden claimen bij IPTVDutch!')}&type=phone_number&app_absent=0`}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-5 rounded-3xl font-black text-xl text-white mb-4 hover:brightness-110 transition-all"
        style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', boxShadow: '0 8px 32px rgba(124,58,237,0.4)' }}
        onClick={onClose}
      >
        Ja, claim mijn 3 maanden gratis
      </a>

      <button onClick={onClose} className="text-sm font-semibold" style={{ color: 'rgba(241,245,249,0.3)' }}>
        Nee, ik wil geen gratis maanden
      </button>
    </div>
  </div>
);

/* ─── Sticky mobile CTA ──────────────────────────────────────────────────── */

const StickyCTA: React.FC<{ visible: boolean }> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      className="sticky-cta fixed bottom-0 left-0 right-0 z-[90] px-4 py-3 md:hidden"
      style={{ background: 'rgba(10,10,15,0.97)', borderTop: '1px solid rgba(59,130,246,0.15)', backdropFilter: 'blur(20px)' }}
    >
      <a
        href="#iptvdutch"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-black text-lg text-white"
        style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 4px 20px rgba(59,130,246,0.35)' }}
      >
        Bekijk Prijzen
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
      </a>
    </div>
  );
};

/* ─── layout wrapper ─────────────────────────────────────────────────────── */

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitPopupShown, setExitPopupShown] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setShowStickyCTA(y > 400);
    };
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

  // Exit-intent: trigger when mouse leaves viewport from the top
  useEffect(() => {
    if (exitPopupShown || location.pathname !== '/') return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitPopupShown) {
        setShowExitPopup(true);
        setExitPopupShown(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [exitPopupShown, location.pathname]);

  return (
    <div className="relative min-h-screen">
      <div className="grid-line grid-line-left" />
      <div className="grid-line grid-line-right" />
      {showExitPopup && <ExitPopup onClose={() => setShowExitPopup(false)} />}
      <Header isScrolled={scrollY > 50} />
      {children}
      <Footer />
      <StickyCTA visible={showStickyCTA} />
    </div>
  );
};

/* ─── pages ─────────────────────────────────────────────────────────────── */

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

const KanalenPage: React.FC = () => <main style={{ backgroundColor: '#0A0A0F' }}><Channels /></main>;
const VoordelenPage: React.FC = () => <main className="pt-28"><Benefits /></main>;
const PrijzenPage: React.FC = () => <main className="pt-28"><Pricing /></main>;
const ResellerPage: React.FC = () => <main><ResellerPacks /></main>;
const FAQPage: React.FC = () => <main className="pt-28"><FAQ /></main>;
const AlgemeneVoorwaardenPage: React.FC = () => <main><AlgemeneVoorwaarden /></main>;
const PrivacybeleidPage: React.FC = () => <main><Privacybeleid /></main>;
const SportklaenderPage: React.FC = () => <main><SportCalendar /></main>;

/* ─── app ────────────────────────────────────────────────────────────────── */

const AppInner: React.FC = () => (
  <Layout>
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
      <Route path="/contact" element={<ContactRedirect />} />
    </Routes>
  </Layout>
);

const App: React.FC = () => (
  <BrowserRouter>
    <AppInner />
  </BrowserRouter>
);

export default App;
