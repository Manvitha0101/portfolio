import React from 'react';
import { motion } from 'framer-motion';
import { Code, Monitor, Server, Database, Wrench, Cpu } from 'lucide-react';
import { SKILLS } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const ICON_MAP = {
  code: Code,
  monitor: Monitor,
  server: Server,
  database: Database,
  tool: Wrench,
  cpu: Cpu,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
    >
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Skills</p>
          <h2 className="section-title">What I work with</h2>
          <p className="section-subtitle">
            Technologies I've used in real projects and production systems — not just listed for appearance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => {
            const Icon = ICON_MAP[group.icon] || Code;
            return (
              <motion.div
                key={group.category}
                {...fadeUp(0.07 * i)}
                className="skill-group-card p-6"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${group.color}18`, color: group.color }}
                  >
                    <Icon size={18} />
                  </div>
                  <p
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.category}
                  </p>
                </div>

                {/* Accent line */}
                <div
                  className="h-0.5 rounded-full mb-5 w-12"
                  style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
                />

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tag"
                      style={{
                        background: `${group.color}12`,
                        color: group.color,
                        borderColor: `${group.color}30`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
