import { Facebook, Instagram, Twitter, Youtube, Anchor, MapPin, Mail, Phone } from 'lucide-react';

const footerLinks = {
  Destinations: ['Raja Ampat & Papua', 'Beyond Komodo', 'Banda & Spice Islands', 'Mentawai Islands', 'Forgotten Islands', 'Triton Bay'],
  Expeditions: ['Private Charters', 'Scheduled Voyages', 'Diving Expeditions', 'Surf Expeditions', 'Custom Itineraries'],
  'The Yacht': ['Suites & Cabins', 'Dining', 'Activities & Toys', 'The Crew', 'Specifications', 'Sustainability'],
  'About': ['Our Story', 'Journals', 'Press', 'FAQs', 'Contact', 'Careers'],
};

const social = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-ocean-950 text-white">
      {/* Top: links */}
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2">
              <Anchor size={24} strokeWidth={1.5} className="text-coral-400" />
              <span className="font-serif text-3xl font-medium tracking-wide">
                Kudanil <span className="text-coral-400">Explorer</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/60">
              A 50-metre luxury expedition yacht offering bespoke voyages across
              the remote islands of Indonesia.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5 text-sm font-light text-white/60">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-coral-400" />
                Jakarta, Indonesia
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-coral-400" />
                charter@kudanil.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-coral-400" />
                +62 21 555 0188
              </p>
            </div>

            <div className="mt-6 flex gap-3">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-coral-400 hover:text-coral-400"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-coral-400">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-white/60 transition-colors hover:text-white"
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

      {/* Awards bar */}
      <div className="border-t border-white/10">
        <div className="container-lux flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium uppercase tracking-widest text-white/40">
            <span>IMC Certified</span>
            <span className="h-3 w-px bg-white/20" />
            <span>RINA Class</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Indonesian Flagged</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Award Winning</span>
          </div>
          <p className="text-xs font-light text-white/40">
            &copy; 2026 Kudanil Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
