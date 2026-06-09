import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { CERTIFICATIONS } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-12">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Verified learning</h2>
          <p className="section-subtitle">
            Structured courses that extended beyond classroom fundamentals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div key={cert.title} {...fadeUp(0.08 * i)} className="card p-6">
              {/* Colored accent line */}
              <div
                className="w-full h-1 rounded-full mb-6"
                style={{ background: cert.color }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${cert.color}18`, color: cert.color }}
              >
                <Award size={18} />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                {cert.issuer}
              </p>
              <h3 className="text-base font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {cert.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {cert.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
