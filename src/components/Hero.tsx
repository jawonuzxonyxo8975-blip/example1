import { ArrowRight, ChevronDown } from 'lucide-react';
import { heroProject } from '../data/content';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroProject.image}
          alt={heroProject.title}
          className="hero-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/25 to-ink-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.3s' }}
        >
          Construction · Engineering · Project Management
        </p>
        <h1
          className="max-w-5xl font-serif text-5xl font-medium leading-[1.05] text-white animate-fade-up opacity-0 text-shadow-gisi md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s' }}
        >
          Build for
          <br />
          <span className="italic text-gold-400">generations.</span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 animate-fade-up opacity-0 md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          At GISI, legacies are honored, employees are owners, and collaboration
          creates more sustaining value than anyone could achieve alone.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up opacity-0 sm:flex-row sm:gap-6"
          style={{ animationDelay: '1.1s' }}
        >
          <a href="#who-we-are" className="btn-gold">
            Who We Are
            <ArrowRight size={16} />
          </a>
          <a href="#business-groups" className="btn-outline">
            Our Business Groups
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
