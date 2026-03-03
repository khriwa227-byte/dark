
import React from 'react';


const TrustBadge: React.FC<{ icon: React.ReactNode; children: React.ReactNode; delay: string }> = ({ icon, children, delay }) => (
  <div
    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(33,70,139,0.15)] border hover:scale-105 hover:shadow-[0_8px_24px_rgba(33,70,139,0.2)] transition-all duration-300 animate-[popIn_0.5s_ease-out_both]"
    style={{ animationDelay: delay, background: 'rgba(33,70,139,0.1)', borderColor: 'rgba(33,70,139,0.25)' }}
  >
    <span className="text-lg sm:text-xl flex items-center" style={{ color: '#21468B' }}>{icon}</span>
    <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap leading-none" style={{ color: '#0D1B3E' }}>{children}</span>
  </div>
);

export const Hero: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0";

  return (
    <section className="pt-40 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto sm:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col items-center sm:items-start gap-10 sm:gap-12 w-[88%] sm:w-full mx-auto sm:mx-0">

          <div className="flex justify-center sm:justify-start w-full animate-[popIn_0.6s_ease-out_both]">
            <a href="#pricing" className="inline-flex items-center gap-3 pl-2.5 pr-5 py-2 rounded-full backdrop-blur-md border hover:brightness-110 hover:scale-[1.03] transition-all duration-300 shadow-[0_4px_16px_rgba(33,70,139,0.2)]" style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a, #21468B)', borderColor: 'rgba(255,255,255,0.2)' }}>
              <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #AE1C28, #c0392b)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              <span className="text-base sm:text-lg font-bold text-white">Bestel nu en ontvang</span>
              <span className="text-base sm:text-lg font-black uppercase tracking-wide text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">3 MAANDEN GRATIS</span>
            </a>
          </div>

          <h1 className="text-[clamp(3rem,13vw,6rem)] lg:text-8xl font-extrabold leading-[1.1] tracking-tighter text-center sm:text-left w-full" style={{ color: '#0D1B3E' }}>
            <span className="sm:hidden">IPTVNederland<br />Van Nederland,<br /><span className="text-italics">voor Nederland</span></span>
            <span className="hidden sm:inline">IPTVNederland<br />Van Nederland, <span className="text-italics">voor Nederland</span></span>
          </h1>

          <p className="text-[clamp(1rem,3.5vw,1.25rem)] font-medium leading-relaxed text-center sm:text-left w-full" style={{ color: 'rgba(13,27,62,0.7)' }}>
            Premium IPTV · 65.000+ kanalen uit 70+ landen.<br className="sm:hidden" /> TV kijken zoals het hoort. Pauzeer of annuleer op elk moment.
          </p>

          <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:justify-start">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-10 py-5 text-white text-lg font-black rounded-full hover:scale-[1.02] transition-transform shadow-2xl text-center"
              style={{ backgroundColor: '#21468B' }}
            >
              Bekijk prijzen
            </a>
            <a
              href="#pricing"
              className="btn-claim w-full sm:w-auto px-10 py-5 text-white text-lg font-black rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/20 shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              Claim mijn 3 maanden bonus
              <svg className="w-5 h-5 animate-[bounceX_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>

          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 w-full">
            <TrustBadge delay="0.3s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}>Instant Activering</TrustBadge>
            <TrustBadge delay="0.5s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/></svg>}>Geen Buffering</TrustBadge>
            <TrustBadge delay="0.7s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}>15 Dagen Garantie</TrustBadge>
          </div>

        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="hidden lg:block" />
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full -z-10 blur-3xl opacity-20" style={{ backgroundColor: '#AE1C28' }}></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full -z-10 blur-3xl opacity-20" style={{ backgroundColor: '#21468B' }}></div>
        </div>
      </div>

      <div className="mt-24 py-12" style={{ backgroundColor: '#0D1B3E' }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black uppercase tracking-widest px-8 cursor-default" style={{ color: 'rgba(255,255,255,0.85)' }}>{brand}</span>
            ))}
          </div>
          <div className="marquee-content">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-3xl font-black uppercase tracking-widest px-8 cursor-default" style={{ color: 'rgba(255,255,255,0.85)' }}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
