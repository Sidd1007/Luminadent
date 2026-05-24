"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Testimonial {
  id: number;
  name: string;
  initials: string;
  rating: number;
  text: string;
  treatment: string;
  gradientFrom: string;
  gradientTo: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer W.",
    initials: "JW",
    rating: 5,
    text: "The team at LuminaDent completely transformed my smile. I was nervous about getting veneers, but Dr. Mitchell made the entire process comfortable and painless. I can't stop smiling!",
    treatment: "Porcelain Veneers",
    gradientFrom: "from-teal-400",
    gradientTo: "to-sky-400",
  },
  {
    id: 2,
    name: "Robert K.",
    initials: "RK",
    rating: 5,
    text: "After years of avoiding the dentist, LuminaDent changed everything. Their gentle approach and modern facilities made me actually enjoy my visits. Highly recommend!",
    treatment: "General Dentistry",
    gradientFrom: "from-sky-400",
    gradientTo: "to-indigo-400",
  },
  {
    id: 3,
    name: "Maria S.",
    initials: "MS",
    rating: 5,
    text: "My children love coming to LuminaDent! Dr. Chen is amazing with kids and makes every visit fun. The office is beautiful and the staff is incredibly warm.",
    treatment: "Pediatric Care",
    gradientFrom: "from-rose-400",
    gradientTo: "to-orange-300",
  },
  {
    id: 4,
    name: "David L.",
    initials: "DL",
    rating: 5,
    text: "I got Invisalign at LuminaDent and the results are incredible. The digital treatment plan showed me exactly what to expect, and the final result exceeded my expectations.",
    treatment: "Invisalign",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-teal-400",
  },
  {
    id: 5,
    name: "Amanda T.",
    initials: "AT",
    rating: 4,
    text: "Professional, modern, and genuinely caring. The emergency dental care I received was outstanding. They fit me in same-day and resolved my issue quickly.",
    treatment: "Emergency Care",
    gradientFrom: "from-violet-400",
    gradientTo: "to-purple-400",
  },
  {
    id: 6,
    name: "Thomas M.",
    initials: "TM",
    rating: 5,
    text: "Best dental experience I've ever had. The office feels like a spa, the technology is impressive, and the results speak for themselves. Five stars all the way!",
    treatment: "Teeth Whitening",
    gradientFrom: "from-amber-400",
    gradientTo: "to-orange-400",
  },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "#FBBF24" : "none"}
          stroke={i < rating ? "#FBBF24" : "#CBD5E1"}
          strokeWidth="1.5"
          className="shrink-0"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 13.77 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="shrink-0 w-[340px] sm:w-[380px] rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/40 p-6 md:p-8 flex flex-col gap-5 select-none">
      {/* Top row: avatar + meta */}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradientFrom} ${t.gradientTo} flex items-center justify-center text-white text-sm font-bold shadow-md`}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{t.name}</p>
          <StarRating rating={t.rating} />
        </div>
      </div>

      {/* Body */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Treatment tag */}
      <span className="self-start inline-block text-[11px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
        {t.treatment}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate cards for seamless looping
  const allCards = [...testimonials, ...testimonials];

  // Total width of one set (card width + gap). Matches the w-[340px] sm:w-[380px] and gap-6 (24px).
  // We'll use 380+24 = 404 for the calculation at larger sizes; CSS handles the actual sizing.
  const singleSetWidth = testimonials.length * (380 + 24);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-sky-50/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 md:mb-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-teal-500 mb-4"
          >
            Testimonials
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            What Our Patients{" "}
            <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
              Say
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg text-slate-500"
          >
            Real stories from real patients
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-400 to-sky-400"
          />
        </motion.div>
      </div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: isPaused ? undefined : [`0px`, `-${singleSetWidth}px`] }}
          transition={
            isPaused
              ? { type: "tween", duration: 0 }
              : {
                  x: {
                    duration: 40,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                  },
                }
          }
        >
          {allCards.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </motion.div>
      </motion.div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative max-w-3xl mx-auto px-4 mt-16 md:mt-20"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400">
          {/* Google rating */}
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#FBBF24">
              <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 13.77 5.06 16.7l.94-5.49-4-3.9 5.53-.8L10 1.5z" />
            </svg>
            <span className="text-sm font-semibold text-slate-600">
              4.9/5
            </span>
            <span className="text-xs text-slate-400">on Google</span>
          </div>

          <div className="h-5 w-px bg-slate-200" />

          {/* Patient count */}
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-teal-400"
            >
              <path
                d="M10 10a4 4 0 100-8 4 4 0 000 8zM2 18a8 8 0 0116 0"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-sm font-semibold text-slate-600">
              15,000+
            </span>
            <span className="text-xs text-slate-400">happy patients</span>
          </div>

          <div className="h-5 w-px bg-slate-200" />

          {/* Years */}
          <div className="flex items-center gap-2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-sky-400"
            >
              <rect x="2" y="4" width="16" height="14" rx="2" />
              <path d="M6 2v4M14 2v4M2 9h16" />
            </svg>
            <span className="text-sm font-semibold text-slate-600">20+</span>
            <span className="text-xs text-slate-400">years of excellence</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
