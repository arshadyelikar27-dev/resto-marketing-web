"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TextReveal({ 
  children, 
  delay = 0, 
  y = 40 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  y?: number;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!elRef.current) return;

    const el = elRef.current.firstElementChild;
    if (!el) return;

    gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 95%",
        },
      }
    );
  }, [delay, y]);

  return (
    <div ref={elRef} style={{ overflow: "hidden", display: "inline-block", width: "100%" }}>
      <div style={{ opacity: 0 }}>
        {children}
      </div>
    </div>
  );
}

export function ImageReveal({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!elRef.current) return;

    const el = elRef.current.firstElementChild;
    if (!el) return;

    gsap.fromTo(
      el,
      { scale: 1.15, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elRef.current,
          start: "top 95%",
        },
      }
    );
  }, [delay]);

  return (
    <div ref={elRef} style={{ overflow: "hidden", position: "relative", width: "100%", height: "100%", borderRadius: "inherit" }}>
      <div style={{ width: "100%", height: "100%", borderRadius: "inherit", opacity: 0, transformOrigin: "center" }}>
        {children}
      </div>
    </div>
  );
}
