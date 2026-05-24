"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqItems = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and United Healthcare. Our team will verify your coverage and help you understand your benefits before any treatment.",
  },
  {
    question: "How much does teeth whitening cost?",
    answer:
      "Our professional teeth whitening treatments start at $299. We offer both in-office and take-home options. During your consultation, we'll recommend the best approach for your goals and budget.",
  },
  {
    question: "Is Invisalign painful?",
    answer:
      "Invisalign is generally much more comfortable than traditional braces. You may experience mild pressure when switching to new aligners, but this typically subsides within a few days. Most patients adapt quickly.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes! We provide 24/7 emergency dental care. If you're experiencing severe pain, swelling, or a dental injury, call our emergency line immediately. We prioritize getting you seen as quickly as possible.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting every six months for routine check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health needs. We'll create a personalized schedule for you.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We offer multiple payment options including insurance, credit cards, CareCredit financing, and in-house payment plans. We believe quality dental care should be accessible to everyone.",
  },
  {
    question: "How long does an Invisalign treatment take?",
    answer:
      "Treatment duration varies by case, but most Invisalign treatments take 6-18 months. During your consultation, we'll use advanced 3D imaging to create a precise treatment plan and timeline.",
  },
  {
    question: "Are dental implants safe?",
    answer:
      "Dental implants have a success rate of over 95% and are considered one of the safest dental procedures. Our experienced surgeons use advanced technology to ensure precise placement and optimal results.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      variants={itemVariant}
      transition={{ duration: 0.5 }}
      className={`group overflow-hidden rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-teal-200 bg-white shadow-lg shadow-teal-500/5"
          : "border-slate-100 bg-white/70 hover:border-slate-200 hover:bg-white hover:shadow-md"
      }`}
    >
      {/* Teal left border accent for active item */}
      <div className="relative">
        <div
          className={`absolute left-0 top-0 h-full w-1 rounded-l-xl transition-all duration-300 ${
            isOpen ? "bg-gradient-to-b from-teal-500 to-sky-500" : "bg-transparent"
          }`}
        />

        <button
          type="button"
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
        >
          <span
            className={`text-base font-semibold transition-colors duration-200 sm:text-lg ${
              isOpen ? "text-teal-700" : "text-slate-800 group-hover:text-slate-900"
            }`}
          >
            {item.question}
          </span>

          {/* +/- toggle icon */}
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen
                ? "bg-teal-100 text-teal-600"
                : "bg-slate-100 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500"
            }`}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {/* Horizontal line (always visible) */}
              <motion.line
                x1="3"
                y1="8"
                x2="13"
                y2="8"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Vertical line (collapses when open) */}
              <motion.line
                x1="8"
                y1="3"
                x2="8"
                y2="13"
                animate={{ scaleY: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "center" }}
              />
            </svg>
          </div>
        </button>

        {/* Answer body */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={`faq-answer-${index}`}
              role="region"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                <p className="leading-relaxed text-slate-500">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, rgba(13,148,136,1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-14 text-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block rounded-full bg-teal-100 px-5 py-1.5 text-sm font-semibold tracking-wide text-teal-700"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-teal-600 to-sky-500 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl text-lg text-slate-500"
          >
            Everything you need to know about our services
          </motion.p>
        </motion.div>

        {/* ── Accordion ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-500">
            Still have questions?{" "}
            <a
              href="#appointment"
              className="inline-flex items-center gap-1 font-semibold text-teal-600 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-700 hover:decoration-teal-500"
            >
              Get in touch with our team
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-0.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
