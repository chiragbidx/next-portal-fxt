# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Drizzle ORM (PostgreSQL) and auth-ready dependencies are present; routes/auth wiring are not yet added. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: minimal App Router scaffold now rebranded as Mailvibe — production-grade email marketing SaaS starter, with Drizzle + Postgres, SendGrid demo, and campaign deliverability feature.
- Style: file-system routing, server-preferred components, clean Mailvibe branding (purple+white palette).
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind-ready PostCSS, ESLint 9.
- Present: Drizzle schema + initial migration for `users`. Live campaign email sending via SendGrid (demo).
- Not present: auth routes/config, dashboard, advanced reporting, tests.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout; applies globals (Mailvibe fonts/colors).
- `app/page.tsx`: Public landing page (server component); includes Mailvibe campaign demo section.
- `app/api/send-campaign/route.ts`: Edge API route for SendGrid campaign delivery.
- `app/globals.css`: Global styles; imports Tailwind; defines color palette.
- `next.config.ts`: Next.js config.
- `postcss.config.mjs`: PostCSS with `@tailwindcss/postcss`.

## 3. Modules / Feature Areas
- `app/`: UI shell, routing, API edge routes for outgoing mail.
- `components/`: Shared UI; home sections under `components/home/`. Client-only demo form under `components/forms/SendCampaignDemo.tsx`.
- `content/`: Landing copy/config for Mailvibe (`home.ts`, exports typed `HomeContent`).
- `public/`: Static assets (logos/icons).
- `lib/db/`: Drizzle schema and client.
- `drizzle/`: SQL migrations + meta journal.
- Config/tooling: `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`, `tsconfig.json`, `drizzle.config.ts`.

## 4. Routes (Controllers)
- `/` → `app/page.tsx`
  - Purpose: Mailvibe SaaS landing (modular, themed sections, direct demo).
  - Custom section: `<SendCampaignDemo />` for live email campaign UX.
  - Content source: `content/home.ts` Mailvibe copy. Section visibility via env vars.
  - Layout: responsive, up to ~1600px, isolated client interactivity for demo.

- `/api/send-campaign` → `app/api/send-campaign/route.ts`
  - Edge route. Accepts POST `{to, subject, body}` and emails using SendGrid.

## 5. Services & Providers
- SendGrid email — server-side API integration, demo via open POST endpoint.

## 6. Data Layer
- ORM/DB: Drizzle ORM + PostgreSQL. Users model only (no storage of campaigns in demo).

## 7. DTOs, Schemas & Validation
- Demo form/server-side email validation (not persisted, PII flows only for email delivery).

## 8. Cross-Cutting Concerns
- No global logging/tracing, but campaign sends are logged to edge console.

## 9. Configuration & Environment
- `.env.example` and runtime: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, plus platform and DB keys.
- Config files in repo: `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `tsconfig.json`, `drizzle.config.ts`.

## 10. Async & Background Processing
- None (SendGrid calls are synchronous).

## 11. Testing Structure
- No tests yet. Suggested: unit (`__tests__/`), e2e (`e2e/`), storybook for new UI.

## 12. File & Directory Index
```
.gitignore
README.md
FILES.md
RULES.md
Dockerfile
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx
  api/
    send-campaign/
      route.ts
components/
  forms/
    SendCampaignDemo.tsx
  home/
    HeroSection.tsx
    LogosMarqueeSection.tsx
    FeaturesSection.tsx
    MetricsSection.tsx
    PricingSection.tsx
    SecuritySection.tsx
    DocsSupportSection.tsx
    LegalSection.tsx
    CtaSection.tsx
  illustrations/
    HeroStackIllustration.tsx
    GlobeBadgeIllustration.tsx
  HeroOrbs.tsx
  AgentActionPanel.tsx
  ErrorReporter.tsx
content/
  home.ts
public/
  [assets]
lib/db/
  schema.ts
  client.ts
drizzle/
  0000_init.sql
  meta/_journal.json
drizzle.config.ts
eslint.config.mjs
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
package-lock.json
.git/
```

## 13. Safe Modification Guidance
- For new public/demo sections, update `app/page.tsx`, `components/forms/`, and `content/home.ts`.
- Edge API for integrations to `app/api/`.
- Update README.md and FILES.md for major UI/feature changes.