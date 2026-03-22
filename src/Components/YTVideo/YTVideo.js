"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Replace with your actual YouTube video ID ──────────────────────────────
const YT_VIDEO_ID = "dQw4w9WgXcQ";

const YTVideo = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const videoBoxRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // heading fades down
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: -24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      // video box scales + fades in
      gsap.fromTo(videoBoxRef.current,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.5)", delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );

      // subtle infinite breathing glow on video box
      gsap.to(videoBoxRef.current, {
        boxShadow: "0 0 60px 10px rgba(2,30,72,0.28)",
        duration: 2.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "white" }}
    >
      {/* ── Top wave ── */}
      <div className="w-full" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block transform rotate-180"
          style={{ height: 100 }}
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,0 L0,0 Z"
            fill="#021e48"
          />
        </svg>
      </div>

      {/* ── Main content band ── */}
      <div
        className="relative py-12 sm:py-16 px-4"
        style={{ background: "#021e48" }}
      >
        {/* Radial glow behind video */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(197,116,67,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Heading */}
        <h2
          ref={headingRef}
          className="relative z-10 text-center text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-10"
          style={{
            color: "white",
            fontFamily: "'Georgia','Times New Roman',serif",
          }}
        >
          Sneak Peek Into The{" "}
          <span style={{ color: "#c57443" }}>Course</span>
        </h2>

        {/* Video box */}
        <div
          ref={videoBoxRef}
          className="relative z-10 mx-auto rounded-2xl overflow-hidden"
          style={{
            maxWidth: 680,
            aspectRatio: "16/9",
            boxShadow: "0 8px 40px rgba(2,30,72,0.4)",
            border: "2px solid rgba(197,116,67,0.35)",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${YT_VIDEO_ID}?rel=0&modestbranding=1`}
            title="FuturOpanishad – Course Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: "none", display: "block" }}
          />
        </div>
      </div>

      {/* ── Bottom wave ── */}
      <div className="w-full" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block transform rotate-180"
          style={{ height: 100 }}
        >
          <path
            d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,100 L0,100 Z"
            fill="#021e48"
          />
        </svg>
      </div>
    </section>
  );
};

export default YTVideo;