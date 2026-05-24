"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ── animation helpers ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── data ───────────────────────────────────────────────────── */
const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign",
  "Root Canal",
  "Braces",
  "Emergency Care",
];

/* ── social icon SVGs ───────────────────────────────────────── */
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM6.997 20.452H3.668V9h3.33v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const socials = [
  { icon: <FacebookIcon />, label: "Facebook", href: "#" },
  { icon: <InstagramIcon />, label: "Instagram", href: "#" },
  { icon: <TwitterIcon />, label: "Twitter", href: "#" },
  { icon: <LinkedInIcon />, label: "LinkedIn", href: "#" },
];

/* ── component ──────────────────────────────────────────────── */
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer ref={ref} className="relative overflow-hidden bg-slate-950 text-white">
      {/* subtle top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Column 1: Brand ─────────────────────────────── */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* logo */}
            <div className="flex items-center gap-2 mb-5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 4C24.5 4 20 8.5 18 12C16 8.5 11.5 4 4 4C4 4 2 20 10 28C14 32 16 44 18 52C20 60 24 60 26 56C28 52 28 44 32 44C36 44 36 52 38 56C40 60 44 60 46 52C48 44 50 32 54 28C62 20 60 4 60 4C52.5 4 48 8.5 46 12C44 8.5 39.5 4 32 4Z"
                  fill="url(#footerToothGrad)"
                />
                <defs>
                  <linearGradient id="footerToothGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#14B8A6" />
                    <stop offset="1" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                LuminaDent
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium dental care for the whole family. Experience world-class
              treatments in a comfortable, state-of-the-art environment.
            </p>

            {/* socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-300 hover:bg-teal-500/20 hover:text-teal-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Column 2: Quick Links ──────────────────────── */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Services ─────────────────────────── */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-teal-400"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 4: Newsletter ───────────────────────── */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h4>
            <p className="mb-5 text-sm text-slate-400 leading-relaxed">
              Subscribe to our newsletter for dental tips, exclusive offers, and
              clinic updates delivered to your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/20 transition-shadow hover:shadow-xl hover:shadow-teal-500/30"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ── Divider ──────────────────────────────────────── */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} LuminaDent. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="transition-colors hover:text-teal-400">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="transition-colors hover:text-teal-400">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
