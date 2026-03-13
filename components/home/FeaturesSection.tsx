import { Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeaturesContent } from "../../content/home";

// Section: Product pillars / feature grid
export function FeaturesSection({ content }: { content: FeaturesContent }) {
  return (
    <section
      id="features"
      className="grid gap-8 rounded-2xl border border-[#d6c2fa] bg-white/80 px-6 py-10 shadow-sm sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #f6f3fecc 0%, #fff 60%), radial-gradient(circle at 20% 10%, #6c47ff24, transparent 34%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 260px 260px",
        backgroundPosition: "center, left -40px top -20px",
      }}
    >
      <div className="space-y-3 max-w-3xl">
        <Badge variant="muted" className="uppercase tracking-[0.2em] text-[#6c47ff] bg-white/80 border-[#d6c2fa]">
          Product pillars
        </Badge>
        <div className="flex items-center gap-3 text-3xl font-bold text-[#4321b7] sm:text-4xl">
          <Settings size={28} color="#6c47ff" strokeWidth={1.6} />
          <span>{content.title}</span>
        </div>
        <p className="text-base text-[#642be3]">{content.intro}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item, idx) => (
          <Card
            key={item.title}
            className="space-y-3 bg-white/80 transition hover:-translate-y-1 hover:shadow-md animate-fade-slide"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <CardHeader className="pb-2">
              <Badge variant="muted" className="bg-[#ede7fc] text-[#6c47ff] border-[#d6c2fa]">
                {item.title}
              </Badge>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-[#4321b7]">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}