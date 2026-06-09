import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight, ArrowDown, Sparkles, MapPin } from 'lucide-react';
import { CONTACT } from '../data/content';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] },
});

function GitHubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const STATS = [
  { value: '9.39', label: 'CGPA', sub: 'B.Tech IT' },
  { value: '3+', label: 'Projects', sub: 'In Production' },
  { value: '300+', label: 'DSA Problems', sub: 'LeetCode & CodingBat' },
  { value: '2×', label: 'Hackathons', sub: 'Winner + Finalist' },
];

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px]"
          style={{ background: 'var(--accent)' }}
        />
        <div
          className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: 'var(--accent-2)' }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full opacity-[0.04] blur-[90px]"
          style={{ background: 'var(--accent-3)' }}
        />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          opacity: 0.4,
        }}
      />

      {/* Content */}
      <div className="section-container relative z-10 text-center">

        {/* Status badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-semibold border"
            style={{
              background: 'var(--accent-dim)',
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              letterSpacing: '0.02em',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#4ade80]" />
            <Sparkles size={12} />
            Available for Internship Opportunities
          </span>
        </motion.div>

        {/* Location */}
        <motion.div {...fadeUp(0.05)} className="flex items-center justify-center gap-1.5 mb-5">
          <MapPin size={13} style={{ color: 'var(--text-muted)' }} />
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Hyderabad, India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-black tracking-tight mb-4"
          style={{
            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
            letterSpacing: '-0.05em',
            lineHeight: 1.0,
            color: 'var(--text-primary)',
          }}
        >
          Manvitha{' '}
          <span className="gradient-text">Budidha</span>
        </motion.h1>

        {/* Role pills */}
        <motion.div {...fadeUp(0.2)} className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {['IT Student @ GNITS', 'Aspiring Software Engineer', 'Full Stack Developer'].map((role) => (
            <span
              key={role}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: 'var(--surface-2)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border)',
              }}
            >
              {role}
            </span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
            color: 'var(--text-secondary)',
            maxWidth: '580px',
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          I build production-grade systems — from mobile health apps to async REST APIs —
          and compete in national hackathons to sharpen my engineering instincts.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollTo('#projects'); }}
            className="btn-primary"
            id="hero-view-projects"
          >
            View Projects <ChevronRight size={15} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-ghost"
            id="hero-download-resume"
          >
            <Download size={15} />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
            className="btn-ghost"
            id="hero-contact"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social quick links */}
        <motion.div {...fadeUp(0.45)} className="flex items-center justify-center gap-4 mb-16">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--text-muted)' }}
          >
            <GitHubIcon size={14} /> GitHub
          </a>
          <span style={{ color: 'var(--border)' }}>·</span>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:opacity-70"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>

        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.55)}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px max-w-2xl mx-auto"
          style={{
            background: 'var(--border)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center py-6 px-4"
              style={{ background: 'var(--surface)' }}
            >
              <div
                className="text-2xl font-black tracking-tight gradient-text"
                style={{ letterSpacing: '-0.03em' }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold mt-1" style={{ color: 'var(--text-primary)' }}>
                {stat.label}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        style={{ color: 'var(--text-muted)' }}
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs font-medium tracking-widest uppercase">scroll</span>
        <ArrowDown size={15} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
