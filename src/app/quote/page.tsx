import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import QuoteDesk from "@/components/QuoteDesk";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

export const metadata = {
  title: "Send quotation — Bravioniyx Technologies",
  robots: { index: false, follow: false },
};

export default async function QuotePage() {
  const jar = await cookies();
  if (!verifySessionToken(jar.get(ADMIN_COOKIE)?.value)) redirect("/admin");

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Send quotation"
        title="Price the work, then email the client."
        text="Add a short note about the service and the prices. The client receives a branded quotation in their inbox, and a copy stays in the company inbox."
      />
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <QuoteDesk />
        </div>
      </section>
      <Footer />
    </>
  );
}
