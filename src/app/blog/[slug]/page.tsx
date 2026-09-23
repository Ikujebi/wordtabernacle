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
  ArrowUpRight,
  Heart,
} from "lucide-react";

import ShareActions from "./ShareActions";
import Header from "../../components/common/Header";

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

const BASE_ENDPOINT = API_URL.endsWith("/api")
  ? API_URL
  : `${API_URL}/api`;

async function getPost(
  slug: string
): Promise<BlogPostDetail | null> {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/blog-posts/slug/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return null;

    const json = await res.json();
    const post = json?.data ?? json;

    return post?.id ? post : null;
  } catch (error) {
    console.error(
      "Failed to fetch blog post:",
      error
    );

    return null;
  }
}

function getReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(
    1,
    Math.ceil(words / 200)
  );

  return `${minutes} min read`;
}

function formatDate(
  dateStr: string | null
): string {
  if (!dateStr) return "";

  return new Date(dateStr).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.slug);

  if (!post) {
    return {
      title:
        "Post Not Found | Word Tabernacle Bible Church",
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
      publishedTime:
        post.publishedAt ?? undefined,

      authors: post.author?.fullName
        ? [post.author.fullName]
        : ["Word Tabernacle"],

      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.coverImage
        ? [post.coverImage]
        : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const resolvedParams = await params;
  const post = await getPost(
    resolvedParams.slug
  );

  if (!post) notFound();

  const readTime = getReadTime(
    post.content || ""
  );

  const formattedDate = formatDate(
    post.publishedAt
  );

  const isHtmlContent =
    /<[a-z][\s\S]*>/i.test(
      post.content || ""
    );

  const authorName =
    post.author?.fullName ??
    "Word Tabernacle Bible Church";

  return (
    <div className="min-h-screen overflow-hidden bg-zinc-50 font-sans antialiased selection:bg-[#5F021F] selection:text-white">

      <Header />

      <main className="pt-20 lg:pt-24">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute right-[-100px] top-[-100px] h-96 w-96 rounded-full bg-[#5F021F]/5 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

            {/* Top navigation */}
            <div className="mb-10 flex items-center justify-between">

              <Link
                href="/blog"
                className="group inline-flex items-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-[#5F021F]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-all group-hover:border-[#5F021F]/20 group-hover:bg-[#5F021F]/5">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                </span>

                <span className="hidden sm:inline">
                  Back to Articles
                </span>

                <span className="sm:hidden">
                  Back
                </span>
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#5F021F]/15 bg-[#5F021F]/5 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#5F021F]" />

                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
                  Reflection
                </span>
              </div>

            </div>

            {/* Article heading */}
            <div className="mx-auto max-w-4xl text-center">

              <div className="mb-4 flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-[#5F021F]/30" />

                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#5F021F]">
                  Word &amp; Insights
                </span>

                <span className="h-px w-6 bg-[#5F021F]/30" />
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="mx-auto mt-6 max-w-2xl text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
                  {post.excerpt}
                </p>
              )}

              {/* Metadata */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/80 px-4 py-1.5 shadow-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5F021F]/10 text-[#5F021F]">
                    <User className="h-3 w-3" />
                  </span>

                  <span className="text-[10px] font-bold text-zinc-700">
                    {authorName}
                  </span>
                </div>

                {formattedDate && (
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 px-4 py-1.5 text-[10px] font-bold text-zinc-500 shadow-sm">
                    <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />

                    {formattedDate}
                  </div>
                )}

                <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50/80 px-4 py-1.5 text-[10px] font-bold text-zinc-500 shadow-sm">
                  <Clock className="h-3.5 w-3.5 text-zinc-400" />

                  {readTime}
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            COVER IMAGE
        ====================================================== */}
        <section className="relative z-20 px-5 sm:px-8 lg:px-10">

          <div className="mx-auto -mt-6 max-w-5xl sm:-mt-8">

            {post.coverImage ? (
              <div className="group relative aspect-[16/8.5] overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-md">

                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />

                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#5F021F] shadow-sm backdrop-blur-md">
                    <BookOpen className="h-3 w-3" />
                    WTBC Journal
                  </span>
                </div>

              </div>
            ) : (
              <div className="flex aspect-[16/7] w-full items-center justify-center overflow-hidden rounded-3xl border border-[#5F021F]/10 bg-[#5F021F]/5 shadow-sm">

                <div className="flex flex-col items-center gap-3 text-center text-[#5F021F]/60">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <BookOpen className="h-7 w-7 text-[#5F021F]" />
                  </div>

                  <span className="text-[9px] font-black uppercase tracking-[0.25em]">
                    Word Tabernacle
                  </span>

                </div>

              </div>
            )}

          </div>
        </section>

        {/* =====================================================
            ARTICLE
        ====================================================== */}
        <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">

          <div className="mx-auto max-w-5xl">

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

              {/* Side information */}
              <aside className="hidden lg:col-span-3 lg:block">

                <div className="sticky top-32 space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">

                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
                      Article Details
                    </span>

                    <div className="mt-2 h-px w-8 bg-[#5F021F]/30" />
                  </div>

                  <div className="space-y-4">

                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                        Author
                      </span>

                      <span className="mt-1 block text-xs font-bold leading-5 text-zinc-800">
                        {authorName}
                      </span>
                    </div>

                    {formattedDate && (
                      <div>
                        <span className="block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                          Published
                        </span>

                        <span className="mt-1 block text-xs font-bold leading-5 text-zinc-800">
                          {formattedDate}
                        </span>
                      </div>
                    )}

                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-wider text-zinc-400">
                        Reading Time
                      </span>

                      <span className="mt-1 block text-xs font-bold leading-5 text-zinc-800">
                        {readTime}
                      </span>
                    </div>

                  </div>

                  <div className="h-px w-full bg-zinc-100" />

                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-wider text-zinc-500 transition-colors hover:text-[#5F021F]"
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                    All Articles
                  </Link>

                </div>

              </aside>

              {/* Main reading column */}
              <article className="lg:col-span-9">

                {/* Mobile / tablet metadata */}
                <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-zinc-200 pb-4 lg:hidden">

                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-600">
                    <User className="h-3.5 w-3.5 text-[#5F021F]" />
                    {authorName}
                  </div>

                  {formattedDate && (
                    <>
                      <span className="text-zinc-300">•</span>

                      <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-500">
                        <Calendar className="h-3.5 w-3.5 text-[#5F021F]" />
                        {formattedDate}
                      </div>
                    </>
                  )}

                  <span className="text-zinc-300">•</span>

                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-500">
                    <Clock className="h-3.5 w-3.5" />
                    {readTime}
                  </div>

                </div>

                {/* Excerpt */}
                {post.excerpt && (
                  <div className="relative mb-8 overflow-hidden rounded-2xl border border-[#5F021F]/15 bg-[#5F021F]/[0.03] p-5 sm:p-6">

                    <div className="absolute left-0 top-0 h-full w-1 bg-[#5F021F]" />

                    <div className="flex items-start gap-3.5">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5F021F]/10 text-[#5F021F]">
                        <Bookmark className="h-4 w-4" />
                      </div>

                      <p className="text-sm font-semibold leading-relaxed text-zinc-700 sm:text-base">
                        {post.excerpt}
                      </p>

                    </div>

                  </div>
                )}

                {/* Main body */}
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-10">

                  {isHtmlContent ? (
                    <div
                      className="
                        prose prose-zinc max-w-none
                        text-[16px] leading-8 text-zinc-600
                        sm:text-[17px] sm:leading-8

                        prose-headings:font-black
                        prose-headings:tracking-tight
                        prose-headings:text-zinc-900

                        prose-h1:mb-6
                        prose-h1:text-3xl

                        prose-h2:mt-10
                        prose-h2:mb-4
                        prose-h2:text-2xl

                        prose-h3:mt-8
                        prose-h3:mb-3
                        prose-h3:text-xl

                        prose-p:my-5

                        prose-strong:font-bold
                        prose-strong:text-zinc-900

                        prose-a:font-bold
                        prose-a:text-[#5F021F]
                        prose-a:no-underline
                        hover:prose-a:underline

                        prose-blockquote:my-8
                        prose-blockquote:rounded-xl
                        prose-blockquote:border-l-4
                        prose-blockquote:border-[#5F021F]
                        prose-blockquote:bg-[#5F021F]/[0.03]
                        prose-blockquote:px-5
                        prose-blockquote:py-4
                        prose-blockquote:not-italic
                        prose-blockquote:text-zinc-800

                        prose-img:my-8
                        prose-img:rounded-2xl

                        prose-hr:my-8
                        prose-hr:border-zinc-200
                      "
                      dangerouslySetInnerHTML={{
                        __html: post.content,
                      }}
                    />
                  ) : (
                    <div className="whitespace-pre-wrap text-[16px] leading-8 text-zinc-600 sm:text-[17px] sm:leading-8">
                      {post.content}
                    </div>
                  )}

                </div>

                {/* Article actions */}
                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <ShareActions
                      title={post.title}
                    />

                    <Link
                      href="/blog"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5F021F] px-5 py-3 text-[10px] font-black uppercase tracking-wider text-white transition-all hover:bg-[#4a0118] sm:w-auto"
                    >
                      More Articles

                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>

                  </div>

                </div>

              </article>

            </div>
          </div>
        </section>

        {/* =====================================================
            CONNECTION CTA
        ====================================================== */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl bg-[#5F021F] text-white shadow-lg">

              <div className="relative z-10 flex flex-col items-center justify-between gap-6 p-8 text-center sm:p-10 lg:flex-row lg:p-12 lg:text-left">

                <div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1">
                    <Heart className="h-3.5 w-3.5 text-rose-200" />

                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-100">
                      Stay Connected
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    Keep growing with us.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed text-rose-100/80">
                    Explore more from WTBC, connect with our community, and discover where you can belong.
                  </p>

                </div>

                <Link
                  href="/contact"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-[10px] font-black uppercase tracking-wider text-[#5F021F] transition-all hover:bg-rose-50"
                >
                  Connect With Us

                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            BRAND SIGNATURE
        ====================================================== */}
        <section className="px-5 pb-12 text-center sm:px-8">

          <div className="mx-auto flex max-w-2xl flex-col items-center">

            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-zinc-200" />
              <Sparkles className="h-3.5 w-3.5 text-[#5F021F]" />
              <span className="h-px w-6 bg-zinc-200" />
            </div>

            <p className="mt-4 text-[9px] font-black uppercase tracking-[0.25em] text-[#5F021F]">
              Word Tabernacle Bible Church
            </p>

            <p className="mt-1 text-xs font-medium text-zinc-400">
              Articles • Reflections • The Word
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}