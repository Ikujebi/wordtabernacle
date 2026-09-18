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
  Bookmark,
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
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return {
      title: "Post Not Found | Word Tabernacle Bible Church",
    };
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
      authors: post.author?.fullName
        ? [post.author.fullName]
        : ["Word Tabernacle"],
      images: post.coverImage
        ? [{ url: post.coverImage, alt: post.title }]
        : undefined,
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
  const authorName = post.author?.fullName ?? "Word Tabernacle Bible Church";

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50/50 pb-24 pt-28 sm:pt-36">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[650px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-260px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[#5F021F]/[0.05] blur-3xl" />
        <div className="absolute right-[-180px] top-40 h-72 w-72 rounded-full bg-[#F8E8EC]/70 blur-3xl" />
      </div>

      <article className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="mb-10 flex items-center justify-between sm:mb-14">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2.5 text-xs font-bold text-slate-600 transition-colors hover:text-[#5F021F]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all group-hover:border-[#5F021F]/30 group-hover:bg-[#5F021F]/5 group-hover:shadow-xs">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </span>
            <span className="hidden sm:inline">Back to Articles</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#5F021F]/15 bg-[#5F021F]/10 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#5F021F]">
            <Sparkles className="h-3.5 w-3.5" />
            Reflection
          </div>
        </div>

        {/* Article Header */}
        <header className="text-center">
          <h1 className="text-balance text-3xl font-black leading-tight tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Metadata pill container */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 shadow-2xs">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5F021F] text-white">
                <User className="h-3 w-3" />
              </div>
              <span className="font-bold text-slate-800">{authorName}</span>
            </div>

            {formattedDate && (
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 shadow-2xs">
                <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />
                <span>{formattedDate}</span>
              </div>
            )}

            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 shadow-2xs">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Cover Image */}
        <div className="mt-10 sm:mt-14">
          {post.coverImage ? (
            <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-100 shadow-xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-3xl border border-[#5F021F]/15 bg-gradient-to-br from-[#5F021F]/10 via-[#F8E8EC] to-slate-100 shadow-sm">
              <div className="flex flex-col items-center gap-3 text-[#5F021F]/50">
                <BookOpen className="h-12 w-12" />
                <span className="text-xs font-black uppercase tracking-[0.25em]">
                  Word Tabernacle
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Article Body Container */}
        <div className="mt-12 sm:mt-16">
          {/* Framed Excerpt Block */}
          {post.excerpt && (
            <div className="relative mb-12 overflow-hidden rounded-2xl border border-[#5F021F]/20 bg-gradient-to-r from-[#5F021F]/[0.04] to-transparent p-6 sm:p-8">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-[#5F021F]" />
              <div className="flex items-start gap-4">
                <Bookmark className="mt-1 h-5 w-5 shrink-0 text-[#5F021F]" />
                <p className="text-base font-semibold leading-relaxed text-slate-800 sm:text-lg sm:leading-8">
                  {post.excerpt}
                </p>
              </div>
            </div>
          )}

          {/* Main Body */}
          <main className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-12">
            {isHtmlContent ? (
              <div
                className="
                  prose prose-slate max-w-none
                  text-[17px] leading-8 text-slate-700
                  sm:text-lg sm:leading-9

                  prose-headings:font-black
                  prose-headings:tracking-tight
                  prose-headings:text-slate-900

                  prose-h2:mt-10
                  prose-h2:mb-4
                  prose-h2:text-2xl
                  sm:prose-h2:text-3xl

                  prose-h3:mt-8
                  prose-h3:mb-3
                  prose-h3:text-xl
                  sm:prose-h3:text-2xl

                  prose-p:my-6

                  prose-strong:font-bold
                  prose-strong:text-slate-900

                  prose-a:font-bold
                  prose-a:text-[#5F021F]
                  prose-a:no-underline
                  hover:prose-a:underline

                  prose-blockquote:rounded-2xl
                  prose-blockquote:border-l-4
                  prose-blockquote:border-[#5F021F]
                  prose-blockquote:bg-[#5F021F]/[0.03]
                  prose-blockquote:px-6
                  prose-blockquote:py-4
                  prose-blockquote:not-italic
                  prose-blockquote:text-slate-800

                  prose-li:my-2

                  prose-img:my-8
                  prose-img:rounded-2xl
                  prose-img:shadow-md
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="whitespace-pre-wrap text-[17px] leading-8 text-slate-700 sm:text-lg sm:leading-9">
                {post.content}
              </div>
            )}
          </main>
        </div>

        {/* Footer Actions Panel */}
        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <ShareActions title={post.title} />

            <Link
              href="/blog"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5F021F] px-6 py-3.5 text-xs font-extrabold text-white shadow-md shadow-[#5F021F]/20 transition-all hover:bg-[#430116] active:scale-[0.98] sm:w-auto"
            >
              Read More Articles
              <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Brand Footer Signature */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="mb-4 h-px w-12 bg-[#5F021F]/30" />
          <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
            Word Tabernacle Bible Church
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Articles • Reflections • The Word
          </p>
        </div>
      </article>
    </div>
  );
}