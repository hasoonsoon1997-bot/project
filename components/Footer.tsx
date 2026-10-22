'use client';

import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { useScrollTo } from '@/lib/FormContext';

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative overflow-hidden bg-navy-dark pt-16 pb-8 text-white">
      <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden />

      <div className="container-x relative">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber text-navy-dark">
                <span className="text-lg font-extrabold leading-none">AB</span>
              </span>
              <span className="text-base font-bold text-white">{config.brand}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {content.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
              {content.footer.linksTitle}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {content.nav.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-white/70 transition-colors hover:text-amber"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-amber">
              {content.footer.contactTitle}
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-amber"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-amber">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span dir="ltr">{config.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/80 transition-colors hover:text-amber"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-amber">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span dir="ltr">{config.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-amber">
                  <MapPin className="h-4 w-4" />
                </span>
                أوروبا · العالم العربي
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs leading-relaxed text-white/50">{content.footer.note}</p>
          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-white/40">{content.footer.copyright}</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-amber"
              aria-label="العودة للأعلى"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
