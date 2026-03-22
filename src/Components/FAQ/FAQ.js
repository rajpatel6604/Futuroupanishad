"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const curriculum = [
  {
    title: "What is Futuroupanishad?",
    color: "rgba(197,116,67,0.10)",
    border: "rgba(197,116,67,0.35)",
    items: [
      "Futuroupanishad is a unique seminar designed to guide students from confusion to clarity, and from clarity to career and character.",
      "It helps students understand their future direction with practical knowledge and real-life insights.",
    ],
  },
  {
    title: "Who should attend this seminar?",
    color: "rgba(2,30,72,0.06)",
    border: "rgba(2,30,72,0.18)",
    items: [
      "Students of Class 10th to 12th Students confused about career choices Goal-oriented learners Parents who want proper guidance for their child’s future",
    ],
  },
  {
    title: "What will I gain from this seminar?",
    color: "rgba(197,116,67,0.08)",
    border: "rgba(197,116,67,0.25)",
    items: [
      "Career clarity",
      "Confidence in decision-making",
      "A clear personal roadmap",
      "Strong mindset and focus",
      "Real-life skills beyond textbooks",
    ],
  },
  {
    title: "Is this seminar only about career guidance?",
    color: "rgba(2,30,72,0.06)",
    border: "rgba(2,30,72,0.18)",
    items: [
      "No, Futuroupanishad focuses on career + character + mindset development, helping students grow as complete individuals.",
    ],
  },
  {
    title: "How is this different from other career seminars?",
    color: "rgba(197,116,67,0.08)",
    border: "rgba(197,116,67,0.25)",
    items: [
      "Focus on clarity first, not just options",
      "Real-life learning (not theory)",
      "Step-by-step structured approach",
      "Interactive sessions with real examples",
      "Emphasis on personality and mindset",
    ],
  },
  {
    title: "Will I get a clear career path after attending?",
    color: "rgba(197,116,67,0.08)",
    border: "rgba(197,116,67,0.25)",
    items: [
      "Yes, You will get a clear understanding of suitable career paths along with a roadmap to move forward.",
    ],
  },
  {
    title: "Is this seminar useful for parents?",
    color: "rgba(197,116,67,0.08)",
    border: "rgba(197,116,67,0.25)",
    items: [
      "How to guide their child properly",
      "How to support decision-making",
      "Understanding modern career opportunities",
    ],
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const imgRef      = useRef(null);       // ← image ref
  const itemRefs    = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    // heading reveal
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
      },
    );

    // accordion items stagger in
    gsap.fromTo(
      itemRefs.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.55, ease: "power2.out", stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      },
    );

    // ── Infinite image animation ──────────────────────────────────────────────
    const img = imgRef.current;
    if (img) {
      // 1. Gentle vertical float  (up ↕ down, 3 s)
      gsap.to(img, {
        y: -14,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // 2. Subtle slow rotation (±3°, 5 s — offset so it doesn't sync with float)
      gsap.to(img, {
        rotation: 3,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.8,
      });

      // 3. Very slight scale breathe (1 → 1.04, 4 s)
      gsap.to(img, {
        scale: 1.04,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      });
    }
  }, []);

  // set initial accordion state — first item open
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, i === 0 ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 });
    });
  }, []);

  const toggle = (i) => {
    const isOpen = openIndex === i;
    setOpenIndex(isOpen ? null : i);

    if (openIndex !== null && contentRefs.current[openIndex]) {
      gsap.to(contentRefs.current[openIndex], {
        height: 0, opacity: 0, duration: 0.35, ease: "power2.inOut",
      });
    }

    if (!isOpen && contentRefs.current[i]) {
      const el = contentRefs.current[i];
      gsap.set(el, { height: "auto" });
      const h = el.offsetHeight;
      gsap.fromTo(el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.4, ease: "power2.out" },
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,30,72,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(2,30,72,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: sticky heading + animated image ── */}
          <div className="lg:sticky lg:top-24 flex flex-col items-start">
            <div ref={headingRef}>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-2"
                style={{ color: "#021e48", fontFamily: "'Georgia','Times New Roman',serif" }}
              >
                Frequently Asked <br />
                <span style={{ color: "#c57443" }}>Questions</span>
              </h2>
            </div>

            {/* image wrapper — overflow hidden so scale-breathe doesn't clip layout */}
            <div className="mt-6 w-full flex justify-center overflow-hidden">
              <div ref={imgRef} style={{ display: "inline-block", transformOrigin: "center center" }}>
                <Image
                  src="/images/faq/faq.png"
                  alt="FAQ Illustration"
                  className="object-contain"
                  width={350}
                  height={250}
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: accordion ── */}
          <div className="flex flex-col gap-3">
            {curriculum.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemRefs.current[i] = el)}
                className="rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300"
                style={{
                  background: openIndex === i ? item.color : "rgba(2,30,72,0.03)",
                  border: `1.5px solid ${openIndex === i ? item.border : "rgba(2,30,72,0.09)"}`,
                  boxShadow: openIndex === i ? "0 4px 24px rgba(2,30,72,0.08)" : "none",
                }}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-base sm:text-lg font-bold" style={{ color: "#021e48" }}>
                    {item.title}
                  </span>
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0"
                    style={{
                      background: openIndex === i ? "#021e48" : "rgba(2,30,72,0.08)",
                      color: openIndex === i ? "white" : "#021e48",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s, background 0.3s",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                <div ref={(el) => (contentRefs.current[i] = el)} style={{ overflow: "hidden" }}>
                  <div className="px-5 pb-5 space-y-2.5">
                    {item.items.map((point, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(197,116,67,0.15)" }}
                        >
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="#c57443" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}