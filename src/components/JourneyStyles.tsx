import { BedDouble, UtensilsCrossed, Waves, ArrowRight } from 'lucide-react';
import { yachtFeatures } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, typeof BedDouble> = {
  BedDouble,
  UtensilsCrossed,
  Waves,
};

export function JourneyStyles() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="yacht" className="relative overflow-hidden bg-ocean-900 py-24 md:py-32">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950 via-ocean-900 to-ocean-950" />

      <div className="container-lux relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">A spacious, stable yacht of steel</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Built for the
            <span className="italic text-coral-400"> open ocean</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            A 50-metre expedition vessel refitted for bespoke luxury, combining
            go-anywhere capability with the comfort of a private floating lodge.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {yachtFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || BedDouble;
            return (
              <article
                key={feature.title}
                className={`group relative flex flex-col overflow-hidden bg-ocean-950/60 reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center border border-white/30 bg-ocean-950/40 backdrop-blur-sm transition-all duration-500 group-hover:border-coral-400 group-hover:bg-coral-500/20">
                    <Icon size={20} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-white/65">
                    {feature.description}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral-400 transition-colors hover:text-coral-300"
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
