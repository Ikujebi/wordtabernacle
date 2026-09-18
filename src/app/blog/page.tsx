import type { Metadata } from "next";
import { API_URL } from "@/lib/api";
import BlogClientView from "./BlogClientView";
import type { BlogPostSummary } from "../components/BlogCard";

export const metadata: Metadata = {
  title: "Blog & Reflections | Word Tabernacle Bible Church",
  description:
    "Inspiring articles, spiritual reflections, and updates from the Word Tabernacle Bible Church family.",
};

const BASE_ENDPOINT = API_URL.endsWith("/api") ? API_URL : `${API_URL}/api`;

async function getPosts(): Promise<BlogPostSummary[]> {
  try {
    const res = await fetch(
      `${BASE_ENDPOINT}/blog-posts?isPublished=true&limit=50`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return [];

    const json = await res.json();
    const unwrapped = json?.data?.data ?? json?.data ?? json;
    return Array.isArray(unwrapped) ? unwrapped : [];
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return <BlogClientView initialPosts={posts} />;
}