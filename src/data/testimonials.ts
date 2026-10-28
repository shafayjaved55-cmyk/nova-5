export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We interviewed five agencies. Nova was the only one that asked about our P&L before our color palette. Eleven months in, the site they built has paid for itself four times over.",
    name: "Sana Malik",
    role: "COO",
    company: "Velvet Apparel",
    service: "Web Development",
  },
  {
    quote:
      "Our app went from a 2.9-star graveyard to 4.7 stars. Nova didn't just fix bugs — they rebuilt the onboarding so well that support tickets dropped 68%.",
    name: "Dr. Amna Riaz",
    role: "Director of Digital",
    company: "CarePoint Health",
    service: "Mobile Apps",
  },
  {
    quote:
      "Every agency promises 'partnership'. Nova actually behaves like one — they told us to delay a feature because the data said our checkout mattered more. Who does that?",
    name: "David Chen",
    role: "Founder & CEO",
    company: "Ledgerly",
    service: "Web Development",
  },
  {
    quote:
      "ROAS from 1.8x to 4.6x in five months. No magic — just weekly creative testing and a team that reads the data daily instead of monthly.",
    name: "Ali Raza",
    role: "Founder",
    company: "Falcon Foods",
    service: "Digital Marketing",
  },
  {
    quote:
      "The design system Nova delivered is the cleanest I've seen in ten years. Our engineers ship screens in days now, not sprints.",
    name: "Tom Becker",
    role: "CTO",
    company: "Fleetbase",
    service: "UI/UX Design",
  },
  {
    quote:
      "They migrated our entire store with zero SEO loss — rankings actually went up. Mobile conversion nearly doubled after the rebuild.",
    name: "Karan Kapoor",
    role: "E-commerce Manager",
    company: "TrailGear Co.",
    service: "E-commerce",
  },
  {
    quote:
      "Nova cut our AWS bill by 44% in month one, mostly by deleting things we forgot existed. Same performance, half the invoice.",
    name: "Michael Zhang",
    role: "CTO",
    company: "Karkhana Logistics",
    service: "Cloud & DevOps",
  },
  {
    quote:
      "Twelve weeks from contract to TestFlight. Our investors asked which Silicon Valley firm built it. A team of six in Lahore — moving faster than anyone we'd met.",
    name: "James O'Brien",
    role: "CEO",
    company: "Fieldwork Logistics",
    service: "Mobile Apps",
  },
  {
    quote:
      "The retention flows Nova built now drive 31% of our monthly revenue on autopilot. The WhatsApp cart recovery alone pays their retainer three times over.",
    name: "Ayesha Khan",
    role: "Co-founder",
    company: "Glow Republic",
    service: "E-commerce",
  },
  {
    quote:
      "They told us to shift budget away from their own paid campaigns into SEO. That's when we knew they optimize for our revenue, not their invoice.",
    name: "Rachel Torres",
    role: "VP Marketing",
    company: "Cloudledger",
    service: "Digital Marketing",
  },
];

export const clientLogos = [
  "Velvet Apparel",
  "PayNest",
  "Ledgerly",
  "Meridian Properties",
  "CarePoint Health",
  "Falcon Foods",
  "Karkhana Logistics",
  "TrailGear Co.",
  "Bazaar.co",
  "Glow Republic",
];
