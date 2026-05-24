"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Transformation {
  id: number;
  treatment: string;
  description: string;
  testimonial: string;
  patient: string;
  image: string;
}

const transformations: Transformation[] = [
  {
    id: 1,
    treatment: "Teeth Whitening",
    description:
      "Professional-grade whitening that brightened this patient's smile by 8 shades in a single session, restoring youthful radiance and boosting confidence.",
    testimonial:
      "I walked in feeling self-conscious and walked out beaming. The results were instant and absolutely stunning!",
    patient: "Sarah M.",
    image: "/images/whitening.png",
  },
  {
    id: 2,
    treatment: "Dental Veneers",
    description:
      "Custom-crafted porcelain veneers that corrected chips, gaps, and discoloration — delivering a flawless, natural-looking Hollywood smile.",
    testimonial:
      "My veneers look so natural that even my closest friends couldn't tell. Dr. Mitchell is a true artist.",
    patient: "James P.",
    image: "/images/veneers.png",
  },
  {
    id: 3,
    treatment: "Orthodontic Treatment",
    description:
      "A 14-month Invisalign journey that transformed a crowded, misaligned bite into a perfectly straight, harmonious smile.",
    testimonial:
      "I never thought straight teeth were possible at my age. The invisible aligners made the whole process effortless.",
    patient: "Lisa K.",
    image: "/images/ortho.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

/* ------------------------------------------------------------------ */
/*  Interactive Slider Card                                            */
/* ------------------------------------------------------------------ */

function SliderCard({ item }: { item: Transformation }) {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPos(pct);
  }, []);

  /* --- Mouse handlers --- */
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      updatePosition(e.clientX);

      const onMove = (ev: MouseEvent) => {
        if (isDragging.current) updatePosition(ev.clientX);
      };
      const onUp = () => {
        isDragging.current = false;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [updatePosition]
  );

  /* --- Touch handlers --- */
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      isDragging.current = true;
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging.current) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl bg-white shadow-lg shadow-slate-200/60 border border-slate-100 overflow-hidden"
    >
      {/* Slider area */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] select-none cursor-col-resize overflow-hidden"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* BEFORE — full width behind, with stain/dull filter */}
        <img
          src={item.image}
          alt={`${item.treatment} before`}
          className="absolute inset-0 h-full w-full object-cover select-none filter sepia-[0.35] saturate-[1.1] brightness-[0.88] contrast-[0.92]"
          draggable={false}
        />

        {/* AFTER — clipped to slider position, crisp and white */}
        <img
          src={item.image}
          alt={`${item.treatment} after`}
          className="absolute inset-0 h-full w-full object-cover select-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
          draggable={false}
        />

        {/* Labels */}
        <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
          Before
        </span>
        <span className="absolute top-4 right-4 text-xs font-semibold uppercase tracking-widest text-teal-800 bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full">
          After
        </span>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/90 shadow-lg z-10"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-teal-400 flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Arrows icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-teal-500"
          >
            <path
              d="M5 9L2 9M2 9L4 7M2 9L4 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9L16 9M16 9L14 7M16 9L14 11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20baseFrequency%3D%220.8%22/%3E%3C/filter%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20filter%3D%22url(%23n)%22/%3E%3C/svg%3E')] pointer-events-none" />
      </div>

      {/* Text content */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Treatment tag */}
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
          {item.treatment}
        </span>

        <p className="text-slate-600 text-sm leading-relaxed">
          {item.description}
        </p>

        {/* Testimonial */}
        <blockquote className="relative pl-4 border-l-2 border-teal-300">
          <p className="text-slate-500 text-sm italic leading-relaxed">
            &ldquo;{item.testimonial}&rdquo;
          </p>
          <footer className="mt-2 text-xs font-semibold text-slate-700">
            — {item.patient}
          </footer>
        </blockquote>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="transformations"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-bold uppercase tracking-[0.2em] text-teal-500 mb-4"
          >
            Real Results
          </motion.span>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Stunning Smile{" "}
            <span className="bg-gradient-to-r from-teal-500 to-sky-500 bg-clip-text text-transparent">
              Transformations
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg text-slate-500"
          >
            See the remarkable results achieved by our expert team
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-teal-400 to-sky-400"
          />
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {transformations.map((item) => (
            <SliderCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Your Transformation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="ml-1"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
