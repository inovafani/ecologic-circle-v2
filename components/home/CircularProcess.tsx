'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import styles from './CircularProcess.module.css';

const C = 879.6; // circumference of r=140 circle
const NODE_COLORS = ['#e8a33d', '#c0492b', '#5aa84b', '#2f5f48'];

// per-step center media (used on mobile as a stacked image under each step)
const STEP_MEDIA: { img?: string; fit?: 'cover' | 'contain'; bg?: string; label?: string }[] = [
  { img: '/assets/straw-field.jpg' },
  { img: '/assets/compostable-packaging.png', fit: 'contain', bg: '#eef0e6' },
  { bg: 'radial-gradient(circle at 40% 35%,#fbf3df,#e7d9b3)', label: 'Eggs' },
  { bg: 'radial-gradient(circle at 40% 35%,#e8f1d3,#cfe0a6)', label: 'Grain' },
];

const STEPS = [
  {
    color: '#e8a33d',
    title: "Farmers' straw",
    body:
      'The rice straw that ~2,000 Urmatt families used to burn is collected and paid for — a new income stream on top of their rice earnings.',
  },
  {
    color: '#c0492b',
    title: 'Becomes molded trays',
    body:
      'That straw becomes organic-certified molded-fibre egg trays and produce packaging.',
  },
  {
    color: '#5aa84b',
    title: 'Carries Hill Tribe eggs',
    body:
      'The trays carry roughly 600,000 eggs a month, produced by stateless Hill Tribe families, to market.',
  },
  {
    color: '#2f5f48',
    title: 'Fed by the same grain',
    body:
      'The hens are fed organic grain grown by those same rice farmers. The loop closes — and starts again.',
  },
];

export default function CircularProcess() {
  const root = useRef<HTMLDivElement>(null);
  const arcRef = useRef<SVGCircleElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stepEls = gsap.utils.toArray<HTMLElement>(`.${styles.step}`);
      const nodeEls = gsap.utils.toArray<SVGGElement>(`.${styles.node}`);
      const imgEls = gsap.utils.toArray<HTMLElement>(`.${styles.cLayer}`);
      const arc = arcRef.current!;

      const setActive = (i: number) => {
        stepEls.forEach((s, si) => {
          const on = si === i;
          gsap.to(s, { opacity: on ? 1 : 0.4, duration: 0.4, ease: 'power2.out' });
          // shadow only the small card inside, not the tall 64vh step wrapper
          const card = s.firstElementChild as HTMLElement | null;
          if (card) card.style.boxShadow = on ? '0 18px 40px -22px rgba(47,95,72,.5)' : 'none';
        });
        nodeEls.forEach((n, ni) => {
          const on = ni === i;
          gsap.to(n, { scale: on ? 1.1 : 1, duration: 0.5, ease: 'back.out(1.5)', transformOrigin: 'center' });
          const circle = n.querySelector('circle');
          if (circle) circle.setAttribute('fill', on ? NODE_COLORS[ni] : '#fff');
          n.querySelectorAll('path').forEach((p) => p.setAttribute('stroke', on ? '#fff' : NODE_COLORS[ni]));
        });
        imgEls.forEach((im, ii) => {
          gsap.to(im, { opacity: ii === i ? 1 : 0, scale: ii === i ? 1 : 1.06, duration: 0.6, ease: 'power2.out' });
        });
      };

      // Spinning label wheel
      if (!prefersReducedMotion()) {
        gsap.to(`.${styles.spinRing}`, { rotate: 360, duration: 55, ease: 'none', repeat: -1, transformOrigin: '50% 50%' });
      }

      if (prefersReducedMotion()) {
        gsap.set(stepEls, { opacity: 1 });
        gsap.set(arc, { strokeDashoffset: 0 });
        setActive(0);
        return;
      }

      gsap.set(arc, { strokeDashoffset: C });
      gsap.set(imgEls, { opacity: 0 });
      setActive(0);

      // Diagram is pinned via CSS `position: sticky` (see .diagramCol).
      // Here we just scrub the arc + active step + center image across the steps.
      let current = -1;
      const scrubST = ScrollTrigger.create({
        trigger: stepsRef.current!,
        start: 'top 60%',
        end: 'bottom 60%',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          arc.style.strokeDashoffset = String(C * (1 - p));
          const i = Math.max(0, Math.min(3, Math.floor(p * 3.999)));
          if (i !== current) {
            current = i;
            setActive(i);
          }
        },
      });

      ScrollTrigger.refresh();
      return () => {
        scrubST.kill();
      };
    },
    { scope: root }
  );

  return (
    <section className={styles.section} ref={root}>
      <div className={styles.inner}>
        <h2 className={`${styles.heading} eco-h`}>Stop the burn, start the circle.</h2>
        <p className={styles.lead}>
          One ecosystem, four moving parts. Scroll to follow a single bale of rice
          straw all the way around the loop — from ashes to impact.
        </p>

        <div className={styles.layout}>
          {/* LEFT: steps */}
          <div className={styles.steps} ref={stepsRef}>
            {STEPS.map((s, i) => {
              const m = STEP_MEDIA[i];
              return (
                <div key={i} className={styles.step}>
                  <div className={styles.stepCard} style={{ borderLeftColor: s.color }}>
                    <div className={styles.badge} style={{ background: s.color }}>{i + 1}</div>
                    <div>
                      <div className={styles.stepKicker} style={{ color: s.color }}>
                        Step {['One', 'Two', 'Three', 'Four'][i]}
                      </div>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepBody}>{s.body}</p>
                    </div>
                  </div>
                  {/* mobile-only image for this step (mint.bio-style stacked flow) */}
                  <div className={styles.stepMedia}>
                    <div className={styles.stepCircle} style={{ borderColor: s.color, background: m.bg ?? '#eef0e6' }}>
                      {m.img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={m.img} alt={s.title} style={{ objectFit: m.fit ?? 'cover' }} />
                      ) : (
                        <span style={{ color: s.color }}>{m.label}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: pinned diagram */}
          <div className={styles.diagramCol}>
            <div className={styles.diagram}>
              <svg viewBox="0 0 400 400" className={styles.spinRing} aria-hidden>
                <circle cx="200" cy="200" r="176" fill="none" stroke="rgba(47,95,72,0.16)" strokeWidth="2" strokeDasharray="1.5 13" strokeLinecap="round" />
              </svg>

              <div className={styles.center}>
                <div className={styles.cLayer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/straw-field.jpg" alt="Rice straw" />
                </div>
                <div className={styles.cLayer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/compostable-packaging.png" alt="Molded trays" style={{ objectFit: 'contain', background: '#eef0e6' }} />
                </div>
                <div className={styles.cLayer}>
                  <div className={styles.cPlaceholder} style={{ background: 'radial-gradient(circle at 40% 35%,#fbf3df,#e7d9b3)' }}>
                    <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#5aa84b" strokeWidth="1.6"><path d="M12 4c3.2 3.4 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 1.8-5.6 5-9z" /></svg>
                    <span>Eggs</span>
                  </div>
                </div>
                <div className={styles.cLayer}>
                  <div className={styles.cPlaceholder} style={{ background: 'radial-gradient(circle at 40% 35%,#e8f1d3,#cfe0a6)' }}>
                    <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#2f5f48" strokeWidth="1.6" strokeLinecap="round"><path d="M12 21v-8" /><path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" /><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" /></svg>
                    <span>Grain</span>
                  </div>
                </div>
              </div>

              <svg viewBox="0 0 400 400" className={styles.coreSvg}>
                <circle cx="200" cy="200" r="140" fill="none" stroke="#cfdcc8" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
                <circle ref={arcRef} cx="200" cy="200" r="140" fill="none" stroke="#5aa84b" strokeWidth="4" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} transform="rotate(-90 200 200)" />

                <g className={styles.node}>
                  <circle cx="200" cy="60" r="32" fill="#fff" stroke="#e8a33d" strokeWidth="2" />
                  <g transform="translate(188,48)" stroke="#e8a33d" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21V11" /><path d="M12 11c0-2.5-2-4.5-4.5-4.5" /><path d="M12 11c0-2.5 2-4.5 4.5-4.5" />
                  </g>
                  <text x="200" y="110" textAnchor="middle" className={styles.nodeLabel}>Straw</text>
                </g>
                <g className={styles.node}>
                  <circle cx="340" cy="200" r="32" fill="#fff" stroke="#c0492b" strokeWidth="2" />
                  <g transform="translate(328,188)" stroke="#c0492b" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l9-4 9 4-9 4-9-4z" /><path d="M3 8v8l9 4 9-4V8" />
                  </g>
                  <text x="340" y="253" textAnchor="middle" className={styles.nodeLabel}>Trays</text>
                </g>
                <g className={styles.node}>
                  <circle cx="200" cy="340" r="32" fill="#fff" stroke="#5aa84b" strokeWidth="2" />
                  <g transform="translate(188,328)" stroke="#5aa84b" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4c3.2 3.4 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 1.8-5.6 5-9z" />
                  </g>
                  <text x="200" y="390" textAnchor="middle" className={styles.nodeLabel}>Eggs</text>
                </g>
                <g className={styles.node}>
                  <circle cx="60" cy="200" r="32" fill="#fff" stroke="#2f5f48" strokeWidth="2" />
                  <g transform="translate(48,188)" stroke="#2f5f48" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21v-8" /><path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" /><path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
                  </g>
                  <text x="60" y="253" textAnchor="middle" className={styles.nodeLabel}>Grain</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
