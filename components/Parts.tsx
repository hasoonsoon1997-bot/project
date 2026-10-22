'use client';

import {
  Cpu,
  Settings2,
  Radar,
  MonitorSmartphone,
  Lightbulb,
  Fuel,
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';

const ICONS = [Cpu, Settings2, Radar, MonitorSmartphone, Lightbulb, Fuel];

export default function Parts() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="parts" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            {t.parts.title}
          </span>
          <h2 className="section-title mt-4">{t.parts.title}</h2>
          <p className="section-sub">{t.parts.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 md:gap-6">
          {t.parts.cards.map((card, i) => {
            const Icon = ICONS[i] ?? Cpu;
            return (
              <div
                key={card.title}
                className="reveal group relative flex gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-xl"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-navy">{card.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
