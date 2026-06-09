import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Shield, Code2, Award } from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/content';

const ICON_MAP = { trophy: Trophy, shield: Shield, code2: Code2 };

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="section-container">

        {/* ── Achievements ── */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements &amp; Certifications</h2>
          <p className="section-subtitle">
            Proof over promises — hackathon wins, national recognition, and verified learning.
          </p>
        </motion.div>

        {/* Hackathon highlight card */}
        <motion.div
          {...fadeUp(0.1)}
          className="achievement-card mb-6 p-7 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(79, 70, 229, 0.08) 100%)',
            borderColor: '#f59e0b40',
          }}
        >
          {/* Glow */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
            style={{ background: 'rgba(245, 158, 11, 0.15)' }}
          />

          <div className="relative z-10 flex flex-wrap items-start gap-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
            >
              <Trophy size={28} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Indathon Hackathon — GNITS
                </h3>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}
                >
                  🏆 Winner
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Built and presented an end-to-end agentic AI system that placed first among competing teams
                at an institute-level hackathon on Agentic AI. Demonstrated full system design — from
                prompt engineering and LLM integration to a deployable product — under time constraints.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other achievements */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {ACHIEVEMENTS.filter(a => a.id !== 'indathon').map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Trophy;
            return (
              <motion.div
                key={item.id}
                {...fadeUp(0.15 + i * 0.08)}
                className="achievement-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.badgeColor}15`,
                      color: item.badgeColor,
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{ background: `${item.badgeColor}15`, color: item.badgeColor }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Certifications ── */}
        <motion.div {...fadeUp(0.2)} className="mb-10">
          <p className="section-label">Certifications</p>
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}>
            Verified Learning
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              {...fadeUp(0.25 + i * 0.08)}
              className="card p-6"
            >
              {/* Color bar */}
              <div
                className="w-full h-1.5 rounded-full mb-6"
                style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}50)` }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${cert.color}15`, color: cert.color }}
              >
                <Award size={18} />
              </div>
              <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--text-muted)' }}>
                {cert.issuer} · {cert.year}
              </p>
              <h4 className="text-base font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                {cert.title}
              </h4>
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
