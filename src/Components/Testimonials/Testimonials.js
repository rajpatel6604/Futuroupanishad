"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    role: "Class 12 Student · Science Stream",
    location: "Ahmedabad",
    content:
      "Exam પૂરી થઈ ત્યારે હું સાવ confused હતો. FuturOpanishad session પછી મને ખ્યાલ આવ્યો કે હું ખરેખર શું કરવા માંગું છું. Life ની પહેલી વાર clarity મળી.",
    stars: 5,
    avatar: "AP",
  },
  {
    id: 2,
    name: "Priya Shah",
    role: "Class 10 Student · Surat",
    location: "Surat",
    content:
      "Session એ મારી આંખો ખોલી. Career selection ના pressure માં ઘૂટાઈ ગઈ હતી. FuturOpanishad એ direction આપ્યી, confidence આપ્યો. Chapter 1 life changing હતો.",
    stars: 5,
    avatar: "PS",
  },
  {
    id: 3,
    name: "Mihir Desai",
    role: "Class 12 Student · Commerce",
    location: "Vadodara",
    content:
      "Parents ના pressure અને friends ના suggestions વચ્ચે હું ખોવાઈ ગયો હતો. FuturOpanishad એ મને મારી inner strength ઓળખવામાં મદદ કરી.",
    stars: 5,
    avatar: "MD",
  },
  {
    id: 4,
    name: "Shreya Joshi",
    role: "Class 10 Student · Rajkot",
    location: "Rajkot",
    content:
      "Confusion to Clarity — આ journey FuturOpanishad માં experience કરી. Session ખૂબ energetic અને practical હતો. દરેક student ને attend કરવો જ જોઈએ.",
    stars: 5,
    avatar: "SJ",
  },
  {
    id: 5,
    name: "Karan Mehta",
    role: "Class 12 Student · Arts",
    location: "Gandhinagar",
    content:
      "Arts stream choose કરવા માટે ઘણી ટીકા સહન કરી. FuturOpanishad એ સમજાવ્યું કે passion + character = real success. આ message મારા life ને change કરી ગયો.",
    stars: 5,
    avatar: "KM",
  },
  {
    id: 6,
    name: "Nisha Trivedi",
    role: "Class 12 Student · Science",
    location: "Anand",
    content:
      "Spirituality + career — આ combination FuturOpanishad ના session માં પ્રથમ વખત સાંભળ્યું. Character building ની importance ને truly સમજ્યા. ખૂબ thankful છું.",
    stars: 5,
    avatar: "NT",
  },
];

const avatarColors = [
  { bg: "rgba(2,30,72,1)", text: "#c57443" },
  { bg: "rgba(197,116,67,0.15)", text: "#021e48" },
  { bg: "rgba(2,30,72,0.85)", text: "#e8965e" },
  { bg: "rgba(197,116,67,0.2)", text: "#021e48" },
  { bg: "rgba(2,30,72,1)", text: "#c57443" },
  { bg: "rgba(197,116,67,0.15)", text: "#021e48" },
];

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c57443">
          <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#f8f6f3",
      }}
    >
      {/* ── Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(2,30,72,0.05) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(197,116,67,0.08) 0%, transparent 70%)" }}
        />
        {/* Dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tdots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#021e48" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tdots)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full mb-4"
              style={{
                color: "#c57443",
                background: "rgba(197,116,67,0.1)",
                border: "1px solid rgba(197,116,67,0.28)",
              }}
            >
              <span>🎓</span> Student Voices
            </span>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
              style={{ color: "var(--primary-1, #021e48)" }}
            >
              Life Changed After{" "}
              <span style={{ color: "#c57443" }}>FuturOpanishad</span>
            </h2>

            <p
              className="mt-3 text-sm sm:text-base max-w-lg leading-relaxed"
              style={{ color: "#64748b" }}
            >
              Real stories from students who went from confusion to clarity —
              and are now walking their true path.
            </p>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              className="testimonial-prev w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: "white",
                border: "1.5px solid rgba(2,30,72,0.15)",
                color: "var(--primary-1, #021e48)",
                boxShadow: "0 2px 12px rgba(2,30,72,0.08)",
              }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              className="testimonial-next w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                background: "var(--primary-2, #c57443)",
                border: "none",
                color: "white",
                boxShadow: "0 4px 16px rgba(197,116,67,0.35)",
              }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: ".testimonial-prev",
            nextEl: ".testimonial-next",
          }}
          pagination={{
            clickable: true,
            el: ".t-pagination",
            renderBullet: (_, className) =>
              `<span class="${className}"></span>`,
          }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-4"
        >
          {testimonials.map((t, i) => {
            const av = avatarColors[i % avatarColors.length];
            return (
              <SwiperSlide key={t.id}>
                <div
                  className="group relative flex flex-col h-full rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1.5"
                  style={{
                    background: "white",
                    border: "1px solid rgba(2,30,72,0.07)",
                    boxShadow: "0 2px 20px rgba(2,30,72,0.06)",
                    minHeight: "280px",
                  }}
                >
                  {/* Hover accent top border */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: "linear-gradient(to right, #021e48, #c57443)",
                    }}
                  />

                  {/* Top row: avatar + stars */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Avatar */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-extrabold flex-shrink-0"
                        style={{ background: av.bg, color: av.text }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <p
                          className="text-sm font-bold leading-tight"
                          style={{ color: "var(--primary-1, #021e48)" }}
                        >
                          {t.name}
                        </p>
                        <p className="text-[11px] leading-tight mt-0.5" style={{ color: "#94a3b8" }}>
                          {t.location}
                        </p>
                      </div>
                    </div>
                    {/* Stars */}
                    <StarRow count={t.stars} />
                  </div>

                  {/* Quote mark */}
                  <div
                    className="text-5xl leading-none mb-2 font-serif"
                    style={{ color: "rgba(197,116,67,0.2)", lineHeight: "1" }}
                  >
                    &quot;
                  </div>

                  {/* Content */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: "#475569" }}
                  >
                    {t.content}
                  </p>

                  {/* Footer */}
                  <div
                    className="mt-5 pt-4 flex items-center justify-between border-t"
                    style={{ borderColor: "rgba(2,30,72,0.07)" }}
                  >
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wider"
                      style={{ color: "#94a3b8" }}
                    >
                      {t.role}
                    </p>
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full"
                      style={{
                        background: "rgba(197,116,67,0.1)",
                        color: "#c57443",
                      }}
                    >
                      Attended
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* ── Pagination dots */}
        <div className="t-pagination flex items-center justify-center mt-8 gap-2" />
      </div>

      {/* ── Pagination dot styles */}
      <style>{`
        .t-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(2,30,72,0.2);
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .t-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #c57443;
        }
      `}</style>
    </section>
  );
}