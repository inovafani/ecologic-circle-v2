'use client';

import { useRef, type CSSProperties } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

type Props = {
  to: number;
  decimals?: number;
  suffix?: string;
  /** Smaller label rendered on a second line (e.g. "million"). */
  after?: string;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

export default function CountUp({
  to,
  decimals = 0,
  suffix = '',
  after = '',
  duration = 1.5,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current!;
      const obj = { v: 0 };
      const afterHtml = after
        ? `<br/><span style="font-size:18px;font-weight:600;">${after}</span>`
        : '';
      const render = () => {
        const n = decimals
          ? obj.v.toFixed(decimals)
          : Math.round(obj.v).toLocaleString('en-US');
        el.innerHTML = `${n}${suffix}${afterHtml}`;
      };

      if (prefersReducedMotion()) {
        obj.v = to;
        render();
        return;
      }

      render();
      gsap.to(obj, {
        v: to,
        duration,
        ease: 'power3.out',
        onUpdate: render,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    },
    { scope: ref }
  );

  return <span ref={ref} className={className} style={style} />;
}
