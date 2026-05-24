"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Same-Day Appointments Available",
    description: "Get seen today — no long waits or referrals needed.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
    title: "Free Initial Consultation",
    description: "Your first visit is on us — meet your dentist, risk-free.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    title: "Flexible Payment Plans",
    description: "Affordable options including CareCredit and in-house financing.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Emergency Services 24/7",
    description: "Round-the-clock care when you need it most.",
  },
];

const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Invisalign",
  "Dental Implants",
  "Cosmetic Dentistry",
  "Orthodontics",
  "Periodontics",
  "Emergency Dental Care",
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Appointment() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3.5 text-slate-800 placeholder-slate-400 outline-none transition-all duration-300 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 focus:bg-white";
  const labelBase =
    "block text-sm font-medium text-slate-600 mb-1.5";

  return (
    <section
      id="appointment"
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-32"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f0fdfa 50%, #ccfbf1 100%)",
      }}
    >
      {/* ── Decorative floating blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,0.35) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 25, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.35) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [0, 15, -10, 0], y: [0, -10, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -left-24 h-[280px] w-[280px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(20,184,166,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16 text-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-teal-100 px-5 py-1.5 text-sm font-semibold tracking-wide text-teal-700"
          >
            Get Started Today
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Book Your{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              Appointment
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-500"
          >
            Schedule your visit in just a few clicks
          </motion.p>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ── LEFT: Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="rounded-3xl border border-white/30 bg-white/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <h3 className="mb-8 text-2xl font-bold text-slate-900">
                Why Book With Us
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-teal-50/60"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {benefit.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* ── Contact Info ── */}
              <div className="mt-10 border-t border-slate-100 pt-8">
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Phone</p>
                      <p className="font-medium text-slate-700">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email</p>
                      <p className="font-medium text-slate-700">hello@luminadent.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Address</p>
                      <p className="font-medium text-slate-700">
                        123 Smile Avenue, Suite 200
                        <br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Booking Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div
              className={`relative rounded-3xl border bg-white/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 sm:p-10 ${
                focusedField
                  ? "border-teal-300/60 shadow-teal-500/10"
                  : "border-white/30"
              }`}
            >
              {/* Subtle animated border glow */}
              {focusedField && (
                <motion.div
                  layoutId="formGlow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none absolute -inset-px rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(13,148,136,0.12) 0%, rgba(14,165,233,0.08) 100%)",
                    zIndex: -1,
                  }}
                />
              )}

              <h3 className="mb-2 text-2xl font-bold text-slate-900">
                Schedule Your Visit
              </h3>
              <p className="mb-8 text-sm text-slate-500">
                Fill in your details and we&apos;ll confirm your appointment
                within the hour.
              </p>

              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Row: Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelBase}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      className={inputBase}
                      onFocus={() => setFocusedField("fullName")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 000-0000"
                      className={inputBase}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelBase}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={inputBase}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className={labelBase}>
                    Service
                  </label>
                  <select
                    id="service"
                    className={`${inputBase} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`}
                    defaultValue=""
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row: Date + Time */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className={labelBase}>
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className={`${inputBase} cursor-pointer`}
                      onFocus={() => setFocusedField("date")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className={labelBase}>
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className={`${inputBase} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat pr-10`}
                      defaultValue=""
                      onFocus={() => setFocusedField("time")}
                      onBlur={() => setFocusedField(null)}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelBase}>
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about any specific concerns or requests..."
                    className={`${inputBase} resize-none`}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="mt-2 w-full cursor-pointer rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/30"
                >
                  Book Appointment Now
                </motion.button>

                <p className="text-center text-xs text-slate-400">
                  By booking, you agree to our{" "}
                  <span className="cursor-pointer text-teal-600 underline">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="cursor-pointer text-teal-600 underline">
                    Terms of Service
                  </span>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
