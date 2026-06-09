import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitFork, Layers, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
});

function GitHubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            id={`modal-close-${project.id}`}
            className="absolute top-5 right-5 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: 'var(--accent-dim)', color: 'var(--text-secondary)' }}
          >
            <X size={15} />
          </button>

          {/* Header */}
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{project.emoji}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: 'var(--accent)' }}>
                  {project.subtitle}
                </p>
                <h3 className="text-2xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>The Problem</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.problem}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>The Solution</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Architecture</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.architecture}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>Key Features</p>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="p-4 rounded-xl text-sm font-medium"
              style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid var(--accent)' }}
            >
              💥 Impact: {project.impact}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t flex gap-3" style={{ borderColor: 'var(--border)' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex-1 justify-center"
              id={`modal-github-${project.id}`}
            >
              <GitHubIcon size={14} />
              View on GitHub
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center"
                id={`modal-demo-${project.id}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            ) : (
              <button
                disabled
                className="btn-ghost flex-1 justify-center opacity-40 cursor-not-allowed"
              >
                <ExternalLink size={14} />
                Demo Coming Soon
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      {...fadeUp(0.08 * index)}
      className="premium-card p-6 flex flex-col cursor-pointer group"
      onClick={() => onOpen(project)}
      id={`project-card-${project.id}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{project.emoji}</span>
            {project.featured && (
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
              >
                Featured
              </span>
            )}
          </div>
          <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--accent)' }}>
            {project.subtitle}
          </p>
          <h3 className="text-xl font-black tracking-tight" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
        </div>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
        >
          <Layers size={17} />
        </div>
      </div>

      {/* Problem */}
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
        {project.problem}
      </p>

      {/* Impact badge */}
      <div
        className="text-xs font-medium px-3 py-2 rounded-lg mb-5"
        style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
      >
        ✦ {project.impact}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((t) => (
          <span key={t} className="tag text-[11px]">{t}</span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between pt-4 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <span
          className="text-xs font-semibold transition-colors group-hover:underline flex items-center gap-1"
          style={{ color: 'var(--accent)' }}
        >
          View details <ChevronRight size={12} />
        </span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-70"
          style={{ color: 'var(--text-muted)' }}
          id={`project-github-${project.id}`}
        >
          <GitHubIcon size={13} />
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="py-28"
      style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="section-container">
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-subtitle">
            Each project started with a real problem. Every solution is designed, architected, and shipped by me.
            Click a card to explore the full breakdown.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
