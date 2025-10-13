import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-center text-2xl font-semibold text-white"
      >
        About Me
      </motion.h2>
      <div className="mt-2 flex justify-center">
        <div className="max-w-3xl space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-slate-300"
          >
            Summary: Full‑stack and AI‑focused developer building modern web apps with React.js on the front‑end and
            Java/Node on the back‑end. I care about thoughtful UX, clean component design, and performance. Recently
            contributed to SAP BTP projects and AI integrations to ship features that feel seamless end‑to‑end.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-slate-300"
          >
            Experience: Built internal applications with React.js, collaborating with backend teams to deliver full‑stack
            solutions. On SAP BTP, I worked with Fiori/UI5 and CAP services (OData V4, HANA Cloud). I also designed
            knowledge‑graph solutions with Neo4j enabling RAG‑style retrieval for better knowledge delivery.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-slate-300"
          >
            Skills: React.js, JavaScript/TypeScript, Java, Tailwind CSS, Git, REST APIs; SAP BTP with Fiori/UI5,
            CAP, OData V4, and HANA Cloud; Neo4j for knowledge graphs and RAG. I pay attention to accessibility,
            clean component architecture, state management, and performance profiling, and I collaborate closely with
            backend teams to ship reliable, production‑ready features.
          </motion.p>
        </div>
      </div>
    </div>
  );
}


