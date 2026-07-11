"use client";

import Image from "next/image";
import { TextReveal } from "./Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: "100px 0 48px",
      }}
    >
      {/* Footer background image */}
      <Image
        src="/images/footer.png"
        alt="Footer Background"
        fill
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="section-wrapper"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Main grid — brand left, contact right */}
        <div
          className="responsive-grid"
          style={{
            marginBottom: "80px",
            alignItems: "start",
          }}
        >
          {/* Brand column — left */}
          <div>
            <TextReveal>
              <h2
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-serif)",
                  color: "#ffd500",
                  letterSpacing: "1px",
                  marginBottom: "24px",
                  lineHeight: 1,
                }}
              >
                Surya
                <br />
                Dakshin
              </h2>
            </TextReveal>
            <TextReveal delay={0.1}>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: 300,
                  maxWidth: "400px",
                }}
              >
                Bringing the authentic flavours and warm hospitality of South India
                to you. Tradition on a plate, memories in every bite.
              </p>
            </TextReveal>
          </div>

          {/* Contact column — right aligned */}
          <div style={{ textAlign: "right" }}>
            <TextReveal delay={0.2}>
              <h3
                style={{
                  fontSize: "11px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "28px",
                  fontWeight: 500,
                }}
              >
                Contact
              </h3>
            </TextReveal>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                "hello@suryadakshin.com",
                "+91 98765 43210",
                "123 Culinary Street,",
                "Food District, Mumbai 400001",
              ].map((item, i) => (
                <li key={item}>
                  <TextReveal delay={0.3 + i * 0.1}>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "15px",
                        fontWeight: 300,
                        lineHeight: 1.6,
                        display: "inline-block"
                      }}
                    >
                      {item}
                    </span>
                  </TextReveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider */}
        <TextReveal delay={0.4}>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.12)",
              paddingTop: "36px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "13px",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            <p>&copy; {new Date().getFullYear()} Surya Dakshin. All rights reserved.</p>
            <p>Designed with ❤️ in South India</p>
          </div>
        </TextReveal>
      </div>
    </footer>
  );
}
