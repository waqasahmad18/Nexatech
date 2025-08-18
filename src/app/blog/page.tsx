import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogCategories from "@/components/blog/BlogCategories";

export const metadata = {
  title: "Blog - NexaTech | Latest Tech Insights & Industry Updates",
  description: "Stay updated with the latest technology trends, development insights, and industry news from NexaTech's expert team.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogHero />
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <BlogPosts />
            </div>
            <div className="lg:col-span-1">
              <BlogCategories />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}