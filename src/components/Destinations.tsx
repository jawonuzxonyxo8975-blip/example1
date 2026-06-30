import { ArrowRight } from 'lucide-react';
import { valuePillars } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Destinations() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="who-we-are" className="bg-bone-50 py-24 md:py-32">
      <div className="container-gisi">
        {/* Who we are intro */}
        <div
          ref={ref}
          className={`mb-20 max-w-4xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">Who We Are</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
            Uniting excellence to
            <span className="italic text-gold-600"> build lasting value</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-ink-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* The Difference header */}
        <div id="difference" className="mb-12 scroll-mt-24">
          <p className="eyebrow mb-4">The Difference</p>
          <h3 className="font-serif text-3xl font-medium text-ink-900 md:text-4xl">
            Heritage, partnership, and ownership
          </h3>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {valuePillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`group flex flex-col overflow-hidden bg-white border border-ink-200/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink-900/10 reveal ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="font-serif text-3xl font-medium text-white">
                    {pillar.title}
                  </h4>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm font-light leading-relaxed text-ink-600">
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
