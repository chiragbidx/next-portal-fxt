# FILES.md — Structural & Architectural Index (Next.js App Router Starter)

AI-facing index of the repository as it exists today. Full-featured Mailvibe SaaS: Drizzle ORM (PostgreSQL) with users and campaigns model, auth-ready dependencies, SendGrid demo, dashboard routes, and campaign management. If something is unclear: **STOP AND ASK**.

---

## 1. High-Level Overview
- Purpose: Mailvibe production-grade email marketing SaaS. Now supports authenticated dashboard UI, campaigns DB, account-based access, and campaign CRUD.
- Style: file-system routing, server-first components, modern purple/white palette.
- Tech: Next.js 16, React 19, TypeScript 5, Tailwind, ESLint 9.
- Present: Drizzle schema + migrations for users and campaigns. Live SendGrid emailing. NextAuth ready.
- Added: Dashboard route group, campaign creation/listing, data model/migrations for campaigns table.

## 2. Application Entry Points
- `app/layout.tsx`: Root layout, globals, base shell.
- `app/page.tsx`: Mailvibe landing, modular sections.
- `app/(dashboard)/dashboard/`: Authenticated dashboard (campaign management).
- `app/(login)/`: Auth flows (login/register pages).
- `app/api/send-campaign/route.ts`: API route, SendGrid integration.
- `app/globals.css`: Global Tailwind, palette.
- `next.config.ts`, `postcss.config.mjs`: Next.js, PostCSS.

## 3. Modules / Feature Areas
- `app/`: Routing, dashboards, protected flows.
  - `/page.tsx`: public landing.
  - `/(dashboard)/dashboard/`: dashboard shell/pages.
  - `/(login)/`: login and registration.
  - `/api/`: Edge/serverless integration.
- `components/`: Shared UI, dashboard widgets, account UI.
- `content/`: Landing copy/HomeContent.
- `lib/db/`: Schema for users & campaigns.
- `drizzle/`: SQL migrations.
- `public/`: Static assets.

## 4. Routes (Controllers)
- `/` → `app/page.tsx` — public landing.
- `/api/send-campaign` — SendGrid Edge API (POST).
- `/dashboard/` — authenticated dashboard (list/create campaigns).
- `/dashboard/campaigns` — list user’s campaigns.
- `/dashboard/campaigns/new` — create campaign form.
- `/login`, `/register` — user auth.

## 5. Services & Providers
- NextAuth.js — authentication for dashboard use.
- SendGrid — email delivery.

## 6. Data Layer
- ORM/DB: Drizzle + Postgres.
  - Users: base auth.
  - Campaigns: id, user, recipients, subject, body, status, error, timestamps.

## 7. DTOs, Schemas & Validation
- Campaign form validation both server/client. Models in `lib/db/schema.ts`.

## 8. Cross-Cutting Concerns
- Auth required for /dashboard and all campaign CRUD/data routes.

## 9. Configuration & Environment
- `.env.example`: `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `DATABASE_URL`, `AUTH_SECRET`, others as before.

## 10. Async & Background Processing
- None (campaign sending triggered manually, synchronous email).

## 11. Testing Structure
- No tests yet. Standard Next.js file conventions for integration/unit tests.

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
  (dashboard)/
    dashboard/
      layout.tsx
      page.tsx
      campaigns/
        page.tsx
        new/
          page.tsx
  (login)/
    login/
      page.tsx
    register/
      page.tsx
components/
  forms/
    SendCampaignDemo.tsx
  home/
    [sections]
  [dashboard/account UI, campaign list, campaign form...]
content/
  home.ts
public/
  [assets]
lib/db/
  schema.ts
  client.ts
drizzle/
  0000_init.sql
  0001_add_campaigns.sql
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
- Major features: add under `app/(dashboard)/` (campaigns, dashboard pages).
- Edge API for integrations to `/api/`.
- Update docs (FILES.md/README.md) after major additions.