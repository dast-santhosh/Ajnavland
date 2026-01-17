
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-4 border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-16 h-16 mb-12 flex items-center justify-center rounded-full border border-slate-800 opacity-50">
           <div className="w-4 h-4 bg-yellow-500 rounded-sm rotate-45" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-12 text-center md:text-left mb-20">
          <div>
            <h4 className="samarkan text-2xl text-white mb-6">Ajnav</h4>
            <p className="text-slate-500 text-sm max-w-xs mx-auto md:mx-0">
              The institutional standard for legal precision and multi-model adjudication.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <h5 className="text-white font-bold mb-2">Ecosystem</h5>
            <a href="#" className="hover:text-yellow-500 transition-colors">CodeSphere</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">SenseX</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">DAST Tactical</a>
          </div>
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <h5 className="text-white font-bold mb-2">Legal Seal</h5>
            <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Engagement</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Research Whitepaper</a>
          </div>
        </div>

        <div className="w-full pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
          <p>© 2026 SANTHOSH P. ALL RIGHTS RESERVED.</p>
          <p>DEVELOPED BY APEX CODE LABS</p>
        </div>
      </div>
    </footer>
  );
};
