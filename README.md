# Mailvibe — Email Marketing SaaS Boilerplate

Production-grade starter, built on Next.js 16 App Router, React 19, TypeScript 5. Polished landing with live email campaign demo, SendGrid server integration, Drizzle ORM/PostgreSQL, and ready for SaaS expansion.

---

## 1. Current Scope
- Purpose: rebranded platform as "Mailvibe" — fast, simple, and reliable email marketing SaaS starter.
- Features: live "Send Campaign" email demo on landing (`/`), Drizzle ORM for future database needs, and ready-for-scale UI.
- Data: Drizzle has a base `users` model.
- Email delivery: Server API route `/api/send-campaign` (Next.js Edge). Sends campaigns via SendGrid (`SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` required). Logs sends to console.
- Auth: NextAuth installed; not yet configured.

## 2. Technology Stack
- Next.js 16 App Router, React 19, TypeScript 5 (strict).
- Styling: Tailwind + PostCSS pipeline; modern purple Mailvibe palette.
- UI kit: shadcn/ui (Radix/Nova).
- Icons: `lucide-react` (default).
- Data: Drizzle ORM + PostgreSQL.
- API: `/api/send-campaign` with SendGrid integration (Edge runtime).
- Tooling: ESLint 9, PostCSS.
- Deploy: Vercel (Docker supported if needed).

## 3. Project Structure
```
app/
  layout.tsx
  page.tsx
  api/send-campaign/route.ts
  globals.css
components/
  forms/SendCampaignDemo.tsx
  home/
    [section components]
content/
  home.ts
lib/db/
  schema.ts
  client.ts
[config, assets, migration, infra files as before]
```

## 4. Install & Run
```bash
npm install
npm run dev
```
- Demo requires: `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` in `.env.local`.
- To test: Open `/`, use the email form.

## 5. Routing & Components
- Landing page: `app/page.tsx` (Mailvibe hero, client section, pricing, live demo, feature sections).
- Demo form: `components/forms/SendCampaignDemo.tsx` ("Send Campaign", hit Edge API).
- Edge API: `app/api/send-campaign/route.ts`.

## 6. Environment & Secrets
- Set both `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL` for live campaign email demo.
- ENV: `DATABASE_URL`, `AUTH_SECRET`, etc. as before.

## 7. Data & Backend
- Present: users table/schema only (no campaign storage in demo).
- Extensible for teams, billing, analytics.

## 8. Server vs Client Components (Guardrails)
- All campaign sending logic runs server-side (Edge API, never exposes mail API keys).
- Client component for inputs/state only.

## 9. Testing
- No tests included. Add unit/E2E as needed.

## 10. Change Guidelines
- Update FILES.md and README.md whenever new features are shipped.
- Docs/resource links, footer, and copyright:
  - Owner: Chirag Dodiya (`chirag@bidx.ai`)
  - Branding/assets: Mailvibe only.

---

Clear, fast, production-ready SaaS. Ready to ship or build further with Stripe/analytics/reporting/dashboard.