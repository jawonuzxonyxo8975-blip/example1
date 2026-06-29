import { ArrowRight } from 'lucide-react';
import { destinations } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Destinations() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="destinations" className="bg-sand-50 py-24 md:py-32">
      <div className="container-lux">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div>
            <p className="eyebrow mb-4">Popular Destinations</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
              Where will 2026 take you?
            </h2>
          </div>
          <a
            href="#"
            className="link-underline flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-700"
          >
            View All Destinations
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest, i) => (
            <a
              key={dest.name}
              href="#"
              className={`group relative block aspect-[4/5] overflow-hidden reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/15 to-transparent transition-opacity duration-500 group-hover:from-ink-900/90" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-1 text-xs font-medium uppercase tracking-widest text-gold-300">
                  {dest.region}
                </p>
                <h3 className="font-serif text-3xl font-medium text-white">{dest.name}</h3>
                <div className="mt-3 flex items-center gap-2 overflow-hidden">
                  <span className="text-sm font-light text-white/80">
                    {dest.tours} tours available
                  </span>
                  <span className="inline-flex translate-x-0 items-center text-gold-300 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-4 border border-white/0 transition-all duration-500 group-hover:border-white/30" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
