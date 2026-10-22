'use client';

import { Send, ClipboardCheck, CreditCard, PackageCheck } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';

const ICONS = [Send, ClipboardCheck, CreditCard, PackageCheck];

export default function HowItWorks() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="how" ref={ref} className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #F5A524, transparent)' }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            {t.how.title}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            {t.how.title}
          </h2>
          <p className="mt-3 text-base text-slate-300 sm:text-lg">{t.how.subtitle}</p>
        </div>

        <div className="relative mt-14 md:mt-20">
          {/* Connector line */}
          <div
            className="absolute top-9 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {t.how.steps.map((step, i) => {
              const Icon = ICONS[i] ?? Send;
              return (
                <div
                  key={step.title}
                  className="reveal relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-navy-light text-gold shadow-lg shadow-navy-dark/40">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -top-2 -end-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy-dark ring-4 ring-navy">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
