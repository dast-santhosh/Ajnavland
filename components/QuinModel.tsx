
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, Zap, Hammer, PenTool, Eye } from 'lucide-react';

const steps = [
  {
    title: "Data Intake",
    subtitle: "The Ajnav Eye",
    desc: "Unstructured legal artifacts—from physical notices to digital contracts—enter the Synthetic Judiciary Network via the Third Eye neural interface for deep semantic parsing.",
    icon: <Eye className="w-10 h-10" />
  },
  {
    title: "Parallel Analysis",
    subtitle: "Adversarial Stress-Test",
    desc: "Simultaneous Prosecutor (Violation search) and Defense (Rights search) engines analyze the statutory mapping of BNS 2024 to identify every possible legal pivot and risk factor.",
    icon: <Zap className="w-10 h-10" />
  },
  {
    title: "Adjudication",
    subtitle: "Probabilistic Weighting",
    desc: "The Judge engine weights findings using the Binary Systemic Analysis (BSA) framework to determine the statistical probability of guilt and statutory compliance.",
    icon: <Hammer className="w-10 h-10" />
  },
  {
    title: "Synthesis",
    subtitle: "High-Fidelity Output",
    desc: "The Narrator transforms raw metrics and Pg calculations into actionable, human-readable legal intelligence, ready for immediate institutional deployment.",
    icon: <PenTool className="w-10 h-10" />
  }
];

export const QuinModel: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="playfair text-4xl md:text-5xl text-white mb-4">Quin-Model Architecture</h2>
          <p className="text-slate-500 uppercase tracking-widest text-[10px] font-bold">The Science of Synthetic Adjudication</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl cursor-pointer transition-all duration-500 border border-slate-800 ${
                  activeStep === idx 
                  ? 'bg-slate-800/40 border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.1)]' 
                  : 'bg-transparent opacity-40 hover:opacity-60'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`${activeStep === idx ? 'text-yellow-500' : 'text-slate-500'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-yellow-500/80 text-[10px] font-bold tracking-widest uppercase mb-2">{step.subtitle}</p>
                    <AnimatePresence mode="wait">
                      {activeStep === idx && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-slate-400 font-light text-sm leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative aspect-square flex flex-col items-center justify-center">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="p-8 bg-slate-950/80 border border-slate-800 rounded-3xl backdrop-blur-2xl shadow-2xl w-full"
             >
                <p className="text-slate-500 text-[9px] font-mono uppercase tracking-widest mb-6">Adjudication Logic: Pg Calculation Engine</p>
                <div className="flex items-center justify-center py-10">
                   <div className="text-2xl md:text-3xl text-white math-font italic flex items-center gap-4">
                      <span>P<sub>g</sub></span>
                      <span>=</span>
                      <div className="flex flex-col items-center">
                         <span className="border-b border-white px-4 pb-1">&Sigma; Weights of Evidence</span>
                         <span className="pt-1">Total Statutory Burden</span>
                      </div>
                   </div>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-6 text-center italic">
                  This formula represents our unique approach to balancing evidentiary strength against the specific statutory requirements of the 2024 legal transition.
                </p>
                <div className="mt-4 pt-6 border-t border-slate-900 flex justify-between items-center">
                   <div className="space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Status</p>
                      <p className="text-green-500 font-bold text-[10px]">MODEL_STABLE</p>
                   </div>
                   <div className="text-right space-y-1">
                      <p className="text-[10px] text-slate-500 uppercase tracking-tighter">Confidence</p>
                      <p className="text-yellow-500 font-bold text-[10px]">99.82% ACCURACY</p>
                   </div>
                </div>
             </motion.div>
             <div className="absolute -inset-10 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
