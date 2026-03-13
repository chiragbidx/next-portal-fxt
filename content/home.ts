export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  featureCards: { title: string; subtitle: string; body: string }[];
};

export type LogosContent = {
  title: string;
  subtitle: string;
  logos: string[];
};

export type FeaturesContent = {
  title: string;
  intro: string;
  items: { title: string; body: string }[];
};

export type MetricsContent = {
  title: string;
  blurb: string;
  stats: { label: string; value: string }[];
  snapshot: string[];
};

export type PricingContent = {
  title: string;
  blurb: string;
  ctas: { sales: { label: string; href: string }; terms: { label: string; href: string } };
  plans: { name: string; price: string; desc: string; features: string[]; cta: { label: string; href: string } }[];
};

export type SecurityContent = {
  title: string;
  blurb: string;
  checklist: string[];
  badges: string[];
  cta: { label: string; href: string };
};

export type DocsSupportContent = {
  title: string;
  blurb: string;
  links: { label: string; link: string }[];
  supportBullets: string[];
  supportBadge: string;
  supportCta: { label: string; href: string };
};

export type LegalContent = {
  title: string;
  blurb: string;
  docs: { label: string; link: string; tag?: string }[];
  corporate: string[];
  note: string;
};

export type CtaContent = {
  title: string;
  blurb: string;
  productLinks: { label: string; href: string }[];
  resourceLinks: { label: string; href: string }[];
  footer: string;
};

export type HomeContent = {
  hero: HeroContent;
  logos: LogosContent;
  features: FeaturesContent;
  metrics: MetricsContent;
  pricing: PricingContent;
  security: SecurityContent;
  docs: DocsSupportContent;
  legal: LegalContent;
  cta: CtaContent;
};

export const defaultHomeContent: HomeContent = {
  hero: {
    eyebrow: "Grow with Mailvibe",
    title: "Send beautiful campaigns. Grow your audience. Zero code required.",
    subtitle:
      "Mailvibe makes it effortless to manage, schedule, and track your marketing emails. No hassle, just results.",
    primaryCta: { label: "Try the live demo", href: "#sendcampaign" },
    secondaryCta: { label: "See how it works", href: "#features" },
    featureCards: [
      { title: "Deliver", subtitle: "Blazing fast delivery", body: "Our platform optimizes for inbox placement and speed every time." },
      { title: "Personalize", subtitle: "Smart segmentation", body: "Send the right message to the right people with customizable lists." },
      { title: "Analyze", subtitle: "Live engagement stats", body: "Track opens, clicks, and outcomes with modern reporting dashboards." },
      { title: "Collaborate", subtitle: "Team ready", body: "Invite teammates, share drafts, and approve campaigns before launch." },
    ],
  },
  logos: {
    title: "Trusted by teams",
    subtitle: "Fast-growing startups and agencies love Mailvibe",
    logos: ["Shopify", "Zapier", "Notion", "Basecamp", "Airtable", "Stripe", "Intercom", "Loom", "Segment", "Webflow"],
  },
  features: {
    title: "Everything you need for email marketing",
    intro: "From campaign management to lists to analytics, Mailvibe has the whole workflow covered.",
    items: [
      { title: "Send unlimited campaigns", body: "No throttle: schedule or broadcast campaigns to any list size. We keep you deliverable." },
      { title: "Audience segments", body: "Personalize with tags, smart lists, and property-based filtering. No engineering needed." },
      { title: "Track engagement", body: "Beautiful dashboards to see who opened, clicked, or replied instantly." },
      { title: "Team collaboration", body: "Multi-user control with granular permissions for safe, transparent editing." },
      { title: "Template gallery", body: "Get inspired with proven, high-converting email templates." },
      { title: "Seamless integrations", body: "Connect CRMs, webhooks, and Zapier in seconds." },
    ],
  },
  metrics: {
    title: "See Mailvibe’s impact, not just opens",
    blurb: "We obsess over every delivery and every open. Mailvibe ships with analytics that power smarter teams.",
    stats: [
      { label: "Avg. deliverability", value: "99.2%" },
      { label: "Emails delivered/month", value: "16M+" },
      { label: "Starter templates", value: "25+" },
      { label: "Integration recipes", value: "12+" },
    ],
    snapshot: [
      "Real-time campaign dashboard with click heatmaps and device metrics",
      "Segment, export, or sync lists (CSV, Airtable, API)",
      "Reliable delivery with bounce/suppression feedback",
      "Monthly deliverability report to your inbox",
      "Easy migration: import from Mailchimp or others",
    ],
  },
  pricing: {
    title: "Simple plans for fast teams",
    blurb: "Start free (forever), scale up when you’re ready. No send limits on paid plans.",
    ctas: {
      sales: { label: "Contact sales", href: "mailto:sales@mailvibe.com" },
      terms: { label: "Pricing terms", href: "#legal" },
    },
    plans: [
      {
        name: "Free",
        price: "$0",
        desc: "Perfect for testing and personal projects.",
        features: ["Up to 500 subs", "Unlimited sends", "Chat+email support"],
        cta: { label: "Launch free", href: "https://mailvibe.com/start" },
      },
      {
        name: "Pro",
        price: "$39",
        desc: "For high-growth startups and lean agencies.",
        features: ["10k subscribers", "Segmentation", "Reporting dashboard"],
        cta: { label: "Start Pro", href: "https://mailvibe.com/start" },
      },
      {
        name: "Scale",
        price: "Custom",
        desc: "Need volume or advanced automation? Let’s chat.",
        features: ["Unlimited subs", "Priority delivery", "API & integrations"],
        cta: { label: "Book a consult", href: "mailto:sales@mailvibe.com" },
      },
    ],
  },
  security: {
    title: "Deliverability & privacy you can trust",
    blurb: "Locked down from day one: we never share your data and deliver only to opted-in, validated lists.",
    checklist: [
      "Opt-in only sending, never a purchased list",
      "Custom domain/SenderID supported on all plans",
      "One-click unsubscribe and suppression compliance",
      "Annual penetration tests and secure data storage",
    ],
    badges: ["GDPR", "CAN-SPAM", "SOC2", "ISO 27001", "CCPA"],
    cta: { label: "Request compliance pack", href: "mailto:security@mailvibe.com" },
  },
  docs: {
    title: "Guides, docs & human support",
    blurb: "Easy to self-serve, easy to escalate. Mailvibe’s help center is built for everyone.",
    links: [
      { label: "API docs", link: "https://mailvibe.com/docs/api" },
      { label: "Getting started", link: "https://mailvibe.com/docs/start" },
      { label: "Status page", link: "https://status.mailvibe.com" },
      { label: "Implementation gallery", link: "https://mailvibe.com/library" },
    ],
    supportBullets: [
      "Live chat 10am-10pm (EST)",
      "24hr business email support",
      "Named onboarding engineer for teams",
      "Migration specialists available",
    ],
    supportBadge: "Live human support",
    supportCta: { label: "Contact support", href: "mailto:support@mailvibe.com" },
  },
  legal: {
    title: "Legal, privacy, & transparency",
    blurb: "No hidden terms. We publish our data, privacy, and compliance docs for you and your team.",
    docs: [
      { label: "MSA", link: "https://mailvibe.com/legal/msa", tag: "PDF" },
      { label: "DPA", link: "https://mailvibe.com/legal/dpa", tag: "PDF" },
      { label: "Privacy Policy", link: "https://mailvibe.com/legal/privacy", tag: "PDF" },
      { label: "Acceptable Use", link: "https://mailvibe.com/legal/aup", tag: "PDF" },
    ],
    corporate: [
      "HQ: Remote-first, Delaware C-Corp",
      "Vendor Info: W-9, EIN, SOC2 packet on request",
      "Support SLAs for Pro & up",
      "Accessibility statement (WCAG 2.1 AA)",
      "Diversity, Equity & Inclusion statement",
    ],
    note: "Custom legal needs? Email legal@mailvibe.com and we’ll reply within two business days.",
  },
  cta: {
    title: "Start sending with Mailvibe",
    blurb: "Spin up a real campaign, see live analytics, and grow your audience today.",
    productLinks: [
      { label: "Send campaign", href: "#sendcampaign" },
      { label: "Pricing", href: "#pricing" },
      { label: "Docs", href: "https://mailvibe.com/docs" },
    ],
    resourceLinks: [
      { label: "Status", href: "https://status.mailvibe.com" },
      { label: "Blog", href: "https://mailvibe.com/blog" },
      { label: "Support", href: "mailto:support@mailvibe.com" },
    ],
    footer: "Built with Mailvibe by Chirag Dodiya • MIT licensed • hello@mailvibe.com",
  },
};

// Helper for future overrides (e.g., reading JSON from env or file)
export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}