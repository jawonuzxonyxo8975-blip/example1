import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { tours } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function FeaturedTours() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="tours" className="bg-sand-50 py-24 md:py-32">
      <div className="container-lux">
        <div
          ref={ref}
          className={`mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          <div>
            <p className="eyebrow mb-4">Featured Journeys</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
              Curated for the curious
            </h2>
          </div>
          <a
            href="#"
            className="link-underline flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-700"
          >
            All Tours
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <article
              key={tour.title}
              className={`group flex flex-col bg-white shadow-sm transition-all duration-500 hover:shadow-xl reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-ink-800">
                  {tour.type}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gold-600">
                  <MapPin size={13} />
                  {tour.destination}
                </div>
                <h3 className="font-serif text-2xl font-medium leading-snug text-ink-900 transition-colors group-hover:text-gold-700">
                  {tour.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-sm font-light text-ink-500">
                  <Clock size={14} />
                  {tour.duration}
                </div>

                <div className="mt-auto flex items-end justify-between border-t border-ink-100 pt-5">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
                      From
                    </p>
                    <p className="font-serif text-2xl font-medium text-ink-900">
                      {tour.price}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-ink-700 transition-colors group-hover:text-gold-600">
                    Details
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
      </div>
    </section>
  );
}
