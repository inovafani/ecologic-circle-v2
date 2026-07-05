'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  /** styles for the clickable thumbnail wrapper (media box) */
  style?: CSSProperties;
  /** styles for the thumbnail image */
  imgStyle?: CSSProperties;
  imgClassName?: string;
};

export default function ZoomImage({
  src,
  alt,
  fit = 'cover',
  style,
  imgStyle,
  imgClassName,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${alt}`}
        className="eco-zoom-thumb"
        style={{
          border: 'none',
          margin: 0,
          padding: 0,
          width: '100%',
          cursor: 'zoom-in',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: 'transparent',
          ...style,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            display: 'block',
            ...imgStyle,
          }}
        />
      </button>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="eco-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="eco-lightbox-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="eco-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
