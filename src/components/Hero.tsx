import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt="Cefalù, Sicily coastline"
          className="hero-zoom h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 via-ink-900/25 to-ink-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p
          className="eyebrow mb-6 animate-fade-in text-gold-300 opacity-0"
          style={{ animationDelay: '0.3s' }}
        >
          The World's Oldest Travel Company
        </p>
        <h1
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.1] text-white animate-fade-up opacity-0 md:text-7xl lg:text-8xl"
          style={{ animationDelay: '0.5s' }}
        >
          Guided by curiosity
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-white/90 animate-fade-up opacity-0 md:text-xl"
          style={{ animationDelay: '0.8s' }}
        >
          Discover the world more deeply, through enriching and immersive tours and
          journeys, built on a heritage of trust and expertise.
        </p>
        <div
          className="mt-10 flex flex-col items-center gap-4 animate-fade-up opacity-0 sm:flex-row sm:gap-6"
          style={{ animationDelay: '1.1s' }}
        >
          <a href="#destinations" className="btn-gold">
            Discover More
            <ArrowRight size={16} />
          </a>
          <a href="#tours" className="btn-outline">
            View Tours
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
          <div className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
      </div>
    </section>
  );
}
