"use client";

import React, { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Qualified of the Lord",
    message:
      "Obedience to God qualifies one for His blessings. God does not solely use the qualified. He qualifies those who make themselves available for His work. And strict obedience to His injunctions attracts being qualified by Him. Check and do the needful.",
    date: "Oct 19, 2022",
  },
  {
    id: 2,
    title: "My Refuge and Fortress",
    message:
      "A refuge guards things within it and a fortress shields its contents from external intrusion. God is our refuge and fortress, connoting that challenges might be happening around us but God will protect us from them all, never to be affected by any. He/she who has God as his/her refuge and fortress enjoys peace of mind, even in trying times.",
    date: "Oct 19, 2022",
  },
  {
    id: 3,
    title: "Power and Wisdom",
    message:
      "To say God is All-knowing and most powerful is not an understatement. He reigns supreme as the most wise of all and the most powerful. Hence, He is Omnipotent and Omniscient. Do you seek wisdom and power (which I enjoin you to passionately seek)? Come to God who gives liberally and without recounting.",
    date: "Oct 19, 2022",
  },
];

const BlogMain = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="w-full bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 border-b border-zinc-100">
          <div className="space-y-2">
            <span className="text-red-600 font-mono text-xs uppercase tracking-[0.3em] block">
              Weekly Devotionals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900">
              Spiritual Insights & Words
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-sm max-w-xs mt-4 md:mt-0">
            Timeless teachings from Word Tabernacle to ground your weekly faith and practice.
          </p>
        </div>

        {/* Clean, Modular Flexible Height Deck Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {blogs.map((blog) => {
            const words = blog.message.split(" ");
            const isExpanded = expanded === blog.id;

            return (
              <article
                key={blog.id}
                className="group flex flex-col justify-between bg-zinc-50 hover:bg-white border border-zinc-100 p-8 rounded-xl shadow-sm hover:shadow-xl hover:border-zinc-200/60 transition-all duration-300 min-h-[340px]"
              >
                <div className="space-y-4">
                  {/* Metadata Tag */}
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-wider">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="text-red-500">Devotional</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-extrabold text-xl text-zinc-900 tracking-tight group-hover:text-red-600 transition-colors duration-200">
                    {blog.title}
                  </h3>

                  {/* Paragraph Body Block */}
                  <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed text-justify">
                    {isExpanded ? blog.message : `${words.slice(0, 20).join(" ")}...`}
                  </p>
                </div>

                {/* Content-relative Interactive Actions Layout */}
                <div className="pt-6 mt-6 border-t border-zinc-200/60 flex items-center justify-between">
                  <button
                    onClick={() => toggleExpand(blog.id)}
                    className="text-xs font-bold uppercase tracking-widest text-zinc-800 hover:text-red-600 focus:outline-none transition-colors flex items-center gap-1.5"
                  >
                    {isExpanded ? (
                      <>
                        COLLAPSE <span className="font-sans text-[10px]">▲</span>
                      </>
                    ) : (
                      <>
                        READ MORE <span className="font-sans text-[10px]">▼</span>
                      </>
                    )}
                  </button>

                  <div className="px-3 py-1 bg-zinc-200/50 rounded text-[11px] font-mono font-medium text-zinc-600 uppercase">
                    Word Archive
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default BlogMain;