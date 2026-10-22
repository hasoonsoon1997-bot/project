'use client';

import * as React from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { useScrollTo } from '@/lib/FormContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-navy/10 bg-white/95 shadow-sm backdrop-blur'
          : 'border-b border-transparent bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo (right side in RTL) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5"
          aria-label={config.brand}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-amber">
            <span className="text-lg font-extrabold leading-none">AB</span>
          </span>
          <span className="hidden text-base font-bold text-navy sm:block">
            {config.brand}
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {content.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-sand hover:text-navy"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleNav('request')}
            className="hidden rounded-lg bg-amber px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-amber-dark active:scale-95 sm:inline-flex"
          >
            {content.nav.cta}
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-navy transition-colors hover:bg-sand lg:hidden"
            aria-label="القائمة"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {content.nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="rounded-lg px-3 py-3 text-start text-base font-medium text-ink/80 transition-colors hover:bg-sand hover:text-navy"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('request')}
            className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-amber px-5 text-base font-bold text-white transition-all hover:bg-amber-dark"
          >
            {content.nav.cta}
            <ArrowLeft className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </header>
  );
}
