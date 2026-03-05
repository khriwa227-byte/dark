import React from 'react';

interface ResellerPack {
  credits: number;
  originalPrice: number;
  price: number;
  pricePerCredit: number;
  popular?: boolean;
}

const resellerPacks: ResellerPack[] = [
  {
    credits: 120,
    originalPrice: 420,
    price: 279.99,
    pricePerCredit: 2.33,
  },
  {
    credits: 240,
    originalPrice: 840,
    price: 519.99,
    pricePerCredit: 2.17,
    popular: true,
  },
];

const features = [
  'Reseller Paneel',
  '+65.000 Kanalen met EPG',
  '+140.000 VOD',
  'Alle Kanalen en Videobibliotheek',
  'Antivries Technologie',
  '99.9% Server Uptime',
  'Onbeperkte Proefabonnementen Aanmaken',
  'Bouquets Beheer',
  'Credits en paneel verlopen nooit',
];

export const ResellerPacks: React.FC = () => {
  const whatsappNumber = '447414662070';

  const handleSubscribe = (credits: number) => {
    const message = `Hallo, ik wil graag het ${credits} CREDITS reseller pakket bestellen.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
            Start Vandaag Uw Eigen Bedrijf
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Word een IPTV reseller met onze complete reseller pakketten
          </p>
          <div className="inline-block mt-6 px-6 py-3 bg-blue-50 rounded-full">
            <p className="text-lg font-semibold text-blue-600">
              1 CREDIT = 1 MAAND
            </p>
          </div>
        </div>

        {/* Reseller Packs */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {resellerPacks.map((pack) => (
            <div
              key={pack.credits}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                pack.popular
                  ? 'bg-gradient-to-br from-black to-gray-800 text-white shadow-2xl'
                  : 'bg-white border-2 border-gray-200 shadow-lg'
              }`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    BESTE WAARDE
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-3xl font-black mb-4">{pack.credits} CREDITS</h3>
                <div className="mb-2">
                  <span className={`text-2xl line-through ${pack.popular ? 'text-gray-400' : 'text-gray-400'}`}>
                    €{pack.originalPrice}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-5xl font-black">€{pack.price}</span>
                </div>
                <div className={`text-sm ${pack.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  €{pack.pricePerCredit.toFixed(2)}/credit
                </div>
              </div>

              <button
                onClick={() => handleSubscribe(pack.credits)}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all mb-6 ${
                  pack.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Abonneer Nu
              </button>

              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                        pack.popular ? 'text-green-400' : 'text-green-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className={`text-sm ${pack.popular ? 'text-gray-200' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black mb-6">Waarom Reseller Worden?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hoge Winstmarges</h3>
              <p className="text-gray-600">Stel uw eigen prijzen in en maximaliseer uw inkomsten</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center transform -rotate-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Volledige Controle</h3>
              <p className="text-gray-600">Beheer alles vanuit uw reseller paneel</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center transform rotate-2 shadow-lg" style={{ background: 'linear-gradient(135deg, #21468B, #AE1C28)' }}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Levenslange Toegang</h3>
              <p className="text-gray-600">Credits en paneel verlopen nooit</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Vragen over onze reseller pakketten?
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Neem Contact Op via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
