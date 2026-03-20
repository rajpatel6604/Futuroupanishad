"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const pathname = usePathname();

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        style={{
          fontFamily: "'Poppins', sans-serif",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled
            ? "0 2px 24px rgba(2,30,72,0.10)"
            : "0 1px 0 rgba(2,30,72,0.07)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8"
          style={{
            height: scrolled ? "76px" : "90px",
            transition: "height 0.3s ease",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center flex-shrink-0"
            aria-label="FuturOpanishad Home"
          >
            <div
              className="relative flex-shrink-0"
              style={{
                width: scrolled ? "70px" : "87px",
                height: scrolled ? "70px" : "87px",
                transition: "all 0.3s ease",
              }}
            >
              <Image
                src="/images/logo/logo.png"
                alt="FuturOpanishad"
                fill
                className="object-contain"
                sizes="170px"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-flex items-center text-sm font-semibold px-4 py-2 rounded-full transition-all duration-250 no-underline"
                    style={{
                      color: isActive
                        ? "var(--primary-1, #021e48)"
                        : "#64748b",
                      background: isActive
                        ? "rgba(2,30,72,0.06)"
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color =
                          "var(--primary-1, #021e48)";
                        e.currentTarget.style.background =
                          "rgba(2,30,72,0.04)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#64748b";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}

                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: "var(--primary-2, #c57443)" }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-full no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-1,#021e48), #0a3a7a)",
                color: "white",
                boxShadow: "0 4px 14px rgba(2,30,72,0.25)",
              }}
            >
              <span>Register Now</span>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95"
              style={{
                background: mobileOpen
                  ? "var(--primary-1, #021e48)"
                  : "rgba(2,30,72,0.06)",
                color: mobileOpen
                  ? "white"
                  : "var(--primary-1, #021e48)",
              }}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-all duration-350"
          style={{
            maxHeight: mobileOpen ? "360px" : "0px",
            opacity: mobileOpen ? 1 : 0,
          }}
        >
          <div className="px-4 pb-5 pt-2 bg-white">
            <ul className="flex flex-col gap-1 list-none m-0 p-0 mb-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between text-sm font-semibold no-underline px-4 py-3 rounded-xl"
                      style={{
                        color: isActive
                          ? "var(--primary-1, #021e48)"
                          : "#475569",
                        background: isActive
                          ? "rgba(2,30,72,0.06)"
                          : "transparent",
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c57443]" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex justify-center w-full text-sm font-bold px-5 py-3 rounded-xl text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-1,#021e48), #0a3a7a)",
              }}
            >
              Get Tickets
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "72px" }} />
    </>
  );
}