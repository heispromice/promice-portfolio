"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // 3.0 seconds allows the continuous pen-stroke vector to draw completely before exit
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: "-100vh", // Curtain slides upwards smoothly instead of shifting layout abruptly
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } // Premium cinematic ease curve
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19] select-none"
    >
      {/* PREMIUM CONTAINER WRAPPER: Added explicit exit transitions to animate 
        the custom logo asset seamlessly right before the main screen unmounts.
      */}
      <motion.div 
        initial={{ opacity: 1, scale: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.12, // Elegant cinematic expanding zoom effect
          filter: "blur(6px)", // Soft ambient mist fade out
          transition: { duration: 0.5, ease: "easeOut" }
        }}
        className="relative w-24 h-24 flex items-center justify-center"
      >
        <svg
          id="logo"
          viewBox="0 0 100 100"
          className="w-full h-full fill-none stroke-[#D8B79A]"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* 1. OUTER BRAND CIRCLE: Smooth continuous circular border */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.2, ease: "easeInOut" }
            }}
          />

          {/* 2. CONTINUOUS SINGLE-STROKE 'P': Traced directly to simulate a continuous pen movement.
            Starts at the sharp overhang (38,36), sweeps the top arc, loops inward smoothly to (44,54), 
            and seamlessly transitions down into the vertical stem to (44,72) without lifting the pen, 
            perfectly maintaining the open outer spine gap.
          */}
          <motion.path
            d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72"
            strokeWidth="5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.2, delay: 0.9, ease: "easeInOut" }
            }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export function LogoIcon() {
  return (
    <span className="relative group flex items-center justify-center w-10 h-10 cursor-pointer">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-none stroke-[#D8B79A] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(216,183,154,0.25)]"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Static single-stroke continuous identity layout mapping */}
        <circle cx="50" cy="50" r="40" className="opacity-95" />
        <path d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72" strokeWidth="5.5" />
      </svg>
    </span>
  );
}