'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import styles from './EcoNav.module.css';

type Active = 'home' | 'products' | 'impact' | 'team';

const LINKS: { label: string; href: string; key: Active }[] = [
  { label: 'Products', href: '/products', key: 'products' },
  { label: 'Our Impact Story', href: '/impact', key: 'impact' },
  { label: 'Our Team', href: '/team', key: 'team' },
];

export default function EcoNav({ active = 'home' }: { active?: Active }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      const nav = navRef.current;
      if (!nav) return;

      const shown = { v: false };
      const setShown = (show: boolean) => {
        if (show === shown.v) return;
        shown.v = show;
        gsap.to(nav, {
          y: show ? 0 : '-150%',
          opacity: show ? 1 : 0,
          duration: 0.55,
          ease: 'power3.out',
          overwrite: true,
        });
        nav.style.pointerEvents = show ? 'auto' : 'none';
      };

      const onScroll = () => {
        const hero = document.getElementById('site-hero');
        const threshold = hero
          ? hero.offsetTop + hero.offsetHeight - 90
          : window.innerHeight * 0.8;
        setShown(window.scrollY > threshold);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      onScroll();

      return () => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      };
    },
    { scope: navRef }
  );

  return (
    <div className={styles.nav} ref={navRef} aria-label="Primary">
      <div className={styles.pill}>
        <Link href="/" className={styles.brand} aria-label="Ecologic Circle home" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Ecologic Circle" className={styles.logo} />
        </Link>

        <nav className={styles.links}>
          {LINKS.map((l) => (
            <Link key={l.label} className={styles.link} href={l.href}>
              <span>{l.label}</span>
              {active === l.key && <span className={styles.underline} />}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className={styles.cta}>
          Get in touch with us
          <span aria-hidden>→</span>
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpenTop : ''}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpenMid : ''}`} />
          <span className={`${styles.burgerLine} ${open ? styles.burgerOpenBot : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        {LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`${styles.mLink} ${active === l.key ? styles.mLinkActive : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mCta} onClick={() => setOpen(false)}>
          Get in touch with us <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
