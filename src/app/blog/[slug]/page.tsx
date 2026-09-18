import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { API_URL } from "@/lib/api";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";
import ShareActions from "./ShareActions";

interface BlogPostDetail {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: string | null;
  author: { fullName: string } | null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BASE_ENDPOINT = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;

async function getPost(slug: string): Promise<BlogPostDetail | null> {
  try {
    const res = await fetch(`${BASE_ENDPOINT}/blog-posts/slug/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;

    const json = await res.json();
    const post = json?.data ?? json;

    return post?.id ? post : null;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    return null;
  }
}

function getReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found | Word Tabernacle Bible Church" };
  }

  const description =
    post.excerpt ||
    `${post.title} - Articles and reflections from Word Tabernacle Bible Church.`;

  return {
    title: `${post.title} | Word Tabernacle Bible Church`,
    description,
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt ?? undefined,
      authors: post.author?.fullName ? [post.author.fullName] : ["Word Tabernacle"],
      images: post.coverImage ? [{ url: post.coverImage, alt: post.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) notFound();

  const readTime = getReadTime(post.content || "");
  const formattedDate = formatDate(post.publishedAt);
  const isHtmlContent = /<[a-z][\s\S]*>/i.test(post.content || "");

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial from-[#5F021F]/5 via-transparent to-transparent pointer-events-none -z-10" />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-slate-700 border border-slate-200/80 shadow-xs hover:bg-slate-50 hover:text-[#5F021F] transition-all active:scale-95"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Articles</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5F021F]/10 border border-[#5F021F]/15 text-[#5F021F] text-xs font-extrabold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Reflection</span>
          </div>
        </div>

        {/* Header Block */}
        <header className="space-y-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Post Metadata Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-slate-600 border-y border-slate-200/80 py-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-[#5F021F]/10 text-[#5F021F] flex items-center justify-center font-bold ring-2 ring-[#5F021F]/10">
                <User className="h-4 w-4" />
              </div>
              <span className="text-slate-900 font-bold">
                {post.author?.fullName ?? "Word Tabernacle"}
              </span>
            </div>

            {formattedDate && (
              <>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-slate-500">
                  <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />
                  {formattedDate}
                </span>
              </>
            )}

            <span className="text-slate-300 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {readTime}
            </span>
          </div>
        </header>

        {/* Cover Image Showcase */}
        {post.coverImage ? (
          <div className="relative h-72 sm:h-96 lg:h-[460px] w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="h-44 w-full rounded-3xl bg-gradient-to-br from-[#5F021F]/10 via-slate-100 to-slate-200 flex items-center justify-center text-slate-400 border border-slate-200/60">
            <BookOpen className="h-12 w-12 text-[#5F021F]/30" />
          </div>
        )}

        {/* Excerpt Summary Box (if present) */}
        {post.excerpt && (
          <div className="rounded-2xl border-l-4 border-[#5F021F] bg-white p-5 sm:p-6 shadow-xs text-slate-700 italic text-sm sm:text-base leading-relaxed">
            "{post.excerpt}"
          </div>
        )}

        {/* Article Body Content */}
        <main className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-xs">
          {isHtmlContent ? (
            <div
              className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed prose-headings:font-bold prose-headings:text-slate-900 prose-[#5F021F] prose-a:text-[#5F021F] prose-a:font-semibold hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          ) : (
            <div className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-relaxed whitespace-pre-wrap font-normal">
              {post.content}
            </div>
          )}
        </main>

        {/* Article Footer & Return CTA */}
        <footer className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <ShareActions title={post.title} />

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-[#5F021F] px-5 py-2.5 text-xs font-extrabold text-white shadow-xs hover:bg-[#430116] transition-all active:scale-95"
          >
            <span>Read More Articles</span>
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </footer>

      </article>
    </div>
  );
}