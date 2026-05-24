"use client";

import { motion } from "framer-motion";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─── data ─── */
const values = [
  {
    title: "Patient-First Care",
    description:
      "Every treatment plan begins with listening. We prioritize your comfort, preferences, and long-term oral health above all else — because exceptional dentistry starts with genuine empathy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    title: "Innovation & Technology",
    description:
      "From 3D digital scanning and AI-assisted diagnostics to laser-guided procedures, we invest in cutting-edge technology so you receive the most precise, efficient, and comfortable care available.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Compassionate Excellence",
    description:
      "Our team of board-certified specialists combines world-class expertise with a warm, reassuring approach — ensuring every visit feels as comfortable as it is clinically outstanding.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
      >
        <path d="M18 8a6 6 0 0 0-12 0c0 7 6 13 6 13s6-6 6-13Z" />
        <circle cx="12" cy="8" r="2" />
      </svg>
    ),
  },
];

const highlights = [
  { value: "15+", label: "Years of Excellence" },
  { value: "25,000+", label: "Smiles Transformed" },
  { value: "50+", label: "Specialist Doctors" },
];

/* ─── component ─── */
export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white py-24 sm:py-32 lg:py-40"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-sky-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── heading ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-16 max-w-2xl text-center lg:mb-20"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-teal-600">
            Who We Are
          </span>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              LuminaDent
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500 sm:text-xl">
            A Legacy of Excellence in Dental Care
          </p>
        </motion.div>

        {/* ── two-column story ── */}
        <div className="mb-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* left — text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="mb-6 text-2xl font-bold text-slate-800 sm:text-3xl">
              Redefining Modern Dentistry Since 2010
            </h3>
            <p className="mb-5 leading-relaxed text-slate-600">
              Founded by a team of visionary dental surgeons, LuminaDent was born from a
              singular belief: that every person deserves access to world-class dental care
              delivered with warmth and precision. From our first clinic in the heart of the
              city, we have grown into a trusted multi-specialty practice renowned for
              clinical excellence and patient satisfaction.
            </p>
            <p className="mb-5 leading-relaxed text-slate-600">
              Our state-of-the-art facilities house the latest in digital dentistry —
              including cone-beam CT imaging, CAD/CAM same-day restorations, and
              computer-guided implant surgery. We combine these advanced tools with a
              deeply personal approach, taking the time to understand each patient's goals,
              anxieties, and expectations before crafting a tailored treatment plan.
            </p>
            <p className="leading-relaxed text-slate-600">
              Whether you visit us for a routine cleaning or a complex full-mouth
              rehabilitation, you will experience the same unwavering commitment to
              comfort, transparency, and outstanding results that has earned the trust of
              over 25,000 patients and counting.
            </p>
          </motion.div>

          {/* right — visual placeholder */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-teal-400 to-sky-400 p-[3px] shadow-2xl shadow-teal-200/40 lg:max-w-none">
              <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-3px)]">
                <img
                  src="/images/clinic.png"
                  alt="LuminaDent modern dental clinic interior"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* floating accent badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -left-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 shadow-xl backdrop-blur-xl sm:-left-6"
            >
              <p className="text-3xl font-extrabold text-teal-600">15+</p>
              <p className="text-sm font-medium text-slate-500">Years of Trust</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── mission & values cards ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-24"
        >
          <motion.h3
            variants={fadeUp}
            className="mb-12 text-center text-2xl font-bold text-slate-800 sm:text-3xl"
          >
            Our Core Values
          </motion.h3>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(13,148,136,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/50 transition-colors duration-300 hover:border-teal-200 sm:p-10"
              >
                {/* icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-sky-50 text-teal-500 transition-colors duration-300 group-hover:from-teal-500 group-hover:to-sky-500 group-hover:text-white">
                  {v.icon}
                </div>
                <h4 className="mb-3 text-xl font-bold text-slate-800">{v.title}</h4>
                <p className="leading-relaxed text-slate-500">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── experience highlights bar ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 via-teal-500 to-sky-500 p-[1px]"
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-r from-teal-600 via-teal-500 to-sky-500">
            <div className="grid divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {highlights.map((h) => (
                <motion.div
                  key={h.label}
                  variants={scaleIn}
                  className="flex flex-col items-center justify-center px-6 py-10 text-center sm:py-12"
                >
                  <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    {h.value}
                  </span>
                  <span className="mt-2 text-sm font-medium tracking-wide text-teal-100 sm:text-base">
                    {h.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
