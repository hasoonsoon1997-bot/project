'use client';

import * as React from 'react';
import { Loader2, CheckCircle2, Send, AlertCircle } from 'lucide-react';
import { content } from '@/lib/content';
import { config } from '@/lib/config';
import { useFormContext } from '@/lib/FormContext';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';

interface FormState {
  name: string;
  phone: string;
  email: string;
  country: string;
  sector: string;
  machineType: string;
  year: string;
  budget: string;
  notes: string;
}

const EMPTY: FormState = {
  name: '',
  phone: '',
  email: '',
  country: '',
  sector: '',
  machineType: '',
  year: '',
  budget: '',
  notes: '',
};

export default function RequestForm() {
  const { preselectedSector } = useFormContext();
  const ref = useReveal<HTMLElement>();

  const [form, setForm] = React.useState<FormState>(EMPTY);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  // Apply sector pre-selection from sector cards
  React.useEffect(() => {
    if (preselectedSector) {
      setForm((prev) => ({ ...prev, sector: preselectedSector }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.sector;
        return next;
      });
    }
  }, [preselectedSector]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = content.form.errors.name;
    if (!form.phone.trim()) e.phone = content.form.errors.phone;
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) e.phone = content.form.errors.phone;
    if (!form.country) e.country = content.form.errors.country;
    if (!form.sector) e.sector = content.form.errors.sector;
    if (!form.machineType.trim()) e.machineType = content.form.errors.machineType;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'بريد إلكتروني غير صحيح';
    }
    if (form.year && !/^\d{4}$/.test(form.year)) {
      e.year = 'سنة غير صحيحة';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setStatus('sending');
    // Simulated submission — no backend, no network call.
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setForm(EMPTY);
  };

  const inputBase = 'field-input';
  const inputError = 'border-red-400 focus:border-red-400 focus:ring-red-100';

  return (
    <section id="request" ref={ref} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{content.form.eyebrow}</span>
          <h2 className="section-title">{content.form.title}</h2>
          <p className="section-sub">{content.form.subtitle}</p>
        </div>

        <div className="reveal mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-card md:mt-14 md:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <p className="max-w-md text-lg font-bold text-navy">{content.form.success}</p>
              <button onClick={() => setStatus('idle')} className="btn-outline mt-2">
                {content.form.successAction}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={content.form.fields.name} error={errors.name} required>
                  <input
                    className={cn(inputBase, errors.name && inputError)}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={content.form.placeholders.name}
                  />
                </Field>

                <Field label={content.form.fields.phone} error={errors.phone} required>
                  <input
                    type="tel"
                    dir="ltr"
                    className={cn(inputBase, 'text-end', errors.phone && inputError)}
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder={content.form.placeholders.phone}
                  />
                </Field>
              </div>

              <Field label={content.form.fields.email} error={errors.email}>
                <input
                  type="email"
                  dir="ltr"
                  className={cn(inputBase, 'text-end', errors.email && inputError)}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder={content.form.placeholders.email}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={content.form.fields.country} error={errors.country} required>
                  <div className="relative">
                    <select
                      className={cn('field-select pe-9', errors.country && inputError)}
                      value={form.country}
                      onChange={(e) => update('country', e.target.value)}
                    >
                      <option value="">{content.form.selectDefault}</option>
                      {config.countries.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    <ChevronDownSmall />
                  </div>
                </Field>

                <Field label={content.form.fields.sector} error={errors.sector} required>
                  <div className="relative">
                    <select
                      className={cn('field-select pe-9', errors.sector && inputError)}
                      value={form.sector}
                      onChange={(e) => update('sector', e.target.value)}
                    >
                      <option value="">{content.form.selectDefault}</option>
                      {config.sectors.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDownSmall />
                  </div>
                </Field>
              </div>

              <Field label={content.form.fields.machineType} error={errors.machineType} required>
                <input
                  className={cn(inputBase, errors.machineType && inputError)}
                  value={form.machineType}
                  onChange={(e) => update('machineType', e.target.value)}
                  placeholder={content.form.placeholders.machineType}
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={content.form.fields.year} error={errors.year}>
                  <input
                    inputMode="numeric"
                    maxLength={4}
                    className={cn(inputBase, errors.year && inputError)}
                    value={form.year}
                    onChange={(e) => update('year', e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder={content.form.placeholders.year}
                  />
                </Field>

                <Field label={content.form.fields.budget}>
                  <div className="relative">
                    <input
                      inputMode="numeric"
                      dir="ltr"
                      className={cn(inputBase, 'text-end pe-14')}
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value.replace(/[^\d]/g, ''))}
                      placeholder={content.form.placeholders.budget}
                    />
                    <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-xs font-semibold text-slate-400">
                      EUR
                    </span>
                  </div>
                </Field>
              </div>

              <Field label={content.form.fields.notes}>
                <textarea
                  rows={3}
                  className="field-textarea"
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  placeholder={content.form.placeholders.notes}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {content.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 rtl:-scale-x-100" />
                    {content.form.submit}
                  </>
                )}
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
                <AlertCircle className="h-3.5 w-3.5" />
                لا نشارك بياناتك مع أي طرف ثالث.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div data-error={error ? 'true' : undefined}>
      <label className="field-label">
        {label}
        {required && <span className="me-1 text-amber-dark">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}

function ChevronDownSmall() {
  return (
    <span className="pointer-events-none absolute inset-y-0 end-3 flex items-center text-slate-400">
      <ChevronDown className="h-4 w-4" />
    </span>
  );
}
