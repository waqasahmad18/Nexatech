import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeScenes from "@/components/HomeScenes";
import Services from "@/components/Services";
import About from "@/components/About";
import EnquiryCard from "@/components/EnquiryCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeScenes />
      <Services />
      <About />
      <section className="bg-neutral-100 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Tell us the project.</h2>
            <p className="mt-4 text-neutral-600">
              Pick a service and describe the work. The same form sits on every service page.
            </p>
          </div>
          <EnquiryCard />
        </div>
      </section>
      <Footer />
    </>
  );
}
