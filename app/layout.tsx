import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Original Cars | Autoservis Partizánske', template: '%s' },
  description: 'Kompletný servis osobných aj úžitkových vozidiel v Partizánskom. Geometria 3D, pneuservis, klimatizácia, diagnostika, opravy prevodoviek a ďalšie služby.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="sk"><body>{children}</body></html>;
}
