import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="relative isolate py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-radial" />
      <div className="mx-auto max-w-3xl flex flex-col items-center justify-center gap-6 text-center">
        <div className="space-y-4">
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
            className="mx-auto max-w-3xl text-slate-300 text-justify"
          >
            I am a skilled developer with a B.Tech in Information Technology and a proven ability to deliver high‑quality
            software solutions. With a strong foundation in Java, React.js, and SAP technologies, I specialize in building
            modern, AI‑enhanced applications. My experience ranges from developing responsive user interfaces to
            implementing complex, full‑stack solutions. I am passionate about leveraging technology to drive innovation and
            create exceptional user experiences.
          </motion.p>
          <div className="flex justify-center gap-3 pt-2">
            <motion.a
              href="#projects"
              data-cursor="link"
              className="gradient-hover"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              data-cursor="link"
              className="gradient-hover"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Contact
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="flex justify-center pt-4"
          >
            <div className="glass relative h-36 w-36 overflow-hidden rounded-2xl border-white/10 shadow-glow sm:h-44 sm:w-44 md:h-52 md:w-52">
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
      </div>
    </section>
  );
}


