import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  // Programming
  'Java',
  'JavaScript',
  'React.js',
  // Frameworks & Libraries
  'SAP Fiori/UI5',
  // Databases
  'MySQL',
  'Neo4j',
  // Tools & IDEs
  'VS Code',
  'Eclipse',
  'Git',
  'MCP Server',
  'n8n',
  'Business Application Studio (BAS)',
  'Cursor',
  // Cloud & Platforms
  'SAP BTP',
  'SAP Cloud Foundry',
  'SAP Integration',
  // AI & Automation
  'Generative AI',
  'ChatGPT / Claude',
  'RAG',
  'Knowledge Graphs',
  'API Integration',
  'Augment'
];

export default function Skills() {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="glass rounded-xl px-4 py-3 text-slate-200"
            data-cursor="link"
          >
            {s}
          </motion.div>
        ))}
      </div>
    </div>
  );
}


