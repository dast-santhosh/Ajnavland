
import React, { useState } from 'react';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { JusticeGap } from './components/JusticeGap';
import { QuinModel } from './components/QuinModel';
import { EfficiencyMetric } from './components/EfficiencyMetric';
import { StakeholderGateway } from './components/StakeholderGateway';
import { Features } from './components/Features';
import { About } from './components/About';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState('none');

  return (
    <main className="relative selection:bg-yellow-500/30">
      <Background activeTheme={activeTheme} />
      
      {/* 1. Identity & Vision */}
      <Hero />
      
      {/* 2. The Problem & Scope */}
      <JusticeGap />
      
      {/* 3. The Quin-Model Architecture */}
      <QuinModel />
      
      {/* 4. The 9.3 Metric */}
      <EfficiencyMetric />
      
      {/* 5. Stakeholder Portals */}
      <StakeholderGateway setTheme={setActiveTheme} />
      
      {/* Specialised Features & CMS */}
      <Features />
      
      {/* 6. Founder & Mentor */}
      <About />
      
      <Footer />
    </main>
  );
};

export default App;
