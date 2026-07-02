import { Heart, Instagram, Facebook } from 'lucide-react';
import { footerContent } from '../data/content';

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: <Instagram size={14} strokeWidth={1.5} />,
  Pinterest: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.81-2.425.854 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.994.499 1.805 1.48 1.805 1.778 0 3.144-1.874 3.144-4.58 0-2.394-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.78.745 2.28a.3.3 0 01.077.318c-.076.315-.246.994-.28 1.135-.042.177-.14.214-.325.13-1.215-.564-1.974-2.336-1.974-3.76 0-3.058 2.22-5.862 6.396-5.862 3.355 0 5.965 2.392 5.965 5.589 0 3.335-2.103 6.02-5.021 6.02-.98 0-1.9-.51-2.217-1.113l-.605 2.302c-.218.84-.804 1.893-1.196 2.535.9.277 1.854.428 2.844.428 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  ),
  Facebook: <Facebook size={14} strokeWidth={1.5} />,
};

export function Footer() {
  return (
    <footer className="bg-ink-900 text-parchment-200">
      {/* Top section with newsletter */}
      <div className="relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-[350px] w-[500px] rounded-full bg-sepia-700/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          {/* Newsletter */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-sepia-400">
              Stay Connected
            </p>
            <h3 className="mt-4 font-serif text-2xl font-light text-white md:text-3xl">
              Stories worth preserving
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Join our community and receive thoughtful reflections on memory, art, and the stories that shape us.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/35 focus:border-sepia-400/50 focus:outline-none"
              />
              <button
                type="submit"
                className="border border-sepia-400/50 bg-sepia-500/20 px-8 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-sepia-200 transition-all duration-300 hover:bg-sepia-500/30"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/5" />

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <Heart size={18} strokeWidth={1.5} className="text-sepia-400" />
              <div className="flex flex-col">
                <span className="text-lg font-serif font-light tracking-wide text-white">
                  {footerContent.brand.name}
                </span>
                <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-white/30">
                  {footerContent.brand.tagline}
                </span>
              </div>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/40">
              {footerContent.brand.description}
            </p>

            {/* Social links */}
            <div className="mt-5 flex gap-2">
              {footerContent.social.map((network) => (
                <a
                  key={network}
                  href="#"
                  aria-label={network}
                  className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-sepia-400/40 hover:text-sepia-300"
                >
                  {socialIcons[network]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerContent.links.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-sepia-400">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 transition-colors duration-300 hover:text-white/70"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="font-serif text-sm italic text-white/30">
              {footerContent.copyright}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-white/30">
              <a href="#" className="transition-colors duration-300 hover:text-white/60">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-white/60">
                Terms of Service
              </a>
              <a href="#" className="transition-colors duration-300 hover:text-white/60">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
