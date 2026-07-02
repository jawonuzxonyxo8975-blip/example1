import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
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
      {/* Background image with parallax + slow zoom */}
      <div
        className="parallax absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.35}px)` }}
      >
        <img
          src={heroContent.image}
          alt="Family portrait"
          className="hero-zoom h-full w-full object-cover"
        />
        {/* Film-grain overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/30 via-ink-950/10 to-ink-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/40 via-transparent to-ink-950/30" />
        {/* Subtle warmth overlay */}
        <div className="absolute inset-0 bg-gold-900/5 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow mb-8 animate-fade-in opacity-0"
          style={{ animationDelay: '0.3s', letterSpacing: '0.3em' }}
        >
          {heroContent.tagline}
        </p>
        <h1
          className="max-w-5xl font-serif text-5xl font-light leading-[1.05] text-white animate-fade-up opacity-0 md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s', textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}
        >
          {heroContent.title}
          <br />
          <span className="italic text-gold-200">{heroContent.titleAccent}</span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-base font-light leading-relaxed text-white/85 animate-fade-up opacity-0 md:text-lg"
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
            className="group inline-flex items-center justify-center gap-3 bg-white px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-900 transition-all duration-500 hover:bg-gold-100 hover:shadow-xl hover:shadow-gold-400/20"
          >
            {heroContent.cta}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <button
            className="group inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/90 transition-colors duration-300 hover:text-gold-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-gold-300 group-hover:bg-gold-300/10">
              <Play size={14} className="ml-0.5" />
            </span>
            {heroContent.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Caption + scroll indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 z-10 animate-fade-in opacity-0"
        style={{ animationDelay: '1.4s' }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/60">
              <div className="h-px w-12 bg-gold-400/60" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em]">
                {heroContent.caption}
              </p>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                Scroll
              </span>
              <ChevronDown size={18} className="animate-bounce text-white/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
