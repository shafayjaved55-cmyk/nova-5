export type CaseStudy = {
  title: string;
  client: string;
  industry: string;
  category: "Web" | "Mobile" | "Design" | "Marketing" | "E-commerce" | "Cloud";
  image: string;
  imageAlt: string;
  summary: string;
  metrics: { value: string; label: string }[];
  services: string[];
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "A fintech app that hit 2M downloads",
    client: "PayNest",
    industry: "Fintech",
    category: "Mobile",
    image: "/images/work/fintech.jpg",
    imageAlt: "PayNest mobile banking app on a smartphone",
    summary:
      "PayNest came to us with Figma files and funding. We shipped the MVP in 12 weeks, then iterated through 14 releases — building the wallet, bill payments and a referral engine that drove half a million organic installs.",
    metrics: [
      { value: "2M+", label: "Downloads in 18 months" },
      { value: "4.8★", label: "App Store rating" },
      { value: "38%", label: "Month-3 retention" },
    ],
    services: ["Mobile Apps", "UI/UX Design"],
    year: "2023",
  },
  {
    title: "Rebuilding a D2C brand's entire storefront",
    client: "Velvet Apparel",
    industry: "Fashion & Retail",
    category: "E-commerce",
    image: "/images/services/ecommerce.jpg",
    imageAlt: "Velvet Apparel orders being packed for delivery",
    summary:
      "A six-second load time was killing a beloved fashion brand. We rebuilt their Shopify store with a custom theme, cut load time to 1.4s and rebuilt the post-purchase flow — conversions rose 41% in the first quarter.",
    metrics: [
      { value: "+41%", label: "Conversion rate" },
      { value: "1.4s", label: "Load time, down from 6s" },
      { value: "+47%", label: "Revenue per visitor" },
    ],
    services: ["E-commerce", "Web Development"],
    year: "2024",
  },
  {
    title: "A SaaS site that turned traffic into pipeline",
    client: "Ledgerly",
    industry: "B2B SaaS",
    category: "Web",
    image: "/images/work/saas.jpg",
    imageAlt: "Ledgerly dashboard code on a development screen",
    summary:
      "Ledgerly had strong traffic and weak conversion. We redesigned the marketing site around one decision — book a demo — and rebuilt the product dashboard. Demo bookings rose 63% with zero additional ad spend.",
    metrics: [
      { value: "+63%", label: "Demo bookings" },
      { value: "-29%", label: "Bounce rate" },
      { value: "0.8s", label: "Largest Contentful Paint" },
    ],
    services: ["Web Development", "UI/UX Design"],
    year: "2024",
  },
  {
    title: "8x Black Friday traffic, zero downtime",
    client: "Bazaar.co",
    industry: "Marketplace",
    category: "Cloud",
    image: "/images/work/cloud.jpg",
    imageAlt: "Engineer working in a production data center",
    summary:
      "Bazaar.co's infrastructure buckled every big sale. We re-architected their AWS stack with autoscaling and observability — then watched Black Friday traffic hit 8x baseline while the on-call engineer slept.",
    metrics: [
      { value: "8x", label: "Peak traffic handled" },
      { value: "0 min", label: "Downtime on Black Friday" },
      { value: "-38%", label: "Monthly cloud cost" },
    ],
    services: ["Cloud & DevOps"],
    year: "2023",
  },
  {
    title: "Growth marketing that reports revenue, not likes",
    client: "Falcon Foods",
    industry: "FMCG",
    category: "Marketing",
    image: "/images/work/growth.jpg",
    imageAlt: "Falcon Foods growth review with campaign dashboards",
    summary:
      "Falcon Foods was spending blind. We consolidated their channels under one attribution system, rebuilt the creative engine with weekly testing, and scaled ROAS from 1.8x to 4.6x in five months.",
    metrics: [
      { value: "4.6x", label: "Blended ROAS" },
      { value: "-41%", label: "Cost per acquisition" },
      { value: "+112%", label: "Online revenue in 6 months" },
    ],
    services: ["Digital Marketing"],
    year: "2024",
  },
  {
    title: "A patient app people actually use",
    client: "CarePoint Health",
    industry: "Healthcare",
    category: "Mobile",
    image: "/images/work/health.jpg",
    imageAlt: "CarePoint patient app being used on a phone",
    summary:
      "400 angry users and a 2.9-star rating. We ran research with real patients, redesigned the booking flow, and rebuilt the app. Support calls fell 68%, and the rating now sits at 4.7.",
    metrics: [
      { value: "-68%", label: "Support calls" },
      { value: "4.7★", label: "Store rating, up from 2.9" },
      { value: "92%", label: "Booking completion rate" },
    ],
    services: ["Mobile Apps", "UI/UX Design"],
    year: "2022",
  },
];
