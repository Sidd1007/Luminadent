"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── scroll detection ─────────────────────────────────────── */
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);

    // active-section detection
    const offset = 120;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.getBoundingClientRect().top <= offset) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── smooth scroll helper ─────────────────────────────────── */
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  /* ── hamburger line variants ──────────────────────────────── */
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };
  const midLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const botLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  /* ── mobile-menu stagger variants ─────────────────────────── */
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.07 } },
    exit: { opacity: 0, transition: { duration: 0.25, when: "afterChildren" } },
  };
  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.15 } },
  };

  return (
    <>
      {/* ── Desktop / Mobile Navbar ─────────────────────────── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/[.04]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* ── Logo ───────────────────────────────────────── */}
          <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 group">
            {/* tooth icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M32 4C24.5 4 20 8.5 18 12C16 8.5 11.5 4 4 4C4 4 2 20 10 28C14 32 16 44 18 52C20 60 24 60 26 56C28 52 28 44 32 44C36 44 36 52 38 56C40 60 44 60 46 52C48 44 50 32 54 28C62 20 60 4 60 4C52.5 4 48 8.5 46 12C44 8.5 39.5 4 32 4Z"
                fill="url(#toothGrad)"
              />
              <defs>
                <linearGradient id="toothGrad" x1="4" y1="4" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#14B8A6" />
                  <stop offset="1" stopColor="#0EA5E9" />
                </linearGradient>
              </defs>
            </svg>

            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent select-none">
              LuminaDent
            </span>
          </button>

          {/* ── Desktop Links ──────────────────────────────── */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                      isActive
                        ? "text-teal-600"
                        : scrolled
                        ? "text-slate-600 hover:text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-teal-50 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ── CTA + Hamburger ────────────────────────────── */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-shadow hover:shadow-xl hover:shadow-teal-500/30"
            >
              Book Now
            </motion.button>

            {/* hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="relative flex lg:hidden h-10 w-10 flex-col items-center justify-center gap-[5px]"
              aria-label="Toggle menu"
            >
              <motion.span
                variants={topLine}
                animate={mobileOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full bg-slate-700 origin-center"
              />
              <motion.span
                variants={midLine}
                animate={mobileOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-6 rounded-full bg-slate-700"
              />
              <motion.span
                variants={botLine}
                animate={mobileOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="block h-[2px] w-6 rounded-full bg-slate-700 origin-center"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Full-screen Mobile Menu ─────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/90 backdrop-blur-2xl lg:hidden"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                variants={linkVariants}
                onClick={() => scrollTo(link.href)}
                className="text-3xl font-semibold text-slate-800 hover:text-teal-600 transition-colors"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="mt-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 px-10 py-3.5 text-lg font-semibold text-white shadow-xl shadow-teal-500/25"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
