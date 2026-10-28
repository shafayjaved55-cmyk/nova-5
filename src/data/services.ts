export type ServiceReview = {
  quote: string;
  name: string;
  role: string;
  company: string;
  result: string;
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  tagline: string;
  cardBlurb: string;
  heroImage: string;
  heroImageAlt: string;
  detailImage: string;
  detailImageAlt: string;
  overview: string[];
  deliverables: { title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  fit: string[];
  reviews: ServiceReview[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Web Development",
    icon: "code",
    tagline: "Fast, scalable websites and web apps that turn visitors into revenue.",
    cardBlurb: "Custom websites, portals and SaaS platforms built on modern stacks — engineered for speed, SEO and conversion.",
    heroImage: "/images/services/web-dev.jpg",
    heroImageAlt: "Close-up of production code on a developer's screen",
    detailImage: "/images/services/web-dev-team.jpg",
    detailImageAlt: "Two Nova Solution engineers pair-programming on a client build",
    overview: [
      "Your website is not a brochure — it's your hardest-working salesperson. We design and engineer websites and web applications that load in under a second, rank on Google, and guide every visitor toward one thing: taking action.",
      "From marketing sites and e-commerce storefronts to complex SaaS dashboards and customer portals, our team ships production-grade code with clean handover documentation, so you own everything we build.",
    ],
    deliverables: [
      { title: "Custom websites", desc: "Bespoke marketing sites with CMS, animation and pixel-perfect responsive builds." },
      { title: "Web applications", desc: "SaaS platforms, dashboards, portals and internal tools on Next.js and Node." },
      { title: "E-commerce builds", desc: "Storefronts on Shopify or headless stacks with checkout optimization built in." },
      { title: "API & integrations", desc: "Payment gateways, CRMs, ERPs and third-party APIs wired into your workflow." },
      { title: "Performance & SEO", desc: "Core Web Vitals in the green, technical SEO and analytics configured from day one." },
      { title: "Care plans", desc: "Monitoring, security patches, backups and a dedicated Slack channel after launch." },
    ],
    outcomes: [
      { value: "0.7s", label: "Average page load after rebuild" },
      { value: "+38%", label: "Median conversion-rate lift" },
      { value: "99.99%", label: "Uptime across managed sites" },
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe", "Sanity CMS"],
    fit: [
      "Your site takes more than 3 seconds to load and bounce rates show it",
      "You're rebuilding a legacy platform that breaks every time marketing touches it",
      "You need a SaaS product or customer portal shipped in weeks, not quarters",
      "Traffic is growing but the site converts like it's 2015",
    ],
    reviews: [
      {
        quote:
          "Our old site took six seconds to load and we were bleeding mobile customers. Nova rebuilt it on Next.js and conversions jumped 41% in the first quarter. Every sprint shipped on the day they promised.",
        name: "Sana Malik",
        role: "COO",
        company: "Velvet Apparel",
        result: "+41% conversion rate",
      },
      {
        quote:
          "They rebuilt both our marketing site and the app dashboard. Demo bookings went up 63% with the same ad spend. What impressed me most was how they pushed back on features that would have slowed us down.",
        name: "David Chen",
        role: "Founder & CEO",
        company: "Ledgerly",
        result: "+63% demo bookings",
      },
      {
        quote:
          "Three agencies quoted us a rebuild. Nova was the only one that showed us a performance audit before asking for money. Six months later we have 3x the qualified leads from the same traffic.",
        name: "Omar Farooq",
        role: "Marketing Director",
        company: "Meridian Properties",
        result: "3.1x qualified leads",
      },
    ],
    faqs: [
      {
        q: "How long does a typical website project take?",
        a: "A marketing site with 8–12 pages takes 4–6 weeks from kickoff to launch. Larger web apps and SaaS platforms run 10–16 weeks for a first production release. You'll get a week-by-week plan before we write a line of code.",
      },
      {
        q: "Who owns the code and design files?",
        a: "You do — completely. On final payment, you receive the full repository, design source files, and documentation. No proprietary lock-in, no hostage hosting.",
      },
      {
        q: "Can you work with our existing design or brand?",
        a: "Absolutely. We can extend your current brand system, or our design team can evolve it. About half our web projects start from an existing brand.",
      },
      {
        q: "What happens after launch?",
        a: "Every build includes 30 days of free post-launch support. After that, most clients move to a care plan — monitoring, updates, small improvements and a response-time guarantee.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    shortName: "Mobile Apps",
    icon: "smartphone",
    tagline: "Native-quality iOS and Android apps that users keep on their home screen.",
    cardBlurb: "From MVP to millions of downloads — product strategy, design and engineering for apps people love to use daily.",
    heroImage: "/images/services/mobile.jpg",
    heroImageAlt: "Hand holding a smartphone showing a fintech app interface",
    detailImage: "/images/services/mobile-2.jpg",
    detailImageAlt: "Close-up of a mobile app being tested on a smartphone",
    overview: [
      "The App Store doesn't reward average. We build mobile products with the polish of a native app and the velocity of a cross-platform stack — so you ship faster without users feeling the difference.",
      "Our mobile team has shipped apps in fintech, health, logistics and commerce with a combined two million-plus downloads. We stay involved after launch: crash monitoring, store optimization and release trains, so your rating keeps climbing.",
    ],
    deliverables: [
      { title: "iOS & Android apps", desc: "Native Swift and Kotlin, or React Native / Flutter when speed matters more." },
      { title: "MVP in 12 weeks", desc: "A focused, funded-ready first release with analytics and crash reporting baked in." },
      { title: "App store launch", desc: "Store listings, screenshots, review guidelines and ASO handled end to end." },
      { title: "Backend & sync", desc: "APIs, authentication, push notifications and offline-first data sync." },
      { title: "Payments & subscriptions", desc: "In-app purchases, wallets and billing compliant with store policies." },
      { title: "Release management", desc: "CI/CD pipelines, staged rollouts and store review management every sprint." },
    ],
    outcomes: [
      { value: "4.8★", label: "Average App Store rating" },
      { value: "2M+", label: "Downloads across shipped apps" },
      { value: "12 wks", label: "Median time to App Store" },
    ],
    stack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "GraphQL", "Fastlane", "App Store Connect"],
    fit: [
      "You have an app idea and need a technical partner who's shipped before",
      "Your current app crashes, gets 2-star reviews, and nobody owns it",
      "You need an MVP fast to validate with real users or investors",
      "You want one codebase that feels native on both platforms",
    ],
    reviews: [
      {
        quote:
          "Nova took PayNest from Figma files to a 4.8-star app with 2M downloads. Their engineers caught edge cases our own team missed — that's the level of ownership you're paying for.",
        name: "Bilal Hashmi",
        role: "Co-founder",
        company: "PayNest",
        result: "2M+ downloads, 4.8★",
      },
      {
        quote:
          "We had a dead app and 400 angry users. Within one quarter, Nova rebuilt CarePoint's patient app — support calls dropped 68% and our store rating went from 2.9 to 4.7.",
        name: "Dr. Amna Riaz",
        role: "Director of Digital",
        company: "CarePoint Health",
        result: "-68% support calls",
      },
      {
        quote:
          "Twelve weeks from contract to TestFlight. Our investors literally asked which Silicon Valley firm built it. It was a team of six in Lahore moving faster than anyone we'd met.",
        name: "James O'Brien",
        role: "CEO",
        company: "Fieldwork Logistics",
        result: "MVP in 12 weeks",
      },
    ],
    faqs: [
      {
        q: "Native or cross-platform — what do you recommend?",
        a: "For most products, React Native or Flutter gives 90% of native feel at roughly 60% of the cost, since one codebase covers both stores. We recommend true native for apps pushing hardware — heavy AR, real-time video, or Bluetooth-heavy IoT.",
      },
      {
        q: "How much does an app cost to build?",
        a: "A focused MVP typically lands between $18k–$45k depending on scope. Full-scale products with complex backend integrations run higher. We'll give you a fixed quote after a free scoping call — no hourly surprises.",
      },
      {
        q: "Do you handle app store approval?",
        a: "Yes. We prepare listings, screenshots and privacy declarations, submit to both stores, and handle reviewer back-and-forth until you're live. It's included, not an extra.",
      },
      {
        q: "Can you take over our existing app?",
        a: "We start with a two-week technical audit — code quality, crash analytics, security — then give you a stabilization roadmap. Roughly a third of our mobile work is rescues.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    shortName: "UI/UX Design",
    icon: "pen",
    tagline: "Research-driven design that makes complex products feel obvious.",
    cardBlurb: "Product design, design systems and UX research that turn confused visitors into confident customers.",
    heroImage: "/images/services/uiux.jpg",
    heroImageAlt: "Wireframe sketches and a smartphone on a designer's desk",
    detailImage: "/images/services/uiux-2.jpg",
    detailImageAlt: "Hand-drawn UX wireframes on paper at Nova's design studio",
    overview: [
      "Good design isn't decoration — it's how your product explains itself. Our design team works from user research, not opinions, mapping every screen to what your customer is actually trying to do.",
      "We deliver Figma files your developers will love: component-based design systems, real content (never lorem ipsum), and prototypes you can click before a single line of code is written.",
    ],
    deliverables: [
      { title: "UX research", desc: "User interviews, journey mapping and usability tests that kill guesswork." },
      { title: "Product design", desc: "Web and mobile flows designed end to end, from empty states to edge cases." },
      { title: "Design systems", desc: "Component libraries with tokens and docs, ready for engineering handoff." },
      { title: "Prototypes", desc: "Clickable high-fidelity prototypes for user testing and investor demos." },
      { title: "Brand & UI refresh", desc: "Modern visual identity applied consistently across every touchpoint." },
      { title: "Conversion audits", desc: "A screen-by-screen teardown of where users drop off — and how to fix it." },
    ],
    outcomes: [
      { value: "+32%", label: "Average task-success improvement" },
      { value: "120+", label: "Products designed end to end" },
      { value: "2 wks", label: "Per design sprint, tested with users" },
    ],
    stack: ["Figma", "FigJam", "Maze", "Hotjar", "Adobe CC", "Storybook", "Framer", "LottieFiles"],
    fit: [
      "Users sign up, look around, and quietly leave — you don't know why",
      "Your product has grown feature-by-feature and now feels Frankenstein",
      "Developers keep redesigning screens because there's no design system",
      "You're preparing a product for investors and it needs to look the part",
    ],
    reviews: [
      {
        quote:
          "Nova's research team interviewed twelve of our customers and found the onboarding problem in a week — something we'd argued about internally for a year. Activation is up 34% since the redesign.",
        name: "Priya Nair",
        role: "Head of Product",
        company: "Taskline",
        result: "+34% activation",
      },
      {
        quote:
          "They delivered a design system so clean that our engineers now ship screens in days, not sprints. The Figma files were the most organized I've seen in ten years of working with agencies.",
        name: "Tom Becker",
        role: "CTO",
        company: "Fleetbase",
        result: "2x faster design-to-dev handoff",
      },
      {
        quote:
          "We came for a landing page redesign and stayed for a full product overhaul. Checkout abandonment dropped 28% and support tickets about 'not finding things' basically stopped.",
        name: "Hira Qureshi",
        role: "Founder",
        company: "Studionest Interiors",
        result: "-28% checkout abandonment",
      },
    ],
    faqs: [
      {
        q: "Do you do research or just visual design?",
        a: "Both — and in that order. Every engagement starts with user interviews or data analysis, because redesigning without evidence is just guessing with better colors.",
      },
      {
        q: "Can you design in our existing brand?",
        a: "Yes. We can design strictly inside your current brand guidelines, or evolve the brand where the product needs it — you approve every direction before we go deep.",
      },
      {
        q: "What do we get at handoff?",
        a: "Organized Figma files with a component library, redlines and tokens, plus a recorded walkthrough with your developers. We also stay available during the first build sprint.",
      },
      {
        q: "How do you measure if a redesign worked?",
        a: "We define success metrics before starting — activation, task completion, conversion — then instrument analytics so you can see the before/after, not just feel it.",
      },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    icon: "trending",
    tagline: "Paid, organic and lifecycle marketing that reports revenue, not vanity metrics.",
    cardBlurb: "SEO, paid media and marketing automation managed like an investment portfolio — every dirham and rupee accounted for.",
    heroImage: "/images/services/marketing.jpg",
    heroImageAlt: "Marketer reviewing campaign analytics on a tablet",
    detailImage: "/images/services/marketing-2.jpg",
    detailImageAlt: "Nova growth team analyzing campaign dashboards together",
    overview: [
      "Most agencies report impressions. We report pipeline. Our growth team runs paid, SEO and lifecycle marketing as one system — where ads feed content, content feeds SEO, and every channel is measured to revenue.",
      "We've managed over $12M in ad spend across Google, Meta and LinkedIn, and we'll show you exactly what every campaign returned. If a channel stops performing, we say it — even when it's ours.",
    ],
    deliverables: [
      { title: "Performance marketing", desc: "Google, Meta and LinkedIn campaigns with creative testing every week." },
      { title: "SEO & content", desc: "Technical SEO, content strategy and link building that compounds month over month." },
      { title: "Lifecycle & CRM", desc: "Email, WhatsApp and automation flows that recover carts and win back churn." },
      { title: "Analytics & attribution", desc: "Server-side tracking and dashboards that show true ROAS, not last-click fiction." },
      { title: "Conversion optimization", desc: "Structured A/B testing on landing pages, pricing and checkout." },
      { title: "Monthly growth reviews", desc: "A live dashboard plus a working session — not a PDF that goes unread." },
    ],
    outcomes: [
      { value: "4.2x", label: "Average blended ROAS" },
      { value: "$12M+", label: "Ad spend managed profitably" },
      { value: "-35%", label: "Median cost-per-lead reduction" },
    ],
    stack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "HubSpot", "Klaviyo", "Ahrefs", "Looker Studio"],
    fit: [
      "You're spending on ads but can't tell what's actually working",
      "Your CPCs keep rising and your agency's answer is 'spend more'",
      "You rank on page 3 for keywords your customers search daily",
      "You have traffic but no system for turning it into pipeline",
    ],
    reviews: [
      {
        quote:
          "Our previous agency sent 40-slide decks. Nova sent a live dashboard and one page: what we spent, what we made, what changes next. ROAS went from 1.8x to 4.6x in five months.",
        name: "Ali Raza",
        role: "Founder",
        company: "Falcon Foods",
        result: "4.6x ROAS",
      },
      {
        quote:
          "They cut our LinkedIn CPL by 41% in the first quarter — then told us to shift 20% of budget into SEO, which was the honest advice, not the upsell. That's when we knew they were different.",
        name: "Rachel Torres",
        role: "VP Marketing",
        company: "Cloudledger",
        result: "-41% cost per lead",
      },
      {
        quote:
          "Organic traffic is up 3.2x in eight months and we now rank first for 'pos system karachi'. Our sales team's problem became keeping up with inbound, not finding leads.",
        name: "Faisal Mehmood",
        role: "Sales Director",
        company: "POS Point",
        result: "3.2x organic traffic",
      },
    ],
    faqs: [
      {
        q: "What's the minimum ad budget you work with?",
        a: "We typically manage from $3,000/month in media spend upward. Below that, most budgets can't generate enough data for our testing process to beat a freelancer's rates — and we'll tell you so.",
      },
      {
        q: "How fast will we see results?",
        a: "Paid media shows directional results in 2–4 weeks and stabilizes around month three as creative testing matures. SEO compounds over 4–6 months. Anyone promising page-one rankings in a month is selling you a penalty.",
      },
      {
        q: "Do you require long contracts?",
        a: "Three months minimum — that's honestly the shortest time to prove the model. After that it's month-to-month, because agencies should earn their retainer every 30 days.",
      },
      {
        q: "Who owns the ad accounts?",
        a: "You do, always. We work inside your accounts, so every audience, pixel and historical datapoint stays yours if we ever part ways.",
      },
    ],
  },
  {
    slug: "ecommerce-solutions",
    name: "E-commerce Solutions",
    shortName: "E-commerce",
    icon: "bag",
    tagline: "Storefronts engineered to sell — from first click to repeat purchase.",
    cardBlurb: "Shopify and headless commerce builds, CRO and retention systems that grow revenue per visitor, not just traffic.",
    heroImage: "/images/services/ecommerce.jpg",
    heroImageAlt: "Entrepreneur packing orders for her online store",
    detailImage: "/images/services/ecommerce-2.jpg",
    detailImageAlt: "Small business team managing online orders with laptops",
    overview: [
      "Traffic is expensive. The brands that win don't buy more visitors — they convert and retain the ones they already have. We build e-commerce experiences where the product page, checkout and post-purchase flow are all engineered to sell.",
      "As Shopify Partners, we've launched 80+ stores and rebuilt dozens more. Whether you're doing your first Rs. 1M month or scaling past $10M/year, we build the storefront and retention stack to match.",
    ],
    deliverables: [
      { title: "Shopify & Shopify Plus", desc: "Custom themes, app integrations and migrations done without losing SEO." },
      { title: "Headless storefronts", desc: "Next.js commerce for brands that need content-grade storytelling plus speed." },
      { title: "Conversion optimization", desc: "PDP and checkout testing that lifts revenue from your existing traffic." },
      { title: "Retention & subscriptions", desc: "Email/WhatsApp flows, bundles and subscriptions that grow LTV." },
      { title: "Marketplace sync", desc: "Inventory, orders and pricing synced across Daraz, Amazon and Instagram." },
      { title: "Ops dashboards", desc: "Live views of inventory, margins and fulfillment so nothing slips." },
    ],
    outcomes: [
      { value: "+52%", label: "Median revenue lift in 6 months" },
      { value: "80+", label: "Stores launched and scaled" },
      { value: "1.9s", label: "Average storefront load time" },
    ],
    stack: ["Shopify Plus", "Next.js Commerce", "Klaviyo", "Stripe", "Shippo", "Algolia", "Recharge", "GA4"],
    fit: [
      "You get traffic but cart abandonment is eating your growth",
      "Your store breaks on mobile, where 70% of your customers shop",
      "You're on a template theme and every customization is a fight",
      "Repeat purchases are flat because nothing brings customers back",
    ],
    reviews: [
      {
        quote:
          "Nova rebuilt our Shopify store and revenue per visitor went up 47% — same traffic, same products, just a store that finally works. Best money we've spent on the brand.",
        name: "Mahnoor Ali",
        role: "Founder",
        company: "Velvet Apparel",
        result: "+47% revenue per visitor",
      },
      {
        quote:
          "They migrated us from WooCommerce to headless Shopify with zero SEO loss — rankings actually improved. Page speed went from 4.1s to 1.6s and mobile conversion nearly doubled.",
        name: "Karan Kapoor",
        role: "E-commerce Manager",
        company: "TrailGear Co.",
        result: "2x mobile conversion",
      },
      {
        quote:
          "The retention flows they built now drive 31% of our monthly revenue on autopilot. WhatsApp cart recovery alone pays for their retainer three times over.",
        name: "Ayesha Khan",
        role: "Co-founder",
        company: "Glow Republic",
        result: "31% revenue from retention",
      },
    ],
    faqs: [
      {
        q: "Shopify or headless — which do I need?",
        a: "If you're under ~$5M/year and don't need heavy custom content, Shopify with a premium custom theme is the sweet spot. Headless (Next.js + Shopify) earns its keep for content-led brands and complex catalogs. We'll recommend the cheaper option when it's the right one.",
      },
      {
        q: "Can you migrate my store without losing Google rankings?",
        a: "Yes — migrations include a full URL redirect map, metadata preservation and post-launch rank monitoring. Our last three migrations saw rankings improve within 60 days.",
      },
      {
        q: "Do you also run the marketing?",
        a: "We can. Our digital marketing team plugs straight into your store — CRO, paid media and retention flows under one roof, with one dashboard.",
      },
      {
        q: "How long until launch?",
        a: "A custom Shopify store launches in 5–7 weeks. Headless builds run 8–12 weeks. Migrations depend on catalog size, but we've moved 10,000-SKU stores in under a month.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    name: "Cloud & DevOps",
    shortName: "Cloud & DevOps",
    icon: "cloud",
    tagline: "Infrastructure that scales silently and bills less than it used to.",
    cardBlurb: "Cloud architecture, CI/CD and reliability engineering on AWS — cut costs, ship faster, sleep through the night.",
    heroImage: "/images/services/cloud.jpg",
    heroImageAlt: "Engineer managing servers in a modern data center",
    detailImage: "/images/services/cloud-2.jpg",
    detailImageAlt: "Organized server racks in a production cloud environment",
    overview: [
      "Most cloud bills are 40% waste — oversized instances, forgotten environments, storage nobody audits. Our platform team architects AWS infrastructure that scales with your traffic and shrinks with your budget.",
      "We set up the pipelines, monitoring and security posture your product needs to ship daily without 2 a.m. incidents — then we hand you the runbooks, or manage it for you.",
    ],
    deliverables: [
      { title: "Cloud architecture", desc: "AWS environments designed for your traffic, reviewed against the Well-Architected Framework." },
      { title: "Cost optimization", desc: "Rightsizing, spot strategies and reserved planning — median savings of 46%." },
      { title: "CI/CD pipelines", desc: "Automated build, test and deploy so releases take minutes, not Fridays." },
      { title: "Containers & Kubernetes", desc: "ECS/EKS setups with autoscaling that survive traffic spikes and Hacker News." },
      { title: "Observability", desc: "Logs, metrics, traces and alerting wired to a real on-call process." },
      { title: "Security & compliance", desc: "Hardened IAM, encrypted data, backups and audit-ready logging." },
    ],
    outcomes: [
      { value: "-46%", label: "Median cloud-bill reduction" },
      { value: "10x", label: "Faster, safer deploy frequency" },
      { value: "99.99%", label: "Uptime across managed platforms" },
    ],
    stack: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Datadog", "Cloudflare", "PostgreSQL"],
    fit: [
      "Your AWS bill grows faster than your revenue does",
      "Deploys are manual, scary, and scheduled for 'after hours'",
      "You found out about downtime from customers, not monitoring",
      "You're preparing for due diligence or an audit and infrastructure is a mess",
    ],
    reviews: [
      {
        quote:
          "Nova cut our AWS bill by 44% in the first month — mostly by turning off things we forgot existed and rightsizing the rest. Same performance, half the invoice.",
        name: "Michael Zhang",
        role: "CTO",
        company: "Karkhana Logistics",
        result: "-44% cloud costs",
      },
      {
        quote:
          "We went from deploying every two weeks (with prayer) to shipping 20+ times a day. Their pipeline and monitoring setup is the reason our team sleeps through launch nights now.",
        name: "Sadia Aziz",
        role: "VP Engineering",
        company: "Mediqa",
        result: "10x deploy frequency",
      },
      {
        quote:
          "Black Friday used to mean war rooms. Last year we 8x'd our normal traffic and nobody even opened the dashboard — autoscaling just handled it. That's what you're paying for.",
        name: "Imran Sheikh",
        role: "Head of Platform",
        company: "Bazaar.co",
        result: "0 downtime at 8x traffic",
      },
    ],
    faqs: [
      {
        q: "Can you really cut our cloud bill?",
        a: "Median reduction across our audits is 46%, most of it found in the first two weeks: orphaned resources, over-provisioned instances and wrong storage tiers. We do the audit on a fixed fee — if we can't find savings bigger than the fee, we say so up front.",
      },
      {
        q: "Do you work only with AWS?",
        a: "AWS is our home turf, but we also run GCP and Azure environments, and we'll tell you honestly when your workload belongs on a different provider.",
      },
      {
        q: "Managed service or one-time setup?",
        a: "Both models work. Some clients take our architecture and pipelines in a one-time engagement; others keep us on a managed retainer with 24/7 monitoring and a response-time SLA.",
      },
      {
        q: "How do you handle security and access?",
        a: "Least-privilege IAM from day one, encrypted everything, and audit logging on every action. We also run quarterly access reviews — because the biggest breach risk is usually a key someone left in a Slack thread.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
