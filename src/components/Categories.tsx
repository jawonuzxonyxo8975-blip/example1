import { ArrowUpRight } from 'lucide-react';
import { portraitCategories } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-bone-100 py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-600">
            What We Create
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-800 md:text-5xl">
            Every story has a home
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            Choose by the relationship you want to honor, not by product type.
            Each portrait is a unique journey.
          </p>
        </div>

        {/* Categories grid - editorial asymmetric layout */}
        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First row - 2 large cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {portraitCategories.slice(0, 2).map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} featured />
            ))}
          </div>

          {/* Second row - 3 cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {portraitCategories.slice(2, 5).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>

          {/* Third row - 1 wide card */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      className={`group relative overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${featured ? 'aspect-[16/9]' : 'aspect-square'}`}
    >
      {/* Image */}
      <img
        src={category.image}
        alt={category.title}
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
      <div className="absolute inset-0 bg-ink-950/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        {/* Stories badge */}
        <span className="mb-4 inline-block w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm">
          {category.stories}
        </span>

        {/* Emotion tagline */}
        <p className="mb-2 font-serif text-sm italic text-gold-200/90">{category.emotion}</p>

        {/* Title */}
        <h3 className="text-2xl font-light md:text-3xl">{category.title}</h3>

        {/* Description - visible on hover */}
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {category.description}
        </p>

        {/* CTA */}
        <button className="mt-5 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
          Explore
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
