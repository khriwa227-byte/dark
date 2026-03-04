import React, { useEffect, useState, useCallback } from 'react';

/* ─── types ─────────────────────────────────────────────────────────────── */

interface SportEvent {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo?: string;
  awayLogo?: string;
  leagueLogo?: string;
  homeScore: number | null;
  awayScore: number | null;
  status: 'live' | 'upcoming';
  clock?: string;
  startTime: string;
  sport: string;
  channel: string;
  channelColor: string;
  gradient: string;
}

/* ─── league config ─────────────────────────────────────────────────────── */

// Build YYYYMMDD string for a date offset by `days` from today
function espnDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

// Fetch a range: today through next 7 days so we always have upcoming events
function rangeUrl(base: string) {
  return `${base}?dates=${espnDate(0)}-${espnDate(7)}`;
}

const LEAGUE_DEFS = [
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard',
    competition: 'Eredivisie', sport: 'voetbal',
    channel: 'ESPN', channelColor: '#E8002D',
    gradient: 'linear-gradient(135deg, #0c1f0c 0%, #1a4a1a 60%, #0c1f0c 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions_league/scoreboard',
    competition: 'Champions League', sport: 'voetbal',
    channel: 'Ziggo Sport', channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #003087 60%, #0a1628 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard',
    competition: 'Premier League', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #08031a 0%, #2d0075 60%, #08031a 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard',
    competition: 'La Liga', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #7a0000 60%, #1a0000 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard',
    competition: 'Bundesliga', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #3a3a3a 60%, #0a0a0a 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard',
    competition: 'Serie A', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #00061a 0%, #003380 60%, #00061a 100%)',
    isTeamSport: true,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/racing/f1/scoreboard',
    competition: 'Formule 1', sport: 'f1',
    channel: 'Ziggo Sport', channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #4a1800 60%, #1a0800 100%)',
    isTeamSport: false,
  },
  {
    base: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',
    competition: 'NBA', sport: 'basket',
    channel: 'NBA TV', channelColor: '#006BB6',
    gradient: 'linear-gradient(135deg, #00091a 0%, #002b5c 60%, #00091a 100%)',
    isTeamSport: true,
  },
];

const LEAGUES = LEAGUE_DEFS.map(d => ({ ...d, url: rangeUrl(d.base) }));

type League = typeof LEAGUES[0];


/* ─── normalization ─────────────────────────────────────────────────────── */

function normalizeEvent(event: any, league: League, leagueLogo?: string): SportEvent | null {
  try {
    const comp = event.competitions?.[0];
    if (!comp) return null;
    const state: string = event.status?.type?.state ?? 'pre';
    if (state === 'post') return null;
    const status = state === 'in' ? 'live' : 'upcoming';

    let homeTeam = '', awayTeam = '', homeScore: number | null = null, awayScore: number | null = null;

    if (league.isTeamSport) {
      const home = comp.competitors?.find((c: any) => c.homeAway === 'home');
      const away = comp.competitors?.find((c: any) => c.homeAway === 'away');
      homeTeam = home?.team?.shortDisplayName || home?.team?.displayName || '?';
      awayTeam = away?.team?.shortDisplayName || away?.team?.displayName || '?';
      if (status === 'live') {
        homeScore = parseInt(home?.score ?? '0', 10);
        awayScore = parseInt(away?.score ?? '0', 10);
      }
    } else {
      homeTeam = (event.shortName || event.name || 'Race').replace('Formula 1 ', '').replace(' Grand Prix', ' GP');
      awayTeam = event.status?.type?.shortDetail ?? '';
    }

    const home2 = comp.competitors?.find((c: any) => c.homeAway === 'home');
    const away2 = comp.competitors?.find((c: any) => c.homeAway === 'away');

    return {
      id: event.id,
      competition: league.competition,
      homeTeam, awayTeam, homeScore, awayScore, status,
      homeLogo: home2?.team?.logo,
      awayLogo: away2?.team?.logo,
      leagueLogo,
      clock: status === 'live' ? event.status?.displayClock : undefined,
      startTime: event.date,
      sport: league.sport,
      channel: league.channel,
      channelColor: league.channelColor,
      gradient: league.gradient,
    };
  } catch { return null; }
}

async function fetchFromESPN(): Promise<SportEvent[]> {
  const results = await Promise.allSettled(
    LEAGUES.map(league =>
      fetch(league.url).then(r => r.json()).then(data => ({ data, league }))
    )
  );
  const events: SportEvent[] = [];
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    const { data, league } = r.value;
    const leagueLogo: string | undefined = data.leagues?.[0]?.logos?.[0]?.href;
    for (const event of data.events ?? []) {
      const n = normalizeEvent(event, league, leagueLogo);
      if (n) events.push(n);
    }
  }
  return events;
}

async function loadEvents(): Promise<SportEvent[]> {
  // Try Vercel function first (production — aggregated + cached)
  try {
    const res = await fetch('/api/sport-events', { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.events)) return data.events;
    }
  } catch { /* fall through to direct */ }

  // Fall back to direct ESPN fetching (works in dev; ESPN is CORS-open)
  return fetchFromESPN();
}

function sortEvents(events: SportEvent[]) {
  return [...events].sort((a, b) => {
    if (a.status === 'live' && b.status !== 'live') return -1;
    if (b.status === 'live' && a.status !== 'live') return 1;
    return new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
  });
}

/* ─── helpers ───────────────────────────────────────────────────────────── */

const sportIcon: Record<string, string> = { voetbal: '⚽', f1: '🏎️', basket: '🏀', tennis: '🎾' };

const CHANNEL_LOGOS: Record<string, string> = {
  'ESPN':        '/assets/channels/espn.png',
  'Ziggo Sport': '/assets/channels/ziggo-sport.png',
  'Viaplay':     '/assets/channels/viaplay.png',
  'Eurosport':   '/assets/channels/eurosport.png',
  'DAZN':        '/assets/channels/dazn.png',
  'Sky Sports':  '/assets/channels/sky-sports.png',
  'F1 TV':       '/assets/channels/f1.png',
};

function formatCountdown(startTime: string) {
  const d = new Date(startTime);
  if (!startTime || isNaN(d.getTime())) return '';
  const diff = Math.max(0, Math.round((d.getTime() - Date.now()) / 60_000));
  if (diff < 1) return 'Begint zo';
  if (diff < 60) return `${diff}m`;
  const h = Math.floor(diff / 60), m = diff % 60;
  return m > 0 ? `${h}u ${m}m` : `${h}u`;
}

function formatTime(startTime: string) {
  const d = new Date(startTime);
  if (!startTime || isNaN(d.getTime())) return '';
  return d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Amsterdam' });
}

/* ─── sub-components ────────────────────────────────────────────────────── */

const LiveDot: React.FC = () => (
  <span className="relative flex h-2.5 w-2.5 shrink-0">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
  </span>
);

const Skeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse rounded-2xl ${className}`} style={{ background: 'rgba(13,27,62,0.07)' }} />
);

const LeagueLogo: React.FC<{ src?: string; alt: string; size?: string }> = ({ src, alt, size = 'w-6 h-6' }) =>
  src ? (
    <div className="rounded-md p-1 shrink-0" style={{ background: 'white' }}>
      <img src={src} alt={alt} className={`${size} object-contain`} />
    </div>
  ) : null;

const ChannelBadge: React.FC<{ channel: string; color: string }> = ({ channel, color }) => {
  const logo = CHANNEL_LOGOS[channel];
  return logo ? (
    <div className="rounded-md px-2 py-1.5 shrink-0" style={{ background: 'white' }}>
      <img src={logo} alt={channel} className="w-14 h-5 object-contain" />
    </div>
  ) : (
    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md text-white" style={{ background: color }}>
      {channel}
    </span>
  );
};

const UpcomingCard: React.FC<{ event: SportEvent }> = ({ event }) => {
  const [label, setLabel] = useState(() => formatCountdown(event.startTime));
  useEffect(() => {
    const id = setInterval(() => setLabel(formatCountdown(event.startTime)), 30_000);
    return () => clearInterval(id);
  }, [event.startTime]);
  const isLive = event.status === 'live';

  return (
    <div
      className="flex flex-col gap-4 p-4 lg:p-5 rounded-2xl border cursor-pointer hover:scale-[1.02] hover:brightness-110 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #21468B 60%, #0D1B3E 100%)',
        borderColor: 'rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(13,27,62,0.35)',
      }}
    >
      {/* top: league logo + competition + channel */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <LeagueLogo src={event.leagueLogo} alt={event.competition} size="w-5 h-5" />
          {!event.leagueLogo && <span className="text-base">{sportIcon[event.sport] ?? '🏆'}</span>}
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.75)' }}>
            {event.competition}
          </span>
        </div>
        <ChannelBadge channel={event.channel} color={event.channelColor} />
      </div>

      {/* teams row with logos */}
      <div className="flex items-center justify-between gap-2">
        {/* home */}
        <div className="flex flex-col items-center gap-1.5 flex-1">
          <TeamLogo logo={event.homeLogo} name={event.homeTeam} size="w-9 h-9" />
          <span className="text-xs font-black text-white text-center leading-tight">{event.homeTeam}</span>
        </div>

        {/* score / vs */}
        <div className="flex flex-col items-center shrink-0 px-1">
          {isLive && event.homeScore !== null
            ? <span className="text-lg font-black text-yellow-300 tabular-nums">{event.homeScore}–{event.awayScore}</span>
            : <span className="text-sm font-black" style={{ color: 'rgba(255,255,255,0.3)' }}>vs</span>
          }
        </div>

        {/* away */}
        <div className="flex flex-col items-center gap-1.5 flex-1">
          <TeamLogo logo={event.awayLogo} name={event.awayTeam} size="w-9 h-9" />
          <span className="text-xs font-black text-white text-center leading-tight">{event.awayTeam}</span>
        </div>
      </div>

      {/* bottom: status */}
      {isLive ? (
        <div className="flex items-center gap-1.5">
          <LiveDot />
          <span className="text-xs font-bold text-red-400">{event.clock ? `${event.clock}'` : 'Live'}</span>
        </div>
      ) : (
        <div className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
          </svg>
          <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {formatTime(event.startTime) && <>{formatTime(event.startTime)} · </>}
            <span className="font-black text-white">{label || 'Binnenkort'}</span>
          </span>
        </div>
      )}
    </div>
  );
};

const TeamLogo: React.FC<{ logo?: string; name: string; size?: string }> = ({ logo, name, size = 'w-16 h-16 lg:w-24 lg:h-24' }) => (
  logo
    ? <img src={logo} alt={name} className={`${size} object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]`} />
    : <div className={`${size} rounded-2xl flex items-center justify-center text-2xl font-black text-white`} style={{ background: 'rgba(255,255,255,0.15)' }}>
        {name.slice(0, 2).toUpperCase()}
      </div>
);

const FeaturedCard: React.FC<{ event: SportEvent }> = ({ event }) => {
  const [countdown, setCountdown] = useState(() => formatCountdown(event.startTime));
  const isLive = event.status === 'live';
  useEffect(() => {
    if (isLive) return;
    const id = setInterval(() => setCountdown(formatCountdown(event.startTime)), 30_000);
    return () => clearInterval(id);
  }, [event.startTime, isLive]);

  return (
    <div className="relative rounded-3xl overflow-hidden mb-5 lg:mb-6 shadow-[0_16px_60px_rgba(0,0,0,0.4)]" style={{ background: event.gradient }}>
      {/* scanlines */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(255,255,255,0.5) 3px,rgba(255,255,255,0.5) 4px)' }} />

      <div className="relative flex flex-col items-center gap-6 px-6 py-10 lg:px-14 lg:py-12">

        {/* top row: status + competition + league logo */}
        <div className="flex flex-col items-center gap-3">
          {event.leagueLogo && (
            <div className="rounded-2xl p-2 lg:p-3 shadow-[0_4px_16px_rgba(0,0,0,0.3)]" style={{ background: 'white' }}>
              <img
                src={event.leagueLogo}
                alt={event.competition}
                className="w-10 h-10 lg:w-14 lg:h-14 object-contain"
              />
            </div>
          )}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {isLive ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: '#AE1C28' }}>
                <LiveDot /><span className="text-xs font-black uppercase tracking-wider text-white">Live</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" /></svg>
                <span className="text-xs font-black uppercase tracking-wider text-white">Begint over {countdown}</span>
              </div>
            )}
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {event.competition}
            </span>
          </div>
        </div>

        {/* teams + score row */}
        <div className="flex items-center justify-center gap-6 lg:gap-12 w-full">

          {/* home */}
          <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1">
            <TeamLogo logo={event.homeLogo} name={event.homeTeam} />
            <span className="text-base lg:text-2xl font-black text-white tracking-tight text-center leading-tight">{event.homeTeam}</span>
          </div>

          {/* score / vs */}
          <div className="flex flex-col items-center shrink-0 gap-1">
            {isLive && event.homeScore !== null ? (
              <>
                <div className="flex items-center gap-2 lg:gap-3">
                  <span className="text-4xl lg:text-7xl font-black text-white leading-none tabular-nums">{event.homeScore}</span>
                  <span className="text-2xl lg:text-4xl font-black leading-none" style={{ color: 'rgba(255,255,255,0.3)' }}>–</span>
                  <span className="text-4xl lg:text-7xl font-black text-white leading-none tabular-nums">{event.awayScore}</span>
                </div>
                {event.clock && (
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>{event.clock}'</span>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl lg:text-5xl font-black leading-none" style={{ color: 'rgba(255,255,255,0.3)' }}>vs</span>
                {formatTime(event.startTime) && (
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.45)' }}>{formatTime(event.startTime)}</span>
                )}
              </div>
            )}
          </div>

          {/* away */}
          <div className="flex flex-col items-center gap-2 lg:gap-3 flex-1">
            <TeamLogo logo={event.awayLogo} name={event.awayTeam} />
            <span className="text-base lg:text-2xl font-black text-white tracking-tight text-center leading-tight">{event.awayTeam}</span>
          </div>

        </div>

        {/* bottom row: channel + CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <ChannelBadge channel={event.channel} color={event.channelColor} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {isLive ? 'Nu te zien' : formatTime(event.startTime) ? `Om ${formatTime(event.startTime)}` : 'Binnenkort'}
            </span>
          </div>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-black text-sm hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(174,28,40,0.5)]"
            style={{ background: 'linear-gradient(135deg,#AE1C28,#c0392b)' }}
          >
            {isLive ? 'Start nu met kijken' : 'Abonnement nemen'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>

      </div>
    </div>
  );
};

const EmptyState: React.FC = () => (
  <div className="rounded-3xl flex flex-col items-center justify-center py-16 gap-4 border" style={{ background: 'rgba(13,27,62,0.04)', borderColor: 'rgba(33,70,139,0.1)' }}>
    <span className="text-5xl">📺</span>
    <p className="text-base font-semibold" style={{ color: 'rgba(13,27,62,0.5)' }}>Geen live wedstrijden op dit moment</p>
    <a href="/sportklaender" className="text-sm font-bold underline underline-offset-4" style={{ color: '#21468B' }}>Bekijk alle sportzenders →</a>
  </div>
);

/* ─── main ──────────────────────────────────────────────────────────────── */

export const SportEvents: React.FC = () => {
  const [events, setEvents] = useState<SportEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const load = useCallback(async () => {
    try {
      const raw = await loadEvents();
      setEvents(sortEvents(raw));
      setLastUpdated(new Date());
    } catch { /* keep previous */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, [load]);

  const featured = events[0] ?? null;
  const upcoming = events.slice(1, 5);

  return (
    <section className="py-16 lg:py-24" id="sport">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        <div className="flex items-end justify-between mb-8 lg:mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LiveDot />
              <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#AE1C28' }}>Sport & Live Events</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tighter leading-tight" style={{ color: '#0D1B3E' }}>
              Kijk Nu &amp; Binnenkort
            </h2>
          </div>
          <div className="flex flex-col items-end gap-1">
            <a href="/sportklaender" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold hover:opacity-70 transition-opacity" style={{ color: '#21468B' }}>
              Sport Kalender
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </a>
            {lastUpdated && (
              <span className="hidden sm:block text-[10px]" style={{ color: 'rgba(13,27,62,0.35)' }}>
                Bijgewerkt om {lastUpdated.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' })}
              </span>
            )}
          </div>
        </div>

        {loading && (
          <>
            <Skeleton className="h-52 lg:h-44 mb-5" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28" />)}
            </div>
          </>
        )}

        {!loading && events.length === 0 && <EmptyState />}

        {!loading && featured && (
          <>
            <FeaturedCard event={featured} />
            {upcoming.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {upcoming.map(e => <UpcomingCard key={e.id} event={e} />)}
              </div>
            )}
          </>
        )}

        <div className="mt-6 flex sm:hidden justify-center">
          <a href="/sportklaender" className="inline-flex items-center gap-1.5 text-sm font-bold hover:opacity-70 transition-opacity" style={{ color: '#21468B' }}>
            Sport Kalender
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
};
