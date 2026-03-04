
import React, { useState, useEffect } from 'react';
import { PERIOD_PLANS } from '../constants';

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

const DEVICES = [
  {
    label: 'Smart TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    label: 'Fire Stick',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="9" width="18" height="8" rx="3"/>
        <circle cx="12" cy="4" r="2"/>
        <line x1="12" y1="6" x2="12" y2="9"/>
      </svg>
    ),
  },
  {
    label: 'iPhone',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <line x1="12" y1="18" x2="12" y2="18.01"/>
      </svg>
    ),
  },
  {
    label: 'Android',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10a8 8 0 0116 0v7a1 1 0 01-1 1H5a1 1 0 01-1-1v-7z"/>
        <line x1="8" y1="2" x2="5" y2="6"/>
        <line x1="16" y1="2" x2="19" y2="6"/>
        <circle cx="9" cy="12" r="0.5" fill="currentColor"/>
        <circle cx="15" cy="12" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'Apple TV',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="12" rx="3"/>
        <line x1="9" y1="20" x2="15" y2="20"/>
        <line x1="12" y1="17" x2="12" y2="20"/>
      </svg>
    ),
  },
  {
    label: 'MAG / Box',
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2"/>
        <circle cx="17" cy="12" r="1.5"/>
        <line x1="6" y1="12" x2="10" y2="12"/>
      </svg>
    ),
  },
];

export const Pricing: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(12);
  const [selectedDevices, setSelectedDevices] = useState(1);

  // Live visitor count
  const [visitorCount, setVisitorCount] = useState(() => Math.floor(Math.random() * 40) + 40);
  useEffect(() => {
    const id = setInterval(() => {
      setVisitorCount(prev => {
        const delta = Math.random() < 0.5 ? 1 : -1;
        return Math.min(80, Math.max(40, prev + delta));
      });
    }, Math.floor(Math.random() * 15_000) + 12_000);
    return () => clearInterval(id);
  }, []);
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

  const currentPeriod = PERIOD_PLANS.find(p => p.months === selectedPeriod) || PERIOD_PLANS[0];

  const getDevicePrice = (tier: typeof currentPeriod.tiers[0]) => {
    const devicePricing = tier.devicePricing.find(dp => dp.devices === selectedDevices);
    return devicePricing || tier.devicePricing[0];
  };

  const getWhatsAppUrl = (tier: typeof currentPeriod.tiers[0]) => {
    const pricing = getDevicePrice(tier);
    const deviceText = selectedDevices === 1 ? '1 apparaat' : `${selectedDevices} apparaten`;
    const periodText = currentPeriod.months === 12 ? '12+3 maanden (15 maanden totaal!)' : `${currentPeriod.months} maanden`;
    const message = `Hallo, ik wil graag het ${tier.tier}-pakket van IPTVNederland aanschaffen voor ${periodText} voor ${deviceText} (${pricing.price}).`;
    return `https://api.whatsapp.com/send/?phone=447449708976&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest">
              PRIJZEN
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-base font-black shadow-sm" style={{ background: 'rgba(33,70,139,0.08)', color: '#21468B', border: '1.5px solid rgba(33,70,139,0.15)' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#25D366' }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: '#25D366' }} />
              </span>
              <span><span className="text-2xl font-black" style={{ color: '#0D1B3E' }}>{visitorCount}</span> mensen bekijken nu dit aanbod</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter" style={{ color: '#0D1B3E' }}>
            Eén abonnement, <span className="text-italics">eindeloze</span> mogelijkheden
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="glass-card rounded-3xl p-8 text-center shadow-2xl border-2" style={{ borderColor: '#21468B' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-black uppercase tracking-widest" style={{ color: '#0D1B3E' }}>
                Beperkte aanbieding eindigt om middernacht
              </p>
            </div>
            <div className="flex justify-center gap-4 lg:gap-8">
              <div className="flex flex-col items-center">
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl" style={{ backgroundColor: '#21468B' }}>
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: '#0D1B3E' }}>Uren</span>
              </div>
              <div className="flex items-center pb-8">
                <span className="text-3xl lg:text-4xl font-black" style={{ color: '#0D1B3E' }}>:</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl" style={{ backgroundColor: '#21468B' }}>
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: '#0D1B3E' }}>Minuten</span>
              </div>
              <div className="flex items-center pb-8">
                <span className="text-3xl lg:text-4xl font-black" style={{ color: '#0D1B3E' }}>:</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="backdrop-blur-sm rounded-2xl px-6 py-4 min-w-[100px] shadow-xl" style={{ backgroundColor: '#21468B' }}>
                  <span className="text-4xl lg:text-5xl font-black text-white tabular-nums">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: '#0D1B3E' }}>Seconden</span>
              </div>
            </div>
          </div>
        </div>

        {/* Period Toggle */}
        <div className="mb-8">
          <div className="glass-card rounded-3xl p-2 grid grid-cols-3 gap-2 max-w-lg mx-auto">
            {PERIOD_PLANS.map((period) => {
              const is12 = period.months === 12;
              const isActive = selectedPeriod === period.months;
              return (
                <button
                  key={period.months}
                  onClick={() => setSelectedPeriod(period.months)}
                  className={`relative px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    isActive && is12
                      ? 'text-white shadow-xl scale-105'
                      : isActive
                      ? 'text-white shadow-lg'
                      : is12
                      ? 'font-black'
                      : 'hover:bg-white/50'
                  }`}
                  style={
                    isActive && is12
                      ? { background: 'linear-gradient(135deg, #AE1C28, #c0392b)', boxShadow: '0 8px 24px rgba(174,28,40,0.35)', outline: '2px solid rgba(174,28,40,0.4)' }
                      : isActive
                      ? { backgroundColor: '#21468B', boxShadow: '0 4px 16px rgba(33,70,139,0.3)' }
                      : is12
                      ? { backgroundColor: 'rgba(33,70,139,0.08)', color: '#21468B', outline: '2px solid rgba(33,70,139,0.25)' }
                      : { color: 'rgba(13,27,62,0.7)' }
                  }
                >
                  {period.label}
                  {is12 && (
                    <>
                      <span className={`absolute -top-2.5 -right-2 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg ${
                        isActive ? 'bg-yellow-400 text-black animate-pulse' : 'text-white'
                      }`} style={!isActive ? { backgroundColor: '#AE1C28' } : {}}>
                        -50%
                      </span>
                      <span className="block text-[10px] mt-1 font-black uppercase tracking-wider opacity-80">
                        Beste Deal
                      </span>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Device Toggle */}
        <div className="mb-16">
          <div className="glass-card rounded-3xl p-3 grid grid-cols-2 lg:grid-cols-4 gap-2">
            {deviceOptions.map((devices) => (
              <button
                key={devices}
                onClick={() => setSelectedDevices(devices)}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
                style={selectedDevices === devices
                  ? { backgroundColor: '#21468B', color: '#ffffff', boxShadow: '0 4px 16px rgba(33,70,139,0.3)' }
                  : { color: 'rgba(13,27,62,0.7)' }
                }
              >
                <DeviceIcon />
                {devices} {devices === 1 ? 'Apparaat' : 'Apparaten'}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards - Basis & Premium */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentPeriod.tiers.map((tier, idx) => {
            const currentPricing = getDevicePrice(tier);
            const isPremium = tier.tier === "Premium";
            const is12 = selectedPeriod === 12;
            return (
              <div key={tier.tier} className="rounded-[48px] overflow-hidden relative flex flex-col group hover:scale-[1.02] transition-all duration-500"
                style={
                  is12 && isPremium
                    ? { background: 'linear-gradient(135deg, #0D1B3E, #21468B, #0D1B3E)', boxShadow: '0 0 60px rgba(33,70,139,0.35)', outline: '4px solid rgba(255,215,0,0.5)' }
                    : is12 && !isPremium
                    ? { background: 'linear-gradient(135deg, #eef2f9, #f5f8ff)', boxShadow: '0 4px 24px rgba(33,70,139,0.12)', outline: '2px solid rgba(33,70,139,0.25)' }
                    : isPremium
                    ? { background: 'linear-gradient(135deg, #0D1B3E, #21468B, #0D1B3E)', boxShadow: '0 0 40px rgba(33,70,139,0.3)', outline: '4px solid rgba(33,70,139,0.4)' }
                    : { background: 'linear-gradient(135deg, #eef2f9, #f5f8ff)', boxShadow: '0 4px 24px rgba(33,70,139,0.1)', outline: '2px solid rgba(33,70,139,0.2)' }
                }>
                {is12 && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-b-2xl text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-orange-500/30 z-10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Beste Deal
                  </div>
                )}
                {isPremium ? (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg text-white`}
                    style={{ background: 'linear-gradient(135deg, #AE1C28, #c0392b)', boxShadow: '0 4px 16px rgba(174,28,40,0.35)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Premium VIP
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg text-white`}
                    style={{ backgroundColor: '#21468B', boxShadow: '0 4px 16px rgba(33,70,139,0.3)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Basis
                  </div>
                )}
                {tier.savings && (
                  <div className={`absolute -right-1 top-[13%] px-4 py-1.5 rounded-l-full text-xs font-black uppercase tracking-widest shadow-xl ${
                    is12 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' : 'bg-white text-black'
                  }`}>
                    {tier.savings}
                  </div>
                )}
                <div className={`bg-transparent ${is12 ? 'pt-16 px-10 pb-10' : 'p-10'} flex-1 flex flex-col`}>
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <p className={`text-xs font-black uppercase tracking-widest ${
                        isPremium ? 'text-yellow-400' : 'text-blue-500'
                      }`}>
                        {isPremium ? 'Premium VIP' : tier.tier}
                      </p>
                    </div>
                    <h3 className={`text-2xl lg:text-3xl font-black tracking-tighter ${
                      isPremium ? 'text-white' : 'text-blue-900'
                    }`}>{currentPeriod.description}</h3>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-6xl font-black tracking-tighter leading-none transition-all duration-300 ${
                        isPremium ? 'bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent' : 'text-blue-900'
                      }`}>{currentPricing.price}</span>
                    </div>
                    <div className={`text-lg mt-2 font-bold ${
                      isPremium ? 'text-yellow-300/60' : 'text-blue-400'
                    }`}>
                      {currentPricing.monthlyPrice} / mnd
                    </div>
                    <div className={`text-sm mt-2 font-medium flex items-center gap-2 ${
                      isPremium ? 'text-white/40' : 'text-blue-400'
                    }`}>
                      <DeviceIcon />
                      {selectedDevices} {selectedDevices === 1 ? 'apparaat' : 'apparaten'} inbegrepen
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <div className={`text-xs font-black uppercase tracking-widest mb-6 ${
                      isPremium ? 'text-yellow-300/50' : 'text-blue-400'
                    }`}>Wat is inbegrepen</div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className={`flex items-center gap-3 text-base font-bold ${
                        isPremium ? 'text-white' : 'text-blue-900'
                      }`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isPremium ? 'bg-gradient-to-r from-yellow-400 to-amber-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppUrl(tier)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-6 text-xl font-black rounded-3xl transition-all block text-center active:scale-95"
                    style={
                      isPremium
                        ? { background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #fbbf24)', color: '#000', boxShadow: '0 0 30px rgba(234,179,8,0.45)' }
                        : { background: 'linear-gradient(135deg, #21468B, #1a3a7a)', color: '#fff', boxShadow: '0 4px 20px rgba(33,70,139,0.35)' }
                    }
                  >
                    {isPremium ? 'Word VIP Nu' : is12 ? 'Kies Beste Deal' : 'Abonneer nu'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Device logos strip */}
        <div className="mt-14 text-center">
          <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: 'rgba(13,27,62,0.35)' }}>Werkt op al jouw apparaten</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {DEVICES.map(d => (
              <div key={d.label} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-md"
                  style={{ background: 'rgba(33,70,139,0.07)', color: '#21468B' }}>
                  {d.icon}
                </div>
                <span className="text-[11px] font-bold" style={{ color: 'rgba(13,27,62,0.45)' }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
            <p className="text-xl font-black" style={{ color: '#0D1B3E' }}>Pauzeer of annuleer op elk moment</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(13,27,62,0.5)' }}>
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
