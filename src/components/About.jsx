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
    title: 'Backend & Systems at Heart',
    body: 'Designing high-performance REST APIs end-to-end — from Node.js, Express.js, and FastAPI handlers to PostgreSQL schemas with Prisma and algorithmic route optimization.',
  },
  {
    icon: Code2,
    color: '#38bdf8',
    title: 'Full Stack & Mobile Versatility',
    body: 'Ships production-ready code across platforms — React.js web interfaces, Node.js and Python backends, Flutter mobile apps (Android/iOS), and Firebase cloud services.',
  },
  {
    icon: Brain,
    color: '#34d399',
    title: 'AI & Multi-Agent Systems',
    body: 'Trained in the Google × Kaggle 5-Day AI Agents Intensive Program (Google ADK, Gemini, tool calling, MCP, and multi-agent systems); builds AI apps like StyleSpeak with transparent reasoning traces.',
  },
  {
    icon: Zap,
    color: '#f59e0b',
    title: 'Competitive Programmer & Hackathons',
    body: 'Solved 300+ problems across LeetCode and CodeChef. Shortlisted in Adobe Hackathon (Round 2, top 2,00,000+), 3rd Runner-Up in CipherCop National Hackathon, and 4-year Laxmi Charities Scholarship recipient.',
  },
];

const INTERESTS = [
  'Software Engineering', 'Backend Systems', 'Full Stack Development',
  'Data Structures & Algorithms', 'AI Agents & LLMs', 'Database Design',
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
            An IT student at GNITS who ships production-ready software,
            excels in national hackathons and competitive programming, and continuously raises the bar.
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
                I'm <strong style={{ color: 'var(--text-primary)' }}>Manvitha Budidha</strong>, an
                Information Technology student at G. Narayanamma Institute of Technology and Science, Hyderabad,
                maintaining a <strong style={{ color: 'var(--accent)' }}>9.38 CGPA</strong> while engineering
                production-ready software systems.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                With hands-on experience building full-stack applications, backend REST APIs, and algorithm-driven
                systems, I develop software end-to-end — from database modeling in PostgreSQL with Prisma to deploying
                responsive React frontends, robust Node.js/FastAPI backends, and cross-platform Flutter mobile applications.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I build because I love the craft of engineering. Whether implementing capacity-aware greedy nearest-neighbor
                routing with the Haversine formula in <strong style={{ color: 'var(--text-primary)' }}>SmartRoute</strong>,
                developing cross-platform medication tracking with Firebase security rules in <strong style={{ color: 'var(--text-primary)' }}>MediAssure</strong>,
                or architecting AI-powered style recommendations in <strong style={{ color: 'var(--text-primary)' }}>StyleSpeak</strong> —
                every project solves a real-world problem.
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
