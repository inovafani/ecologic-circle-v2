'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import styles from './CircularProcess.module.css';

const C = 879.6; // circumference of r=140 circle
const N = 5;

// 5 nodes evenly around the ring (top, then clockwise).
// labels sit directly BELOW each node circle (cy + r + gap)
const NODES = [
  { cx: 200, cy: 60, lx: 200, ly: 106 },
  { cx: 333, cy: 157, lx: 333, ly: 203 },
  { cx: 282, cy: 313, lx: 282, ly: 359 },
  { cx: 118, cy: 313, lx: 118, ly: 359 },
  { cx: 67, cy: 157, lx: 67, ly: 203 },
];

// icon path fragments (drawn inside each node, 24x24)
const ICONS = [
  // 1 Farm inputs — sack
  (
    <>
      <path d="M7 9h10l-1.2 11H8.2z" />
      <path d="M9 9c0-2 1.3-3.2 3-3.2S15 7 15 9" />
      <path d="M10 13.5h4" />
    </>
  ),
  // 2 Skills & compliance — seedling
  (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3 2.5-5 6-5 0 3-2.5 5-6 5z" />
      <path d="M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z" />
    </>
  ),
  // 3 Straw collection — wheat
  (
    <>
      <path d="M12 21V10" />
      <path d="M12 10c0-2.5-2-4.5-4.5-4.5" />
      <path d="M12 10c0-2.5 2-4.5 4.5-4.5" />
      <path d="M12 15.5c0-2.2-1.8-4-4-4" />
      <path d="M12 15.5c0-2.2 1.8-4 4-4" />
    </>
  ),
  // 4 Pulping — factory
  (
    <>
      <path d="M3 21h18" />
      <path d="M4 21V11l5 3V11l5 3V8l5 3v7" />
    </>
  ),
  // 5 Molding — tray
  (
    <>
      <path d="M4 10h16l-1.6 8H5.6z" />
      <path d="M4 10l2-3h12l2 3" />
    </>
  ),
];

const NODE_COLORS = ['#e8a33d', '#8ec63f', '#5aa84b', '#1597c4', '#2f5f48'];

// center media per step — swap `bg`/`label` for `img: '/assets/...'` to use a photo
const STEP_MEDIA: {
  img?: string;
  fit?: 'cover' | 'contain';
  bg?: string;
  label?: string;
}[] = [
  { bg: 'radial-gradient(circle at 40% 35%,#fbf3df,#e7d9b3)', label: 'Farm inputs' },
  { bg: 'radial-gradient(circle at 40% 35%,#eef7df,#cfe0a6)', label: 'Skills' },
  { img: '/assets/straw-field.jpg' },
  { img: '/assets/organic-pulp.png', fit: 'contain', bg: '#eef0e6' },
  { img: '/assets/compostable-packaging.png', fit: 'contain', bg: '#eef0e6' },
];

const STEPS = [
  {
    color: '#e8a33d',
    label: 'Inputs',
    kicker: 'Step One',
    title: 'Farm inputs',
    body: 'Farmers get quality seed, organic inputs and a guaranteed buyer — the foundation of a reliable, chemical-free harvest.',
  },
  {
    color: '#8ec63f',
    label: 'Skills',
    kicker: 'Step Two',
    title: 'Skills & compliance',
    body: 'Training and certification bring every farm up to organic and food-safety standards, unlocking premium global markets.',
  },
  {
    color: '#5aa84b',
    label: 'Straw',
    kicker: 'Step Three',
    title: 'Straw collection',
    body: 'The rice straw that used to be burned is collected and paid for — a brand-new income stream on top of the grain.',
  },
  {
    color: '#1597c4',
    label: 'Pulping',
    kicker: 'Step Four',
    title: 'Pulping',
    body: 'Straw becomes chemical-free, tree-free pulp at our facility — no felled trees, no harsh bleaching, just clean fibre.',
  },
  {
    color: '#2f5f48',
    label: 'Molding',
    kicker: 'Step Five',
    title: 'Molding',
    body: 'The pulp is molded into compostable trays, tableware and packaging that replace single-use plastic — then the loop begins again.',
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
          gsap.to(s, { opacity: si === i ? 1 : 0.42, duration: 0.4, ease: 'power2.out' });
        });
        nodeEls.forEach((n, ni) => {
          const on = ni === i;
          // scale in place about the node's own centre (no drift)
          gsap.to(n, {
            scale: on ? 1.14 : 1,
            duration: 0.5,
            ease: 'back.out(1.5)',
            svgOrigin: `${NODES[ni].cx} ${NODES[ni].cy}`,
          });
          const circle = n.querySelector('circle');
          if (circle) circle.setAttribute('fill', on ? NODE_COLORS[ni] : '#fff');
          n.querySelectorAll('.ico path').forEach((p) => p.setAttribute('stroke', on ? '#fff' : NODE_COLORS[ni]));
        });
        imgEls.forEach((im, ii) => {
          gsap.to(im, { opacity: ii === i ? 1 : 0, scale: ii === i ? 1 : 1.06, duration: 0.6, ease: 'power2.out' });
        });
      };

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

      let current = -1;
      const scrubST = ScrollTrigger.create({
        trigger: stepsRef.current!,
        start: 'top 62%',
        end: 'bottom 62%',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          arc.style.strokeDashoffset = String(C * (1 - p));
          const i = Math.max(0, Math.min(N - 1, Math.floor(p * (N - 0.001))));
          if (i !== current) {
            current = i;
            setActive(i);
          }
        },
      });

      ScrollTrigger.refresh();
      return () => scrubST.kill();
    },
    { scope: root }
  );

  return (
    <section className={styles.section} ref={root}>
      <div className={styles.inner}>
        {/* LEFT — green panel: intro + steps */}
        <div className={styles.left}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>The Circular Process</span>
            <h2 className={`${styles.heading} eco-h`} style={{ color: '#fff' }}>Stop the burn, start the circle.</h2>
            <p className={styles.lead}>
              One ecosystem, five moving parts. Scroll to follow a single bale of
              rice straw all the way around the loop — from ashes to impact.
            </p>
          </div>

          <div className={styles.steps} ref={stepsRef}>
            {STEPS.map((s, i) => {
              const m = STEP_MEDIA[i];
              return (
                <div key={i} className={styles.step}>
                  <div className={styles.stepKicker} style={{ color: '#9fd95a' }}>
                    {s.kicker}
                  </div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepBody}>{s.body}</p>
                  {/* mobile-only image for this step */}
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
        </div>

        {/* RIGHT — sticky diagram (unchanged style) */}
        <div className={styles.diagramCol}>
          <div className={styles.diagram}>
            <svg viewBox="0 0 400 400" className={styles.spinRing} aria-hidden>
              <circle cx="200" cy="200" r="176" fill="none" stroke="rgba(47,95,72,0.16)" strokeWidth="2" strokeDasharray="1.5 13" strokeLinecap="round" />
            </svg>

            <div className={styles.center}>
              {STEP_MEDIA.map((m, i) => (
                <div key={i} className={styles.cLayer}>
                  {m.img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.img} alt={STEPS[i].title} style={{ objectFit: m.fit ?? 'cover', background: m.bg ?? 'transparent' }} />
                  ) : (
                    <div className={styles.cPlaceholder} style={{ background: m.bg }}>
                      <span>{m.label}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <svg viewBox="0 0 400 400" className={styles.coreSvg}>
              <circle cx="200" cy="200" r="140" fill="none" stroke="#cfdcc8" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
              <circle ref={arcRef} cx="200" cy="200" r="140" fill="none" stroke="#5aa84b" strokeWidth="4" strokeLinecap="round" strokeDasharray={C} strokeDashoffset={C} transform="rotate(-90 200 200)" />

              {NODES.map((nd, i) => (
                <g key={i} className={styles.node}>
                  <circle cx={nd.cx} cy={nd.cy} r="30" fill="#fff" stroke={NODE_COLORS[i]} strokeWidth="2" />
                  <g
                    className="ico"
                    transform={`translate(${nd.cx - 12},${nd.cy - 12})`}
                    stroke={NODE_COLORS[i]}
                    fill="none"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {ICONS[i]}
                  </g>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
