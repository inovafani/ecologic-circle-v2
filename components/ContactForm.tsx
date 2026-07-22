'use client';

import { useState, type CSSProperties } from 'react';

const field: CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 12,
  border: '1px solid rgba(47,95,72,.18)',
  background: '#fff',
  fontSize: 15,
  fontFamily: 'var(--eco-font)',
  color: 'var(--eco-ink)',
  outline: 'none',
};
const labelStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: '#3f6b54',
  marginBottom: 8,
  display: 'block',
};

// Web3Forms access key. Set NEXT_PUBLIC_WEB3FORMS_KEY in your env
// (Vercel → Project → Settings → Environment Variables, and in .env.local
// for local dev). Get the key free at https://web3forms.com using the
// company inbox — messages are delivered to whatever email owns the key.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!ACCESS_KEY) {
      setStatus('error');
      setError('Form is not configured yet. Please email us directly.');
      return;
    }

    // honeypot — bots fill hidden fields; real users leave it empty
    const form = e.currentTarget;
    const botcheck = (form.elements.namedItem('botcheck') as HTMLInputElement)
      ?.value;
    if (botcheck) return;

    setStatus('sending');
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Enquiry from ${name || 'the website'} — Ecologic Circle`,
          from_name: 'Ecologic Circle website',
          name,
          email,
          message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setError('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        role="status"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 12,
          padding: '8px 0',
        }}
      >
        <div
          aria-hidden
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: '#e4f2d6',
            color: '#2f5f48',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5l4 4 10-10" />
          </svg>
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 600,
            color: '#2f5f48',
          }}
        >
          Message sent — thank you!
        </h3>
        <p style={{ margin: 0, fontSize: 15, color: '#5b7a68' }}>
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          style={{
            marginTop: 4,
            height: 46,
            padding: '0 24px',
            borderRadius: 999,
            border: '1.5px solid rgba(47,95,72,.22)',
            background: '#fff',
            color: '#2f5f48',
            fontSize: 14.5,
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
    >
      <div>
        <label style={labelStyle} htmlFor="cf-name">
          Name
        </label>
        <input
          id="cf-name"
          style={field}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-email">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          style={field}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
        />
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-msg">
          Message
        </label>
        <textarea
          id="cf-msg"
          style={{ ...field, minHeight: 130, resize: 'vertical' }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="How can we help?"
          required
        />
      </div>

      {/* honeypot — hidden from users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        style={{ display: 'none' }}
        aria-hidden
      />

      {status === 'error' && (
        <p role="alert" style={{ margin: 0, fontSize: 14, color: '#c0492b' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          height: 52,
          borderRadius: 999,
          border: 'none',
          background: 'var(--eco-ink)',
          color: '#fff',
          fontSize: 15.5,
          fontWeight: 600,
          cursor: status === 'sending' ? 'default' : 'pointer',
          opacity: status === 'sending' ? 0.75 : 1,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          boxShadow: '0 10px 26px -12px rgba(47,95,72,.6)',
        }}
      >
        {status === 'sending' ? (
          'Sending…'
        ) : (
          <>
            Send message <span aria-hidden>→</span>
          </>
        )}
      </button>
    </form>
  );
}
