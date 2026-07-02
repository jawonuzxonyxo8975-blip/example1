import { ArrowUpRight } from 'lucide-react';
import { portraitCategories } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function Categories() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative bg-parchment-50 py-24 md:py-32 lg:py-40">
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
            Choose by the relationship you want to honor, not by product type.
          </p>
        </div>
      </div>

      {/* Editorial gallery spread - asymmetric, magazine-style */}
      <div
        className={`mt-16 transition-all duration-1000 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Top row - wide editorial spread */}
        <div className="grid lg:grid-cols-12 gap-0">
          {/* First feature - Couple & Wedding - large left */}
          <CategorySpread
            category={portraitCategories[0]}
            layout="feature-left"
          />

          {/* Vertical stack right */}
          <div className="lg:col-span-4 grid grid-rows-2">
            <CategorySpread
              category={portraitCategories[2]}
              layout="stack-top"
            />
            <CategorySpread
              category={portraitCategories[4]}
              layout="stack-bottom"
            />
          </div>
        </div>

        {/* Middle row - horizontal duo */}
        <div className="grid md:grid-cols-2 gap-0">
          <CategorySpread
            category={portraitCategories[1]}
            layout="half"
          />
          <CategorySpread
            category={portraitCategories[3]}
            layout="half"
          />
        </div>

        {/* Bottom - Old Photo Revival - full width accent */}
        <div className="mt-0">
          <CategorySpread
            category={portraitCategories[5]}
            layout="full-accent"
          />
        </div>
      </div>
    </section>
  );
}

interface CategorySpreadProps {
  category: (typeof portraitCategories)[0];
  layout: 'feature-left' | 'stack-top' | 'stack-bottom' | 'half' | 'full-accent';
}

function CategorySpread({ category, layout }: CategorySpreadProps) {
  const { ref, visible } = useReveal();

  const layoutStyles = {
    'feature-left': 'lg:col-span-8 aspect-[16/9] lg:aspect-[16/10]',
    'stack-top': 'aspect-[4/3] border-b border-parchment-200/50',
    'stack-bottom': 'aspect-[4/3]',
    'half': 'aspect-square md:aspect-[4/3] border-r border-b md:border-b-0 md:border-r border-parchment-200/50',
    'full-accent': 'aspect-[21/9]',
  };

  const textStyles = {
    'feature-left': 'bottom-10 left-10 right-10',
    'stack-top': 'bottom-5 left-5 right-5',
    'stack-bottom': 'bottom-5 left-5 right-5',
    'half': 'bottom-6 left-6 right-6',
    'full-accent': 'bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl text-center px-6',
  };

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-parchment-100 transition-all duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${layoutStyles[layout]}`}
    >
      {/* Image with warm treatment */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-parchment-950/80 via-parchment-950/25 to-transparent" />
        {/* Subtle sepia warmth on hover */}
        <div className="absolute inset-0 bg-sepia-400/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* Content overlay */}
      <div className={`absolute ${textStyles[layout]} z-10`}>
        {/* Category label - museum wall text style */}
        <span className="inline-block mb-2 text-[9px] font-medium uppercase tracking-[0.2em] text-sepia-200/80">
          {category.stories}
        </span>

        {/* Emotion - italic serif */}
        <p className="font-serif text-sm italic text-sepia-100/90">
          {category.emotion}
        </p>

        {/* Title */}
        <h3
          className={`font-serif font-light text-white transition-all duration-500 ${
            layout === 'feature-left' ? 'text-3xl md:text-4xl mt-1' :
            layout === 'full-accent' ? 'text-2xl md:text-3xl mt-1' : 'text-xl md:text-2xl mt-0.5'
          }`}
        >
          {category.title}
        </h3>

        {/* Description - reveals on hover */}
        <p
          className={`text-sm leading-relaxed text-white/60 max-w-md transition-all duration-500 ${
            layout === 'feature-left' || layout === 'full-accent' ? 'mt-3' : 'mt-2'
          } opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0`}
        >
          {category.description}
        </p>

        {/* View link */}
        <button
          className={`inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-sepia-200 transition-all duration-500 ${
            layout === 'feature-left' || layout === 'full-accent' ? 'mt-5' : 'mt-4'
          } opacity-0 group-hover:opacity-100`}
        >
          Explore
          <ArrowUpRight size={12} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>

      {/* Frame accent - subtle border */}
      <div className="absolute inset-0 border border-white/5 transition-colors duration-500 group-hover:border-white/15" />
    </div>
  );
}
