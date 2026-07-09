import type { Metadata } from 'next';
import EcoNav from '@/components/EcoNav';
import EcoFooter from '@/components/EcoFooter';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Get in touch — Ecologic Circle',
  description:
    'Talk to the Ecologic Circle team about compostable packaging, tree-free pulp, organic fertiliser and partnerships.',
};

const wrap = {
  maxWidth: 'var(--eco-maxw)',
  margin: '0 auto',
  padding: '0 40px',
};

const INFO = [
  {
    label: 'Address',
    value:
      '187 Moo 8 Sriwiang-Maeleab Road, Muangchom, Wiangchai, Chiangrai 57210, Thailand',
  },
  { label: 'Phone', value: '+66925464205', href: 'tel:66925464205' },
  {
    label: 'Email',
    value: 'Info@ecologic-circle.com',
    href: 'mailto:Info@ecologic-circle.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <EcoNav active="home" />
      <main style={{ overflowX: 'clip' }}>
        <PageHero
          title="Get in touch with us"
          sub="Partnerships, orders, or just curious about turning rice straw into impact — we'd love to hear from you."
        />

        <section style={{ background: '#F6FCEE', padding: '64px 0 110px' }}>
          <Reveal
            stagger
            className="eco-2col"
            style={{
              ...wrap,
              display: 'grid',
              gridTemplateColumns: '.85fr 1.15fr',
              gap: 56,
              alignItems: 'start',
            }}
          >
            {/* contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              {INFO.map((it) => (
                <div
                  key={it.label}
                  style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: 1.6,
                      textTransform: 'uppercase',
                      color: '#7a9b86',
                    }}
                  >
                    {it.label}
                  </div>
                  {it.href ? (
                    <a
                      href={it.href}
                      style={{
                        fontSize: 16.5,
                        lineHeight: 1.55,
                        color: '#2f5f48',
                        textDecoration: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {it.value}
                    </a>
                  ) : (
                    <div
                      style={{
                        fontSize: 16.5,
                        lineHeight: 1.55,
                        color: '#3f6b54',
                      }}
                    >
                      {it.value}
                    </div>
                  )}
                </div>
              ))}
              <div
                style={{
                  marginTop: 8,
                  height: 5,
                  width: '100%',
                  maxWidth: 260,
                  borderRadius: 4,
                  background:
                    'linear-gradient(90deg,#3a8a3f 0%,#8ec63f 20%,#f0a020 45%,#e0522a 62%,#1597c4 82%,#0e7c66 100%)',
                }}
              />
            </div>

            {/* form card */}
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(47,95,72,.1)',
                borderRadius: 24,
                padding: 34,
                boxShadow: '0 30px 60px -40px rgba(47,95,72,.4)',
              }}
            >
              <ContactForm />
            </div>
          </Reveal>
        </section>

        <EcoFooter />
      </main>
    </>
  );
}
