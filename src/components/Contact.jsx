import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  // Form removed per request; showing centered contact details instead

  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Contact
      </motion.h2>

      <div className="mt-2 flex justify-center">
        <div className="glass w-full max-w-xl space-y-3 rounded-2xl p-6 text-center text-slate-300">
          <p>
            Email: <a data-cursor="link" className="text-brand-500 hover:underline" href="mailto:gokulbalaji0206@gmail.com">gokulbalaji0206@gmail.com</a>
          </p>
          <p>
            Phone: <a data-cursor="link" className="text-brand-500 hover:underline" href="tel:+918056830055">+91 8056830055</a>
          </p>
          <p>
            LinkedIn: <a data-cursor="link" className="text-brand-500 hover:underline" href="https://www.linkedin.com/in/goks02/" target="_blank" rel="noreferrer">linkedin.com/in/goks02</a>
          </p>
          <p>
            GitHub: <a data-cursor="link" className="text-brand-500 hover:underline" href="https://github.com/005gokul" target="_blank" rel="noreferrer">github.com/005gokul</a>
          </p>
        </div>
      </div>
    </div>
  );
}


