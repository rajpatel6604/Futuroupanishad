"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const items = [
  "Live Group Q&A Sessions",
  "Virtual Course Community",
  "Free Access to Upgrades",
  "Learn with Expert Mentors",
  "Career Clarity Sessions",
  "Character Building Modules",
  "Personalised Action Plans",
  "Gujarati & English Content",
];

// Diamond separator SVG
const Diamond = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className="flex-shrink-0"
    style={{ color: "#c57443" }}
  >
    <path
      d="M7 1L13 7L7 13L1 7Z"
      fill="currentColor"
      opacity="0.85"
    />
  </svg>
);

const Marquee = () => {
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const bandRef   = useRef(null);

  useEffect(() => {
    // Band slides in on scroll
    gsap.fromTo(
      bandRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bandRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );

    // Pure CSS handles the infinite scroll — no GSAP needed for the loop
    // (avoids ResizeObserver jank). See keyframes below.
  }, []);

  // Duplicate items so the seamless loop works
  const allItems = [...items, ...items, ...items];

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 22s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Tilted band ── */}
      <div
        ref={bandRef}
        className="relative w-full overflow-hidden"
        style={{
          transform: "rotate(-1.8deg)",
          transformOrigin: "center center",
          margin: "2rem 0",
          /* extend past edges to hide gaps from rotation */
          marginLeft: "-4%",
          width: "108%",
        }}
      >
        {/* top thin accent line */}
        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg, transparent, #c57443, transparent)`,
          }}
        />

        {/* main dark band */}
        <div
          style={{
            background: "#021e48",
            padding: "14px 0",
            overflow: "hidden",
          }}
        >
          <div className="marquee-track">
            {allItems.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-4 px-5 text-sm font-semibold whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.88)" }}
              >
                <Diamond />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* bottom thin accent line */}
        <div
          style={{
            height: 3,
            background: `linear-gradient(90deg, transparent, #c57443, transparent)`,
          }}
        />
      </div>
    </>
  );
};

export default Marquee;