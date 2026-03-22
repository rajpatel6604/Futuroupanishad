"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "/images/why/clarity.jpeg",
    title: "Clarity First Approach",
    desc: "We focus on removing confusion and giving clear direction for life and career.",
    tag: "Foundation",
  },
  {
    icon: "/images/why/career.jpeg",
    title: "Career Guidance",
    desc: "Get valuable career insights and direction without any cost.",
    tag: "Direction",
  },
  {
    icon: "/images/why/character.jpeg",
    title: "Character Building",
    desc: "Not just career — we build values, discipline, and strong personality.",
    tag: "Growth",
  },
  {
    icon: "/images/why/life.jpeg",
    title: "Real-Life Learning",
    desc: "Practical knowledge that schools usually don't teach.",
    tag: "Practical",
  },
  {
    icon: "/images/why/journey.jpeg",
    title: "Structured Journey",
    desc: "A step-by-step system to move from confusion to confidence.",
    tag: "System",
  },
  {
    icon: "/images/why/interactive.jpeg",
    title: "Interactive & Engaging",
    desc: "Live discussions, relatable examples, and real student connection.",
    tag: "Community",
  },
];

export default function WhyFuturoupanishad() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const accentLineRef = useRef(null);
  const diamondRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Diamond
      gsap.fromTo(
        diamondRef.current,
        { scale: 0, rotate: -45, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" },
        },
      );

      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 50, opacity: 0, skewY: 2 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" },
        },
      );

      // Accent line
      gsap.fromTo(
        accentLineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.75,
          ease: "expo.out",
          delay: 0.25,
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" },
        },
      );

      // Tagline
      gsap.fromTo(
        taglineRef.current,
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 86%" },
        },
      );

      // Cards stagger
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            delay: i * 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-22 px-4">
      {/* Faint radial centre glow */}
      <div className="pointer-events-none absolute inset-0" />

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(2,30,72,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 text-center">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4"
            style={{ color: "var(--primary-1)" }}
          >
            Why{" "}
            <span style={{ color: "var(--primary-2)" }}>Futuroupanishad </span>?
          </h2>

          <p
            ref={taglineRef}
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{
              color: "rgba(2,30,72,0.5)",
              fontFamily: "var(--font-roboto)",
            }}
          >
            We don't just teach — we transform. From confusion to confidence,
            one step at a time.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative bg-white rounded-2xl p-6 cursor-default overflow-hidden"
              style={{
                border: "1px solid rgba(2,30,72,0.07)",
                boxShadow: "0 2px 16px rgba(2,30,72,0.06)",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -6,
                  boxShadow: "0 16px 40px rgba(2,30,72,0.12)",
                  borderColor: "rgba(197,116,67,0.35)",
                  duration: 0.28,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  boxShadow: "0 2px 16px rgba(2,30,72,0.06)",
                  borderColor: "rgba(2,30,72,0.07)",
                  duration: 0.28,
                  ease: "power2.out",
                });
              }}
            >
              {/* Hover fill wash */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(197,116,67,0.04) 0%, transparent 60%)",
                }}
              />

              {/* Top-left color bar */}
              <div
                className="absolute top-0 left-0 w-1 rounded-tl-2xl rounded-bl-2xl transition-all duration-300 group-hover:h-full"
                style={{
                  height: "40%",
                  background: "var(--primary-2)",
                  opacity: 0.5,
                }}
              />

              {/* Tag pill — top right */}
              <div
                className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase"
                style={{
                  background: "rgba(2,30,72,0.05)",
                  color: "rgba(2,30,72,0.35)",
                }}
              >
                {f.tag}
              </div>

              {/* Emoji in a soft pill */}
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-5 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 bg-[#f6f6f6] border border-primary-1/40"
                
              >
                <Image
                  src={f.icon}
                  alt={f.title + " icon"}
                  width={32}
                  height={32}
                  className="object-contain"
                />
                
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold mb-1 leading-snug"
                style={{ color: "var(--primary-1)" }}
              >
                {f.title}
              </h3>

              {/* Divider */}
              <div
                className="h-[2px] rounded mb-3 transition-all duration-300 group-hover:w-12"
                style={{
                  width: "1.75rem",
                  background: "var(--primary-2)",
                  opacity: 0.7,
                }}
              />

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "rgba(2,30,72,0.52)",
                  fontFamily: "var(--font-roboto)",
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
