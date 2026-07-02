import { brandPhilosophy } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Philosophy() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-bone-50 py-32 md:py-40">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gold-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-bone-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-600">
            {brandPhilosophy.eyebrow}
          </p>

          {/* Large editorial title */}
          <h2 className="max-w-3xl font-serif text-4xl font-light leading-tight text-ink-800 md:text-5xl lg:text-6xl">
            {brandPhilosophy.title}
          </h2>

          {/* Editorial layout with text and image */}
          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            {/* Text column */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                {brandPhilosophy.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-ink-600 md:text-lg"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Quote accent */}
              <blockquote className="mt-12 border-l-2 border-gold-400 pl-6">
                <p className="font-serif text-xl italic text-ink-700 md:text-2xl">
                  {brandPhilosophy.quote}
                </p>
              </blockquote>

              {/* Stat badge */}
              <div className="mt-12 inline-flex items-center gap-4">
                <span className="font-serif text-4xl font-light text-gold-600 md:text-5xl">
                  12,000+
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                  stories preserved<br />as art
                </span>
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={brandPhilosophy.image}
                  alt="Artist painting a portrait"
                  className="h-full w-full object-cover"
                />
                {/* Film grain overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bone-900/20 via-transparent to-transparent" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full border border-gold-300/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
