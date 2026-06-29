import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '1758', label: 'Founded' },
  { value: '265+', label: 'Years of Heritage' },
  { value: '120+', label: 'Destinations' },
  { value: '50k+', label: 'Travellers Each Year' },
];

export function Heritage() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="heritage" className="relative overflow-hidden bg-ink-950 py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      </div>

      <div className="container-lux relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-20 reveal ${
            visible ? 'is-visible' : ''
          }`}
        >
          {/* Left: text */}
          <div>
            <p className="eyebrow mb-4 text-gold-400">Trust &amp; Expertise</p>
            <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              A heritage of discovery
            </h2>
            <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-white/75">
              <p>
                Cox &amp; Kings is the world's oldest travel company. Since 1758, we
                have helped curious travellers go beyond the obvious to discover the world
                more deeply.
              </p>
              <p>
                Our journeys are enriching and immersive, built on a heritage of trust and
                expertise. Every itinerary is artfully planned, exquisitely curated, and
                expertly escorted.
              </p>
            </div>
            <a
              href="#about"
              className="mt-8 inline-flex items-center gap-2 border-b border-gold-400 pb-1 text-xs font-semibold uppercase tracking-widest text-gold-300 transition-colors hover:text-gold-200"
            >
              Our Story
            </a>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-white/10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-ink-950/60 p-8 text-center backdrop-blur-sm transition-colors hover:bg-ink-900/60 md:p-10"
              >
                <p className="font-serif text-4xl font-medium text-gold-300 md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
