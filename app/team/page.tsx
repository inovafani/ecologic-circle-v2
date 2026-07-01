import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import PageHero from '@/components/PageHero';
import TeamGrid from '@/components/TeamGrid';

export const metadata: Metadata = {
  title: 'Our Team — Ecologic Circle',
  description:
    'The people behind the circle — seasoned leaders aligned around a shared vision for the circular economy.',
};

export default function TeamPage() {
  return (
    <>
      <EcoNav active="team" />
      <main style={{ overflowX: 'clip' }}>
        <PageHero
          title="Our Team"
          titleSize={64}
          sub="Seasoned leaders aligned around a shared vision for circular economy and sustainable solutions."
        />
        <TeamGrid />
        <EcoFooter />
      </main>
    </>
  );
}
