'use client';

import * as React from 'react';

type Sector = 'البناء' | 'الزراعة' | '';

interface FormContextValue {
  preselectedSector: Sector;
  setPreselectedSector: (s: Sector) => void;
  requestSector: (s: 'البناء' | 'الزراعة') => void;
}

const FormContext = React.createContext<FormContextValue | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [preselectedSector, setPreselectedSector] = React.useState<Sector>('');

  const requestSector = React.useCallback((s: 'البناء' | 'الزراعة') => {
    setPreselectedSector(s);
    const el = document.getElementById('request');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const value = React.useMemo(
    () => ({ preselectedSector, setPreselectedSector, requestSector }),
    [preselectedSector, requestSector]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export function useFormContext() {
  const ctx = React.useContext(FormContext);
  if (!ctx) throw new Error('useFormContext must be used within FormProvider');
  return ctx;
}

export function useScrollTo() {
  return React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
