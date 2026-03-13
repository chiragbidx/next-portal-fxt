import { CtaContent } from "../../content/home";

// Section: Final CTA with quick resource links
export function CtaSection({ content }: { content: CtaContent }) {
  return (
    <section
      id="cta"
      className="rounded-2xl border border-[#d6c2fa] bg-gradient-to-br from-white via-[#ede7fc] to-white px-6 py-12 text-[#4321b7] shadow-sm sm:px-12 animate-section hover-lift"
    >
      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr] sm:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c47ff]">Mailvibe SaaS</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{content.title}</h2>
          <p className="text-base text-[#6c47ff]">
            {content.blurb}
          </p>
        </div>

        <div className="grid gap-4 rounded-xl border border-[#d6c2fa] bg-white/80 p-6 text-sm shadow-sm sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#642be3]">Product</p>
            {content.productLinks.map((item) => (
              <a key={item.label} className="block text-[#4321b7] transition hover:text-[#6c47ff]" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#642be3]">Resources</p>
            {content.resourceLinks.map((item) => (
              <a key={item.label} className="block text-[#4321b7] transition hover:text-[#6c47ff]" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center border-t border-[#d6c2fa] pt-6 text-center text-xs text-[#6c47ff]">
        <span>{content.footer}</span>
      </div>
    </section>
  );
}