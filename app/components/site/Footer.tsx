"use client";

import { useState, useEffect } from "react";
import { ArrowUp, X, Shield, Scale } from "lucide-react";

export function Footer() {
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  useEffect(() => {
    if (isImprintOpen || isPrivacyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isImprintOpen, isPrivacyOpen]);

  // ICONS ZILIZOPANGWA KWA USAWA THABITI (Symmetrical 16x16px boxes)
  const icons = {
    react: (
      <svg className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
    ),
    ts: (
      <span className="w-4 text-center text-[9px] font-mono font-bold leading-none text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors">TS</span>
    ),
    tailwind: (
      <svg className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z"/></svg>
    ),
    js: (
      <span className="w-4 text-center text-[9px] font-mono font-bold leading-none text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors">JS</span>
    ),
    csharp: (
      <span className="w-4 text-center text-[9px] font-mono font-bold leading-none text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors">C#</span>
    ),
    net: (
      <svg className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m10 8 4 4-4 4"/></svg>
    ),
    node: (
      <svg className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
    database: (
      <svg className="h-4 w-4 shrink-0 text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
    )
  };

  return (
    <footer className="border-t border-white/[0.04] bg-[#0B0F19] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        
        {/* UPPER FOOTER: Sitemap & Technical Signature */}
        <div className="grid items-start gap-12 border-b border-white/[0.04] pb-10 md:grid-cols-12 md:gap-8">
          
          {/* Column 1: Technical Signature */}
          <div className="space-y-4 md:col-span-5">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/80">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 fill-none stroke-current opacity-80"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="50" cy="50" r="40" />
                <path d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72" strokeWidth="5.5" />
              </svg>
            </div>

            <p className="max-w-md font-sans text-[15px] leading-relaxed text-[#F4F4F4]/90">
              I build reliable web and mobile software for education, business, and public safety.
            </p>
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-[#F4F4F4]/90">
              I work across the following technologies.
            </p>
          </div>

        {/* Column 2: FRONT-END STACK */}
<div className="md:col-span-3">
  <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#D8B79A] font-bold">
    Front-end
  </p>
  <ul className="mt-5 space-y-3.5 font-mono text-[11px]  text-[#F4F4F4]">
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.react}</div>
      <span>React / Next.js</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.ts}</div>
      <span>TypeScript</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.tailwind}</div>
      <span>Tailwind CSS</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.js}</div>
      <span>Vanilla JavaScript</span>
    </li>
  </ul>
</div>

{/* Column 3: BACK-END & FRAMEWORKS */}
<div className="md:col-span-4">
  <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-[#D8B79A] font-bold">
    Back-end &amp; Frameworks
  </p>
  <ul className="mt-5 space-y-3.5 font-mono text-[11px] text-[#F4F4F4]">
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.csharp}</div>
      <span>C# / .NET Core</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.net}</div>
      <span>ASP.NET MVC / Web API</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.node}</div>
      <span>Node.js / Express</span>
    </li>
    <li className="group flex items-center gap-3 cursor-default hover:text-[#D8B79A] active:text-[#D8B79A] transition-colors">
      <div className="w-4 h-4 flex items-center justify-center">{icons.database}</div>
      <span>PostgreSQL / SQL Server</span>
    </li>
  </ul>
</div>
            
        </div>

        {/* LOWER FOOTER */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center md:mt-12">
          <p className="font-ui text-[12px] text-[#94A3B8]">
            © {new Date().getFullYear()} Fredrick N. Claudi. All rights reserved. Tanzania.
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 font-ui text-[11px] uppercase tracking-[0.2em] text-[#94A3B8]">
            <li>
              <button 
                onClick={() => setIsImprintOpen(true)} 
                className="hover:text-[#F4F4F4] transition-colors uppercase tracking-[0.2em] focus:outline-none"
              >
                Imprint
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsPrivacyOpen(true)} 
                className="hover:text-[#F4F4F4] transition-colors uppercase tracking-[0.2em] focus:outline-none"
              >
                Privacy
              </button>
            </li>
            <li>
              <a href="#hero" className="inline-flex items-center gap-1.5 hover:text-[#F4F4F4] transition-colors">
                Back to top <ArrowUp className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* 1. IMPRINT MODAL */}
      {isImprintOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={() => setIsImprintOpen(false)} />
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111625] p-6 shadow-2xl md:p-8 transform transition-all">
            <button onClick={() => setIsImprintOpen(false)} className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#F4F4F4] transition-colors">
              <X size={18} />
            </button>
            <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
              <Scale className="text-[#D8B79A] h-5 w-5" />
              <h3 className="font-semibold text-lg text-[#F4F4F4]">Legal Notice</h3>
            </div>
            <div className="mt-6 space-y-4 font-sans text-xs leading-relaxed text-[#94A3B8]">
              <p className="text-sm font-semibold text-[#F4F4F4]">Website Owner:</p>
              <div>
                <p className="text-[#F4F4F4] font-medium">Fredrick N. Claudi</p>
                <p>Independent Software Developer & BI Analyst</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
              <div>
                <p className="text-[#F4F4F4] font-medium">Contact Information:</p>
                <p>Email: heispromice@gmail.com</p>
                <p>Systems Domain: fredrickclaudi.com</p>
              </div>
              <p className="border-t border-white/[0.03] pt-4 text-[11px] italic">
                Disclaimer: The content provided on this portfolio represents proprietary architectural frameworks and project representations. All original content, designs and project materials presented on this website remain the intellectual property of their respective owners unless otherwise stated.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. PRIVACY MODAL */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={() => setIsPrivacyOpen(false)} />
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111625] p-6 shadow-2xl md:p-8 transform transition-all">
            <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#F4F4F4] transition-colors">
              <X size={18} />
            </button>
            <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
              <Shield className="text-[#D8B79A] h-5 w-5" />
              <h3 className="font-semibold text-lg text-[#F4F4F4]">Privacy Protocol</h3>
            </div>
            <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2 space-y-4 font-sans text-xs leading-relaxed text-[#94A3B8]">
              <p className="text-sm font-semibold text-[#F4F4F4]">Data Protection Architecture</p>
              <p>
                As a software developer, data integrity and privacy are wired into my philosophy. This portfolio platform does not deploy tracking scripts, third-party analytical cookies, or pixel harvesting pipelines.
              </p>
              <div>
                <p className="text-[#F4F4F4] font-medium">1. Connection Data</p>
                <p>When you interact with the direct CTAs (WhatsApp, Phone call or Email), your transmission follows standard TLS/SSL encrypted protocols natively handled by your respective device clients.</p>
              </div>
              <div>
                <p className="text-[#F4F4F4] font-medium">2. Client Logging</p>
                <p>This website may collect standard server logs for security, performance monitoring, and DDOS protection purposes.</p>
              </div>
              <p className="border-t border-white/[0.03] pt-4 text-[11px]">
                Protocol Updated: June 2026. Built with strict compliance parameters.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}