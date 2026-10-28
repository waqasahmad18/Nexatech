export default function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="bg-black px-6 pb-16 pt-32 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{text}</p>
      </div>
    </section>
  );
}
