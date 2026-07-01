'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import styles from './PageHero.module.css';

type Props = {
  title: string;
  sub?: string;
  /** radial gradient focus */
  gradient?: 'center' | 'left' | 'right';
  subMaxWidth?: number;
  titleSize?: number;
};

const GRADIENTS: Record<string, string> = {
  center: 'radial-gradient(120% 90% at 50% -10%,#eef7df 0%,#F6FCEE 60%)',
  left: 'radial-gradient(120% 90% at 15% -10%,#eef7df 0%,#F6FCEE 60%)',
  right: 'radial-gradient(120% 90% at 85% -10%,#eef7df 0%,#F6FCEE 60%)',
};

export default function PageHero({
  title,
  sub,
  gradient = 'center',
  subMaxWidth = 640,
  titleSize = 60,
}: Props) {
  const root = useRef<HTMLElement>(null);
  const words = title.split(' ');

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap
        .timeline({ defaults: { ease: 'power3.out' }, delay: 0.1 })
        .from(`.${styles.logo}`, { y: -16, opacity: 0, duration: 0.7 })
        .from(`.${styles.orb}`, { scale: 0.6, opacity: 0, duration: 1.1 }, '-=0.4')
        .from(
          `.${styles.word} > span`,
          { yPercent: 120, duration: 0.95, ease: 'power4.out', stagger: 0.07 },
          '-=0.45'
        )
        .from(`.${styles.sub}`, { y: 18, opacity: 0, duration: 0.7 }, '-=0.5');

      gsap.to(`.${styles.orb}`, {
        y: '+=16',
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: root }
  );

  return (
    <section id="site-hero" ref={root} className={styles.hero} style={{ background: GRADIENTS[gradient] }}>
      <span className={styles.orb} aria-hidden />

      <div className={styles.logoRow}>
        <Link href="/" aria-label="Ecologic Circle — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Ecologic Circle" className={styles.logo} />
        </Link>
      </div>

      <div className={styles.inner}>
        <h1 className={`${styles.title} eco-h`} style={{ fontSize: titleSize }}>
          {words.map((w, i) => (
            <span key={i} className={styles.word}>
              <span>{w}</span>
              {i < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </h1>
        {sub && (
          <p className={styles.sub} style={{ maxWidth: subMaxWidth }}>
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
