import { Building2, MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const footerLinks = {
  Company: ['Who We Are', 'The GISI Model', 'Our History', 'Careers', 'News', 'Contact'],
  'Business Groups': ['STO Building Group', 'GISI Consulting Group', 'Partner Companies', 'Our Services', 'Markets'],
  'What We Do': ['Construction Services', 'Project Management', 'Engineering Consulting', 'Infrastructure', 'Sustainability'],
  Resources: ['Projects', 'Leaders', 'Investors', 'Legal Notice', 'Privacy Policy'],
};

const social = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Facebook, label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      {/* Top: links */}
      <div className="container-gisi py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3">
              <Building2 size={28} strokeWidth={2} className="text-gold-400" />
              <span className="text-3xl font-bold tracking-tight">GISI</span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ink-300">
              Uniting successful companies in construction services, project
              management, and engineering consulting to build long-term value
              together.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5 text-sm font-light text-ink-300">
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-400" />
                Global Headquarters
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-gold-400" />
                info@gisi.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-gold-400" />
                +1 (000) 555-0100
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
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-gold-400">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-ink-300 transition-colors duration-300 hover:text-white"
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
      <div className="border-t border-white/10">
        <div className="container-gisi flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-xs font-light text-ink-400">
            &copy; 2026 GISI. All rights reserved. Built for generations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-light text-ink-400">
            <a href="#" className="transition-colors duration-300 hover:text-white">Legal Notice</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Terms of Use</a>
            <a href="#" className="transition-colors duration-300 hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
