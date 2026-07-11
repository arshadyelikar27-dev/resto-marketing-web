"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const journeyData = [
  {
    id: "2002",
    year: "2002",
    title: "A Dream in a Kitchen",
    description:
      "It began with a humble clay stove, a worn-out ladle, and a grandmother's recipe. Surya Dakshin was born in a small home kitchen with big dreams of sharing the soulful flavours of South India with the world.",
    image: "/images/idli.png",
  },
  {
    id: "2010",
    year: "2010",
    title: "First Restaurant Opens",
    description:
      "After years of perfecting every recipe, our first restaurant opened its doors. The 30-seat eatery was packed from day one, with locals lining up for dosas that tasted like home.",
    image: "/images/dosa.png",
  },
  {
    id: "2016",
    year: "2016",
    title: "Growing with Gratitude",
    description:
      "Word spread far and wide. Surya Dakshin expanded to five locations across the city, each carrying the same warmth and authenticity that started in a small kitchen.",
    image: "/images/coffee.png",
  },
  {
    id: "2020",
    year: "2020",
    title: "Resilience & Revival",
    description:
      "Through challenging times, our community rallied around us. We innovated, adapted, and emerged stronger — proving that authentic food always finds its way back to the table.",
    image: "/images/idli.png",
  },
  {
    id: "today",
    year: "Today",
    title: "A Legacy of Flavour",
    description:
      "Now serving thousands of guests across multiple locations, Surya Dakshin remains true to its roots. Every plate carries the same love, every bite tells the same story.",
    image: "/images/dosa.png",
  },
];

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    if (!wrapper || !container) return;

    // HORIZONTAL SCROLL — exactly like the reference site
    // The wrapper scrolls horizontally pinned to the section
    const totalWidth = container.scrollWidth - wrapper.offsetWidth;

    const st = gsap.to(container, {
      x: () => -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="journey" ref={sectionRef} style={{ overflow: "hidden", background: "#131313" }}>
      <div
        ref={wrapperRef}
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Horizontal line in middle */}
        <div
          className="mobile-hide"
          style={{
            position: "absolute",
            top: "45%",
            left: "470px",
            right: "60px",
            height: "1px",
            backgroundColor: "#3e3e3e",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {/* Section label */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "clamp(24px, 5vw, 60px)",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#3e3e3e",
              fontWeight: 500,
            }}
          >
            Our Journey
          </span>
        </div>

        {/* Horizontal scrolling container */}
        <div
          ref={containerRef}
          className="hw-accel"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "100vh",
            paddingInline: "clamp(24px, 5vw, 60px)",
            gap: "clamp(80px, 15vw, 250px)",
            width: "fit-content",
            position: "relative",
            zIndex: 1,
            willChange: "transform",
          }}
        >
          {journeyData.map((item, index) => (
            <div
              key={item.id}
              id={`timeline-${item.id}`}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "clamp(24px, 5vw, 60px)",
                height: "85%",
                flexShrink: 0,
              }}
            >
              {/* Year */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  height: "50%",
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(60px, 12vw, 200px)",
                    fontWeight: 500,
                    color: "white",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.year}
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  height: "50%",
                  alignSelf: "flex-end",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  maxWidth: "clamp(250px, 40vw, 350px)",
                }}
              >
                <h3
                  style={{
                    fontSize: "clamp(20px, 4vw, 28px)",
                    fontWeight: 500,
                    color: "white",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#b9b9b9",
                    fontSize: "clamp(14px, 2vw, 16px)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div
                style={{
                  position: "relative",
                  maxHeight: "85vh",
                  height: "clamp(50vh, 60vh, 70vh)",
                  width: "clamp(180px, 35vw, 280px)",
                  flexShrink: 0,
                  alignSelf: "center",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 180px, 280px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
