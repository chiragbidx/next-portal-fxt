import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { DocsSupportContent } from "../../content/home";

// Section: Documentation links and support tiers
export function DocsSupportSection({ content }: { content: DocsSupportContent }) {
  return (
    <section className="grid gap-6 rounded-2xl border border-border/60 bg-card/70 px-6 py-10 shadow-sm sm:grid-cols-[1.1fr_0.9fr] sm:px-12 animate-section hover-lift">
      <div className="space-y-4">
        <Badge variant="muted" className="uppercase tracking-[0.2em] text-[#fb7232] bg-white/80 border-[#fb7232]/20">
          Docs & Support
        </Badge>
        <div className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <Book size={28} color="#fb7232" strokeWidth={1.6} />
          <span>{content.title}</span>
        </div>
        <p className="text-base text-[#6a3515]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.links.map((item, i) => (
            <Card key={item.label} className="bg-white/80" style={{ animationDelay: `${i * 0.1}s` }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-semibold text-[#c75829]">{item.label}</CardTitle>
                <CardDescription className="text-xs text-[#5a2a12]">Open</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="link" className="px-0 text-[#c75829]">
                  <a href={item.link}>View</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Card className="space-y-4 bg-gradient-to-br from-white via-[#fff5ee] to-white">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[#5a2a12]">Support tiers</p>
            <Badge variant="primary" className="bg-[#ffe8da] text-[#c75829] border-[#fb7232]/20">
              {content.supportBadge}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2 text-sm text-[#5a2a12]">
            {content.supportBullets.map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> {item}</li>
            ))}
          </ul>
          <Button asChild className="w-full">
            <a href={content.supportCta.href}>{content.supportCta.label}</a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
