'use client';

import { MapPin, ShieldAlert } from 'lucide-react';
import { content } from '@/lib/content';
import { useReveal } from '@/lib/useReveal';

export default function Markets() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="markets" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{content.markets.eyebrow}</span>
          <h2 className="section-title">{content.markets.title}</h2>
          <p className="section-sub">{content.markets.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-16 md:gap-6">
          {content.markets.cards.map((card, i) => (
            <div
              key={card.country}
              className="reveal card-base p-6"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{card.country}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{card.rule}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-xl border border-amber/20 bg-amber/[0.04] p-4 text-start"
        >
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-dark" />
          <p className="text-sm leading-relaxed text-ink/75">{content.markets.note}</p>
        </div>
      </div>
    </section>
  );
}
