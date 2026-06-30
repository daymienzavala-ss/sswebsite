export const site = {
  name: "StangScales",
  tagline: "Scale Your Business Digitally",
  email: "daymien.zavala@stangscales.net",
  domain: "stangscales.net",
  description:
    "Results-driven digital marketing. We design, build, and grow websites that turn traffic into revenue.",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  title: string;
  blurb: string;
  points: string[];
  icon: "browser" | "shield" | "target" | "search" | "spark" | "chart";
};

export const services: Service[] = [
  {
    title: "Web Design & Development",
    blurb:
      "Custom, conversion-focused websites built to load fast, rank well, and look like the brand you want to be.",
    points: ["Bespoke design", "Mobile-first builds", "Performance-optimized", "Built to convert"],
    icon: "browser",
  },
  {
    title: "Digital Advertising",
    blurb:
      "Data-driven paid campaigns across Google and social, engineered to maximize return on every dollar you spend.",
    points: ["Google & Meta ads", "Audience targeting", "A/B testing", "ROI reporting"],
    icon: "target",
  },
  {
    title: "Maintenance & Security",
    blurb:
      "Ongoing updates, backups, monitoring, and hardening so your site stays fast, current, and protected — for good.",
    points: ["Proactive updates", "Daily backups", "Uptime monitoring", "Security hardening"],
    icon: "shield",
  },
];

export type Step = {
  n: string;
  title: string;
  blurb: string;
};

export const process: Step[] = [
  {
    n: "01",
    title: "Discover",
    blurb:
      "We start by understanding your business, your customers, and what 'winning' actually looks like — then audit where you stand today.",
  },
  {
    n: "02",
    title: "Strategy",
    blurb:
      "A focused, prioritized plan. No bloated retainers or busywork — just the moves that move the number that matters.",
  },
  {
    n: "03",
    title: "Build & Launch",
    blurb:
      "We design and ship fast: a site, campaign, or funnel engineered for performance and built to convert from day one.",
  },
  {
    n: "04",
    title: "Measure & Scale",
    blurb:
      "We track real results, double down on what works, and keep iterating. Growth is a system, not a one-time project.",
  },
];

export const stats = [
  { value: "100%", label: "Client satisfaction" },
  { value: "24/7", label: "Support availability" },
  { value: "<1s", label: "Target load times" },
  { value: "ROI", label: "Every decision, measured" },
];

export const values = [
  {
    title: "Results over noise",
    blurb:
      "We don't sell vanity metrics. Every recommendation ties back to revenue, leads, or growth you can measure.",
  },
  {
    title: "Senior work, direct",
    blurb:
      "You work with the person doing the work — no account-manager telephone game, no offshore handoffs.",
  },
  {
    title: "Built to last",
    blurb:
      "Clean, fast, secure builds you own outright. We set you up to scale, not to stay dependent on us.",
  },
];
