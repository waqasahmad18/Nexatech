import Image from "next/image";
import Link from "next/link";

const scenes = [
  {
    title: "Software and websites",
    text: "Business web apps, management systems, SaaS products, and sites that sell.",
    href: "/services/custom-software-development",
    image: "/photos/network.webp",
    alt: "Two developers working at laptops in a bright office",
    width: 960,
    height: 640,
  },
  {
    title: "Servers, RDP, and networks",
    text: "Remote desktops, servers, cloud and VPS, networking, chat servers, and IT support.",
    href: "/services/server-setup",
    image: "/photos/servers.webp",
    alt: "Server racks with network cables in a data room",
    width: 960,
    height: 640,
  },
  {
    title: "Unity game development",
    text: "Games built in Unity, from gameplay and scenes through to a playable build.",
    href: "/services/game-development",
    image: "/photos/games.webp",
    alt: "A person at a desktop playing a game on a large monitor",
    width: 960,
    height: 640,
  },
];

export default function HomeScenes() {
  return (
    <>
      <section className="bg-white py-16 text-neutral-950">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">How we work</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Remote by default. On-site when you need us there.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            We deliver virtually. If the job needs someone at your office, we come on-site as well.
          </p>
        </div>
      </section>

      <section className="bg-neutral-100 py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E10600]">The work</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">Built around the services we actually offer.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {scenes.map((scene) => (
              <Link key={scene.href} href={scene.href} className="group bg-white">
                <Image
                  src={scene.image}
                  alt={scene.alt}
                  width={scene.width}
                  height={scene.height}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-[#E10600]">{scene.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{scene.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-400">Photos via Unsplash.</p>
        </div>
      </section>
    </>
  );
}
