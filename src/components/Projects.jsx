import React from 'react';
import { motion } from 'framer-motion';
import ecommerceImg from '../assets/ecommerce.svg';

const projects = [
  {
    title: 'SmartProductCatalog',
    desc:
      'AI-powered product catalog on SAP BTP using Fiori/UI5, CAP + OData V4, HANA Cloud, and Groq AI for text generation and image insights. Deployed via BAS.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/005gokul/SmartProductCatalog',
  },
  {
    title: 'Hospital OPD',
    desc:
      'Hospital Outpatient Department (OPD) management system for patient registration, appointment scheduling, and healthcare administration.',
    img: 'https://images.unsplash.com/photo-1584432810601-6c7f27d6d716?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/005gokul/Hospital-OPD',
  },
  {
    title: 'BankManagement',
    desc:
      'Java console app simulating core banking: account creation, transactions, and balance management with clean OOP structure.',
    img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/005gokul/BankManagement',
  },
  {
    title: 'E-commerce',
    desc:
      'Simple e-commerce front-end built with HTML/CSS; product listing basics and UI layout.',
    img: ecommerceImg,
    code: 'https://github.com/005gokul/E-commerce',
  },
  {
    title: 'SAP-AI',
    desc:
      'Experiments and integrations around SAP + AI workflows and automation.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/005gokul/SAP-AI',
  },
  {
    title: 'KG-project',
    desc:
      'Knowledge Graph project exploring Neo4j-based retrieval and RAG patterns.',
    img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop',
    code: 'https://github.com/005gokul/KG-project',
  },
];

export default function Projects() {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass group overflow-hidden rounded-2xl border-white/10"
            data-cursor="link"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={p.img} alt="project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1584432810601-6c7f27d6d716?q=80&w=1200&auto=format&fit=crop';
              }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400">{p.desc}</p>
              <div className="flex gap-3 pt-2">
                <a href={p.code} target="_blank" rel="noreferrer" className="gradient-button text-sm" data-cursor="link">View Code</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}


