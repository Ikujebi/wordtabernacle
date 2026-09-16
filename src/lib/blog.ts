import { apiGet } from "./api";

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

export interface BlogPostDetail extends BlogPostSummary {
  content: string;
}

interface PaginatedResponse<T> {
  data: T[];
  meta: { total: number; page: number; limit: number; totalPages: number };
}

export async function getPosts(): Promise<BlogPostSummary[]> {
  const result = await apiGet<PaginatedResponse<BlogPostSummary>>(
    "/blog-posts?isPublished=true&limit=50"
  );
  return Array.isArray(result?.data) ? result.data : [];
}

export async function getPost(slug: string): Promise<BlogPostDetail | null> {
  const post = await apiGet<BlogPostDetail>(`/blog-posts/slug/${slug}`);
  return post?.id ? post : null;
}