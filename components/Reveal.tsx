'use client';

import { useRef, type ElementType, type CSSProperties, type ReactNode, type Ref } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
  /** Animate each direct child in a stagger instead of the wrapper itself. */
  stagger?: boolean;
  y?: number;
  start?: string;
  duration?: number;
  staggerEach?: number;
};

export default function Reveal({
  children,
  as: Tag = 'div',
  className,
  style,
  id,
  stagger = false,
  y = 42,
  start = 'top 85%',
  duration = 0.9,
  staggerEach = 0.12,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current!;
      const targets = stagger ? Array.from(el.children) : [el];
      if (prefersReducedMotion()) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      gsap.from(targets, {
        scrollTrigger: { trigger: el, start },
        y,
        opacity: 0,
        duration,
        ease: 'power3.out',
        stagger: stagger ? staggerEach : 0,
      });
      ScrollTrigger.refresh();
    },
    { scope: ref }
  );

  const Tag2 = Tag as ElementType;
  return (
    <Tag2 ref={ref as Ref<HTMLElement>} className={className} style={style} id={id}>
      {children}
    </Tag2>
  );
}
