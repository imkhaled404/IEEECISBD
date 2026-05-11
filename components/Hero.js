"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    tag: "Welcome to IEEE CS Bangladesh Chapter",
    headline: "Empowering the Future of Computer Science",
    sub: "The official community of the IEEE Computer Society (CS) Bangladesh Chapter. Bridging the gap between researchers, industry professionals, and students.",
    cta1: { label: "Join IEEE CS", href: "/membership" },
    cta2: { label: "Latest Events", href: "/events" },
  },
  {
    tag: "Our Mission",
    headline: "Empowering the Next Generation of Innovators",
    sub: "The IEEE CIS Bangladesh Chapter is dedicated to the advancement of bio-inspired and linguistic computational paradigms. From neural networks to fuzzy systems, we provide a platform for growth.",
    cta1: { label: "Who We Are", href: "/about" },
    cta2: { label: "Meet the Team", href: "/team/excom" },
  },
  {
    tag: "Join Our Network",
    headline: "Connecting Minds, Shaping the Future of AI",
    sub: "Whether you are a student, researcher, or industry practitioner, our chapter is your gateway to the international community of Computational Intelligence.",
    cta1: { label: "Get Involved", href: "/community" },
    cta2: { label: "Latest News", href: "/blogs" },
  },
];

const panelImages = [
  { src: "/IEEE BDC 01.png", label: "EXCOM 2026" },
  { src: "/IEEE BDC 02.png", label: "Chapter Event" },
  { src: "/IEEE BDC 03.png", label: "Technical Seminar" },
  { src: "/IEEE BDC 04.png", label: "Student Outreach" },
];

export default function Hero({ dbSlides = [] }) {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Use DB slides if available, otherwise fallback to defaults
  const displaySlides = dbSlides.length > 0 ? dbSlides.map(s => ({
    tag: s.subtitle || "Welcome to IEEE CS Bangladesh Chapter",
    headline: s.title,
    sub: s.subtitle || "",
    cta1: { label: "Learn More", href: s.link || "/about" },
    cta2: { label: "Join Us", href: "/membership" },
    imageUrl: s.imageUrl
  })) : slides;

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % displaySlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [displaySlides.length]);

  const slide = displaySlides[current];

  if (!mounted) return <div style={{ minHeight: "80vh", background: "#f8fafc" }} />;

  return (
    <section
      className="hero bg-grid"
      style={{
        paddingTop: "140px",
        paddingBottom: "100px",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative"
      }}
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "5rem", alignItems: "center" }}>

          {/* LEFT CONTENT (Slider) */}
          <div style={{ position: "relative", minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div key={current} className="hero-fade-in">
              <span
                style={{
                  display: "inline-block",
                  color: "#00629B",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "1.5rem"
                }}
              >
                {slide.tag}
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "1.5rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}
              >
                {slide.headline.split(" ").map((word, i) =>
                  ["Computational", "Intelligence", "Future", "AI", "Innovators"].includes(word) ? (
                    <span key={i} style={{ color: "#00629B" }}>{word} </span>
                  ) : (
                    word + " "
                  )
                )}
              </h1>

              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#64748b",
                  lineHeight: "1.8",
                  marginBottom: "2.5rem",
                  maxWidth: "540px"
                }}
              >
                {slide.sub}
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href={slide.cta1.href} className="btn btn-primary" style={{ padding: "1rem 2rem", background: "#00629B" }}>
                  {slide.cta1.label} &rarr;
                </Link>
                <Link href={slide.cta2.href} className="btn btn-outline" style={{ padding: "1rem 2rem", border: "2px solid #00629B", color: "#00629B" }}>
                  {slide.cta2.label}
                </Link>
              </div>
            </div>

            {/* Pagination Dots */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "3rem" }}>
              {displaySlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "2.5rem" : "0.75rem",
                    height: "0.5rem",
                    borderRadius: "100px",
                    background: i === current ? "#00629B" : "#cbd5e1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT (Bordered Image Grid/Frame) */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                zIndex: 2,
                borderRadius: "4px",
                border: "1px solid #000",
                padding: "10px",
                background: "#fff",
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
              }}
            >
              <img
                src={slide.imageUrl || panelImages[current % panelImages.length].src}
                alt="IEEE CIS Highlights"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  aspectRatio: "4/3",
                  objectFit: "cover"
                }}
              />
            </div>

            {/* Label below image */}
            <div style={{ marginTop: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "24px", height: "2px", background: "#f1a119" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569" }}>
                {panelImages[current % panelImages.length].label}
              </span>
            </div>

            {/* Decorative Grid Element */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                border: "2px solid #00629B",
                opacity: 0.2,
                zIndex: 1,
                pointerEvents: "none"
              }}
            />

            {/* Small Overlay Images (Style inspired by reference) */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "140px",
                height: "100px",
                border: "1px solid #1a1a1a",
                padding: "5px",
                background: "#fff",
                zIndex: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <img src="/IEEE BDC 04.png" style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="small preview" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
