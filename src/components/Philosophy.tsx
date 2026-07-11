"use client";

import Image from "next/image";
import { TextReveal, ImageReveal } from "./Reveal";

export default function Philosophy() {
  return (
    <section
      style={{
        backgroundColor: "#FAF5EF",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 60px" }}>
        {/* Wide image with overlaid text */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            marginBottom: "80px",
            overflow: "hidden",
            borderRadius: "4px",
          }}
        >
          <ImageReveal>
            <Image
              src="/images/restaurant.png"
              alt="Surya Dakshin Restaurant Interior"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            {/* Dark gradient overlay inside image reveal so it scales with image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                zIndex: 1,
              }}
            />
          </ImageReveal>

          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              bottom: "60px",
              left: "60px",
              right: "60px",
              zIndex: 10,
            }}
          >
            <TextReveal delay={0.3}>
              <h2
                style={{
                  fontSize: "clamp(20px, 3vw, 36px)",
                  fontWeight: 500,
                  color: "white",
                  lineHeight: 1.4,
                  maxWidth: "800px",
                  textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                Guided by the warmth of the South and rooted in tradition, we bridge the timeless recipes of our ancestors
                to every table we set. With gratitude in our hearts and care in every detail, each plate we serve
                carries dedication, authenticity, and love.
              </h2>
            </TextReveal>
          </div>
        </div>

        {/* 2-col text section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 500,
                color: "#131313",
                lineHeight: 1.2,
                marginBottom: "24px",
                fontFamily: "var(--font-serif)"
              }}
            >
              <TextReveal>Guided by Vision,</TextReveal>
              <TextReveal delay={0.1}>
                <span style={{ 
                  color: "#e31e24",
                  fontFamily: "var(--font-cursive)",
                  fontSize: "1.3em",
                  fontWeight: 400,
                  textTransform: "lowercase",
                  paddingRight: "8px"
                }}>
                  grounded
                </span> 
                in Tradition
              </TextReveal>
            </h2>
          </div>
          <div>
            <TextReveal delay={0.2}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#666",
                  fontWeight: 300,
                }}
              >
                The founders of Surya Dakshin started their journey with a simple yet powerful idea — to bring the
                authentic flavours of South India to everyone, served with warmth and honesty. Two decades later, that
                same fire burns in every kitchen we run.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
