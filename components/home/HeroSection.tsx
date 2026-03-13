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
      className="relative grid min-h-[680px] gap-10 overflow-hidden rounded-2xl border border-[--border] bg-white/70 px-6 py-12 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:items-center sm:px-10 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #ede7fcbb 0 60%, #fff 100%), radial-gradient(circle at 15% 20%, #6c47ff22 0 38%, transparent 100%), radial-gradient(circle at 85% 5%, #642be313 0 34%, transparent 100%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        backgroundSize: "100% 100%, 320px 320px, 260px 260px",
        backgroundPosition: "center, left -60px top -60px, right -30px top 20px",
      }}
    >
      {/* floating gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-12 h-40 w-40 rounded-full bg-[#9b73fb]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-[#6c47ff]/15 blur-3xl" />
      {/* floating icon motifs with pointer parallax */}
      <HeroOrbs />

      <div className="space-y-6 relative">
        <Badge variant="muted" className="bg-white/80 text-[#6c47ff] border-[#d6c2fa]">
          {content.eyebrow}
        </Badge>
        <h1 className="text-4xl font-black leading-tight text-[#4321b7] sm:text-5xl">
          {content.title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-[#6c47ffcc]">
          {content.subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap sm:gap-4 w-full">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href={content.primaryCta.href}>{content.primaryCta.label}</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-[#d6c2fa] text-[#642be3] hover:bg-[#ede7fc]">
            <a href={content.secondaryCta.href}>{content.secondaryCta.label}</a>
          </Button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#d6c2fa] bg-white shadow-md">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ede7fc] via-white to-[#d6c2fa]/40 opacity-70" aria-hidden />
        <div className="relative grid gap-4 p-6 sm:grid-cols-2">
          {content.featureCards.map((card, idx) => (
            <Card key={card.title} className="bg-white/80 ring-1 ring-[#d6c2fa]/30">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs font-semibold uppercase tracking-wide text-[#6c47ff]">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-base font-semibold text-[#4321b7]">
                  {card.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-[#6c47ff99]">{card.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}