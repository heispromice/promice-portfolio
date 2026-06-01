import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Decorative localized light source gradient to provide layout separation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,183,154,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container-pro relative z-10 w-full">
        <div className="max-w-4xl space-y-6">
          
          {/* Main technical discipline indicator tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-[11px] tracking-wider text-[#D8B79A]"
          >
            <span>SOFTWARE DEVELOPER | SYSTEM ARCHITECT</span>
          </motion.div>

          {/* Primary identity block featuring official name layout */}
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#94A3B8]"
            >
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl tracking-tight text-[#F4F4F4] sm:text-7xl lg:text-8xl leading-[0.95]"
            >
              Fredrick N. Claudi.
            </motion.h1>
          </div>

          {/* Sub-headline stating specialized core competence engineering focus */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-2xl font-semibold tracking-tight text-[#94A3B8] sm:text-3xl lg:text-4xl"
          >
            Building high-performance programmatic systems.
          </motion.h2>

          {/*descriptive block defining software development capabilities */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#94A3B8]/90"
          >
            I specialize in turning complex architectural requirements into clean, scalable code. From low-latency backend microservices to interactive client interfaces, I build production-grade web applications engineered for structural reliability and seamless data orchestration.
          </motion.p>

          {/* Primary user interaction anchors */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#D8B79A] px-6 py-3.5 font-ui text-xs font-semibold text-[#0B0F19] transition-all hover:bg-[#c9a687] hover:shadow-[0_4px_20px_rgba(216,183,154,0.15)]"
            >
              Explore Systems
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 font-ui text-xs font-semibold text-[#F4F4F4] transition-colors hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
            >
              Get In Touch
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}