import { useEffect, useState } from 'react';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#who-we-are' },
  { label: 'The Difference', href: '#difference' },
  { label: 'Divisions', href: '#business-groups' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leaders', href: '#leaders' },
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
          ? 'bg-bone-50/95 backdrop-blur-md py-3 shadow-md shadow-ink-900/5'
          : 'bg-gradient-to-b from-ink-950/40 via-transparent to-transparent py-6'
      }`}
    >
      <div className="container-gisi flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <Building2
            size={26}
            strokeWidth={2}
            className={`transition-colors duration-500 ${scrolled ? 'text-gold-600' : 'text-gold-400'}`}
          />
          <span
            className={`text-2xl font-bold tracking-tight transition-colors duration-500 md:text-3xl ${
              scrolled ? 'text-ink-900' : 'text-white'
            }`}
          >
            LOGO
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group relative text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
                scrolled
                  ? 'text-ink-600 hover:text-gold-600'
                  : 'text-white/85 hover:text-gold-300'
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
            href="#contact"
            className={`text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${
              scrolled ? 'text-ink-600 hover:text-gold-600' : 'text-white/85 hover:text-gold-300'
            }`}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-gold-500 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gold-600 transition-all duration-300 hover:bg-gold-500 hover:text-bone-50"
          >
            Get Started
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

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-bone-50/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100 shadow-lg shadow-ink-900/10' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-gisi flex flex-col gap-1 py-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex animate-slide-down items-center justify-between border-b border-ink-200/60 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink-700 transition-colors hover:text-gold-600"
              style={{ animationDelay: `${i * 50}ms`, opacity: 0 }}
            >
              {item.label}
              <ChevronDown size={16} className="text-ink-300" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-5 w-full"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
