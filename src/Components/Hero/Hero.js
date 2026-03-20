"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    // date: "January 20, 2025",
    title: "જીવન ની સાચી દિશા એટલે FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career ",
    sub3: "Chachter",
    bg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
  },
  {
    id: 2,
    // date: "February 14, 2025",
    title: "હું શું કરું?’ નો એક જ જવાબ FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career ",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&q=80",
  },
  {
    id: 3,
    // date: "March 10, 2025",
    title: "Confusion થી Clarity સુધીનો સફર FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career ",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  },
  {
    id: 4,
    // date: "March 10, 2025",
    title: "Future ને સમજવાનો રસ્તો એટલે FuturOpanishad",
    sub1: "Clarity",
    sub2: "Career ",
    sub3: "Character",
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  },
];

const ChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    className="w-5 h-5"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    className="w-5 h-5"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// ── Component ──────────────────────────────────────────

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ backgroundImage: `url(${slide.bg})`, opacity: fade ? 1 : 0 }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Slide Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 transition-opacity duration-500 max-w-[1200px] mx-auto"
        style={{ opacity: fade ? 1 : 0 }}
      >

        {/* Title */}
        <h1 className="text-white font-extrabold text-5xl md:text-4xl lg:text-6xl  leading-tight mb-8 whitespace-pre-line drop-shadow-lg">
          {slide.title}
        </h1>

        {/* Stats */}
        <div className="flex flex-wrap backdrop-blur-lg px-4 py-2 rounded-full border-1 border-[#eee] items-center justify-center gap-4 md:gap-6 mb-10 text-white text-sm font-medium tracking-wider">
          <span className="flex items-center gap-2">
            <img
              className="h-[2px] w-[20px] md:h-[45px] object-contain"
              src="/images/icons/clarity.png"
            /> 
            {slide.sub1}
          </span>
          <span className="text-white/30 hidden md:inline">|</span>
          <span className="flex items-center gap-2">
            <img
              className="h-[2px] w-[20px] md:h-[45px] object-contain"
              src="/images/icons/career-path.png"
            />

            {slide.sub2}
          </span>
          <span className="text-white/30 hidden md:inline">|</span>
          <span className="flex items-center gap-2">
            <img
              className="h-[2px] w-[20px] md:h-[45px] object-contain"
              src="/images/icons/boy.png"
            />
            {slide.sub3}
          </span>
        </div>

        {/* CTA */}
        <Link
          href="#"
          className="bg-orange-500 hover:bg-orange-700 text-gray-900 font-bold text-base px-10 py-3 rounded-full transition-colors duration-200 no-underline shadow-lg"
        >
          Book Now
        </Link>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-r-lg backdrop-blur-sm transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      {/* Next Arrow */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/25 text-white p-3 rounded-l-lg backdrop-blur-sm transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-orange-500 w-6 h-2.5"
                : "bg-white/40 hover:bg-white/70 w-2.5 h-2.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
