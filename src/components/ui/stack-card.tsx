"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const cards = [
  {
    id: 1,
    title: "Butter Masala Dosa",
    subtitle: "Golden · Crispy · Aromatic",
    description:
      "A paper-thin golden dosa cooked to a perfect crunch, filled with signature potato masala. Served with three chutneys and piping hot sambar.",
    image: "/images/dosa.png",
    accent: "#e31e24",
  },
  {
    id: 2,
    title: "Ghee Podi Idli",
    subtitle: "Soft · Spicy · Buttery",
    description:
      "Pillowy soft idlis tossed in homemade gunpowder (podi) and pure farm ghee. A morning staple that's impossible to resist.",
    image: "/images/idli.png",
    accent: "#D97200",
  },
  {
    id: 3,
    title: "Filter Kaapi",
    subtitle: "Strong · Bold · Traditional",
    description:
      "South India in a cup. Brewed the old-fashioned way with pure decoction, frothy milk, and just the right sweetness. A ritual, not just a drink.",
    image: "/images/coffee.png",
    accent: "#4c7d4a",
  },
];

function StackCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const topOffset = 90 + index * 24;
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "sticky",
        top: `${topOffset}px`,
        zIndex: index + 1,
        marginBottom: index < cards.length - 1 ? "24px" : "0",
      }}
    >
      <div
        style={{
          background: "#FAF5EF",
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid rgba(19,19,19,0.08)",
          boxShadow: `0 ${8 + index * 8}px ${40 + index * 20}px -12px rgba(0,0,0,${0.08 + index * 0.04})`,
          minHeight: "420px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        }}
      >
        {/* Left: text */}
        <div
          className="stack-card-content"
          style={{
            padding: "clamp(30px, 5vw, 60px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: card.accent,
              background: `${card.accent}14`,
              border: `1px solid ${card.accent}30`,
              padding: "5px 14px",
              borderRadius: "999px",
              width: "fit-content",
            }}
          >
            {card.subtitle}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 600,
              color: "#131313",
              lineHeight: 1.1,
            }}
          >
            {card.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(14px, 2vw, 15px)",
              lineHeight: 1.75,
              color: "rgba(19,19,19,0.6)",
              fontWeight: 300,
              maxWidth: "360px",
            }}
          >
            {card.description}
          </p>

          <div
            style={{
              width: "48px",
              height: "3px",
              borderRadius: "2px",
              background: card.accent,
              marginTop: "8px",
            }}
          />
        </div>

        {/* Right: image */}
        <div className="stack-card-image" style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(250,245,239,0.15) 0%, transparent 30%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function ScrollTriggered() {
  return (
    <section
      style={{
        backgroundColor: "#FAF5EF",
        padding: "clamp(60px, 10vw, 120px) 0 clamp(80px, 15vw, 160px)",
      }}
    >
      <div 
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 60px)"
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#e31e24",
              background: "rgba(227,30,36,0.06)",
              border: "1px solid rgba(227,30,36,0.2)",
              padding: "5px 16px",
              borderRadius: "999px",
              marginBottom: "20px",
            }}
          >
            Our Signature Dishes
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#131313",
              lineHeight: 1.15,
            }}
          >
            Rooted in the{" "}
            <span
              style={{
                fontFamily: "var(--font-cursive)",
                color: "#e31e24",
                fontSize: "1.2em",
                fontWeight: 400,
              }}
            >
              South,
            </span>{" "}
            Inspired by Soul
          </h2>
        </div>

        {/* Stacking cards */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {cards.map((card, i) => (
            <StackCard key={card.id} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

