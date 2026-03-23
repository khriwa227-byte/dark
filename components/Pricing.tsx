
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

// Approximate original prices for anchoring (before discount)
const ORIGINAL_PRICES: Record<string, Record<number, Record<number, string>>> = {
  Premium: {
    3: { 1: '€54,99', 2: '€74,99', 3: '€119,99', 4: '€144,99' },
    6: { 1: '€69,99', 2: '€124,99', 3: '€154,99', 4: '€219,99' },
    12: { 1: '€157,99', 2: '€251,99', 3: '€359,99', 4: '€399,99' },
  },
};

const ComparisonTable: React.FC = () => {
  const rows = [
    { feature: 'Maandelijkse kosten', iptv: 'v.a. €5,83/mnd', ziggo: '~€60/mnd', streaming: '~€45/mnd' },
    { feature: 'Aantal kanalen', iptv: '80.000+', ziggo: '~100', streaming: 'Beperkt' },
    { feature: '4K kwaliteit', iptv: true, ziggo: false, streaming: 'Gedeeltelijk' },
    { feature: 'Sport live (alle)', iptv: true, ziggo: 'Extra kosten', streaming: false },
    { feature: 'Films & Series', iptv: '200.000+', ziggo: 'Beperkt', streaming: '~10.000' },
    { feature: 'Meerdere apparaten', iptv: 'Tot 4 apparaten', ziggo: 'Extra kosten', streaming: 'Beperkt' },
    { feature: 'Geen contract', iptv: true, ziggo: false, streaming: false },
    { feature: '15 dagen garantie', iptv: true, ziggo: false, streaming: false },
  ];

  const Check = () => <span style={{ color: '#3B82F6' }} className="font-black text-lg">✓</span>;
  const Cross = () => <span style={{ color: 'rgba(241,245,249,0.25)' }} className="font-black text-lg">✕</span>;

  const renderCell = (val: boolean | string) => {
    if (val === true) return <Check />;
    if (val === false) return <Cross />;
    return <span className="text-sm font-semibold" style={{ color: 'rgba(241,245,249,0.7)' }}>{val}</span>;
  };

  return (
    <div className="mt-24 reveal">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.2)' }}>
          Vergelijking
        </div>
        <h3 className="text-3xl lg:text-5xl font-black tracking-tighter text-white">
          IPTVDark vs. <span className="text-italics" style={{ color: 'rgba(241,245,249,0.4)' }}>de rest</span>
        </h3>
        <p className="mt-4 text-base font-medium" style={{ color: 'rgba(241,245,249,0.5)' }}>Bespaar tot €650/jaar ten opzichte van Ziggo</p>
      </div>

      <div className="overflow-x-auto rounded-3xl border" style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
        <table className="w-full min-w-[600px]">
          <thead>
            <tr style={{ background: 'rgba(59,130,246,0.08)' }}>
              <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(241,245,249,0.4)' }}>Functie</th>
              <th className="px-6 py-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-black uppercase tracking-wide" style={{ color: '#60A5FA' }}>IPTVDark</span>
                  <span className="text-xs font-semibold" style={{ color: 'rgba(241,245,249,0.4)' }}>v.a. €5,83/mnd</span>
                </div>
              </th>
              <th className="px-6 py-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold uppercase tracking-wide" style={{ color: 'rgba(241,245,249,0.5)' }}>Ziggo</span>
                  <span className="text-xs font-semibold" style={{ color: 'rgba(241,245,249,0.3)' }}>~€60/mnd</span>
                </div>
              </th>
              <th className="px-6 py-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold uppercase tracking-wide" style={{ color: 'rgba(241,245,249,0.5)' }}>Streaming</span>
                  <span className="text-xs font-semibold" style={{ color: 'rgba(241,245,249,0.3)' }}>~€45/mnd</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                style={{ background: i % 2 === 0 ? 'rgba(15,23,42,0.8)' : 'rgba(10,10,15,0.5)', borderTop: '1px solid rgba(59,130,246,0.07)' }}
              >
                <td className="px-6 py-4 text-sm font-semibold" style={{ color: 'rgba(241,245,249,0.7)' }}>{row.feature}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.iptv)}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.ziggo)}</td>
                <td className="px-6 py-4 text-center">{renderCell(row.streaming)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

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
      setTimeLeft({
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentPeriod = PERIOD_PLANS.find(p => p.months === selectedPeriod) || PERIOD_PLANS[0];

  const getDevicePrice = (tier: typeof currentPeriod.tiers[0]) => {
    return tier.devicePricing.find(dp => dp.devices === selectedDevices) || tier.devicePricing[0];
  };

  const getOriginalPrice = (tierName: string) => {
    const key = selectedPeriod === 12 ? 12 : selectedPeriod;
    return ORIGINAL_PRICES[tierName]?.[key]?.[selectedDevices];
  };

  const getWhatsAppUrl = (tier: typeof currentPeriod.tiers[0]) => {
    const pricing = getDevicePrice(tier);
    const deviceText = selectedDevices === 1 ? '1 apparaat' : `${selectedDevices} apparaten`;
    const periodText = currentPeriod.months === 12 ? '12+3 maanden (15 maanden totaal!)' : `${currentPeriod.months} maanden`;
    const message = `Hallo, ik wil graag het ${tier.tier}-pakket van IPTVDark aanschaffen voor ${periodText} voor ${deviceText} (${pricing.price}).`;
    return `https://api.whatsapp.com/send/?phone=447449708976&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  return (
    <section id="iptvdark" className="py-32 px-6" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-block px-4 py-1.5 glass-card rounded-full text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(241,245,249,0.7)' }}>
              PRIJZEN
            </div>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-base font-black" style={{ background: 'rgba(59,130,246,0.08)', color: '#60A5FA', border: '1.5px solid rgba(59,130,246,0.15)' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#3B82F6' }} />
                <span className="relative inline-flex rounded-full h-3 w-3" style={{ background: '#3B82F6' }} />
              </span>
              <span><span className="text-2xl font-black text-white">{visitorCount}</span> mensen bekijken nu dit aanbod</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white">
            Eén abonnement, <span className="text-italics" style={{ color: '#93C5FD' }}>eindeloze</span> mogelijkheden
          </h2>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="rounded-3xl p-8 text-center border" style={{ background: 'rgba(15,23,42,0.95)', borderColor: 'rgba(59,130,246,0.25)', boxShadow: '0 0 40px rgba(59,130,246,0.08)' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-black uppercase tracking-widest text-white">
                Beperkte aanbieding eindigt om middernacht
              </p>
            </div>
            <div className="flex justify-center items-start gap-3 lg:gap-6">
              {[
                { value: timeLeft.hours, label: 'Uren' },
                { value: timeLeft.minutes, label: 'Minuten' },
                { value: timeLeft.seconds, label: 'Seconden' },
              ].map((unit, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <div className="flex items-center pt-4">
                      <span className="text-3xl lg:text-4xl font-black" style={{ color: 'rgba(241,245,249,0.4)' }}>:</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <div className="rounded-2xl px-4 sm:px-6 py-4 w-20 sm:w-28 lg:w-32" style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 4px 20px rgba(59,130,246,0.3)' }}>
                      <span className="text-4xl sm:text-5xl font-black text-white tabular-nums block text-center">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest mt-3" style={{ color: 'rgba(241,245,249,0.4)' }}>{unit.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Period Toggle */}
        <div className="mb-8">
          <div className="rounded-3xl p-2 grid grid-cols-3 gap-2 max-w-lg mx-auto" style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(59,130,246,0.15)' }}>
            {PERIOD_PLANS.map((period) => {
              const is12 = period.months === 12;
              const isActive = selectedPeriod === period.months;
              return (
                <button
                  key={period.months}
                  onClick={() => setSelectedPeriod(period.months)}
                  className={`relative px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300`}
                  style={
                    isActive && is12
                      ? { background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff', boxShadow: '0 8px 24px rgba(124,58,237,0.35)' }
                      : isActive
                      ? { background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: '#fff', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }
                      : is12
                      ? { background: 'rgba(124,58,237,0.1)', color: '#A78BFA', border: '1px solid rgba(124,58,237,0.25)' }
                      : { color: 'rgba(241,245,249,0.5)' }
                  }
                >
                  {period.label}
                  {is12 && (
                    <>
                      <span className={`absolute -top-2.5 -right-2 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg ${
                        isActive ? 'text-white animate-pulse' : 'text-white'
                      }`} style={{ background: '#7C3AED' }}>
                        -50%
                      </span>
                      <span className="block text-[10px] mt-1 font-black uppercase tracking-wider opacity-70">
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
          <div className="rounded-3xl p-3 grid grid-cols-2 lg:grid-cols-4 gap-2" style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(59,130,246,0.15)' }}>
            {deviceOptions.map((devices) => (
              <button
                key={devices}
                onClick={() => setSelectedDevices(devices)}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
                style={selectedDevices === devices
                  ? { background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: '#fff', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }
                  : { color: 'rgba(241,245,249,0.45)' }
                }
              >
                <DeviceIcon />
                {devices} {devices === 1 ? 'Apparaat' : 'Apparaten'}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className={`grid gap-8 mx-auto ${currentPeriod.tiers.length === 1 ? 'max-w-xl' : 'lg:grid-cols-2 max-w-5xl'}`}>
          {[...currentPeriod.tiers].sort((a, b) => a.tier === "Premium" ? -1 : 1).map((tier) => {
            const currentPricing = getDevicePrice(tier);
            const originalPrice = getOriginalPrice(tier.tier);
            const isPremium = tier.tier === "Premium";
            const is12 = selectedPeriod === 12;
            return (
              <div
                key={tier.tier}
                className="rounded-[40px] overflow-hidden relative flex flex-col group hover:scale-[1.01] transition-all duration-500"
                style={
                  isPremium
                    ? { background: 'linear-gradient(160deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)', border: '1.5px solid rgba(124,58,237,0.4)', boxShadow: is12 ? '0 0 60px rgba(124,58,237,0.2), 0 0 120px rgba(59,130,246,0.1)' : '0 0 40px rgba(124,58,237,0.15)' }
                    : { background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(59,130,246,0.2)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }
                }
              >
                {is12 && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 px-6 py-2 rounded-b-2xl text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg z-10"
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', color: '#fff', boxShadow: '0 4px 20px rgba(124,58,237,0.4)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Beste Deal
                  </div>
                )}

                {isPremium ? (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg text-white`}
                    style={{ background: 'linear-gradient(135deg, #7C3AED, #4F46E5)', boxShadow: '0 4px 16px rgba(124,58,237,0.35)' }}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    Premium VIP
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#A78BFA' }}></div>
                  </div>
                ) : (
                  <div className={`absolute ${is12 ? 'top-14' : 'top-6'} left-8 px-5 py-1.5 rounded-full text-sm font-black uppercase tracking-widest flex items-center gap-2 shadow-lg text-white`}
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Basis
                  </div>
                )}

                {tier.savings && (
                  <div className={`absolute -right-1 top-[13%] px-4 py-1.5 rounded-l-full text-xs font-black uppercase tracking-widest shadow-xl text-white`}
                    style={{ background: isPremium ? 'linear-gradient(135deg, #7C3AED, #4F46E5)' : 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}>
                    {tier.savings}
                  </div>
                )}

                <div className={`bg-transparent ${is12 ? 'pt-16 px-10 pb-10' : 'p-10'} flex-1 flex flex-col`}>
                  <div className="mb-8">
                    <p className={`text-xs font-black uppercase tracking-widest mb-2 ${isPremium ? 'text-purple-400' : 'text-blue-400'}`}>
                      {isPremium ? 'Premium VIP' : tier.tier}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">{currentPeriod.description}</h3>
                  </div>

                  <div className="mb-10">
                    <div className="flex items-baseline gap-3">
                      <span className={`text-6xl font-black tracking-tighter leading-none transition-all duration-300 ${
                        isPremium ? 'bg-gradient-to-r from-purple-400 via-blue-300 to-purple-400 bg-clip-text text-transparent' : 'text-white'
                      }`}>{currentPricing.price}</span>
                      {originalPrice && (
                        <span className="text-xl font-bold line-through" style={{ color: 'rgba(241,245,249,0.3)' }}>{originalPrice}</span>
                      )}
                    </div>
                    <div className={`text-lg mt-2 font-bold ${isPremium ? 'text-purple-400/70' : 'text-blue-400/70'}`}>
                      {currentPricing.monthlyPrice} / mnd
                    </div>
                    <div className="text-sm mt-2 font-medium flex items-center gap-2" style={{ color: 'rgba(241,245,249,0.4)' }}>
                      <DeviceIcon />
                      {selectedDevices} {selectedDevices === 1 ? 'apparaat' : 'apparaten'} inbegrepen
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    <div className={`text-xs font-black uppercase tracking-widest mb-6 ${isPremium ? 'text-purple-400/50' : 'text-blue-400/50'}`}>
                      Wat is inbegrepen
                    </div>
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-base font-bold text-white">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isPremium ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                        }`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </div>
                        <span style={{ color: isPremium ? 'rgba(241,245,249,0.9)' : 'rgba(241,245,249,0.85)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppUrl(tier)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-6 text-xl font-black rounded-3xl transition-all block text-center active:scale-95 hover:brightness-110"
                    style={
                      isPremium
                        ? { background: 'linear-gradient(135deg, #7C3AED, #4F46E5, #7C3AED)', color: '#fff', boxShadow: '0 0 30px rgba(124,58,237,0.4)' }
                        : { background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)', color: '#fff', boxShadow: '0 4px 20px rgba(59,130,246,0.35)' }
                    }
                  >
                    {isPremium ? 'Word VIP Nu' : is12 ? 'Kies Beste Deal' : 'Abonneer nu'}
                  </a>

                  {/* Risk reversal */}
                  <p className="text-center text-xs font-semibold mt-3" style={{ color: 'rgba(241,245,249,0.35)' }}>
                    15 dagen geld-terug-garantie · Geen risico
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Device logos strip */}
        <div className="mt-14 text-center">
          <p className="text-xs font-black uppercase tracking-widest mb-6" style={{ color: 'rgba(241,245,249,0.25)' }}>Werkt op al jouw apparaten</p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {DEVICES.map(d => (
              <div key={d.label} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ background: 'rgba(59,130,246,0.08)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.15)' }}>
                  {d.icon}
                </div>
                <span className="text-[11px] font-bold" style={{ color: 'rgba(241,245,249,0.35)' }}>{d.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center space-y-4">
          <p className="text-xl font-black text-white">Pauzeer of annuleer op elk moment</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm font-bold uppercase tracking-widest" style={{ color: 'rgba(241,245,249,0.35)' }}>
            <span className="flex items-center gap-2">
              <SmallPauseIcon /> Pauzeer op elk moment
            </span>
            <span className="flex items-center gap-2">
              <SmallCheckIcon /> Probeer het 15 dagen
            </span>
          </div>
        </div>

        <ComparisonTable />
      </div>
    </section>
  );
};
