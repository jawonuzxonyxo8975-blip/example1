import { useEffect, useState } from 'react';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'The Difference', href: '#difference' },
  { label: 'Business Groups', href: '#business-groups' },
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
          ? 'bg-ink-950/95 backdrop-blur-md py-3 shadow-lg shadow-ink-950/50'
          : 'bg-gradient-to-b from-ink-950/60 via-ink-950/20 to-transparent py-6'
      }`}
    >
      <div className="container-gisi flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-white">
          <Building2 size={26} strokeWidth={2} className="text-gold-400" />
          <span className="text-2xl font-bold tracking-tight md:text-3xl">
            GISI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-widest text-white/85 transition-colors duration-300 hover:text-gold-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#contact"
            className="text-[11px] font-semibold uppercase tracking-widest text-white/85 transition-colors duration-300 hover:text-gold-400"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 border border-gold-400/50 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-gold-400 transition-all duration-300 hover:bg-gold-400 hover:text-ink-950"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-ink-950/98 backdrop-blur-md transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-gisi flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-3.5 text-sm font-semibold uppercase tracking-widest text-white/85 transition-colors hover:text-gold-400"
            >
              {item.label}
              <ChevronDown size={16} className="text-white/30" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold mt-5 w-full"
          >
            Partner With Us
          </a>
        </nav>
      </div>
    </header>
  );
}
