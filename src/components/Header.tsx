"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Framer Motion variants
const navContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const navLinkVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 },
  },
};

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const header = headerRef.current;
    if (!header) return;

    // Only hide/show — color ALWAYS stays red
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollY = self.scroll();
        const direction = self.direction;

        if (scrollY > 200 && direction === 1) {
          // Scrolling DOWN → hide header
          gsap.to(header, { yPercent: -100, duration: 0.35, ease: "power2.out" });
        } else if (direction === -1) {
          // Scrolling UP → show header (always red)
          gsap.to(header, { yPercent: 0, duration: 0.35, ease: "power2.out" });
        }
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
  ];

  const rightLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Contact", href: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      ref={headerRef}
      className="sd-header hw-accel"
      style={{ 
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#e31e24",
        borderBottomLeftRadius: "30px",
        borderBottomRightRadius: "30px"
      }}
    >
      <div
        className="section-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "5px",
          paddingBottom: "5px",
        }}
      >
        {/* Left Nav (Desktop) */}
        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="mobile-hide"
          style={{ gap: "40px" }}
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={navLinkVariants}
              whileHover={{ color: "#ffd500", y: -2 }}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Hamburger Icon (Mobile Left) */}
        <div className="mobile-show">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Center Logo */}
        <motion.a
          href="#hero"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          className="logo-orbit-glow"
          style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexShrink: 0,
            margin: "-30px 0",
            position: "relative"
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Surya Dakshin Logo"
            width={260}
            height={106}
            style={{
              objectFit: "contain",
              height: "clamp(70px, 10vw, 110px)", 
              width: "auto",
              maxWidth: "260px",
              position: "relative",
              zIndex: 2
            }}
            priority
          />
        </motion.a>

        {/* Right Nav (Desktop) */}
        <motion.nav
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="mobile-hide"
          style={{ gap: "40px" }}
        >
          {rightLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={navLinkVariants}
              whileHover={{ color: "#ffd500", y: -2 }}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.nav>

        {/* Mobile Right Spacer (to keep logo centered) */}
        <div className="mobile-show" style={{ width: "24px" }} />
      </div>
    </header>
  );
}
