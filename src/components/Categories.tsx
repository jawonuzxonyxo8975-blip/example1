import { ArrowUpRight } from 'lucide-react';
import { portraitCategories } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} id="categories" className="relative bg-parchment-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400">
            What We Create
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-700 md:text-4xl lg:text-5xl">
            Every story has a home
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-400">
            Choose by the relationship you want to honor. Each portrait is a unique journey.
          </p>
        </div>

        {/* Categories grid - editorial asymmetric layout */}
        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First row - 2 large cards */}
          <div className="grid gap-5 lg:grid-cols-2">
            {portraitCategories.slice(0, 2).map((cat) => (
              <CategoryCard key={cat.id} category={cat} featured />
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {portraitCategories.slice(2, 5).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          {/* Third row - 1 wide card */}
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-1 lg:col-span-2 lg:col-start-2">
              <CategoryCard category={portraitCategories[5]} featured />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryCardProps {
  category: (typeof portraitCategories)[0];
  featured?: boolean;
}

function CategoryCard({ category, featured }: CategoryCardProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-parchment-100 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}
    >
      {/* Frame wrapper */}
      <div className="absolute inset-0 p-2">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-parchment-950/70 via-parchment-950/20 to-transparent" />
          <div className="absolute inset-0 bg-sepia-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      {/* Gallery label - floating */}
      <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
        {/* Stories badge */}
        <span className="mb-3 inline-block rounded-sm border border-white/20 bg-parchment-50/80 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-ink-500 backdrop-blur-sm">
          {category.stories}
        </span>

        {/* Emotion tagline */}
        <p className="font-serif text-sm italic text-sepia-200">{category.emotion}</p>

        {/* Title */}
        <h3 className="mt-1 text-xl font-light text-white md:text-2xl">{category.title}</h3>

        {/* Description - visible on hover */}
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {category.description}
        </p>

        {/* CTA - subtle */}
        <button className="mt-4 inline-flex w-fit items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-sepia-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
          Explore
          <ArrowUpRight size={12} />
        </button>
      </div>
    </div>
  );
}
