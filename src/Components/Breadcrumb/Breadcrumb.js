"use client";
import React, { useEffect, useRef } from "react";
import { ChevronRight, Home } from "lucide-react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Breadcrumb({ items = [], title = "", bgImage = "" }) {
  const titleRef = useRef(null);
  const navRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(barRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 0.7, delay: 0.1 }
    )
    .fromTo(titleRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65 },
      "-=0.4"
    )
    .fromTo(navRef.current,
      { y: 14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 },
      "-=0.35"
    );
  }, []);

  return (
    <div
      className="relative overflow-hidden flex items-center"
      style={{
        minHeight: "200px",
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? undefined : "var(--primary-1)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay — stronger when bg image present */}
      <div
        className="absolute inset-0"
        style={{
          background: bgImage
            ? "linear-gradient(90deg, rgba(2, 30, 72, 0.83) 0%, rgba(2, 30, 72, 0.78) 60%, rgba(2, 30, 72, 0.75) 100%)"
            : "linear-gradient(135deg, rgba(2,30,72,1) 0%, rgba(3,42,96,1) 100%)",
        }}
      />

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Right-side decorative glow blob */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(197,116,67,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Left orange edge accent */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: "var(--primary-2)" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-10">

        {/* Orange accent line above title */}
        <div
          ref={barRef}
          className="h-[3px] w-12 rounded-full mb-4"
          style={{ background: "var(--primary-2)" }}
        />

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-2xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-3"
        >
          {title}
        </h1>

        {/* Breadcrumb nav */}
        <nav ref={navRef} aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap gap-y-1">

            {/* Always prepend a Home icon as first visual cue */}
            <li className="flex items-center">
              <Home
                className="w-3.5 h-3.5 mr-1.5 opacity-50"
                style={{ color: "var(--primary-2)" }}
              />
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <li key={index} className="flex items-center">
                  {!isLast ? (
                    <>
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary-2)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                      >
                        {item.label}
                      </Link>
                      <ChevronRight
                        className="w-3.5 h-3.5 mx-2"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      />
                    </>
                  ) : (
                    <span
                      className="text-sm font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        color: "#ffffff",
                        background: "rgba(197,116,67,0.22)",
                        border: "1px solid rgba(197,116,67,0.35)",
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}