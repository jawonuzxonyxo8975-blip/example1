import { Share2, Heart, Bookmark, Users, ArrowRight } from 'lucide-react';
import { socialFeatures } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, React.ReactNode> = {
  share: <Share2 strokeWidth={1.5} />,
  heart: <Heart strokeWidth={1.5} />,
  bookmark: <Bookmark strokeWidth={1.5} />,
};

const reactionIconMap: Record<string, React.ReactNode> = {
  heart: <Heart strokeWidth={1.5} size={14} />,
  'flower-2': <span className="text-base">&#10048;</span>,
  bookmark: <Bookmark strokeWidth={1.5} size={14} />,
  users: <Users strokeWidth={1.5} size={14} />,
};

export function SocialSharing() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink-900 py-24 md:py-32 lg:py-40">
      {/* Subtle ambient */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sepia-700/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-sepia-300">
            {socialFeatures.title}
          </p>
          <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl lg:text-5xl">
            Your story deserves to be seen
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/50">
            {socialFeatures.subtitle}
          </p>
        </div>

        {/* Features */}
        <div
          className={`mt-16 grid gap-5 transition-all duration-1000 delay-200 md:grid-cols-3 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {socialFeatures.features.map((feature, i) => (
            <div
              key={i}
              className="group relative border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="mb-5 text-sepia-300/70 transition-colors duration-300 group-hover:text-sepia-300">
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <h3 className="mb-2 text-base font-medium text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Reaction types showcase - emotional tags */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
            More than just likes
          </p>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {socialFeatures.reactionTypes.map((reaction, i) => (
              <button
                key={i}
                className="flex items-center gap-2.5 border border-white/15 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-sepia-400/40 hover:bg-sepia-700/10"
              >
                <span className="text-white/50 transition-colors duration-300 group-hover:text-sepia-300">
                  {reactionIconMap[reaction.icon]}
                </span>
                <div className="text-left">
                  <span className="block text-sm font-medium text-white/80">{reaction.name}</span>
                  <span className="text-[9px] uppercase tracking-wider text-white/30">
                    {reaction.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Memory page mockup - archive style */}
        <div
          className={`mt-20 transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Frame effect */}
            <div className="absolute -inset-3 border border-white/10 bg-ink-800" />

            <div className="relative border border-white/15 bg-ink-850 p-8 md:p-10">
              {/* Demo memory page header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-sepia-400">
                    Memory Page
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-white md:text-2xl">
                    The Day That Changed Everything
                  </h3>
                  <p className="mt-2 text-sm text-white/40">
                    Sarah & Michael &middot; Wedding Portrait &middot; May 2024
                  </p>
                </div>

                <button className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/40 transition-all duration-300 hover:border-sepia-400/50 hover:text-sepia-300">
                  <Share2 size={16} />
                </button>
              </div>

              {/* Stats - elegant */}
              <div className="mt-8 flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-sepia-400">847</span>
                  <span className="text-xs text-white/30">touched hearts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-sepia-400">234</span>
                  <span className="text-xs text-white/30">remembered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-sepia-400">89</span>
                  <span className="text-xs text-white/30">saved</span>
                </div>
              </div>

              {/* Sample comments */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/50 italic">
                  "This brought tears to my eyes. Remember when we used to dream about this day? Love you both." &mdash; Emma
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a href="#create" className="inline-flex items-center gap-2 border border-sepia-400/50 bg-sepia-500/20 px-8 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-sepia-200 transition-all duration-500 hover:bg-sepia-500/30 hover:border-sepia-400">
            Create Your Memory Page
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
