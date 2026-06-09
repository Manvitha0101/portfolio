import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronRight, ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-subtitle">
            Real-world engineering experience — shipping production code, not toy projects.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              {...fadeUp(0.1 + i * 0.1)}
              className="exp-card"
            >
              <div className="p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{exp.logo}</span>
                      <div>
                        <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                          {exp.company}
                        </h3>
                        <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                          {exp.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-sm font-semibold px-3 py-1 rounded-full inline-block mb-1"
                      style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                    >
                      {exp.type}
                    </div>
                    <p className="text-xs block" style={{ color: 'var(--text-muted)' }}>
                      {exp.period} · {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {exp.summary}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Responsibilities
                  </p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Key Achievements
                  </p>
                  <div className="grid sm:grid-cols-1 gap-2">
                    {exp.achievements.map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl"
                        style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent-dim)' }}
                      >
                        <CheckCircle size={14} className="flex-shrink-0" />
                        {a}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
