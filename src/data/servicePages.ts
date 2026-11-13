export type ServicePageExtras = {
  badge: string;
  headline: string;
  headlineAccent: string;
  stripEyebrow: string;
  stripTitle: string;
  stripText: string;
  pillarsEyebrow: string;
  pillarsTitle: string;
  pillars: { title: string; text: string }[];
  processEyebrow: string;
  processTitle: string;
  process: { title: string; text: string }[];
  briefLead: string;
  heroImage: string;
  stripImage: string;
  heroAlt: string;
  stripAlt: string;
};

export const servicePages: Record<string, ServicePageExtras> = {
  "custom-software-development": {
    badge: "Software",
    headline: "Custom",
    headlineAccent: "Software",
    stripEyebrow: "Built around the work",
    stripTitle: "Apps and systems that match how your team already operates",
    stripText:
      "Screens, roles, and workflows planned for your process — not a generic tool forced onto the company.",
    pillarsEyebrow: "Why custom",
    pillarsTitle: "What a bespoke build actually changes",
    pillars: [
      {
        title: "Your process stays intact",
        text: "Approvals, roles, and records follow the way you already work.",
      },
      {
        title: "One place for daily work",
        text: "Less hopping between sheets, chats, and separate logins.",
      },
      {
        title: "Internal today, product later",
        text: "The same base can open as SaaS when you are ready.",
      },
      {
        title: "Room to extend",
        text: "Add modules when a new workflow earns its place — not a rewrite.",
      },
    ],
    processEyebrow: "Delivery loop",
    processTitle: "How custom software gets into daily use",
    process: [
      {
        title: "Map the real workflow",
        text: "We start with the process that costs the most time, not a feature wishlist.",
      },
      {
        title: "Ship a usable core",
        text: "First screens go live so the team can work, then we extend.",
      },
      {
        title: "Harden and grow",
        text: "Roles, reports, and modules land once the core is trusted.",
      },
    ],
    briefLead:
      "Share the workflow, who uses it, and whether it stays internal or becomes a product.",
    heroImage: "/services/shared/software.webp",
    stripImage: "/services/shared/website.webp",
    heroAlt: "Custom software development workspace",
    stripAlt: "Business application screens on a monitor",
  },
  "website-development": {
    badge: "Websites",
    headline: "Website",
    headlineAccent: "Development",
    stripEyebrow: "Clear on every screen",
    stripTitle: "Sites that explain the offer and take the next step",
    stripText:
      "Business sites and shops built to stay readable on phone, tablet, and desktop.",
    pillarsEyebrow: "Why a proper site",
    pillarsTitle: "What a strong website does for the business",
    pillars: [
      {
        title: "People check before they enquire",
        text: "A clear site answers what you do and how to reach you.",
      },
      {
        title: "A shop can take the order",
        text: "Catalogue, cart, and checkout keep the sale on the site.",
      },
      {
        title: "One site, every screen",
        text: "Type and spacing stay usable on phone and desktop.",
      },
      {
        title: "Pages that can grow",
        text: "New offers and sections without rebuilding from zero.",
      },
    ],
    processEyebrow: "Build loop",
    processTitle: "From offer to a live site",
    process: [
      {
        title: "Lock the message",
        text: "What you do, who it is for, and the action you want.",
      },
      {
        title: "Design and build",
        text: "Pages structured for clarity, then made responsive.",
      },
      {
        title: "Launch and extend",
        text: "Go live, then add shop pages or sections when ready.",
      },
    ],
    briefLead: "Share whether you need a business site, a shop, or both — and the pages that matter first.",
    heroImage: "/services/shared/website.webp",
    stripImage: "/services/shared/software.webp",
    heroAlt: "Business website on a large display",
    stripAlt: "Web design and development workspace",
  },
  "rdp-setup": {
    badge: "RDP",
    headline: "Remote",
    headlineAccent: "Desktop",
    stripEyebrow: "Work from anywhere",
    stripTitle: "A real Windows session on a machine you are not sitting at",
    stripText:
      "Users, access, and VPS options configured so remote desktop is stable — not a shared login left open.",
    pillarsEyebrow: "Why RDP",
    pillarsTitle: "What remote desktop unlocks for the team",
    pillars: [
      {
        title: "The desk travels with you",
        text: "Software already on the machine stays available remotely.",
      },
      {
        title: "Office PC does not have to stay on",
        text: "A VPS session stays up when the office computer is off.",
      },
      {
        title: "Access on purpose",
        text: "Users and settings configured for the people who need them.",
      },
      {
        title: "Add seats as you grow",
        text: "Start with one stable session, then extend to the team.",
      },
    ],
    processEyebrow: "Setup loop",
    processTitle: "From one session to a team that can sign in",
    process: [
      {
        title: "One reliable session",
        text: "Configure access and prove the remote desktop works.",
      },
      {
        title: "Lock users and policy",
        text: "Named access instead of a shared password.",
      },
      {
        title: "Move to VPS if needed",
        text: "Detach from the office PC when that machine is the limit.",
      },
    ],
    briefLead: "Tell us how many users, Windows or VPS, and what software the remote desktop must run.",
    heroImage: "/services/shared/rdp.webp",
    stripImage: "/services/shared/servers.webp",
    heroAlt: "Remote desktop session on a laptop",
    stripAlt: "Servers used for remote access",
  },
  "server-setup": {
    badge: "Servers",
    headline: "Server",
    headlineAccent: "Setup",
    stripEyebrow: "Configured and looked after",
    stripTitle: "Machines prepared for the workload, then kept reachable",
    stripText:
      "Configuration, deployment, and troubleshooting so go-live is a real step — not a half-finished host.",
    pillarsEyebrow: "Why managed setup",
    pillarsTitle: "What proper server work protects",
    pillars: [
      {
        title: "The machine matches the job",
        text: "System, access, and services set for what you actually run.",
      },
      {
        title: "Go-live is intentional",
        text: "Deployment puts the work in front of users.",
      },
      {
        title: "Someone when it stops",
        text: "Troubleshooting for failed deploys and silent services.",
      },
      {
        title: "A setup you can change",
        text: "Maintenance keeps the server in a known, editable state.",
      },
    ],
    processEyebrow: "Ops loop",
    processTitle: "From bare host to a server you can trust",
    process: [
      {
        title: "Base configuration",
        text: "System, access, and the services the machine is meant to run.",
      },
      {
        title: "Deploy the workload",
        text: "Site or app lands on the server and is verified.",
      },
      {
        title: "Maintain and repair",
        text: "Upkeep plus a path when something stops responding.",
      },
    ],
    briefLead: "Share what runs on the server, where it is hosted, and whether you need ongoing maintenance.",
    heroImage: "/services/shared/servers.webp",
    stripImage: "/services/shared/network.webp",
    heroAlt: "Server racks in a data room",
    stripAlt: "Network infrastructure connected to servers",
  },
  networking: {
    badge: "Networking",
    headline: "Network",
    headlineAccent: "Solutions",
    stripEyebrow: "Connected on purpose",
    stripTitle: "Office networks planned so people and systems stay reachable",
    stripText:
      "Setup, troubleshooting, and infrastructure that ties printers, servers, and users together.",
    pillarsEyebrow: "Why plan the network",
    pillarsTitle: "What a clear network saves you from",
    pillars: [
      {
        title: "The office only works if it connects",
        text: "People, printers, and servers depend on a network that reaches them.",
      },
      {
        title: "Easier to repair when planned",
        text: "Documented setup beats a pile of routers no one can explain.",
      },
      {
        title: "Tied to the rest of IT",
        text: "Access and machines stay aligned with the network design.",
      },
      {
        title: "Room to extend",
        text: "Add a room, server, or site without starting over.",
      },
    ],
    processEyebrow: "Network loop",
    processTitle: "From first layout to a network that holds",
    process: [
      {
        title: "Map devices and spaces",
        text: "Know what must connect before cables and configs land.",
      },
      {
        title: "Configure and verify",
        text: "Setup that matches the office you have today.",
      },
      {
        title: "Troubleshoot and grow",
        text: "Fix drops and extend when you add people or rooms.",
      },
    ],
    briefLead: "Describe the office size, devices, and whether this is a new setup or a failing network.",
    heroImage: "/services/shared/network.webp",
    stripImage: "/services/shared/servers.webp",
    heroAlt: "Business network and cabling environment",
    stripAlt: "Servers connected through the office network",
  },
  "it-support": {
    badge: "Support",
    headline: "IT",
    headlineAccent: "Support",
    stripEyebrow: "A direct line",
    stripTitle: "Help when software or systems stop behaving",
    stripText:
      "Remote support, troubleshooting, and ongoing maintenance so the team is not waiting on a visit.",
    pillarsEyebrow: "Why retain support",
    pillarsTitle: "What a support line changes day to day",
    pillars: [
      {
        title: "Most fixes do not need a visit",
        text: "Remote sessions clear issues without travel delay.",
      },
      {
        title: "The fault gets found",
        text: "Application, login, or machine — we isolate which.",
      },
      {
        title: "Less drift into outages",
        text: "Ongoing upkeep keeps setups from quietly breaking.",
      },
      {
        title: "On-site when remote is not enough",
        text: "We come to the office for jobs that cannot finish remotely.",
      },
    ],
    processEyebrow: "Support loop",
    processTitle: "From ticket to a working system again",
    process: [
      {
        title: "Catch the issue",
        text: "Remote session or report — start with what broke.",
      },
      {
        title: "Find and fix",
        text: "Isolate the fault and restore the workflow.",
      },
      {
        title: "Prevent the next one",
        text: "Maintenance steps so the same failure does not return.",
      },
    ],
    briefLead: "Tell us the tools you use, how urgent it is, and whether you need one-off help or ongoing cover.",
    heroImage: "/services/shared/support.webp",
    stripImage: "/services/shared/rdp.webp",
    heroAlt: "IT support desk with headset",
    stripAlt: "Remote support session on a laptop",
  },
  "chat-room-servers": {
    badge: "Chat",
    headline: "Chat Room",
    headlineAccent: "Servers",
    stripEyebrow: "Rooms you control",
    stripTitle: "Chat infrastructure set up, deployed, and kept running",
    stripText:
      "Server setup, deployment, and maintenance for communities and teams that need rooms on their own stack.",
    pillarsEyebrow: "Why your own chat stack",
    pillarsTitle: "What dedicated chat servers give you",
    pillars: [
      {
        title: "Rooms on infrastructure you own",
        text: "Not only inside a public app you do not manage.",
      },
      {
        title: "Deployed, not half-installed",
        text: "Access and configuration in a known live state.",
      },
      {
        title: "Someone when a room fails",
        text: "Maintenance for connections and the server after launch.",
      },
      {
        title: "Capacity as people join",
        text: "Grow rooms and resources with the community.",
      },
    ],
    processEyebrow: "Chat loop",
    processTitle: "From empty host to active rooms",
    process: [
      {
        title: "Prepare the server",
        text: "Base setup and access for the chat stack.",
      },
      {
        title: "Deploy the rooms",
        text: "Go live with the spaces the team or community needs.",
      },
      {
        title: "Maintain under load",
        text: "Fix rooms and scale when more people connect.",
      },
    ],
    briefLead: "Share expected users, room types, and whether the chat sits on a VPS or dedicated host.",
    heroImage: "/services/shared/servers.webp",
    stripImage: "/services/shared/network.webp",
    heroAlt: "Server infrastructure for chat rooms",
    stripAlt: "Network paths serving chat traffic",
  },
  "cloud-vps": {
    badge: "Cloud",
    headline: "Cloud",
    headlineAccent: "& VPS",
    stripEyebrow: "Virtual servers that fit",
    stripTitle: "VPS configured, cloud deployed, migrations tightened up",
    stripText:
      "Sized for the workload you run now — then moved and optimized when the current machine is tight.",
    pillarsEyebrow: "Why cloud / VPS",
    pillarsTitle: "What a well-run virtual server unlocks",
    pillars: [
      {
        title: "Sized for the workload",
        text: "Configuration for what you actually run, not leftovers.",
      },
      {
        title: "Deployed, not only ordered",
        text: "Machine and software land in a running environment.",
      },
      {
        title: "Old setups can move",
        text: "Migration onto a new host without starting from zero.",
      },
      {
        title: "Trim waste, keep headroom",
        text: "Optimization so the work you need has room.",
      },
    ],
    processEyebrow: "Cloud loop",
    processTitle: "From first VPS to a host that can grow",
    process: [
      {
        title: "Match today’s load",
        text: "Pick and configure a VPS for current sites or apps.",
      },
      {
        title: "Deploy cleanly",
        text: "Get the machine and software into a verified state.",
      },
      {
        title: "Migrate and optimize",
        text: "Move crowded setups and trim what wastes resources.",
      },
    ],
    briefLead: "Share what will run on the VPS, current host if any, and whether this is a new deploy or a migration.",
    heroImage: "/services/shared/servers.webp",
    stripImage: "/services/shared/rdp.webp",
    heroAlt: "Cloud and VPS server environment",
    stripAlt: "Remote access into a virtual server",
  },
  voip: {
    badge: "VoIP",
    headline: "VoIP",
    headlineAccent: "Services",
    stripEyebrow: "Voice over IP",
    stripTitle: "Numbers, trunks, and queues on a system you control",
    stripText:
      "SIP, softphones, extensions, and call routing — business voice that travels with the team.",
    pillarsEyebrow: "Why VoIP",
    pillarsTitle: "What internet voice changes for the desk",
    pillars: [
      {
        title: "Calls travel with the team",
        text: "Answer from office, home, or laptop — same number.",
      },
      {
        title: "One system for numbers and queues",
        text: "Extensions, menus, and trunks in one place.",
      },
      {
        title: "Built to add seats",
        text: "More extensions without ripping out the phone setup.",
      },
      {
        title: "Routing that makes sense",
        text: "IVR and queues send callers to the right person.",
      },
    ],
    processEyebrow: "Voice loop",
    processTitle: "From first working line to a full voice stack",
    process: [
      {
        title: "Trunks and numbers",
        text: "Get SIP and the lines you need answering today.",
      },
      {
        title: "Extensions and softphones",
        text: "Give each person a seat they can actually use.",
      },
      {
        title: "Queues and IVR",
        text: "Add menus and routing as callers and roles grow.",
      },
    ],
    briefLead:
      "Share seats, numbers, and whether you need softphones, IVR, or a full SIP and PBX stack.",
    heroImage: "/services/voip/hero.webp",
    stripImage: "/services/voip/network.webp",
    heroAlt: "VoIP softphone workstation with headset",
    stripAlt: "Servers supporting VoIP call infrastructure",
  },
};

export function getServicePage(slug: string) {
  return servicePages[slug];
}
