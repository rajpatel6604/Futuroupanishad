"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState, useCallback } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quotes = [
  {
    id: 1,
    title: "જીવન ની સાચી દિશા એટલે FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
  },
  {
    id: 2,
    title: "હું શું કરું?' નો એક જ જવાબ FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80",
  },
  {
    id: 3,
    title: "Confusion થી Clarity સુધીનો સફર FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
  },
  {
    id: 4,
    title: "Future ને સમજવાનો રસ્તો એટલે FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80",
  },
];

export default function Quotes() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const pillsRef = useRef(null);
  const counterRef = useRef(null);
  const bgRef = useRef(null);
  const quoteMarkRef = useRef(null);
  const progressRef = useRef(null);
  const autoplayRef = useRef(null);

  // ── Slide transition
  const goTo = useCallback(
    (index) => {
      if (isAnimating || index === active) return;
      setIsAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      // bg fade
      tl.to(bgRef.current, {
        scale: 1.06,
        opacity: 0,
        duration: 0.45,
        ease: "power2.in",
      })
        // title out
        .to(
          titleRef.current,
          { opacity: 0, y: -32, duration: 0.35, ease: "power2.in" },
          "<"
        )
        // pills out
        .to(
          pillsRef.current?.children ? Array.from(pillsRef.current.children) : [],
          { opacity: 0, y: -16, stagger: 0.06, duration: 0.25, ease: "power2.in" },
          "<0.05"
        )
        // swap
        .call(() => setActive(index))
        // bg in
        .fromTo(
          bgRef.current,
          { scale: 1.06, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" }
        )
        // title in
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" },
          "-=0.5"
        )
        // pills in
        .fromTo(
          pillsRef.current?.children ? Array.from(pillsRef.current.children) : [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.4, ease: "back.out(1.5)" },
          "-=0.4"
        )
        // counter bump
        .fromTo(
          counterRef.current,
          { scale: 1.3, opacity: 0.4 },
          { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(2)" },
          "-=0.5"
        );
    },
    [active, isAnimating]
  );

  const next = useCallback(() => goTo((active + 1) % quotes.length), [active, goTo]);
  const prev = useCallback(() => goTo((active - 1 + quotes.length) % quotes.length), [active, goTo]);

  // ── Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [next]);

  const resetAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 5000);
  };

  // ── Section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteMarkRef.current,
        { opacity: 0, scale: 0.6, rotate: -15 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        pillsRef.current?.children ? Array.from(pillsRef.current.children) : [],
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "back.out(1.5)",
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      // progress bar loop (5s per slide)
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 5,
          ease: "none",
          repeat: -1,
          transformOrigin: "left center",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const q = quotes[active];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        background: "var(--primary-1, #021e48)",
      }}
    >
      {/* ── Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "transform, opacity" }}
      >
        <img
          key={q.id}
          src={q.bg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        {/* Heavy overlay — image recedes, text dominates */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(2, 30, 72, 0.67) 0%, rgba(2, 30, 72, 0.46) 50%, rgba(2, 30, 72, 0.79) 100%)",
          }}
        />
        {/* Vignette edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(2, 30, 72, 0.49) 100%)",
          }}
        />
      </div>

      {/* ── Decorative large quote mark */}
      <div
        ref={quoteMarkRef}
        className="pointer-events-none absolute select-none"
        style={{
          top: "6%",
          left: "4%",
          fontSize: "clamp(120px, 20vw, 280px)",
          lineHeight: 1,
          color: "rgba(255, 241, 232, 0.38)",
          fontFamily: "Georgia, serif",
          fontWeight: 900,
          zIndex: 1,
        }}
      >
        "
      </div>

      {/* ── Slide number watermark */}
      <div
        className="pointer-events-none absolute select-none hidden md:block"
        style={{
          bottom: "8%",
          right: "4%",
          fontSize: "clamp(80px, 14vw, 180px)",
          lineHeight: 1,
          color: "rgba(255, 255, 255, 0.22)",
          fontWeight: 900,
          zIndex: 1,
        }}
      >
        0{active + 1}
      </div>

      {/* ── Main content */}
      <div
        className="relative z-10 flex flex-col justify-center min-h-screen max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-24"
      >

        {/* ── QUOTE TITLE — big typography */}
        <h2
          ref={titleRef}
          className="font-extrabold leading-tight tracking-tight mb-8 sm:mb-10"
          style={{
            fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)",
            color: "white",
            maxWidth: "900px",
            textShadow: "0 4px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Highlight "FuturOpanishad" in brand amber */}
          {q.title.replace("FuturOpanishad", "").trim()}{" "}
          <span style={{ color: "var(--primary-2, #c57443)" }}>
            FuturOpanishad
          </span>
        </h2>

        {/* ── Pills */}
        <div ref={pillsRef} className="flex flex-wrap items-center gap-3 mb-12 sm:mb-14">
          {[q.sub1, q.sub2, q.sub3].map((tag, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full"
              style={
               
                  {
                      background: "rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                    }
              }
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Controls row */}
        <div className="flex items-center gap-6">
          {/* Prev */}
          <button
            onClick={() => { prev(); resetAutoplay(); }}
            aria-label="Previous quote"
            className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              color: "white",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetAutoplay(); }}
                aria-label={`Go to quote ${i + 1}`}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === active ? "28px" : "8px",
                  height: "8px",
                  background:
                    i === active
                      ? "var(--primary-2, #c57443)"
                      : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => { next(); resetAutoplay(); }}
            aria-label="Next quote"
            className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(197,116,67,0.9)",
              border: "none",
              color: "white",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Counter */}
          <span
            ref={counterRef}
            className="ml-2 text-xs font-bold tracking-widest tabular-nums"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            0{active + 1} / 0{quotes.length}
          </span>
        </div>
      </div>

      {/* ── Progress bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px] z-20"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{
            background:
              "linear-gradient(to right, var(--primary-2,#c57443), #e8965e)",
          }}
        />
      </div>

      {/* ── Vertical slide indicator (desktop) */}
      <div
        className="hidden lg:flex flex-col items-center gap-2 absolute right-8 top-1/2 -translate-y-1/2 z-20"
      >
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetAutoplay(); }}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full transition-all duration-400"
            style={{
              width: "3px",
              height: i === active ? "32px" : "12px",
              background:
                i === active
                  ? "var(--primary-2, #c57443)"
                  : "rgba(255,255,255,0.25)",
            }}
          />
        ))}
      </div>
    </section>
  );
}