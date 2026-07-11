"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TextReveal } from "./Reveal";

const letters = [
  { key: "D", label: "Dosas", desc: "50+ varieties of crispy, golden dosas — from plain to exotic fusion." },
  { key: "A", label: "Appams", desc: "Lacy, soft bowl-shaped appams with velvety coconut milk stew." },
  { key: "K", label: "Kaapi", desc: "Traditional filter coffee brewed fresh with pure decoction and frothy milk." },
  { key: "S", label: "Sambar", desc: "A slow-cooked lentil broth with 18 seasonal vegetables and secret spices." },
  { key: "H", label: "Halwa", desc: "Rich, ghee-laden carrot or moong dal halwa — our dessert signature." },
  { key: "I", label: "Idlis", desc: "Fluffy, fermented rice cakes steamed to cloud-like perfection every morning." },
  { key: "N", label: "Neer Dosa", desc: "Delicate, lacy, and soft as a cloud — traditional rice crepes served with freshly ground coconut chutney." },
];

export default function Marquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const activeLetter = useRef<string | null>("D");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const letterEls = section.querySelectorAll(".sd-letter");

    // Activate first letter
    updateActive(letterEls, "D");

    letterEls.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const key = (el as HTMLElement).dataset.key || "";
        activeLetter.current = key;
        updateActive(letterEls, key);
      });
    });
  }, []);

  function updateActive(letterEls: NodeListOf<Element>, key: string) {
    letterEls.forEach((el) => {
      const elKey = (el as HTMLElement).dataset.key;
      const descEl = document.querySelector(`[data-desc="${elKey}"]`) as HTMLElement;
      if (elKey === key) {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.filter = "none";
        if (descEl) descEl.style.opacity = "1";
      } else {
        (el as HTMLElement).style.opacity = "0.05";
        (el as HTMLElement).style.filter = "blur(4px)";
        if (descEl) descEl.style.opacity = "0";
      }
    });
  }

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        backgroundColor: "#131313",
        color: "white",
        padding: "clamp(80px, 15vh, 150px) 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.04 }}>
        <Image src="/images/restaurant.png" alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Label */}
        <div style={{ textAlign: "center" }}>
          <TextReveal>
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "#3e3e3e",
              }}
            >
              The Surya Dakshin Experience
            </span>
          </TextReveal>
        </div>

        {/* Letters row */}
        <TextReveal delay={0.1} y={80}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {letters.map((item) => (
              <div
                key={item.key}
                className="sd-letter"
                data-key={item.key}
                style={{
                  fontSize: "clamp(60px, 10vw, 140px)",
                  fontWeight: 700,
                  color: "white",
                  lineHeight: 1,
                  cursor: "pointer",
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                  userSelect: "none",
                }}
              >
                {item.key}
              </div>
            ))}
          </div>
        </TextReveal>

        {/* Description area */}
        <TextReveal delay={0.2}>
          <div style={{ position: "relative", minHeight: "60px", textAlign: "center" }}>
            {letters.map((item) => (
              <p
                key={item.key}
                data-desc={item.key}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  color: "#b9b9b9",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  transition: "opacity 0.3s ease",
                  opacity: 0,
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                <strong style={{ color: "white", marginRight: "8px" }}>{item.label}</strong> — {item.desc}
              </p>
            ))}
          </div>
        </TextReveal>
      </div>
    </section>
  );
}
