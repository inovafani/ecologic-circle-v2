import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import Reveal from '@/components/Reveal';
import ImageSlot from '@/components/ImageSlot';
import PageHero from '@/components/PageHero';
import ZoomImage from '@/components/ZoomImage';

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
  /** object-position for the cover crop, e.g. 'top' / 'center' / '50% 20%' */
  pos?: string;
  bg?: string;
  label?: string;
};

const PRODUCTS: Product[] = [
  {
    title: 'Compostable organic tableware',
    body: 'Clamshells, bowls and plates molded from rice-straw fibre. Sturdy, microwave-safe and home-compostable — a clean swap for polystyrene.',
    img: '/assets/products/burger-box.png',
    fit: 'cover',
    pos: 'top',
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
    img: '/assets/products/fertiliser.png',
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
  {
    name: 'USDA Organic',
    img: '/assets/certifications/usda.png',
    inProcess: false,
  },
  {
    name: 'EU Ecolabel',
    img: '/assets/certifications/ecolabel.webp',
    inProcess: true,
  },
  {
    name: 'Compostable EN 13432:2000',
    img: '/assets/certifications/compostable.webp',
    inProcess: true,
  },
  {
    name: 'BPI Compostable',
    img: '/assets/certifications/bpi-compostable.jfif',
    inProcess: true,
  },
  {
    name: 'FDA Food Contact',
    img: '/assets/certifications/FDA-logo.jfif',
    inProcess: true,
  },
];

const MEDIA_H = 280;

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
                    <ZoomImage
                      src={p.img}
                      alt={p.title}
                      fit={p.fit ?? 'cover'}
                      style={{ height: MEDIA_H, background: p.bg ?? '#eef0e6' }}
                      imgStyle={{ objectPosition: p.pos ?? 'center' }}
                    />
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
                <ZoomImage
                  src="/assets/products/instant-noodles-packaging.png"
                  alt="Organic noodle packaging"
                  fit="contain"
                  imgClassName="eco-float"
                  style={{ minHeight: 320, padding: 32 }}
                  imgStyle={{
                    maxWidth: '100%',
                    maxHeight: 260,
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 22px 26px rgba(0,0,0,0.4))',
                  }}
                />
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
                    padding: '28px 18px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 16,
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  {/* uniform logo box */}
                  <div
                    style={{
                      height: 92,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.img}
                      alt={c.name}
                      style={{
                        maxHeight: 92,
                        maxWidth: 120,
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: '#2f5f48',
                      flexGrow: 1,
                    }}
                  >
                    {c.name}
                  </div>
                  {c.inProcess && (
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: 0.6,
                        textTransform: 'uppercase',
                        color: '#a06a1e',
                        background: '#f7ecd3',
                        border: '1px solid rgba(160,106,30,.25)',
                        borderRadius: 999,
                        padding: '4px 12px',
                      }}
                    >
                      In process
                    </span>
                  )}
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
