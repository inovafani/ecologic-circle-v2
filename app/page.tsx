import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import HomeHero from '@/components/home/HomeHero';
import CircularProcess from '@/components/home/CircularProcess';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';

export const metadata: Metadata = {
  title: 'Ecologic Circle — Next level circular packaging',
  description:
    'Turning rice straw that would otherwise burn into compostable packaging, tree-free pulp and organic fertiliser — at scale.',
};

const VALUE_CARDS = [
  {
    title: 'Packaging materials to replace plastic',
    body: 'Molded-fibre tableware, trays and boxes — a clean swap for single-use plastic.',
    color: '#4C9F38',
    icon: (
      <>
        <ellipse cx="12" cy="9.5" rx="8" ry="2.6" />
        <path d="M4 9.5c0 4 3.6 7 8 7s8-3 8-7" />
        <path d="M8 7.5a4 4 0 0 1 8 0" />
      </>
    ),
  },
  {
    title: 'Organic fertilizer to replace chemical fertilizer',
    body: "Nutrient-rich fertiliser that returns straw's goodness to the soil — chemical-free.",
    color: '#E5A11F',
    icon: (
      <>
        <path d="M9 8.5h6v10.5a1.8 1.8 0 0 1-1.8 1.8h-2.4A1.8 1.8 0 0 1 9 19z" />
        <path d="M10.5 8.5V5.5h3v3" />
        <path d="M12 16.5c0-1.9 1.4-3 3.2-3 0 1.9-1.4 3-3.2 3z" />
        <path d="M12 16.5c0-1.9-1.4-3-3.2-3 0 1.9 1.4 3 3.2 3z" />
      </>
    ),
  },
  {
    title: 'Cellulose pulp for paper industry',
    body: 'Chemical-free, tree-free pulp for the paper and board industry.',
    color: '#1597c4',
    icon: (
      <>
        <path d="M4 12.5h16a8 8 0 0 1-16 0z" />
        <path d="M6 12.5c1-1.7 3-1.7 4 0s3 1.7 4 0 3-1.7 4 0" />
      </>
    ),
  },
];

const SDGS = [
  { n: '1', label: ['No', 'Poverty'], bg: '#E5243B' },
  { n: '3', label: ['Good Health', '& Wellbeing'], bg: '#4C9F38' },
  { n: '8', label: ['Decent Work', '& Growth'], bg: '#A21942' },
  { n: '12', label: ['Responsible', 'Production'], bg: '#BF8B2E' },
  { n: '13', label: ['Climate', 'Action'], bg: '#3F7E44' },
];

const wrap = {
  maxWidth: 'var(--eco-maxw)',
  margin: '0 auto',
  padding: '0 40px',
};

export default function HomePage() {
  return (
    <>
      <EcoNav active="home" />
      <main style={{ overflowX: 'clip' }}>
        <HomeHero />

        {/* ===== VAST RESOURCE ===== */}
        <section style={{ background: '#F6FCEE', padding: '110px 0' }}>
          <div style={wrap}>
            <Reveal
              stagger
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'center',
              }}
              className="eco-2col"
            >
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 48 }}
              >
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  <span className="eyebrow">Vast Resource</span>
                  <h2
                    className="eco-h"
                    style={{ margin: 0, fontSize: 40, letterSpacing: '-1px' }}
                  >
                    A vast resource of fibre material across a major
                    rice-growing region.
                  </h2>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 28,
                  }}
                >
                  <div
                    style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
                  >
                    <CountUp
                      to={200}
                      suffix="M+"
                      style={{
                        fontSize: 'clamp(34px, 9vw, 60px)',
                        fontWeight: 600,
                        letterSpacing: '-2px',
                        color: '#5aa84b',
                        lineHeight: 1,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: '#5b7a68',
                      }}
                    >
                      tonnes of rice straw produced across the region every year
                    </div>
                  </div>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
                  >
                    <CountUp
                      to={2000}
                      suffix="+"
                      style={{
                        fontSize: 'clamp(34px, 9vw, 60px)',
                        fontWeight: 600,
                        letterSpacing: '-2px',
                        color: '#5aa84b',
                        lineHeight: 1,
                      }}
                    />
                    <div
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: '#5b7a68',
                      }}
                    >
                      farming families already in our sourcing network
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/straw-field.jpg"
                alt="Rice straw in the field"
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  objectPosition: '86% center',
                  borderRadius: 24,
                  display: 'block',
                }}
              />
            </Reveal>
          </div>
        </section>

        {/* ===== BURNING PROBLEM ===== */}
        <section style={{ background: '#e8eae1', padding: '110px 0' }}>
          <Reveal
            stagger
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 64,
              alignItems: 'center',
            }}
            className="eco-2col"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <span className="eyebrow">Burning Problem</span>
              <h2
                className="eco-h"
                style={{ margin: 0, fontSize: 38, letterSpacing: '-1px' }}
              >
                Every season, the cheapest way to clear a field is to set it on
                fire.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: '#3f6b54',
                }}
              >
                Millions of tonnes of rice straw are burned each year. The smoke
                blankets the region in seasonal haze, releases CO₂ and black
                carbon, and strips the soil of the very nutrients farmers depend
                on. The straw is treated as worthless — so it goes up in flames.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/burning-problem-2.jpg"
              alt="Rice field burning, releasing haze"
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                objectFit: 'cover',
                borderRadius: 24,
                display: 'block',
              }}
            />
          </Reveal>
        </section>

        {/* ===== VALUE CREATION ===== */}
        <section style={{ background: '#F6FCEE', padding: '110px 0' }}>
          <div style={wrap}>
            <Reveal
              stagger
              style={{
                display: 'grid',
                gridTemplateColumns: '1.25fr .75fr',
                gap: 48,
                alignItems: 'start',
              }}
              className="eco-2col"
            >
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
              >
                <span className="eyebrow">Value Creation Solution</span>
                <h2 className="eco-h" style={{ margin: 0, fontSize: 52 }}>
                  We make burning economically irrational.
                </h2>
                <p
                  style={{
                    margin: 0,
                    fontSize: 21,
                    fontStyle: 'italic',
                    color: '#5aa84b',
                    fontWeight: 500,
                  }}
                >
                  Tesla didn&apos;t invent new batteries — they made combustion
                  engines irrational.
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: '#3f6b54',
                    maxWidth: 560,
                  }}
                >
                  We create a dis-incentive to burn by converting crop residues
                  into products that global markets demand. Our mission is
                  decarbonisation and the replacement of plastic at scale.
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 24,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/answer-problem.jpg"
                  alt="Turning crop residue into products the market demands"
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderRadius: 24,
                    display: 'block',
                  }}
                />
                <a
                  href="/products"
                  style={{
                    width: '100%',
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 9,
                    height: 50,
                    padding: '0 26px',
                    borderRadius: 999,
                    background: '#fff',
                    border: '1.5px solid rgba(47,95,72,.22)',
                    color: '#2f5f48',
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  Learn about our products <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>

            <Reveal
              stagger
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 24,
                marginTop: 56,
              }}
              className="eco-3col"
            >
              {VALUE_CARDS.map((c) => (
                <div key={c.title} className="value-card">
                  <div
                    className="value-accent"
                    style={{ background: c.color }}
                  />
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 16,
                      background: `${c.color}1f`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 'none',
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="30"
                      height="30"
                      fill="none"
                      stroke={c.color}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {c.icon}
                    </svg>
                  </div>
                  <h3
                    style={{
                      margin: '22px 0 0',
                      fontSize: 20,
                      fontWeight: 600,
                      lineHeight: 1.35,
                      color: '#2f5f48',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      margin: '10px 0 0',
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: '#5b7a68',
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===== QUOTE ===== */}
        <section style={{ background: '#e8eae1', padding: '96px 0' }}>
          <Reveal
            style={{
              maxWidth: 980,
              margin: '0 auto',
              padding: '0 40px',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: 44,
              alignItems: 'center',
            }}
            className="eco-quote"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/alex-tee.png"
              alt="Alex Tee"
              style={{
                width: 160,
                height: 160,
                flex: 'none',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <svg viewBox="0 0 24 24" width="40" height="40" fill="#9fd95a">
                <path d="M10 7L6 13v4h5v-4H8l2-3V7zm9 0l-4 6v4h5v-4h-3l2-3V7z" />
              </svg>
              <p
                style={{
                  margin: 0,
                  fontSize: 27,
                  lineHeight: 1.4,
                  fontWeight: 500,
                  letterSpacing: '-.5px',
                  color: '#2f5f48',
                }}
              >
                Ecologic Circle is a beautiful and natural extension to rice
                farming that Arvind and his team know deeply about. It is both
                needful and urgent, with ripple effects that can change the
                world.
              </p>
              <div style={{ fontSize: 15, color: '#5b7a68' }}>
                <strong style={{ color: '#2f5f48' }}>Alex Tee</strong> —
                Founder, Ecologic Circle
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SDG STRIP ===== */}
        <section
          style={{
            background: '#F6FCEE',
            padding: '64px 0',
          }}
        >
          <div style={wrap}>
            <div
              style={{
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: '#7a9b86',
                marginBottom: 30,
              }}
            >
              Aligned with the UN Sustainable Development Goals
            </div>
            <Reveal
              stagger
              staggerEach={0.08}
              y={20}
              style={{
                display: 'flex',
                gap: 18,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              {SDGS.map((s) => (
                <div
                  key={s.n}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    background: s.bg,
                    color: '#fff',
                    borderRadius: 14,
                    padding: '14px 20px',
                  }}
                >
                  <span style={{ fontSize: 26, fontWeight: 700 }}>{s.n}</span>
                  <span
                    style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.15 }}
                  >
                    {s.label[0]}
                    <br />
                    {s.label[1]}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <CircularProcess />

        <EcoFooter />
      </main>
    </>
  );
}
