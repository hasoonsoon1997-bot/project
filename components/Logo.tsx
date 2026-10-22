'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
  brand: string;
  className?: string;
}

const sizeMap = {
  sm: { box: 'h-8 w-8 text-base', text: 'text-base', gap: 'gap-2' },
  md: { box: 'h-10 w-10 text-lg', text: 'text-lg', gap: 'gap-2.5' },
  lg: { box: 'h-14 w-14 text-2xl', text: 'text-xl', gap: 'gap-3' },
  xl: { box: 'h-24 w-24 text-5xl', text: 'text-3xl', gap: 'gap-4' },
};

export default function Logo({
  size = 'md',
  showText = true,
  variant = 'light',
  brand,
  className,
}: LogoProps) {
  const s = sizeMap[size];
  return (
    <div className={cn('flex items-center', s.gap, className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-xl bg-navy shadow-md ring-1 ring-white/10',
          s.box
        )}
      >
        <span className="font-bold leading-none text-gold">P</span>
      </div>
      {showText && (
        <span
          className={cn(
            'font-bold tracking-tight',
            s.text,
            variant === 'light' ? 'text-white' : 'text-navy'
          )}
        >
          {brand}
        </span>
      )}
    </div>
  );
}
