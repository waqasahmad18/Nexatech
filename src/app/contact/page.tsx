import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Us - Start Your Project | NexaTech",
  description: "Ready to start your project? Contact NexaTech today for a free consultation. We specialize in web development, mobile apps, and digital transformation.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactHero />
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}