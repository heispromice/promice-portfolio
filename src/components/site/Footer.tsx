import { useState, useEffect } from "react";
import { ArrowUp, X, Shield, Scale } from "lucide-react";

export function Footer() {
  // State za kudhibiti mifumo ya Modals
  const [isImprintOpen, setIsImprintOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Kuzuia background kuscroll pale modal inapokuwa wazi
  useEffect(() => {
    if (isImprintOpen || isPrivacyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isImprintOpen, isPrivacyOpen]);

  return (
    <footer className="border-t border-white/[0.04] bg-[#0B0F19] relative">
      <div className="container-pro py-10 md:py-12">
        
        {/* UPPER FOOTER: Sitemap & Technical Signature */}
        <div className="grid items-start gap-12 border-b border-white/[0.04] pb-10 md:grid-cols-4 md:gap-8">
          
          {/* Column 1: Technical Signature */}
          <div className="space-y-4 md:col-span-2">
            
            {/* NEW BRAND LOGO ICON: Replaced F.C circle with the customized 'P' vector (Non-gold / White-muted) */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/80">
              <svg
                viewBox="0 0 100 100"
                className="w-8 h-8 fill-none stroke-current opacity-80"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {/* Static single-stroke continuous identity layout mapping matching Preloader */}
                <circle cx="50" cy="50" r="40" />
                <path d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72" strokeWidth="5.5" />
              </svg>
            </div>

            {/* Increased font-size slightly from text-xs to text-[13px] for enhanced structural readability */}
            <p className="max-w-md font-sans text-[15px] leading-relaxed text-[#94A3B8]/90">
              Fredrick N. Claudi. Specialized in engineering high-performance programmatic systems and reliable software architectures.
            </p>
          </div>

          {/* Column 2: EXPLORE (Quick Sitemap) */}
          <div className="md:col-start-3">
            <p className="font-ui text-[11px] uppercase tracking-[0.25em] text-[#94A3B8]">
              Explore
            </p>
            {/* Increased font-size slightly from text-xs to text-[13px] */}
            <ul className="mt-4 space-y-2.5 font-sans text-[14px] text-[#94A3B8]">
              <li><a href="#hero" className="hover:text-[#F4F4F4] transition-colors">Architecture</a></li>
              <li><a href="#about" className="hover:text-[#F4F4F4] transition-colors">Philosophy</a></li>
              <li><a href="#projects" className="hover:text-[#F4F4F4] transition-colors">Systems</a></li>
              <li><a href="#contact" className="hover:text-[#F4F4F4] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: ENGAGE */}
          <div className="md:col-start-4">
            <p className="font-ui text-[11px] uppercase tracking-[0.25em] text-[#94A3B8]">
              Engage
            </p>
            {/* Increased font-size slightly from text-xs to text-[13px] */}
            <ul className="mt-4 space-y-2.5 font-sans text-[14px] text-[#94A3B8]">
              <li><a href="#contact" className="hover:text-[#F4F4F4] transition-colors">Consultation</a></li>
              <li><a href="#contact" className="hover:text-[#F4F4F4] transition-colors">Direct WhatsApp</a></li>
              <li><a href="mailto:heispromice@gmail.com" className="hover:text-[#F4F4F4] transition-colors">Direct Email</a></li>
            </ul>
          </div>

        </div>

        {/* LOWER FOOTER: Legal, Copyright, and Utility Links */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center md:mt-12">
          
          {/* Column 1: Copyright */}
          <p className="font-ui text-[12px] text-[#94A3B8]">
            © {new Date().getFullYear()} Fredrick N. Claudi. All rights reserved. Tanzania.
          </p>

          {/* Column 2: Legal & Utility */}
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

      {/* ========================================================================= */}
      {/* 1. IMPRINT MODAL SYSTEM  */}
      {/* ========================================================================= */}
      {isImprintOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={() => setIsImprintOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111625] p-6 shadow-2xl md:p-8 transform transition-all">
            <button 
              onClick={() => setIsImprintOpen(false)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#F4F4F4] transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
              <Scale className="text-[#D8B79A] h-5 w-5" />
              <h3 className="font-semibold text-lg text-[#F4F4F4]">Legal Notice</h3>
            </div>
            
            <div className="mt-6 space-y-4 font-sans text-xs leading-relaxed text-[#94A3B8]">
              <p className="text-sm font-semibold text-[#F4F4F4]">Information according to § 5 TMG / Legal Responsibility:</p>
              <div>
                <p className="text-[#F4F4F4] font-medium">Fredrick N. Claudi</p>
                <p>Independent Solutions Provider & Systems Architect</p>
                <p>Dar es Salaam, Tanzania</p>
              </div>
              <div>
                <p className="text-[#F4F4F4] font-medium">Contact Information:</p>
                <p>Email: heispromice@gmail.com</p>
                <p>Systems Domain: promice.dev</p>
              </div>
              <p className="border-t border-white/[0.03] pt-4 text-[11px] italic">
                Disclaimer: The content provided on this portfolio represents proprietary architectural frameworks and project representations. Unauthorized duplication is strictly monitored.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. PRIVACY POLICY MODAL SYSTEM */}
      {/* ========================================================================= */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={() => setIsPrivacyOpen(false)} />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111625] p-6 shadow-2xl md:p-8 transform transition-all">
            <button 
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#F4F4F4] transition-colors"
            >
              <X size={18} />
            </button>
            
            <div className="flex items-center gap-3 border-b border-white/[0.05] pb-4">
              <Shield className="text-[#D8B79A] h-5 w-5" />
              <h3 className="font-semibold text-lg text-[#F4F4F4]">Privacy Protocol</h3>
            </div>
            
            <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2 space-y-4 font-sans text-xs leading-relaxed text-[#94A3B8]">
              <p className="text-sm font-semibold text-[#F4F4F4]">Data Protection Architecture</p>
              <p>
                As a systems engineer, data integrity and privacy are wired into my philosophy. This portfolio platform does not deploy tracking scripts, third-party analytical cookies, or pixel harvesting pipelines.
              </p>
              <div>
                <p className="text-[#F4F4F4] font-medium">1. Connection Data</p>
                <p>When you interact with the direct CTAs (WhatsApp or Email), your transmission follows standard TLS/SSL encrypted protocols natively handled by your respective device clients.</p>
              </div>
              <div>
                <p className="text-[#F4F4F4] font-medium">2. Client Logging</p>
                <p>This static deployment infrastructure handles request logs strictly for standard performance optimization and DDOS mitigation. No profiling architectures are active.</p>
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