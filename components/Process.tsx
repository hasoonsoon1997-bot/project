'use client';

import {
  ClipboardList,
  Search,
  FileCheck2,
  Banknote,
  Ship,
} from 'lucide-react';
import { content } from '@/lib/content';
import { useReveal } from '@/lib/useReveal';

const ICONS = [ClipboardList, Search, FileCheck2, Banknote, Ship];

export default function Process() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="process" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{content.process.eyebrow}</span>
          <h2 className="section-title">{content.process.title}</h2>
          <p className="section-sub">{content.process.subtitle}</p>
        </div>

        <div className="relative mt-14 md:mt-20">
          {/* Horizontal connector (desktop) */}
          <div
            className="absolute top-7 hidden h-px w-full bg-gradient-to-l from-amber/0 via-amber/30 to-amber/0 lg:block"
            aria-hidden
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {content.process.steps.map((step, i) => {
              const Icon = ICONS[i] ?? ClipboardList;
              return (
                <li
                  key={step.title}
                  className="reveal relative flex flex-col items-center text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-white text-amber shadow-card">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -top-2 -end-2 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-xs font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{step.desc}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
