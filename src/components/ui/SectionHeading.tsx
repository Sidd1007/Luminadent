"use client";

import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    >
      {/* Accent dot */}
      <div
        className={`flex items-center gap-2 mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        <span
          className={`text-sm font-semibold uppercase tracking-widest ${
            light ? "text-primary-300" : "text-primary-600"
          }`}
        >
          {subtitle}
        </span>
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-accent-500 to-primary-500" />
      </div>

      {/* Main title */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {/* Decorative underline */}
      <div
        className={`mt-6 flex items-center gap-2 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="block w-12 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        <span className="block w-3 h-3 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 opacity-60" />
      </div>
    </motion.div>
  );
}
