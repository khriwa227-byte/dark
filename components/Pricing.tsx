
import React, { useState, useEffect } from 'react';
import { PRICING_PLANS } from '../constants';

const SmallPauseIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
    <line x1="35" y1="25" x2="35" y2="75" />
    <line x1="65" y1="25" x2="65" y2="75" />
  </svg>
);

const SmallCheckIcon = () => (
  <svg viewBox="0 0 100 100" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 50 L45 75 L80 25" />
  </svg>
);

const DeviceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

export const Pricing: React.FC = () => {
  // v2: WhatsApp ordering links on package buttons
  const [selectedDevices, setSelectedDevices] = useState(1);
  const deviceOptions = [1, 2, 3, 4];

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);

      const difference = midnight.getTime() - now.getTime();

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDevicePrice = (plan: typeof PRICING_PLANS[0]) => {
    const devicePricing = plan.devicePricing.find(dp => dp.devices === selectedDevices);
    return devicePricing || plan.devicePricing[0];
  };

  const getWhatsAppUrl = (plan: typeof PRICING_PLANS[0]) => {
    const pricing = getDevicePrice(plan);
    const duration = plan.description.replace(' TOEGANG', '').toLowerCase();
    const deviceText = selectedDevices === 1 ? '1 apparaat' : `${selectedDevices} apparaten`;
    const message = `Hallo, ik wil graag het ${plan.name}-pakket van PrimeKopenTV aanschaffen voor ${duration} voor ${deviceText} (${pricing.price}).`;
    return `https://api.whatsapp.com/send/?phone=447449708976&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
          <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
            PRIJZEN
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
            Eén abonnement, <span className="text-italics">eindeloze</span> mogelijkheden
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-card rounded-3xl p-8 text-center shadow-2xl border-2 border-purple-500">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-black uppercase tracking-widest text-white">
                Beperkte aanbieding eindigt om middernacht
              </p>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-black backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl">
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white mt-3">Uren</span>
              </div>
              <div className="flex items-center pb-8">
                <span className="text-3xl lg:text-4xl font-black text-white">:</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl">
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white mt-3">Minuten</span>
              </div>
              <div className="flex items-center pb-8">
                <span className="text-3xl lg:text-4xl font-black text-white">:</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-black backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl">
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-white mt-3">Seconden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Device Toggle */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-3 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {deviceOptions.map((devices) => (
              <button
                key={devices}
                onClick={() => setSelectedDevices(devices)}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedDevices === devices
                    ? 'bg-black text-white shadow-lg'
                    : 'text-black/70 hover:text-black hover:bg-white/50'
                }`}
              >
                <DeviceIcon />
                {devices} {devices === 1 ? 'Apparaat' : 'Apparaten'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, idx) => {
            const currentPricing = getDevicePrice(plan);
            return (
              <div key={idx} className={`glass-card rounded-[48px] overflow-hidden shadow-2xl relative flex flex-col group hover:scale-[1.02] transition-all duration-500 border-none ${idx === 0 ? 'ring-4 ring-purple-500/50' : ''}`}>
                {idx === 0 && (
                  <div className="absolute top-6 right-8 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-purple-500/30">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    Meest Gekozen
                  </div>
                )}
                {plan.savings && (
                  <div className="absolute -right-1 top-[13%] bg-white text-black px-4 py-1.5 rounded-l-full text-xs font-black uppercase tracking-widest shadow-xl">
                    {plan.savings}
                  </div>
                )}
                <div className={`${idx === 0 ? 'bg-black/90' : 'bg-transparent'} p-10 flex-1 flex flex-col`}>
                  <div className="mb-8">
                    <p className={`text-xs font-black uppercase tracking-widest mb-2 ${idx === 0 ? 'text-white/60' : 'text-black/50'}`}>
                      {plan.name}
                    </p>
                    <h3 className={`text-2xl lg:text-3xl font-black tracking-tighter ${idx === 0 ? 'text-white' : 'text-black'}`}>{plan.description}</h3>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-6xl font-black tracking-tighter leading-none transition-all duration-300 ${idx === 0 ? 'text-white' : 'text-black'}`}>{currentPricing.price}</span>
                    </div>
                    <div className={`text-lg mt-2 font-bold ${idx === 0 ? 'text-white/60' : 'text-black/50'}`}>
                      {currentPricing.monthlyPrice} / mnd
                    </div>
                    <div className={`text-sm mt-2 font-medium flex items-center gap-2 ${idx === 0 ? 'text-white/40' : 'text-black/40'}`}>
                      <DeviceIcon />
                      {selectedDevices} {selectedDevices === 1 ? 'apparaat' : 'apparaten'} inbegrepen
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <div className={`text-xs font-black uppercase tracking-widest mb-6 ${idx === 0 ? 'text-white/40' : 'text-black/40'}`}>Wat is inbegrepen</div>
                    {plan.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-3 text-base font-bold ${idx === 0 ? 'text-white' : 'text-black'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${idx === 0 ? 'bg-purple-500' : 'bg-black'}`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-6 text-xl font-black rounded-3xl transition-all shadow-2xl block text-center ${idx === 0 ? 'bg-purple-500 text-white hover:bg-purple-600' : 'bg-black text-white hover:bg-gray-900'} active:scale-95`}
                  >
                    Abonneer nu
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center space-y-4">
            <p className="text-xl font-black text-white">Pauzeer of annuleer op elk moment</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm font-bold text-white/60 uppercase tracking-widest">
               <span className="flex items-center gap-2">
                 <SmallPauseIcon /> Pauzeer op elk moment
               </span>
               <span className="flex items-center gap-2">
                 <SmallCheckIcon /> Probeer het 15 dagen
               </span>
            </div>
        </div>
      </div>
    </section>
  );
};
