'use client';

import { HardHat, Wheat, Check, ArrowLeft } from 'lucide-react';
import { content } from '@/lib/content';
import { useFormContext, useScrollTo } from '@/lib/FormContext';
import { useReveal } from '@/lib/useReveal';

const ICONS: Record<string, React.ElementType> = {
  'البناء': HardHat,
  'الزراعة': Wheat,
};

export default function Sectors() {
  const { requestSector } = useFormContext();
  const scrollTo = useScrollTo();
  const ref = useReveal<HTMLElement>();

  return (
    <section id="sectors" ref={ref} className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{content.sectors.eyebrow}</span>
          <h2 className="section-title">{content.sectors.title}</h2>
          <p className="section-sub">{content.sectors.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {content.sectors.cards.map((card, i) => {
            const Icon = ICONS[card.sector] ?? HardHat;
            return (
              <div
                key={card.sector}
                className="reveal card-base group p-8"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy text-amber transition-colors group-hover:bg-amber group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{card.desc}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-navy ring-1 ring-slate-200"
                        >
                          <Check className="h-3 w-3 text-amber" strokeWidth={3} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => {
                        requestSector(card.sector as 'البناء' | 'الزراعة');
                        scrollTo('request');
                      }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-amber-dark transition-colors hover:text-amber"
                    >
                      {card.cta}
                      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    </button>
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
