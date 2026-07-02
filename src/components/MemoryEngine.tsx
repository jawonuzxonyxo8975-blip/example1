import { Upload, MessageCircle, Sparkles, Palette, ArrowRight } from 'lucide-react';
import { memoryEngine } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, React.ReactNode> = {
  upload: <Upload strokeWidth={1.5} />,
  message: <MessageCircle strokeWidth={1.5} />,
  sparkles: <Sparkles strokeWidth={1.5} />,
  palette: <Palette strokeWidth={1.5} />,
};

export function MemoryEngine() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-ink-950 py-32 md:py-40">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-bone-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
            {memoryEngine.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            {memoryEngine.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            {memoryEngine.subtitle}
          </p>
        </div>

        {/* Steps visualization - editorial style */}
        <div
          className={`mt-20 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {memoryEngine.steps.map((step, i) => (
              <div key={step.number} className="group relative">
                {/* Connector line */}
                {i < memoryEngine.steps.length - 1 && (
                  <div className="absolute -right-4 top-12 hidden z-10 lg:block">
                    <ArrowRight
                      size={20}
                      strokeWidth={1}
                      className="text-gold-600/30 transition-colors duration-300 group-hover:text-gold-600"
                    />
                  </div>
                )}

                {/* Step card */}
                <div className="relative">
                  {/* Number */}
                  <span className="font-serif text-6xl font-light text-gold-600/20 transition-all duration-300 group-hover:text-gold-600/40">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mt-4 mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-600/30 text-gold-400 transition-all duration-300 group-hover:bg-gold-600/10 group-hover:border-gold-600/50">
                    {iconMap[step.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-lg font-medium text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moodboard section */}
        <div
          className={`mt-24 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-bone-400">
            Stories in the making
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {memoryEngine.moodboardImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <img
                  src={img}
                  alt={`Memory ${i + 1}`}
                  className="h-full w-full object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                {/* Film grain effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#create"
            className="inline-flex items-center gap-3 border border-gold-400/50 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-400 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
          >
            Begin Your Journey
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
