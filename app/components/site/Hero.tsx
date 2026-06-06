"use client";

import { useState, useEffect } from "react";
import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import { Mail, Phone, Eye } from "lucide-react"; 

interface HeroProps {
  isParentLoading?: boolean;
}

// FIXED ANIMATED COUNTER ENGINE
function AnimatedCounter({ from, to, suffix = "" }: { from: number; to: number; suffix?: string }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], // Smooth premium deceleration
    });
    
    return rounded.on("change", (latest) => {
      if (to === 1) {
        setDisplayValue(`${latest}${suffix}`);
      } else {
        setDisplayValue(latest < 10 ? `0${latest}${suffix}` : `${latest}${suffix}`);
      }
    });
  }, [count, to, rounded, suffix]);

  return <motion.span>{displayValue || (to === 1 ? `1+` : `0${to}`)}</motion.span>;
}

export function Hero({ isParentLoading = false }: HeroProps) {
  const [isImgActive, setIsImgActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isImgActive) setIsImgActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isImgActive]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 md:pt-20 overflow-hidden bg-[#0B0F19]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,183,154,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* LEFT COLUMN */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isParentLoading ? "hidden" : "visible"}
            className="space-y-6 lg:col-span-7 order-1"
          >
            
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium tracking-normal text-[#D8B79A]"
            >
              <span>SOFTWARE DEVELOPER | BI ANALYST</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1 
                variants={itemVariants}
                className="font-serif text-4xl tracking-tight text-[#F4F4F4] sm:text-6xl lg:text-7xl leading-[1.05]"
              >
                Fredrick N. Claudi.
              </motion.h1>
            </div>

            <motion.h2 
              variants={itemVariants}
              className="font-sans text-xl font-semibold tracking-tight text-[#94A3B8] sm:text-2xl lg:text-3xl"
            >
              Junior Software Developer &amp; Business Information Systems Graduate
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="max-w-2xl text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#F4F4F4] font-medium"
            >
              Building software solutions for education, business, and public safety. Focused on creating impactful, real-world applications that streamline operations and enhance societal security.
            </motion.p>

            {/* CONTACT ICONS */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6 pt-2 text-white/90"
            >
              <a href="https://github.com/heispromice" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="GitHub">
                <svg width={20} height={20} className="fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/fredrick-claudi-5a162230b" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="LinkedIn">
                <svg width={20} height={20} className="fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a href="https://wa.me/255750465919" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="WhatsApp">
                <svg width={20} height={20} className="fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.498 5.352 1.499 5.485 0 9.948-4.467 9.951-9.96.001-2.659-1.026-5.158-2.894-7.03C17.13 1.79 14.635.764 12.012.764c-5.495 0-9.959 4.468-9.963 9.961-.001 2.083.541 4.116 1.566 5.86l-.99 3.614 3.701-.971zm11.514-4.814c-.312-.156-1.848-.912-2.126-1.013-.279-.102-.482-.156-.684.156-.202.311-.782.156-.959 1.164-.176.102-.353.156-.665.001-.312-.156-1.317-.486-2.51-1.549-.928-.827-1.554-1.849-1.737-2.16-.182-.312-.02-.481.136-.635.14-.139.312-.363.468-.545.156-.182.208-.312.312-.519.104-.208.052-.389-.026-.545-.078-.156-.684-1.649-.938-2.259-.247-.595-.5-.514-.684-.523-.176-.009-.38-.01-.584-.01-.204 0-.537.077-.817.382-.28.305-1.071 1.046-1.071 2.551 0 1.505 1.094 2.959 1.246 3.166.152.208 2.152 3.286 5.213 4.602.728.313 1.297.5 1.74.641.73.232 1.395.2 1.92.121.585-.088 1.848-.756 2.109-1.449.261-.693.261-1.288.182-1.411-.078-.123-.28-.195-.593-.351z"/></svg>
              </a>

              <a href="https://www.instagram.com/_heispromice" target="_blank" rel="noreferrer" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <svg width={20} height={20} className="fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="mailto:heispromice@gmail.com" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="Email"><Mail size={20} /></a>
              <a href="tel:+255670844973" className="hover:text-[#D8B79A] transition-all duration-300 hover:-translate-y-1" aria-label="Phone"><Phone size={20} /></a>
            </motion.div>

            {/* EXPERIENCES FEATURE - WITH DASHBOARD PREMIUM GLASS BACKGROUNDS */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-lg border-l border-white/[0.06] pl-6 pt-3 relative"
            >
              <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#D8B79A]/40 via-transparent to-transparent pointer-events-none" />

              {/* CARD 1: YEARS EXPERIENCE */}
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group/metric p-4 rounded-xl border border-white/[0.03] bg-white/[0.02] hover:bg-[#D8B79A]/[0.03] hover:border-[#D8B79A]/20 transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                <div className="text-3xl font-bold font-serif text-[#D8B79A] tracking-tight flex items-baseline gap-0.5">
                  {!isParentLoading && <AnimatedCounter from={0} to={1} suffix="+" />}
                </div>
                <p className="text-[10px] font-mono text-[#94A3B8] group-hover/metric:text-[#F4F4F4] uppercase tracking-wider font-semibold mt-1.5 transition-colors duration-300">
                  Years Experience
                </p>
                <p className="text-[11px] font-sans text-[#94A3B8]/60 mt-0.5 leading-snug">
                  Active professional practice.
                </p>
              </motion.div>

              {/* CARD 2: COMPANIES SERVED */}
              <motion.div 
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group/metric p-4 rounded-xl border border-white/[0.03] bg-white/[0.02] hover:bg-[#D8B79A]/[0.03] hover:border-[#D8B79A]/20 transition-all duration-300 cursor-default backdrop-blur-sm"
              >
                <div className="text-3xl font-bold font-serif text-[#D8B79A] tracking-tight flex items-baseline gap-0.5">
                  {!isParentLoading && <AnimatedCounter from={0} to={2} />}
                </div>
                <p className="text-[10px] font-mono text-[#94A3B8] group-hover/metric:text-[#F4F4F4] uppercase tracking-wider font-semibold mt-1.5 transition-colors duration-300">
                  Companies Served
                </p>
                <p className="text-[11px] font-sans text-[#94A3B8]/60 mt-0.5 leading-snug">
                  Integrated systems deployed.
                </p>
              </motion.div>
            </motion.div>

            {/* Desktop Action Anchors */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#D8B79A] px-7 py-3.5 text-[12px] font-bold text-[#0B0F19] transition-all hover:bg-[#c9a687] hover:shadow-[0_4px_20px_rgba(216,183,154,0.15)]"
              >
                Explore Systems
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-[12px] font-bold text-[#F4F4F4] transition-colors hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
              >
                CHECK MY CV
                <Eye size={14} className="transition-transform group-hover:scale-105" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-5 order-2 flex justify-start w-full pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isParentLoading ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              onClick={() => setIsImgActive(!isImgActive)}
              className="relative select-none group w-full max-w-[260px] sm:max-w-[300px] aspect-[4/5] cursor-pointer"
            >
              <div className={`absolute inset-0 rounded-2xl border-2 border-[#D8B79A]/30 transition-all duration-300 ease-out 
                ${isImgActive 
                  ? "translate-x-[22px] translate-y-[22px] border-[#D8B79A]" 
                  : "translate-x-[16px] translate-y-[16px] group-hover:translate-x-[22px] group-hover:translate-y-[22px] group-hover:border-[#D8B79A]"
                }`} 
              />

              <div className={`relative w-full h-full rounded-2xl overflow-hidden bg-[#0B0F19] border border-white/[0.08] shadow-2xl transition-all duration-300 ease-out 
                ${isImgActive 
                  ? "-translate-x-1 -translate-y-1" 
                  : "group-hover:-translate-x-1 group-hover:-translate-y-1"
                }`}
              >
                <img 
                  src="/profile2.jpg" 
                  alt="Fredrick N. Claudi" 
                  className={`w-full h-full object-cover transition-all duration-300 ease-out
                    ${isImgActive 
                      ? "filter-none opacity-100 mix-blend-normal" 
                      : "grayscale opacity-75 mix-blend-luminosity group-hover:filter-none group-hover:opacity-100 group-hover:mix-blend-normal"
                    }`}
                />
                <div className={`absolute inset-0 bg-[#D8B79A]/10 mix-blend-multiply transition-opacity duration-500 pointer-events-none 
                  ${isImgActive ? "opacity-0" : "group-hover:opacity-0"}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* MOBILE ACTION ANCHORS */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isParentLoading ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col-span-1 order-3 lg:hidden flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full pt-4"
          >
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D8B79A] px-6 py-4 text-[12px] font-bold text-[#0B0F19] transition-all">Explore Systems</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-[12px] font-bold text-[#F4F4F4] transition-colors">Check My CV <Eye size={14} /></a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}