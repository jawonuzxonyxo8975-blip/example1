import { useEffect, useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

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
          ? 'bg-charcoal-950/95 backdrop-blur-md py-3 shadow-lg shadow-charcoal-950/40'
          : 'bg-gradient-to-b from-charcoal-950/60 to-transparent py-5'
      }`}
    >
      <div className="container-corp flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white">
          <Building2 size={24} strokeWidth={2} className="text-amber-400" />
          <span className="text-2xl font-bold tracking-tight md:text-3xl">
            GISI
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-white/85 transition-colors duration-300 hover:text-amber-400"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#contact" className="btn-amber !py-2.5 !px-6">
            Contact
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
        <div className="absolute inset-x-0 top-full bg-charcoal-950/98 backdrop-blur-md lg:hidden">
          <nav className="container-corp flex flex-col gap-1 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-widest text-white/85 transition-colors hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-amber mt-4 w-full"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
