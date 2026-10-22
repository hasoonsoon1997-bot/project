'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { content } from '@/lib/content';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const ref = useReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq" ref={ref} className="bg-sand py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{content.faq.eyebrow}</span>
          <h2 className="section-title">{content.faq.title}</h2>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl space-y-3">
          {content.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  'overflow-hidden rounded-xl border bg-white transition-colors',
                  isOpen ? 'border-amber/40 shadow-card' : 'border-slate-200 hover:border-slate-300'
                )}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start transition-colors hover:bg-sand/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy">{item.q}</span>
                  <span
                    className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300',
                      isOpen ? 'rotate-180 bg-amber text-white' : 'bg-sand text-navy'
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70">{item.a}</p>
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
