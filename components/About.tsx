
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-40 px-4 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="playfair text-5xl text-white mb-2">The Visionary Behind the Eye</h2>
            <p className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs mb-6">A Scientist-Entrepreneurial Framework</p>
            
            <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
              <p>
                Ajnav is the flagship legal intelligence development of <span className="text-white font-medium">Santhosh P.</span>, a scientist-entrepreneur dedicated to blending robotics, aerospace, and advanced AI to safeguard the social order.
              </p>
              <p>
                As the Founder & CEO of <span className="text-yellow-500 font-medium">CodeSphere</span> (Infrastructure), <span className="text-yellow-500 font-medium">SenseX</span> (Behavioral Science), and <span className="text-yellow-500 font-medium">DAST</span> (Tactical Security), Santhosh has engineered a unified technological nerve center. Ajnav is the legal layer of this mission—ensuring that the rules governing our society are as precise as the systems that power it.
              </p>
              <p className="text-slate-500 text-sm">
                His multi-disciplinary approach ensures that Ajnav isn't just an application, but a foundational system science project under the Apex Code Labs banner, built to scale across jurisdictions and institutional boundaries.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-3">
                 <div className="border border-slate-800 p-4 rounded-xl bg-slate-900/20">
                    <p className="text-white font-bold text-xs">CodeSphere</p>
                    <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest">Global Compute Infrastructure</p>
                 </div>
                 <div className="border border-slate-800 p-4 rounded-xl bg-slate-900/20">
                    <p className="text-white font-bold text-xs">SenseX</p>
                    <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest">Neural Behavioral Analysis</p>
                 </div>
                 <div className="border border-slate-800 p-4 rounded-xl bg-slate-900/20">
                    <p className="text-white font-bold text-xs">DAST Tactical</p>
                    <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest">Cyber-Physical Security</p>
                 </div>
                 <div className="border border-slate-800 p-4 rounded-xl bg-slate-900/20">
                    <p className="text-white font-bold text-xs">Apex Code Labs</p>
                    <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest">Deep System Science</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 group-hover:rotate-0 transition-transform duration-700 -rotate-2"
            >
              <img 
                src="https://i.ibb.co/PvLcL2yc/Whats-App-Image-2025-11-01-at-16-29-53-cb01c01b.jpg" 
                alt="Santhosh P. - Founder & CEO" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </motion.div>
            <div className="absolute -inset-8 bg-yellow-500/10 blur-[80px] rounded-full pointer-events-none -z-10 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
};
