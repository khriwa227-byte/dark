
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

export const Pricing: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(3);
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

  const currentPeriod = PERIOD_PLANS.find(p => p.months === selectedPeriod) || PERIOD_PLANS[0];

  const getDevicePrice = (tier: typeof currentPeriod.tiers[0]) => {
    const devicePricing = tier.devicePricing.find(dp => dp.devices === selectedDevices);
    return devicePricing || tier.devicePricing[0];
  };

  const getWhatsAppUrl = (tier: typeof currentPeriod.tiers[0]) => {
    const pricing = getDevicePrice(tier);
    const deviceText = selectedDevices === 1 ? '1 apparaat' : `${selectedDevices} apparaten`;
    const message = `Hallo, ik wil graag het ${tier.tier}-pakket van IPTVKopen aanschaffen voor ${currentPeriod.months} maanden voor ${deviceText} (${pricing.price}).`;
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-xl shadow-purple-500/40 scale-105 ring-2 ring-purple-400/50'
                      : isActive
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : is12
                      ? 'bg-purple-500/10 text-purple-700 font-black ring-2 ring-purple-500/30 hover:bg-purple-500/20'
                      : 'text-black/70 hover:text-black hover:bg-white/50'
                  }`}
                >
                  {period.label}
                  {is12 && (
                    <>
                      <span className={`absolute -top-2.5 -right-2 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg ${
                        isActive ? 'bg-yellow-400 text-black animate-pulse' : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      }`}>
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

        {/* Pricing Cards - Basis & Premium */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentPeriod.tiers.map((tier, idx) => {
            const currentPricing = getDevicePrice(tier);
            const isPremium = tier.tier === "Premium";
            const is12 = selectedPeriod === 12;
            return (
              <div key={tier.tier} className={`rounded-[48px] overflow-hidden relative flex flex-col group hover:scale-[1.02] transition-all duration-500 ${
                is12 && isPremium
                  ? 'ring-4 ring-yellow-500/60 bg-gradient-to-br from-purple-900 via-black to-pink-900 shadow-[0_0_60px_rgba(168,85,247,0.4)]'
                  : is12 && !isPremium
                  ? 'ring-2 ring-blue-400/40 bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm shadow-lg'
                  : isPremium
                  ? 'ring-4 ring-purple-500/50 bg-gradient-to-br from-gray-900 via-black to-purple-950 shadow-[0_0_40px_rgba(168,85,247,0.3)]'
                  : 'ring-2 ring-blue-400/30 bg-gradient-to-br from-blue-50 to-cyan-50 backdrop-blur-sm shadow-lg'
              }`}>
                {is12 && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-b-2xl text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-orange-500/30 z-10">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Beste Deal
                  </div>
                )}
                {isPremium ? (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg ${
                    is12 ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white shadow-pink-500/40' : 'bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-purple-500/40'
                  }`}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Premium VIP
                    <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                ) : (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg ${
                    is12 ? 'bg-purple-600 text-white shadow-purple-500/30' : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/30'
                  }`}>
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
                    className={`w-full py-6 text-xl font-black rounded-3xl transition-all block text-center ${
                      is12 && isPremium
                        ? 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-black hover:from-yellow-500 hover:to-amber-600 shadow-[0_0_30px_rgba(234,179,8,0.5)]'
                        : isPremium
                        ? 'bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-black hover:from-yellow-500 hover:to-amber-600 shadow-[0_0_25px_rgba(234,179,8,0.4)]'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/30'
                    } active:scale-95`}
                  >
                    {isPremium ? 'Word VIP Nu' : is12 ? 'Kies Beste Deal' : 'Abonneer nu'}
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
