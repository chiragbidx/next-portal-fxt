import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { PricingContent } from "../../content/home";

// Section: Pricing plans grid with CTAs
export function PricingSection({ content }: { content: PricingContent }) {
  return (
    <section
      className="rounded-2xl border border-[#d6c2fa] bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #f6f3fecc 0%, #fff 60%), radial-gradient(circle at 18% 18%, #6c47ff22, transparent 36%), radial-gradient(circle at 82% 82%, #642be31a, transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c47ff]">Pricing</p>
          <h2 className="flex items-center gap-3 text-3xl font-bold text-[#4321b7] sm:text-4xl">
            <CreditCard size={28} color="#6c47ff" strokeWidth={1.6} />
            {content.title}
          </h2>
          <p className="text-base text-[#642be3]">{content.blurb}</p>
        </div>
        <div className="flex gap-3 sm:gap-4">
          <Button asChild>
            <a href={content.ctas.sales.href}>{content.ctas.sales.label}</a>
          </Button>
          <Button asChild variant="outline" className="border-[#d6c2fa] text-[#642be3] hover:bg-[#ede7fc]">
            <a href={content.ctas.terms.href}>{content.ctas.terms.label}</a>
          </Button>
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {content.plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col gap-4 bg-white/95">
            <CardHeader className="space-y-1">
              <CardTitle className="text-xs font-semibold uppercase tracking-[0.14em] text-[#642be3]">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-2xl font-black text-[#4321b7]">{plan.price}</CardDescription>
              <p className="text-sm text-[#6c47ffcc]">{plan.desc}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-[#6c47ff]">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#6c47ff]" /> {feat}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-[#d6c2fa] text-[#642be3] bg-[#ede7fc] hover:bg-[#d6c2fa]">
                <a href={plan.cta.href}>{plan.cta.label}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}