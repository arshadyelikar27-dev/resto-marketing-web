"use client";

const reviews = [
  {
    stars: 5,
    text: "The masala dosa here is unbelievably crisp, and the potato filling has that authentic Udupi flavour. Reminded me of my grandmother's kitchen in Chennai.",
    name: "Priya Venkataraman",
    role: "Food Blogger",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    stars: 5,
    text: "Soft, pillowy idlis with a coconut chutney that's out of this world. The filter coffee at the end sealed the deal — five stars easily.",
    name: "Arjun Reddy",
    role: "Regular Customer",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    stars: 5,
    text: "Ordered the Rava Dosa on a whim and it's now my go-to. Lacy, buttery edges and served piping hot. This place understands South Indian food.",
    name: "Lakshmi Iyer",
    role: "Software Engineer",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    stars: 5,
    text: "Their Mysore Bonda and sambar vada combo is criminally underrated. Staff was warm, food came fast, and portions are generous for the price.",
    name: "Karthik Subramaniam",
    role: "College Student",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    stars: 5,
    text: "I've tried a dozen dosa places in the city and this one nails the sambar — tangy, spiced just right, not watered down like most restaurants do.",
    name: "Divya Krishnan",
    role: "Homemaker",
    avatar: "https://i.pravatar.cc/150?img=49",
  },
  {
    stars: 5,
    text: "Ghee roast dosa the size of the table, crunchy on every inch, and the podi they add is addictive. Bring an appetite, you'll need it.",
    name: "Vikram Nair",
    role: "Chef",
    avatar: "https://i.pravatar.cc/150?img=57",
  },
  {
    stars: 5,
    text: "Booked a table for a family lunch and the Onam sadya style thali blew everyone away — banana leaf, endless refills, absolute value for money.",
    name: "Meera Pillai",
    role: "Instagram Foodie",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
  {
    stars: 5,
    text: "Visiting from Bangalore and this is the closest I've found to home-style Davanagere Benne Dosa. Butter dripping in every bite, exactly how it should be.",
    name: "Rohan Gowda",
    role: "Traveler",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
  {
    stars: 5,
    text: "The uttapam with onions and green chillies is a masterpiece, and the tomato chutney deserves its own menu section. Consistently great every visit.",
    name: "Anjali Rao",
    role: "Local Resident",
    avatar: "https://i.pravatar.cc/150?img=41",
  },
];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="testimonial-card">
      <p style={{ color: "#D97200", fontSize: "14px", marginBottom: "12px", letterSpacing: "2px" }}>
        {"★".repeat(review.stars)}
      </p>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.75,
          color: "rgba(19, 19, 19, 0.75)",
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
        <img
          src={review.avatar}
          alt={review.name}
          width={44}
          height={44}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid rgba(217, 114, 0, 0.35)",
          }}
        />
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: "14px",
              color: "#131313",
              fontFamily: "var(--font-sans)",
            }}
          >
            {review.name}
          </p>
          <p style={{ fontSize: "12px", color: "rgba(19,19,19,0.5)" }}>{review.role}</p>
        </div>
      </div>
    </div>
  );
}

interface ColumnProps {
  items: typeof reviews;
  duration: string;
}

function Column({ items, duration }: ColumnProps) {
  const doubled = [...items, ...items];
  return (
    <div className="testimonial-col-wrap hw-accel">
      <div className="testimonial-col-track hw-accel" style={{ animationDuration: duration, willChange: "transform" }}>
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const col1 = reviews.slice(0, 3);
  const col2 = reviews.slice(3, 6);
  const col3 = reviews.slice(6, 9);

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#FAF5EF",
        padding: "60px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative glows */}
      <div
        style={{
          position: "absolute",
          top: "-160px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(227, 30, 36, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217, 114, 0, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "560px",
            margin: "0 auto 40px",
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, rgba(227,30,36,0.08), rgba(227,30,36,0.02))",
              border: "1px solid rgba(227, 30, 36, 0.3)",
              color: "#e31e24",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            ★ Customer Reviews
          </span>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#131313",
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Straight from our{" "}
            <span
              style={{
                fontFamily: "var(--font-cursive)",
                color: "#e31e24",
                fontSize: "1.2em",
                fontWeight: 400,
              }}
            >
              Surya Dakshin
            </span>{" "}
            family
          </h2>

          {/* Leaf divider */}
          <div
            style={{
              width: "96px",
              height: "1px",
              background: "linear-gradient(90deg, transparent, #D97200, transparent)",
              margin: "0 auto 16px",
            }}
          />

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.75,
              color: "rgba(19,19,19,0.6)",
              fontWeight: 300,
              fontFamily: "var(--font-sans)",
            }}
          >
            Crispy dosas, fluffy idlis, and sambar that tastes like home — here&apos;s what our
            guests across the city have to say about their South Indian comfort meal with us.
          </p>
        </div>

        {/* Columns */}
        <div className="testimonial-columns-mask">
          <Column items={col1} duration="22s" />
          <Column items={col2} duration="28s" />
          <Column items={col3} duration="25s" />
        </div>

        {/* Footer caption */}
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            color: "rgba(19,19,19,0.4)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginTop: "32px",
            fontFamily: "var(--font-sans)",
          }}
        >
          Surya Dakshin · Authentic South Indian Kitchen
        </p>
      </div>
    </section>
  );
}
