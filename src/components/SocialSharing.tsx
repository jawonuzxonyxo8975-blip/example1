import { Share2, Heart, Bookmark, Users, ArrowRight } from 'lucide-react';
import { socialFeatures } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, React.ReactNode> = {
  share: <Share2 strokeWidth={1.5} />,
  heart: <Heart strokeWidth={1.5} />,
  bookmark: <Bookmark strokeWidth={1.5} />,
};

const reactionIconMap: Record<string, React.ReactNode> = {
  heart: <Heart strokeWidth={1.5} />,
  'flower-2': <span className="text-sm">&#10048;</span>,
  bookmark: <Bookmark strokeWidth={1.5} />,
  users: <Users strokeWidth={1.5} />,
};

export function SocialSharing() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink-950 py-32 md:py-40">
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gold-600/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-400">
            {socialFeatures.title}
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl">
            Your story deserves to be seen
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
            {socialFeatures.subtitle}
          </p>
        </div>

        {/* Features */}
        <div
          className={`mt-16 grid gap-8 transition-all duration-1000 delay-200 md:grid-cols-3 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {socialFeatures.features.map((feature, i) => (
            <div
              key={i}
              className="group relative border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold-600/30 hover:bg-white/[0.04]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold-600/30 text-gold-400 transition-all duration-300 group-hover:bg-gold-600/10">
                {iconMap[feature.icon]}
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-medium text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Reaction types showcase */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-bone-400">
            More than just likes
          </p>

          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 md:gap-6">
            {socialFeatures.reactionTypes.map((reaction, i) => (
              <button
                key={i}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 transition-all duration-300 hover:border-gold-600/40 hover:bg-gold-600/10"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:border-gold-400 group-hover:text-gold-400">
                  {reactionIconMap[reaction.icon]}
                </span>
                <div className="text-left">
                  <span className="block text-sm font-medium text-white">{reaction.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/40">
                    {reaction.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Memory page mockup */}
        <div
          className={`mt-20 transition-all duration-1000 delay-400 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-gold-600/20" />

            <div className="relative bg-gradient-to-br from-bone-900 to-ink-950 p-8 md:p-12">
              {/* Demo memory page header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-500">
                    Memory Page
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">
                    The Day That Changed Everything
                  </h3>
                  <p className="mt-2 text-sm text-white/50">
                    Sarah & Michael &middot; Wedding Portrait &middot; May 2024
                  </p>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-gold-400 hover:text-gold-400">
                  <Share2 size={18} />
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-gold-400">847</span>
                  <span className="text-xs text-white/40">touched hearts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-gold-400">234</span>
                  <span className="text-xs text-white/40">remembered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl text-gold-400">89</span>
                  <span className="text-xs text-white/40">saved</span>
                </div>
              </div>

              {/* Sample comments */}
              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-sm text-white/60">
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
          <a
            href="#create"
            className="inline-flex items-center gap-3 bg-gold-400 px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-950 transition-all duration-300 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30"
          >
            Create Your Memory Page
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
