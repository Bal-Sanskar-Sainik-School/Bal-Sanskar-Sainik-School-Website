"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsDesktop(false);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('a') != null ||
        target.closest('button') != null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isDesktop) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(249, 115, 22, 0)",
      border: "1.5px solid rgba(249, 115, 22, 0.6)",
      height: 32,
      width: 32,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "rgba(249, 115, 22, 0.15)",
      border: "1.5px solid rgba(249, 115, 22, 0.9)",
      height: 48,
      width: 48,
      scale: 1.1,
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      height: 6,
      width: 6,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      height: 6,
      width: 6,
      scale: 0.5,
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:block"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 bg-gold z-[10000] rounded-full pointer-events-none hidden md:block shadow-[0_0_10px_rgba(249,115,22,0.8)]"
        variants={dotVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 1000, damping: 30, mass: 0.1 }}
      />
    </>
  );
}
