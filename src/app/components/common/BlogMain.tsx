"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Blessed Is She Who Believed",
    message:
      "According to Luke 1:45, there is a distinct blessing reserved for those who trust in God's promises before seeing the outcome. Real faith doesn't wait for sight to praise God; it anchors itself on the certainty of His spoken Word, knowing that divine performance always follows true belief.",
    date: "Sep 19, 2026",
  },
  {
    id: 2,
    title: "Unshaken Through the Trial",
    message:
      "In Luke 23:14, Jesus stood accused before Pilate, silent in His conviction and purposeful in His sacrifice. Even when circumstances around us seem adverse or challenging, God’s divine schedule and promised redemption remain totally secure and unchanged.",
    date: "Sep 19, 2026",
  },
  {
    id: 3,
    title: "Unlocking Divine Fulfillment",
    message:
      "Radical trust in God's word unlocks performance in every area of our lives. When we align our convictions with Scripture—believing without doubting—we step into the manifestation of every covenant promise God has decreed over us.",
    date: "Sep 19, 2026",
  },
];

const BlogMain = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 text-zinc-100 sm:py-24 lg:py-32">
      {/* =====================================================
          AMBIENT BACKGROUND GLOWS (DARK ATMOSPHERE)
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#5F021F]/15 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-[#5F021F]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="mb-12 border-b border-zinc-800/80 pb-8 lg:mb-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            {/* Heading */}
            <div className="lg:col-span-8">
              <div className="mb-5 inline-flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#5F021F]/30 bg-[#5F021F]/20 text-rose-300">
                  <BookOpen className="h-4 w-4" />
                </span>

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-rose-300">
                  Weekly Devotionals
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                Spiritual
                <span className="block text-rose-200">
                  Insights &amp; Reflections.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:col-span-4">
              <div className="flex items-start gap-3 lg:justify-end">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-[#5F021F]" />

                <p className="max-w-sm text-sm font-medium leading-7 text-zinc-400 lg:text-right">
                  Timeless teachings from Word Tabernacle Bible Church to help
                  ground your faith, shape your perspective, and nourish your
                  walk with God.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DEVOTIONAL GRID
        ====================================================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.map((blog, index) => {
            const words = blog.message.split(" ");
            const isExpanded = expanded === blog.id;

            return (
              <article
                key={blog.id}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border transition-all duration-500 ${
                  isExpanded
                    ? "border-[#5F021F]/60 bg-zinc-900/90 shadow-2xl shadow-[#5F021F]/20"
                    : "border-zinc-800/80 bg-zinc-900/50 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-xl"
                }`}
              >
                {/* Top burgundy accent line */}
                <div
                  className={`absolute left-0 right-0 top-0 h-1 transition-all duration-500 ${
                    isExpanded
                      ? "bg-[#5F021F]"
                      : "bg-zinc-800 group-hover:bg-[#5F021F]"
                  }`}
                />

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#5F021F]/30 bg-[#5F021F]/20 text-rose-200">
                      <span className="text-[10px] font-black">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>

                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-500">
                      Devotional
                    </span>
                  </div>

                  {/* Date */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                      {blog.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-2xl font-black leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-rose-200">
                    {blog.title}
                  </h3>

                  {/* Message Body */}
                  <div className="mt-5 flex-1">
                    <p className="text-sm font-medium leading-7 text-zinc-300 transition-all duration-300 sm:text-[15px]">
                      {isExpanded
                        ? blog.message
                        : `${words.slice(0, 20).join(" ")}...`}
                    </p>
                  </div>

                  {/* Action Footer */}
                  <div className="mt-8 border-t border-zinc-800/80 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(blog.id)}
                        aria-expanded={isExpanded}
                        className="group/button inline-flex items-center gap-2 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-rose-300 focus:outline-none focus:ring-2 focus:ring-[#5F021F]"
                      >
                        <span>{isExpanded ? "Collapse" : "Read More"}</span>

                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-800/50 transition-all group-hover/button:border-[#5F021F]/50 group-hover/button:bg-[#5F021F]/20">
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>

                      <span className="hidden text-[8px] font-black uppercase tracking-[0.18em] text-zinc-500 sm:block">
                        WTBC Archive
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            LOWER CTA / ARCHIVE INTRO
        ====================================================== */}
        <div className="mt-14 border-t border-zinc-800/80 pt-10 sm:mt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#5F021F]/40 bg-[#5F021F]/20 text-rose-200">
                <BookOpen className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-rose-300">
                  From the Word Archive
                </p>

                <p className="mt-1 max-w-xl text-sm font-medium leading-6 text-zinc-400">
                  Take a moment to read, reflect, and carry the Word with you
                  throughout the week.
                </p>
              </div>
            </div>

            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 self-start rounded-xl bg-[#5F021F] px-5 py-3.5 text-[9px] font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-[#4a0118] sm:self-auto"
            >
              Explore All Articles
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMain;