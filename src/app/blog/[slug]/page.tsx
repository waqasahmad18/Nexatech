import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnquiryCard from "@/components/EnquiryCard";
import { getPublishedBlog, renderBlogParagraphs } from "@/lib/blogs";
import { brand } from "@/data/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) return { title: "Blog — Bravioniyx" };
  return {
    title: blog.metaTitle || `${blog.title} — Bravioniyx`,
    description: blog.metaDescription || blog.excerpt,
  };
}

export const dynamic = "force-dynamic";

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) notFound();
  const blocks = renderBlogParagraphs(blog.body);

  return (
    <>
      <Header />
      <main className="bg-white text-neutral-950">
        <div className="border-b border-neutral-200 bg-neutral-950 px-6 py-14 text-white">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="text-xs uppercase tracking-[0.16em] text-white/50 hover:text-white">
              ← Blog
            </Link>
            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E10600]">{blog.serviceTitle}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{blog.title}</h1>
            <p className="mt-4 text-sm text-white/55">
              {blog.author}
              {blog.publishedAt
                ? ` · ${new Date(blog.publishedAt).toLocaleDateString("en-GB", { timeZone: "Asia/Karachi" })}`
                : ""}
              {blog.views ? ` · ${blog.views} views` : ""}
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr]">
          <article>
            {blog.coverImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={blog.coverImageUrl} alt={blog.coverImageAlt || blog.title} className="mb-8 w-full border border-neutral-200 object-cover" />
            ) : null}
            {blocks.map((block, index) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight">
                    {block.replace(/^##\s+/, "")}
                  </h2>
                );
              }
              if (block.includes("\n• ") || block.startsWith("• ")) {
                const items = block.split("\n").filter((l) => l.trim().startsWith("•"));
                return (
                  <ul key={index} className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
                    {items.map((item) => (
                      <li key={item}>{item.replace(/^•\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="mt-4 whitespace-pre-wrap text-[15px] leading-relaxed text-neutral-700">
                  {block}
                </p>
              );
            })}
            <div className="mt-12 border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E10600]">Need this done?</p>
              <p className="mt-2 text-sm text-neutral-600">
                Talk to {brand.legal} about {blog.serviceTitle || "your project"}.
              </p>
              <Link
                href={blog.serviceSlug ? `/services/${blog.serviceSlug}` : "/get-a-quote"}
                className="mt-4 inline-block bg-[#E10600] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white"
              >
                {blog.serviceSlug ? "View service" : "Get a quote"}
              </Link>
            </div>
          </article>
          <div>
            <EnquiryCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
