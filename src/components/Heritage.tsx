import { useReveal } from '../hooks/useReveal';
import { yachtSpecs, pressFeatures } from '../data/content';

export function Heritage() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Yacht specs section */}
      <section id="about" className="relative overflow-hidden bg-ocean-900 py-24 md:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=2400"
            alt=""
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-950 via-ocean-950/90 to-ocean-950/50" />
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
              <p className="eyebrow mb-4">A family affair</p>
              <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
                An experienced crew,
                <span className="italic text-coral-400"> a second home</span>
              </h2>
              <div className="mt-6 space-y-5 text-lg font-light leading-relaxed text-white/75">
                <p>
                  Kudanil Explorer is more than a vessel — she is a family-run
                  expedition yacht where every crew member knows your name, your
                  preferences, and the secret corners of the archipelago.
                </p>
                <p>
                  Originally built as an offshore supply ship, she was refitted
                  into a go-anywhere luxury explorer, combining steel-hull
                  stability with the warmth of a private lodge on the water.
                </p>
              </div>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 border-b border-coral-400 pb-1 text-xs font-semibold uppercase tracking-widest text-coral-300 transition-colors hover:text-coral-200"
              >
                Our Story
              </a>
            </div>

            {/* Right: specs */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {yachtSpecs.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-ocean-950/70 p-8 text-center backdrop-blur-sm transition-colors hover:bg-ocean-900/70 md:p-10"
                >
                  <p className="font-serif text-4xl font-medium text-coral-300 md:text-5xl">
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

      {/* Press section */}
      <section id="press" className="bg-ocean-950 py-20 md:py-28">
        <div className="container-lux">
          <div className="mb-12 text-center">
            <p className="eyebrow mb-3">As Seen In</p>
            <h2 className="font-serif text-3xl font-medium text-white md:text-4xl">
              Featured in the world's finest publications
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {pressFeatures.map((press) => (
              <a
                key={press.publication}
                href="#"
                className="group flex flex-col gap-3 bg-ocean-950 p-8 transition-colors hover:bg-ocean-900"
              >
                <p className="font-serif text-xl font-medium text-coral-400">
                  {press.publication}
                </p>
                <p className="text-sm font-light leading-relaxed text-white/70 transition-colors group-hover:text-white/90">
                  {press.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
