
import React from 'react';

export const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0";

  return (
    <footer className="py-32 px-6 text-white" style={{ backgroundColor: '#060A10', borderTop: '1px solid rgba(59,130,246,0.1)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-12 text-center lg:text-left">
            <h2 className="text-4xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              Ontdek of IPTVDark perfect voor jou is <span className="text-italics" style={{ color: 'rgba(241,245,249,0.3)' }}>(dat is het zeker)</span>
            </h2>
            <p className="text-xl max-w-md mx-auto lg:mx-0" style={{ color: 'rgba(241,245,249,0.5)' }}>
              Plan een onmiddellijk WhatsApp gesprek over IPTVDark en ontdek alle mogelijkheden.
            </p>
            <div className="space-y-4">
              <div className="text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(241,245,249,0.3)' }}>Gevestigd in</div>
              <div className="text-2xl font-bold text-white">Nederland</div>
            </div>
          </div>

          <div className="p-12 rounded-[48px] border" style={{ background: 'rgba(15,23,42,0.95)', borderColor: 'rgba(59,130,246,0.2)' }}>
            <div className="space-y-8">
              <div className="p-6 rounded-3xl border" style={{ background: 'rgba(59,130,246,0.06)', borderColor: 'rgba(59,130,246,0.15)' }}>
                <p className="text-sm font-medium leading-relaxed" style={{ color: 'rgba(241,245,249,0.7)' }}>
                  IPTVDark helpt duizenden klanten met premium IPTV. Voor snelle service, WhatsApp ons voor een reactie binnen 5 minuten, bel <a href="tel:+447449708976" className="font-bold hover:underline" style={{ color: '#60A5FA' }}>+44 7449 708976</a> of mail <a href="mailto:info@iptvdark.digital" className="font-bold hover:underline" style={{ color: '#60A5FA' }}>info@iptvdark.digital</a>.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-8 text-white rounded-[32px] font-black text-2xl hover:brightness-110 hover:scale-[1.02] transition-all block text-center"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 8px 32px rgba(59,130,246,0.35)' }}
              >
                WhatsApp Ons Nu
              </a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 flex flex-col md:flex-row justify-between items-center gap-8" style={{ borderTop: '1px solid rgba(59,130,246,0.1)' }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
              <div className="w-4 h-4 bg-white rotate-45"></div>
            </div>
            <span className="text-xl font-extrabold tracking-tighter text-white">IPTVDark</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-8 text-sm font-bold" style={{ color: 'rgba(241,245,249,0.35)' }}>
            <a href="/algemene-voorwaarden" className="hover:text-white transition-colors">Algemene voorwaarden</a>
            <a href="/privacybeleid" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="mailto:info@iptvdark.digital" className="hover:text-white transition-colors">info@iptvdark.digital</a>
            <a href="tel:+447449708976" className="hover:text-white transition-colors">+44 7449 708976</a>
          </div>

          <div className="text-sm" style={{ color: 'rgba(241,245,249,0.25)' }}>
            © 2026 IPTVDark. Alle rechten voorbehouden.
          </div>
        </div>
      </div>
    </footer>
  );
};
