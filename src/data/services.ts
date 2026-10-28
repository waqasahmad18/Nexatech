export type ServicePoint = {
  title: string;
  text: string;
};

export type ServiceFaq = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  body: string[];
  why: ServicePoint[];
  scale: ServicePoint[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary: "Software shaped around the way your business actually works.",
    details: [
      "Business web applications",
      "Custom management systems",
      "SaaS product development",
    ],
    body: [
      "We build business web applications for teams that have outgrown spreadsheets and generic tools. Each screen, role, and workflow is planned around your process.",
      "Custom management systems cover the records, approvals, and day-to-day operations a company needs in one place, including people and operations tools such as HRM software.",
      "SaaS product development takes an idea from a clear scope to a product customers can sign in to and use, with the structure to add features later.",
    ],
    why: [
      {
        title: "Your process stays intact",
        text: "Generic software forces the company into someone else’s workflow. A custom build follows the screens, roles, and approvals you already use.",
      },
      {
        title: "The daily work lives in one place",
        text: "Records, requests, and management tasks stop being split across sheets, chats, and separate logins.",
      },
      {
        title: "It can stay internal or become a product",
        text: "The same project can run the company, or open later as a SaaS your own customers sign in to.",
      },
    ],
    scale: [
      {
        title: "One workflow first",
        text: "Start with the process that costs the most time. The rest of the company does not have to move on day one.",
      },
      {
        title: "More people, more roles",
        text: "Add users, approvals, and reports as more of the team depends on the system.",
      },
      {
        title: "A product beyond the office",
        text: "When the internal tool is stable, the same base can open to paying customers without a rewrite from zero.",
      },
    ],
    faqs: [
      {
        q: "Do we have to replace every tool at once?",
        a: "No. We start with one workflow and extend the system once that part is in daily use.",
      },
      {
        q: "Can this become software our customers pay for?",
        a: "Yes. SaaS product development is part of this service, with sign-in and room to add features later.",
      },
      {
        q: "Is the work only remote?",
        a: "Delivery is virtual by default. If the job needs someone at your office, we come on-site as well.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Business and store websites that stay clear on every screen.",
    details: [
      "Business websites",
      "E-commerce websites",
      "Responsive website design and development",
    ],
    body: [
      "A business website explains what you do, who it is for, and how to get in touch, without burying the offer.",
      "E-commerce websites cover the catalogue, cart, and checkout path a shop needs to take an order.",
      "Responsive design and development means the same site is usable on a phone, a tablet, and a desktop, with type and spacing that stay readable.",
    ],
    why: [
      {
        title: "People check you before they enquire",
        text: "A clear site answers what you do, who it is for, and how to reach you, before a call or a message.",
      },
      {
        title: "A shop can take the order itself",
        text: "Catalogue, cart, and checkout keep the sale on the site instead of sending every buyer to a chat.",
      },
      {
        title: "One site, every screen",
        text: "The same pages stay readable on a phone, a tablet, and a desktop.",
      },
    ],
    scale: [
      {
        title: "The offer, published",
        text: "Launch the pages that explain the business and how to enquire. That is enough to start being found.",
      },
      {
        title: "Selling, when you are ready",
        text: "Add a catalogue and checkout when orders should happen on the site, not only in messages.",
      },
      {
        title: "New pages without a rebuild",
        text: "Offers, locations, and extra sections can be added later. The first launch does not have to be the final site.",
      },
    ],
    faqs: [
      {
        q: "Is this only a brochure website?",
        a: "No. Business websites and e-commerce websites are both in this service.",
      },
      {
        q: "Will it work on a phone?",
        a: "Yes. Responsive design and development is part of the build, not an extra.",
      },
      {
        q: "Can we add pages after launch?",
        a: "Yes. New pages and offers can be added without rebuilding the whole site.",
      },
    ],
  },
  {
    slug: "rdp-setup",
    title: "RDP Setup & Configuration",
    summary: "Remote desktop access that your team can actually sign in to.",
    details: [
      "Remote Desktop setup",
      "Windows RDP configuration",
      "VPS setup and remote access",
    ],
    body: [
      "Remote Desktop setup gives a person a working session on a machine they are not sitting in front of.",
      "Windows RDP configuration covers users, access, and the settings required for a stable Windows remote session.",
      "VPS setup and remote access puts that session on a virtual server so the desktop is available when the office machine is not.",
    ],
    why: [
      {
        title: "Work on a desktop you are not sitting at",
        text: "A person gets a real Windows session on a machine somewhere else, with the software that machine already has.",
      },
      {
        title: "The office PC does not have to stay on",
        text: "A VPS session stays available when the office computer is off or someone else is using it.",
      },
      {
        title: "Access is for the people who need it",
        text: "Users and settings are configured on purpose, instead of a shared login left open.",
      },
    ],
    scale: [
      {
        title: "One stable session",
        text: "Start with one user and one machine so the remote desktop is reliable before anyone depends on it.",
      },
      {
        title: "The rest of the team",
        text: "Add users as more people need the same desktop and the same installed software.",
      },
      {
        title: "Off the office machine",
        text: "Move the session onto a VPS when the office computer is the limit, so access no longer depends on that desk.",
      },
    ],
    faqs: [
      {
        q: "Is this Windows Remote Desktop?",
        a: "Yes. Windows RDP configuration is included: users, access, and the settings a stable session needs.",
      },
      {
        q: "Can the desktop run on a VPS?",
        a: "Yes. VPS setup and remote access is part of this service, so the session is not tied to an office PC.",
      },
      {
        q: "Can more than one person use it?",
        a: "Yes. We start with the access you need now and add users as the team grows.",
      },
    ],
  },
  {
    slug: "server-setup",
    title: "Server Setup & Management",
    summary: "Servers configured, deployed, and looked after after go-live.",
    details: [
      "Server configuration",
      "Deployment and maintenance",
      "Server troubleshooting",
    ],
    body: [
      "Server configuration is the base setup: the system, access, and the services the machine is meant to run.",
      "Deployment and maintenance covers putting an application or site onto the server and keeping that setup in working order.",
      "Server troubleshooting is for the moment something stops responding, a deploy fails, or a service needs to be brought back.",
    ],
    why: [
      {
        title: "The machine matches the job",
        text: "A site or application needs a server prepared for it: system, access, and the services it is meant to run.",
      },
      {
        title: "Go-live is a real step",
        text: "Deployment is what makes the work reachable. Configuration alone does not put it in front of users.",
      },
      {
        title: "Someone looks when it stops",
        text: "A failed deploy or a service that stops responding has a troubleshooting path, not a blank ticket.",
      },
    ],
    scale: [
      {
        title: "Fit today’s workload",
        text: "Configure the server for what you run now, not for a size you might need years from now.",
      },
      {
        title: "Keep the setup known",
        text: "After deployment, maintenance keeps the server in a state you can change without guessing.",
      },
      {
        title: "Room when the load grows",
        text: "Add capacity or split services when traffic, sites, or the team outgrow the first machine.",
      },
    ],
    faqs: [
      {
        q: "Do you stay after the server is live?",
        a: "Yes. Deployment and maintenance are part of the service, not only the first configuration.",
      },
      {
        q: "What if something fails after go-live?",
        a: "Server troubleshooting covers a failed deploy or a service that needs to be brought back.",
      },
      {
        q: "Can this be a VPS or a cloud machine?",
        a: "Yes. If the main job is the move or the cloud host, Cloud & VPS Solutions covers that as its own service.",
      },
    ],
  },
  {
    slug: "networking",
    title: "Networking Solutions",
    summary: "Office networks planned so people and systems stay connected.",
    details: [
      "Network setup and configuration",
      "Network troubleshooting",
      "Business IT infrastructure",
    ],
    body: [
      "Network setup and configuration covers how devices, users, and services connect inside a business.",
      "Network troubleshooting is for dropped connections, unreachable devices, and the faults that stop a team from working.",
      "Business IT infrastructure ties the network to the rest of the setup: servers, access, and the machines people rely on.",
    ],
    why: [
      {
        title: "The office only works if things connect",
        text: "People, printers, servers, and software all depend on a network that reaches them.",
      },
      {
        title: "A planned network is easier to repair",
        text: "Setup and configuration beat a pile of routers no one can explain when something drops.",
      },
      {
        title: "It ties into the rest of the IT",
        text: "The network connects to servers, access, and the machines the business already relies on.",
      },
    ],
    scale: [
      {
        title: "The office you have",
        text: "Set up and configure the network for the space and the devices in use now.",
      },
      {
        title: "Faults as you add devices",
        text: "Troubleshooting covers dropped connections and unreachable machines as the office gets busier.",
      },
      {
        title: "A larger infrastructure",
        text: "Extend the network when you add a room, a server, or another site, instead of starting over.",
      },
    ],
    faqs: [
      {
        q: "Is this only a Wi-Fi install?",
        a: "No. The service covers network setup, troubleshooting, and the wider business IT infrastructure.",
      },
      {
        q: "What if the network is already there and failing?",
        a: "Troubleshooting is part of the work: dropped connections, unreachable devices, and the faults that stop a team.",
      },
      {
        q: "Do you have to be in the office?",
        a: "Work is virtual by default. When the network has to be handled on site, we come to the office.",
      },
    ],
  },
  {
    slug: "it-support",
    title: "IT Support & Technical Assistance",
    summary: "A direct line when software or systems stop behaving.",
    details: [
      "Remote technical support",
      "Software and system troubleshooting",
      "Ongoing IT maintenance",
    ],
    body: [
      "Remote technical support handles issues without waiting for someone to be on site.",
      "Software and system troubleshooting finds the fault, whether it sits in an application, a login, or the machine underneath.",
      "Ongoing IT maintenance is the regular work that keeps a setup from drifting into the next outage.",
    ],
    why: [
      {
        title: "Most fixes do not need a visit",
        text: "Remote support handles the issue in a session, so the team is not waiting on someone to travel.",
      },
      {
        title: "The fault gets found",
        text: "It might be the application, the login, or the machine. The work is to find which one.",
      },
      {
        title: "Less drift into the next outage",
        text: "Ongoing maintenance is the regular upkeep that keeps a setup from quietly breaking.",
      },
    ],
    scale: [
      {
        title: "The tools you use now",
        text: "Start with support for the software and machines the business already depends on.",
      },
      {
        title: "Maintenance as the setup grows",
        text: "Add ongoing upkeep as you add people, machines, and systems.",
      },
      {
        title: "On-site when remote is not enough",
        text: "If a job cannot be finished from a remote session, we come to the office.",
      },
    ],
    faqs: [
      {
        q: "Do I have to be in the office for support?",
        a: "No. Remote technical support is the default. On-site is for the jobs that cannot be finished remotely.",
      },
      {
        q: "Is this a one-off fix or ongoing?",
        a: "Both. A single software or system fault, or ongoing IT maintenance as the setup grows.",
      },
      {
        q: "What kinds of problems do you take?",
        a: "Applications, logins, and the machine underneath. If the job is really the server or the network, those are their own services.",
      },
    ],
  },
  {
    slug: "chat-room-servers",
    title: "Chat Room Servers",
    summary: "Chat infrastructure set up, deployed, and kept running.",
    details: [
      "Chat room server setup and configuration",
      "Server deployment and management",
      "Chat infrastructure maintenance and troubleshooting",
    ],
    body: [
      "Chat room server setup and configuration prepares the server your rooms will run on, including access and the base configuration.",
      "Server deployment and management puts that chat stack live and keeps the deployment in a known state.",
      "Maintenance and troubleshooting covers the follow-up when a room, connection, or server needs attention after launch.",
    ],
    why: [
      {
        title: "Rooms on a server you control",
        text: "The chat runs on infrastructure set up for you, not only inside a public app you do not manage.",
      },
      {
        title: "Deployed, not left half-installed",
        text: "Setup and deployment put the chat stack live, with access and a known configuration.",
      },
      {
        title: "Someone for the day a room fails",
        text: "Maintenance and troubleshooting cover rooms, connections, and the server after people are using them.",
      },
    ],
    scale: [
      {
        title: "The rooms you need now",
        text: "Launch the server and the rooms the community or the team needs first.",
      },
      {
        title: "Capacity as people join",
        text: "Add room and server capacity as more people connect, instead of guessing the final size.",
      },
      {
        title: "A stack you can change safely",
        text: "Management keeps the deployment in a known state so a later change does not take the rooms down.",
      },
    ],
    faqs: [
      {
        q: "Do you only install the server?",
        a: "No. Setup, deployment, management, maintenance, and troubleshooting are all part of this service.",
      },
      {
        q: "Can the chat server run on a VPS?",
        a: "Yes. It can sit on a VPS or on a server we configure. Cloud and VPS work can be paired with this if the machine is the main job.",
      },
      {
        q: "What happens after people start using the rooms?",
        a: "Maintenance covers a room, a connection, or the server when something needs attention after launch.",
      },
    ],
  },
  {
    slug: "cloud-vps",
    title: "Cloud & VPS Solutions",
    summary: "Virtual servers deployed, moved, and tightened up.",
    details: [
      "VPS configuration",
      "Cloud server deployment",
      "Server migration and optimization",
    ],
    body: [
      "VPS configuration prepares a virtual private server for the workload you actually need on it.",
      "Cloud server deployment gets that machine, and the software on it, into a running environment.",
      "Server migration and optimization moves an existing setup onto a new server and trims what is wasting resources.",
    ],
    why: [
      {
        title: "A server sized for the workload",
        text: "VPS configuration prepares a virtual server for what you actually run, not a leftover machine.",
      },
      {
        title: "It is deployed, not only ordered",
        text: "Cloud deployment puts the machine and the software into a running environment.",
      },
      {
        title: "An old setup can move",
        text: "Migration takes an existing site or app onto a new server, and optimization trims what wastes resources.",
      },
    ],
    scale: [
      {
        title: "Match today’s load",
        text: "Start on a VPS that fits the sites, apps, or remote access you need now.",
      },
      {
        title: "Move when the machine is tight",
        text: "Migrate and optimize when the current server is crowded, slow, or untidy.",
      },
      {
        title: "Grow the plan with the business",
        text: "Increase capacity as more sites, apps, or users land on the same setup.",
      },
    ],
    faqs: [
      {
        q: "Is a VPS the same as a cloud server?",
        a: "A VPS is a virtual private server. Cloud server deployment is the same service when that machine lives with a cloud host.",
      },
      {
        q: "Can you move a site that is already online?",
        a: "Yes. Server migration moves an existing setup onto a new server.",
      },
      {
        q: "What does optimization mean here?",
        a: "Trimming what wastes resources so the workload you need has room, after the move or on the server you already have.",
      },
    ],
  },
  {
    slug: "game-development",
    title: "Game Development",
    summary: "Games built in Unity, from the first playable scene onward.",
    details: [
      "Unity game development",
      "Gameplay, scenes, and interface inside Unity",
      "Playable builds and follow-up fixes",
    ],
    body: [
      "Game development at Bravioniyx is Unity game development. The project is built in the Unity editor, not as a generic app with a game skin.",
      "That includes gameplay logic, scenes, characters or objects, and the interface a player uses inside the Unity project.",
      "A playable build is the handover point, with follow-up fixes for issues found when someone actually plays it.",
    ],
    why: [
      {
        title: "Built in Unity",
        text: "The game is made in the Unity editor. It is not a normal app with a game laid over the top.",
      },
      {
        title: "Play, scenes, and interface in one project",
        text: "Gameplay logic, scenes, characters or objects, and the player interface live in the same Unity project.",
      },
      {
        title: "Something people can actually play",
        text: "The handover is a playable build, then fixes for what shows up when someone plays it.",
      },
    ],
    scale: [
      {
        title: "A first playable scene",
        text: "Prove the idea in Unity before the full game is built. One scene is enough to see if it holds.",
      },
      {
        title: "More of the game",
        text: "Add levels, characters or objects, and interface as the design becomes specific.",
      },
      {
        title: "Builds as more people play",
        text: "Further Unity builds follow the issues that only appear once real players are in it.",
      },
    ],
    faqs: [
      {
        q: "Which engine do you use?",
        a: "Unity. Game development at Bravioniyx means Unity game development, built in the Unity editor.",
      },
      {
        q: "Do we get a design only, or something we can play?",
        a: "A playable build is the handover. Follow-up fixes cover what shows up when someone plays it.",
      },
      {
        q: "Can the game grow after the first build?",
        a: "Yes. More scenes, gameplay, and interface are how the Unity project grows after the first playable.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
