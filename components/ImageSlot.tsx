'use client';

import type { CSSProperties } from 'react';
import styles from './ImageSlot.module.css';

type Props = {
  label?: string;
  shape?: 'rect' | 'rounded' | 'circle';
  radius?: number;
  aspect?: string;
  /** Use the dark variant (for placeholders that sit on dark surfaces). */
  dark?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function ImageSlot({
  label = 'Add photo',
  shape = 'rounded',
  radius = 24,
  aspect,
  dark = false,
  className = '',
  style,
}: Props) {
  const radiusValue = shape === 'circle' ? '50%' : `${radius}px`;
  return (
    <div
      className={`${styles.slot} ${dark ? styles.dark : ''} ${className}`}
      style={{ borderRadius: radiusValue, aspectRatio: aspect, ...style }}
      role="img"
      aria-label={label}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        width="30"
        height="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="9" r="1.6" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
