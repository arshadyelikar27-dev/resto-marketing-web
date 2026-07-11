"use client";

import Image from "next/image";
import { TextReveal, ImageReveal } from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#FAF5EF",
        color: "#131313",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
        }}
      >
        {/* Row 1: Heading + food image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "120px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#131313",
                marginBottom: "32px",
                fontFamily: "var(--font-serif)"
              }}
            >
              <TextReveal>
                <span style={{ 
                  color: "#e31e24",
                  fontFamily: "var(--font-cursive)",
                  fontSize: "1.3em",
                  fontWeight: 400,
                  textTransform: "lowercase",
                  paddingRight: "8px"
                }}>
                  flavour
                </span> 
                on a Plate,
              </TextReveal>
              <TextReveal delay={0.1}>Soul in Every Bite.</TextReveal>
            </h2>
            <TextReveal delay={0.2}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#666",
                  fontWeight: 300,
                  maxWidth: "480px",
                }}
              >
                Surya Dakshin was born from a deep passion for authentic South Indian flavours —
                the kind that take you straight to your grandmother&apos;s kitchen. From the first sizzle
                of a dosa on the griddle to the last drop of filter coffee, every moment is crafted
                with love and tradition.
              </p>
            </TextReveal>
            <TextReveal delay={0.3}>
              <button
                onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
                className="arrow-link"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#131313",
                  fontSize: "16px",
                  fontWeight: 500,
                  cursor: "pointer",
                  marginTop: "32px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#D97200";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#131313";
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#D5D5D5" />
                  <path d="M19.5 15C19.2239 15 19 14.7761 19 14.5C19 14.2239 19.2239 14 19.5 14H25.5C25.7761 14 26 14.2239 26 14.5V20.5C26 20.7761 25.7761 21 25.5 21C25.2239 21 25 20.7761 25 20.5V15.7071L14.8536 25.8536C14.6583 26.0488 14.3417 26.0488 14.1464 25.8536C13.9512 25.6583 13.9512 25.3417 14.1464 25.1464L24.293 15H19.5Z" fill="#212121" />
                </svg>
                Explore Our Story
              </button>
            </TextReveal>
          </div>

          <div
            style={{ 
              position: "relative", 
              width: "100%", 
              aspectRatio: "1/1", 
              maxWidth: "450px", 
              margin: "0 auto", 
              borderRadius: "50%", 
              overflow: "hidden" 
            }}
          >
            <ImageReveal delay={0.2}>
              <Image
                src="/images/dosa.png"
                alt="Crispy Masala Dosa"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
