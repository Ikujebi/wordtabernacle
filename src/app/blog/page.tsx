import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { API_URL } from "@/lib/api";
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight, 
  Clock, 
  Sparkles 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Reflections | Word Tabernacle Bible Church",
  description: "Inspiring articles, spiritual reflections, and updates from the Word Tabernacle Bible Church family.",
};

interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string | null;
  coverImage: string | null;
  publishedAt: string | null;
  author: { fullName: string } | null;
}

// Safely resolve API base URL regardless of trailing slash or /api path
const BASE_ENDPOINT = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;

async function getPosts(): Promise<BlogPostSummary[]> {
  try {
    const res = await fetch(`${BASE_ENDPOINT}/blog-posts?isPublished=true&limit=50`, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) return [];
    const json = await res.json();
    return json.data ?? [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

// Calculate estimated read time based on text length
function getReadTime(text: string | null): string {
  if (!text) return "3 min read";
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

// Format ISO date into a clean string
function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const posts = await getPosts();

  const featuredPost = posts[0];
  const gridPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 sm:pt-36 pb-24">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5F021F]/10 border border-[#5F021F]/15 text-[#5F021F] text-xs font-bold tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Word & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Church Blog & Reflections
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Spiritual growth resources, uplifting teachings, and community news from Word Tabernacle Bible Church.
          </p>
        </div>

        {posts.length === 0 ? (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center max-w-xl mx-auto shadow-xs space-y-4">
            <div className="h-16 w-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">No articles published yet</h3>
              <p className="text-xs text-slate-500 mt-1">
                We are currently preparing fresh content. Check back soon for new reflections!
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            
            {/* Featured Hero Post */}
            {featuredPost && (
              <section>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group relative block overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Cover Image */}
                    <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-[420px] bg-slate-100 overflow-hidden">
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
                        <div className="absolute inset-0 bg-gradient-to-br from-[#5F021F]/20 to-slate-200 flex items-center justify-center">
                          <BookOpen className="h-16 w-16 text-[#5F021F]/40" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#5F021F] text-xs font-extrabold shadow-xs">
                          Latest Article
                        </span>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-slate-400" />
                            {formatDate(featuredPost.publishedAt)}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            {getReadTime(featuredPost.excerpt || featuredPost.title)}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#5F021F] transition-colors leading-snug">
                          {featuredPost.title}
                        </h2>

                        {featuredPost.excerpt && (
                          <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                            {featuredPost.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <div className="h-7 w-7 rounded-full bg-[#5F021F]/10 text-[#5F021F] flex items-center justify-center font-bold">
                            <User className="h-3.5 w-3.5" />
                          </div>
                          <span>{featuredPost.author?.fullName ?? "Word Tabernacle"}</span>
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#5F021F] group-hover:translate-x-1 transition-transform">
                          Read Full Article <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </section>
            )}

            {/* Grid Posts */}
            {gridPosts.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xl font-bold text-slate-900">Recent Publications</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {gridPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                    >
                      <div>
                        {/* Thumbnail Image */}
                        <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                          {post.coverImage ? (
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-300">
                              <BookOpen className="h-10 w-10" />
                            </div>
                          )}
                        </div>

                        {/* Card Info */}
                        <div className="p-5 space-y-3">
                          <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400">
                            <span>{formatDate(post.publishedAt)}</span>
                            <span>•</span>
                            <span>{getReadTime(post.excerpt)}</span>
                          </div>

                          <h3 className="font-bold text-slate-900 group-hover:text-[#5F021F] transition-colors text-base leading-snug line-clamp-2">
                            {post.title}
                          </h3>

                          {post.excerpt && (
                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-5 pt-0 flex items-center justify-between text-xs text-slate-500 font-medium">
                        <span className="truncate max-w-[150px]">
                          {post.author?.fullName ?? "Word Tabernacle"}
                        </span>
                        <span className="font-bold text-[#5F021F] inline-flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                          Read <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

          </div>
        )}
      </main>
    </div>
  );
}