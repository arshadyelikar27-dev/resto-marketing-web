"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextReveal, ImageReveal } from "./Reveal";

const menuItems = [
  {
    id: 1,
    tagline: "Soft, Spicy, Buttery",
    name: "Ghee Podi Idli",
    description:
      "Pillowy soft idlis tossed generously in homemade gunpowder (podi) and pure farm ghee. A morning staple that's impossible to resist.",
    image: "/images/idli.png",
  },
  {
    id: 2,
    tagline: "Golden, Crispy, Aromatic",
    name: "Butter Masala Dosa",
    description:
      "A paper-thin golden dosa, cooked to a perfect crunch and filled with our signature potato masala. Served with three chutneys and hot sambar.",
    image: "/images/dosa.png",
  },
  {
    id: 3,
    tagline: "Strong, Bold, Traditional",
    name: "Filter Kaapi",
    description:
      "South India in a cup. Our filter coffee is brewed the old-fashioned way with pure decoction, frothy milk, and just the right sweetness.",
    image: "/images/coffee.png",
  },
  {
    id: 4,
    tagline: "Crispy, Tangy, Perfect",
    name: "Medu Vada Sambar",
    description:
      "Crunchy on the outside, airy on the inside — our medu vadas dunked in piping hot, tangy sambar is the ultimate South Indian comfort food.",
    image: "/images/idli.png",
  },
  {
    id: 5,
    tagline: "Grand, Festive, Complete",
    name: "Surya Special Thali",
    description:
      "A regal spread of rice, rasam, sambar, kootu, poriyal, papad, pickles, and payasam — the full South Indian meal experience in one plate.",
    image: "/images/dosa.png",
  },
];

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto-cycle through menu items
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % menuItems.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const active = menuItems[activeIndex];

  return (
    <section
      id="menu"
      style={{
        backgroundColor: "#FAF5EF",
        padding: "60px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 60px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "80px",
          }}
        >
          <div>
            <TextReveal>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#999",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                What We Serve
              </span>
            </TextReveal>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 500,
                color: "#131313",
                lineHeight: 1.1,
                fontFamily: "var(--font-serif)"
              }}
            >
              <TextReveal delay={0.1}>
                A Taste of{" "}
                <span style={{ 
                  color: "#e31e24",
                  fontFamily: "var(--font-cursive)",
                  fontSize: "1.3em",
                  fontWeight: 400,
                  textTransform: "lowercase",
                }}>
                  tradition
                </span>
              </TextReveal>
            </h2>
          </div>

        </div>

        {/* Main Carousel Layout */}
        <div className="responsive-grid hw-accel">
          {/* Left: Text content */}
          <div>
            <TextReveal delay={0.1}>
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#e31e24",
                  marginBottom: "24px",
                  transition: "all 0.4s ease",
                }}
              >
                {active.tagline}
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <h3
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 500,
                  color: "#131313",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  transition: "all 0.4s ease",
                }}
              >
                {active.name}
              </h3>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#666",
                  fontWeight: 300,
                  maxWidth: "420px",
                  marginBottom: "40px",
                  transition: "all 0.4s ease",
                }}
              >
                {active.description}
              </p>
            </TextReveal>

            {/* Carousel Navigation Dots */}
            <TextReveal delay={0.4}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                {menuItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      width: i === activeIndex ? "32px" : "8px",
                      height: "8px",
                      borderRadius: i === activeIndex ? "4px" : "50%",
                      background: i === activeIndex ? "#131313" : "#ccc",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </TextReveal>
          </div>

          {/* Right: Food image */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              maxWidth: "500px",
              margin: "0 auto",
              overflow: "hidden",
              borderRadius: "50%",
            }}
          >
            <ImageReveal delay={0.2}>
              <Image
                key={active.id}
                src={active.image}
                alt={active.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", borderRadius: "50%", transition: "opacity 0.5s ease" }}
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
