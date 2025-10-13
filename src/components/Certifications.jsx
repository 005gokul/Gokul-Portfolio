import React from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const items = [
    { title: 'Full Stack Java — Kodnest, Bangalore', date: 'Jun 2024 - Sep 2024' },
    { title: 'Introduction to Model Context Protocol (Anthropic)', date: 'Issued Aug 2025' },
    { title: 'Enterprise Design Thinking Practitioner (IBM)', date: 'Issued Mar 2022' },
  ];
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Certifications
      </motion.h2>

      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass flex items-center justify-between rounded-2xl p-5 text-slate-300"
          >
            <span className="text-white">{c.title}</span>
            <span className="text-sm text-slate-400">{c.date}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


