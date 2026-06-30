import { ArrowRight } from 'lucide-react';
import { valuePillars } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Destinations() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="who-we-are" className="bg-ink-950 py-24 md:py-32">
      <div className="container-gisi">
        {/* Who we are intro */}
        <div
          ref={ref}
          className={`mb-20 max-w-4xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Uniting successful companies to
            <span className="italic text-gold-400"> build long-term value</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-ink-200">
            GISI unites successful companies in construction services, project
            management, and engineering consulting to build long-term value
            together. With access to greater opportunities, innovation, and
            capital, our partner companies collaborate across a thriving
            ecosystem that's built to better serve our clients, strengthen our
            careers, and enrich our communities.
          </p>
        </div>

        {/* The GISI Difference header */}
        <div id="difference" className="mb-12 scroll-mt-24">
          <p className="eyebrow mb-4">The GISI Difference</p>
          <h3 className="font-serif text-3xl font-medium text-white md:text-4xl">
            Legacy, collaboration, and employee ownership
          </h3>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`group flex flex-col overflow-hidden bg-ink-900 border border-white/5 transition-all duration-500 hover:border-gold-400/20 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="font-serif text-3xl font-medium text-white">
                    {pillar.title}
                  </h4>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm font-light leading-relaxed text-ink-200">
                  {pillar.description}
                </p>
                <a href={pillar.link} className="link-arrow mt-5">
                  {pillar.linkLabel}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
