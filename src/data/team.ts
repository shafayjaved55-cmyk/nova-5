export type Member = {
  name: string;
  role: string;
  department: string;
  location: string;
  photo: string;
  bio: string;
  focus: string;
  funFact: string;
};

export const team: Member[] = [
  {
    name: "Hassan Raza",
    role: "Founder & CEO",
    department: "Leadership",
    location: "Lahore",
    photo: "/images/team/ceo.jpg",
    bio: "Started Nova in 2016 with two laptops and one rule: never ship anything you wouldn't put your own name on. Twelve years in software, still reviews every launch note personally.",
    focus: "Sets company vision, signs off major launches, and still takes the 9 a.m. scoping calls with new clients.",
    funFact: "Has never missed a Monday standup — including the day his daughter was born (he dialed in from the hospital corridor).",
  },
  {
    name: "Bilal Ahmed",
    role: "Chief Technology Officer",
    department: "Engineering",
    location: "Lahore",
    photo: "/images/team/cto.jpg",
    bio: "Former systems architect at a fintech scale-up. Bilal owns the technical bar at Nova — every architecture decision, code review standard and 'no, we're not shipping that yet' call.",
    focus: "Technical strategy, architecture reviews, and mentoring team leads across all engineering squads.",
    funFact: "Rebuilt his own home's wiring network with VLANs. His family found out when the Wi-Fi got 'suspiciously better'.",
  },
  {
    name: "Faisal Khan",
    role: "Chief Operating Officer",
    department: "Leadership",
    location: "Dubai",
    photo: "/images/team/coo.jpg",
    bio: "The reason 320+ projects shipped on time. Faisal runs delivery like an airline: checklists, margins for error, and no drama. Clients know him as the calmest person on any call.",
    focus: "Delivery operations, resourcing across squads, and client partnerships in the GCC.",
    funFact: "Keeps a 'yacht notebook' of every delivery mistake since 2016. None has repeated twice.",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Design Director",
    department: "Design",
    location: "Lahore",
    photo: "/images/team/design-director.jpg",
    bio: "Ayesha leads the studio that turns research into interfaces people describe as 'obvious'. Ex-agency creative lead with 9 years across product, brand and motion design.",
    focus: "Design direction on every account, design system standards, and the weekly critique that makes good work better.",
    funFact: "Can identify a typeface from a screenshot in under 10 seconds. Party trick, occupational hazard — same thing.",
  },
  {
    name: "Usman Tariq",
    role: "Engineering Manager",
    department: "Engineering",
    location: "Lahore",
    photo: "/images/team/engineering-manager.jpg",
    bio: "Full-stack engineer turned manager who still ships code weekly. Usman runs the web platform squad and is the person clients ask for by name on the second project.",
    focus: "Leading the web squad, sprint planning, and keeping the 'definition of done' honestly defined.",
    funFact: "Contributed to an open-source library you've probably used. Won't say which one unless you buy him chai.",
  },
  {
    name: "Mariam Aslam",
    role: "Head of Growth Marketing",
    department: "Growth",
    location: "Dubai",
    photo: "/images/team/growth-lead.jpg",
    bio: "Mariam has managed over $8M in paid media across three markets and treats every dirham like her own. Her dashboards are famous with clients and feared by underperforming channels.",
    focus: "Paid strategy, growth modeling, and the monthly revenue review every client actually attends.",
    funFact: "Once reduced a client's cost-per-lead by 61% by simply turning off the campaigns the old agency 'forgot' to check.",
  },
  {
    name: "Zara Sheikh",
    role: "Senior Product Manager",
    department: "Product",
    location: "Lahore",
    photo: "/images/team/product-manager.jpg",
    bio: "Zara turns messy requirements into roadmaps that survive contact with reality. She's shipped products in fintech, health and logistics — and writes the clearest specs in the building.",
    focus: "Discovery workshops, roadmap prioritization, and being the single point of truth for scope.",
    funFact: "Has a personal rule: no feature enters a sprint without a named user who asked for it.",
  },
  {
    name: "Ahmed Hassan",
    role: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote — Islamabad",
    photo: "/images/team/senior-engineer.jpg",
    bio: "The engineer other engineers go to when the bug 'makes no sense'. Ahmed works across our SaaS builds and has a habit of fixing root causes, not symptoms.",
    focus: "SaaS platform builds, API architecture, and performance work that shows up in Core Web Vitals.",
    funFact: "Solves Advent of Code every December in a language he doesn't know yet. Currently: Rust.",
  },
  {
    name: "Fatima Noor",
    role: "UX Research Lead",
    department: "Design",
    location: "Lahore",
    photo: "/images/team/ux-lead.jpg",
    bio: "Fatima has interviewed hundreds of users across Pakistan, the Gulf and the UK. She's the reason Nova's designs start with evidence — and the one who says 'the data disagrees' in reviews.",
    focus: "User interviews, usability testing, and turning research clips into decisions the whole team can act on.",
    funFact: "Keeps a wall of anonymous user quotes. 'I just want it to work' is framed above her desk.",
  },
  {
    name: "Daniyal Sheikh",
    role: "Mobile Engineering Lead",
    department: "Engineering",
    location: "Lahore",
    photo: "/images/team/mobile-lead.jpg",
    bio: "Daniyal has shipped apps with a combined 2M+ downloads and a 4.8-star average. He treats crash-free sessions as a personal metric and store reviews as user research.",
    focus: "Mobile architecture across Swift, Kotlin and React Native, plus release trains every client can set a watch by.",
    funFact: "Downloads his own apps' competitors monthly and annotates their UX issues in a shared team doc.",
  },
  {
    name: "Hina Tariq",
    role: "People & Culture Lead",
    department: "Operations",
    location: "Lahore",
    photo: "/images/team/people-ops.jpg",
    bio: "Hina joined when Nova was nine people and has hired every teammate since. She built the review cycles, the learning budget and the 'no heroes, just systems' delivery culture.",
    focus: "Hiring, onboarding, growth reviews, and keeping the culture honest as the team scales past fifty.",
    funFact: "Rejects about 90% of applicants — and sends personal feedback to every single one.",
  },
];

export const openPositions = [
  { title: "Senior React Engineer", team: "Engineering", type: "Full-time · Lahore / Remote", blurb: "Own client-facing web platforms end to end — from architecture reviews to production deploys." },
  { title: "Product Designer (UI/UX)", team: "Design", type: "Full-time · Lahore", blurb: "Run design sprints for fintech and commerce clients with our research team beside you." },
  { title: "Performance Marketing Specialist", team: "Growth", type: "Full-time · Dubai / Remote", blurb: "Manage six-figure ad budgets with full creative support and a testing lab behind you." },
  { title: "DevOps Engineer (AWS)", team: "Platform", type: "Full-time · Remote (PK)", blurb: "Build the pipelines and infrastructure our product teams ship on every day." },
];
