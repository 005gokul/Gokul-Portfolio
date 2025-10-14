import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/Cursor.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Contact from './components/Contact.jsx';
import Certifications from './components/Certifications.jsx';
import MobileNav from './components/MobileNav.jsx';

export default function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.12),transparent)]">
      <Cursor />

      <header className="sticky top-0 z-40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-white" data-cursor="link">Gokul<span className="text-brand-500">.</span></a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a className="nav-link hover:text-white" href="#about" data-cursor="link">About</a>
            <a className="nav-link hover:text-white" href="#certifications" data-cursor="link">Certifications</a>
            <a className="nav-link hover:text-white" href="#skills" data-cursor="link">Skills</a>
            <a className="nav-link hover:text-white" href="#projects" data-cursor="link">Projects</a>
            <a className="nav-link hover:text-white" href="#resume" data-cursor="link">Resume</a>
            <a className="nav-link hover:text-white" href="#contact" data-cursor="link">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex gradient-button text-sm" data-cursor="link">Hire me</a>
            <button id="hamburger" className="sm:hidden glass rounded-xl px-3 py-2 text-slate-200" data-cursor="link" aria-label="Open menu" onClick={() => setOpen(true)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />

      <main className="mx-auto max-w-6xl px-6">
        <AnimatePresence>
          <Hero />
        </AnimatePresence>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="certifications" className="scroll-mt-24">
          <Certifications />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="resume" className="scroll-mt-24">
          <Resume />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Gokul B. All rights reserved.
      </footer>
    </div>
  );
}


