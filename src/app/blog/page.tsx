import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import EnquiryCard from "@/components/EnquiryCard";
import { listPublishedBlogs } from "@/lib/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blog — Bravioniyx Technologies",
  description:
    "Practical notes on custom software, websites, RDP, servers, networking, cloud, and Unity from Bravioniyx Technologies.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await listPublishedBlogs();

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Blog"
        title="Clear notes for operators — software, systems, and IT."
        text="Articles are written from the work we deliver: custom software, websites, RDP, servers, networking, cloud, and Unity. Published posts sync from the Marketing Manager."
      />
      <section className="bg-white py-16 text-neutral-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-6">
            {blogs.length === 0 ? (
              <div className="border border-neutral-200 bg-neutral-50 p-8 text-sm text-neutral-600">
                No published articles yet. Drafts are prepared in the Marketing Manager — once published there, they appear here automatically.
              </div>
            ) : (
              blogs.map((blog) => (
                <article key={blog.id} className="grid gap-0 border border-neutral-200 md:grid-cols-[220px_1fr]">
                  <Link href={`/blog/${blog.slug}`} className="block min-h-[140px] bg-neutral-950">
                    {blog.coverImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={blog.coverImageUrl} alt={blog.coverImageAlt || blog.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full min-h-[140px] items-end p-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#E10600]">{blog.serviceTitle || "Bravioniyx"}</p>
                      </div>
                    )}
                  </Link>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {blog.serviceTitle || "Insights"}
                      {blog.publishedAt
                        ? ` · ${new Date(blog.publishedAt).toLocaleDateString("en-GB", { timeZone: "Asia/Karachi" })}`
                        : ""}
                      {blog.views ? ` · ${blog.views} views` : ""}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      <Link href={`/blog/${blog.slug}`} className="hover:text-[#E10600]">
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{blog.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {blog.keywords.slice(0, 4).map((k) => (
                        <span key={k} className="border border-neutral-200 px-2 py-0.5 text-[10px] text-neutral-500">
                          {k}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-[#E10600]"
                    >
                      Read article →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
          <div className="space-y-6">
            <EnquiryCard />
            <div className="border border-neutral-200 p-5 text-sm text-neutral-600">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E10600]">Topics</p>
              <p className="mt-3 leading-relaxed">
                Software, websites, remote desktop, servers, networking, IT support, cloud/VPS, chat infrastructure, and Unity game development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
