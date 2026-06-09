import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Star } from 'lucide-react';
import { EDUCATION } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Education() {
  return (
    <section
      id="education"
      className="py-28"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="section-subtitle">
            Strong fundamentals built through consistent academic excellence across every level of education.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              {...fadeUp(0.1 + i * 0.1)}
              className="timeline-item mb-8"
            >
              <div className="timeline-dot" />
              <div
                className="premium-card p-6 ml-4"
                style={{
                  borderLeft: `3px solid ${edu.color}`,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{edu.icon}</span>
                      {edu.status === 'current' && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                          style={{ background: `${edu.color}20`, color: edu.color }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {edu.degree}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="text-lg font-black tracking-tight"
                      style={{ color: edu.color }}
                    >
                      {edu.grade}
                    </div>
                    <div
                      className="flex items-center gap-1 text-xs mt-1 justify-end"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <Calendar size={11} />
                      {edu.period}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1 text-xs px-3 py-1 rounded-full"
                      style={{
                        background: `${edu.color}12`,
                        color: edu.color,
                        border: `1px solid ${edu.color}30`,
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      <Star size={9} />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
