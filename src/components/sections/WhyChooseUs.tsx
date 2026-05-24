"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Experienced Dentists",
    description: "50+ specialists with decades of combined experience",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M30 12l3-4m-3 4l4 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Advanced Technology",
    description: "State-of-the-art equipment for precise diagnostics and treatment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="10" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M18 38h12M24 32v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="21" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M24 16v-2m0 14v-2m-7-5h2m10 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Painless Procedures",
    description: "Gentle techniques and sedation options for anxiety-free visits",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 42s-14-10.692-14-20C10 14.268 16.268 8 24 8s14 6.268 14 14c0 9.308-14 20-14 20z" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M19 22l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Same-Day Appointments",
    description: "Flexible scheduling to fit your busy lifestyle",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="12" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M8 20h32" stroke="currentColor" strokeWidth="2.5" />
        <path d="M16 8v8m16-8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M24 28v2.5l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with flexible payment plans",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M24 14v20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M19 20c0-2.5 2-4 5-4s5 1.5 5 4-2 3-5 3.5-5 1.5-5 4 2 4 5 4 5-1.5 5-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    title: "Sterilization Standards",
    description: "Hospital-grade sterilization protocols for your safety",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6l4 8h8l-6 5 2 8-8-5-8 5 2-8-6-5h8l4-8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="36" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M21 36l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Patient-First Care",
    description: "Personalized treatment plans tailored to your needs",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M16 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M12 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M24 30v6m-3-3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Digital Dentistry",
    description: "3D imaging, digital impressions, and AI-assisted diagnostics",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M14 8h-4a2 2 0 00-2 2v4m0 20v4a2 2 0 002 2h4m20 0h4a2 2 0 002-2v-4m0-20v-4a2 2 0 00-2-2h-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 18l-2 12h3l3-8 3 8h3l-2-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="24" cy="15" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 0.8,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/40 to-white pointer-events-none" />

      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="why-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="#0D9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-grid)" />
        </svg>
      </div>

      {/* Decorative blurred orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span
            variants={headingVariants}
            className="inline-block text-sm font-semibold tracking-widest uppercase text-teal-600 mb-4"
          >
            Our Advantages
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              LuminaDent
            </span>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed"
          >
            Experience the difference of premium dental care
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative"
            >
              {/* Gradient top border — visible on hover */}
              <div className="absolute -top-[2px] left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-teal-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-white/80 backdrop-blur-xl border border-slate-100 rounded-2xl p-7 shadow-sm group-hover:shadow-xl group-hover:shadow-teal-500/8 transition-all duration-500">
                {/* Icon */}
                <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-teal-50 to-sky-50 border border-teal-100/60 flex items-center justify-center text-teal-600 group-hover:from-teal-100 group-hover:to-sky-100 group-hover:scale-110 transition-all duration-500">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Subtle arrow indicator on hover */}
                <div className="mt-4 flex items-center gap-1.5 text-teal-500 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-xs font-medium">Learn more</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA accent */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal-50 to-sky-50 border border-teal-100/60">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500" />
            </span>
            <span className="text-sm font-medium text-slate-700">
              Trusted by <span className="font-bold text-teal-700">15,000+</span> patients across the city
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
