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
} from "lucide-react";
import BlogCard, { BlogPostSummary } from "../components/BlogCard";

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
    if (!searchQuery.trim()) return initialPosts;
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
    <div className="relative min-h-screen overflow-hidden bg-slate-50/60 pb-24 pt-28 sm:pt-36">
      {/* Soft Ambient Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-full max-w-7xl -translate-x-1/2 bg-radial from-[#5F021F]/5 via-transparent to-transparent" />

      <main className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200/80 pb-8 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5F021F]/15 bg-[#5F021F]/10 px-3 py-1 text-xs font-extrabold tracking-wide text-[#5F021F]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Word & Insights</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Church Blog & Reflections
            </h1>
            <p className="text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
              Spiritual growth resources, uplifting teachings, and community news from Word Tabernacle Bible Church.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search reflections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-xs font-semibold text-slate-800 outline-none shadow-xs transition-all placeholder:text-slate-400 focus:border-[#5F021F]/50 focus:ring-4 focus:ring-[#5F021F]/10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Empty States */}
        {initialPosts.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-4 shadow-xs">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5F021F]/5 text-[#5F021F] ring-8 ring-[#5F021F]/5">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">No articles published yet</h3>
              <p className="mt-1 text-xs text-slate-500">
                We are currently preparing fresh content. Check back soon for new reflections!
              </p>
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="mx-auto max-w-md rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center space-y-4 shadow-xs">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Filter className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">No matching articles</h3>
              <p className="mt-1 text-xs text-slate-500">
                We couldn't find any post matching "{searchQuery}". Try searching with different keywords.
              </p>
            </div>
            <button
              onClick={() => setSearchQuery("")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#5F021F] hover:underline"
            >
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Hero Post */}
            {featuredPost && (
              <section className="relative">
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                  <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="relative block h-72 w-full overflow-hidden bg-slate-100 sm:h-80 lg:col-span-7 lg:h-[440px]"
                    >
                      {featuredPost.coverImage ? (
                        <Image
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5F021F]/15 via-slate-100 to-slate-200">
                          <BookOpen className="h-16 w-16 text-[#5F021F]/30" />
                        </div>
                      )}
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full border border-white/50 bg-white/90 px-3.5 py-1.5 text-xs font-black text-[#5F021F] backdrop-blur-md shadow-sm">
                          Featured Insight
                        </span>
                      </div>
                    </Link>

                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            {getReadTime(featuredPost)}
                          </span>
                        </div>

                        <Link href={`/blog/${featuredPost.slug}`}>
                          <h2 className="text-2xl font-extrabold leading-snug text-slate-900 transition-colors group-hover:text-[#5F021F] sm:text-3xl">
                            {featuredPost.title}
                          </h2>
                        </Link>

                        {featuredPost.excerpt && (
                          <p className="line-clamp-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                            {featuredPost.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5F021F]/10 font-bold text-[#5F021F] ring-2 ring-[#5F021F]/10">
                            <User className="h-4 w-4" />
                          </div>
                          <span>{featuredPost.author?.fullName ?? "Word Tabernacle"}</span>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5F021F] transition-transform group-hover:translate-x-1"
                        >
                          Read Article <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Grid Posts */}
            {gridPosts.length > 0 && (
              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
                    Recent Publications
                  </h2>
                  <span className="text-xs font-bold text-slate-400">
                    {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                  {gridPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* Newsletter Subscription Card */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#5F021F] to-[#3a0113] p-8 text-white shadow-lg sm:p-12">
              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Stay Connected</span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Receive Weekly Spiritual Reflections
                </h3>
                <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                  Subscribe to get inspiring devotionals, sermon summaries, and upcoming event announcements delivered straight to your inbox.
                </p>

                {subscribed ? (
                  <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/20 px-4 py-2.5 text-xs font-bold text-emerald-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Thank you for subscribing! God bless you.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs text-white outline-none placeholder:text-slate-300 focus:ring-2 focus:ring-white/40"
                    />
                    <button
                      type="submit"
                      className="rounded-xl bg-white px-6 py-2.5 text-xs font-extrabold text-[#5F021F] shadow-md transition-all hover:bg-slate-100 active:scale-95"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}