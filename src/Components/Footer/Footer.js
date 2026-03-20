"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const contactDetails = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    value: "info@futuropanishad.com",
    href: "mailto:info@futuropanishad.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 2h2.5l1 3-1.5 1a9 9 0 004 4l1-1.5 3 1V13a1 1 0 01-1 1C6.5 14 2 9.5 2 3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1.5A4.5 4.5 0 018 10.5S3.5 13 3.5 6a4.5 4.5 0 019 0c0 3.5-1.5 5-1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Location",
    value: "Ahmedabad, Gujarat",
    href: "#",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
    className="border-t-1 border-[#ccc]"
      style={{
        fontFamily: "'Poppins', sans-serif",
        // background: "#f8f6f3",
      }}
    >
      {/* ── Main footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/images/logo/logo.png"
                  alt="FuturOpanishad"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            </div>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#64748b" }}
            >
              Helping 10th & 12th students find their true direction — from
              confusion to clarity, career, and character.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-250 hover:scale-110 active:scale-95"
                  style={{
                    background: "rgba(2,30,72,0.06)",
                    color: "#64748b",
                    border: "1px solid rgba(2,30,72,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(197,116,67,0.15)";
                    e.currentTarget.style.color = "#c57443";
                    e.currentTarget.style.borderColor = "rgba(197,116,67,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(2,30,72,0.06)";
                    e.currentTarget.style.color = "#64748b";
                    e.currentTarget.style.borderColor = "rgba(2,30,72,0.1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "#c57443" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 list-none m-0 p-0">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm no-underline transition-all duration-200"
                    style={{ color: "#64748b" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--primary-1, #021e48)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#64748b";
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover:w-3"
                      style={{ background: "#c57443" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "#c57443" }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {contactDetails.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="flex items-start gap-3 no-underline group"
                  >
                    <span
                      className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(197,116,67,0.12)",
                        color: "#c57443",
                      }}
                    >
                      {c.icon}
                    </span>
                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-widest mb-0.5"
                        style={{ color: "#94a3b8" }}
                      >
                        {c.label}
                      </p>
                      <p
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "#475569" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "var(--primary-1,#021e48)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; }}
                      >
                        {c.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="h-px"
          style={{ background: "rgba(2,30,72,0.08)" }}
        />
      </div>

      {/* ── Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <p
            className="text-xs text-center sm:text-cemter"
            style={{ color: "#94a3b8" }}
          >
            © {new Date().getFullYear()} FuturOpanishad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}