import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { SportCalendar } from './components/SportCalendar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const CalendarApp: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Header isScrolled={scrollY > 50} bannerOffset={0} lightText />
      <main>
        <SportCalendar />
      </main>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Could not find root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <CalendarApp />
  </React.StrictMode>
);
