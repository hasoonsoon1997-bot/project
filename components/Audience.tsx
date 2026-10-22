'use client';

import { Wrench, UserRound, Check } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';

export default function Audience() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  const cards = [
    {
      ...t.audience.card1,
      icon: Wrench,
      tone: 'navy' as const,
    },
    {
      ...t.audience.card2,
      icon: UserRound,
      tone: 'gold' as const,
    },
  ];

  return (
    <section id="services" ref={ref} className="bg-gray-50 py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="section-title">{t.audience.title}</h2>
          <p className="section-sub">{t.audience.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const isNavy = card.tone === 'navy';
            return (
              <div
                key={card.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${isNavy ? 'bg-navy' : 'bg-gold'}`}
                  aria-hidden
                />
                <div className="flex items-start gap-5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      isNavy ? 'bg-navy text-white' : 'bg-gold text-navy-dark'
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-navy md:text-2xl">
                        {card.title}
                      </h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          isNavy
                            ? 'bg-navy/10 text-navy'
                            : 'bg-gold/15 text-gold-dark'
                        }`}
                      >
                        {card.subtitle}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {card.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-slate-700">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              isNavy ? 'bg-navy/10 text-navy' : 'bg-gold/15 text-gold-dark'
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed sm:text-base">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
