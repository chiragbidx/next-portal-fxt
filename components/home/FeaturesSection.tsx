import { Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeaturesContent } from "../../content/home";

// Section: Product pillars / feature grid
export function FeaturesSection({ content }: { content: FeaturesContent }) {
  return (
    <section
      id="features"
      className="grid gap-8 rounded-2xl border border-[#fb7232]/15 bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,245,238,0.8) 0%, rgba(255,255,255,0.96) 60%), radial-gradient(circle at 20% 10%, rgba(251,114,50,0.16), transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 260px 260px",
        backgroundPosition: "center, left -40px top -20px",
      }}
    >
      <div className="space-y-3 max-w-3xl">
        <Badge variant="muted" className="uppercase tracking-[0.2em] text-[#fb7232] bg-white/80 border-[#fb7232]/20">
          Product pillars
        </Badge>
        <div className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <Settings size={28} color="#fb7232" strokeWidth={1.6} />
          <span>{content.title}</span>
        </div>
        <p className="text-base text-[#6a3515]">{content.intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item, idx) => (
          <Card
            key={item.title}
            className="space-y-3 bg-white/80 transition hover:-translate-y-1 hover:shadow-md animate-fade-slide"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <CardHeader className="pb-2">
              <Badge variant="muted" className="bg-[#ffe8da] text-[#c75829] border-[#fb7232]/20">
                {item.title}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-[#5a2a12]">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
