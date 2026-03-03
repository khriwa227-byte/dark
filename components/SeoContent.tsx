
import React from 'react';

export const SeoContent: React.FC = () => {
  return (
    <section className="py-20 px-6" style={{ borderTop: '1px solid rgba(33,70,139,0.1)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-10 lg:p-16 space-y-8">

          <div className="space-y-3">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter" style={{ color: '#0D1B3E' }}>
              Wat is IPTVNederland?
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(13,27,62,0.75)' }}>
              <strong>IPTVNederland</strong> is de toonaangevende IPTV-aanbieder in Nederland. Met meer dan 65.000 kanalen uit meer dan 70 landen en 175.000+ films &amp; series biedt IPTVNederland het meest complete IPTV-pakket op de markt. Van live Eredivisie tot Champions League, van NPO tot internationale zenders — alles in kristalhelder 4K.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <h3 className="text-xl font-black" style={{ color: '#0D1B3E' }}>
                Waarom kiezen voor IPTVNederland?
              </h3>
              <ul className="space-y-2 text-base" style={{ color: 'rgba(13,27,62,0.75)' }}>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>65.000+ kanalen</strong> uit meer dan 70 landen</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Alle Nederlandse kanalen</strong> — NPO, RTL, SBS, Veronica en meer</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>4K kwaliteit</strong> zonder buffering of onderbrekingen</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Activering binnen 5 minuten</strong> via WhatsApp</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>15 dagen geld-terug-garantie</strong> — geen risico</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Werkt op alle apparaten</strong> — Smart TV, telefoon, tablet, PC</span></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black" style={{ color: '#0D1B3E' }}>
                IPTVNederland vs. traditionele TV
              </h3>
              <ul className="space-y-2 text-base" style={{ color: 'rgba(13,27,62,0.75)' }}>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Tot 80% goedkoper</strong> dan Ziggo of KPN</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Geen lange contracten</strong> — maand tot maand</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Meer kanalen</strong> dan welk kabelabonnement dan ook</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Geen installateur nodig</strong> — zelf in 5 minuten klaar</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>24/7 WhatsApp support</strong> — altijd bereikbaar</span></li>
                <li className="flex items-start gap-2"><span style={{ color: '#AE1C28' }}>✓</span> <span><strong>Pauzeer wanneer je wilt</strong> — volledige flexibiliteit</span></li>
              </ul>
            </div>
          </div>

          <div className="space-y-3 pt-4" style={{ borderTop: '1px solid rgba(33,70,139,0.1)' }}>
            <h3 className="text-xl font-black" style={{ color: '#0D1B3E' }}>
              IPTVNederland — De #1 keuze in Nederland
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(13,27,62,0.75)' }}>
              Duizenden tevreden klanten in heel Nederland kiezen dagelijks voor IPTVNederland als hun IPTV-provider. Of je nu in Amsterdam, Rotterdam, Den Haag, Utrecht of ergens anders in Nederland woont — met IPTVNederland geniet je overal van premium televisie. Bestel vandaag nog je IPTVNederland abonnement en ontvang <strong>3 maanden gratis</strong> bij elk pakket.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
