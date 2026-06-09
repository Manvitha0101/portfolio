import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b' : 'border-b border-transparent'
        }`}
        style={{
          background: 'var(--nav-blur)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: scrolled ? 'var(--border)' : 'transparent',
        }}
      >
        <nav className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 no-underline"
            style={{ color: 'var(--text-primary)' }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black text-white"
              style={{ background: 'var(--gradient-accent)' }}
            >
              MB
            </div>
            <span className="font-bold text-sm hidden sm:block" style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Manvitha Budidha
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 list-none">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 no-underline"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--accent-dim)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Resume CTA */}
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 no-underline"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)',
                background: 'var(--accent-dim)',
              }}
              id="nav-resume"
            >
              Resume ↓
            </a>

            <button
              id="theme-toggle"
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
              style={{ color: 'var(--text-secondary)', background: 'var(--surface-2)' }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-150"
              style={{ color: 'var(--text-secondary)', background: 'var(--surface-2)' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-16 left-0 right-0 z-40 border-b md:hidden"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <ul className="section-container py-4 flex flex-col gap-1 list-none">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 no-underline"
                      style={{
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        background: isActive ? 'var(--accent-dim)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
                <a
                  href="/resume.pdf"
                  download
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold no-underline"
                  style={{ color: 'var(--accent)', background: 'var(--accent-dim)' }}
                >
                  Download Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
