"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const statsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.8 } },
};

const statItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── inline SVG icons for the stats bar ─── */
const ToothIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9.5 5 12 5 15c0 3 1.5 5 3 5s2-2 3-2h2c1 0 1.5 2 3 2s3-2 3-5c0-3-2-5.5-2-8.5C17 3.5 14.5 2 12 2Z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const DentistIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a5 5 0 0 1 5 5c0 2.76-2.24 5-5 5S7 9.76 7 7a5 5 0 0 1 5-5Z" />
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <path d="M12 12v3m-2 2h4" />
  </svg>
);

const StarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

/* ─── stats data ─── */
const stats = [
  { icon: <ToothIcon />, value: "15+", label: "Years Experience" },
  { icon: <UsersIcon />, value: "25,000+", label: "Happy Patients" },
  { icon: <DentistIcon />, value: "50+", label: "Expert Dentists" },
  { icon: <StarIcon />, value: "4.9", label: "Star Rating" },
];

/* ─── services for the dropdown ─── */
const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Dental Implants",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Root Canal Treatment",
  "Pediatric Dentistry",
];

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would hit an API endpoint
    alert(
      `Thank you, ${formData.name}! We'll call you at ${formData.phone} to confirm your ${formData.service} appointment.`
    );
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #f0fdfa 40%, #e6faf6 70%, #f0fdfa 100%)",
      }}
    >
      {/* ── animated gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,.45) 0%, rgba(14,165,233,.2) 60%, transparent 80%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, -50, 30, 0],
            y: [0, 40, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[-120px] h-[520px] w-[520px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,.4) 0%, rgba(13,148,136,.15) 60%, transparent 80%)",
            filter: "blur(90px)",
          }}
        />
        <motion.div
          animate={{
            x: [0, 30, -40, 0],
            y: [0, -20, 35, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/3 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,.35) 0%, rgba(13,148,136,.1) 60%, transparent 80%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* ── main content ── */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 py-28 md:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── left: headline + CTAs ── */}
            <div className="flex flex-col gap-8">
              {/* badge */}
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50/80 px-4 py-1.5 text-sm font-medium text-teal-700 backdrop-blur-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  Now Accepting New Patients
                </span>
              </motion.div>

              {/* headline */}
              <motion.h1
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight text-slate-900"
              >
                Transform Your Smile{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #0D9488 0%, #0EA5E9 50%, #14B8A6 100%)",
                  }}
                >
                  With Advanced
                </span>{" "}
                Dental Care
              </motion.h1>

              {/* subheadline */}
              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-xl text-lg sm:text-xl leading-relaxed text-slate-600"
              >
                Award-winning dental professionals delivering exceptional care
                with cutting-edge technology and a gentle touch.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                custom={0.35}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  Book Appointment
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>

                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-teal-600 px-7 py-3.5 text-base font-semibold text-teal-700 transition-colors hover:bg-teal-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  Explore Services
                </motion.a>
              </motion.div>
            </div>

            {/* ── right: glassmorphism booking card ── */}
            <motion.div
              custom={0.3}
              variants={scaleIn}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full max-w-md rounded-3xl border border-white/40 p-7 sm:p-8 shadow-2xl shadow-teal-900/10"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                }}
              >
                {/* card header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Quick Appointment
                    </h3>
                    <p className="text-sm text-slate-500">
                      Book in under 60 seconds
                    </p>
                  </div>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="hero-name"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="hero-name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-phone"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="hero-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hero-service"
                      className="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Service Needed
                    </label>
                    <select
                      id="hero-service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 14px center",
                      }}
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

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="mt-1 w-full rounded-xl bg-teal-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                  >
                    Request Appointment
                  </motion.button>

                  <p className="text-center text-xs text-slate-400">
                    We&apos;ll confirm your appointment within 30 minutes
                  </p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── stats bar ── */}
      <motion.div
        variants={statsContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 w-full border-t border-teal-100/60"
        style={{
          background: "rgba(255,255,255,0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 gap-px px-5 sm:px-8 lg:px-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statItem}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-3 px-4 py-6 md:py-7 lg:py-8"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                {stat.icon}
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
