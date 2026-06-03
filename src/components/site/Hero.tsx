import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Phone, Eye } from "lucide-react"; 
import profilePic from "./profile2.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 md:pt-20 overflow-hidden">
      {/* Decorative localized light source gradient to provide layout separation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,183,154,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container-pro relative z-10 w-full">
        {/* Responsive Grid layout: 1 column on mobile, 2 columns on desktop (12-column grid configuration) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT COLUMN: Core Content Information Layout (Takes 7 cols on desktop) */}
          <div className="space-y-6 lg:col-span-7 order-1">
            
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
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl tracking-tight text-[#F4F4F4] sm:text-6xl lg:text-7xl leading-[1.05]"
              >
                Fredrick N. Claudi.
              </motion.h1>
            </div>

            {/* Sub-headline stating specialized core competence engineering focus */}
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-sans text-xl font-semibold tracking-tight text-[#94A3B8] sm:text-2xl lg:text-3xl"
            >
              Building high-performance programmatic systems.
            </motion.h2>

            {/* Descriptive block defining software development capabilities */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-[#94A3B8]/90"
            >
              I specialize in turning complex architectural requirements into clean, scalable code. From low-latency backend microservices to interactive client interfaces, I build production-grade web applications engineered for structural reliability and seamless data orchestration.
            </motion.p>

            {/* CONTACT ICONS CONTEXT: Updated for high contrast: White with Gold hover */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="flex items-center gap-6 pt-2 text-white/90"
            >
              <a href="https://github.com/heispromice" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/fredrick-claudi-5a162230b" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1"><Linkedin size={20} /></a>
              <a href="https://wa.me/255750465919" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1">
                <svg width={20} height={20} className="fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.498 5.352 1.499 5.485 0 9.948-4.467 9.951-9.96.001-2.659-1.026-5.158-2.894-7.03C17.13 1.79 14.635.764 12.012.764c-5.495 0-9.959 4.468-9.963 9.961-.001 2.083.541 4.116 1.566 5.86l-.99 3.614 3.701-.971zm11.514-4.814c-.312-.156-1.848-.912-2.126-1.013-.279-.102-.482-.156-.684.156-.202.311-.782.156-.959 1.164-.176.102-.353.156-.665.001-.312-.156-1.317-.486-2.51-1.549-.928-.827-1.554-1.849-1.737-2.16-.182-.312-.02-.481.136-.635.14-.139.312-.363.468-.545.156-.182.208-.312.312-.519.104-.208.052-.389-.026-.545-.078-.156-.684-1.649-.938-2.259-.247-.595-.5-.514-.684-.523-.176-.009-.38-.01-.584-.01-.204 0-.537.077-.817.382-.28.305-1.071 1.046-1.071 2.551 0 1.505 1.094 2.959 1.246 3.166.152.208 2.152 3.286 5.213 4.602.728.313 1.297.5 1.74.641.73.232 1.395.2 1.92.121.585-.088 1.848-.756 2.109-1.449.261-.693.261-1.288.182-1.411-.078-.123-.28-.195-.593-.351z"/></svg>
              </a>
              <a href="https://www.instagram.com/_promicee" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="mailto:heispromice@gmail.com" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1"><Mail size={20} /></a>
              <a href="tel:+255670844973" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1"><Phone size={20} /></a>
            </motion.div>

            {/* Desktop Action Anchors: Hidden on mobile view */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="hidden lg:flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#D8B79A] px-7 py-3.5 font-ui text-[12px] font-bold text-[#0B0F19] transition-all hover:bg-[#c9a687] hover:shadow-[0_4px_20px_rgba(216,183,154,0.15)]"
              >
                Explore Systems
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-ui text-[12px] font-bold text-[#F4F4F4] transition-colors hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
              >
                CHECK MY CV
                <Eye size={14} className="transition-transform group-hover:scale-105" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Styled Graphic Wrapper (Takes 5 cols on desktop) */}
          <div className="lg:col-span-5 order-2 flex justify-start w-full pt-4 lg:pt-0">
            {/* The Master Container controlling the main entrance animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative select-none group w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5]"
            >
              {/* THE FLOATING ACCENT FRAME: Kwenye desktop unapo-hover inasogea mbele kidogo (group-hover:translate-x-[22px]) */}
              <div className="absolute inset-0 translate-x-[16px] translate-y-[16px] rounded-2xl border-2 border-[#D8B79A]/30 transition-all duration-300 ease-out group-hover:translate-x-[22px] group-hover:translate-y-[22px] group-hover:borderColor-[#D8B79A]" />

              {/* THE IMAGE CONTAINER */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0B0F19] border border-white/[0.08] shadow-2xl cursor-pointer transition-all duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 active:translate-x-0 active:translate-y-0"
              >
                {/* UJANJA WA HALI YA JUU:
                  1. Kwenye Desktop: group-hover inasogeza picha juu na kushoto kidogo (-translate-x-1) kuleta ile 3D dynamic effect.
                  2. Kwenye Mobile: Tumezima uhuishaji wa kusogea kwa kutumia 'active:translate-x-0' ili vipimo vya box visubiri layout recalculation ambayo ingesababisha screen kushtuka.
                  3. Rangi asilia inarudi laini kabisa (active:filter-none active:opacity-100) bila kufanya page imove hata pixel moja!
                */}
                <img 
                  src={profilePic} 
                  alt="Fredrick N. Claudi" 
                  className="w-full h-full object-cover grayscale opacity-75 mix-blend-luminosity transition-all duration-300 ease-out group-hover:filter-none group-hover:opacity-100 group-hover:mix-blend-normal active:filter-none active:opacity-100 active:mix-blend-normal" 
                />
                <div className="absolute inset-0 bg-[#D8B79A]/10 mix-blend-multiply transition-opacity duration-500 pointer-events-none group-hover:opacity-0 active:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* MOBILE ACTION ANCHORS: Mounted below photo */}
          <div className="col-span-1 order-3 lg:hidden flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B79A] px-6 py-4 font-ui text-[12px] font-bold text-[#0B0F19] transition-all">Explore Systems</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 font-ui text-[12px] font-bold text-[#F4F4F4] transition-colors">Check My CV <Eye size={14} /></a>
          </div>

        </div>
      </div>
    </section>
  );
}