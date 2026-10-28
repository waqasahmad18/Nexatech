import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AdminLogin from "@/components/AdminLogin";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

export const metadata = {
  title: "Admin sign in — Bravioniyx Technologies",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const jar = await cookies();
  if (verifySessionToken(jar.get(ADMIN_COOKIE)?.value)) redirect("/quote");

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Admin"
        title="Sign in to send a quotation."
        text="After sign-in, the quotation page opens. The client receives the service detail and the pricing in their inbox."
      />
      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-md px-6">
          <AdminLogin />
        </div>
      </section>
      <Footer />
    </>
  );
}
