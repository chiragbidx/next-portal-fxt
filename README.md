# Mailvibe — Email Marketing SaaS Boilerplate

Production-grade starter, built on Next.js 16 App Router, React 19, TypeScript 5. Polished landing, live email campaign demo, SendGrid server integration, Drizzle ORM/PostgreSQL, **authenticated dashboard**, and campaign CRUD for real SaaS growth.

---

## 1. Current Scope
- **Dashboard & Auth:** Mailvibe’s dashboard is fully protected (NextAuth), with login/register, access control, and user home screen.
- **Campaign CRUD:** Users can create, save, list, and send their own campaigns.
- **Live Demo:** Unauthenticated demo (public landing) and full-featured authenticated dashboard.
- **Drizzle ORM:** Users and campaigns models (Postgres) with migrations ready.

## 2. Technology Stack
- Next.js 16 App Router, React 19, TypeScript 5 (strict).
- Styling: Tailwind + PostCSS pipeline; modern purple Mailvibe palette.
- UI kit: shadcn/ui (Radix/Nova).
- Icons: `lucide-react`.
- Data: Drizzle ORM + PostgreSQL, campaigns model.
- API: `/api/send-campaign` (Edge), `/api/auth/*` (NextAuth).
- Tooling: ESLint 9, PostCSS.
- Deploy: Vercel (Docker supported if needed).

## 3. Project Structure
```
app/
  layout.tsx
  page.tsx
  api/send-campaign/route.ts
  (dashboard)/
    dashboard/
      layout.tsx
      page.tsx
      campaigns/
        page.tsx
        new/page.tsx
  (login)/
    login/page.tsx
    register/page.tsx
  globals.css
components/
  forms/SendCampaignDemo.tsx
  home/
    [landing sections]
  [dashboard/account widgets, campaign forms/lists]
content/
  home.ts
lib/db/schema.ts
lib/db/client.ts
[config, migration, infra files as before]
```

## 4. Install & Run
```bash
npm install
npm run dev
```
- Dashboard requires: `DATABASE_URL`, `AUTH_SECRET`.
- Demo email: `SENDGRID_API_KEY` and `SENDGRID_FROM_EMAIL`.

## 5. Routing & Components
- Landing: `app/page.tsx`.
- Dashboard: `app/(dashboard)/dashboard/` (protected, user-only).
- Campaigns: `/dashboard/campaigns` (list), `/dashboard/campaigns/new` (create).
- Auth: `/login`, `/register`.
- Demo form: `components/forms/SendCampaignDemo.tsx`.

## 6. Environment & Secrets
- `.env.local`: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `DATABASE_URL`, `AUTH_SECRET`.
- More can be added for integrations.

## 7. Data & Backend
- Drizzle models: users, campaigns. All mutations gated by user/session.
- Campaign ownership/visibility protected by userId.

## 8. Auth & Security
- All dashboard endpoints/pages protected by NextAuth session.
- Users may only CRUD/view their own campaigns.

## 9. Testing
- No tests yet. Use Playwright, Jest, or your preference.

## 10. Change Guidelines
- Major features (dashboard, campaigns, auth): update FILES.md/README.md after shipping.
- Owner: Chirag Dodiya (`chirag@bidx.ai`).

---

Mailvibe: SaaS-grade, secure, ready to scale. Deploy and build further!