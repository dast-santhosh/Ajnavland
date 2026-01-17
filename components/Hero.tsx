
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scale, Shield, Gavel, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end center"]
  });

  const beamX = useTransform(scrollYProgress, [0, 0.8], ["-10%", "110%"]);
  const scanOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[140vh] flex flex-col items-center pt-24 pb-32 overflow-hidden px-4">
      <div className="absolute top-8 left-8 z-50">
        <h1 className="samarkan text-3xl text-slate-100 tracking-wider">Ajnav</h1>
      </div>

      <div className="sticky top-32 w-full max-w-6xl flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-12"
        >
          <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">System Science by Apex Code Labs</span>
          <h2 className="playfair text-5xl md:text-7xl font-medium text-white mb-6">Bridging the Gap Between<br/>Law and Logic.</h2>
          <p className="text-slate-400 font-light max-w-3xl mx-auto leading-relaxed text-lg">
            Developed by Apex Code Labs, Ajnav is an advanced Synthetic Judiciary Network designed to empower the common man, the growing business, and the legal professional through high-fidelity statutory mapping.
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-32 h-32 mb-16"
        >
          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-3xl" />
          <div className="absolute inset-0 rounded-full border border-yellow-500/10" />
          <div className="absolute inset-4 rounded-full border border-yellow-500/30" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-300 shadow-[0_0_40px_rgba(234,179,8,0.6)]" />
          </div>
        </motion.div>

        <div className="relative w-full max-w-4xl bg-slate-900/40 border border-slate-800 rounded-3xl p-10 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center opacity-20 select-none">
            <div className="blur-sm h-12 bg-slate-800 rounded w-full flex items-center justify-center font-mono text-[10px]">VERIFYING_CLAUSE...</div>
            <div className="blur-sm h-12 bg-slate-800 rounded w-full flex items-center justify-center font-mono text-[10px]">MAPPING_STATUTE_2024...</div>
            <div className="blur-sm h-12 bg-slate-800 rounded w-full flex items-center justify-center font-mono text-[10px]">CALCULATING_Pg...</div>
          </div>

          <motion.div 
            className="absolute inset-0 p-10 pointer-events-none"
            style={{ clipPath: useTransform(scrollYProgress, (val) => `inset(0 ${100 - (val * 100)}% 0 0)`) }}
          >
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Scale className="w-10 h-10 text-yellow-500 mb-3" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-200">Scale</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-10 h-10 text-yellow-500 mb-3" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-200">Shield</span>
              </div>
              <div className="flex flex-col items-center">
                <Gavel className="w-10 h-10 text-yellow-500 mb-3" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-200">Gavel</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-0 bottom-0 w-1 bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)] z-10"
            style={{ left: beamX, opacity: scanOpacity }}
          />
        </div>

        <motion.a
          href="https://ajnav.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-16 px-12 py-5 bg-white text-slate-950 font-bold rounded-full flex items-center gap-4 hover:scale-105 transition-all shadow-xl group"
        >
          Try it out
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
};
