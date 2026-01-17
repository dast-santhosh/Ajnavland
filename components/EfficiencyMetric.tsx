
import React from 'react';
import { motion } from 'framer-motion';

export const EfficiencyMetric: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="playfair text-4xl md:text-5xl text-white">The 9.3 Metric</h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Efficiency is the primary driver of justice. Our core engine locks at a 9.3/10 precision score, representing a near-perfect alignment between raw evidence and statutory law.
          </p>
          <p className="text-slate-500 text-sm leading-relaxed">
            Through rigorous stress-testing on the 2024 statutes, Ajnav has proven unmatched in risk identification and statutory mapping. By quantifying legal variables into our P<sub>g</sub> formula, we achieve an adjudication latency that legacy systems simply cannot match.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
               <p className="text-yellow-500 font-bold text-xl mb-1">2024 READY</p>
               <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Full Compliance</p>
            </div>
            <div className="p-5 bg-slate-900/50 rounded-2xl border border-slate-800">
               <p className="text-yellow-500 font-bold text-xl mb-1">0.1ms</p>
               <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Latency Floor</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72">
            <svg className="w-full h-full rotate-[-90deg]">
              <circle 
                cx="144" cy="144" r="130" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="10" 
                className="text-slate-800"
              />
              <motion.circle 
                cx="144" cy="144" r="130" 
                fill="transparent" 
                stroke="currentColor" 
                strokeWidth="10" 
                strokeDasharray="816"
                initial={{ strokeDashoffset: 816 }}
                whileInView={{ strokeDashoffset: 816 * (1 - 0.93) }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.4)]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
               <motion.span 
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1 }}
                 className="text-6xl font-black text-white"
               >
                 9.3
               </motion.span>
               <span className="text-slate-500 uppercase tracking-[0.4em] text-[9px] font-bold">Precision Lock</span>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};
