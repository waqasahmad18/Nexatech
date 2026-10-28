import Link from "next/link";

export default function About() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="bx-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">About</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Build your digital future with Bravioniyx.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            We design, develop, and support technology that helps a business run, from custom software and websites to servers, networks, and Unity game development.
          </p>
          <Link href="/about" className="mt-8 inline-flex bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-[#E10600] hover:text-white">
            About the company
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["Ideas", "A clear scope before any build starts."],
            ["Solutions", "Software, websites, servers, and support."],
            ["Growth", "Systems a business can keep using."],
          ].map(([title, text]) => (
            <div key={title} className="border border-white/10 p-6">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
