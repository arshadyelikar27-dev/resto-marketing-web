"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

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
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
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
        marginLeft: "-4px", // Offset so the image tip aligns with the mouse point
        marginTop: "-4px",
      }}
    >
      <div style={{ position: "relative", width: "46px", height: "46px" }}>
        <Image 
          src="/images/Dosa-Cursur.png" 
          alt="Custom Cursor"
          fill
          style={{ objectFit: "contain", transform: "rotate(-15deg)" }}
          priority
        />
      </div>
    </motion.div>
  );
}
