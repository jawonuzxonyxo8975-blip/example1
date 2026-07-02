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
          ? 'bg-parchment-50/95 backdrop-blur-sm py-4 border-b border-parchment-200/60'
          : 'bg-gradient-to-b from-parchment-950/40 via-parchment-950/15 to-transparent py-6'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <Heart
              size={20}
              strokeWidth={1.5}
              className={`transition-colors duration-500 ${scrolled ? 'text-sepia-500' : 'text-sepia-200'}`}
            />
            <div className="flex flex-col">
              <span
                className={`text-lg font-serif font-light tracking-wide transition-colors duration-500 ${
                  scrolled ? 'text-ink-700' : 'text-white'
                }`}
              >
                SoulPortraits
              </span>
              <span
                className={`text-[8px] font-medium uppercase tracking-[0.3em] transition-colors duration-500 ${
                  scrolled ? 'text-ink-300' : 'text-white/40'
                }`}
              >
                Memories become art
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled
                    ? 'text-ink-500 hover:text-sepia-600'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="#sign-in"
              className={`text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                scrolled ? 'text-ink-500 hover:text-ink-700' : 'text-white/70 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <a
              href="#create"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.15em] transition-all duration-500"
              style={{
                background: scrolled ? 'rgba(212, 186, 156, 0.3)' : 'rgba(250, 248, 245, 0.95)',
                color: '#463f36',
              }}
            >
              Start Your Story
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={`transition-colors duration-500 lg:hidden ${
              scrolled ? 'text-ink-700' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-parchment-50/98 backdrop-blur-sm border-b border-parchment-200/40 transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100 shadow-sm' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex animate-slide-down items-center justify-between border-b border-parchment-200 py-4 text-sm font-medium uppercase tracking-widest text-ink-600 transition-colors hover:text-sepia-600"
              style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
            >
              {item.label}
              <ChevronDown size={14} className="text-ink-300" />
            </a>
          ))}
          <div className="mt-6 space-y-3">
            <a
              href="#sign-in"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-3 text-center text-sm font-medium uppercase tracking-widest text-ink-500"
            >
              Sign In
            </a>
            <a
              href="#create"
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full justify-center"
            >
              Start Your Story
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
