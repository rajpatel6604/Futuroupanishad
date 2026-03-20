"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "500+", label: "Students Guided" },
  { number: "3+", label: "Years of Impact" },
  { number: "95%", label: "Clarity Achieved" },
  { number: "1", label: "Mission" },
];

const checkpoints = [
  "From dreams to success",
  "Confusion → Clarity → Career → Character",
  "Unique knowledge that shapes the future",
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column slides in
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Right column slides in
      gsap.fromTo(
        rightRef.current?.children ? Array.from(rightRef.current.children) : [],
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Glow pulse
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Stats pop
      const statEls = statsRef.current?.querySelectorAll(".stat-item");
      if (statEls?.length) {
        gsap.fromTo(
          statEls,
          { opacity: 0, y: 24, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.5)",
            stagger: 0.09,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Subtle bg blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(2,30,72,0.05) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(197,116,67,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">

        {/* ── Main grid: image left | content right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">

          {/* ── LEFT: Image (2/5 width on desktop) */}
          <div ref={leftRef} className="lg:col-span-2 relative flex justify-center lg:justify-start">
            {/* Glow */}
            <div
              ref={glowRef}
              className="absolute rounded-2xl blur-2xl pointer-events-none"
              style={{
                inset: "10%",
                background: "linear-gradient(135deg, rgba(2,30,72,0.2), rgba(197,116,67,0.2))",
                opacity: 0.45,
              }}
            />

            <div
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-full rounded-2xl overflow-hidden shadow-xl"
              style={{ border: "2px solid rgba(197,116,67,0.3)" }}
            >
              {/* 3:4 aspect ratio — tighter than before */}
              <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="https://i.pinimg.com/1200x/33/21/ae/3321ae1b9b6cd7db540d6d49211068f7.jpg"
                  alt="FuturOpanishad seminar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 400px"
                  priority
                />
                {/* Dark bottom fade */}
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(2,30,72,0.7) 0%, transparent 55%)" }} />

                {/* Top chapter badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full text-white"
                    style={{ background: "rgba(197,116,67,0.92)", backdropFilter: "blur(6px)" }}>
                    🚀 Chapter 1
                  </span>
                </div>

                {/* Stats overlay strip at bottom of image */}
                <div
                  ref={statsRef}
                  className="absolute bottom-2 left-2 right-2 grid grid-cols-2 gap-1"
                  style={{ background: "rgba(2,30,72,0.15)" }}
                >
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="stat-item text-center py-3 rounded-lg"
                      style={{
                        background: i % 2 === 0
                          ? "rgba(2,30,72,0.82)"
                          : "rgba(197,116,67,0.82)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <p className="text-base sm:text-lg font-extrabold text-white leading-none">{s.number}</p>
                      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/70 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content (3/5 width on desktop) */}
          <div ref={rightRef} className="lg:col-span-3 space-y-5">

            {/* Badge + heading */}
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full mb-3"
                style={{
                  color: "#c57443",
                  background: "rgba(197,116,67,0.09)",
                  border: "1px solid rgba(197,116,67,0.25)",
                }}
              >
                Our Story
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight tracking-tight">
                <span style={{ color: "#021e48" }}>About </span>
                <span style={{ color: "#c57443" }}>FuturOpanishad</span>
              </h2>

              {/* Thin divider */}
              <div className="flex items-center gap-3 mt-3">
                <div className="h-[2px] w-10 rounded-full" style={{ background: "#021e48" }} />
                <div className="h-[2px] w-5 rounded-full" style={{ background: "#c57443" }} />
              </div>
            </div>

            {/* Problem statement — compact */}
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#475569" }}>
              After 10th & 12th exams, thousands of students face one burning question —
              <em className="font-semibold not-italic" style={{ color: "#021e48" }}> &quot;હવે આગળ શું?&quot;</em>
              {" "}Many make rushed decisions and spend years regretting them. Parents fear the
              world's distractions and pray their child walks the right road.
            </p>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#475569" }}>
              <strong style={{ color: "#021e48" }}>FuturOpanishad</strong> is that answer — helping students
              discover clarity from within, build discipline, and develop the character needed for lasting success.
            </p>

            {/* Checkpoints */}
            <div className="space-y-2 pt-3 border-t" style={{ borderColor: "rgba(2,30,72,0.08)" }}>
              {checkpoints.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] flex-shrink-0 font-bold text-white"
                    style={{ background: "#c57443" }}
                  >✓</span>
                  <p className="text-sm font-medium" style={{ color: "#021e48" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* CTA pill */}
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #021e48, #0a3a7a)",
                  color: "white",
                  boxShadow: "0 4px 16px rgba(2,30,72,0.22)",
                }}
              >
                Join FuturOpanishad
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}