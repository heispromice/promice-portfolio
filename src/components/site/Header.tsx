import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { LogoIcon } from "./Preloader"; 

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Systems", href: "#systems" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /**
   * Prevents standard body viewport text scrolling when mobile navigational drawer is engaged.
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /**
   * Implements the Intersection Observer API to detect active components in real-time.
   */
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
    <header
      // FIKSA YA KI-SENIOR: Imebaki bg-transparent pekee. Haina blur, haina rangi ya nyuma, 100% transparent hata ukiscroll!
      className="fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
    >
      <div className="container-pro flex h-16 items-center justify-between md:h-20">
        
        {/* BRAND LOGO CONTEXT */}
        <a
          href="#hero"
          className="flex items-center justify-center transition-transform duration-300 active:scale-95"
          aria-label="Fredrick N. Claudi — home"
        >
          <LogoIcon />
        </a>

        {/* Desktop Navigation Layout */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-9 font-mono text-[13px] tracking-wide text-[#94A3B8]">
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
                    <span 
                      className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                        isActive 
                          ? "w-full bg-[#F4F4F4]" 
                          : "w-0 bg-[#D8B79A] group-hover:w-full"
                      }`} 
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Devon Stank Style Animated Hamburger Button */}
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

      {/* Devon Stank Full-Screen Overlay Infrastructure for Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-[#0B0F19]/95 backdrop-blur-xl transition-all duration-500"
          onClick={() => setOpen(false)}
        />
        
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className="absolute inset-0 h-dvh w-full bg-transparent p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 h-16">
              <span className="font-mono text-sm text-[#94A3B8]">Menu</span>
            </div>
            
            <nav className="mt-20 px-8 sm:px-12 text-left w-full max-w-4xl" aria-label="Mobile primary">
              <ul className="space-y-8">
                {nav.map((n, index) => {
                  const isActive = activeSection === n.href.replace("#", "");
                  return (
                    <li key={n.href}>
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        style={{ transitionDelay: open ? `${index * 60}ms` : '0ms' }}
                        className={`group inline-flex items-baseline relative pb-1 transform transition-all duration-500 ease-out ${
                          open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                        }`}
                      >
                        <span className={`font-serif text-[32px] sm:text-[42px] tracking-tight transition-colors duration-300 ${
                          isActive ? "text-[#D8B79A]" : "text-[#F4F4F4] group-hover:text-[#D8B79A]"
                        }`}>
                          {n.label}
                        </span>
                        
                        <span 
                          className={`absolute bottom-0 left-0 h-[1px] transition-all duration-300 ${
                            isActive 
                              ? "w-full bg-[#D8B79A]" 
                              : "w-0 bg-[#D8B79A] group-hover:w-full"
                          }`} 
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="pt-6 pb-8 px-8 sm:px-12 border-t border-white/[0.03] max-w-4xl w-full mx-auto">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] mb-4">
              Connect
            </p>
            <div className="flex items-center gap-6">
              <a href="https://github.com/heispromice" target="_blank" rel="noreferrer" className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"><Github className="h-[18px] w-[18px]" /></a>
              <a href="https://www.linkedin.com/in/fredrick-claudi-5a162230b" target="_blank" rel="noreferrer" className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"><Linkedin className="h-[18px] w-[18px]" /></a>
              <a href="mailto:heispromice@gmail.com" className="text-[#D8B79A] hover:text-[#F4F4F4] transition-colors"><Mail className="h-[18px] w-[18px]" /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}