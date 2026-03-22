"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
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
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroImgRef = useRef(null);
  const missionRef = useRef(null);
  const missionCardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Hero banner: text slides in from left */
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      /* ── Hero banner: image reveals from right with clip */
      gsap.fromTo(
        heroImgRef.current,
        { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.1,
          ease: "power4.inOut",
          delay: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      /* ── Mission section heading */
      gsap.fromTo(
        missionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      /* ── Mission cards stagger */
      const cards = missionCardsRef.current?.querySelectorAll(".mission-card");
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: missionCardsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="">
      {/* ═══════════════════════════════════════════
          HERO BANNER  — dark bg, text left / image right
      ═══════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ background: "#021e48" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[340px]">
          {/* LEFT: text */}
          <div
            ref={heroTextRef}
            className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
          >
            {/* italic "About" label */}
            <p
              className="text-xl sm:text-2xl mb-2 italic font-semibold"
              style={{ color: "#c57443" }}
            >
              About
            </p>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              FuturOpanishad
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-white/75 max-w-md mb-4">
              After 10th &amp; 12th exams, thousands of students face one
              burning question —
              <em className="font-semibold not-italic text-white gujarati">
                {" "}
                &quot;હવે આગળ શું?&quot;
              </em>{" "}
              Many make rushed decisions and spend years regretting them.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-white/75 max-w-md">
              <strong className="text-white">FuturOpanishad</strong> is that
              answer — helping students discover clarity from within, build
              discipline, and develop the character needed for lasting success.
            </p>
          </div>

          {/* RIGHT: full-bleed image that bleeds to the edge */}
          <div
            ref={heroImgRef}
            className="relative hidden lg:block"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <Image
              src="https://i.pinimg.com/1200x/33/21/ae/3321ae1b9b6cd7db540d6d49211068f7.jpg"
              alt="FuturOpanishad seminar"
              fill
              className="object-cover object-center"
              sizes="50vw"
              priority
            />
            {/* gradient overlay to blend into dark bg on the left edge */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #021e48 0%, rgba(2,30,72,0.3) 35%, transparent 70%)",
              }}
            />
            {/* accent color strip at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "#c57443" }}
            />
          </div>
        </div>

        {/* accent stripe at very bottom of hero block */}
        <div
          className="absolute bottom-0 left-0 w-full h-[3px]"
          style={{
            background:
              "linear-gradient(to right, #c57443 0%, rgba(197,116,67,0.2) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════
          MISSION & VISION SECTION
      ═══════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-14 sm:py-20">
        {/* Heading */}
        <div ref={missionRef} className="mb-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: "#021e48" }}
          >
            Mission <span style={{ color: "#c57443" }}>&amp;</span> Vision
          </h2>
        </div>

        {/* Two-column cards */}
        <div
          ref={missionCardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1 — Mission */}
          <div className="mission-card flex items-start gap-5">
            {/* icon */}
            <div className="flex-shrink-0">
              <Image
                src="/images/icons/mission.png"
                alt="Mission"
                width={64}
                height={64}
                className="object-cover object-center"
              />
            </div>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#475569" }}
            >
              Our mission is to equip students with the skills, knowledge and
              inner clarity they need to ace their career choices and turn their
              dreams into reality.
            </p>
          </div>

          {/* Card 2 — Vision */}
          <div className="mission-card flex items-start gap-5">
            {/* eye icon */}
            <div className="flex-shrink-0">
              <Image
                src="/images/icons/vision.png"
                alt="Mission"
                width={64}
                height={64}
                className="object-cover object-center"
              />
            </div>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#475569" }}
            >
              We place equal importance on cultivating well-rounded individuals
              with strong character and a commitment to making a positive impact
              on their families and nation.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-12 h-px"
          style={{ background: "rgba(2,30,72,0.1)" }}
        />

        {/* Checkpoints + Stats row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Checkpoints */}
          <div className="space-y-3">
            {checkpoints.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ background: "#c57443" }}
                >
                  ✓
                </span>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#021e48" }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center py-4 px-2 rounded-xl"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgba(2,30,72,0.06)"
                      : "rgba(197,116,67,0.08)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(2,30,72,0.12)" : "rgba(197,116,67,0.2)"}`,
                }}
              >
                <p
                  className="text-2xl font-extrabold leading-none"
                  style={{ color: i % 2 === 0 ? "#021e48" : "#c57443" }}
                >
                  {s.number}
                </p>
                <p
                  className="text-[10px] font-semibold uppercase tracking-wider mt-1"
                  style={{ color: "#64748b" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold px-7 py-3 rounded-full no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              background: "linear-gradient(135deg, #021e48, #0a3a7a)",
              color: "white",
              boxShadow: "0 4px 16px rgba(2,30,72,0.22)",
            }}
          >
            Join FuturOpanishad
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
