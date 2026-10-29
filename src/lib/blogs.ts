import { getDb } from "@/lib/db";

export const BLOGS = "bx_blogs";

export type PublicBlog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImageUrl: string;
  coverImageAlt: string;
  serviceSlug: string;
  serviceTitle: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  publishedAt?: string;
  author: string;
  views: number;
};

function mapBlog(doc: Record<string, unknown>): PublicBlog {
  return {
    id: String(doc._id),
    slug: String(doc.slug ?? ""),
    title: String(doc.title ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    body: String(doc.body ?? ""),
    coverImageUrl: String(doc.coverImageUrl ?? ""),
    coverImageAlt: String(doc.coverImageAlt ?? ""),
    serviceSlug: String(doc.serviceSlug ?? ""),
    serviceTitle: String(doc.serviceTitle ?? ""),
    keywords: Array.isArray(doc.keywords) ? doc.keywords.map(String) : [],
    metaTitle: String(doc.metaTitle ?? doc.title ?? ""),
    metaDescription: String(doc.metaDescription ?? doc.excerpt ?? ""),
    publishedAt: doc.publishedAt ? String(doc.publishedAt) : undefined,
    author: String(doc.author ?? "Bravioniyx Technologies"),
    views: Number(doc.views ?? 0),
  };
}

export async function listPublishedBlogs(limit = 40): Promise<PublicBlog[]> {
  const db = await getDb();
  if (!db) return [];
  const docs = await db
    .collection(BLOGS)
    .find({ status: "published" })
    .sort({ publishedAt: -1, updatedAt: -1 })
    .limit(limit)
    .toArray();
  return docs.map((d) => mapBlog(d as Record<string, unknown>));
}

export async function getPublishedBlog(slug: string): Promise<PublicBlog | null> {
  const db = await getDb();
  if (!db) return null;
  const doc = await db.collection(BLOGS).findOne({ slug, status: "published" });
  return doc ? mapBlog(doc as Record<string, unknown>) : null;
}

export function renderBlogParagraphs(body: string) {
  return body
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);
}
