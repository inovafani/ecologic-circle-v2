'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';
import styles from './HomeHero.module.css';

const LINE1 = ['Next', 'level'];
const LINE2 = ['circular', 'packaging'];

export default function HomeHero() {
  const root = useRef<HTMLElement>(null);
  const artRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = prefersReducedMotion();
      if (reduce) return;

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.12,
      });
      tl.from(`.${styles.logo}`, { y: -16, opacity: 0, duration: 0.7 })
        .from(
          `.${styles.word} > span`,
          { yPercent: 120, duration: 1, ease: 'power4.out', stagger: 0.09 },
          '-=0.3',
        )
        .from(`.${styles.sub}`, { y: 18, opacity: 0, duration: 0.7 }, '-=0.6')
        .from(
          `.${styles.actions} > *`,
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          '-=0.45',
        )
        .from(
          `.${styles.art}`,
          {
            opacity: 0,
            scale: 0.8,
            rotationY: -28,
            rotationX: 8,
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1.0',
        )
        .from(`.${styles.scrollLine}`, { opacity: 0, duration: 0.6 }, '-=0.2');

      // continuous gentle float
      gsap.to(`.${styles.art}`, {
        y: -18,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // 3D mouse-driven tilt
      const art = artRef.current;
      const wrap = art?.parentElement;
      if (!art || !wrap) return;
      const rY = gsap.quickTo(art, 'rotationY', {
        duration: 0.6,
        ease: 'power3',
      });
      const rX = gsap.quickTo(art, 'rotationX', {
        duration: 0.6,
        ease: 'power3',
      });
      const onMove = (e: PointerEvent) => {
        const r = wrap.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rY(px * 26);
        rX(-py * 18);
      };
      const onLeave = () => {
        rY(0);
        rX(0);
      };
      wrap.addEventListener('pointermove', onMove);
      wrap.addEventListener('pointerleave', onLeave);
      return () => {
        wrap.removeEventListener('pointermove', onMove);
        wrap.removeEventListener('pointerleave', onLeave);
      };
    },
    { scope: root },
  );

  return (
    <section id="site-hero" ref={root} className={styles.hero}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.scrim} aria-hidden />

      <div className={styles.logoRow}>
        <Link href="/" aria-label="Ecologic Circle — home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="Ecologic Circle"
            className={styles.logo}
          />
        </Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.copy}>
          <h1 className={`${styles.title} eco-h`}>
            <span className={styles.line}>
              {LINE1.map((w, i) => (
                <span key={i} className={styles.word}>
                  <span>{w}</span>
                  {i < LINE1.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
            <span className={styles.line}>
              {LINE2.map((w, i) => (
                <span key={i} className={styles.word}>
                  <span>{w}</span>
                  {i < LINE2.length - 1 ? ' ' : ''}
                </span>
              ))}
            </span>
          </h1>
          <p className={styles.sub}>
            Cleaning the air. Saving trees. Replacing plastics for a net
            positive future. Scalable growth.
          </p>
          <div className={styles.actions}>
            <Link href="/products" className={styles.btnPrimary}>
              Explore our products <span aria-hidden>→</span>
            </Link>
            <Link href="/impact" className={styles.btnGhost}>
              Our impact story
            </Link>
          </div>
        </div>

        <div className={styles.artWrap}>
          <span className={styles.glow} aria-hidden />
          <div className={styles.art} ref={artRef}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-box-transparant.png"
              alt="Compostable organic packaging"
            />
          </div>
          <span className={styles.shadow} aria-hidden />
        </div>
      </div>
    </section>
  );
}
