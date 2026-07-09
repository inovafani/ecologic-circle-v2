'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';
import styles from './EcoFooter.module.css';

export default function EcoFooter() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set('.gsap-prep', { opacity: 1, y: 0 });
        return;
      }
      gsap.from(rootRef.current!.querySelectorAll('[data-foot-col]'), {
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' },
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
      });
      ScrollTrigger.refresh();
    },
    { scope: rootRef },
  );

  return (
    <footer id="contact" ref={rootRef} className={styles.footer}>
      <div className={styles.rainbow} aria-hidden />
      <div className={styles.grid}>
        <div className={`${styles.colBrand} gsap-prep`} data-foot-col>
          <div className={styles.brandStack}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/logo-white.png"
              alt="Ecologic Circle — from ashes to impact"
              className={styles.brandLogo}
            />
          </div>
          <p className={styles.blurb}>
            Turning rice straw that would otherwise burn into compostable
            packaging, tree-free pulp and organic fertiliser — at scale.
          </p>
        </div>

        <div className={`${styles.col} gsap-prep`} data-foot-col>
          <div className={styles.colHead}>Contacts</div>
          <div className={styles.addr}>
            187 Moo 8 Sriwiang-Maeleab Road,
            <br />
            Muangchom, Wiangchai,
            <br />
            Chiangrai 57210, Thailand
          </div>
          <a href="tel:66925464205" className={styles.link}>
            +66925464205
          </a>
          <a href="mailto:Info@ecologic-circle.com" className={styles.link}>
            Info@ecologic-circle.com
          </a>
        </div>

        <div className={`${styles.col} gsap-prep`} data-foot-col>
          <div className={styles.colHead}>Discover</div>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/products" className={styles.link}>
            Our Products
          </Link>
          <Link href="/impact" className={styles.link}>
            Our Impact Story
          </Link>
          <Link href="/team" className={styles.link}>
            Our Team
          </Link>
          <Link href="/partners" className={styles.link}>
            Our Partners
          </Link>
          <a href="mailto:Info@ecologic-circle.com" className={styles.link}>
            Get in touch
          </a>
        </div>
      </div>

      <div className={styles.legal}>
        © 2026 Ecologic Circle. All Rights Reserved.
      </div>
    </footer>
  );
}
