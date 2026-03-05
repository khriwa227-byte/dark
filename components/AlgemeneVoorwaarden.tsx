
import React from 'react';

export const AlgemeneVoorwaarden: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Terug naar home
        </a>

        <h1 className="text-4xl lg:text-6xl font-black tracking-tighter mb-4">
          Algemene Voorwaarden
        </h1>
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">1. Definities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>IPTVNederland</strong>: de aanbieder van IPTV-diensten, gevestigd in Nederland.</li>
              <li><strong>Klant</strong>: de natuurlijke persoon of rechtspersoon die een abonnement afsluit bij IPTVNederland.</li>
              <li><strong>Dienst</strong>: het IPTV-abonnement en alle bijbehorende diensten die door IPTVNederland worden aangeboden.</li>
              <li><strong>Abonnement</strong>: de overeenkomst tussen IPTVNederland en de Klant voor het gebruik van de Dienst gedurende een bepaalde periode.</li>
              <li><strong>Apparaat</strong>: elk apparaat (smart-tv, smartphone, tablet, laptop of ander compatibel apparaat) waarop de Dienst wordt gebruikt.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">2. Toepasselijkheid</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Deze Algemene Voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten en diensten van IPTVNederland.</li>
              <li>Door het afnemen van een abonnement gaat de Klant akkoord met deze voorwaarden.</li>
              <li>IPTVNederland behoudt zich het recht voor deze voorwaarden te wijzigen. Wijzigingen worden minimaal 30 dagen van tevoren aangekondigd.</li>
              <li>Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">3. Abonnementen en Prijzen</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVNederland biedt diverse abonnementsvormen aan, waaronder Prime (12 maanden), Popular (6 maanden) en Basic (1 maand).</li>
              <li>De actuele prijzen staan vermeld op de website en kunnen per abonnementsvorm en aantal apparaten variëren.</li>
              <li>Prijzen zijn inclusief btw, tenzij anders vermeld.</li>
              <li>IPTVNederland behoudt zich het recht voor om prijzen aan te passen. Bestaande abonnementen worden pas bij verlenging aangepast.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">4. Bestelling en Betaling</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Bestellingen worden geplaatst via WhatsApp of andere door IPTVNederland aangeboden kanalen.</li>
              <li>Na ontvangst van de betaling wordt het abonnement geactiveerd en ontvangt de Klant de benodigde inloggegevens.</li>
              <li>IPTVNederland accepteert de betaalmethoden zoals vermeld op de website.</li>
              <li>Alle betalingen zijn definitief. Terugbetalingen worden uitsluitend verstrekt conform artikel 8 van deze voorwaarden.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">5. Gebruik van de Dienst</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>De Klant mag de Dienst uitsluitend gebruiken op het aantal apparaten dat bij het gekozen abonnement hoort.</li>
              <li>Het is niet toegestaan om inloggegevens te delen met derden buiten het eigen huishouden.</li>
              <li>Het is verboden om de Dienst te gebruiken voor commerciële doeleinden, tenzij schriftelijk overeengekomen.</li>
              <li>De Klant is verantwoordelijk voor het beveiligen van zijn/haar inloggegevens.</li>
              <li>Bij misbruik of schending van deze voorwaarden kan IPTVNederland het abonnement per direct beëindigen zonder restitutie.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">6. Beschikbaarheid en Kwaliteit</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVNederland streeft naar een beschikbaarheid van 99,9% maar kan geen ononderbroken dienstverlening garanderen.</li>
              <li>Gepland onderhoud wordt, waar mogelijk, vooraf aangekondigd.</li>
              <li>IPTVNederland is niet aansprakelijk voor onderbrekingen veroorzaakt door omstandigheden buiten haar controle, waaronder storingen bij derden, internetproblemen of overmacht.</li>
              <li>Het zenderaanbod kan wijzigen zonder voorafgaande kennisgeving.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">7. Duur en Beëindiging</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Het abonnement heeft de duur zoals gekozen bij het afsluiten (1, 6 of 12 maanden).</li>
              <li>Het abonnement wordt niet automatisch verlengd. De Klant dient zelf een nieuw abonnement af te sluiten na afloop.</li>
              <li>IPTVNederland kan het abonnement per direct beëindigen bij schending van deze voorwaarden door de Klant.</li>
              <li>De Klant kan het abonnement op elk moment opzeggen, maar heeft geen recht op restitutie van reeds betaalde bedragen, tenzij anders bepaald in artikel 8.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">8. Herroepingsrecht en Restitutie</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>De Klant heeft het recht om binnen 14 dagen na activering van het abonnement zonder opgaaf van redenen het abonnement te herroepen.</li>
              <li>Om gebruik te maken van het herroepingsrecht dient de Klant contact op te nemen met IPTVNederland via WhatsApp of e-mail.</li>
              <li>Bij herroeping binnen de gestelde termijn wordt het volledige bedrag gerestitueerd.</li>
              <li>Na het verstrijken van de herroepingstermijn is restitutie niet meer mogelijk.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">9. Aansprakelijkheid</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVNederland is niet aansprakelijk voor indirecte schade, gevolgschade of gederfde winst.</li>
              <li>De totale aansprakelijkheid van IPTVNederland is beperkt tot het bedrag dat de Klant heeft betaald voor het lopende abonnement.</li>
              <li>IPTVNederland is niet aansprakelijk voor schade veroorzaakt door het gebruik van de Dienst op niet-compatibele apparaten.</li>
              <li>De Klant vrijwaart IPTVNederland voor aanspraken van derden die verband houden met het gebruik van de Dienst.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">10. Privacy en Gegevensbescherming</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>IPTVNederland verwerkt persoonsgegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</li>
              <li>Persoonsgegevens worden uitsluitend gebruikt voor het leveren van de Dienst en het communiceren met de Klant.</li>
              <li>IPTVNederland deelt geen persoonsgegevens met derden, tenzij dit noodzakelijk is voor de uitvoering van de Dienst of wettelijk verplicht.</li>
              <li>Voor meer informatie verwijzen wij naar ons Privacybeleid.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">11. Intellectueel Eigendom</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Alle intellectuele eigendomsrechten met betrekking tot de website, het merk en de Dienst berusten bij IPTVNederland.</li>
              <li>Het is de Klant niet toegestaan om materialen van IPTVNederland te kopiëren, verspreiden of anderszins te gebruiken zonder schriftelijke toestemming.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">12. Klachten en Geschillen</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Klachten kunnen worden ingediend via WhatsApp of e-mail op <a href="mailto:info@iptvnederland.digital" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>info@iptvnederland.digital</a>.</li>
              <li>IPTVNederland streeft ernaar klachten binnen 7 werkdagen te behandelen.</li>
              <li>Op deze voorwaarden is Nederlands recht van toepassing.</li>
              <li>Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">13. Contact</h2>
            <p>Voor vragen over deze Algemene Voorwaarden kunt u contact met ons opnemen:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <p><strong>IPTVNederland</strong></p>
              <p>E-mail: <a href="mailto:info@iptvnederland.digital" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>info@iptvnederland.digital</a></p>
              <p>Telefoon: <a href="tel:+447449708976" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>+44 7449 708976</a></p>
              <p>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=447449708976&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>+44 7449 708976</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
