import { Quote } from 'lucide-react';
import { footprintProjects, leaders } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Heritage() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { ref: ref2, visible: visible2 } = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Project Footprint */}
      <section id="projects" className="bg-bone-50 py-24 md:py-32">
        <div className="container-gisi">
          <div
            ref={ref}
            className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
          >
            <p className="eyebrow mb-4">The Footprint</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
              Projects built to
              <span className="italic text-gold-600"> endure</span>
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-ink-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {footprintProjects.map((project, i) => (
              <article
                key={project.title}
                className={`group relative aspect-[4/3] overflow-hidden shadow-sm reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                {/* Category tag — slides in from top */}
                <span className="absolute left-4 top-4 translate-y-0 border border-white/20 bg-ink-950/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold-300 backdrop-blur-sm transition-all duration-500 group-hover:bg-gold-400 group-hover:text-ink-950">
                  {project.category}
                </span>

                {/* Content — slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 max-h-0 overflow-hidden text-xs font-light text-white/70 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Testimonials */}
      <section id="leaders" className="bg-bone-100 py-24 md:py-32">
        <div className="container-gisi">
          <div
            ref={ref2}
            className={`mb-16 max-w-3xl reveal ${visible2 ? 'is-visible' : ''}`}
          >
            <p className="eyebrow mb-4">What Our Leaders Are Saying</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-ink-900 md:text-5xl lg:text-6xl">
              Voices from across
              <span className="italic text-gold-600"> the enterprise</span>
            </h2>
          </div>

          {/* Leader cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {leaders.map((leader, i) => (
              <article
                key={leader.name}
                className={`group flex flex-col bg-white border border-ink-200/50 p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-ink-900/10 reveal ${
                  visible2 ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Quote
                  size={32}
                  strokeWidth={1.5}
                  className="text-gold-400 transition-colors duration-500 group-hover:text-gold-500"
                />
                <p className="mt-5 flex-1 text-base font-light leading-relaxed text-ink-700">
                  &ldquo;{leader.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-ink-200/60 pt-6">
                  <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold-400/0 transition-all duration-500 group-hover:ring-gold-400/40">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-ink-900">
                      {leader.name}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-gold-600">
                      {leader.role}
                    </p>
                    <p className="text-xs font-light text-ink-500">
                      {leader.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
