import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroContent } from '../data/content';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with parallax + subtle zoom */}
      <div
        className="parallax absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <img
          src={heroContent.image}
          alt="Family portrait"
          className="hero-zoom h-full w-full object-cover"
        />
        {/* Warm, light overlay - not dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-parchment-950/20 via-parchment-950/10 to-parchment-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-parchment-950/25 via-transparent to-parchment-950/20" />
        {/* Subtle warm tint */}
        <div className="absolute inset-0 bg-sepia-400/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-10 animate-fade-in text-[10px] font-medium uppercase tracking-[0.35em] text-parchment-100/90 opacity-0"
          style={{ animationDelay: '0.3s' }}
        >
          {heroContent.tagline}
        </p>
        <h1
          className="max-w-5xl font-serif text-5xl font-light leading-[1.1] text-white animate-fade-up opacity-0 md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ animationDelay: '0.5s', textShadow: '0 2px 30px rgba(0,0,0,0.3)' }}
        >
          {heroContent.title}
          <br />
          <span className="italic text-sepia-200">{heroContent.titleAccent}</span>
        </h1>
        <p
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-white/80 animate-fade-up opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          {heroContent.subtitle}
        </p>
        <div
          className="mt-12 flex flex-col items-center gap-4 animate-fade-up opacity-0 sm:flex-row sm:gap-6"
          style={{ animationDelay: '1.1s' }}
        >
          <a
            href="#create"
            className="btn-primary"
          >
            {heroContent.cta}
            <ArrowRight size={14} />
          </a>
          <a
            href="#memory-engine"
            className="btn-gallery !text-white/80 !border-white/30 hover:!text-white hover:!border-white/50"
          >
            {heroContent.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Caption + scroll indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 z-10 animate-fade-in opacity-0"
        style={{ animationDelay: '1.4s' }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/50">
              <div className="h-px w-10 bg-sepia-300/50" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
                {heroContent.caption}
              </p>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                Scroll
              </span>
              <ChevronDown size={16} className="animate-bounce text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
