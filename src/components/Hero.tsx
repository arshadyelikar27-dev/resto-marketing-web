"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Hero() {
  const spacerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLImageElement>(null);
  const scrollTextRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const media = mediaRef.current;
    if (!media) return;

    // Mask expand animation — exactly like reference site
    // Start: mask-size = 0vh 0vh (circle), End: mask-size = max(135vw, 140vh)
    const st = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // From 0 to max(135vw, 140vh)
        const maxSize = Math.max(window.innerWidth * 1.35, window.innerHeight * 1.4);
        const currentSize = progress * maxSize;
        const sizeStr = `${currentSize}px ${currentSize}px`;
        media.style.maskSize = sizeStr;
        (media.style as unknown as Record<string, string>)["-webkit-mask-size"] = sizeStr;
      },
    });

    // Scroll text fade out
    if (scrollTextRef.current) {
      gsap.to(scrollTextRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: spacerRef.current,
          start: "top top",
          end: "10% top",
          scrub: true,
        },
      });
    }

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={spacerRef} id="hero" style={{ height: "600vh", position: "relative" }}>
      <div
        ref={sectionRef}
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: "#FAF5EF",
          }}
        >
          {/* Background Image with mask */}
          <div
            ref={mediaRef as unknown as React.RefObject<HTMLDivElement>}
            className="has-mask hw-accel"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              maskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100'/%3E%3C/svg%3E\")",
              WebkitMaskImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100'/%3E%3C/svg%3E\")",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "0px 0px",
              WebkitMaskSize: "0px 0px",
              maskPosition: "center center",
              WebkitMaskPosition: "center center",
              willChange: "mask-size, -webkit-mask-size",
            }}
          >
            <Image
              src="/images/hero-bg.png"
              alt="Surya Dakshin - Authentic South Indian Cuisine"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="100vw"
            />
          </div>

          {/* Blend Mode Headings — exactly like reference */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              zIndex: 20,
              mixBlendMode: "exclusion",
              color: "white",
              pointerEvents: "none",
              width: "100%",
            }}
          >
            <h1 style={{ margin: 0 }}>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(16px, 2vw, 24px)",
                  fontWeight: 300,
                  fontFamily: "var(--font-sans)",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Welcome to
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(48px, 8vw, 100px)",
                  fontWeight: 700,
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "-2px",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                Surya Dakshin
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(24px, 4vw, 42px)",
                  fontWeight: 400,
                  fontFamily: "var(--font-cursive)",
                  textTransform: "lowercase",
                  marginTop: "8px"
                }}
              >
                a taste of south indian soul
              </span>
            </h1>
          </div>

          {/* Scroll Text */}
          <p
            ref={scrollTextRef}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              bottom: "50px",
              letterSpacing: "7px",
              fontSize: "11px",
              mixBlendMode: "difference",
              color: "white",
              width: "200px",
              textAlign: "center",
              zIndex: 30,
              textTransform: "uppercase",
            }}
          >
            Scroll to Explore
          </p>
        </div>
      </div>
    </div>
  );
}
