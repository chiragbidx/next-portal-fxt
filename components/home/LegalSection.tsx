import { FileBadge2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LegalContent } from "../../content/home";

// Section: Legal docs and company details
export function LegalSection({ content }: { content: LegalContent }) {
  return (
    <section
      id="legal"
      className="grid gap-8 rounded-2xl border border-[#fb7232]/15 bg-gradient-to-br from-white via-[#fff5ee] to-white px-6 py-10 shadow-sm sm:grid-cols-[1fr_1fr] sm:px-12 animate-section hover-lift"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(251,114,50,0.12) 0%, rgba(255,245,238,0.45) 60%, rgba(255,255,255,0.96) 100%), radial-gradient(circle at 90% 10%, rgba(251,114,50,0.18), transparent 36%)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "100% 100%, 220px 220px",
        backgroundPosition: "center, right -60px top -20px",
      }}
    >
      <div className="space-y-4">
        <Badge variant="muted" className="uppercase tracking-[0.2em] text-[#fb7232] bg-white/80 border-[#fb7232]/20">
          Legal
        </Badge>
        <div className="flex items-center gap-3 text-3xl font-bold text-[#341404] sm:text-4xl">
          <FileBadge2 size={28} color="#fb7232" strokeWidth={1.6} />
          <span>{content.title}</span>
        </div>
        <p className="text-base text-[#6a3515]">{content.blurb}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {content.docs.map((doc, i) => (
            <Card
              key={doc.label}
              className="bg-white/85 animate-fade-slide"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <a href={doc.link} className="block h-full">
                <CardHeader className="pb-1">
                  <CardTitle className="text-sm font-semibold text-[#c75829]">{doc.label}</CardTitle>
                  <CardDescription className="text-xs text-[#5a2a12]">{doc.tag ?? "PDF"}</CardDescription>
                </CardHeader>
              </a>
            </Card>
          ))}
        </div>
      </div>
      <Card className="space-y-4 bg-white/85">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold text-[#5a2a12]">Corporate details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ul className="space-y-2 text-sm text-[#5a2a12]">
            {content.corporate.map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-[#fb7232]" /> {item}</li>
            ))}
          </ul>
          <CardDescription className="rounded-lg border border-[#fb7232]/15 bg-[#ffe8da] px-4 py-3 text-sm text-[#5a2a12]">
            {content.note}
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
