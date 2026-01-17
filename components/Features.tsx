
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const Features: React.FC = () => {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <section className="py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* OCR Slider Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="playfair text-4xl text-white">OCR Intelligence Pipeline</h2>
            <p className="text-slate-400">Physical evidence transformation. Handwritten reports and blurry contracts are instantly remapped to machine-readable statutes with 100% vector alignment.</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                Raw Data
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-widest">
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                Synthetic Core
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-8 grayscale">
              <div className="w-full space-y-4 opacity-30 italic">
                <p className="text-slate-500 blur-[1px]">"I, the undersigned, hereby declare that the following notice has been served to the local authorities..."</p>
                <div className="h-20 bg-slate-800 w-full rounded" />
                <p className="text-slate-500 blur-[2px]">Signed: J. Doe 12/04/2026</p>
              </div>
            </div>
            <div 
              className="absolute inset-0 bg-slate-950 flex flex-col p-8 border-l border-yellow-500/50"
              style={{ clipPath: `inset(0 0 0 ${sliderVal}%)` }}
            >
              <div className="space-y-6 pt-12">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded text-[10px] font-bold border border-yellow-500/20">STATUTE 42-A</span>
                  <span className="px-2 py-1 bg-red-500/10 text-red-500 rounded text-[10px] font-bold border border-red-500/20">HIGH RISK</span>
                </div>
                <p className="text-slate-200 text-sm font-mono leading-relaxed bg-slate-900/50 p-4 rounded-lg">
                  ENTITY: Doe, John<br/>
                  DATE: 2026-04-12<br/>
                  CLASSIFICATION: Civil Breach<br/>
                  STATUS: Actionable
                </p>
              </div>
            </div>
            <input 
              type="range" min="0" max="100" value={sliderVal}
              onChange={(e) => setSliderVal(parseInt(e.target.value))}
              className="absolute bottom-4 left-4 right-4 z-20 appearance-none bg-slate-800 h-1 rounded-full cursor-pointer accent-yellow-500"
            />
          </div>
        </div>

        {/* Sliding CMS Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative w-full aspect-[16/10] bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                <motion.div 
                  animate={{ x: ["0%", "-40%", "-40%", "0%"] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-full w-[140%]"
                >
                  <div className="w-[100/1.4%] h-full p-8 bg-slate-900/50 border-r border-slate-800 flex flex-col">
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-8">Sliding CMS / Chat Mode</p>
                    <div className="flex-1 space-y-4">
                      <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none w-3/4 text-xs text-slate-300">Draft the section 4 notice.</div>
                      <div className="bg-yellow-500 p-4 rounded-2xl rounded-tr-none w-3/4 ml-auto text-xs text-slate-950 font-bold">Sliding to Document View...</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-white h-full p-10 text-slate-950">
                     <h3 className="text-2xl font-bold mb-6">Document Vault</h3>
                     <div className="space-y-4">
                        <div className="h-3 bg-slate-100 w-full" />
                        <div className="h-3 bg-slate-100 w-full" />
                        <div className="h-3 bg-slate-200 w-3/4" />
                     </div>
                  </div>
                </motion.div>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="playfair text-4xl text-white">The Sliding CMS</h2>
            <p className="text-slate-400">Elite multitasking for the modern legal professional. The chat window smoothly slides to expose the Document Vault, allowing simultaneous drafting and discovery without context loss.</p>
          </div>
        </div>

        {/* Social Order Gate / Ethics */}
        <div className="py-20 flex flex-col items-center text-center">
           <motion.div 
             animate={{ scale: [1, 1.05, 1], borderColor: ["#eab308", "#ef4444", "#eab308"] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="w-32 h-32 rounded-full border-4 flex items-center justify-center mb-8 bg-yellow-500/5"
           >
              <ShieldAlert className="w-12 h-12 text-yellow-500" />
           </motion.div>
           <h3 className="text-3xl font-bold text-white mb-4">The Social Order Gate</h3>
           <p className="text-slate-400 max-w-xl">A dedicated 85% safety suppresser. Ajnav autonomously rejects inputs that conflict with local jurisprudence or fundamental human ethics.</p>
        </div>

      </div>
    </section>
  );
};
