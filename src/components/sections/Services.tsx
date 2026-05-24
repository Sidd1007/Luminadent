"use client";

import { motion } from "framer-motion";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ─── service data ─── */
const services = [
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter, more confident smile.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 3c-1.5 0-2.7.4-3.6 1.2C7.5 5 7 6.2 7 7.5c0 1.8.8 3 1.3 4 .6 1.1.7 2 .5 3.5-.3 2-.5 4 .2 5.2.5.8 1.2 1.3 2 1.3h2c.8 0 1.5-.5 2-1.3.7-1.2.5-3.2.2-5.2-.2-1.5-.1-2.4.5-3.5.5-1 1.3-2.2 1.3-4 0-1.3-.5-2.5-1.4-3.3C14.7 3.4 13.5 3 12 3Z" />
        <path d="M9.5 12h5" />
      </svg>
    ),
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement solutions with natural-looking results.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2c-1.7 0-3 .6-3.8 1.6C7.4 4.6 7 6 7 7.3c0 2 1 3.5 1.5 4.7.4.9.5 1.6.3 3l-.3 2" />
        <path d="M12 2c1.7 0 3 .6 3.8 1.6.8 1 1.2 2.4 1.2 3.7 0 2-1 3.5-1.5 4.7-.4.9-.5 1.6-.3 3l.3 2" />
        <rect x="9" y="17" width="6" height="2" rx="0.5" />
        <rect x="10" y="19" width="4" height="3" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Root Canal",
    description:
      "Painless root canal therapy using advanced techniques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3.5 1.5 5s.5 3 0 5c-.3 1.5 0 3 1 4 .7.6 1.5 1 2.5 1s1.8-.4 2.5-1c1-1 1.3-2.5 1-4-.5-2-.5-3.5 0-5S17 9 17 7a5 5 0 0 0-5-5Z" />
        <path d="M12 8v6" />
        <path d="M10 10h4" />
      </svg>
    ),
  },
  {
    title: "Invisalign",
    description:
      "Clear aligners for a straighter smile without traditional braces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M4 11c0-2 1-5 4-6s5 0 8 0 5-1 4 6" />
        <path d="M4 11c0 2 1 5 4 6s5 0 8 0 5 1 4-6" />
        <path d="M8 9v6M12 8.5v7M16 9v6" />
      </svg>
    ),
  },
  {
    title: "Braces",
    description:
      "Orthodontic solutions for perfect alignment at any age.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <rect x="3" y="9" width="4" height="6" rx="1" />
        <rect x="10" y="9" width="4" height="6" rx="1" />
        <rect x="17" y="9" width="4" height="6" rx="1" />
        <line x1="7" y1="12" x2="10" y2="12" />
        <line x1="14" y1="12" x2="17" y2="12" />
        <circle cx="5" cy="12" r="0.7" fill="currentColor" />
        <circle cx="12" cy="12" r="0.7" fill="currentColor" />
        <circle cx="19" cy="12" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Smile Makeover",
    description:
      "Complete smile transformation with customized treatment plans.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M2 12c3-1 5 1 6 0s2-2 4-1" />
      </svg>
    ),
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, specialized dental care for children of all ages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <circle cx="12" cy="8" r="5" />
        <path d="M12 13v3" />
        <path d="M9 22c0-2.5 1.3-4 3-6 1.7 2 3 3.5 3 6" />
        <path d="M8.5 6.5c.5-.5 1.5-1 3.5-1s3 .5 3.5 1" />
        <path d="M9.5 9h.01M14.5 9h.01" />
        <path d="M10 11c.5.5 1 .7 2 .7s1.5-.2 2-.7" />
      </svg>
    ),
  },
  {
    title: "Emergency Care",
    description:
      "24/7 emergency dental services when you need them most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <path d="M8 2h8l4 6-8 14L4 8Z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
];

/* ─── component ─── */
export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 sm:py-32 lg:py-40"
    >
      {/* decorative background elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-teal-50/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-50/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-teal-600">
            What We Offer
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              Dental Services
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500 sm:text-xl">
            Comprehensive care tailored to your unique needs
          </p>
        </motion.div>

        {/* ── cards grid ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 25px 60px -15px rgba(13,148,136,0.18)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 shadow-lg shadow-slate-100/40 transition-colors duration-300 hover:border-teal-300 sm:p-8"
            >
              {/* gradient accent on hover — top edge */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-teal-500 to-sky-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-sky-50 text-teal-500 transition-colors duration-300 group-hover:from-teal-500 group-hover:to-sky-500 group-hover:text-white">
                {service.icon}
              </div>

              {/* content */}
              <h3 className="mb-2 text-lg font-bold text-slate-800">
                {service.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500">
                {service.description}
              </p>

              {/* CTA */}
              <button
                type="button"
                className="group/btn inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-colors duration-200 hover:text-teal-800"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ── bottom CTA strip ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-sky-50/80 p-8 backdrop-blur sm:flex-row sm:gap-4 sm:p-10 lg:mt-20"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Not sure which treatment is right for you?
            </h3>
            <p className="mt-1 text-slate-500">
              Book a free consultation and let our specialists guide you.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-500/30"
          >
            Book Free Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
