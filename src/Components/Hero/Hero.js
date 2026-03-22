"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.8" />
        <polygon points="8,6 15,10 8,14" fill="currentColor" />
      </svg>
    ),
    sub: "Course Duration",
    main: "3+ Years",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.4 7.4L18 8.2L14 12.1L15 18L10 15.3L5 18L6 12.1L2 8.2L7.6 7.4Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    ),
    sub: "100% No Questions",
    main: "Refund Policy",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <path d="M3 10 Q10 2 17 10 Q10 18 3 10Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="10" cy="10" r="3" fill="currentColor" />
      </svg>
    ),
    sub: "Available In",
    main: "English & Gujarati",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M8 9l4 2-4 2V9z" fill="currentColor" />
      </svg>
    ),
    sub: "Group Live",
    main: "Q&A Sessions",
  },
];

export default function Hero() {
  const heroRef    = useRef(null);
  const badgeRef   = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const featRef    = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current,   { opacity: 0, y: -16 }, { opacity: 1, y: 0, duration: 0.5 })
      .fromTo(headingRef.current, { opacity: 0, y: 30  }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.2")
      .fromTo(subRef.current,     { opacity: 0, y: 20  }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(
        featRef.current?.querySelectorAll(".feat-item") ?? [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        "-=0.2"
      );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[93vh] overflow-hidden"
      style={{ background: "#fafafa" }}
    >
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,30,72,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(2,30,72,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Wave image */}
      <img
        src="/images/wave/wave.png"
        alt="wave"
        className="absolute left-0 -bottom-30 right-0 w-full pointer-events-none"
      />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 px-4">
        <div ref={badgeRef} className="mb-5">
          <span
            className="inline-block text-xs font-semibold px-5 py-1.5 rounded-full"
            style={{
              border: "1.5px solid rgba(2,30,72,0.2)",
              color: "#021e48",
              background: "white",
              letterSpacing: "0.04em",
            }}
          >
            Chapter 1
          </span>
        </div>

        <h1
          ref={headingRef}
          className="font-extrabold leading-tight mb-3"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
            color: "#021e48",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            maxWidth: 990,
          }}
        >
          Design Your Destiny
        </h1>

        <p
          ref={subRef}
          className="text-base sm:text-lg"
          style={{ color: "#475569", maxWidth: 990, lineHeight: 1.65 }}
        >
          The Ultimate Clarity Toolkit For Career, Character &amp; Confidence
        </p>
      </div>

      {/* ── Feature cards — pinned to bottom ── */}
      <div
        ref={featRef}
        className="absolute bottom-12 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="feat-item flex items-center gap-3 px-4 py-3.5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <span
                className="flex-shrink-0 p-2 rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                }}
              >
                {f.icon}
              </span>
              <div className="text-left min-w-0">
                <p
                  className="text-[10px] font-medium uppercase tracking-wider truncate"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {f.sub}
                </p>
                <p className="text-sm sm:text-base font-bold text-white leading-tight">
                  {f.main}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}