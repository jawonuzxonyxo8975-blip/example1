import { ArrowRight } from 'lucide-react';
import { destinations } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Destinations() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="destinations" className="bg-ocean-950 py-24 md:py-32">
      <div className="container-lux">
        {/* Section header */}
        <div
          ref={ref}
          className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">Adventure across 17,000 islands</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Where the wild still
            <span className="italic text-coral-400"> roams free</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            From the karst lagoons of Raja Ampat to the dragons of Komodo, each
            destination offers a world unto itself — accessible only by sea,
            experienced only by the few.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {destinations.map((dest, i) => (
            <a
              key={dest.name}
              href="#"
              className={`group relative block aspect-[16/10] overflow-hidden reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/20 to-transparent transition-opacity duration-500 group-hover:from-ocean-950/95" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-coral-300">
                  {dest.region}
                </p>
                <h3 className="font-serif text-3xl font-medium text-white md:text-4xl">
                  {dest.name}
                </h3>
                <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-white/70 transition-all duration-500 max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100">
                  {dest.description}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-coral-300">
                    Discover
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-coral-300 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Border accent */}
              <div className="absolute inset-4 border border-white/0 transition-all duration-500 group-hover:border-white/20" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
