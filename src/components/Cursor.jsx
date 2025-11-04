import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 600, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 600, damping: 40, mass: 0.5 });
  const [cursorState, setCursorState] = useState('default');
  const rafRef = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (!target) return setCursorState('default');
      const mode = target.getAttribute('data-cursor');
      setCursorState(mode || 'link');
    };
    const onOut = () => setCursorState('default');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  const size = cursorState === 'download' ? 36 : cursorState === 'link' ? 28 : 18;
  const color = cursorState === 'download' ? 'bg-cyan-400/80' : cursorState === 'link' ? 'bg-brand-500/80' : 'bg-slate-200/70';

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen md:block ${color}`}
      style={{ x: springX, y: springY, width: size, height: size, boxShadow: '0 0 40px rgba(124,58,237,0.35)' }}
    />
  );
}







