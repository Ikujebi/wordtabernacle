"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Clock,
  Sparkles,
  Search,
  Filter,
  X,
  Mail,
  CheckCircle2,
  PenLine,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import BlogCard, { BlogPostSummary } from "../components/BlogCard";
import Header from "../components/common/Header";

interface BlogClientViewProps {
  initialPosts: BlogPostSummary[];
}

function getReadTime(post: BlogPostSummary): string {
  const sample = post.content || post.excerpt || post.title || "";
  const words = sample.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min read`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogClientView({ initialPosts }: BlogClientViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return initialPosts;
    }

    const query = searchQuery.toLowerCase();

    return initialPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(query))
    );
  }, [initialPosts, searchQuery]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-zinc-50 font-sans antialiased selection:bg-[#5F021F] selection:text-white">
      <Header />

      <main className="pt-20 lg:pt-24">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white py-16 sm:py-24">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#5F021F]/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
              {/* HERO COPY */}
              <div className="lg:col-span-8">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5F021F]/15 bg-[#5F021F]/5 px-4 py-2">
                  <Sparkles className="h-3.5 w-3.5 text-[#5F021F]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
                    Word &amp; Insights
                  </span>
                </div>

                <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                  Stories. <span className="text-[#5F021F]">Truth.</span> <br />
                  Perspective.
                </h1>

                <p className="mt-6 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                  Explore spiritual reflections, practical teachings, community stories, and insights designed to help you grow in faith and live with purpose.
                </p>
              </div>

              {/* SEARCH */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <Search className="h-4 w-4 text-[#5F021F]" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                      Explore Articles
                    </span>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Search reflections..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-12 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-10 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[#5F021F] focus:ring-2 focus:ring-[#5F021F]/10"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors hover:text-zinc-700"
                        aria-label="Clear search"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CONTENT
        ========================================================= */}
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
          <div className="mx-auto max-w-7xl">
            {/* EMPTY — NO POSTS */}
            {initialPosts.length === 0 ? (
              <div className="mx-auto max-w-xl py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F021F]/10 text-[#5F021F]">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-zinc-900">
                  No articles yet.
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm font-medium text-zinc-500">
                  We are preparing fresh reflections, teachings, and stories. Check back soon for something new.
                </p>
              </div>
            ) : filteredPosts.length === 0 ? (
              /* EMPTY — SEARCH */
              <div className="mx-auto max-w-lg py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600">
                  <Filter className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-xl font-black tracking-tight text-zinc-900">
                  Nothing matched your search.
                </h2>
                <p className="mt-2 text-sm font-medium text-zinc-500">
                  We could not find an article matching <span className="font-bold text-zinc-800">“{searchQuery}”</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#5F021F] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-white transition-all hover:bg-[#4a0118]"
                >
                  Clear Search
                </button>
              </div>
            ) : (
              <div className="space-y-16">
                {/* SEARCH RESULT SUMMARY */}
                {searchQuery && (
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5F021F]">
                        Search Results
                      </span>
                      <p className="mt-1 text-sm font-medium text-zinc-600">
                        Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} for “{searchQuery}”
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="hidden items-center gap-2 text-[10px] font-black uppercase tracking-wider text-zinc-500 transition-colors hover:text-[#5F021F] sm:flex"
                    >
                      Clear
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}

                {/* FEATURED ARTICLE */}
                {featuredPost && (
                  <section>
                    <div className="mb-6 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
                          Featured Reading
                        </span>
                        <h2 className="mt-1 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                          Start here.
                        </h2>
                      </div>
                      <div className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 sm:flex">
                        <PenLine className="h-3.5 w-3.5 text-[#5F021F]" />
                        Latest insight
                      </div>
                    </div>

                    <article className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:border-[#5F021F]/30 hover:shadow-xl">
                      <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* IMAGE */}
                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="relative block h-64 overflow-hidden bg-zinc-100 sm:h-80 lg:col-span-7 lg:h-[440px]"
                        >
                          {featuredPost.coverImage ? (
                            <Image
                              src={featuredPost.coverImage}
                              alt={featuredPost.title}
                              fill
                              priority
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-[#5F021F]/5">
                              <BookOpen className="h-16 w-16 text-[#5F021F]/20" />
                            </div>
                          )}

                          <div className="absolute left-5 top-5">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#5F021F] shadow-md backdrop-blur-md">
                              <Sparkles className="h-3 w-3" />
                              Featured
                            </span>
                          </div>
                        </Link>

                        {/* COPY */}
                        <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                          <div>
                            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                              <span className="inline-flex items-center gap-1.5 text-zinc-600">
                                <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />
                                {formatDate(featuredPost.publishedAt)}
                              </span>
                              <span className="text-zinc-300">•</span>
                              <span className="inline-flex items-center gap-1.5 text-zinc-500">
                                <Clock className="h-3.5 w-3.5" />
                                {getReadTime(featuredPost)}
                              </span>
                            </div>

                            <Link href={`/blog/${featuredPost.slug}`}>
                              <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-zinc-900 transition-colors group-hover:text-[#5F021F] sm:text-3xl">
                                {featuredPost.title}
                              </h2>
                            </Link>

                            {featuredPost.excerpt && (
                              <p className="mt-4 line-clamp-3 text-sm font-medium leading-relaxed text-zinc-600">
                                {featuredPost.excerpt}
                              </p>
                            )}
                          </div>

                          <div className="mt-8 border-t border-zinc-100 pt-6">
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#5F021F]/10 text-[#5F021F]">
                                  <User className="h-4 w-4" />
                                </div>
                                <div>
                                  <span className="block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                                    Written by
                                  </span>
                                  <span className="block text-xs font-bold text-zinc-800">
                                    {featuredPost.author?.fullName ?? "Word Tabernacle"}
                                  </span>
                                </div>
                              </div>

                              <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="group/read inline-flex items-center gap-2 rounded-xl bg-[#5F021F] px-4 py-2.5 text-[10px] font-black uppercase tracking-wider text-white transition-all hover:bg-[#4a0118]"
                              >
                                Read
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/read:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </section>
                )}

                {/* RECENT POSTS */}
                {gridPosts.length > 0 && (
                  <section>
                    <div className="mb-6 flex items-end justify-between border-b border-zinc-200 pb-4">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
                          Keep Reading
                        </span>
                        <h2 className="mt-1 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl">
                          Recent Publications
                        </h2>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                        {gridPosts.length} {gridPosts.length === 1 ? "Article" : "Articles"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {gridPosts.map((post) => (
                        <BlogCard key={post.id} post={post} />
                      ))}
                    </div>
                  </section>
                )}

                {/* NEWSLETTER — Elegant Maroon Card */}
                <section className="relative overflow-hidden rounded-3xl bg-[#5F021F] text-white shadow-lg">
                  <div className="relative z-10 grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-12 lg:p-12">
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-rose-200">
                        <Mail className="h-3.5 w-3.5" />
                        Stay Connected
                      </div>

                      <h3 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Keep growing with us.
                      </h3>

                      <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-rose-100/80">
                        Receive spiritual reflections, devotionals, sermon insights, and important church updates directly in your inbox.
                      </p>
                    </div>

                    <div className="flex items-center lg:col-span-5">
                      {subscribed ? (
                        <div className="w-full rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                            <div>
                              <p className="text-xs font-black uppercase tracking-wider text-white">
                                You are subscribed
                              </p>
                              <p className="mt-1 text-xs font-medium leading-relaxed text-rose-100/80">
                                Thank you for joining us. We look forward to sharing updates with you.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <form onSubmit={handleSubscribe} className="w-full">
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <input
                              type="email"
                              required
                              placeholder="you@example.com"
                              value={emailInput}
                              onChange={(e) => setEmailInput(e.target.value)}
                              className="h-12 min-w-0 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-sm font-medium text-white outline-none placeholder:text-rose-200/50 focus:bg-white/20 focus:ring-2 focus:ring-white/30"
                            />

                            <button
                              type="submit"
                              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-[10px] font-black uppercase tracking-wider text-[#5F021F] transition-all hover:bg-rose-50 active:scale-95"
                            >
                              Subscribe
                              <ArrowUpRight className="h-4 w-4" />
                            </button>
                          </div>
                        </form>
                      )}
                    </div>
                  </div>
                </section>

                {/* FINAL CTA */}
                <section className="border-t border-zinc-200 pt-10 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#5F021F]/10 text-[#5F021F]">
                    <Heart className="h-4 w-4" />
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight text-zinc-900">
                    There is a place for you at WTBC.
                  </h2>

                  <p className="mx-auto mt-2 max-w-lg text-sm font-medium text-zinc-500">
                    Read, grow, connect, and discover more about the Word Tabernacle community.
                  </p>

                  <Link
                    href="/contact"
                    className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-[#5F021F] px-6 py-3 text-[10px] font-black uppercase tracking-wider text-white transition-all hover:bg-[#4a0118]"
                  >
                    Connect With Us
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </section>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}