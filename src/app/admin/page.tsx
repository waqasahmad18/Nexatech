import { cookies } from "next/headers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";
import { listPromoEmails } from "@/lib/promoList";

export const metadata = {
  title: "Admin — Bravioniyx Technologies",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const jar = await cookies();
  const signedIn = verifySessionToken(jar.get(ADMIN_COOKIE)?.value);
  const entries = signedIn ? await listPromoEmails() : [];

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Admin"
        title={signedIn ? "Dashboard" : "Sign in"}
        text={
          signedIn
            ? "Emails from the website forms are saved here. Pick one and send that client a quotation."
            : "This address is not linked on the site. Sign in to open the dashboard."
        }
      />
      <section className="bg-neutral-100 py-16">
        {signedIn ? <AdminDashboard entries={entries} /> : (
          <div className="mx-auto max-w-md px-6">
            <AdminLogin />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}
