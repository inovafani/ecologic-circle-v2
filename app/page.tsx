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
    title: 'Compostable food packaging',
    body:
      'Molded-fibre tableware, trays and boxes that replace single-use plastic and break down naturally.',
    icon: (
      <>
        <path d="M3 8l9-4 9 4-9 4-9-4z" />
        <path d="M3 8v8l9 4 9-4V8" />
      </>
    ),
  },
  {
    title: 'Tree-free paper pulp',
    body:
      'Chemical-free pulp made from rice straw — keeping forests standing and water clean.',
    icon: (
      <>
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M9 21v-6h6v6" />
      </>
    ),
  },
  {
    title: 'Organic fertiliser & biochar',
    body:
      'Carbon-rich biochar and organic fertiliser that return nutrients to the soil and lock carbon away.',
    icon: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" />
        <path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
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

const wrap = { maxWidth: 'var(--eco-maxw)', margin: '0 auto', padding: '0 40px' };

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
              <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
                <h2 className="eco-h" style={{ margin: 0, fontSize: 40, letterSpacing: '-1px' }}>
                  A vast resource of fibre material across a major rice-growing region.
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <CountUp
                      to={200}
                      suffix="M+"
                      style={{ fontSize: 'clamp(34px, 9vw, 60px)', fontWeight: 600, letterSpacing: '-2px', color: '#5aa84b', lineHeight: 1 }}
                    />
                    <div style={{ fontSize: 14.5, lineHeight: 1.5, color: '#5b7a68' }}>
                      tonnes of rice straw produced across the region every year
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <CountUp
                      to={2000}
                      suffix="+"
                      style={{ fontSize: 'clamp(34px, 9vw, 60px)', fontWeight: 600, letterSpacing: '-2px', color: '#5aa84b', lineHeight: 1 }}
                    />
                    <div style={{ fontSize: 14.5, lineHeight: 1.5, color: '#5b7a68' }}>
                      farming families already in our sourcing network
                    </div>
                  </div>
                </div>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/straw-field.jpg" alt="Rice straw in the field" style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 24, display: 'block' }} />
            </Reveal>
          </div>
        </section>

        {/* ===== BURNING PROBLEM ===== */}
        <section style={{ background: '#e8eae1', padding: '110px 0' }}>
          <Reveal
            stagger
            style={{ ...wrap, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
            className="eco-2col"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <h2 className="eco-h" style={{ margin: 0, fontSize: 38, letterSpacing: '-1px' }}>
                Every season, the cheapest way to clear a field is to set it on fire.
              </h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#3f6b54' }}>
                Millions of tonnes of rice straw are burned each year. The smoke blankets the region
                in seasonal haze, releases CO₂ and black carbon, and strips the soil of the very
                nutrients farmers depend on. The straw is treated as worthless — so it goes up in flames.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/burning-problem.png" alt="Rice field burning, releasing haze" style={{ width: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 24, display: 'block' }} />
          </Reveal>
        </section>

        {/* ===== VALUE CREATION ===== */}
        <section style={{ background: '#F6FCEE', padding: '110px 0' }}>
          <div style={wrap}>
            <Reveal
              stagger
              style={{ display: 'grid', gridTemplateColumns: '1.25fr .75fr', gap: 48, alignItems: 'start' }}
              className="eco-2col"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <h2 className="eco-h" style={{ margin: 0, fontSize: 52 }}>
                  We make burning economically irrational.
                </h2>
                <p style={{ margin: 0, fontSize: 21, fontStyle: 'italic', color: '#5aa84b', fontWeight: 500 }}>
                  Tesla didn&apos;t invent new batteries — they made combustion engines irrational.
                </p>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#3f6b54', maxWidth: 560 }}>
                  We create a dis-incentive to burn by converting crop residues into products that
                  global markets demand. Our mission is decarbonisation and the replacement of
                  plastic at scale.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24 }}>
                <div style={{ width: 96, height: 96, borderRadius: 24, background: '#2f5f48', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9fd95a' }}>
                  <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h4l11-11a2.8 2.8 0 0 0-4-4L3 17v4z" />
                    <path d="M14 6l4 4" />
                  </svg>
                </div>
                <a href="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, height: 50, padding: '0 26px', borderRadius: 999, background: '#fff', border: '1.5px solid rgba(47,95,72,.22)', color: '#2f5f48', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                  Learn about our products <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>

            <Reveal stagger style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 56 }} className="eco-3col">
              {VALUE_CARDS.map((c) => (
                <div key={c.title} style={{ background: '#fff', border: '1px solid rgba(47,95,72,.1)', borderRadius: 20, padding: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: '#eef7df', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#5aa84b' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {c.icon}
                    </svg>
                  </div>
                  <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, color: '#2f5f48' }}>{c.title}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: '#5b7a68' }}>{c.body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ===== QUOTE ===== */}
        <section style={{ background: '#e8eae1', padding: '96px 0' }}>
          <Reveal
            style={{ maxWidth: 980, margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 44, alignItems: 'center' }}
            className="eco-quote"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/alex-tee.png" alt="Alex Tee" style={{ width: 160, height: 160, flex: 'none', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <svg viewBox="0 0 24 24" width="40" height="40" fill="#9fd95a">
                <path d="M10 7L6 13v4h5v-4H8l2-3V7zm9 0l-4 6v4h5v-4h-3l2-3V7z" />
              </svg>
              <p style={{ margin: 0, fontSize: 27, lineHeight: 1.4, fontWeight: 500, letterSpacing: '-.5px', color: '#2f5f48' }}>
                We&apos;re not asking farmers to care about the planet. We pay them more{' '}
                <em style={{ fontStyle: 'italic', color: '#5aa84b' }}>not</em> to burn — and the planet wins anyway.
              </p>
              <div style={{ fontSize: 15, color: '#5b7a68' }}>
                <strong style={{ color: '#2f5f48' }}>Alex Tee</strong> — Founder, Ecologic Circle
              </div>
            </div>
          </Reveal>
        </section>

        {/* ===== SDG STRIP ===== */}
        <section style={{ background: '#F6FCEE', padding: '64px 0', borderTop: '1px solid rgba(47,95,72,.08)', borderBottom: '1px solid rgba(47,95,72,.08)' }}>
          <div style={wrap}>
            <div style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#7a9b86', marginBottom: 30 }}>
              Aligned with the UN Sustainable Development Goals
            </div>
            <Reveal stagger staggerEach={0.08} y={20} style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
              {SDGS.map((s) => (
                <div key={s.n} style={{ display: 'flex', alignItems: 'center', gap: 12, background: s.bg, color: '#fff', borderRadius: 14, padding: '14px 20px' }}>
                  <span style={{ fontSize: 26, fontWeight: 700 }}>{s.n}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.15 }}>
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
