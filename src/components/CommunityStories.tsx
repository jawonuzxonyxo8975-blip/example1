import { Heart, Flower2, Bookmark, Quote } from 'lucide-react';
import { communityStories } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export function CommunityStories() {
  const { ref, visible } = useReveal();

  const featuredStories = communityStories.filter((s) => s.featured);
  const regularStories = communityStories.filter((s) => !s.featured);

  return (
    <section ref={ref} id="community" className="relative bg-parchment-100 py-24 md:py-32 lg:py-40">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-parchment-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-400">
            Stories From Our Community
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-ink-700 md:text-4xl lg:text-5xl">
            Where memories live on
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-400">
            Every portrait tells a story. These are some of the stories that have found a permanent home.
          </p>
        </div>

        {/* Featured stories - archive style cards */}
        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredStories.map((story) => (
              <FeaturedStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* Smaller story cards */}
        <div
          className={`mt-6 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-5 md:grid-cols-2">
            {regularStories.map((story) => (
              <SmallStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#community"
            className="btn-gallery"
          >
            Explore all stories
            <span className="ml-1 text-ink-300">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

interface StoryCardProps {
  story: (typeof communityStories)[0];
}

function FeaturedStoryCard({ story }: StoryCardProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-parchment-50/90 border border-parchment-300/50 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid md:grid-cols-2">
        {/* Image - like a framed photo */}
        <div className="relative p-3 md:p-4">
          <div className="relative overflow-hidden">
            <img
              src={story.image}
              alt={story.author}
              className="aspect-[4/3] w-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
            />
          </div>
          {/* Quote icon */}
          <div className="absolute bottom-7 left-7 flex h-9 w-9 items-center justify-center border border-parchment-300 bg-parchment-50/90 text-ink-400 backdrop-blur-sm md:bottom-8 md:left-8">
            <Quote size={16} strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-6 md:p-8">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-400">
            {story.category}
          </span>

          <blockquote className="mt-4 font-serif text-lg leading-relaxed text-ink-600 md:text-xl">
            "{story.quote}"
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-medium text-ink-700">{story.author}</span>
            <span className="text-parchment-300">&middot;</span>
            <span className="text-sm text-ink-400">{story.location}</span>
          </div>

          {/* Reactions - emotional tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-parchment-200 pt-6">
            <ReactionTag icon={<Heart strokeWidth={1.5} size={12} />} count={story.reactions.touched} label="Touched" />
            <ReactionTag icon={<Flower2 strokeWidth={1.5} size={12} />} count={story.reactions.remembered} label="Remember" />
            <ReactionTag icon={<Bookmark strokeWidth={1.5} size={12} />} count={story.reactions.saved} label="Saved" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallStoryCard({ story }: StoryCardProps) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`group flex gap-5 overflow-hidden bg-parchment-50/80 border border-parchment-300/40 p-5 transition-all duration-1000 hover:bg-parchment-50 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-28 w-20 flex-shrink-0 overflow-hidden">
        <img
          src={story.image}
          alt={story.author}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-ink-400">
          {story.category}
        </span>

        <blockquote className="mt-2 line-clamp-2 font-serif text-base leading-relaxed text-ink-600">
          "{story.quote}"
        </blockquote>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-ink-400">
            <span className="font-medium text-ink-600">{story.author}</span>
            <span className="text-parchment-300">&middot;</span>
            <span>{story.location}</span>
          </div>

          <div className="flex items-center gap-1 text-ink-300">
            <Heart size={12} strokeWidth={1.5} />
            <span className="text-xs">{story.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReactionTagProps {
  icon: React.ReactNode;
  count: number;
  label: string;
}

function ReactionTag({ icon, count, label }: ReactionTagProps) {
  return (
    <button className="tag-emotional">
      {icon}
      <span>{count}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
