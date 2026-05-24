"use client";

import { motion } from "framer-motion";

/* ───────────────────────── animation helpers ───────────────────────── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ───────────────────────── data ───────────────────────── */

const contactItems = [
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "hello@luminadent.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Address",
    value: "123 Dental Avenue, Suite 100, Beverly Hills, CA 90210",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Emergency",
    value: "24/7 Emergency Line: +1 (555) 999-0000",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 5:00 PM" },
  { day: "Sunday", time: "10:00 AM – 2:00 PM", note: "Emergency Only" },
];

const socials = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.993c.454.454.78.92.993 1.523.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.993 1.523 4.088 4.088 0 0 1-1.523.993c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.993 4.088 4.088 0 0 1-.993-1.523c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .993-1.523A4.088 4.088 0 0 1 5.152 2.204c.46-.163 1.26-.349 2.43-.403C8.848 2.175 9.228 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a6.21 6.21 0 0 0-2.244 1.462A6.21 6.21 0 0 0 .434 4.336C.137 5.099-.067 5.97.009 7.249.067 8.529.054 8.937.054 12.196s.014 3.668.072 4.948c.058 1.278.261 2.15.558 2.913a6.21 6.21 0 0 0 1.462 2.244 6.21 6.21 0 0 0 2.244 1.462c.763.297 1.635.5 2.913.558C8.529 23.986 8.937 24 12 24s3.471-.014 4.751-.072c1.278-.058 2.15-.261 2.913-.558a6.21 6.21 0 0 0 2.244-1.462 6.21 6.21 0 0 0 1.462-2.244c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.278-.261-2.15-.558-2.913a6.21 6.21 0 0 0-1.462-2.244A6.21 6.21 0 0 0 19.664.434C18.901.137 18.029-.067 16.751.009 15.471.067 15.063.054 12 .054zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.906 20.452H3.767V9h3.139v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

/* ───────────────────────── component ───────────────────────── */

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-teal-50/50 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-50/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-teal-700"
          >
            Contact Us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-slate-500"
          >
            We&rsquo;d love to hear from you
          </motion.p>
        </motion.div>

        {/* ── Three-column grid ── */}
        <motion.div
          className="grid gap-10 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {/* ─── Column 1 – Contact Info ─── */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Contact Information
            </h3>

            {contactItems.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-all duration-300 hover:border-teal-100 hover:shadow-md hover:shadow-teal-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm leading-relaxed text-slate-700">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ─── Column 2 – Clinic Hours ─── */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-6 text-lg font-bold text-slate-900">
              Clinic Hours
            </h3>

            <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/60">
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Day
                    </th>
                    <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {hours.map((row, i) => (
                    <tr
                      key={row.day}
                      className={
                        i !== hours.length - 1
                          ? "border-b border-slate-50"
                          : ""
                      }
                    >
                      <td className="px-5 py-4 font-medium text-slate-700">
                        {row.day}
                      </td>
                      <td className="px-5 py-4 text-slate-600">
                        {row.time}
                        {row.note && (
                          <span className="ml-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                            {row.note}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Quick CTA */}
            <div className="mt-6 rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-5">
              <p className="text-sm font-semibold text-teal-800">
                Need an appointment?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-teal-600/80">
                Call us or book online — we&rsquo;ll find the perfect time for
                your visit.
              </p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-5 py-2 text-xs font-semibold text-white shadow-md shadow-teal-500/20 transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30"
              >
                Book Now
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ─── Column 3 – Social & Map ─── */}
          <motion.div variants={fadeUp} className="space-y-6">
            {/* Social links */}
            <div>
              <h3 className="mb-6 text-lg font-bold text-slate-900">
                Follow Us
              </h3>

              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:scale-110 hover:border-teal-200 hover:bg-teal-600 hover:text-white hover:shadow-md hover:shadow-teal-200/40"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
              <div className="relative flex h-64 items-center justify-center bg-gradient-to-br from-slate-100 via-teal-50 to-sky-100">
                {/* Grid lines */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute left-0 right-0 h-px bg-slate-600"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute bottom-0 top-0 w-px bg-slate-600"
                      style={{ left: `${(i + 1) * 12.5}%` }}
                    />
                  ))}
                </div>

                {/* Pin icon */}
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-lg shadow-teal-500/30">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur-sm">
                    Interactive Map
                  </span>
                </div>

                {/* Decorative rings */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-28 w-28 animate-ping rounded-full border border-teal-300/20" />
                </div>
              </div>

              <div className="bg-white px-4 py-3">
                <p className="text-xs font-medium text-slate-600">
                  123 Dental Avenue, Suite 100
                </p>
                <p className="text-xs text-slate-400">
                  Beverly Hills, CA 90210
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
