import { Heart, Flower2, Bookmark, Users, Quote } from 'lucide-react';
import { communityStories } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const reactionIcons: Record<string, React.ReactNode> = {
  touched: <Heart strokeWidth={1.5} size={14} />,
  remembered: <Flower2 strokeWidth={1.5} size={14} />,
  saved: <Bookmark strokeWidth={1.5} size={14} />,
  together: <Users strokeWidth={1.5} size={14} />,
};

export function CommunityStories() {
  const { ref, visible } = useReveal();

  const featuredStories = communityStories.filter((s) => s.featured);
  const regularStories = communityStories.filter((s) => !s.featured);

  return (
    <section ref={ref} className="relative bg-bone-50 py-32 md:py-40">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-32 h-[500px] w-[500px] rounded-full bg-gold-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-600">
            Stories From Our Community
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-ink-800 md:text-5xl">
            Where memories live on
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-500">
            Every portrait tells a story. Here are some of the stories that have found a permanent home in our community.
          </p>
        </div>

        {/* Featured stories - large editorial cards */}
        <div
          className={`mt-16 transition-all duration-1000 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredStories.map((story) => (
              <FeaturedStoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* Smaller story cards */}
        <div
          className={`mt-12 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid gap-6 md:grid-cols-2">
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
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-600 transition-colors duration-300 hover:text-gold-700"
          >
            Explore all stories
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
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
      className={`group relative overflow-hidden bg-white transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img
            src={story.image}
            alt={story.author}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 md:bg-gradient-to-r md:from-transparent md:to-white" />

          {/* Quote icon */}
          <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-600 backdrop-blur-sm">
            <Quote size={18} strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">
            {story.category}
          </span>

          <blockquote className="mt-4 font-serif text-xl leading-relaxed text-ink-700">
            "{story.quote}"
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-medium text-ink-800">{story.author}</span>
            <span className="text-ink-300">&middot;</span>
            <span className="text-sm text-ink-500">{story.location}</span>
          </div>

          {/* Reactions */}
          <div className="mt-6 flex items-center gap-6 border-t border-bone-200 pt-6">
            <ReactionBadge icon={reactionIcons.touched} count={story.reactions.touched} label="Touched" />
            <ReactionBadge icon={reactionIcons.remembered} count={story.reactions.remembered} label="Remember" />
            <ReactionBadge icon={reactionIcons.saved} count={story.reactions.saved} label="Saved" />
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
      className={`group flex gap-6 overflow-hidden bg-white p-6 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Image */}
      <div className="relative h-32 w-24 flex-shrink-0 overflow-hidden">
        <img
          src={story.image}
          alt={story.author}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-600">
          {story.category}
        </span>

        <blockquote className="mt-2 line-clamp-2 font-serif text-base leading-relaxed text-ink-700">
          "{story.quote}"
        </blockquote>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-ink-500">
            <span className="font-medium text-ink-700">{story.author}</span>
            <span className="text-ink-300">&middot;</span>
            <span>{story.location}</span>
          </div>

          <div className="flex items-center gap-1 text-ink-400">
            <Heart size={14} strokeWidth={1.5} />
            <span className="text-xs">{story.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReactionBadgeProps {
  icon: React.ReactNode;
  count: number;
  label: string;
}

function ReactionBadge({ icon, count, label }: ReactionBadgeProps) {
  return (
    <button className="group/badge flex items-center gap-2 text-ink-400 transition-colors duration-300 hover:text-gold-600">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-current/20 transition-all duration-300 group-hover/badge:bg-gold-50 group-hover/badge:border-gold-600/40">
        {icon}
      </span>
      <span className="text-xs font-medium">{count}</span>
    </button>
  );
}
