import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  Destinations: ['Europe', 'Asia', 'Africa', 'The Americas', 'Middle East', 'Australasia'],
  'Holiday Types': ['Small Group Tours', 'Tailor-Made Holidays', 'River Cruises', 'City Breaks', 'Wildlife & Nature'],
  'About': ['Our Heritage', 'Why Travel With Us', 'Our Experts', 'Sustainability', 'Careers', 'Press'],
  'Support': ['Contact Us', 'Brochures', 'Booking Conditions', 'Travel Insurance', 'FAQs', 'Privacy Policy'],
};

const social = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Youtube, label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      {/* Top: links */}
      <div className="container-lux py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="font-serif text-3xl font-semibold">
              Cox <span className="text-gold-400">&</span> Kings
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/60">
              The world's oldest travel company, helping curious travellers discover
              the world more deeply since 1758.
            </p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center border border-white/20 text-white/70 transition-all duration-300 hover:border-gold-400 hover:text-gold-400"
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
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold-400">
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
            <span>ABTA</span>
            <span className="h-3 w-px bg-white/20" />
            <span>ATOL Protected</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Award Winning</span>
          </div>
          <p className="text-xs font-light text-white/40">
            &copy; 2026 Cox &amp; Kings Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
