'use client';

import * as React from 'react';
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/utils';

type CustomerType = 'workshop' | 'individual';

interface FormState {
  customerType: CustomerType;
  name: string;
  whatsapp: string;
  city: string;
  country: string;
  email: string;
  vin: string;
  carModel: string;
  carYear: string;
  part: string;
  notes: string;
}

const VIN_REGEX = /^[A-HJ-NPR-Z0-9]{17}$/;
const EMPTY: FormState = {
  customerType: 'workshop',
  name: '',
  whatsapp: '',
  city: '',
  country: '',
  email: '',
  vin: '',
  carModel: '',
  carYear: '',
  part: '',
  notes: '',
};

export default function RFQForm() {
  const { t, lang } = useLang();
  const ref = useReveal<HTMLElement>();

  const [form, setForm] = React.useState<FormState>(EMPTY);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleVinChange = (raw: string) => {
    const cleaned = raw
      .toUpperCase()
      .replace(/[^A-HJ-NPR-Z0-9]/g, '')
      .slice(0, 17);
    update('vin', cleaned);
  };

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t.form.required;
    if (!form.whatsapp.trim()) e.whatsapp = t.form.required;
    if (!form.vin.trim()) e.vin = t.form.required;
    else if (!VIN_REGEX.test(form.vin)) e.vin = t.form.invalidVin;
    if (!form.city.trim()) e.city = t.form.required;
    if (!form.country.trim()) e.country = t.form.required;
    if (!form.carModel.trim()) e.carModel = t.form.required;
    if (!form.carYear.trim()) e.carYear = t.form.required;
    else if (!/^\d{4}$/.test(form.carYear)) e.carYear = t.form.invalidYear;
    if (!form.part.trim()) e.part = t.form.required;
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
    try {
      const res = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('request_failed');
      setStatus('success');
      setForm(EMPTY);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const inputBase = 'field-input';
  const inputError = 'border-red-400 focus:border-red-400 focus:ring-red-100';

  return (
    <section id="quote" ref={ref} className="bg-gray-50 py-20 md:py-28">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark">
            {t.form.title}
          </span>
          <h2 className="section-title mt-4">{t.form.title}</h2>
          <p className="section-sub">{t.form.subtitle}</p>
        </div>

        <div className="reveal mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mt-14 md:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <p className="max-w-md text-lg font-medium text-navy">{t.form.success}</p>
              <button
                onClick={() => setStatus('idle')}
                className="btn-outline mt-2"
              >
                ← {t.form.submit}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              {/* Customer type */}
              <div>
                <label className="field-label">{t.form.customerType}</label>
                <div className="grid gap-3 sm:grid-cols-2">
                  {([
                    { value: 'workshop', label: t.form.customerWorkshop },
                    { value: 'individual', label: t.form.customerIndividual },
                  ] as const).map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update('customerType', opt.value)}
                      className={cn(
                        'flex items-center gap-3 rounded-xl border px-4 py-3 text-start text-sm font-medium transition-all',
                        form.customerType === opt.value
                          ? 'border-gold bg-gold/10 text-navy ring-2 ring-gold/30'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                      )}
                    >
                      <span
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full border-2',
                          form.customerType === opt.value
                            ? 'border-gold bg-gold text-navy-dark'
                            : 'border-slate-300'
                        )}
                      >
                        {form.customerType === opt.value && (
                          <span className="h-2 w-2 rounded-full bg-navy-dark" />
                        )}
                      </span>
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={t.form.name} error={errors.name} required>
                  <input
                    className={cn(inputBase, errors.name && inputError)}
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder={lang === 'ar' ? 'ورشة الخليج / أحمد' : 'Al-Khaleej Garage / Ahmed'}
                  />
                </Field>

                <Field label={t.form.whatsapp} error={errors.whatsapp} required>
                  <input
                    type="tel"
                    dir="ltr"
                    className={cn(inputBase, 'text-start', errors.whatsapp && inputError)}
                    value={form.whatsapp}
                    onChange={(e) => update('whatsapp', e.target.value)}
                    placeholder="+966 5x xxx xxxx"
                  />
                </Field>

                <Field label={t.form.city} error={errors.city} required>
                  <input
                    className={cn(inputBase, errors.city && inputError)}
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                  />
                </Field>

                <Field label={t.form.country} error={errors.country} required>
                  <input
                    className={cn(inputBase, errors.country && inputError)}
                    value={form.country}
                    onChange={(e) => update('country', e.target.value)}
                  />
                </Field>

                <Field label={t.form.email}>
                  <input
                    type="email"
                    dir="ltr"
                    className={cn(inputBase, 'text-start')}
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </Field>

                <Field label={t.form.carModel} error={errors.carModel} required>
                  <input
                    className={cn(inputBase, errors.carModel && inputError)}
                    value={form.carModel}
                    onChange={(e) => update('carModel', e.target.value)}
                    placeholder={lang === 'ar' ? 'مثل: BMW 520d 2018' : 'e.g. BMW 520d 2018'}
                  />
                </Field>

                <Field label={t.form.carYear} error={errors.carYear} required>
                  <input
                    inputMode="numeric"
                    maxLength={4}
                    className={cn(inputBase, errors.carYear && inputError)}
                    value={form.carYear}
                    onChange={(e) => update('carYear', e.target.value.replace(/\D/g, '').slice(0, 4))}
                    placeholder="2018"
                  />
                </Field>

                <Field label={t.form.part} error={errors.part} required>
                  <input
                    className={cn(inputBase, errors.part && inputError)}
                    value={form.part}
                    onChange={(e) => update('part', e.target.value)}
                  />
                </Field>
              </div>

              {/* VIN */}
              <Field label={t.form.vin} error={errors.vin} required help={t.form.vinHelp}>
                <input
                  dir="ltr"
                  inputMode="text"
                  maxLength={17}
                  className={cn(
                    inputBase,
                  'font-mono text-start text-base tracking-widest',
                    errors.vin && inputError
                  )}
                  value={form.vin}
                  onChange={(e) => handleVinChange(e.target.value)}
                  placeholder="WBAxxxxxxxxxxxxx"
                />
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{form.vin.length}/17</span>
                </div>
              </Field>

              {/* Notes */}
              <Field label={t.form.notes}>
                <textarea
                  rows={3}
                  className="field-textarea"
                  value={form.notes}
                  onChange={(e) => update('notes', e.target.value)}
                />
              </Field>

              {status === 'error' && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>{t.form.error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 rtl:-scale-x-100" />
                    {t.form.submit}
                  </>
                )}
              </button>
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
  help,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  help?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-error={error ? 'true' : undefined}>
      <label className="field-label">
        {label}
        {required && <span className="ms-1 text-gold-dark">*</span>}
      </label>
      {children}
      {help && !error && (
        <p className="mt-1.5 text-xs text-slate-400">{help}</p>
      )}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
