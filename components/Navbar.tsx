'use client';

import * as React from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const { t, lang, setLang, brand } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-navy/10 bg-navy/95 shadow-lg shadow-navy/20 backdrop-blur'
          : 'bg-navy/70 backdrop-blur-sm'
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Parts Source home"
          className="transition-transform hover:scale-[1.02]"
        >
          <Logo brand={brand} size="md" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-white/15 px-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span>{t.nav.langToggle}</span>
          </button>

          <button
            onClick={() => handleNav('quote')}
            className="hidden rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-navy-dark shadow-sm transition-all hover:bg-gold-dark hover:text-white active:scale-95 sm:inline-flex"
          >
            {t.nav.cta}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-navy-dark/95 backdrop-blur transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {t.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-start text-base font-medium text-white/85 transition-colors hover:bg-white/10"
            >
              <span>{link.label}</span>
              <ChevronRight
                className="h-4 w-4 rotate-180 text-white/40 rtl:rotate-0"
                aria-hidden
              />
            </button>
          ))}
          <button
            onClick={() => handleNav('quote')}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-gold px-5 text-base font-semibold text-navy-dark transition-all hover:bg-gold-dark hover:text-white"
          >
            {t.nav.cta}
          </button>
        </nav>
      </div>
    </header>
  );
}

