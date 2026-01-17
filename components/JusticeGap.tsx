
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const JusticeGap: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const paperOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const paperScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const beamOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-4xl text-center z-10 mb-16">
        <h2 className="playfair text-4xl md:text-5xl text-white mb-6">The Justice Gap</h2>
        <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-6">
          There is a massive bottleneck in our legal system: 5.3 Crore cases are currently pending in Indian courts. Law is no longer a static book; it is a dynamic digital ecosystem that demands high-speed, accurate resolution.
        </p>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
          Ajnav addresses this by automating the discovery and correlation phases, dissolving decades of paperwork into milliseconds of digital insight. We are transitioning the legal framework from legacy silos to the unified BNS, BNSS, and BSA standards.
        </p>
      </div>

      <div className="relative w-full max-w-5xl h-[300px]">
        <motion.div 
          style={{ opacity: paperOpacity, scale: paperScale }}
          className="absolute inset-0 flex flex-wrap justify-center items-end gap-1 overflow-hidden"
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div 
              key={i}
              className="w-3 h-10 bg-slate-800 rounded-sm"
              animate={{ 
                y: [0, Math.random() * -15, 0],
                rotate: [0, Math.random() * 3, 0]
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
            />
          ))}
        </motion.div>

        <motion.div 
          style={{ opacity: beamOpacity }}
          className="absolute inset-0 flex justify-around items-end"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div 
              key={i}
              className="w-0.5 bg-gradient-to-t from-yellow-500/60 to-transparent h-full"
              animate={{ 
                height: ["0%", "100%", "0%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-[10px] opacity-70">Regulatory Standard: BNS, BNSS, & BSA (2024)</span>
      </div>
    </section>
  );
};
