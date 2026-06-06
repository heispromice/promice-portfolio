"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react"; 
import { motion } from "framer-motion";

interface LogoIconProps {
  isTriggered?: boolean;
}

function HeaderLogoIcon({ isTriggered }: LogoIconProps) {
  return (
    <span className="relative group flex items-center justify-center w-10 h-10 cursor-pointer select-none">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-none stroke-[#D8B79A] md:group-hover:stroke-[#F4F4F4] active:stroke-[#F4F4F4] transition-all duration-300 md:group-hover:scale-105 md:group-hover:drop-shadow-[0_0_10px_rgba(244,244,244,0.3)]"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.circle 
          cx="50" 
          cy="50" 
          r="40" 
          className="opacity-95"
          strokeWidth="5"
          animate={{ 
            pathLength: isTriggered ? [1, 0, 1] : 1,
            stroke: isTriggered ? ["#D8B79A", "#F4F4F4", "#D8B79A"] : undefined
          }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72" 
          strokeWidth="5"
          animate={{ 
            pathLength: isTriggered ? [1, 0, 1] : 1,
            stroke: isTriggered ? ["#D8B79A", "#F4F4F4", "#D8B79A"] : undefined
          }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.1 }}
        />
      </svg>
    </span>
  );
}

const nav = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SYSTEMS", href: "#systems" },
  { label: "CONTACT", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); 
    if (isAnimating) return;

    setIsAnimating(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 2300); // Muda umeongezwa hapa pia kuendana na animation ya sekunde 2.2
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    nav.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300">
      <div className="mx-auto max-w-6xl w-full px-6 flex h-16 items-center justify-between md:h-20">
        <a
          href="#hero"
          onClick={handleLogoClick}
          className="flex items-center justify-center transition-transform duration-300 active:scale-95 group"
          aria-label="Fredrick N. Claudi — home"
        >
          <HeaderLogoIcon isTriggered={isAnimating} />
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 text-[13px] tracking-wide text-[#94A3B8]">
            {nav.map((n) => {
              const isActive = activeSection === n.href.replace("#", "");
              return (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className={`relative py-2 transition-colors duration-300 group ${
                      isActive ? "text-[#F4F4F4]" : "hover:text-[#F4F4F4]"
                    }`}
                  >
                    {n.label}
                    <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${isActive ? "w-full bg-[#F4F4F4]" : "w-0 bg-[#D8B79A] group-hover:w-full"}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50 inline-flex h-11 w-11 flex-col items-center justify-center text-[#F4F4F4] focus:outline-none relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end relative">
            <span className={`h-[1.5px] bg-current transition-all duration-300 ease-in-out absolute top-0 left-0 ${open ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
            <span className={`h-[1.5px] bg-current transition-all duration-300 ease-in-out absolute top-[9px] left-0 ${open ? 'w-0 opacity-0' : 'w-6'}`} />
            <span className={`h-[1.5px] bg-current transition-all duration-300 ease-in-out absolute bottom-0 left-0 ${open ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} aria-hidden={!open}>
        <div className="absolute inset-0 bg-[#0B0F19]/95 backdrop-blur-xl transition-all duration-500" onClick={() => setOpen(false)} />
        <div role="dialog" aria-modal="true" aria-label="Mobile menu" className="absolute inset-0 h-dvh w-full bg-transparent p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 h-16">
              <span className="text-sm text-[#94A3B8]">Menu</span>
            </div>
            <nav className="mt-12 px-8 sm:px-12 text-left w-full max-w-4xl" aria-label="Mobile primary">
              <ul className="space-y-6">
                {nav.map((n, index) => {
                  const isActive = activeSection === n.href.replace("#", "");
                  return (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
                        className={`group inline-flex items-baseline relative pb-1 transform transition-all duration-500 ease-out ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                      >
                        <span className={`text-[20px] sm:text-[24px] tracking-wide transition-colors duration-300 ${isActive ? "text-[#D8B79A]" : "text-[#F4F4F4] group-hover:text-[#D8B79A]"}`}>
                          {n.label}
                        </span>
                        <span className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${isActive ? "w-full bg-[#D8B79A]" : "w-0 bg-[#D8B79A] group-hover:w-full"}`} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="pt-6 pb-8 px-8 sm:px-12 border-t border-white/[0.03] max-w-4xl w-full mx-auto">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#94A3B8] mb-4">Connect</p>
            <div className="flex items-center gap-6">
              
              {/* Custom SVG Github */}
              <a 
                href="https://github.com/heispromice" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"
                aria-label="GitHub"
              >
                <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              {/* Custom SVG LinkedIn */}
              <a 
                href="https://tz.linkedin.com/in/fredrick-claudi-5a162230b" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"
                aria-label="LinkedIn"
              >
                <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Custom SVG Instagram */}
              <a 
                href="https://www.instagram.com/_heispromice" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"
                aria-label="Instagram"
              >
                <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              <a href="mailto:heispromice@gmail.com" className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}