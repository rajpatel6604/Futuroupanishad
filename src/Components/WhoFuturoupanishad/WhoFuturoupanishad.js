"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Row 1: 3 equal cards (dark / light / dark)
// Row 2: 2 cards split 50/50 (light / dark)
const row1 = [
  {
    emoji: "🎓",
    title: "Students (Class 10–12)",
    desc: "Understand real-life concepts beyond textbooks and choose the right career path with clarity.",
    dark: true,
  },
  {
    emoji: "🚀",
    title: "Career Seekers",
    desc: 'Confused about "What next?" after 10th/12th? Get the direction you\'ve been missing.',
    dark: false,
  },
  {
    emoji: "🎯",
    title: "Goal-Oriented Learners",
    desc: "Build focus, discipline, and a success mindset that schools never teach.",
    dark: true,
  },
];

const row2 = [
  {
    emoji: "👨‍👩‍👧",
    title: "Parents",
    desc: "Get the right guidance to support your child's future decisions with confidence and clarity.",
    dark: false,
  },
  {
    emoji: "🌟",
    title: "Dreamers",
    desc: "Young minds with big dreams but no roadmap — we build that path with you, step by step.",
    dark: true,
  },
];

function Card({ item, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="group relative rounded-3xl p-8 overflow-hidden cursor-default h-full min-h-[220px]"
      style={{
        background: item.dark ? "var(--primary-1)" : "#f0f3f8",
        boxShadow: item.dark
          ? "0 8px 40px rgba(2,30,72,0.20)"
          : "0 2px 16px rgba(2,30,72,0.07)",
      }}
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, { y: -6, scale: 1.02, duration: 0.3, ease: "power2.out" });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      }}
    >
      {/* Glow blob — dark cards */}
      {item.dark && (
        <div
          className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, var(--primary-2), transparent)" }}
        />
      )}

      {/* Subtle circle — light cards */}
      {!item.dark && (
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(2,30,72,0.08), transparent)" }}
        />
      )}


      {/* Emoji */}
      <span className="text-4xl mb-5 block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 origin-left">
        {item.emoji}
      </span>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-2 leading-snug"
        style={{
          color: item.dark ? "#ffffff" : "var(--primary-1)",
          fontFamily: "var(--font-poppins)",
        }}
      >
        {item.title}
      </h3>

      {/* Animated divider */}
      <div
        className="h-[2px] rounded-full mb-3 transition-all duration-300 group-hover:w-14"
        style={{ width: "2rem", background: "var(--primary-2)" }}
      />

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{
          color: item.dark ? "rgba(255,255,255,0.58)" : "rgba(2,30,72,0.52)",
          fontFamily: "var(--font-roboto)",
        }}
      >
        {item.desc}
      </p>
    </div>
  );
}

export default function WhoFuturoupanishad() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const diamondRef = useRef(null);
  const bgTextRef = useRef(null);
  const r1Refs = useRef([]);
  const r2Refs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax BG text
      gsap.fromTo(
        bgTextRef.current,
        { y: 60, opacity: 0 },
        {
          y: -30,
          opacity: 0.032,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        }
      );

      // Diamond bounce
      gsap.fromTo(
        diamondRef.current,
        { scale: 0, rotate: -90, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.7,
          ease: "back.out(2.5)",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      // Heading
      gsap.fromTo(
        headingRef.current,
        { y: 70, opacity: 0, skewY: 3 },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 0.95,
          ease: "expo.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      // Subtext
      gsap.fromTo(
        subRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.35,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      // Row 1 — stagger up
      r1Refs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });

      // Row 2 — slide from sides
      r2Refs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { x: i === 0 ? -50 : 50, opacity: 0, scale: 0.96 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 px-4"
      style={{ background: "#ffffff" }}
    >
      {/* Giant BG text */}
      <div
        ref={bgTextRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none opacity-0"
        aria-hidden
      >
        <span
          className="text-[18vw] font-black uppercase whitespace-nowrap"
          style={{
            color: "var(--primary-1)",
            fontFamily: "var(--font-poppins)",
            letterSpacing: "-0.05em",
          }}
        >
          FOR YOU
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">

          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ color: "var(--primary-1)", fontFamily: "var(--font-poppins)" }}
          >
            Who is{" "}
            <span className="relative inline-block" style={{ color: "var(--primary-2)" }}>
              Futuroupanishad
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none">
                <path
                  d="M0 6 Q37.5 0 75 6 Q112.5 12 150 6 Q187.5 0 225 6 Q262.5 12 300 6"
                  stroke="var(--primary-2)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.45"
                />
              </svg>
            </span>{" "}
            For?
          </h2>

          <p
            ref={subRef}
            className="mt-6 text-base md:text-lg max-w-lg mx-auto"
            style={{
              color: "rgba(2,30,72,0.48)",
              fontFamily: "var(--font-roboto)",
              lineHeight: 1.75,
            }}
          >
            Built for every young mind standing at a crossroads — this is for
            the ones ready to move forward.
          </p>
        </div>

        {/* ── ROW 1: 3 equal columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {row1.map((item, i) => (
            <Card key={i} item={item} cardRef={(el) => (r1Refs.current[i] = el)} />
          ))}
        </div>

        {/* ── ROW 2: 2 equal columns — no empty space ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {row2.map((item, i) => (
            <Card key={i} item={item} cardRef={(el) => (r2Refs.current[i] = el)} />
          ))}
        </div>
      </div>

      {/* Bottom accent stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] flex">
        <div className="flex-1" style={{ background: "var(--primary-1)" }} />
        <div className="w-16" style={{ background: "var(--primary-2)" }} />
        <div className="flex-1" style={{ background: "var(--primary-1)" }} />
      </div>
    </section>
  );
}