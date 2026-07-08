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
    body: 'Contract farming for organic farming already guarantees fair prices with 40% premium. Straw sales complement further. An important counter to loan-shark dependency.',
  },
  {
    n: '3',
    bg: '#4C9F38',
    title: 'Good Health',
    body: 'Eliminating field burning directly reduces the devastating air pollution that blankets Asia every season. Air pollution is estimated to cause 32,300 deaths annually in Thailand.',
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
    body: '957 kg CO₂ emission is prevented per tonne of straw. Rice systems emit as much as aviation. Significantly more emission savings can be achieved when our organic fertilizer replaces chemical fertilizer and our biochar is used in the soil.',
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
    tag: 'Ocean plastic',
    title: 'The plastic tide starts here',
    body: "Over 80% of the world's ocean plastic originates in Asia. Thailand alone burns through 700,000 tonnes of polystyrene food containers, 1.72M tonnes of plastic cups & straws, and 50M disposable food boxes — every single day.",
    answer: 'Molded-fibre packaging replaces it, then composts.',
  },
  {
    big: '17 trees',
    tag: 'Deforestation',
    title: 'Forests, pulped for paper',
    body: 'Every ton of paper costs 17 trees and a flood of chemicals. One Sunday run of the New York Times fells 75,000 trees. Meanwhile, the rice straw that could make that same paper is set on fire in the field.',
    answer: 'Tree-free rice-straw pulp keeps forests standing.',
  },
  {
    big: '64.7%',
    tag: 'Rural poverty',
    title: 'Farmers trapped in debt',
    body: 'Nearly two in three Thai farming households carry debt. More than 30% of agricultural households owe more than 500,000 Baht ($15,000) — taking new loans to pay off old ones. A recent central bank study found that 52% of Thai farmers are unlikely ever to be able to repay their loans, relying on interest only payments.',
    answer: 'Paying for straw turns a cost into fair income.',
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
        <section style={{ background: '#F6FCEE', padding: '64px 0 96px' }}>
          <Reveal
            stagger
            className="eco-4col"
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 24,
              alignItems: 'stretch',
              gridAutoRows: '1fr',
            }}
          >
            {SDG_CARDS.map((c) => (
              <div
                key={c.n}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#fff',
                  border: '1px solid rgba(47,95,72,.1)',
                  borderRadius: 20,
                  padding: '30px 26px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: c.bg,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 18,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: c.bg,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 19,
                      fontWeight: 700,
                      flex: 'none',
                    }}
                  >
                    {c.n}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1.2,
                      textTransform: 'uppercase',
                      color: c.bg,
                    }}
                  >
                    SDG {c.n}
                  </span>
                </div>
                <h3
                  style={{
                    margin: '0 0 10px',
                    fontSize: 18,
                    fontWeight: 600,
                    color: '#2f5f48',
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
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
            as="h2"
            className="eco-h"
            style={{
              ...wrap,
              margin: '0 auto 56px',
              fontSize: 'clamp(24px, 3vw, 34px)',
              textAlign: 'center',
              maxWidth: 820,
              color: '#2f5f48',
            }}
          >
            The level of impact once we reach our target of processing 1 million
            tons of straw per year.
          </Reveal>
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

        {/* ===== SCALE OF PROBLEM — editorial story ===== */}
        <section style={{ background: '#F6FCEE', padding: '110px 0' }}>
          <div style={wrap}>
            <Reveal
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                marginBottom: 12,
                maxWidth: 680,
              }}
            >
              <h2
                className="eco-h"
                style={{ margin: 0, fontSize: 44, letterSpacing: '-1px' }}
              >
                How bad is it? This bad.
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 19,
                  lineHeight: 1.6,
                  color: '#3f6b54',
                }}
              >
                Three crises share a single root: crop residue treated as
                worthless, so it&apos;s burned. Follow the numbers — then watch
                each one flip into an opportunity.
              </p>
            </Reveal>

            {/* narrative rows */}
            <div style={{ marginTop: 40 }}>
              {SCALE.map((c, i) => (
                <Reveal
                  key={c.title}
                  className="eco-story-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '300px 1fr',
                    gap: 48,
                    alignItems: 'center',
                    padding: '40px 0',
                    borderTop:
                      i === 0 ? '1px solid rgba(47,95,72,.14)' : 'none',
                    borderBottom: '1px solid rgba(47,95,72,.14)',
                  }}
                >
                  {/* left: big number + tag */}
                  <div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 1.6,
                        textTransform: 'uppercase',
                        color: '#c98a2e',
                        marginBottom: 10,
                      }}
                    >
                      {c.tag}
                    </div>
                    <div
                      className="eco-h"
                      style={{
                        fontSize: 'clamp(52px, 7vw, 72px)',
                        color: '#c98a2e',
                        lineHeight: 0.95,
                        letterSpacing: '-2px',
                      }}
                    >
                      {c.big}
                    </div>
                  </div>

                  {/* right: story + the flip */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: 24,
                        fontWeight: 600,
                        letterSpacing: '-.3px',
                        color: '#2f5f48',
                      }}
                    >
                      {c.title}
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        fontSize: 16,
                        lineHeight: 1.65,
                        color: '#5b7a68',
                        maxWidth: 620,
                      }}
                    >
                      {c.body}
                    </p>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        marginTop: 4,
                        color: '#2f5f48',
                        fontSize: 15,
                        fontWeight: 600,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 26,
                          height: 26,
                          borderRadius: '50%',
                          background: '#eef7df',
                          color: '#5aa84b',
                          flex: 'none',
                        }}
                      >
                        →
                      </span>
                      {c.answer}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* closing bridge */}
            <Reveal
              style={{
                marginTop: 56,
                background: '#2f5f48',
                borderRadius: 24,
                padding: 'clamp(36px, 5vw, 56px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                className="eco-h"
                style={{
                  fontSize: 'clamp(24px, 3.4vw, 34px)',
                  color: '#fff',
                  maxWidth: 780,
                }}
              >
                We don&apos;t ask the world to sacrifice — we make the better
                choice the cheaper one.
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16.5,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,.8)',
                  maxWidth: 680,
                }}
              >
                Every tonne of rice straw we buy is a tonne that isn&apos;t
                burned — cleaner air, standing forests, plastic replaced, and
                fair income for the families who grow our food.
              </p>
            </Reveal>
          </div>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
