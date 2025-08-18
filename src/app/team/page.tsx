import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import TeamGrid from "@/components/team/TeamGrid";
import TeamCulture from "@/components/team/TeamCulture";

export const metadata = {
  title: "Our Team - Meet NexaTech Experts | Software Development Team Pakistan",
  description: "Meet the talented team behind NexaTech's success. Our expert developers, designers, and project managers are passionate about creating innovative solutions.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <TeamHero />
      <TeamGrid />
      <TeamCulture />
      <Footer />
    </>
  );
}