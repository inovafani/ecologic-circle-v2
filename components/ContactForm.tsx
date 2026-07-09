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

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${name || 'the website'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:Info@ecologic-circle.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <label style={labelStyle} htmlFor="cf-name">Name</label>
        <input id="cf-name" style={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" style={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required />
      </div>
      <div>
        <label style={labelStyle} htmlFor="cf-msg">Message</label>
        <textarea id="cf-msg" style={{ ...field, minHeight: 130, resize: 'vertical' }} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" required />
      </div>
      <button
        type="submit"
        style={{ height: 52, borderRadius: 999, border: 'none', background: 'var(--eco-ink)', color: '#fff', fontSize: 15.5, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxShadow: '0 10px 26px -12px rgba(47,95,72,.6)' }}
      >
        Send message <span aria-hidden>→</span>
      </button>
    </form>
  );
}
