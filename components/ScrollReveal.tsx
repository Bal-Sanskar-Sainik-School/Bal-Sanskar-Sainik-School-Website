"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

function getInitial(direction: Direction) {
  switch (direction) {
    case "up":    return { opacity: 0, y: 40 };
    case "down":  return { opacity: 0, y: -40 };
    case "left":  return { opacity: 0, x: 50 };
    case "right": return { opacity: 0, x: -50 };
    case "fade":  return { opacity: 0 };
  }
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction)}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
