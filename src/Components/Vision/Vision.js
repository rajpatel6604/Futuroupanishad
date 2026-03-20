"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {
  const sectionRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label
      gsap.fromTo(labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );

      // Heading
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0, skewY: 2 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.85, ease: "expo.out", delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );

      // Divider
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.7, ease: "expo.out", delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%" } }
      );

      // Vision card
      gsap.fromTo(visionRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: visionRef.current, start: "top 88%" } }
      );

      // Mission card
      gsap.fromTo(missionRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: "power3.out", delay: 0.25,
          scrollTrigger: { trigger: missionRef.current, start: "top 88%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleEnter = (el, color) => {
    gsap.to(el, { y: -7, boxShadow: `0 20px 48px ${color}`, duration: 0.28, ease: "power2.out" });
  };
  const handleLeave = (el) => {
    gsap.to(el, { y: 0, boxShadow: "0 4px 24px rgba(2,30,72,0.08)", duration: 0.28, ease: "power2.out" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 px-4"
      style={{ background: "#f8f9fc" }}
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(2,30,72,0.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Top radial glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 opacity-60"
        style={{
          background: "radial-gradient(ellipse, rgba(197,116,67,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <span
            ref={labelRef}
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              color: "var(--primary-2)",
              background: "rgba(197,116,67,0.10)",
              fontFamily: "var(--font-poppins)",
              border: "1px solid rgba(197,116,67,0.2)",
            }}
          >
            Who We Are
          </span>

          <h2
            ref={headingRef}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--primary-1)", fontFamily: "var(--font-poppins)" }}
          >
            Our Purpose &{" "}
            <span style={{ color: "var(--primary-2)" }}>Direction</span>
          </h2>

          <div className="flex justify-center mt-5">
            <div
              ref={dividerRef}
              className="h-[3px] w-16 rounded-full"
              style={{ background: "var(--primary-2)" }}
            />
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* Vision */}
          <div
            ref={visionRef}
            className="group relative bg-white rounded-3xl p-8 overflow-hidden cursor-default"
            style={{
              border: "1px solid rgba(2,30,72,0.07)",
              boxShadow: "0 4px 24px rgba(2,30,72,0.08)",
            }}
            onMouseEnter={(e) => handleEnter(e.currentTarget, "rgba(2,30,72,0.14)")}
            onMouseLeave={(e) => handleLeave(e.currentTarget)}
          >
            {/* Left bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0"
              style={{ background: "var(--primary-1)" }}
            />

            {/* Corner glow */}
            <div
              className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle, rgba(2,30,72,0.06), transparent)",
              }}
            />

            {/* Icon pill */}
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: "rgba(2,30,72,0.07)" }}
            >
              <img
                src="/images/vision/vision.png"
                alt="Vision"
                className="w-7 h-7 object-contain"
              />
            </div>

            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                style={{
                  color: "var(--primary-1)",
                  background: "rgba(2,30,72,0.07)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Vision
              </span>
            </div>

            <h3
              className="text-2xl font-extrabold mb-1"
              style={{ color: "var(--primary-1)", fontFamily: "var(--font-poppins)" }}
            >
              Our Vision
            </h3>

            {/* Divider */}
            <div
              className="h-[2px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
              style={{ background: "var(--primary-2)" }}
            />

            <p
              className="text-sm leading-relaxed text-justify"
              style={{ color: "rgba(2,30,72,0.55)", fontFamily: "var(--font-roboto)" }}
            >
              To create a compassionate and empowered society by serving the
              underprivileged, promoting healthcare, and fostering unity through
              the values of Shrimad Jeshingbapa.
            </p>
          </div>

          {/* Mission */}
          <div
            ref={missionRef}
            className="group relative rounded-3xl p-8 overflow-hidden cursor-default"
            style={{
              background: "var(--primary-1)",
              boxShadow: "0 4px 24px rgba(2,30,72,0.18)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => handleEnter(e.currentTarget, "rgba(2,30,72,0.28)")}
            onMouseLeave={(e) => handleLeave(e.currentTarget)}
          >
            {/* Left bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0"
              style={{ background: "var(--primary-2)" }}
            />

            {/* Glow blob */}
            <div
              className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30"
              style={{
                background: "radial-gradient(circle, var(--primary-2), transparent)",
              }}
            />

            {/* Icon pill */}
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <img
                src="/images/vision/mission.png"
                alt="Mission"
                className="w-7 h-7 object-contain"
              />
            </div>

            {/* Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                style={{
                  color: "var(--primary-2)",
                  background: "rgba(197,116,67,0.18)",
                  fontFamily: "var(--font-poppins)",
                }}
              >
                Mission
              </span>
            </div>

            <h3
              className="text-2xl font-extrabold mb-1 text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Our Mission
            </h3>

            {/* Divider */}
            <div
              className="h-[2px] w-8 rounded-full mb-4 transition-all duration-300 group-hover:w-16"
              style={{ background: "var(--primary-2)" }}
            />

            <p
              className="text-sm leading-relaxed text-justify"
              style={{ color: "rgba(255,255,255,0.58)", fontFamily: "var(--font-roboto)" }}
            >
              To uplift lives through dedicated seva (service), spreading
              awareness, healthcare, and providing opportunities for holistic
              growth with compassion and integrity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}