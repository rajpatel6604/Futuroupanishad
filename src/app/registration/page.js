"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { gsap } from "gsap";

const SEMINAR = {
  location: "Pandit Dindayal Upadhyay Auditorium",
  date: "12 April 2026",
  time: "09:00 AM – 12:00 PM",
};

const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

// ── QR Success Modal ──────────────────────────────────────────────────────────
function QRModal({ qr, onClose }) {
  const overlayRef = useRef(null);
  const cardRef    = useRef(null);

  // auto-download as soon as modal mounts
  useEffect(() => {
    if (!qr) return;

    // 1. Animate in
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.fromTo(cardRef.current,
      { opacity: 0, scale: 0.82, y: 40 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.6)", delay: 0.1 }
    );

    // 2. Auto-download
    triggerDownload(qr);
  }, [qr]);

  const triggerDownload = (base64) => {
    try {
      const link = document.createElement("a");
      link.href     = `data:image/png;base64,${base64}`;
      link.download = `FuturOpanishad_Ticket_${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Auto-download failed:", e);
    }
  };

  const handleClose = () => {
    gsap.to(cardRef.current,    { opacity: 0, scale: 0.9, y: 20, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, delay: 0.1, onComplete: onClose });
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: "rgba(2,10,30,0.75)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: "white", border: "2px solid rgba(197,116,67,0.35)" }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 text-center relative"
          style={{ background: "linear-gradient(135deg, #021e48 0%, #0a3a7a 100%)" }}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.15)", color: "white" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Success icon */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
            style={{ background: "rgba(197,116,67,0.2)", border: "2px solid rgba(197,116,67,0.4)" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M20 6L9 17l-5-5" stroke="#c57443" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#c57443" }}>
            Registration Successful
          </p>
          <h3 className="text-xl font-extrabold text-white mt-1">
            🎟 Your Entry Ticket
          </h3>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
            Ticket has been downloaded automatically
          </p>
        </div>

        {/* QR */}
        <div className="px-6 pt-5 pb-2 flex flex-col items-center">
          <div
            className="rounded-2xl overflow-hidden p-2"
            style={{ border: "2px solid rgba(197,116,67,0.3)", background: "rgba(197,116,67,0.04)" }}
          >
            <img
              src={`data:image/png;base64,${qr}`}
              alt="Entry QR Code"
              className="w-44 h-44 rounded-xl block"
            />
          </div>

          <p className="text-xs text-center mt-3 font-medium" style={{ color: "#64748b" }}>
            Present this QR at the venue for entry
          </p>
        </div>

        {/* Seminar info strip */}
        <div
          className="mx-6 mb-4 mt-2 rounded-xl px-4 py-3 grid grid-cols-2 gap-2"
          style={{ background: "rgba(2,30,72,0.04)", border: "1px solid rgba(2,30,72,0.08)" }}
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Date</p>
            <p className="text-xs font-bold mt-0.5" style={{ color: "#021e48" }}>{SEMINAR.date}</p>
          </div>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Time</p>
            <p className="text-xs font-bold mt-0.5" style={{ color: "#021e48" }}>{SEMINAR.time}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[9px] font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Venue</p>
            <p className="text-xs font-bold mt-0.5 leading-snug" style={{ color: "#021e48" }}>{SEMINAR.location}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-6 pb-6 flex flex-col gap-2">
          {/* Manual download button */}
          <button
            onClick={() => triggerDownload(qr)}
            className="w-full py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #c57443 0%, #a85a2a 100%)",
              boxShadow: "0 4px 16px rgba(197,116,67,0.35)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Ticket Again
          </button>

          <button
            onClick={handleClose}
            className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.01]"
            style={{
              background: "rgba(2,30,72,0.05)",
              color: "#021e48",
              border: "1.5px solid rgba(2,30,72,0.1)",
            }}
          >
            Close
          </button>

          <p className="text-[10px] text-center mt-1" style={{ color: "#94a3b8" }}>
            📧 A copy has also been sent to your email
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Register() {
  const [loading, setLoading] = useState(false);
  const [qR, setQR]           = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm]        = useState({
    name: "", email: "", phoneNumber: "", parentPhoneNumber: "",
    city: "", standard: "", board: "", schoolName: "",
    parentOccupation: "", peoplesComeWith: undefined,
  });

  const pageRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(leftRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.8 })
        .fromTo(formRef.current, { opacity: 0, x:  40 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.6");
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    if (!form.name)                               return (toast.error("Enter name"), false);
    if (!/^\S+@\S+\.\S+$/.test(form.email))      return (toast.error("Enter valid email"), false);
    if (!/^\d{10}$/.test(form.phoneNumber))       return (toast.error("Enter valid mobile number"), false);
    if (!/^\d{10}$/.test(form.parentPhoneNumber)) return (toast.error("Enter valid parent mobile"), false);
    return true;
  };

  function onLoadScript(src) {
    return new Promise((resolve) => {
      const tag = document.createElement("script");
      tag.src = src;
      tag.onload  = () => resolve(true);
      tag.onerror = () => resolve(false);
      document.body.appendChild(tag);
    });
  }

  const verifyPayment = async (paymentResponse, registrationId) => {
    const toastId = toast.loading("Verifying payment...");
    try {
      const response = await axios.post("http://10.64.45.186:5000/api/v1/verify", {
        razorpay_payment_id: paymentResponse.razorpay_payment_id,
        razorpay_order_id:   paymentResponse.razorpay_order_id,
        razorpay_signature:  paymentResponse.razorpay_signature,
        registrationId,
      });
      const responseData = response.data;
      if (responseData.success) {
        setQR(responseData?.data?.qr);
        setShowModal(true);
        setForm({
          name: "", email: "", phoneNumber: "", parentPhoneNumber: "",
          city: "", standard: "", board: "", schoolName: "",
          parentOccupation: "", peoplesComeWith: undefined,
        });
        toast.dismiss(toastId);
        toast.success("Payment successful! registration successfully.");
      } else {
        toast.dismiss(toastId);
        toast.error(responseData.message || "Payment verification failed");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error(err.response?.data?.message || "Payment verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async (orderId, amount, notes) => {
    const res = await onLoadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) { setLoading(false); toast.error("Razorpay SDK failed to load."); return; }
    try {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount, currency: "INR",
        name: "FuturOpanishad",
        description: "Payment for your order",
        order_id: orderId,
        handler: async (response) => {
          if (response.error) { setLoading(false); return; }
          verifyPayment(response, notes?.orderId);
        },
        modal: { ondismiss: () => setLoading(false) },
        theme: { color: "#021e48" },
      };
      new window.Razorpay(options).open();
    } catch (err) {
      setLoading(false);
      toast.error(err.response?.data?.message || "Payment initialization failed");
    }
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await axios.post("http://10.64.45.186:5000/api/v1/register", form);
      const order = response.data.data;
      await handleRazorpayPayment(order?.id, 100, order.notes);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = [
    "w-full px-4 py-2.5 rounded-xl text-sm font-medium outline-none transition-all duration-200",
    "bg-white border border-gray-200 placeholder-gray-400 text-[#021e48]",
    "focus:border-[#c57443] focus:ring-2 focus:ring-[#c57443]/20",
  ].join(" ");

  const Label = ({ children }) => (
    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#94a3b8" }}>
      {children}
    </label>
  );

  const highlights = [
    "Career clarity session",
    "Character building workshop",
    "Live Q&A with mentor",
    "Personalised action plan",
  ];

  const infoItems = [
    {
      label: "Venue", value: SEMINAR.location,
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
    },
    {
      label: "Date", value: SEMINAR.date,
      d: "M8 2v3M16 2v3M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
    },
    {
      label: "Time", value: SEMINAR.time,
      d: "M12 2a10 10 0 100 20A10 10 0 0012 2zm0 5v5l4 2",
    },
  ];

  return (
    <>
      {/* QR Modal */}
      {showModal && qR && (
        <QRModal qr={qR} onClose={() => setShowModal(false)} />
      )}

      <div
        ref={pageRef}
        className="min-h-screen flex items-center justify-center px-4 py-12"
        style={{
          background: "#f8f7f5",
          backgroundImage:
            "linear-gradient(rgba(2,30,72,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(2,30,72,0.03) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ══ LEFT — Info ══ */}
          <div ref={leftRef} className="flex flex-col gap-4">

            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: "1.5px solid rgba(197,116,67,0.3)" }}>
              <div className="px-7 py-7" style={{ background: "linear-gradient(135deg, #021e48 0%, #0a3a7a 100%)" }}>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: "#c57443" }}>
                  🚀 FuturOpanishad — Chapter 1
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight"
                  style={{ fontFamily: "'Georgia','Times New Roman',serif" }}>
                  Design Your<br />Destiny
                </h1>
                <p className="text-sm mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  A life-changing seminar for students in Std 10 &amp; 12 to discover clarity,
                  build character, and step into their future with confidence.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {infoItems.map((item, i) => (
                <div key={i} className="flex items-center gap-4 px-5 py-4 rounded-xl bg-white"
                  style={{ border: "1.5px solid rgba(2,30,72,0.08)", boxShadow: "0 2px 8px rgba(2,30,72,0.04)" }}>
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                    style={{ background: "rgba(197,116,67,0.1)", color: "#c57443" }}>
                    <Icon size={20} d={item.d} />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{item.label}</p>
                    <p className="text-sm font-bold mt-0.5" style={{ color: "#021e48" }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl px-5 py-4" style={{ background: "rgba(2,30,72,0.04)", border: "1px solid rgba(2,30,72,0.08)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-3" style={{ color: "#021e48" }}>What You'll Get</p>
              <div className="space-y-2">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(197,116,67,0.15)" }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#c57443" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <p className="text-sm" style={{ color: "#475569" }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ══ RIGHT — Form ══ */}
          <div className="flex flex-col gap-4">
            <div ref={formRef} className="w-full bg-white rounded-3xl shadow-xl overflow-hidden"
              style={{ border: "1.5px solid rgba(2,30,72,0.08)" }}>

              <div className="px-7 py-5" style={{ background: "linear-gradient(135deg, #021e48 0%, #0a3a7a 100%)" }}>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "rgba(197,116,67,0.9)" }}>Secure Your Seat</p>
                <h2 className="text-xl font-extrabold text-white">Registration Form</h2>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>Fill in the details below to complete registration</p>
              </div>

              <div className="px-7 py-5 space-y-3">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Label>Full Name *</Label>
                    <input className={inputCls} placeholder="Your full name" value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
                  <div><Label>Email *</Label>
                    <input className={inputCls} placeholder="email@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Label>Mobile *</Label>
                    <input className={inputCls} placeholder="10-digit number" value={form.phoneNumber}
                      onChange={(e) => set("phoneNumber", e.target.value.replace(/\D/g, "").slice(0, 10))} /></div>
                  <div><Label>Parent Mobile *</Label>
                    <input className={inputCls} placeholder="10-digit number" value={form.parentPhoneNumber}
                      onChange={(e) => set("parentPhoneNumber", e.target.value.replace(/\D/g, "").slice(0, 10))} /></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Label>City</Label>
                    <input className={inputCls} placeholder="Your city" value={form.city} onChange={(e) => set("city", e.target.value)} /></div>
                  <div><Label>Standard</Label>
                    <select className={inputCls} onChange={(e) => set("standard", e.target.value)}>
                      <option value="">Select Standard</option>
                      <option>Std 10th</option>
                      <option>Std 12th Science</option>
                      <option>Std 12th Commerce</option>
                      <option>Std 12th Arts</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Label>Board</Label>
                    <select className={inputCls} onChange={(e) => set("board", e.target.value)}>
                      <option value="">Select Board</option>
                      <option>GSEB</option>
                      <option>CBSE</option>
                      <option>ICSE</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div><Label>School Name</Label>
                    <input className={inputCls} placeholder="School / College" value={form.schoolName} onChange={(e) => set("schoolName", e.target.value)} /></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div><Label>Parent Occupation</Label>
                    <input className={inputCls} placeholder="e.g. Teacher, Business" value={form.parentOccupation} onChange={(e) => set("parentOccupation", e.target.value)} /></div>
                  <div><Label>People Coming (incl. you)</Label>
                    <input className={inputCls} placeholder="e.g. 2" value={form.peoplesComeWith}
                      onChange={(e) => set("peoplesComeWith", e.target.value)} /></div>
                </div>

                <div className="h-px" style={{ background: "rgba(2,30,72,0.08)" }} />

                <div className="flex items-center justify-between px-4 py-3 rounded-xl"
                  style={{ background: "rgba(197,116,67,0.08)", border: "1px solid rgba(197,116,67,0.2)" }}>
                  <span className="text-sm font-semibold" style={{ color: "#021e48" }}>Registration Fee</span>
                  <span className="text-lg font-extrabold" style={{ color: "#c57443" }}>₹ 100</span>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: loading ? "#64748b" : "linear-gradient(135deg, #021e48 0%, #0a3a7a 100%)",
                    boxShadow: "0 4px 20px rgba(2,30,72,0.25)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                        <path d="M12 2a10 10 0 0110 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Processing...
                    </span>
                  ) : "Register & Pay ₹100 →"}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}