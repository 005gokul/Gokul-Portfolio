import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileNav({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-white/10 p-6 text-slate-200"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold">Menu</span>
              <button aria-label="Close menu" onClick={onClose} className="glass rounded-full px-3 py-1.5">✕</button>
            </div>
            <nav className="mt-6 grid gap-3 text-sm">
              <a href="#about" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">About</a>
              <a href="#certifications" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">Certifications</a>
              <a href="#skills" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">Skills</a>
              <a href="#projects" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">Projects</a>
              <a href="#resume" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">Resume</a>
              <a href="#contact" className="nav-link hover:text-white" onClick={onClose} data-cursor="link">Contact</a>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}


