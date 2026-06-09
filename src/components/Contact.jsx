import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send } from 'lucide-react';
import { CONTACT } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

function GitHubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const LINKS = [
  { id: 'contact-email',    label: 'Email',    value: CONTACT.email,    href: `mailto:${CONTACT.email}`,    Icon: Mail,        copyable: true  },

  { id: 'contact-github',   label: 'GitHub',   value: 'manvitha0101',   href: CONTACT.github,               Icon: GitHubIcon,  copyable: false },
  { id: 'contact-linkedin', label: 'LinkedIn', value: 'manvithabudidha',href: CONTACT.linkedin,             Icon: LinkedInIcon,copyable: false },
];

export default function Contact() {
  const [copiedId, setCopiedId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (e, link) => {
    e.preventDefault();
    navigator.clipboard.writeText(link.value).then(() => {
      setCopiedId(link.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's connect</h2>
          <p className="section-subtitle">
            Whether it's an internship opportunity, a collaboration, or just a question —
            I read every message and respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Links */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-muted)' }}>
              Reach out directly
            </p>
            <div className="flex flex-col gap-3">
              {LINKS.map((link) => {
                const { Icon } = link;
                const isCopied = copiedId === link.id;
                const inner = (
                  <>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                        {link.label}
                      </p>
                      <p className="text-sm font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                        {link.value}
                      </p>
                    </div>
                    {link.copyable && (
                      <div style={{ color: 'var(--text-muted)' }}>
                        {isCopied ? <Check size={15} style={{ color: '#4ade80' }} /> : <Copy size={15} />}
                      </div>
                    )}
                    {!link.copyable && (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    )}
                  </>
                );

                return link.copyable ? (
                  <button
                    key={link.id}
                    id={link.id}
                    onClick={(e) => handleCopy(e, link)}
                    className="card w-full p-4 flex items-center gap-4 text-left cursor-pointer"
                  >
                    {inner}
                  </button>
                ) : (
                  <a
                    key={link.id}
                    id={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 flex items-center gap-4 no-underline"
                  >
                    {inner}
                  </a>
                );
              })}
            </div>

            {/* Availability note */}
            <div
              className="mt-6 p-4 rounded-xl flex items-center gap-3"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse shadow-[0_0_8px_#4ade80]" />
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-primary)' }}>Available</strong> for internships and part-time software engineering roles.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div {...fadeUp(0.2)}>
            <p className="text-xs font-bold uppercase tracking-wider mb-5" style={{ color: 'var(--text-muted)' }}>
              Send a message
            </p>
            {submitted ? (
              <div
                className="rounded-2xl p-8 text-center"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Message sent!
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Your email client should have opened. I'll reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost mt-5 text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      id="contact-form-name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      id="contact-form-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>
                    Message
                  </label>
                  <textarea
                    required
                    placeholder="Hi Manvitha, I'd love to discuss a software engineering internship opportunity..."
                    className="form-input"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    id="contact-form-message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary justify-center"
                  id="contact-form-submit"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
