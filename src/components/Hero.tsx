import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroProject } from '../data/content';

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
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src={heroProject.image}
          alt={heroProject.title}
          className="hero-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/50 via-ink-950/20 to-ink-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow mb-6 animate-fade-in opacity-0 !text-gold-300"
          style={{ animationDelay: '0.3s' }}
        >
          Excellence · Innovation · Partnership
        </p>
        <h1
          className="max-w-5xl font-serif text-5xl font-medium leading-[1.05] text-white animate-fade-up opacity-0 md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s', textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
        >
          Build for
          <br />
          <span className="italic text-gold-300">excellence.</span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 animate-fade-up opacity-0 md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up opacity-0 sm:flex-row sm:gap-6"
          style={{ animationDelay: '1.1s' }}
        >
          <a href="#who-we-are" className="btn-gold">
            Discover More
            <ArrowRight size={16} />
          </a>
          <a href="#business-groups" className="btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-ink-900">
            Our Divisions
          </a>
        </div>
      </div>

      {/* Project caption + scroll indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 z-10 animate-fade-in opacity-0"
        style={{ animationDelay: '1.4s' }}
      >
        <div className="container-gisi flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/70">
            <div className="h-px w-10 bg-gold-400" />
            <p className="text-[11px] font-medium uppercase tracking-widest">
              {heroProject.title} — {heroProject.location}
            </p>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/50">
              Scroll
            </span>
            <ChevronDown size={18} className="animate-bounce text-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
