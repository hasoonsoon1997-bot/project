'use client';

import * as React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { config } from '@/lib/config';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.592 4.462 1.713 6.4L3.2 28.8l6.55-1.717a12.74 12.74 0 0 0 6.254 1.617h.005c7.06 0 12.8-5.74 12.8-12.8s-5.745-12.8-12.805-12.8zm0 23.04h-.004a10.6 10.6 0 0 1-5.402-1.478l-.387-.23-4.014 1.053 1.072-3.913-.253-.402a10.58 10.58 0 0 1-1.62-5.63c0-5.86 4.77-10.63 10.634-10.63 2.84 0 5.51 1.107 7.517 3.115a10.55 10.55 0 0 1 3.113 7.52c0 5.86-4.77 10.63-10.63 10.63zm5.83-7.95c-.32-.16-1.89-.933-2.182-1.04-.292-.107-.504-.16-.716.16-.213.32-.823 1.04-1.01 1.253-.186.213-.372.24-.692.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.716-1.725-.98-2.36-.258-.617-.52-.534-.716-.544l-.61-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.095-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.46 4.823.762.329 1.357.525 1.82.671.765.243 1.46.208 2.01.126.613-.092 1.89-.773 2.156-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const { t } = useLang();
  const [showTip, setShowTip] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={config.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
      onFocus={() => setShowTip(true)}
      onBlur={() => setShowTip(false)}
      className={`fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      aria-label={t.whatsapp.tooltip}
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span
        className={`pointer-events-none absolute end-16 whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-sm font-medium text-white shadow-lg transition-all duration-200 ${
          showTip ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {t.whatsapp.tooltip}
        <span
          className="absolute top-1/2 -end-1 h-2 w-2 -translate-y-1/2 rotate-45 bg-navy"
          aria-hidden
        />
      </span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
    </a>
  );
}
