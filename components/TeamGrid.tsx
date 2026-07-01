'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import { team } from '@/data/team';
import styles from './TeamGrid.module.css';

/** Build the monogram-SVG fallback path from a member name. */
function monogram(name: string) {
  const file = name
    .replace(/^Dr\.?\s+/i, '')
    .split(/\s+/)[0]
    .toLowerCase();
  return `/assets/team/${file}.svg`;
}

export default function TeamGrid() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(`.${styles.cell}`);
      if (prefersReducedMotion()) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 90%' },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 2) * 0.08,
        });
      });
      ScrollTrigger.refresh();
    },
    { scope: root }
  );

  return (
    <section className={styles.section}>
      <div className={styles.grid} ref={root}>
        {team.map((m) => (
          <article key={m.name} className={styles.cell}>
            <div className={styles.photoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={styles.photo}
                src={m.photo}
                alt={m.name}
                loading="lazy"
                data-fallback={monogram(m.name)}
                onError={(e) => {
                  const el = e.currentTarget;
                  const fb = el.dataset.fallback;
                  if (fb && el.src.indexOf(fb) === -1) el.src = fb;
                }}
              />
            </div>
            <div className={styles.body}>
              <h3 className={styles.name}>{m.name}</h3>
              <div className={styles.role}>{m.role}</div>
              <p className={styles.bio}>{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
