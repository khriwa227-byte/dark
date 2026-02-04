
import React, { useRef, useCallback } from 'react';
import { SERVICES, TOP_FILMS, CHANNEL_LOGOS, TOP_TVSHOWS_NL, TOP_TVSHOWS_INTL } from '../constants';

export const SwipeableMarquee: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentOffset = useRef(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getContentElements = useCallback(() => {
    if (!containerRef.current) return [];
    return Array.from(containerRef.current.querySelectorAll('.marquee-content')) as HTMLElement[];
  }, []);

  const getComputedTranslateX = (el: HTMLElement) => {
    const style = window.getComputedStyle(el);
    const matrix = new DOMMatrix(style.transform);
    return matrix.m41;
  };

  const wrapOffset = (offset: number, contentWidth: number) => {
    if (contentWidth <= 0) return offset;
    // The gap between the two duplicated strips is 2rem (32px)
    const loopWidth = contentWidth + 32;
    let wrapped = offset % loopWidth;
    if (wrapped > 0) wrapped -= loopWidth;
    return wrapped;
  };

  const handleStart = useCallback((clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);

    const elements = getContentElements();
    const firstEl = elements[0];
    if (firstEl) {
      const currentX = getComputedTranslateX(firstEl);
      currentOffset.current = currentX;
    }

    elements.forEach(el => {
      el.style.animation = 'none';
      el.style.transform = `translateX(${currentOffset.current}px)`;
    });
  }, [getContentElements]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current) return;
    const delta = clientX - startX.current;
    const elements = getContentElements();
    const firstEl = elements[0];
    if (!firstEl) return;

    const contentWidth = firstEl.scrollWidth;
    const rawOffset = currentOffset.current + delta;
    const wrapped = wrapOffset(rawOffset, contentWidth);

    elements.forEach(el => {
      el.style.transform = `translateX(${wrapped}px)`;
    });
  }, [getContentElements]);

  const handleEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Save the current position for next drag
    const elements = getContentElements();
    const firstEl = elements[0];
    if (firstEl) {
      const matrix = new DOMMatrix(firstEl.style.transform);
      currentOffset.current = matrix.m41;
    }

    resumeTimer.current = setTimeout(() => {
      getContentElements().forEach(el => {
        el.style.transform = '';
        el.style.animation = '';
        el.offsetHeight;
      });
      currentOffset.current = 0;
    }, 2000);
  }, [getContentElements]);

  return (
    <div
      ref={containerRef}
      className={className}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => { e.preventDefault(); handleStart(e.clientX); }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={() => isDragging.current && handleEnd()}
      style={{ cursor: 'grab', touchAction: 'pan-y' }}
    >
      {children}
    </div>
  );
};

const MoviePoster: React.FC<{ title: string; posterUrl: string }> = ({ title, posterUrl }) => (
  <div className="flex-shrink-0 group cursor-pointer">
    <div className="w-[180px] lg:w-[220px] aspect-[2/3] bg-white/10 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-500 transform group-hover:-translate-y-2 relative border border-white/20">
      <img 
        src={posterUrl} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-black text-sm leading-tight">{title}</span>
      </div>
    </div>
  </div>
);

const ChannelLogo: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div
    className="flex-shrink-0 px-6 py-4 glass-card rounded-2xl flex items-center justify-center h-20 min-w-[160px] opacity-80 hover:opacity-100 transition-all duration-500 shadow-lg hover:shadow-xl group overflow-hidden border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10"
  >
    <img
      src={logo}
      alt={name}
      className="max-h-12 max-w-[120px] object-contain transition-all duration-300 group-hover:scale-110 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
    />
  </div>
);

const SPORTS = [
  { name: 'Voetbal', subtitle: 'Eredivisie, Champions League', icon: '⚽', image: '/assets/sports/voetbal.jpg' },
  { name: 'Hockey', subtitle: 'Hoofdklasse', icon: '🏑', image: '/assets/sports/hockey.jpg' },
  { name: 'Schaatsen', subtitle: 'World Cup, NK', icon: '⛸️', image: '/assets/sports/schaatsen.jpg' },
  { name: 'Wielrennen', subtitle: 'Tour, Giro, Vuelta', icon: '🚴', image: '/assets/sports/wielrennen.jpg' },
  { name: 'Tennis', subtitle: 'Grand Slams', icon: '🎾', image: '/assets/sports/tennis.jpg' },
  { name: 'Padel', subtitle: 'World Padel Tour', icon: '🏸', image: '/assets/sports/padel.jpg' },
  { name: 'Formule 1', subtitle: 'Alle Grands Prix', icon: '🏎️', image: '/assets/sports/formule1.jpg' },
  { name: 'Volleybal', subtitle: 'Eredivisie, EK', icon: '🏐', image: '/assets/sports/volleybal.jpg' },
  { name: 'Golf', subtitle: 'PGA, European Tour', icon: '⛳', image: '/assets/sports/golf.jpg' },
  { name: 'Zwemmen', subtitle: 'WK, Olympisch', icon: '🏊', image: '/assets/sports/zwemmen.jpg' },
];

const SportCard: React.FC<{ name: string; subtitle: string; icon: string; image: string }> = ({ name, subtitle, icon, image }) => (
  <div className="flex-shrink-0 group cursor-pointer">
    <div className="w-[160px] h-[284px] lg:w-[225px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 transform group-hover:-translate-y-2 border border-white/20 relative">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
        <span className="text-2xl lg:text-3xl">{icon}</span>
        <div className="text-white font-black text-sm lg:text-base tracking-tight leading-tight mt-1">{name}</div>
        <div className="text-white/60 text-[10px] lg:text-xs font-bold uppercase tracking-wider mt-1">{subtitle}</div>
      </div>
    </div>
  </div>
);

export const FilmsAndShows: React.FC = () => {
  return (
    <section className="pt-10 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Channel Marquee */}
        <div className="space-y-6 mb-20">
           <div className="px-2 text-center lg:text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Live TV</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Al je favoriete zenders</h3>
           </div>
           <SwipeableMarquee className="marquee-container -mx-6 overflow-hidden">
             <div className="marquee-content py-4" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
               {CHANNEL_LOGOS.map((channel, i) => (
                 <ChannelLogo key={i} name={channel.name} logo={channel.logo} />
               ))}
             </div>
             <div className="marquee-content py-4" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
               {CHANNEL_LOGOS.map((channel, i) => (
                 <ChannelLogo key={`dup-${i}`} name={channel.name} logo={channel.logo} />
               ))}
             </div>
           </SwipeableMarquee>
        </div>

        {/* Sports Marquee Section */}
        <div className="space-y-8 mb-20">
          <div className="text-center px-2">
            <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Van Eredivisie tot Formule 1</div>
            <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Alle Sporten Live in 4K</h3>
          </div>

          <SwipeableMarquee className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '45s' }}>
              {SPORTS.map((sport, i) => (
                <SportCard key={i} name={sport.name} subtitle={sport.subtitle} icon={sport.icon} image={sport.image} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '45s' }}>
              {SPORTS.map((sport, i) => (
                <SportCard key={`dup-${i}`} name={sport.name} subtitle={sport.subtitle} icon={sport.icon} image={sport.image} />
              ))}
            </div>
          </SwipeableMarquee>
        </div>

        {/* Movie Marquee Section */}
        <div className="space-y-8 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-2 text-center lg:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Nu Trending</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Top Films in Nederland</h3>
            </div>
            <div className="hidden md:block text-sm font-bold text-white/50 uppercase tracking-widest mt-4 lg:mt-0">
              Direct beschikbaar in 4K
            </div>
          </div>

          <SwipeableMarquee className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '60s' }}>
              {TOP_FILMS.map((film, i) => (
                <MoviePoster key={i} title={film.title} posterUrl={film.posterUrl || `https://picsum.photos/seed/movie-${i}/400/600`} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '60s' }}>
              {TOP_FILMS.map((film, i) => (
                <MoviePoster key={`dup-${i}`} title={film.title} posterUrl={film.posterUrl || `https://picsum.photos/seed/movie-${i}/400/600`} />
              ))}
            </div>
          </SwipeableMarquee>
        </div>

        {/* Dutch TV Shows Marquee Section */}
        <div className="space-y-8 mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-2 text-center lg:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Nederlandse Series</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Top TV Shows in Nederland</h3>
            </div>
            <div className="hidden md:block text-sm font-bold text-white/50 uppercase tracking-widest mt-4 lg:mt-0">
              Exclusieve content
            </div>
          </div>

          <SwipeableMarquee className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
              {TOP_TVSHOWS_NL.map((show, i) => (
                <MoviePoster key={i} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '50s', animationDirection: 'reverse' }}>
              {TOP_TVSHOWS_NL.map((show, i) => (
                <MoviePoster key={`dup-${i}`} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
          </SwipeableMarquee>
        </div>

        {/* International TV Shows Marquee Section */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end px-2 text-center lg:text-left">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-pink-400 mb-2">Internationaal Trending</div>
              <h3 className="text-2xl lg:text-3xl font-black tracking-tighter text-white">Top Internationale Series</h3>
            </div>
            <div className="hidden md:block text-sm font-bold text-white/50 uppercase tracking-widest mt-4 lg:mt-0">
              Wereldwijd populair
            </div>
          </div>

          <SwipeableMarquee className="marquee-container -mx-6 overflow-hidden">
            <div className="marquee-content py-4" style={{ animationDuration: '55s' }}>
              {TOP_TVSHOWS_INTL.map((show, i) => (
                <MoviePoster key={i} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
            <div className="marquee-content py-4" style={{ animationDuration: '55s' }}>
              {TOP_TVSHOWS_INTL.map((show, i) => (
                <MoviePoster key={`dup-${i}`} title={show.title} posterUrl={show.posterUrl} />
              ))}
            </div>
          </SwipeableMarquee>
        </div>
      </div>
    </section>
  );
};

export const ServicesGrid: React.FC = () => {
  return null;
};
