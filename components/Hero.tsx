
import React, { useEffect, useState } from 'react';

/* ─── live match data ─────────────────────────────────────────────────────── */

interface FeaturedMatch {
  home: string;
  away: string;
  homeLogo?: string;
  awayLogo?: string;
  homeScore: number | null;
  awayScore: number | null;
  competition: string;
  status: 'live' | 'finished' | 'upcoming';
  clock?: string;
}

const HERO_LEAGUES = [
  { url: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions_league/scoreboard', label: 'Champions League' },
  { url: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard',                label: 'Eredivisie' },
  { url: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard',                label: 'Premier League' },
  { url: 'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard',                label: 'La Liga' },
];

function parseMatch(event: any, label: string): FeaturedMatch | null {
  try {
    const comp = event.competitions?.[0];
    if (!comp) return null;
    const state: string = event.status?.type?.state ?? 'pre';
    const status = state === 'in' ? 'live' : state === 'post' ? 'finished' : 'upcoming';
    const home = comp.competitors?.find((c: any) => c.homeAway === 'home');
    const away = comp.competitors?.find((c: any) => c.homeAway === 'away');
    if (!home || !away) return null;
    return {
      home: home.team?.shortDisplayName || home.team?.displayName || '?',
      away: away.team?.shortDisplayName || away.team?.displayName || '?',
      homeLogo: home.team?.logo,
      awayLogo: away.team?.logo,
      homeScore: status !== 'upcoming' ? parseInt(home.score ?? '0', 10) : null,
      awayScore: status !== 'upcoming' ? parseInt(away.score ?? '0', 10) : null,
      competition: label,
      status,
      clock: status === 'live' ? event.status?.displayClock : undefined,
    };
  } catch { return null; }
}

async function fetchFeaturedMatch(): Promise<FeaturedMatch | null> {
  const results = await Promise.allSettled(
    HERO_LEAGUES.map(l => fetch(l.url).then(r => r.json()).then(data => ({ data, label: l.label })))
  );
  const all: FeaturedMatch[] = [];
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    for (const event of r.value.data.events ?? []) {
      const m = parseMatch(event, r.value.label);
      if (m) all.push(m);
    }
  }
  return (
    all.find(m => m.status === 'live') ||
    all.filter(m => m.status === 'finished').pop() ||
    null
  );
}

const FALLBACK: FeaturedMatch = {
  home: 'Ajax', away: 'PSG',
  homeScore: 2, awayScore: 1,
  competition: 'Champions League',
  status: 'finished',
};

const TrustBadge: React.FC<{ icon: React.ReactNode; children: React.ReactNode; delay: string }> = ({ icon, children, delay }) => (
  <div
    className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-md rounded-full shadow-[0_4px_12px_rgba(33,70,139,0.15)] border hover:scale-105 hover:shadow-[0_8px_24px_rgba(33,70,139,0.2)] transition-all duration-300 animate-[popIn_0.5s_ease-out_both]"
    style={{ animationDelay: delay, background: 'rgba(33,70,139,0.1)', borderColor: 'rgba(33,70,139,0.25)' }}
  >
    <span className="text-lg flex items-center" style={{ color: '#21468B' }}>{icon}</span>
    <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap leading-none" style={{ color: '#0D1B3E' }}>{children}</span>
  </div>
);

const channels = [
  { name: 'NPO 1', color: '#E30613' },
  { name: 'RTL 4', color: '#FF6B00' },
  { name: 'SBS 6', color: '#00A0DE' },
  { name: 'Veronica', color: '#7B2D8B' },
  { name: 'NET5', color: '#D4007A' },
  { name: 'Ziggo', color: '#FF5500' },
  { name: 'NPO 3', color: '#009FE3' },
  { name: 'RTL 5', color: '#E8002D' },
  { name: 'Disney+', color: '#003087' },
];

const TVMockup: React.FC<{ match: FeaturedMatch }> = ({ match }) => (
  <div className="relative w-full max-w-[580px]">
    {/* Glow */}
    <div
      className="absolute inset-0 blur-[80px] opacity-30 rounded-3xl scale-95 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #21468B 40%, #AE1C28)' }}
    />

    {/* Monitor frame */}
    <div
      className="relative rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(13,27,62,0.45)] border-2"
      style={{ background: '#0D1B3E', borderColor: 'rgba(255,255,255,0.12)' }}
    >
      {/* Bezel top bar */}
      <div className="flex items-center gap-1.5 px-5 pt-4 pb-3" style={{ background: '#06091a' }}>
        <div className="w-3 h-3 rounded-full" style={{ background: '#AE1C28' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#FF9500' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#21468B' }} />
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] font-mono font-bold" style={{ color: 'rgba(255,255,255,0.45)' }}>HD LIVE</span>
        </div>
      </div>

      {/* Screen content */}
      <div className="mx-4 mb-4 rounded-2xl overflow-hidden" style={{ background: '#111827' }}>
        {/* Featured live channel */}
        <div
          className="relative h-52 flex flex-col items-center justify-center gap-3"
          style={{ background: 'linear-gradient(135deg, #003087 0%, #06091a 100%)' }}
        >
          {/* scanlines overlay */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)' }}
          />
          {/* Score board */}
          <div className="z-10 flex flex-col items-center gap-2 px-4 w-full">
            <span className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full truncate max-w-full" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}>
              {match.competition}{match.clock ? ` · ${match.clock}'` : ''}
            </span>
            <div className="flex items-center gap-4 mt-1 w-full justify-center">
              <div className="flex flex-col items-center gap-1 min-w-0">
                {match.homeLogo
                  ? <img src={match.homeLogo} alt={match.home} className="w-12 h-12 object-contain drop-shadow-md" />
                  : <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-[10px]" style={{ background: 'rgba(255,255,255,0.15)' }}>{match.home.slice(0,3).toUpperCase()}</div>
                }
                <span className="text-[11px] text-white/60 font-semibold truncate max-w-[64px] text-center">{match.home}</span>
              </div>
              <div className="text-4xl font-black text-white tabular-nums tracking-tighter shrink-0">
                {match.homeScore !== null ? `${match.homeScore} · ${match.awayScore}` : 'vs'}
              </div>
              <div className="flex flex-col items-center gap-1 min-w-0">
                {match.awayLogo
                  ? <img src={match.awayLogo} alt={match.away} className="w-12 h-12 object-contain drop-shadow-md" />
                  : <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-[10px]" style={{ background: 'rgba(255,255,255,0.15)' }}>{match.away.slice(0,3).toUpperCase()}</div>
                }
                <span className="text-[11px] text-white/60 font-semibold truncate max-w-[64px] text-center">{match.away}</span>
              </div>
            </div>
          </div>
          {/* Status badge */}
          <div
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
            style={{ background: match.status === 'live' ? '#AE1C28' : 'rgba(255,255,255,0.12)' }}
          >
            {match.status === 'live' && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            <span className="text-[11px] font-black text-white uppercase tracking-wider">
              {match.status === 'live' ? 'LIVE' : match.status === 'finished' ? 'FT' : 'Binnenkort'}
            </span>
          </div>
        </div>

        {/* Channel grid */}
        <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
          {channels.map((ch, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-1.5 py-3.5"
              style={{ background: '#111827' }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black"
                style={{ background: ch.color, fontSize: '9px' }}
              >
                {ch.name.slice(0, 3).toUpperCase()}
              </div>
              <span className="text-[9px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>{ch.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Monitor stand */}
    <div className="flex justify-center">
      <div className="w-24 h-2.5 rounded-b-lg" style={{ background: '#06091a' }} />
    </div>

    {/* Floating badge — top right */}
    <div
      className="absolute -top-6 -right-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl border animate-[popIn_0.5s_ease-out_0.9s_both]"
      style={{ background: 'white', borderColor: 'rgba(33,70,139,0.1)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a)' }}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </div>
      <div>
        <div className="text-base font-black leading-none" style={{ color: '#0D1B3E' }}>65.000+</div>
        <div className="text-[11px] mt-0.5 font-semibold" style={{ color: 'rgba(13,27,62,0.5)' }}>Kanalen</div>
      </div>
    </div>

    {/* Floating badge — bottom left */}
    <div
      className="absolute -bottom-6 -left-6 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl border animate-[popIn_0.5s_ease-out_1.1s_both]"
      style={{ background: 'white', borderColor: 'rgba(174,28,40,0.1)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: 'linear-gradient(135deg, #AE1C28, #8B0F1E)' }}
      >⚡</div>
      <div>
        <div className="text-base font-black leading-none" style={{ color: '#0D1B3E' }}>4K Ultra HD</div>
        <div className="text-[11px] mt-0.5 font-semibold" style={{ color: 'rgba(13,27,62,0.5)' }}>Geen buffering</div>
      </div>
    </div>

    {/* Floating badge — mid left */}
    <div
      className="absolute top-1/2 -translate-y-1/2 -left-8 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-2xl border animate-[popIn_0.5s_ease-out_1.3s_both]"
      style={{ background: 'white', borderColor: 'rgba(33,70,139,0.1)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #21468B, #AE1C28)' }}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
        </svg>
      </div>
      <div>
        <div className="text-base font-black leading-none" style={{ color: '#0D1B3E' }}>70+ Landen</div>
        <div className="text-[11px] mt-0.5 font-semibold" style={{ color: 'rgba(13,27,62,0.5)' }}>Wereldwijd</div>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [match, setMatch] = useState<FeaturedMatch>(FALLBACK);

  useEffect(() => {
    fetchFeaturedMatch().then(m => { if (m) setMatch(m); });
    const id = setInterval(() => {
      fetchFeaturedMatch().then(m => { if (m) setMatch(m); });
    }, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-32 lg:pt-40 pb-6 overflow-hidden">

      {/* Desktop background depth */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-[55%] h-full opacity-[0.04]" style={{ background: 'radial-gradient(ellipse at 80% 40%, #21468B 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] opacity-[0.03]" style={{ background: 'radial-gradient(ellipse at 20% 80%, #AE1C28 0%, transparent 70%)' }} />
        {/* subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: 'radial-gradient(circle, #21468B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 items-center">

        {/* Left — copy */}
        <div className="flex flex-col items-center sm:items-start gap-8 lg:gap-10 w-[88%] sm:w-full mx-auto sm:mx-0">

          {/* Promo pill */}
          <div className="flex justify-center sm:justify-start w-full animate-[popIn_0.6s_ease-out_both]">
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 pl-2.5 pr-5 py-2 rounded-full backdrop-blur-md border hover:brightness-110 hover:scale-[1.03] transition-all duration-300 shadow-[0_4px_16px_rgba(33,70,139,0.2)]"
              style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a, #21468B)', borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #AE1C28, #c0392b)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              <span className="text-sm sm:text-base font-bold text-white">Bestel nu en ontvang</span>
              <span className="text-sm sm:text-base font-black uppercase tracking-wide text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.5)]">3 MAANDEN GRATIS</span>
            </a>
          </div>

          {/* Heading */}
          {/* Mobile heading — fixed 3 lines */}
          <h1
            className="sm:hidden font-extrabold leading-[1.08] tracking-tighter text-center w-full whitespace-nowrap"
            style={{ color: '#0D1B3E', fontSize: 'min(11vw, 2.8rem)' }}
          >
            IPTVNederland<br />
            Van Nederland,<br />
            <span className="text-italics">voor Nederland</span>
          </h1>

          {/* Desktop heading */}
          <h1
            className="hidden sm:block font-extrabold leading-[1.03] tracking-tighter sm:text-left w-full"
            style={{ color: '#0D1B3E', fontSize: 'clamp(3.5rem, 6vw, 6.5rem)' }}
          >
            IPTVNederland<br />
            Van Nederland,<br />
            <span className="text-italics">voor Nederland</span>
          </h1>

          {/* Sub-copy */}
          <p
            className="text-base lg:text-xl font-medium leading-relaxed text-center sm:text-left max-w-xl"
            style={{ color: 'rgba(13,27,62,0.65)' }}
          >
            Premium IPTV met 65.000+ kanalen uit 70+ landen. TV kijken zoals het hoort — scherpste beeld, geen gedoe. Pauzeer of annuleer op elk moment.
          </p>

          {/* Stats row — desktop only */}
          <div className="hidden lg:flex items-stretch gap-0 divide-x rounded-2xl overflow-hidden border w-auto" style={{ borderColor: 'rgba(33,70,139,0.12)', divideColor: 'rgba(33,70,139,0.12)' }}>
            {[
              { value: '65.000+', label: 'Kanalen' },
              { value: '175.000+', label: 'Films & Series' },
              { value: '70+', label: 'Landen' },
              { value: '4K UHD', label: 'Kwaliteit' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 px-6 py-4" style={{ background: 'rgba(33,70,139,0.04)', borderColor: 'rgba(33,70,139,0.1)' }}>
                <span className="text-2xl font-black leading-none tabular-nums" style={{ color: '#21468B' }}>{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(13,27,62,0.4)' }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 w-full sm:flex-row sm:w-auto sm:justify-start">
            <a
              href="#pricing"
              className="w-full sm:w-auto px-10 py-4 text-white text-base font-black rounded-full hover:scale-[1.02] hover:brightness-110 transition-all shadow-[0_8px_32px_rgba(33,70,139,0.35)] text-center"
              style={{ background: 'linear-gradient(135deg, #21468B, #1a3a7a)' }}
            >
              Bekijk prijzen
            </a>
            <a
              href="#pricing"
              className="btn-claim w-full sm:w-auto px-8 py-4 text-white text-base font-black rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <span className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/20 shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>
              </span>
              Claim mijn 3 maanden bonus
              <svg className="w-5 h-5 animate-[bounceX_1s_ease-in-out_infinite]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 w-full">
            <TrustBadge delay="0.3s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}>Instant Activering</TrustBadge>
            <TrustBadge delay="0.5s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0"/></svg>}>Geen Buffering</TrustBadge>
            <TrustBadge delay="0.7s" icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}>15 Dagen Garantie</TrustBadge>
          </div>

        </div>

        {/* Right — TV mockup (desktop only) */}
        <div className="hidden lg:flex justify-end items-center py-16 pr-8">
          <TVMockup match={match} />
        </div>

      </div>

      {/* Marquee bar */}
      <div className="mt-20 lg:mt-28 py-10 lg:py-12" style={{ backgroundColor: '#0D1B3E' }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-2xl lg:text-3xl font-black uppercase tracking-widest px-8 cursor-default" style={{ color: 'rgba(255,255,255,0.85)' }}>{brand}</span>
            ))}
          </div>
          <div className="marquee-content">
            {['Eredivisie', 'Champions League', 'Formule 1', 'NPO', 'RTL', 'SBS', 'Netflix content'].map((brand, i) => (
              <span key={i} className="text-2xl lg:text-3xl font-black uppercase tracking-widest px-8 cursor-default" style={{ color: 'rgba(255,255,255,0.85)' }}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
