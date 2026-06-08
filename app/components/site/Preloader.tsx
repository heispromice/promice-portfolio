"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // Triggers the unmount sequence exactly at 1500ms
    const timer = setTimeout(() => {
      onComplete();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: "-100vh", 
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } // Takes exactly 500ms to exit (1500ms + 500ms = 2000ms)
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19] select-none"
    >
      <motion.div 
        initial={{ opacity: 1, scale: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.05, 
          filter: "blur(4px)", 
          transition: { duration: 0.4, ease: "easeOut" }
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
          {/* 1. OUTER BRAND CIRCLE: Smoothly draws completely in 600ms */}
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 0.6, ease: "easeInOut" }
            }}
          />

          {/* 2. CONTINUOUS SINGLE-STROKE 'P': Starts mid-way at 400ms and finishes drawing at 1100ms */}
          <motion.path
            d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72"
            strokeWidth="5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 0.7, delay: 0.4, ease: "easeInOut" }
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
        <circle cx="50" cy="50" r="40" className="opacity-95" />
        <path d="M 38,36 L 52,36 C 64,36 64,54 52,54 L 44,54 L 44,72" strokeWidth="5.5" />
      </svg>
    </span>
  );
}