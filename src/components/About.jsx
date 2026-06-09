import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain, Server, Zap } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

const PILLARS = [
  {
    icon: Server,
    color: '#818cf8',
    title: 'Backend Engineer at Heart',
    body: 'Comfortable designing REST APIs end-to-end — from Pydantic models and async FastAPI handlers to PostgreSQL schemas and Render deployments.',
  },
  {
    icon: Code2,
    color: '#38bdf8',
    title: 'Full Stack Versatility',
    body: 'Ships production code across the stack — Flutter mobile apps, React web interfaces, FastAPI backends, and Firebase cloud services.',
  },
  {
    icon: Brain,
    color: '#34d399',
    title: 'AI Application Builder',
    body: 'Integrates LLM APIs into real products (AcadeBot at Capabl) and holds certifications in Agentic AI, AI Essentials, and AI Cybersecurity.',
  },
  {
    icon: Zap,
    color: '#f59e0b',
    title: 'Competitive Programmer',
    body: 'Solved 300+ LeetCode/CodingBat problems across arrays, trees, graphs, DP, and binary search. Hackathon winner and national finalist.',
  },
];

const INTERESTS = [
  'Software Development', 'Backend Engineering', 'Full Stack Development',
  'Data Structures & Algorithms', 'AI Applications', 'System Design',
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            The person behind<br />the code
          </h2>
          <p className="section-subtitle">
            A second-year IT student at GNITS who ships production-grade software,
            wins hackathons, and continuously raises the bar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Bio */}
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                I'm <strong style={{ color: 'var(--text-primary)' }}>Manvitha Budidha</strong>, a second-year
                Information Technology student at G. Narayanamma Institute of Technology and Science, Hyderabad,
                maintaining a <strong style={{ color: 'var(--accent)' }}>9.39 CGPA</strong> while building
                real-world software systems.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                My internship at <strong style={{ color: 'var(--text-primary)' }}>Capabl</strong> gave me
                hands-on experience shipping a production AI assistant (AcadeBot) with 50+ REST endpoints,
                deployed on Render with continuous delivery from GitHub.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I build because I love the craft. From mobile health apps that
                reduce missed medication doses by 40%, to analytics APIs with sub-50ms response times —
                every project is a chance to engineer something that actually matters.
              </p>
            </div>

            {/* Interest tags */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                Interests &amp; Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {INTERESTS.map((interest) => (
                  <span key={interest} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Pillars grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                {...fadeUp(0.15 + i * 0.08)}
                className="card p-6"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ background: `${pillar.color}18`, color: pillar.color }}
                >
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-sm font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
