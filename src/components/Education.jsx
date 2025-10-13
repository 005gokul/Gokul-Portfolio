import React from 'react';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Education
      </motion.h2>

      <div className="mx-auto max-w-3xl space-y-4 text-slate-300">
        <div className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">Sns College Of Engineering — B.Tech Information Technology</p>
            <p className="text-sm text-slate-400">Coimbatore, India</p>
          </div>
          <div className="mt-1 flex items-center justify-between text-sm text-slate-400">
            <p>GPA: 8.34/10.00</p>
            <p>Oct 2020 - May 2024</p>
          </div>
        </div>

        <div className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">Velammal Matric Higher Secondary School, Theni — HSC</p>
            <p className="text-sm text-slate-400">2019 - 2020</p>
          </div>
          <div className="mt-1 text-sm text-slate-400">Percentage: 73.2%</div>
        </div>

        <div className="glass rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-white">Velammal Matric Higher Secondary School, Theni — SSLC</p>
            <p className="text-sm text-slate-400">2017 - 2018</p>
          </div>
          <div className="mt-1 text-sm text-slate-400">Percentage: 87.3%</div>
        </div>
      </div>
    </div>
  );
}


