import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import Reveal from '@/components/Reveal';
import ImageSlot from '@/components/ImageSlot';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our Products — Ecologic Circle',
  description:
    "Five product lines made from rice straw that would otherwise be burned. The world's first USDA Organic certified pulp and packaging.",
};

const wrap = {
  maxWidth: 'var(--eco-maxw)',
  margin: '0 auto',
  padding: '0 40px',
};
const cardTitle = {
  margin: 0,
  fontSize: 20,
  fontWeight: 600,
  color: '#2f5f48',
};
const cardText = {
  margin: 0,
  fontSize: 14.5,
  lineHeight: 1.55,
  color: '#5b7a68',
};

type Product = {
  title: string;
  body: string;
  img?: string;
  fit?: 'cover' | 'contain';
  bg?: string;
  label?: string;
};

const PRODUCTS: Product[] = [
  {
    title: 'Compostable organic tableware',
    body: 'Clamshells, bowls and plates molded from rice-straw fibre. Sturdy, microwave-safe and home-compostable — a clean swap for polystyrene.',
    img: '/assets/products/compostable-packaging.png',
    fit: 'cover',
  },
  {
    title: 'Compostable organic fruit trays',
    body: 'Protective molded-fibre trays that cradle produce in transit and break down naturally after use.',
    img: '/assets/products/fruit-trays.png',
    fit: 'cover',
  },
  {
    title: 'Compostable organic egg trays',
    body: 'Organic-certified egg cartons carrying ~600,000 Hill Tribe eggs a month — the workhorse of our circular loop.',
    img: '/assets/products/egg-trays.png',
    fit: 'cover',
  },
  {
    title: 'Tree-free paper pulp',
    body: 'Chemical-free pulp made entirely from rice straw — no felled trees, no harsh bleaching, just clean fibre for paper and board.',
    img: '/assets/products/organic-pulp.png',
    fit: 'cover',
  },
  {
    title: 'Organic fertiliser',
    body: "Nutrient-rich organic fertiliser that returns straw's goodness to the paddy — closing the soil-health loop.",
    img: '/assets/products/organic-fertiliser.png',
    fit: 'cover',
  },
  {
    title: 'Biochar',
    body: 'Carbon-rich biochar that locks atmospheric carbon into the soil for centuries while boosting water retention and yield.',
    img: '/assets/products/biocholar.png',
    fit: 'cover',
  },
];

const CERTS = [
  { kind: 'usda' as const, name: 'USDA Organic' },
  { kind: 'eu' as const, name: 'EU Ecolabel' },
  { kind: 'compost' as const, name: 'Compostable EN 13432:2000' },
  { kind: 'bpi' as const, name: 'BPI Compostable' },
  { kind: 'fda' as const, name: 'FDA Food Contact' },
];

const MEDIA_H = 240;
const mediaBox = {
  height: MEDIA_H,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden' as const,
};

function CertBadge({
  kind,
}: {
  kind: 'usda' | 'eu' | 'compost' | 'bpi' | 'fda';
}) {
  if (kind === 'usda')
    return (
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: '50%',
          background: '#fff',
          border: '4px solid #5a3b22',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            fontSize: 15,
            fontWeight: 800,
            color: '#3f6b34',
            letterSpacing: 0.5,
          }}
        >
          USDA
        </span>
        <span
          style={{
            marginTop: 3,
            fontSize: 11,
            fontWeight: 800,
            color: '#fff',
            background: '#3f6b34',
            borderRadius: 3,
            padding: '2px 6px',
          }}
        >
          ORGANIC
        </span>
      </div>
    );
  if (kind === 'eu')
    return (
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: 16,
          background: '#0a7d3f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          gap: 2,
        }}
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#ffd617">
          <g>
            {[...Array(8)].map((_, i) => {
              const a = (i / 8) * Math.PI * 2;
              return (
                <circle
                  key={i}
                  cx={12 + Math.sin(a) * 7}
                  cy={12 - Math.cos(a) * 7}
                  r="1.3"
                />
              );
            })}
          </g>
        </svg>
        <span style={{ fontSize: 12, fontWeight: 800 }}>Ecolabel</span>
      </div>
    );
  if (kind === 'compost')
    return (
      <div
        style={{
          width: 84,
          height: 84,
          clipPath: 'polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)',
          background: '#5aa84b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22V12" />
          <path d="M12 12c0-4 3-7 8-7 0 4-3 7-8 7z" />
          <path d="M12 14c0-3.5-2.6-6-6.5-6 0 3.5 2.6 6 6.5 6z" />
        </svg>
      </div>
    );
  if (kind === 'bpi')
    return (
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: '50%',
          background: '#2f6b3a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: 1 }}>
          BPI
        </span>
        <span
          style={{
            marginTop: 3,
            fontSize: 8,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          COMPOSTABLE
        </span>
      </div>
    );
  return (
    <div
      style={{
        width: 84,
        height: 84,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 800,
        fontStyle: 'italic',
        color: '#1f7a3d',
        border: '3px solid #1f7a3d',
      }}
    >
      FDA
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <EcoNav active="products" />
      <main style={{ overflowX: 'clip' }}>
        <PageHero
          title="From field fires to better choices"
          sub="Five product lines. All made from rice straw that would otherwise be burned. The world's first USDA Organic certified pulp and packaging."
        />

        {/* ===== PRODUCT GRID ===== */}
        <section style={{ background: '#F6FCEE', padding: '64px 0 110px' }}>
          <div style={wrap}>
            <Reveal
              stagger
              y={0}
              className="eco-3col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 28,
                alignItems: 'stretch',
                gridAutoRows: '1fr',
              }}
            >
              {PRODUCTS.map((p) => (
                <div
                  key={p.title}
                  className="prod-card"
                  style={{ height: '100%' }}
                >
                  {p.img ? (
                    <div style={{ ...mediaBox, background: p.bg ?? '#eef0e6' }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.img}
                        alt={p.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: p.fit ?? 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  ) : (
                    <ImageSlot
                      label={p.label ?? 'Photo'}
                      shape="rect"
                      radius={0}
                      style={{ height: MEDIA_H }}
                    />
                  )}
                  <div
                    style={{
                      padding: '24px 26px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      flexGrow: 1,
                    }}
                  >
                    <h3 style={cardTitle}>{p.title}</h3>
                    <p style={cardText}>{p.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Featured — separate full-width block so it never collides with the grid */}
            <Reveal y={0} style={{ marginTop: 56 }}>
              <div
                className="eco-feature"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '.9fr 1.1fr',
                  gap: 0,
                  background: '#2f5f48',
                  borderRadius: 24,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 32,
                    minHeight: 320,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="eco-float"
                    src="/assets/products/instant-noodles-packaging.png"
                    alt="Organic noodle packaging"
                    style={{
                      maxWidth: '100%',
                      maxHeight: 260,
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 22px 26px rgba(0,0,0,0.4))',
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: '46px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 14,
                    color: '#fff',
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: '#9fd95a',
                    }}
                  >
                    Coming next
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 32,
                      fontWeight: 600,
                      letterSpacing: '-.6px',
                    }}
                  >
                    Organic noodle packaging
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,.82)',
                      maxWidth: 520,
                    }}
                  >
                    Combined with organic, sustainable food products, we add
                    more value and create even bigger impact. The world consumes
                    116&nbsp;billion servings of instant noodles a year — and
                    our sister company is a pioneer in organic rice-based
                    instant noodles. Great scope for ecologically packed,
                    healthy noodles.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CERTIFICATIONS ===== */}
        <section style={{ background: '#e8eae1', padding: '100px 0' }}>
          <div style={wrap}>
            <Reveal
              as="h2"
              className="eco-h"
              style={{ margin: '0 0 12px', fontSize: 38 }}
            >
              Sustainable quality certifications
            </Reveal>
            <Reveal
              as="p"
              style={{
                margin: '0 0 48px',
                fontSize: 16,
                color: '#5b7a68',
                maxWidth: 560,
              }}
            >
              Built to meet the standards that matter for compostable,
              food-safe, tree-free products.
            </Reveal>
            <Reveal
              stagger
              className="eco-5col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5,1fr)',
                gap: 20,
                alignItems: 'stretch',
              }}
            >
              {CERTS.map((c) => (
                <div
                  key={c.name}
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(47,95,72,.1)',
                    borderRadius: 18,
                    padding: '30px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 18,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  <CertBadge kind={c.kind} />
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: '#2f5f48',
                    }}
                  >
                    {c.name}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
