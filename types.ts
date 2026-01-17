// Fix: Added React import to resolve the 'React' namespace error for React.ReactNode.
import React from 'react';

export type PersonaTheme = 'emerald' | 'gold' | 'royal';

export interface WorkflowStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}
