import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Impact Story — Ecologic Circle',
  description:
    'Four SDGs. One circular model. Every tonne of straw diverted reduces emissions, lifts income, improves air quality, and builds healthier soil.',
};

const wrap = {
  maxWidth: 'var(--eco-maxw)',
  margin: '0 auto',
  padding: '0 40px',
};

const SDG_CARDS = [
  {
    n: '1',
    bg: '#E5243B',
    title: 'No Poverty',
    body: 'Contract farming guarantees fair prices and 20%+ higher income. Village funds prevent loan-shark dependency.',
  },
  {
    n: '3',
    bg: '#4C9F38',
    title: 'Good Health',
    body: 'Eliminating field burning directly reduces the devastating air pollution that blankets Asia every season.',
  },
  {
    n: '12',
    bg: '#BF8B2E',
    title: 'Responsible Production',
    body: 'A zero-waste circular model. Compostable packaging replaces plastic; chemical-free pulp replaces wood.',
  },
  {
    n: '13',
    bg: '#3F7E44',
    title: 'Climate Action',
    body: '1,460 kg CO₂ prevented per tonne diverted. Rice systems emit as much as aviation.',
  },
];

const STATS = [
  {
    bg: '#ED7D2B',
    to: 3.0,
    decimals: 1,
    after: 'billion',
    label: ['Plastic Packaging', 'Items Replaced'],
  },
  {
    bg: '#C0492B',
    to: 3.3,
    decimals: 1,
    after: 'million',
    label: ['Trees', 'Saved'],
  },
  {
    bg: '#1597C4',
    to: 120000,
    decimals: 0,
    after: '',
    label: ['Tons of Pollutant', 'Averted'],
  },
  {
    bg: '#0E7C66',
    to: 3.5,
    decimals: 1,
    after: 'million',
    label: ['Tons of Carbon', 'Credits Generated'],
  },
  {
    bg: '#8EC63F',
    to: 14000,
    decimals: 0,
    after: '',
    label: ['Farm Households', 'Impacted'],
  },
];

const SCALE = [
  {
    big: '80%+',
    title: 'Plastic Waste',
    body: "Of the world's ocean plastic pollution originates in Asia. Thailand ranks 6th globally: 700,000 tonnes of polystyrene food containers, 1.72M tonnes of plastic cups & straws, and 50M disposable food boxes consumed daily.",
  },
  {
    big: '17 trees',
    title: 'Trees for Paper',
    body: 'The paper industry consumes 17 trees per ton of paper and enormous amounts of chemicals. A single run of the Sunday New York Times requires 75,000 trees to be felled. Rice straw is a hidden alternative.',
  },
  {
    big: '64.7%',
    title: 'Farmer Debt',
    body: 'Of Thai agricultural households are burdened with debt, averaging 429,989 Baht ($12,833). Farmers take new loans to pay off old ones — a vicious cycle that contract farming with fair prices can break.',
  },
];

export default function ImpactPage() {
  return (
    <>
      <EcoNav active="impact" />
      <main style={{ overflowX: 'clip' }}>
        <PageHero
          title="Four SDGs. One circular model."
          titleSize={64}
          sub="Every tonne of straw diverted reduces emissions, lifts income, improves air quality, and builds healthier soil."
        />

        {/* ===== SDG CARDS ===== */}
        <section style={{ background: '#F6FCEE', padding: '10px 0 96px' }}>
          <Reveal
            stagger
            className="eco-4col"
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 24,
            }}
          >
            {SDG_CARDS.map((c) => (
              <div
                key={c.n}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(47,95,72,.1)',
                  borderRadius: 20,
                  padding: 28,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: c.bg,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {c.n}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 19,
                    fontWeight: 600,
                    color: '#2f5f48',
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: '#5b7a68',
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ===== STAT CIRCLES ===== */}
        <section style={{ background: '#e8eae1', padding: '90px 0' }}>
          <Reveal
            stagger
            className="eco-5col"
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: 'repeat(5,1fr)',
              gap: 24,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: 172,
                    aspectRatio: '1 / 1',
                    borderRadius: '50%',
                    background: s.bg,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <CountUp
                    to={s.to}
                    decimals={s.decimals}
                    after={s.after}
                    style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.05 }}
                  />
                </div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#2f5f48',
                    lineHeight: 1.3,
                  }}
                >
                  {s.label[0]}
                  <br />
                  {s.label[1]}
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        {/* ===== SCALE OF PROBLEM (deep green, on-brand) ===== */}
        <section
          style={{
            position: 'relative',
            background:
              'linear-gradient(160deg,#2f5f48 0%,#264c3a 60%,#1f3e30 100%)',
            padding: '104px 0 110px',
            overflow: 'hidden',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              top: -120,
              right: -80,
              width: 420,
              height: 420,
              borderRadius: '50%',
              background:
                'radial-gradient(circle,rgba(159,217,90,.18),transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              bottom: -140,
              left: -100,
              width: 460,
              height: 460,
              borderRadius: '50%',
              background:
                'radial-gradient(circle,rgba(232,185,74,.14),transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ ...wrap, position: 'relative' }}>
            <Reveal
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 18,
                marginBottom: 56,
              }}
            >
              <h2
                className="eco-h"
                style={{ margin: 0, fontSize: 52, color: '#fff' }}
              >
                How bad is it? This bad.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.72)',
                  maxWidth: 640,
                }}
              >
                These are the problems Ecologic Circle is solving with circular
                solutions — not through regulation, but through markets.
              </p>
            </Reveal>
            <Reveal
              stagger
              className="eco-3col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 24,
              }}
            >
              {SCALE.map((c) => (
                <div
                  key={c.title}
                  style={{
                    background: 'rgba(255,255,255,.06)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255,255,255,.14)',
                    borderRadius: 20,
                    padding: 34,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,.12)',
                  }}
                >
                  <div
                    style={{
                      fontSize: 46,
                      fontWeight: 600,
                      letterSpacing: '-1.5px',
                      color: '#e8b94a',
                    }}
                  >
                    {c.big}
                  </div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 20,
                      fontWeight: 600,
                      color: '#fff',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,.74)',
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </Reveal>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 52,
              }}
            >
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  height: 54,
                  padding: '0 30px',
                  borderRadius: 999,
                  background: '#9fd95a',
                  color: '#234436',
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: '0 14px 30px -12px rgba(159,217,90,.5)',
                }}
              >
                Read the full impact story <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
