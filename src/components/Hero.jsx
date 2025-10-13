import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-radial" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:grid-cols-2">
        <div className="space-y-6 sm:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Gokul B
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-lg text-slate-300"
          >
            Full‑Stack Developer • AI Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto max-w-xl text-slate-400 sm:mx-0"
          >
            I build internal apps and product features with React.js, bringing solid UI/UX practices,
            collaboration with backend teams, and performance-focused delivery.
          </motion.p>
          <div className="flex justify-center gap-3 pt-2 sm:justify-start">
            <a href="#projects" data-cursor="link" className="gradient-button">View Projects</a>
            <a href="#contact" data-cursor="link" className="glass rounded-full px-5 py-2.5 text-slate-200">Contact</a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="glass relative h-44 w-44 overflow-hidden rounded-2xl border-white/10 shadow-glow">
            <img
              src={profile}
              alt="Gokul B"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=512&auto=format&fit=crop';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


