import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-arabic)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#0B1E33',
          light: '#1A3A5C',
          dark: '#061425',
        },
        amber: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#F59E0B',
        },
        sand: {
          DEFAULT: '#F5F0E8',
          dark: '#EBE4D6',
          light: '#FAF7F1',
        },
        ink: '#1F2937',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
      boxShadow: {
        'card': '0 1px 2px 0 rgba(11, 30, 51, 0.04), 0 4px 16px -2px rgba(11, 30, 51, 0.06)',
        'card-hover': '0 4px 8px -2px rgba(11, 30, 51, 0.08), 0 12px 28px -4px rgba(11, 30, 51, 0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
