"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  // High-performance hardware-accelerated scroll tracking
  const { scrollYProgress } = useScroll();
  
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  
  // Smoothly maps 0-1 scroll progress straight into SVG stroke dashoffset values
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [circumference, 0]);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-6 z-[100] md:bottom-8 md:left-8"
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#111726]/80 border border-white/5 text-[#94A3B8] backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:text-[#D8B79A] hover:border-[#D8B79A]/30 hover:shadow-[0_0_15px_rgba(216,183,154,0.15)] focus:outline-none group"
            aria-label="Scroll to top"
          >
            {/* SVG Progress Circle driven by hardware layer */}
            <svg className="absolute inset-0 -rotate-90 h-full w-full">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-white/[0.04]"
                strokeWidth="2.5"
                fill="transparent"
              />
              <motion.circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-[#D8B79A]"
                strokeWidth="2.5"
                fill="transparent"
                strokeLinecap="round"
                style={{ 
                  strokeDasharray: circumference,
                  strokeDashoffset 
                }}
              />
            </svg>

            {/* Central Micro-interactive Arrow Icon */}
            <ArrowUp 
              size={16} 
              className="relative z-10 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110" 
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}