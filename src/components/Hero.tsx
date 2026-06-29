import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12877922/pexels-photo-12877922.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Indonesian archipelago from above"
          className="hero-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/60 via-ocean-950/20 to-ocean-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow mb-6 animate-fade-in text-coral-300 opacity-0"
          style={{ animationDelay: '0.3s' }}
        >
          Luxury Yacht Expeditions · Indonesia
        </p>
        <h1
          className="max-w-5xl font-serif text-5xl font-medium leading-[1.05] text-white animate-fade-up opacity-0 text-shadow-lux md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s' }}
        >
          Adventure for the
          <br />
          <span className="italic text-coral-300">restless soul</span>
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 animate-fade-up opacity-0 md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Curated adventures await those who've seen it all, done it all, and
          still crave more. Encounters with nature, wildlife, and local culture
          shape each journey — making no two days ever the same.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up opacity-0 sm:flex-row sm:gap-6"
          style={{ animationDelay: '1.1s' }}
        >
          <a href="#destinations" className="btn-coral">
            Explore Destinations
            <ArrowRight size={16} />
          </a>
          <a href="#expeditions" className="btn-outline">
            View Expeditions
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <ChevronDown size={20} className="animate-bounce text-white/60" />
        </div>
      </div>
    </section>
  );
}
