import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PromoList from "@/components/PromoList";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { listPromoEmails } from "@/lib/promoList";

export const metadata = {
  title: "Saved emails — Bravioniyx Technologies",
  robots: { index: false, follow: false },
};

export default async function SavedEmailsPage() {
  const jar = await cookies();
  if (!verifySessionToken(jar.get(ADMIN_COOKIE)?.value)) redirect("/admin");

  const entries = await listPromoEmails();

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Saved emails"
        title="Query emails kept for later."
        text="Every website form that includes an email is stored here, so promotional mail can go out from this list."
      />
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <PromoList entries={entries} />
        </div>
      </section>
      <Footer />
    </>
  );
}
