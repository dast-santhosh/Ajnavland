
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { User, Briefcase, Award } from 'lucide-react';
import { PersonaTheme } from '../types';

interface CardProps {
  title: string;
  focus: string;
  description: string;
  theme: PersonaTheme;
  icon: React.ReactNode;
  onHover: (theme: PersonaTheme | null) => void;
}

const TiltCard: React.FC<CardProps> = ({ title, focus, description, theme, icon, onHover }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onHover(null);
  };

  const getColors = () => {
    switch (theme) {
      case 'emerald': return 'border-emerald-500/30 group-hover:bg-emerald-500/10';
      case 'gold': return 'border-yellow-500/30 group-hover:bg-yellow-500/10';
      case 'royal': return 'border-blue-500/30 group-hover:bg-blue-500/10';
    }
  };

  const getAccent = () => {
    switch (theme) {
      case 'emerald': return 'text-emerald-400';
      case 'gold': return 'text-yellow-400';
      case 'royal': return 'text-blue-400';
    }
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onHover(theme)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-[400px] w-full max-w-sm rounded-2xl border bg-slate-900/40 backdrop-blur-md p-7 transition-all duration-300 group cursor-pointer ${getColors()}`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="flex flex-col h-full justify-between">
        <div className={`p-3 rounded-xl bg-slate-800/50 w-fit ${getAccent()}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className={`text-[10px] font-semibold tracking-widest uppercase mb-3 ${getAccent()}`}>{focus}</p>
          <p className="text-slate-400 font-light leading-relaxed text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const StakeholderGateway: React.FC<{ setTheme: (t: string) => void }> = ({ setTheme }) => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="playfair text-4xl md:text-5xl text-white mb-3">Stakeholder Gateway</h2>
          <p className="text-slate-400 tracking-wide max-w-2xl text-sm leading-relaxed">
            Tailored interfaces designed for specific legal contexts. Whether you are a citizen seeking clarity or a professional managing complex discovery, select your portal to activate high-fidelity intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TiltCard
            title="Civilian Portal"
            focus="Justice Simplified"
            description="Navigating the legal landscape shouldn't be a privilege. We bridge the gap between complex terminology and everyday clarity, empowering the common man."
            theme="emerald"
            icon={<User className="w-6 h-6" />}
            onHover={(t) => setTheme(t || 'none')}
          />
          <TiltCard
            title="SME Vault"
            focus="Risk Mitigation"
            description="Institutional-grade risk assessment for growing enterprises. Protect your assets with predictive legal modeling and automated compliance checks."
            theme="gold"
            icon={<Briefcase className="w-6 h-6" />}
            onHover={(t) => setTheme(t || 'none')}
          />
          <TiltCard
            title="Law Pro Suite"
            focus="Elite Research"
            description="A force multiplier for legal teams. High-speed discovery, automated synthesis, and case law correlation at unprecedented scale and accuracy."
            theme="royal"
            icon={<Award className="w-6 h-6" />}
            onHover={(t) => setTheme(t || 'none')}
          />
        </div>
      </div>
    </section>
  );
};
