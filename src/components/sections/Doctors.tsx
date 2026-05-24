"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Doctor {
  name: string;
  initials: string;
  image: string;
  specialty: string;
  qualifications: string;
  experience: string;
  bio: string;
  gradient: string;
  accentColor: string;
}

const doctors: Doctor[] = [
  {
    name: "Dr. Sarah Mitchell",
    initials: "SM",
    image: "/images/doctor-sarah.png",
    specialty: "Cosmetic Dentistry",
    qualifications: "DDS, FAGD",
    experience: "12 Years Experience",
    bio: "Renowned for her artistic approach to smile makeovers, Dr. Mitchell combines aesthetic precision with the latest in cosmetic dental techniques to deliver stunning, natural-looking results.",
    gradient: "from-teal-400 to-emerald-500",
    accentColor: "bg-teal-500",
  },
  {
    name: "Dr. James Anderson",
    initials: "JA",
    image: "/images/doctor-james.png",
    specialty: "Orthodontics",
    qualifications: "DMD, MS Ortho",
    experience: "15 Years Experience",
    bio: "A pioneer in invisible aligner therapy, Dr. Anderson has straightened thousands of smiles using cutting-edge orthodontic solutions tailored for both teens and adults.",
    gradient: "from-sky-400 to-blue-500",
    accentColor: "bg-sky-500",
  },
  {
    name: "Dr. Emily Chen",
    initials: "EC",
    image: "/images/doctor-emily.png",
    specialty: "Pediatric Dentistry",
    qualifications: "DDS, Board Certified",
    experience: "10 Years Experience",
    bio: "With a warm, playful approach, Dr. Chen transforms dental visits into positive experiences for children, building lifelong habits of excellent oral health from an early age.",
    gradient: "from-violet-400 to-purple-500",
    accentColor: "bg-violet-500",
  },
  {
    name: "Dr. Michael Roberts",
    initials: "MR",
    image: "/images/doctor-michael.png",
    specialty: "Oral Surgery",
    qualifications: "DMD, MD, FACS",
    experience: "18 Years Experience",
    bio: "Dual-qualified in both medicine and dentistry, Dr. Roberts brings unparalleled surgical expertise to complex extractions, dental implants, and reconstructive jaw procedures.",
    gradient: "from-amber-400 to-orange-500",
    accentColor: "bg-amber-500",
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M22 7l-10 6L2 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.9,
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

export default function Doctors() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="doctors"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden bg-slate-50"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-teal-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl pointer-events-none" />

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
            Our Specialists
          </motion.span>
          <motion.h2
            variants={headingVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Meet Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              Expert Team
            </span>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed"
          >
            Dedicated professionals committed to your dental health
          </motion.p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group-hover:shadow-2xl group-hover:shadow-slate-200/60 transition-all duration-500">
                {/* Avatar area */}
                <div className="relative pt-8 pb-4 px-6">
                  {/* Decorative background glow behind avatar */}
                  <div
                    className={`absolute top-4 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-br ${doctor.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500`}
                  />

                  {/* Avatar circle */}
                  <div className="relative mx-auto w-28 h-28 mb-5">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${doctor.gradient} p-[3px] shadow-lg group-hover:scale-105 transition-transform duration-500`}
                    >
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Hover overlay with social icons */}
                    <div className="absolute inset-0 rounded-full bg-slate-900/70 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 scale-90 group-hover:scale-100">
                      <button
                        aria-label={`${doctor.name} LinkedIn`}
                        className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200"
                      >
                        <LinkedInIcon />
                      </button>
                      <button
                        aria-label={`${doctor.name} Twitter`}
                        className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200"
                      >
                        <TwitterIcon />
                      </button>
                      <button
                        aria-label={`${doctor.name} Email`}
                        className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors duration-200"
                      >
                        <EmailIcon />
                      </button>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-900 text-center mb-2 group-hover:text-teal-700 transition-colors duration-300">
                    {doctor.name}
                  </h3>

                  {/* Specialty badge */}
                  <div className="flex justify-center mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white ${doctor.accentColor}`}
                    >
                      <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                      {doctor.specialty}
                    </span>
                  </div>

                  {/* Qualifications */}
                  <p className="text-center text-sm font-medium text-slate-500 mb-1">
                    {doctor.qualifications}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center justify-center gap-1.5 text-teal-600 mb-4">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {doctor.experience}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                {/* Bio */}
                <div className="px-6 py-5">
                  <p className="text-sm leading-relaxed text-slate-500 text-center">
                    {doctor.bio}
                  </p>
                </div>

                {/* Bottom social icons row (visible on mobile, hidden on desktop where hover overlay is used) */}
                <div className="px-6 pb-6 flex justify-center gap-2 lg:hidden">
                  <a
                    href="#"
                    aria-label={`${doctor.name} LinkedIn`}
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-teal-50 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-colors duration-200"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="#"
                    aria-label={`${doctor.name} Twitter`}
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-teal-50 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-colors duration-200"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="#"
                    aria-label={`${doctor.name} Email`}
                    className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-teal-50 flex items-center justify-center text-slate-400 hover:text-teal-600 transition-colors duration-200"
                  >
                    <EmailIcon />
                  </a>
                </div>

                {/* Gradient accent line at bottom */}
                <div
                  className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${doctor.gradient} transition-all duration-700 ease-out`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-shadow duration-300"
          >
            View All Specialists
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
