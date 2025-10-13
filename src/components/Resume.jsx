import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center text-2xl font-semibold text-white"
      >
        Resume
      </motion.h2>
      <div className="glass flex items-center justify-between rounded-2xl p-5">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/20 text-brand-500">📄</div>
          <div>
            <p className="font-medium text-white">Gokul_B_Resume.pdf</p>
            <p className="text-xs text-slate-400">Updated {new Date().getFullYear()}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={async () => {
            const candidates = [
              // Common names
              '/assets/resume.pdf',
              '/assets/Resume.pdf',
              '/assets/Gokul%20B%20Resume.pdf',
              '/assets/Gokul-Resume.pdf',
              '/assets/Resume%20Gokul%20B.pdf',
              '/assets/Resume Gokul B.pdf',
              // Your current name variants
              '/assets/resume%20pdf%20gokul.pdf',
              '/assets/resume pdf gokul.pdf',
              '/assets/resume%20pdf%20gokul',
              '/assets/resume pdf gokul',
            ];
            let foundUrl = '';
            for (const url of candidates) {
              try {
                const res = await fetch(url);
                if (!res.ok) continue;
                const contentType = res.headers.get('content-type') || '';
                const clone = res.clone();
                const buf = await clone.arrayBuffer();
                const header = new Uint8Array(buf.slice(0, 5));
                const isPdfHeader = header[0] === 0x25 && header[1] === 0x50 && header[2] === 0x44 && header[3] === 0x46 && header[4] === 0x2d; // %PDF-
                if (isPdfHeader || contentType.includes('pdf')) {
                  // Use the already fetched buffer to avoid a second request
                  const blob = new Blob([buf], { type: 'application/pdf' });
                  const objectUrl = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = objectUrl;
                  link.download = 'Gokul_B_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  URL.revokeObjectURL(objectUrl);
                  foundUrl = url;
                  break;
                }
              } catch (e) {
                // continue
              }
            }
            if (!foundUrl) {
              alert('Resume file not found in /public/assets. Please ensure the PDF is placed there.');
              return;
            }
          }}
          className="gradient-button text-sm"
          data-cursor="download"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}


