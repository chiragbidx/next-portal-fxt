import { LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MetricsContent } from "../../content/home";
import { GlobeBadgeIllustration } from "../illustrations/GlobeBadgeIllustration";

// Section: Metrics and architecture proof points
export function MetricsSection({ content }: { content: MetricsContent }) {
  return (
    <section className="grid gap-6 rounded-2xl border border-border/60 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift">
      <div className="space-y-4">
        <Badge variant="muted" className="uppercase tracking-[0.2em] text-[#fb7232] bg-white/80 border-[#fb7232]/20">
          Operational readiness
        </Badge>
        <div className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <LineChart size={28} color="#fb7232" strokeWidth={1.6} />
          <span>{content.title}</span>
        </div>
        <p className="text-base text-[#6a3515]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.stats.map((stat, i) => (
            <Card
              key={stat.label}
              className="bg-white/85 animate-float"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-black text-[#fb7232]">{stat.value}</CardTitle>
                <CardDescription className="text-sm font-semibold text-[#5a2a12]">{stat.label}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <Card className="space-y-4 bg-white/85">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-[#c75829]">Architecture snapshot</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3 rounded-lg border border-[#fb7232]/15 bg-[#fff4ec] px-3 py-2">
            <GlobeBadgeIllustration />
            <p className="text-xs text-[#5a2a12]">Global-ready routing with sensible defaults.</p>
          </div>
          <ul className="space-y-3 text-sm text-[#5a2a12]">
            {content.snapshot.map((line) => (
              <li key={line} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> {line}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
