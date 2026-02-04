
import React from 'react';
import { SwipeableMarquee } from './ServicesGrid';

const TrustBadge: React.FC<{ icon: React.ReactNode; children: React.ReactNode; delay: string }> = ({ icon, children, delay }) => (
  <div
    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/15 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-white/20 hover:bg-white/25 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-300 animate-[popIn_0.5s_ease-out_both]"
    style={{ animationDelay: delay }}
  >
    <span className="text-lg sm:text-xl text-white flex items-center">{icon}</span>
    <span className="text-xs sm:text-sm font-semibold tracking-wide text-white whitespace-nowrap leading-none">{children}</span>
  </div>
);

export const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=3197010284651&text&type=phone_number&app_absent=0";

  return (
    <section className="pt-40 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center sm:items-start gap-10 sm:gap-12 w-[88%] sm:w-full mx-auto sm:mx-0">

          <h1 className="text-[clamp(3rem,13vw,6rem)] lg:text-8xl font-extrabold leading-[1.1] tracking-tighter text-white drop-shadow-sm text-center sm:text-left w-full">
            <span className="sm:hidden">Premium IPTV<br />voor <span className="text-italics">iedereen</span></span>
            <span className="hidden sm:inline">Premium IPTV voor <span className="text-italics">iedereen</span></span>
          </h1>

          <p className="text-[clamp(1rem,3.5vw,1.25rem)] text-white/80 font-medium leading-relaxed text-center sm:text-left w-full">
            TV kijken zoals het hoort.<br className="sm:hidden" /> Pauzeer of annuleer op elk moment.
          </p>

          <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:justify-start">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black text-lg font-black rounded-full hover:scale-[1.02] transition-transform shadow-2xl text-center"
            >
              Bekijk prijzen
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 backdrop-blur-md text-white text-lg font-bold rounded-full hover:bg-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              WhatsApp ons
            </a>
          </div>

          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 w-full">
            <TrustBadge delay="0.3s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}>Instant Activering</TrustBadge>
            <TrustBadge delay="0.5s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/></svg>}>Geen Buffering</TrustBadge>
            <TrustBadge delay="0.7s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}>15 Dagen Garantie</TrustBadge>
          </div>

        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="glass-card-dark p-10 rounded-[40px] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700 w-full max-w-[440px] flex flex-col items-center text-center">
            <div className="space-y-8 w-full flex flex-col items-center">
              <div className="flex justify-between items-center w-full">
                <div className="w-12 h-12 opacity-0"></div> {/* Spacer for symmetry */}
                <div className="bg-pink-500 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-pink-500/50">
                  Start Vandaag
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rotate-45"></div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl font-black text-white leading-tight">Doe mee</h3>
                <h3 className="text-5xl font-black text-white leading-tight underline decoration-pink-500 decoration-4 underline-offset-8">PrimeKopenTV</h3>
              </div>
              <p className="text-white/70 text-lg font-medium">Eén abonnement voor alles.</p>
              <a 
                href="#pricing" 
                className="w-full py-5 bg-white text-black font-black rounded-2xl text-xl hover:bg-gray-100 transition-colors block text-center shadow-xl"
              >
                Bekijk prijzen
              </a>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 border-t border-white/10 pt-6 w-full flex justify-between items-center text-white hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500"></div>
                <div className="text-left">
                  <div className="text-sm font-bold">WhatsApp Support</div>
                  <div className="text-xs text-white/50">Bereikbaar 24/7</div>
                </div>
              </div>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-500 rounded-full -z-10 blur-3xl opacity-30"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full -z-10 blur-3xl opacity-30"></div>
        </div>
      </div>

      <div className="mt-24 border-y border-white/10 py-12 backdrop-blur-sm">
        <SwipeableMarquee className="marquee-container">
          <div className="marquee-content brightness-125">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black text-white/80 hover:text-white transition-colors uppercase tracking-widest px-8 cursor-default">{brand}</span>
            ))}
          </div>
          <div className="marquee-content brightness-125">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black text-white/80 hover:text-white transition-colors uppercase tracking-widest px-8 cursor-default">{brand}</span>
            ))}
          </div>
        </SwipeableMarquee>
      </div>
    </section>
  );
};
