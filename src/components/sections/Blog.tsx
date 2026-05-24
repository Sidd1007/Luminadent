"use client";

import { motion } from "framer-motion";

const posts = [
  {
    title: "The Ultimate Guide to Oral Hygiene",
    category: "Dental Health",
    date: "March 15, 2024",
    readTime: "5 min read",
    excerpt:
      "Discover the essential daily habits that will keep your teeth and gums healthy for a lifetime. From proper brushing techniques to flossing tips...",
    image: "/images/blog-hygiene.png",
  },
  {
    title: "Everything You Need to Know About Teeth Whitening",
    category: "Cosmetic",
    date: "March 8, 2024",
    readTime: "4 min read",
    excerpt:
      "Professional vs. at-home whitening: which is right for you? Learn about the latest whitening technologies and what results you can expect...",
    image: "/images/blog-whitening.png",
  },
  {
    title: "Caring for Your Braces: A Complete Guide",
    category: "Orthodontics",
    date: "February 28, 2024",
    readTime: "6 min read",
    excerpt:
      "Essential tips for maintaining your braces, from cleaning techniques to foods to avoid. Make your orthodontic journey smooth and comfortable...",
    image: "/images/blog-braces.png",
  },
  {
    title: "Top 10 Foods for Healthy Teeth and Gums",
    category: "Nutrition",
    date: "February 20, 2024",
    readTime: "3 min read",
    excerpt:
      "What you eat matters for your dental health. Discover the superfoods that strengthen enamel, fight bacteria, and promote healthy gums...",
    image: "/images/blog-foods.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-teal-50/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-sky-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold tracking-wide text-teal-700"
          >
            Our Blog
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Dental Health Insights
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-slate-500"
          >
            Expert tips and advice for a healthier smile
          </motion.p>
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-teal-100/40"
            >
              {/* Image placeholder */}
              <div className="relative h-52 overflow-hidden sm:h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-teal-600/90 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-teal-700 sm:text-xl">
                  {post.title}
                </h3>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
                  <div className="flex items-center gap-3">
                    {/* Calendar icon */}
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                      {post.date}
                    </span>
                    {/* Clock icon */}
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>

                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold text-teal-600 transition-colors duration-200 hover:text-teal-800"
                  >
                    Read More
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ── CTA button ── */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-600 to-teal-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:brightness-110"
          >
            View All Articles
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
