import { motion } from "framer-motion";
import { useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // For 3 secs
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -40,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0F19] select-none"
    >
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg
          id="logo"
          viewBox="0 0 100 100"
          className="w-full h-full fill-none stroke-[#D8B79A]"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M 50,5 L 90,28 L 90,72 L 50,95 L 10,72 L 10,28 Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.5, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M 38,30 L 38,70 M 38,30 L 56,30 C 66,30 66,48 56,48 L 38,48"
            strokeWidth="5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { duration: 1.0, delay: 0.5, ease: "easeInOut" }
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function LogoIcon() {
  return (
    <span className="relative group flex items-center justify-center w-10 h-10 cursor-pointer">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full fill-none stroke-[#D8B79A] transition-all duration-300 group-hover:scale-105"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 50,5 L 90,28 L 90,72 L 50,95 L 10,72 L 10,28 Z" className="opacity-80" />
        <path d="M 38,30 L 38,70 M 38,30 L 56,30 C 66,30 66,48 56,48 L 38,48" strokeWidth="6" />
      </svg>
    </span>
  );
}