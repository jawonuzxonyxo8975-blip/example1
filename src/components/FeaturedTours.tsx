import { ArrowRight } from 'lucide-react';
import { businessGroups } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function FeaturedTours() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="business-groups" className="bg-charcoal-950 py-24 md:py-32">
      <div className="container-corp">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">Business Groups</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            A dynamic family of
            <span className="italic text-amber-400"> companies</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-charcoal-200">
            Where our partners can work together to serve clients more powerfully.
            Today we are represented in two business groups.
          </p>
        </div>

        {/* Business group cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {businessGroups.map((group, i) => (
            <article
              key={group.name}
              className={`group relative overflow-hidden bg-charcoal-900 border border-white/5 transition-all duration-500 hover:border-amber-400/30 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={group.image}
                  alt={group.name}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-3xl font-medium text-white md:text-4xl">
                  {group.name}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-charcoal-200">
                  {group.description}
                </p>
                <a
                  href={group.link}
                  className="link-arrow mt-6"
                >
                  Explore {group.name}
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
