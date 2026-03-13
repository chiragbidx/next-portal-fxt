import { HeroOrbs } from "../HeroOrbs";
import { HeroContent } from "../../content/home";
import { HeroStackIllustration } from "../illustrations/HeroStackIllustration";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Section: Hero with interactive orbs and highlighted feature cards
export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      className="relative grid min-h-[680px] gap-10 overflow-hidden rounded-2xl border border-[#fb7232]/15 bg-white/60 px-6 py-12 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:px-10 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(255,232,218,0.9), rgba(255,255,255,0.95)), conic-gradient(from 140deg at 28% 22%, rgba(251,114,50,0.12), rgba(255,255,255,0) 35%, rgba(199,88,41,0.1) 65%, rgba(251,114,50,0.08)), radial-gradient(circle at 15% 20%, rgba(251,114,50,0.18), transparent 38%), radial-gradient(circle at 85% 0%, rgba(199,88,41,0.14), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat, no-repeat",
        backgroundSize: "100% 100%, 120% 120%, 320px 320px, 260px 260px",
        backgroundPosition: "center, center, left -60px top -60px, right -30px top 20px",
      }}
    >
      {/* floating gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-12 h-40 w-40 rounded-full bg-[#fb7232]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#c75829]/15 blur-3xl" />
      {/* floating icon motifs with pointer parallax */}
      <HeroOrbs />

      <div className="space-y-6 relative">
        <Badge variant="muted" className="bg-white/80 text-[#fb7232] border-[#fb7232]/20">
          {content.eyebrow}
        </Badge>
        <h1 className="text-4xl font-black leading-tight text-[#3f1b08] sm:text-5xl">
          {content.title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-zinc-700">
          {content.subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={content.primaryCta.href}>{content.primaryCta.label}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-[#fb7232]/30 text-[#c75829]">
            <a href={content.secondaryCta.href}>{content.secondaryCta.label}</a>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#fb7232]/30 bg-white shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe7dd] via-white to-[#ffd9c6] opacity-70" aria-hidden />
        <div className="relative grid gap-4 p-6 sm:grid-cols-2">
          {content.featureCards.map((card, idx) => (
            <Card key={card.title} className="bg-white/80 ring-1 ring-[#fb7232]/15">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-[#fb7232]">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base font-semibold text-[#4b1f0a]">
                  {card.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-zinc-600">{card.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
