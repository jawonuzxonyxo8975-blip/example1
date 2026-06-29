import { Clock, MapPin, ArrowRight, Compass } from 'lucide-react';
import { expeditions } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function FeaturedTours() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="expeditions" className="bg-ocean-950 py-24 md:py-32">
      <div className="container-lux">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Personalized itineraries</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              Every sailing is a
              <span className="italic text-coral-400"> private journey</span>
            </h2>
          </div>
          <a
            href="#"
            className="link-underline flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-coral-400"
          >
            All Expeditions
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expeditions.map((exp, i) => (
            <article
              key={exp.title}
              className={`group flex flex-col overflow-hidden bg-ocean-900/50 border border-white/5 transition-all duration-500 hover:border-coral-500/30 hover:bg-ocean-900 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 to-transparent" />
                <span className="absolute left-4 top-4 border border-white/20 bg-ocean-950/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  {exp.type}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-coral-400">
                  <MapPin size={13} />
                  {exp.destination}
                </div>
                <h3 className="font-serif text-2xl font-medium leading-snug text-white transition-colors group-hover:text-coral-300">
                  {exp.title}
                </h3>

                {/* Highlights */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.highlights.map((h) => (
                    <span
                      key={h}
                      className="border border-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/60"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm font-light text-white/50">
                  <Clock size={14} />
                  {exp.duration}
                </div>

                {/* Footer */}
                <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-white/40">
                      From
                    </p>
                    <p className="font-serif text-2xl font-medium text-white">
                      {exp.price}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-coral-400 transition-colors group-hover:text-coral-300">
                    Enquire
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <Compass size={32} strokeWidth={1.5} className="text-coral-400" />
          <p className="max-w-xl text-lg font-light leading-relaxed text-white/70">
            Can't find what you're looking for? Every itinerary is tailored to
            your group — tell us where you want to go.
          </p>
          <a href="#enquire" className="btn-coral mt-2">
            Plan Your Voyage
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
