import { ArrowRight, Quote } from 'lucide-react';
import { footprintProjects, leaders } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Heritage() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { ref: ref2, visible: visible2 } = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Project Footprint */}
      <section id="projects" className="bg-steel-950 py-24 md:py-32">
        <div className="container-corp">
          <div
            ref={ref}
            className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
          >
            <p className="eyebrow mb-4">The Footprint</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              Projects built to
              <span className="italic text-amber-400"> endure</span>
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-charcoal-200">
              Airports, dams, hospitals, universities, data centers. These
              projects must last for generations. Our partner companies work
              alongside clients to create infrastructure solutions that endure,
              adapt, and improve the lives of the people who depend on them.
            </p>
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {footprintProjects.map((project, i) => (
              <article
                key={project.title}
                className={`group relative aspect-[4/3] overflow-hidden reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/95 via-charcoal-950/20 to-transparent transition-opacity duration-500 group-hover:from-charcoal-950/98" />

                {/* Category tag */}
                <span className="absolute left-4 top-4 border border-white/20 bg-charcoal-950/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-sm">
                  {project.category}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-serif text-xl font-medium text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light text-white/60">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Testimonials */}
      <section id="leaders" className="bg-charcoal-950 py-24 md:py-32">
        <div className="container-corp">
          <div
            ref={ref2}
            className={`mb-16 max-w-3xl reveal ${visible2 ? 'is-visible' : ''}`}
          >
            <p className="eyebrow mb-4">What Our Leaders Are Saying</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              Voices from across
              <span className="italic text-amber-400"> the enterprise</span>
            </h2>
          </div>

          {/* Leader cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {leaders.map((leader, i) => (
              <article
                key={leader.name}
                className={`group flex flex-col bg-charcoal-900 border border-white/5 p-8 transition-all duration-500 hover:border-amber-400/20 reveal ${
                  visible2 ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Quote size={32} strokeWidth={1.5} className="text-amber-400/60" />
                <p className="mt-5 flex-1 text-base font-light leading-relaxed text-charcoal-100">
                  "{leader.quote}"
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="h-14 w-14 overflow-hidden rounded-full">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-lg font-medium text-white">
                      {leader.name}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                      {leader.role}
                    </p>
                    <p className="text-xs font-light text-charcoal-300">
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
