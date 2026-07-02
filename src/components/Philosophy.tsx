import { brandPhilosophy } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Philosophy() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-parchment-50 py-24 md:py-32 lg:py-40">
      {/* Subtle ambient glow - warm */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-[400px] w-[400px] rounded-full bg-sepia-100/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-parchment-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Eyebrow */}
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400">
            {brandPhilosophy.eyebrow}
          </p>

          {/* Large editorial title */}
          <h2 className="max-w-3xl font-serif text-3xl font-light leading-tight text-ink-700 md:text-4xl lg:text-5xl">
            {brandPhilosophy.title}
          </h2>

          {/* Decorative line */}
          <div className="divider mt-10 mb-0" />

          {/* Editorial layout with text and image */}
          <div className="mt-16 grid gap-16 lg:grid-cols-12">
            {/* Text column */}
            <div className="flex flex-col justify-center lg:col-span-5">
              <div className="space-y-5">
                {brandPhilosophy.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.8] text-ink-500"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Quote accent - like a museum wall text */}
              <blockquote className="mt-12 border-l border-sepia-300 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-ink-600 md:text-2xl">
                  {brandPhilosophy.quote}
                </p>
              </blockquote>
            </div>

            {/* Image column - gallery style */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Main image - with art frame effect */}
                <div className="relative overflow-hidden bg-parchment-100 p-3 frame-art">
                  <img
                    src={brandPhilosophy.image}
                    alt="Artist painting a portrait"
                    className="aspect-[5/6] w-full object-cover"
                  />
                  {/* Warm overlay */}
                  <div className="absolute inset-3 bg-gradient-to-t from-parchment-900/15 via-transparent to-transparent" />
                </div>

                {/* Floating label - like museum caption */}
                <div
                  className={`absolute -bottom-4 -right-4 bg-parchment-100/90 backdrop-blur-sm border border-parchment-300/60 px-6 py-4 transition-all duration-1000 delay-300 ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <span className="font-serif text-3xl font-light text-sepia-500">12,000+</span>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.15em] text-ink-400">
                    stories preserved as art
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
