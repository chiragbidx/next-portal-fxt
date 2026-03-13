import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { PricingContent } from "../../content/home";

// Section: Pricing plans grid with CTAs
export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <section
      className="rounded-2xl border border-[#fb7232]/15 bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,245,238,0.82) 0%, rgba(255,255,255,0.97) 60%), radial-gradient(circle at 18% 18%, rgba(251,114,50,0.14), transparent 36%), radial-gradient(circle at 82% 82%, rgba(199,88,41,0.12), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fb7232]">Pricing</p>
          <h2 className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
            <CreditCard size={28} color="#fb7232" strokeWidth={1.6} />
            {content.title}
          </h2>
          <p className="text-base text-[#6a3515]">{content.blurb}</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <Button asChild>
            <a href={content.ctas.sales.href}>{content.ctas.sales.label}</a>
          </Button>
          <Button asChild variant="outline" className="border-[#fb7232]/30 text-[#c75829]">
            <a href={content.ctas.terms.href}>{content.ctas.terms.label}</a>
          </Button>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {content.plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col gap-4 bg-white/90">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c75829]">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-2xl font-black text-[#341404]">{plan.price}</CardDescription>
              <p className="text-sm text-[#5a2a12]">{plan.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[#5a2a12]">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> {feat}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-[#fb7232]/30 text-[#c75829] bg-[#ffe8da] hover:bg-[#ffd7bf]">
                <a href={plan.cta.href}>{plan.cta.label}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
