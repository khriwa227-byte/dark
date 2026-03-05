
import React from 'react';

export const Privacybeleid: React.FC = () => {
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
          Privacybeleid
        </h1>
        <div className="space-y-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">1. Inleiding</h2>
            <p>
              IPTVNederland, gevestigd in Nederland, hecht groot belang aan de bescherming van uw persoonsgegevens. In dit Privacybeleid leggen wij uit welke gegevens wij verzamelen, waarom wij deze verzamelen, hoe wij deze gebruiken en welke rechten u heeft. Dit beleid is van toepassing op alle diensten die door IPTVNederland worden aangeboden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p className="mb-4">Wij kunnen de volgende persoonsgegevens verzamelen en verwerken:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer en WhatsApp-nummer.</li>
              <li><strong>Betalingsgegevens:</strong> informatie met betrekking tot uw betaling (wij slaan geen volledige bankgegevens op).</li>
              <li><strong>Accountgegevens:</strong> gebruikersnaam en versleuteld wachtwoord voor toegang tot de Dienst.</li>
              <li><strong>Apparaatgegevens:</strong> type apparaat, besturingssysteem en IP-adres bij gebruik van de Dienst.</li>
              <li><strong>Communicatiegegevens:</strong> berichten die u ons stuurt via WhatsApp, e-mail of andere kanalen.</li>
              <li><strong>Websitegegevens:</strong> cookies, browsegedrag en interacties met onze website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">3. Waarom verzamelen wij deze gegevens?</h2>
            <p className="mb-4">Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Het aanmaken en beheren van uw abonnement.</li>
              <li>Het verwerken van betalingen en het versturen van bevestigingen.</li>
              <li>Het bieden van klantenservice en het beantwoorden van uw vragen via WhatsApp, e-mail of telefoon.</li>
              <li>Het verbeteren van onze dienstverlening en website.</li>
              <li>Het voorkomen van fraude en misbruik.</li>
              <li>Het voldoen aan wettelijke verplichtingen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">4. Rechtsgronden voor verwerking</h2>
            <p className="mb-4">Wij verwerken uw gegevens op basis van de volgende rechtsgronden:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Uitvoering van de overeenkomst:</strong> verwerking is noodzakelijk voor het leveren van de Dienst die u bij ons heeft afgenomen.</li>
              <li><strong>Gerechtvaardigd belang:</strong> verwerking voor het verbeteren van onze diensten en het voorkomen van fraude.</li>
              <li><strong>Wettelijke verplichting:</strong> verwerking die noodzakelijk is om te voldoen aan de wet.</li>
              <li><strong>Toestemming:</strong> wanneer u ons uitdrukkelijk toestemming heeft gegeven, bijvoorbeeld voor het ontvangen van marketingberichten.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">5. Delen van gegevens met derden</h2>
            <p className="mb-4">IPTVNederland deelt uw persoonsgegevens niet met derden, tenzij:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dit noodzakelijk is voor de uitvoering van de overeenkomst (bijvoorbeeld betalingsverwerkers).</li>
              <li>Wij hiertoe wettelijk verplicht zijn (bijvoorbeeld op verzoek van een bevoegde autoriteit).</li>
              <li>U hiervoor uitdrukkelijk toestemming heeft gegeven.</li>
            </ul>
            <p className="mt-4">Wij verkopen uw persoonsgegevens nooit aan derden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">6. Bewaartermijnen</h2>
            <p className="mb-4">Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor de doeleinden waarvoor zij zijn verzameld:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Accountgegevens:</strong> gedurende de looptijd van uw abonnement en tot 12 maanden na beëindiging.</li>
              <li><strong>Betalingsgegevens:</strong> 7 jaar conform de fiscale bewaarplicht.</li>
              <li><strong>Communicatiegegevens:</strong> tot 24 maanden na het laatste contact.</li>
              <li><strong>Websitegegevens:</strong> tot 26 maanden (cookies en analytics).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">7. Cookies</h2>
            <p className="mb-4">Onze website maakt gebruik van cookies om de gebruikerservaring te verbeteren. Wij gebruiken de volgende soorten cookies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Functionele cookies:</strong> noodzakelijk voor het functioneren van de website.</li>
              <li><strong>Analytische cookies:</strong> om het gebruik van de website te analyseren en te verbeteren.</li>
            </ul>
            <p className="mt-4">U kunt cookies beheren of uitschakelen via de instellingen van uw browser. Het uitschakelen van functionele cookies kan de werking van de website beïnvloeden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">8. Beveiliging</h2>
            <p>
              IPTVNederland neemt passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies, vernietiging of wijziging. Ondanks onze inspanningen kan geen enkele methode van elektronische opslag of overdracht volledig veilig worden gegarandeerd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">9. Uw rechten</h2>
            <p className="mb-4">Op grond van de Algemene Verordening Gegevensbescherming (AVG) heeft u de volgende rechten:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Recht op inzage:</strong> u kunt opvragen welke gegevens wij van u verwerken.</li>
              <li><strong>Recht op rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren.</li>
              <li><strong>Recht op verwijdering:</strong> u kunt verzoeken om verwijdering van uw gegevens.</li>
              <li><strong>Recht op beperking:</strong> u kunt verzoeken om beperking van de verwerking van uw gegevens.</li>
              <li><strong>Recht op overdraagbaarheid:</strong> u kunt verzoeken om uw gegevens in een gestructureerd formaat te ontvangen.</li>
              <li><strong>Recht op bezwaar:</strong> u kunt bezwaar maken tegen de verwerking van uw gegevens.</li>
              <li><strong>Recht om toestemming in te trekken:</strong> u kunt eerder gegeven toestemming op elk moment intrekken.</li>
            </ul>
            <p className="mt-4">
              Om gebruik te maken van uw rechten kunt u contact met ons opnemen via de onderstaande contactgegevens. Wij reageren binnen 30 dagen op uw verzoek.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">10. Klachten</h2>
            <p>
              Indien u een klacht heeft over de verwerking van uw persoonsgegevens, kunt u contact met ons opnemen. Daarnaast heeft u het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP), de Nederlandse toezichthouder op het gebied van privacybescherming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">11. Wijzigingen</h2>
            <p>
              IPTVNederland behoudt zich het recht voor om dit Privacybeleid te wijzigen. Wijzigingen worden op deze pagina gepubliceerd. Wij raden u aan om dit beleid regelmatig te raadplegen. Bij significante wijzigingen zullen wij u hierover actief informeren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-black tracking-tight mb-4">12. Contact</h2>
            <p>Voor vragen over dit Privacybeleid of over de verwerking van uw persoonsgegevens kunt u contact met ons opnemen:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <p><strong>IPTVNederland</strong></p>
              <p>E-mail: <a href="mailto:info@iptvnederland.digital" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>info@iptvnederland.digital</a></p>
              <p>Telefoon: <a href="tel:+447414662070" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>+44 7414 662070</a></p>
              <p>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=447414662070&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: "#AE1C28" }}>+44 7414 662070</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
