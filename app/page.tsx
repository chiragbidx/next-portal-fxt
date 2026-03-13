// Server Component: keep layout/content server-rendered; sections are data-driven.
import { getHomeContent } from "../content/home";
import { HeroSection } from "../components/home/HeroSection";
import { LogosMarqueeSection } from "../components/home/LogosMarqueeSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { MetricsSection } from "../components/home/MetricsSection";
import { PricingSection } from "../components/home/PricingSection";
import { SecuritySection } from "../components/home/SecuritySection";
import { DocsSupportSection } from "../components/home/DocsSupportSection";
import { LegalSection } from "../components/home/LegalSection";
import { CtaSection } from "../components/home/CtaSection";
import SendCampaignDemo from "../components/forms/SendCampaignDemo";

// Swap palette: purple-blue for Mailvibe
const BRAND_COLOR = "#6c47ff";
const BRAND_ACCENT = "#642be3";
const BRAND_LIGHT = "#ede7fc";
const BRAND_NAME = "Mailvibe";
const BRAND_DESC = "Fast, simple & reliable email marketing for modern teams.";

export const metadata = {
  title: "Mailvibe — Email Marketing SaaS",
  description: "Create, send, and track beautiful email campaigns with Mailvibe. Modern, production-grade SaaS starter for mass email.",
  openGraph: {
    title: "Mailvibe — Email Marketing SaaS",
    description: "Create, send, and track beautiful email campaigns with Mailvibe.",
    url: process.env.BASE_URL || "https://mailvibe.com",
    siteName: "Mailvibe",
    images: [
      {
        url: "/mailvibe-og.png",
        width: 1200,
        height: 627,
        alt: "Mailvibe Email SaaS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const content = getHomeContent();

  // Section toggles (unchanged)
  const only = (process.env.ONLY_SECTIONS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const envHide = (process.env.HIDE_SECTIONS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const defaultHide = [];
  const whitelist = only.length ? new Set(only) : null;
  const hide = new Set(whitelist ? envHide : [...defaultHide, ...envHide]);
  const sections = [
    ["hero", <HeroSection key="hero" content={content.hero} />],
    ["logos", <LogosMarqueeSection key="logos" content={content.logos} />],
    ["sendcampaign", <SendCampaignDemo key="sendcampaign" />],
    ["features", <FeaturesSection key="features" content={content.features} />],
    ["metrics", <MetricsSection key="metrics" content={content.metrics} />],
    ["pricing", <PricingSection key="pricing" content={content.pricing} />],
    ["security", <SecuritySection key="security" content={content.security} />],
    ["docs", <DocsSupportSection key="docs" content={content.docs} />],
    ["legal", <LegalSection key="legal" content={content.legal} />],
    ["cta", <CtaSection key="cta" content={content.cta} />],
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ede7fc] via-white to-[#f9f6ff] text-[#10042c]">
      <main className="flex min-h-screen w-full flex-col gap-12 px-6 py-12 sm:px-10 lg:px-16 lg:max-w-[1600px] lg:mx-auto">
        {/* Mailvibe header with new branding */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full border border-[#6c47ff]/30 bg-white px-5 py-2 shadow-sm">
              <span className="text-2xl font-black tracking-tight text-[#6c47ff]">{BRAND_NAME}</span>
            </div>
            <p className="text-sm font-medium text-[#642be3] sm:text-base">
              {BRAND_DESC}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:justify-end w-full sm:w-auto">
            <a
              href="https://mailvibe.com/docs"
              className="w-full sm:w-auto text-center rounded-full border border-[#6c47ff]/30 bg-white px-4 py-2 text-sm font-semibold text-[#642be3] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Docs
            </a>
            <a
              href="https://mailvibe.com/pricing"
              className="w-full sm:w-auto text-center rounded-full bg-[#6c47ff] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#642be3] hover:shadow-md"
            >
              Get Started
            </a>
          </div>
        </header>
        {sections
          .filter(([id]) => (whitelist ? whitelist.has(id) : true))
          .filter(([id]) => !hide.has(id))
          .map(([, node]) => node)}
      </main>

      {/* Updated lightweight animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-slide {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-section {
          animation: fade-slide 0.7s ease both;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 14s ease-in-out infinite;
        }
        .animate-fade-slide {
          animation: fade-slide 0.6s ease both;
        }
        .animate-marquee {
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        .hover-lift {
          transition: transform 300ms ease, box-shadow 300ms ease;
        }
        .hover-lift:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -24px rgba(108, 71, 255, 0.35);
        }
      `}</style>
    </div>
  );
}