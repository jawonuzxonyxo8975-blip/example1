import { useEffect, useState } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'How It Works', href: '#memory-engine' },
  { label: 'What We Create', href: '#categories' },
  { label: 'Stories', href: '#community' },
  { label: 'About', href: '#philosophy' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bone-50/95 backdrop-blur-md py-4 shadow-sm shadow-ink-900/5'
          : 'bg-gradient-to-b from-ink-950/50 via-ink-950/20 to-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Heart
              size={24}
              strokeWidth={1.5}
              className={`transition-colors duration-500 ${scrolled ? 'text-gold-600' : 'text-gold-300'}`}
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-serif font-light tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-ink-900' : 'text-white'
                }`}
              >
                SoulPortraits
              </span>
              <span
                className={`text-[8px] font-medium uppercase tracking-[0.3em] transition-colors duration-500 ${
                  scrolled ? 'text-ink-400' : 'text-white/50'
                }`}
              >
                Memories become art
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-ink-600 hover:text-gold-600'
                    : 'text-white/80 hover:text-gold-300'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#sign-in"
              className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? 'text-ink-600 hover:text-gold-600' : 'text-white/80 hover:text-gold-300'
              }`}
            >
              Sign In
            </a>
            <a
              href="#create"
              className={`inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                scrolled
                  ? 'bg-ink-900 text-white hover:bg-ink-800'
                  : 'bg-white text-ink-900 hover:bg-gold-100'
              }`}
            >
              Start Your Story
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`transition-colors duration-500 lg:hidden ${
              scrolled ? 'text-ink-900' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-bone-50/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100 shadow-lg shadow-ink-900/10' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex animate-slide-down items-center justify-between border-b border-ink-200/60 py-4 text-sm font-semibold uppercase tracking-widest text-ink-700 transition-colors hover:text-gold-600"
              style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
            >
              {item.label}
              <ChevronDown size={16} className="text-ink-300" />
            </a>
          ))}
          <div className="mt-6 space-y-3">
            <a
              href="#sign-in"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-3 text-center text-sm font-semibold uppercase tracking-widest text-ink-600"
            >
              Sign In
            </a>
            <a
              href="#create"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-ink-900 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-ink-800"
            >
              Start Your Story
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
