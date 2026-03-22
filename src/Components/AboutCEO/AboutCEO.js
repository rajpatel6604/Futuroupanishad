"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "500+", label: "Students Guided" },
  { number: "3+",   label: "Years of Impact" },
  { number: "95%",  label: "Clarity Achieved" },
];

const AboutCEO = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const cardRef     = useRef(null);
  const nameRef     = useRef(null);
  const descRef     = useRef(null);
  const statsRef    = useRef(null);
  const footerRef   = useRef(null);
  const photoRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Section heading
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
        }
      );

      // Card slides up
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
        }
      );

      // Name
      gsap.fromTo(nameRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out", delay: 0.2,
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
        }
      );

      // Description
      gsap.fromTo(descRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.6, ease: "power2.out", delay: 0.35,
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
        }
      );

      // Stats stagger
      const statEls = statsRef.current?.querySelectorAll(".stat-row");
      if (statEls?.length) {
        gsap.fromTo(statEls,
          { opacity: 0, x: -24 },
          {
            opacity: 1, x: 0, duration: 0.5, ease: "back.out(1.4)", stagger: 0.12, delay: 0.45,
            scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
          }
        );
      }

      // Footer bar slides up
      gsap.fromTo(footerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.7,
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
        }
      );

      // Photo: float in from right + infinite float
      gsap.fromTo(photoRef.current,
        { opacity: 0, x: 60, scale: 0.92 },
        {
          opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
          onComplete: () => {
            // infinite gentle float after entrance
            gsap.to(photoRef.current, {
              y: -12,
              duration: 3.2,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden bg-primary-1/10"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">

        {/* ── Section heading ── */}
        <div ref={headingRef} className="text-center mb-10">
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: "#021e48" }}
          >
            India's <span className="text-primary-2">Youngest</span> Edtech <span className="text-primary-2">Entrepreneur</span>
          </h2>
        </div>

        {/* ── Card ── */}
        <div
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "rgba(197,116,67,0.08)",
            border: "1.5px solid rgba(197,116,67,0.2)",
          }}
        >
          {/* blob accent behind photo */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 80% 50%, rgba(197,116,67,0.18) 0%, transparent 70%)",
            }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 min-h-[420px]">

            {/* ── LEFT: text ── */}
            <div className="flex flex-col justify-center px-8 py-10 pr-6 z-10">

              {/* Name */}
              <h3
                ref={nameRef}
                className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight"
                style={{ color: "#021e48" }}
              >
                Mr. Harsh Panchal
              </h3>

              {/* Description */}
              <p
                ref={descRef}
                className="text-sm sm:text-[15px] leading-relaxed mb-6"
                style={{ color: "#475569", maxWidth: 320 }}
              >
                Harsh Panchal is a young entrepreneur, educator, and visionary speaker dedicated to building India’s most practical skill-development and spiritual learning ecosystem.
              </p>

              {/* Stats */}
              <div ref={statsRef} className="space-y-4">
                {stats.map((s, i) => (
                  <div key={i} className="stat-row">
                    <p
                      className="text-2xl sm:text-3xl font-extrabold leading-none"
                      style={{ color: "#c57443" }}
                    >
                      {s.number}
                    </p>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#64748b" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: photo ── */}
            <div className="relative flex items-end justify-center sm:justify-end overflow-hidden">

              <div className="relative z-10" style={{ transformOrigin: "bottom center" }}>
                <Image
                  src="/images/about/harshpanchal-2.png"
                  alt="Mr. Harsh Panchal"
                  width={400}
                  height={440}
                  className="object-contain object-bottom"
                  style={{ maxHeight: 440 }}
                />
              </div>
            </div>
          </div>

          {/* ── Footer bar ── */}
          <div
            ref={footerRef}
            className="px-8 py-4 text-center text-sm font-semibold italic"
            style={{
              background: "#021e48",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            He guided <span style={{ color: "#c57443" }}>500+ students</span> across Gujarat
            to discover clarity, build character, and design their destiny.
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCEO;