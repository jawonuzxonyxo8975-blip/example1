import { useEffect, useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

const navItems = [
  { label: 'Destinations', href: '#destinations' },
  { label: 'The Yacht', href: '#yacht' },
  { label: 'Expeditions', href: '#expeditions' },
  { label: 'Press', href: '#press' },
  { label: 'About', href: '#about' },
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
          ? 'bg-ocean-950/95 backdrop-blur-md py-3 shadow-lg shadow-ocean-950/30'
          : 'bg-gradient-to-b from-ocean-950/50 to-transparent py-5'
      }`}
    >
      <div className="container-lux flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white">
          <Anchor size={22} strokeWidth={1.5} className="text-coral-400" />
          <span className="font-serif text-2xl font-medium tracking-wide md:text-3xl">
            Kudanil <span className="text-coral-400">Explorer</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium uppercase tracking-widest text-white/85 transition-colors duration-300 hover:text-coral-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#enquire" className="btn-coral !py-2.5 !px-6">
            Enquire
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
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-ocean-950/98 backdrop-blur-md lg:hidden">
          <nav className="container-lux flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium uppercase tracking-widest text-white/85 transition-colors hover:text-coral-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#enquire"
              onClick={() => setMenuOpen(false)}
              className="btn-coral mt-4 w-full"
            >
              Enquire
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
