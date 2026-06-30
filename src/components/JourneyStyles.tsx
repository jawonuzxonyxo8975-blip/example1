import { useReveal } from '../hooks/useReveal';
import { stats } from '../data/content';

export function JourneyStyles() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 md:py-32">
      {/* Subtle background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/95 to-ink-900" />
      </div>

      <div className="container-gisi relative z-10">
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 max-w-3xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4 !text-gold-400">A Global Scale</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Our numbers at a
            <span className="italic text-gold-400"> glance</span>
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-bone-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`group bg-ink-900 p-8 text-center transition-colors duration-500 hover:bg-ink-800 md:p-12 reveal ${
                visible ? 'is-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-serif text-5xl font-medium text-gold-400 transition-transform duration-500 group-hover:scale-110 md:text-6xl lg:text-7xl">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-widest text-white/80">
                {stat.label}
              </p>
              {stat.sublabel && (
                <p className="mt-1 text-[10px] font-light uppercase tracking-wider text-white/40">
                  {stat.sublabel}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs font-light italic text-white/40">
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
}
