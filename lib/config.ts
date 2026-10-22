export const config = {
  brand: 'ArabBridge Machinery',
  email: 'info@arabbridge.com',
  phone: '+20 100 000 0000',
  countries: ['مصر', 'السعودية', 'الإمارات', 'العراق', 'أخرى'] as const,
  sectors: ['البناء', 'الزراعة'] as const,
} as const;

export type Country = (typeof config.countries)[number];
export type Sector = (typeof config.sectors)[number];
