import { Users, Map, Compass, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const journeyStyles = [
  {
    icon: Users,
    title: 'Small Group Tours',
    description:
      'Artfully planned, exquisitely curated, expertly escorted small group tours to the world\u2019s most culturally invigorating destinations.',
    image: 'https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Map,
    title: 'Tailor-Made Journeys',
    description:
      'Private itineraries crafted around your interests, pace, and style \u2014 the freedom to explore on your own terms with expert support.',
    image: 'https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    icon: Compass,
    title: 'Expert-Led Explorations',
    description:
      'Specialist-led journeys accompanied by historians, naturalists, and local experts who bring each destination to vivid life.',
    image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export function JourneyStyles() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="journeys" className="bg-ink-900 py-24 md:py-32">
      <div className="container-lux">
        <div
          ref={ref}
          className={`mb-16 max-w-2xl reveal ${visible ? 'is-visible' : ''}`}
        >
          <p className="eyebrow mb-4 text-gold-400">Flexible 2026 Deposits</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Choose how you travel
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-white/70">
            Cox &amp; Kings helps curious travellers go beyond the obvious to discover the
            world more deeply, through enriching and immersive journeys built on a heritage
            of trust and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {journeyStyles.map((style, i) => {
            const Icon = style.icon;
            return (
              <a
                key={style.title}
                href="#"
                className={`group relative block aspect-[3/4] overflow-hidden reveal ${
                  visible ? 'is-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <img
                  src={style.image}
                  alt={style.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-900/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <Icon
                    className="mb-4 text-gold-300 transition-transform duration-500 group-hover:scale-110"
                    size={32}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-serif text-2xl font-medium text-white md:text-3xl">
                    {style.title}
                  </h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-white/70">
                    {style.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
                    Explore
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
