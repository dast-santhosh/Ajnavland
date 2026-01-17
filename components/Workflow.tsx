
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSearch, Zap, Hammer, PenTool, AlertCircle } from 'lucide-react';

const steps = [
  {
    title: "Intake",
    subtitle: "OCR Scanning",
    desc: "Optical character recognition digitizes paper trails, police reports, and complex contracts into semantic vectors.",
    icon: <FileSearch className="w-10 h-10" />
  },
  {
    title: "Parallel Analysis",
    subtitle: "Adversarial Modeling",
    desc: "Prosecutor and Defense sub-engines stress-test every clause, simulating courtroom arguments in milliseconds.",
    icon: <Zap className="w-10 h-10" />
  },
  {
    title: "Adjudication",
    subtitle: "Evidence Weighing",
    desc: "The Judge engine weights findings via BSA (Binary Systemic Analysis) to determine statistical probability.",
    icon: <Hammer className="w-10 h-10" />
  },
  {
    title: "Synthesis",
    subtitle: "9.3/10 Precision Output",
    desc: "The Narrator transforms raw metrics into actionable, human-readable legal intelligence.",
    icon: <PenTool className="w-10 h-10" />
  }
];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="playfair text-4xl md:text-5xl text-white mb-4">The Quin-Model Engine</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Scientific Legal Decomposition</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Step Progress Animation */}
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 border-l-4 ${
                  activeStep === idx 
                  ? 'bg-slate-800/50 border-yellow-500 scale-[1.02]' 
                  : 'bg-transparent border-slate-800 opacity-40 grayscale hover:opacity-60'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`${activeStep === idx ? 'text-yellow-500' : 'text-slate-500'}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-yellow-500/80 text-xs font-bold tracking-widest uppercase mb-2">{step.subtitle}</p>
                    <AnimatePresence mode="wait">
                      {activeStep === idx && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-slate-400 font-light text-sm"
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

          {/* Social Order Gate Visualization */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl border border-slate-800 bg-slate-950/50 backdrop-blur-xl p-12 flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 left-0 w-full p-4 border-b border-slate-800 text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                System Safeguard Status: Active
              </div>
              
              <div className="relative mb-12">
                <div className="w-24 h-24 rounded-full border-4 border-slate-800 flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.6)]" />
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 border border-dashed border-green-500/30 rounded-full" 
                />
              </div>

              <h4 className="text-2xl font-bold text-white mb-4">The Social Order Gate</h4>
              <p className="text-slate-400 font-light mb-8">Strict 85% safety guardrail autonomously rejects adversarial inputs that conflict with local jurisprudence.</p>
              
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  className="h-full bg-green-500"
                />
              </div>
              <div className="flex justify-between w-full mt-2 text-[10px] font-mono text-slate-600">
                <span>0%</span>
                <span className="text-green-500">85% OPTIMUM</span>
                <span>100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
