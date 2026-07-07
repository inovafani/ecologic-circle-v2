import type { Metadata } from 'next';
import './globals.css';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Our Team — Ecologic Circle',
  description:
    'Seasoned leaders, one shared vision. The team behind Ecologic Circle — turning rice straw into compostable packaging, tree-free pulp and organic fertiliser.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
