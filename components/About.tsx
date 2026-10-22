'use client';

import { MapPin, Cpu, Zap } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';
import { config } from '@/lib/config';

const ICONS = [MapPin, Cpu, Zap];

export default function About() {
  const { t, brand } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy + info cards */}
          <div className="reveal">
            <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              {t.about.title}
            </span>
            <h2 className="section-title mt-4">{t.about.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.about.paragraph}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.about.cards.map((card, i) => {
                const Icon = ICONS[i] ?? MapPin;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-200 bg-gray-50 p-5 transition-colors hover:border-gold/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                      {card.title}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-navy">
                      {card.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: navy gradient logo card */}
          <div
            className="reveal relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-light to-navy-dark p-10 shadow-2xl"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
              style={{ background: 'radial-gradient(closest-side, #F5A524, transparent)' }}
              aria-hidden
            />
            <div className="relative flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/5 text-6xl font-bold text-gold ring-1 ring-white/10 backdrop-blur">
                P
              </div>
              <h3 className="mt-6 text-3xl font-bold text-white">{brand}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                {t.about.logoCard}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
                <MapPin className="h-3.5 w-3.5 text-gold" />
                {config.location.en} · {config.location.ar}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
