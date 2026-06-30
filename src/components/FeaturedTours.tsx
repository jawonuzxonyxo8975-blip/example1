import { ArrowRight } from 'lucide-react';
import { businessGroups } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function FeaturedTours() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="business-groups" className="bg-bone-100 py-24 md:py-32">
      <div className="container-gisi">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4">Business Groups</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
            A dynamic family of
            <span className="italic text-gold-600"> divisions</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-ink-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Business group cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {businessGroups.map((group, i) => (
            <article
              key={group.name}
              className={`group overflow-hidden bg-white border border-ink-200/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink-900/10 reveal ${
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
                {/* Project caption overlay — slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-white/90">
                    {group.projectCaption}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-3xl font-medium text-ink-900 md:text-4xl">
                  {group.name}
                </h3>
                <p className="mt-4 text-base font-light leading-relaxed text-ink-600">
                  {group.description}
                </p>
                <a href={group.link} className="link-arrow mt-6">
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
