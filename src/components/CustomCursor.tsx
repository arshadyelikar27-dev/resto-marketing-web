"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for a buttery smooth premium feel
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is touch/mobile
    const checkIsMobile = () => {
      return (
        window.matchMedia("(max-width: 768px)").matches || 
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (typeof window !== "undefined") {
      setIsMobile(checkIsMobile());
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (!checkIsMobile()) {
      window.addEventListener("mousemove", moveCursor);
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
      document.documentElement.addEventListener("mouseenter", handleMouseEnter);
      
      // Add a class to body to hide default cursor globally
      document.body.classList.add("hide-default-cursor");
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("hide-default-cursor");
    };
  }, [cursorX, cursorY, isVisible]);

  // Don't render on mobile to save performance
  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: cursorXSpring,
        y: cursorYSpring,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        marginLeft: "-4px", // Offset so the dosa tip is exactly on the mouse point
        marginTop: "-4px",
      }}
    >
      <svg width="46" height="46" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(-15deg)" }}>
        <g filter="drop-shadow(3px 5px 5px rgba(0,0,0,0.3))">
          {/* Main Dosa Cone shape, tip pointing at (8,8) approx */}
          <path d="M8 8 L54 42 C60 46 58 54 52 58 L40 62 C34 65 26 62 18 54 L8 8 Z" fill="#F4C253" />
          
          {/* Roast lines for texture */}
          <path d="M18 24 L46 47" stroke="#C9781B" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          <path d="M22 22 L49 45" stroke="#C9781B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M14 28 L34 47" stroke="#C9781B" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

          {/* Dosa opening at the tip to show it's rolled */}
          <ellipse cx="9" cy="9" rx="3.5" ry="7" fill="#FDF3CD" transform="rotate(35 9 9)" />
        </g>
      </svg>
    </motion.div>
  );
}
