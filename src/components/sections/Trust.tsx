"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const badgeStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ─── animated counter component ─── */
function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  inView,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  inView: boolean;
}) {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, target, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    return () => controls.stop();
  }, [inView, motionVal, target, duration]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplayVal(v));
    return () => unsub();
  }, [rounded]);

  return (
    <span>
      {prefix}
      {displayVal.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── star rating component ─── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#f59e0b" : "#e2e8f0"}
          stroke={star <= rating ? "#f59e0b" : "#e2e8f0"}
          strokeWidth="1"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ─── data ─── */
const trustBadges = [
  {
    name: "ADA Certified",
    abbr: "ADA",
    color: "#0D9488",
    description: "American Dental Association",
  },
  {
    name: "ISO 9001",
    abbr: "ISO",
    color: "#0EA5E9",
    description: "Quality Management",
  },
  {
    name: "5-Star Google",
    abbr: "★★★★★",
    color: "#f59e0b",
    description: "Google Reviews",
  },
  {
    name: "Best Clinic 2024",
    abbr: "🏆",
    color: "#8b5cf6",
    description: "Healthcare Awards",
  },
  {
    name: "JCI Accredited",
    abbr: "JCI",
    color: "#0F766E",
    description: "Joint Commission International",
  },
];

const counterCards = [
  {
    target: 99,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Based on patient surveys over the last 12 months",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    target: 25000,
    suffix: "+",
    label: "Patients Treated",
    description: "Trusted by families across the region since 2009",
    icon: (
      <svg
        width="26"
        height="26"
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
    ),
    gradient: "from-sky-500 to-blue-500",
  },
  {
    target: 15,
    suffix: "+",
    label: "Years of Excellence",
    description: "A legacy of premium dental care and innovation",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-500",
  },
  {
    target: 50,
    suffix: "+",
    label: "Dental Specialists",
    description: "Board-certified experts across all dental specializations",
    icon: (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9.5 5 12 5 15c0 3 1.5 5 3 5s2-2 3-2h2c1 0 1.5 2 3 2s3-2 3-5c0-3-2-5.5-2-8.5C17 3.5 14.5 2 12 2Z" />
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-500",
  },
];

const reviews = [
  {
    name: "Sarah Mitchell",
    initials: "SM",
    role: "Dental Implant Patient",
    rating: 5,
    text: "Dr. Patel and the team at LuminaDent completely transformed my smile. After years of feeling self-conscious, I finally have the confidence to smile in photos. The entire implant process was painless and the results are stunning.",
    date: "2 weeks ago",
    avatarBg: "bg-teal-100 text-teal-700",
  },
  {
    name: "James Rodriguez",
    initials: "JR",
    role: "Orthodontics Patient",
    rating: 5,
    text: "From the moment you walk in, you can tell this is a world-class facility. The clear aligners worked perfectly, and the staff was incredibly attentive throughout my treatment. I couldn't recommend LuminaDent more highly.",
    date: "1 month ago",
    avatarBg: "bg-sky-100 text-sky-700",
  },
  {
    name: "Emily Chen",
    initials: "EC",
    role: "Family Dentistry Patient",
    rating: 5,
    text: "Our whole family has been going to LuminaDent for three years. They're wonderful with my kids and always make the experience comfortable and fun. The pediatric dentists are incredibly gentle and patient. Truly the best dental care we've ever had.",
    date: "3 weeks ago",
    avatarBg: "bg-violet-100 text-violet-700",
  },
];

/* ═══════════════════════════════════════════════════
   TRUST / SOCIAL PROOF SECTION
   ═══════════════════════════════════════════════════ */
export default function Trust() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const countersInView = useInView(counterRef, { once: true, amount: 0.3 });
  const reviewsInView = useInView(reviewRef, { once: true, amount: 0.2 });

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(180deg, #f8fafc 0%, #ffffff 30%, #f8fafc 70%, #ffffff 100%)",
      }}
    >
      {/* subtle bg accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -top-40 right-0 h-[350px] w-[350px] rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, #0D9488 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full opacity-[0.06]"
          style={{
            background: "radial-gradient(circle, #0EA5E9 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ── section header ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5">
            Trusted by Thousands of{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0D9488 0%, #0EA5E9 100%)",
              }}
            >
              Happy Patients
            </span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our commitment to excellence has earned the trust of patients and
            recognition from leading healthcare organizations worldwide.
          </p>
        </motion.div>

        {/* ── trust badges row ── */}
        <motion.div
          variants={badgeStagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 mb-20"
        >
          {trustBadges.map((badge) => (
            <motion.div
              key={badge.name}
              variants={badgeItem}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm hover:shadow-lg hover:border-slate-200 transition-shadow cursor-default"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: badge.color }}
              >
                {badge.abbr.length <= 3 ? (
                  badge.abbr
                ) : (
                  <span className="text-xs">{badge.abbr}</span>
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  {badge.name}
                </p>
                <p className="text-xs text-slate-400">{badge.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── animated counter cards ── */}
        <motion.div
          ref={counterRef}
          variants={staggerContainer}
          initial="hidden"
          animate={countersInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {counterCards.map((card) => (
            <motion.div
              key={card.label}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl bg-white border border-slate-100 p-7 shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white`}
                >
                  {card.icon}
                </div>
              </div>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
                <AnimatedCounter
                  target={card.target}
                  suffix={card.suffix}
                  inView={countersInView}
                  duration={card.target > 1000 ? 2.5 : 1.8}
                />
              </p>
              <p className="text-base font-semibold text-slate-700 mb-1">
                {card.label}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── patient reviews ── */}
        <div ref={reviewRef}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={reviewsInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              What Our Patients Say
            </h3>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-slate-400"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
                  fill="#EA4335"
                />
              </svg>
              <span>Based on 2,400+ Google Reviews</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={reviewsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                variants={cardVariant}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-2xl bg-white border border-slate-100 p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* stars */}
                <StarRating rating={review.rating} />

                {/* review text */}
                <p className="mt-4 mb-6 text-sm leading-relaxed text-slate-600">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* reviewer info */}
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${review.avatarBg}`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {review.role} · {review.date}
                    </p>
                  </div>
                  {/* verified badge */}
                  <div className="ml-auto" title="Verified Patient">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="#0D9488"
                    >
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 12c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/25 transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
          >
            Join Our Happy Patients
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
        </motion.div>
      </div>
    </section>
  );
}
