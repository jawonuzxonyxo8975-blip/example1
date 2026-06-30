import { ArrowRight, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function Newsletter() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/85" />
      </div>

      <div
        ref={ref}
        className={`container-gisi relative z-10 max-w-3xl text-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/50 text-gold-400">
          <TrendingUp size={26} strokeWidth={1.5} />
        </div>
        <p className="eyebrow mb-4">A Greater Kind of Value</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
          Pursuing a greater kind of
          <span className="italic text-gold-400"> value.</span>
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-white/80">
          From projects that serve communities to connections that grow careers,
          GISI's unique business model is designed to naturally create
          sustaining value — for our clients, our employees, our families, and
          our world at large.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a href="#" className="btn-gold">
            Learn More
            <ArrowRight size={16} />
          </a>
          <a href="#" className="btn-outline">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
