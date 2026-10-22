'use client';

import {
  ShieldCheck,
  Plane,
  ReceiptText,
  Cpu,
  Headset,
  Truck,
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';

const ICONS = [ShieldCheck, Plane, ReceiptText, Cpu, Headset, Truck];

export default function WhyUs() {
  const { t } = useLang();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="why-us" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            {t.why.title}
          </span>
          <h2 className="section-title mt-4">{t.why.title}</h2>
          <p className="section-sub">{t.why.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16 md:gap-6">
          {t.why.cards.map((card, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <div
                key={card.title}
                className="reveal group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy/[0.02] to-gold/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
