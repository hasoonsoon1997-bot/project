'use client';

import { ArrowLeft, ShieldCheck, Banknote, FileCheck2, ChevronLeft } from 'lucide-react';
import { content } from '@/lib/content';
import { useScrollTo } from '@/lib/FormContext';
import { useReveal } from '@/lib/useReveal';

const BADGE_ICONS = [ShieldCheck, Banknote, FileCheck2];

export default function Hero() {
  const scrollTo = useScrollTo();
  const ref = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-navy pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-navy opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 start-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #D97706, transparent)' }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-4 py-1.5 text-xs font-bold tracking-wide text-amber-light"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
            </span>
            {content.hero.eyebrow}
          </div>

          <h1
            className="reveal mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl"
            style={{ transitionDelay: '80ms' }}
          >
            {content.hero.title}
          </h1>

          <p
            className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            style={{ transitionDelay: '160ms' }}
          >
            {content.hero.subtitle}
          </p>

          <div
            className="reveal mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            style={{ transitionDelay: '240ms' }}
          >
            <button onClick={() => scrollTo('request')} className="btn-primary w-full sm:w-auto">
              {content.hero.ctaPrimary}
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={() => scrollTo('process')} className="btn-ghost-light w-full sm:w-auto">
              {content.hero.ctaSecondary}
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div
            className="reveal mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
            style={{ transitionDelay: '320ms' }}
          >
            {content.hero.badges.map((badge, i) => {
              const Icon = BADGE_ICONS[i] ?? ShieldCheck;
              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-start backdrop-blur transition-colors hover:border-amber/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-amber">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{badge.title}</div>
                    <div className="text-xs text-slate-400">{badge.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
