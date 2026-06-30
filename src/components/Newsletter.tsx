import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export function Newsletter() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      {/* Background with parallax */}
      <div
        className="parallax absolute inset-0"
        style={{ transform: `translateY(${(scrollY - 2400) * 0.15}px)` }}
      >
        <img
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=2400"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink-950/80" />
      </div>

      <div
        ref={ref}
        className={`container-gisi relative z-10 max-w-3xl text-center reveal ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/50 text-gold-400 transition-all duration-500 hover:scale-110 hover:border-gold-400">
          <TrendingUp size={26} strokeWidth={1.5} />
        </div>
        <p className="eyebrow mb-4 !text-gold-400">A Greater Kind of Value</p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
          Pursuing a greater kind of
          <span className="italic text-gold-400"> value.</span>
        </h2>
        <p className="mt-6 text-lg font-light leading-relaxed text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a href="#" className="btn-gold">
            Learn More
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-ink-900"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
