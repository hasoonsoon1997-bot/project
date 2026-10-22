'use client';

import { ShieldCheck, Lock, Check } from 'lucide-react';
import { content } from '@/lib/content';
import { useReveal } from '@/lib/useReveal';

export default function Escrow() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="escrow" ref={ref} className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-grid-navy opacity-100" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-24 end-1/2 h-72 w-[560px] translate-x-1/2 rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #D97706, transparent)' }}
        aria-hidden
      />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="reveal text-center lg:text-start">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber">
              {content.escrow.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {content.escrow.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {content.escrow.subtitle}
            </p>

            <ul className="mt-8 space-y-4 text-start">
              {content.escrow.points.map((point, i) => (
                <li
                  key={i}
                  className="reveal flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm leading-relaxed text-slate-200">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: shield card */}
          <div
            className="reveal relative mx-auto w-full max-w-md"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-10 text-center backdrop-blur">
              <div
                className="pointer-events-none absolute -top-12 start-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-25 blur-2xl"
                style={{ background: 'radial-gradient(closest-side, #D97706, transparent)' }}
                aria-hidden
              />
              <div className="relative">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-amber/10 text-amber ring-1 ring-amber/30">
                  <ShieldCheck className="h-12 w-12" />
                </div>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold text-white">
                  <Lock className="h-3.5 w-3.5 text-amber" />
                  ضمان محمي حتى الاستلام
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {['بنك محلي', 'فحص مستقل', 'شحن موثق'].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-3 text-[11px] font-medium text-slate-300"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
