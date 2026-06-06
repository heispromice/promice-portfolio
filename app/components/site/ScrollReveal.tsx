"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // Optional delay for staggered elements
  direction?: "up" | "down" | "left" | "right"; // Direction of entrance
}

export function ScrollReveal({ children, delay = 0, direction = "up" }: ScrollRevealProps) {
  // Define directional offsets
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ 
        once: true, // Only animates once when scrolling down
        margin: "-100px", // Triggers slightly before the element fully enters the viewport
      }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Premium cubic-bezier easing for smooth motion
      }}
    >
      {children}
    </motion.div>
  );
}