import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ArabBridge Machinery — معدات أوروبية موثقة إلى العالم العربي',
  description:
    'طبقة طلب وتنفيذ مُدارة لاستيراد المعدات الأوروبية المستعملة: فحص مستقل، تحقق امتثال، ضمان مصرفي، وتخليص جمركي.',
  keywords: [
    'استيراد معدات',
    'معدات أوروبية',
    'جرارات مستعملة',
    'حفارات مستعملة',
    'ضمان مصرفي',
    'DEKRA',
    'SGS',
    'ArabBridge',
  ],
  openGraph: {
    title: 'ArabBridge Machinery — معدات أوروبية موثقة',
    description:
      'من الطلب إلى الاستلام: نفحص، نوثّق، نتحقق من الامتثال، ونحمي دفعك عبر ضمان مصرفي محلي.',
    type: 'website',
    locale: 'ar_AR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} font-sans`}>{children}</body>
    </html>
  );
}
