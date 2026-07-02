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
    <section ref={ref} id="memory-engine" className="relative bg-parchment-100 py-24 md:py-32 lg:py-40">
      {/* Subtle texture */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-parchment-200/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400">
            {memoryEngine.eyebrow}
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-700 md:text-4xl lg:text-5xl">
            {memoryEngine.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            {memoryEngine.subtitle}
          </p>
        </div>

        {/* Steps visualization - archive cards */}
        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {memoryEngine.steps.map((step, i) => (
              <div key={step.number} className="group relative">
                {/* Step card - like an archive folder */}
                <div className="relative bg-parchment-50/80 border border-parchment-300/60 p-8 transition-all duration-500 hover:bg-parchment-50 hover:border-parchment-400/60 frame-art">
                  {/* Number - elegant */}
                  <span className="font-serif text-4xl font-light text-sepia-300/80">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="mt-5 mb-6 flex h-11 w-11 items-center justify-center text-ink-400 transition-colors duration-300 group-hover:text-sepia-600">
                    {iconMap[step.icon]}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-base font-medium text-ink-700">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-400">{step.description}</p>
                </div>

                {/* Connector - subtle line */}
                {i < memoryEngine.steps.length - 1 && (
                  <div className="hidden absolute -right-3 top-1/2 z-10 h-px w-6 bg-parchment-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Moodboard section - polaroid style */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-ink-400">
            Stories in the making
          </p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {memoryEngine.moodboardImages.map((img, i) => (
              <div
                key={i}
                className="group relative bg-parchment-50 p-2 frame-art transition-all duration-300 hover:bg-parchment-100"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img}
                    alt={`Memory ${i + 1}`}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Paper edge effect */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-medium uppercase tracking-wider text-ink-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {i + 1}
                </div>
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
          <a href="#create" className="btn-primary">
            Begin Your Journey
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
