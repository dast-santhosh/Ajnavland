
import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const Background: React.FC<{ activeTheme: string }> = ({ activeTheme }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const getThemeColor = () => {
    switch (activeTheme) {
      case 'emerald': return 'rgba(16, 185, 129, 0.15)';
      case 'gold': return 'rgba(197, 160, 89, 0.15)';
      case 'royal': return 'rgba(59, 130, 246, 0.15)';
      default: return 'rgba(197, 160, 89, 0.15)';
    }
  };

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-950 transition-colors duration-1000">
      {/* Geometric Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#f8fafc 1px, transparent 1px), linear-gradient(90deg, #f8fafc 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Cursor Reactive Glow */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(circle, ${getThemeColor()} 0%, transparent 70%)`
        }}
      />
    </div>
  );
};
