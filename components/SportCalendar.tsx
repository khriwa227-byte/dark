import React, { useEffect, useState, useCallback } from 'react';

/* ─── types ─────────────────────────────────────────────────────────────── */

interface CalEvent {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo?: string;
  awayLogo?: string;
  leagueLogo?: string;
  homeScore: number | null;
  awayScore: number | null;
  status: 'live' | 'upcoming' | 'finished';
  clock?: string;
  startTime: string;
  sport: string;
  channel: string;
  channelColor: string;
}

/* ─── config ────────────────────────────────────────────────────────────── */

function espnDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

const CHANNEL_LOGOS: Record<string, string> = {
  'ESPN':        '/assets/channels/espn.png',
  'Ziggo Sport': '/assets/channels/ziggo-sport.png',
  'Viaplay':     '/assets/channels/viaplay.png',
  'Eurosport':   '/assets/channels/eurosport.png',
  'DAZN':        '/assets/channels/dazn.png',
  'Sky Sports':  '/assets/channels/sky-sports.png',
  'F1 TV':       '/assets/channels/f1.png',
};

const SPORT_FILTERS = [
  { key: 'all',             label: 'Alles',            icon: '🏆' },
  { key: 'voetbal',         label: 'Voetbal',          icon: '⚽' },
  { key: 'Champions League', label: 'Champions League', icon: '⭐' },
  { key: 'internationaal',  label: 'Internationaal',   icon: '🌍' },
  { key: 'f1',             label: 'Formule 1',         icon: '🏎️' },
  { key: 'basket',         label: 'NBA',               icon: '🏀' },
];

const LEAGUE_DEFS = [
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard',                 competition: 'Eredivisie',       sport: 'voetbal', channel: 'ESPN',        channelColor: '#E8002D', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard', competition: 'Champions League', sport: 'voetbal', channel: 'Ziggo Sport', channelColor: '#FF5500', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard',                 competition: 'Premier League',   sport: 'voetbal', channel: 'Viaplay',     channelColor: '#5900D9', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard',                 competition: 'La Liga',          sport: 'voetbal', channel: 'Viaplay',     channelColor: '#5900D9', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard',                 competition: 'Bundesliga',       sport: 'voetbal', channel: 'Viaplay',     channelColor: '#5900D9', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard',                 competition: 'Serie A',          sport: 'voetbal', channel: 'Viaplay',     channelColor: '#5900D9', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa_league/scoreboard',    competition: 'Europa League',    sport: 'voetbal', channel: 'Viaplay',     channelColor: '#5900D9', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard',           competition: 'Nations League',      sport: 'internationaal', channel: 'Ziggo Sport', channelColor: '#FF5500', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.eu/scoreboard',        competition: 'WK Kwalificatie',     sport: 'internationaal', channel: 'Ziggo Sport', channelColor: '#FF5500', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard',            competition: 'FIFA World Cup',      sport: 'internationaal', channel: 'NOS',         channelColor: '#CC0000', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.euro/scoreboard',             competition: 'UEFA EURO',           sport: 'internationaal', channel: 'NOS',         channelColor: '#CC0000', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard', competition: 'CONCACAF Nations',  sport: 'internationaal', channel: 'ESPN',        channelColor: '#E8002D', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.conmebol/scoreboard',  competition: 'CONMEBOL WK Kwal.',   sport: 'internationaal', channel: 'ESPN',        channelColor: '#E8002D', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard',         competition: 'Interland Vriendsch.', sport: 'internationaal', channel: 'NOS',        channelColor: '#CC0000', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly.w/scoreboard',       competition: 'Vrouwen Vriendsch.',  sport: 'internationaal', channel: 'NOS',         channelColor: '#CC0000', isTeamSport: true },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/racing/f1/scoreboard',                    competition: 'Formule 1',           sport: 'f1',             channel: 'Ziggo Sport', channelColor: '#FF5500', isTeamSport: false },
  { base: 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard',               competition: 'NBA',                 sport: 'basket',         channel: 'NBA TV',      channelColor: '#006BB6', isTeamSport: true },
];

type LeagueDef = typeof LEAGUE_DEFS[0];

/* ─── normalization ─────────────────────────────────────────────────────── */

function normalizeEvent(event: any, league: LeagueDef, leagueLogo?: string): CalEvent | null {
  try {
    const comp = event.competitions?.[0];
    if (!comp) return null;
    const state: string = event.status?.type?.state ?? 'pre';
    const status = state === 'in' ? 'live' : state === 'post' ? 'finished' : 'upcoming';

    let homeTeam = '', awayTeam = '', homeScore: number | null = null, awayScore: number | null = null;
    let homeLogo: string | undefined, awayLogo: string | undefined;

    if (league.isTeamSport) {
      const home = comp.competitors?.find((c: any) => c.homeAway === 'home');
      const away = comp.competitors?.find((c: any) => c.homeAway === 'away');
      homeTeam = home?.team?.shortDisplayName || home?.team?.displayName || '?';
      awayTeam = away?.team?.shortDisplayName || away?.team?.displayName || '?';
      homeLogo = home?.team?.logo;
      awayLogo = away?.team?.logo;
      if (status !== 'upcoming') {
        homeScore = parseInt(home?.score ?? '0', 10);
        awayScore = parseInt(away?.score ?? '0', 10);
      }
    } else {
      homeTeam = (event.shortName || event.name || 'Race').replace('Formula 1 ', '').replace(' Grand Prix', ' GP');
      awayTeam = event.status?.type?.shortDetail ?? '';
    }

    return {
      id: event.id,
      competition: league.competition,
      homeTeam, awayTeam, homeLogo, awayLogo, leagueLogo,
      homeScore, awayScore, status,
      clock: status === 'live' ? event.status?.displayClock : undefined,
      startTime: event.date,
      sport: league.sport,
      channel: league.channel,
      channelColor: league.channelColor,
    };
  } catch { return null; }
}

async function fetchAllEvents(days = 14): Promise<CalEvent[]> {
  const dateRange = `${espnDate(0)}-${espnDate(days)}`;
  const results = await Promise.allSettled(
    LEAGUE_DEFS.map(league =>
      fetch(`${league.base}?dates=${dateRange}`)
        .then(r => r.json())
        .then(data => ({ data, league }))
    )
  );

  const events: CalEvent[] = [];
  for (const r of results) {
    if (r.status !== 'fulfilled') continue;
    const { data, league } = r.value;
    const leagueLogo: string | undefined = data.leagues?.[0]?.logos?.[0]?.href;
    for (const event of data.events ?? []) {
      const n = normalizeEvent(event, league, leagueLogo);
      if (n) events.push(n);
    }
  }

  function compPrio(e: CalEvent) {
    if (e.competition === 'Champions League') return 0;
    if (e.sport === 'voetbal') return 1;
    return 2;
  }
  return events.sort((a, b) => {
    const timeDiff = new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    if (timeDiff !== 0) return timeDiff;
    return compPrio(a) - compPrio(b);
  });
}

/* ─── helpers ───────────────────────────────────────────────────────────── */

function toAmsDate(iso: string) {
  const d = new Date(iso);
  const today = new Date();
  const tomorrow = new Date(); tomorrow.setDate(today.getDate() + 1);

  const isSameDay = (a: Date, b: Date) =>
    a.toLocaleDateString('nl-NL', { timeZone: 'Europe/Amsterdam' }) ===
    b.toLocaleDateString('nl-NL', { timeZone: 'Europe/Amsterdam' });

  if (isSameDay(d, today)) return 'Vandaag';
  if (isSameDay(d, tomorrow)) return 'Morgen';

  return d.toLocaleDateString('nl-NL', {
    timeZone: 'Europe/Amsterdam', weekday: 'long', day: 'numeric', month: 'long',
  });
}

function toAmsDateKey(iso: string) {
  return new Date(iso).toLocaleDateString('nl-NL', {
    timeZone: 'Europe/Amsterdam', year: 'numeric', month: '2-digit', day: '2-digit',
  });
}

function toAmsTime(iso: string) {
  if (!iso) return '--:--';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '--:--';
  return d.toLocaleTimeString('nl-NL', { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit' });
}

function groupByDate(events: CalEvent[]): [string, CalEvent[]][] {
  const map = new Map<string, CalEvent[]>();
  for (const e of events) {
    if (!e.startTime) continue;
    const key = toAmsDateKey(e.startTime);
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(e);
  }
  return Array.from(map.entries());
}

/* ─── sub-components ────────────────────────────────────────────────────── */

const Countdown: React.FC<{ startTime: string }> = ({ startTime }) => {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);

  const diff = new Date(startTime).getTime() - now;
  if (diff <= 0) return null;

  const totalMinutes = Math.floor(diff / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const days = Math.floor(hours / 24);
  const remHours = hours % 24;

  const text = days > 0
    ? `Begint over ${days}d ${remHours}u`
    : hours > 0
    ? `Begint over ${hours}u ${minutes}m`
    : `Begint over ${minutes}m`;

  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: 'rgba(59,130,246,0.08)', color: '#60A5FA' }}>
      ⏱ {text}
    </span>
  );
};

const LiveDot: React.FC = () => (
  <span className="relative flex h-2 w-2 shrink-0">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
  </span>
);

const TeamLogo: React.FC<{ logo?: string; name: string; size?: string }> = ({ logo, name, size = 'w-9 h-9' }) =>
  logo
    ? <img src={logo} alt={name} className={`${size} object-contain drop-shadow-sm`} />
    : <div className={`${size} rounded-xl flex items-center justify-center text-xs font-black`} style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}>{name.slice(0, 2).toUpperCase()}</div>;

const ChannelBadge: React.FC<{ channel: string; color: string }> = ({ channel, color }) => {
  const logo = CHANNEL_LOGOS[channel];
  return logo
    ? <div className="rounded-lg px-2.5 py-1.5 shrink-0 shadow-sm" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}>
        <img src={logo} alt={channel} className="h-4 w-auto object-contain" style={{ maxWidth: '56px' }} />
      </div>
    : <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-lg text-white shrink-0" style={{ background: color }}>{channel}</span>;
};

/* ─── event card ─────────────────────────────────────────────────────────── */

const EventCard: React.FC<{ event: CalEvent }> = ({ event }) => {
  const isLive     = event.status === 'live';
  const isFinished = event.status === 'finished';

  return (
    <div
      className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(59,130,246,0.12)] hover:-translate-y-px"
      style={{
        background: isLive
          ? 'linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(15,23,42,0.95) 100%)'
          : 'rgba(15,23,42,0.92)',
        borderColor: isLive ? 'rgba(59,130,246,0.3)' : 'rgba(59,130,246,0.1)',
        opacity: isFinished ? 0.5 : 1,
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* live left accent */}
      {isLive && (
        <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full" style={{ background: '#3B82F6' }} />
      )}

      {/* time column */}
      <div className="w-14 shrink-0 flex flex-col items-center gap-1">
        {isLive ? (
          <>
            <LiveDot />
            <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: '#60A5FA' }}>
              {event.clock ? `${event.clock}'` : 'Live'}
            </span>
          </>
        ) : (
          <span className="text-sm font-bold tabular-nums" style={{ color: isFinished ? 'rgba(241,245,249,0.25)' : 'rgba(241,245,249,0.55)' }}>
            {toAmsTime(event.startTime)}
          </span>
        )}
      </div>

      {/* league logo */}
      <div className="shrink-0">
        {event.leagueLogo
          ? <div className="rounded-xl p-1.5 shadow-sm" style={{ background: 'white', border: '1px solid rgba(0,0,0,0.06)' }}>
              <img src={event.leagueLogo} alt={event.competition} className="w-6 h-6 object-contain" />
            </div>
          : <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base" style={{ background: 'rgba(59,130,246,0.06)' }}>🏆</div>
        }
      </div>

      {/* teams */}
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <div className="flex items-center gap-2.5">
          <TeamLogo logo={event.homeLogo} name={event.homeTeam} size="w-7 h-7" />
          <span className="text-sm font-black truncate leading-none" style={{ color: '#F1F5F9' }}>{event.homeTeam}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <TeamLogo logo={event.awayLogo} name={event.awayTeam} size="w-7 h-7" />
          <span className="text-sm font-black truncate leading-none" style={{ color: '#F1F5F9' }}>{event.awayTeam}</span>
        </div>
      </div>

      {/* countdown for upcoming */}
      {!isLive && !isFinished && (
        <div className="hidden sm:flex shrink-0">
          <Countdown startTime={event.startTime} />
        </div>
      )}

      {/* score or vs */}
      <div className="shrink-0 w-10 flex flex-col items-center gap-2">
        {(isLive || isFinished) && event.homeScore !== null ? (
          <>
            <span className="text-base font-black tabular-nums leading-none" style={{ color: isLive ? '#60A5FA' : '#F1F5F9' }}>{event.homeScore}</span>
            <span className="text-base font-black tabular-nums leading-none" style={{ color: isLive ? '#60A5FA' : '#F1F5F9' }}>{event.awayScore}</span>
          </>
        ) : (
          <span className="text-xs font-bold" style={{ color: 'rgba(241,245,249,0.2)' }}>vs</span>
        )}
      </div>

      {/* channel */}
      <div className="hidden sm:block shrink-0">
        <ChannelBadge channel={event.channel} color={event.channelColor} />
      </div>
    </div>
  );
};

/* ─── main page ─────────────────────────────────────────────────────────── */

export const SportCalendar: React.FC = () => {
  const [events, setEvents]           = useState<CalEvent[]>([]);
  const [loading, setLoading]         = useState(true);
  const [sport, setSport]             = useState('all');
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const load = useCallback(async () => {
    try {
      const raw = await fetchAllEvents(14);
      setEvents(raw);
      setLastUpdated(new Date());
    } catch { /* keep previous */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 120_000);
    return () => clearInterval(id);
  }, [load]);

  const filtered  = sport === 'all' ? events : events.filter(e => e.sport === sport || e.competition === sport);
  const grouped   = groupByDate(filtered);
  const liveCount = filtered.filter(e => e.status === 'live').length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0F' }}>

      {/* ── hero banner ── */}
      <div className="relative overflow-hidden pt-36 pb-12" style={{ background: 'linear-gradient(135deg, #0A0A0F 0%, #1E3A5F 60%, #0A0A0F 100%)' }}>
        {/* scanlines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)' }} />
        {/* glow orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ background: '#3B82F6' }} />
        <div className="absolute -bottom-10 -left-20 w-60 h-60 rounded-full opacity-10 blur-3xl" style={{ background: '#3B82F6' }} />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              {/* live badge */}
              {liveCount > 0 && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: '#3B82F6' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider text-white">{liveCount} wedstrijd{liveCount > 1 ? 'en' : ''} live</span>
                </div>
              )}
              <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white leading-tight">
                Sport Kalender
              </h1>
              <p className="mt-2 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Eredivisie · Champions League · Nations League · WK Kwalificatie · F1 · en meer — Amsterdam tijd
              </p>
            </div>
            {lastUpdated && (
              <span className="text-xs shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Bijgewerkt om {lastUpdated.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Amsterdam' })}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* ── filter tabs ── */}
      <div className="sticky top-0 z-40 border-b" style={{ background: 'rgba(10,10,15,0.95)', backdropFilter: 'blur(12px)', borderColor: 'rgba(59,130,246,0.1)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-20 py-3 flex items-center gap-2 flex-wrap">
          {SPORT_FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => setSport(f.key)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03]"
              style={sport === f.key
                ? { background: '#3B82F6', color: 'white', boxShadow: '0 4px 16px rgba(59,130,246,0.3)' }
                : { background: 'rgba(59,130,246,0.08)', color: '#60A5FA' }}
            >
              {f.icon} {f.label}
            </button>
          ))}
          <span className="ml-auto text-xs font-semibold" style={{ color: 'rgba(241,245,249,0.35)' }}>
            {filtered.length} wedstrijden
          </span>
        </div>
      </div>

      {/* ── content ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-10">

        {/* loading skeletons */}
        {loading && (
          <div className="space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="animate-pulse h-4 w-32 rounded-full mb-4" style={{ background: 'rgba(59,130,246,0.07)' }} />
                <div className="space-y-2.5">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="animate-pulse h-20 rounded-2xl" style={{ background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.08)' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* empty state */}
        {!loading && grouped.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl" style={{ background: 'rgba(59,130,246,0.08)' }}>📭</div>
            <p className="text-lg font-extrabold tracking-tight" style={{ color: '#F1F5F9' }}>Geen wedstrijden gevonden</p>
            <p className="text-sm" style={{ color: 'rgba(241,245,249,0.4)' }}>Probeer een andere sport filter</p>
          </div>
        )}

        {/* grouped events */}
        {!loading && grouped.map(([dateKey, dayEvents]) => {
          const label = toAmsDate(dayEvents[0].startTime);
          const isToday = label === 'Vandaag';
          return (
            <div key={dateKey} className="mb-10">
              {/* date header */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full shrink-0"
                  style={isToday
                    ? { background: 'linear-gradient(135deg, #0F172A, #1D4ED8)', color: 'white' }
                    : { background: 'rgba(59,130,246,0.08)', color: '#60A5FA' }}
                >
                  <span className="text-xs font-black uppercase tracking-widest capitalize">{label}</span>
                  <span className="text-xs font-bold opacity-60">{dayEvents.length} wedstrijden</span>
                </div>
                <div className="h-px flex-1" style={{ background: 'rgba(59,130,246,0.1)' }} />
              </div>

              <div className="space-y-2.5">
                {dayEvents.map(event => <EventCard key={event.id} event={event} />)}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        {!loading && grouped.length > 0 && (
          <div
            className="mt-6 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1D4ED8 100%)' }}
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-10 blur-2xl" style={{ background: '#3B82F6' }} />
            <div className="text-center sm:text-left">
              <p className="text-white font-extrabold text-xl tracking-tight">Mis geen enkele wedstrijd</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Alle sportzenders inbegrepen bij elk abonnement
              </p>
            </div>
            <a
              href="/#iptvdark"
              className="shrink-0 inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-black text-white text-sm hover:scale-105 transition-transform shadow-[0_8px_32px_rgba(245,158,11,0.4)]"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
            >
              Bekijk abonnementen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
