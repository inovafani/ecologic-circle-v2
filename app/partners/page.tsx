import type { Metadata } from 'next';
import Link from 'next/link';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Our Partners — Ecologic Circle',
  description:
    'From development institutions and universities to operating partners and global rice standards — the organisations that back every part of the loop.',
};

const wrap = { maxWidth: 'var(--eco-maxw)', margin: '0 auto', padding: '0 40px' };

const PARTNERS = [
  { name: 'Urmatt', img: '/assets/partners/Urmatt-Logo.png' },
  { name: 'Hilltribe Organics', img: '/assets/partners/hilltribe-organics.png' },
  { name: 'GIZ', img: '/assets/partners/giz.png' },
  { name: 'ASEAN', img: '/assets/partners/asean.png' },
  { name: 'Mae Fah Luang University', img: '/assets/partners/mae.jpeg' },
  { name: 'Sustainable Rice Platform', img: '/assets/partners/srp.jpg' },
];

export default function PartnersPage() {
  return (
    <>
      <EcoNav active="partners" />
      <main style={{ overflowX: 'clip' }}>
        <PageHero
          title="Built with partners"
          sub="From development institutions and universities to operating partners and global rice standards, every part of the loop is backed by organisations that have done the work for decades."
        />

        {/* ===== PARTNER LOGOS ===== */}
        <section style={{ background: '#F6FCEE', padding: '10px 0 100px' }}>
          <Reveal
            stagger
            className="eco-3col"
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
            }}
          >
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(47,95,72,.1)',
                  borderRadius: 20,
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '28px 36px',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ maxWidth: '100%', maxHeight: 88, width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
            ))}
          </Reveal>
        </section>

        {/* ===== CTA BAND ===== */}
        <section style={{ background: '#e8eae1', padding: '96px 0 110px' }}>
          <div style={wrap}>
            <Reveal
              style={{
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
                minHeight: 460,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 'clamp(40px, 6vw, 80px)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/seeds_hands.jpg"
                alt="Hands planting seeds in healthy soil"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(31,62,48,.35) 0%, rgba(31,62,48,.7) 100%)',
                }}
              />
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, maxWidth: 760 }}>
                <h2 className="eco-h" style={{ margin: 0, fontSize: 'clamp(30px, 4.4vw, 48px)', color: '#fff' }}>
                  Join us in building healthier soils.
                </h2>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', maxWidth: 620 }}>
                  Burning crop residue destroys the living soil beneath it and deepens
                  reliance on chemical inputs. Let&apos;s grow the alternative — together.
                </p>
                <Link
                  href="/contact"
                  style={{
                    marginTop: 8,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    height: 54,
                    padding: '0 30px',
                    borderRadius: 999,
                    background: '#9fd95a',
                    color: '#234436',
                    fontSize: 15.5,
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 14px 30px -12px rgba(0,0,0,.4)',
                  }}
                >
                  Connect with us today <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
