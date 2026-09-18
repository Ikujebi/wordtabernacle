import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string | null;
  coverImage: string | null;
  publishedAt: string | null;
  author: { fullName: string } | null;
}

interface BlogCardProps {
  post: BlogPostSummary;
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

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div>
        {/* Cover Image */}
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/9] w-full overflow-hidden bg-slate-100"
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-100/80 text-slate-300">
              <BookOpen className="h-10 w-10" />
            </div>
          )}
        </Link>

        {/* Content Section */}
        <div className="space-y-3 p-5">
          <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3 text-[#5F021F]" />
              {formatDate(post.publishedAt)}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3 text-slate-400" />
              {getReadTime(post)}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#5F021F]">
              {post.title}
            </h3>
          </Link>

          {post.excerpt && (
            <p className="line-clamp-2 text-xs leading-relaxed text-slate-500">
              {post.excerpt}
            </p>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="mt-2 flex items-center justify-between border-t border-slate-100/60 p-5 pt-3 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5F021F]/10 text-[10px] font-bold text-[#5F021F]">
            {post.author?.fullName ? post.author.fullName.charAt(0) : "W"}
          </div>
          <span className="max-w-[120px] truncate text-xs font-semibold text-slate-600">
            {post.author?.fullName ?? "Word Tabernacle"}
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 font-bold text-[#5F021F] transition-transform group-hover:translate-x-1"
        >
          Read <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;