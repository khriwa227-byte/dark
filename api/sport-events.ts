import type { VercelRequest, VercelResponse } from '@vercel/node';

function espnDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

function rangeUrl(base: string) {
  return `${base}?dates=${espnDate(0)}-${espnDate(7)}`;
}

const LEAGUES = [
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard'),
    competition: 'Eredivisie',
    sport: 'voetbal',
    channel: 'ESPN',
    channelColor: '#E8002D',
    gradient: 'linear-gradient(135deg, #0c1f0c 0%, #1a4a1a 60%, #0c1f0c 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions_league/scoreboard'),
    competition: 'Champions League',
    sport: 'voetbal',
    channel: 'Ziggo Sport',
    channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #003087 60%, #0a1628 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard'),
    competition: 'Premier League',
    sport: 'voetbal',
    channel: 'Viaplay',
    channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #08031a 0%, #2d0075 60%, #08031a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard'),
    competition: 'La Liga',
    sport: 'voetbal',
    channel: 'Viaplay',
    channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #7a0000 60%, #1a0000 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/racing/f1/scoreboard'),
    competition: 'Formule 1',
    sport: 'f1',
    channel: 'Ziggo Sport',
    channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #4a1800 60%, #1a0800 100%)',
    isTeamSport: false,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'),
    competition: 'NBA',
    sport: 'basket',
    channel: 'NBA TV',
    channelColor: '#006BB6',
    gradient: 'linear-gradient(135deg, #00091a 0%, #002b5c 60%, #00091a 100%)',
    isTeamSport: true,
  },
];

function normalize(event: any, league: (typeof LEAGUES)[0], leagueLogo?: string) {
  try {
    const comp = event.competitions?.[0];
    if (!comp) return null;

    const state: string = event.status?.type?.state ?? 'pre'; // 'pre' | 'in' | 'post'
    if (state === 'post') return null; // skip finished

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
      // F1 / other — event name as the "match"
      const raw: string = event.name ?? event.shortName ?? 'Race';
      homeTeam = raw.replace('Formula 1 ', '').replace(' Grand Prix', ' GP');
      awayTeam = event.status?.type?.shortDetail ?? comp.type?.text ?? '';
    }

    const home2 = comp.competitors?.find((c: any) => c.homeAway === 'home');
    const away2 = comp.competitors?.find((c: any) => c.homeAway === 'away');

    return {
      id: event.id as string,
      competition: league.competition,
      homeTeam,
      awayTeam,
      homeLogo: home2?.team?.logo as string | undefined,
      awayLogo: away2?.team?.logo as string | undefined,
      leagueLogo,
      homeScore,
      awayScore,
      status,
      clock: status === 'live' ? (event.status?.displayClock as string | undefined) : undefined,
      startTime: event.date as string,
      sport: league.sport,
      channel: league.channel,
      channelColor: league.channelColor,
      gradient: league.gradient,
    };
  } catch {
    return null;
  }
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=55, stale-while-revalidate=30');

  const results = await Promise.allSettled(
    LEAGUES.map(league =>
      fetch(league.url, { headers: { 'User-Agent': 'Mozilla/5.0' } })
        .then(r => r.json())
        .then((data: any) => ({ data, league }))
    )
  );

  const events: ReturnType<typeof normalize>[] = [];

  for (const result of results) {
    if (result.status !== 'fulfilled') continue;
    const { data, league } = result.value;
    const leagueLogo: string | undefined = data.leagues?.[0]?.logos?.[0]?.href;
    for (const event of data.events ?? []) {
      const normalized = normalize(event, league, leagueLogo);
      if (normalized) events.push(normalized);
    }
  }

  // live first, then soonest upcoming
  events.sort((a, b) => {
    if (a!.status === 'live' && b!.status !== 'live') return -1;
    if (b!.status === 'live' && a!.status !== 'live') return 1;
    return new Date(a!.startTime).getTime() - new Date(b!.startTime).getTime();
  });

  res.json({ events, updatedAt: new Date().toISOString() });
}
