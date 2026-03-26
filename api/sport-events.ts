import type { VercelRequest, VercelResponse } from '@vercel/node';

function espnDate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10).replace(/-/g, '');
}

function rangeUrl(base: string) {
  return `${base}?dates=${espnDate(0)}-${espnDate(30)}`;
}

const LEAGUES = [
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/ned.1/scoreboard'),
    competition: 'Eredivisie', sport: 'voetbal',
    channel: 'ESPN', channelColor: '#E8002D',
    gradient: 'linear-gradient(135deg, #0c1f0c 0%, #1a4a1a 60%, #0c1f0c 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/scoreboard'),
    competition: 'Champions League', sport: 'voetbal',
    channel: 'Ziggo Sport', channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #003087 60%, #0a1628 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard'),
    competition: 'Premier League', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #08031a 0%, #2d0075 60%, #08031a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/esp.1/scoreboard'),
    competition: 'La Liga', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #7a0000 60%, #1a0000 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/ger.1/scoreboard'),
    competition: 'Bundesliga', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #3a3a3a 60%, #0a0a0a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/ita.1/scoreboard'),
    competition: 'Serie A', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #00061a 0%, #003380 60%, #00061a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.europa_league/scoreboard'),
    competition: 'Europa League', sport: 'voetbal',
    channel: 'Viaplay', channelColor: '#5900D9',
    gradient: 'linear-gradient(135deg, #001a0d 0%, #004d26 60%, #001a0d 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.nations/scoreboard'),
    competition: 'Nations League', sport: 'internationaal',
    channel: 'Ziggo Sport', channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a4a 60%, #0a0a1a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.eu/scoreboard'),
    competition: 'WK Kwalificatie', sport: 'internationaal',
    channel: 'Ziggo Sport', channelColor: '#FF5500',
    gradient: 'linear-gradient(135deg, #0d1a00 0%, #2a4a00 60%, #0d1a00 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard'),
    competition: 'FIFA World Cup', sport: 'internationaal',
    channel: 'NOS', channelColor: '#CC0000',
    gradient: 'linear-gradient(135deg, #1a0000 0%, #4a0000 60%, #1a0000 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.euro/scoreboard'),
    competition: 'UEFA EURO', sport: 'internationaal',
    channel: 'NOS', channelColor: '#CC0000',
    gradient: 'linear-gradient(135deg, #00001a 0%, #00004a 60%, #00001a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/concacaf.nations.league/scoreboard'),
    competition: 'CONCACAF Nations', sport: 'internationaal',
    channel: 'ESPN', channelColor: '#E8002D',
    gradient: 'linear-gradient(135deg, #001a0a 0%, #00401a 60%, #001a0a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.worldq.conmebol/scoreboard'),
    competition: 'CONMEBOL WK Kwal.', sport: 'internationaal',
    channel: 'ESPN', channelColor: '#E8002D',
    gradient: 'linear-gradient(135deg, #1a1000 0%, #4a3000 60%, #1a1000 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly/scoreboard'),
    competition: 'Interland Vriendsch.', sport: 'internationaal',
    channel: 'NOS', channelColor: '#CC0000',
    gradient: 'linear-gradient(135deg, #0a001a 0%, #280040 60%, #0a001a 100%)',
    isTeamSport: true,
  },
  {
    url: rangeUrl('https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.friendly.w/scoreboard'),
    competition: 'Vrouwen Vriendsch.', sport: 'internationaal',
    channel: 'NOS', channelColor: '#CC0000',
    gradient: 'linear-gradient(135deg, #1a0010 0%, #4a0030 60%, #1a0010 100%)',
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

  // Live first (club voetbal before internationaal), then upcoming sorted by time
  function livePriority(e: typeof events[0]) {
    if (e!.sport === 'voetbal') return 0;
    if (e!.sport === 'internationaal') return 1;
    return 2;
  }
  const live     = events.filter(e => e!.status === 'live').sort((a, b) => livePriority(a) - livePriority(b));
  const upcoming = events.filter(e => e!.status !== 'live').sort((a, b) => new Date(a!.startTime).getTime() - new Date(b!.startTime).getTime());
  const sorted = [...live, ...upcoming];

  res.json({ events: sorted, updatedAt: new Date().toISOString() });
}
