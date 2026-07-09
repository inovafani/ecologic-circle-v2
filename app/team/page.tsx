import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import PageHero from '@/components/PageHero';
import TeamGrid from '@/components/TeamGrid';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Our Team — Ecologic Circle',
  description:
    'The people behind the circle — seasoned leaders aligned around a shared vision for the circular economy.',
};

const wrap = {
  maxWidth: 'var(--eco-maxw)',
  margin: '0 auto',
  padding: '0 40px',
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

        {/* ===== CLOSING BANNER ===== */}
        <section style={{ background: '#F6FCEE', padding: '0 0 104px' }}>
          <div style={wrap}>
            <Reveal
              style={{
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
                padding: 'clamp(44px, 7vw, 88px) clamp(28px, 5vw, 68px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                isolation: 'isolate',
              }}
            >
              {/* background image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/straw-field.jpg"
                alt=""
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -2,
                }}
              />
              {/* green overlay for legibility */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: -1,
                  background:
                    'linear-gradient(105deg, rgba(31,62,48,.92) 0%, rgba(31,62,48,.82) 45%, rgba(47,95,72,.55) 100%)',
                }}
              />

              <h2
                className="eco-h"
                style={{
                  margin: 0,
                  fontSize: 'clamp(30px, 5vw, 50px)',
                  color: '#fff',
                  maxWidth: 760,
                  whiteSpace: 'pre-line',
                }}
              >
                {`Three decades of agriculture.
Built for this moment.`}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.82)',
                  maxWidth: 620,
                  whiteSpace: 'pre-line',
                }}
              >
                {`Led by the founder of one of the region's largest organic
                jasmine rice operations — a team spanning agriculture, food science,
                pulp, packaging and finance, all based in Thailand.`}
              </p>
            </Reveal>
          </div>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
