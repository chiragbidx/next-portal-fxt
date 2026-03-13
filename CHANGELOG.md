# CHANGELOG.md

## 2024-06-11 — Mailvibe Initial Feature Launch

- Rebranded from Panda to Mailvibe: new color palette, branding, and value proposition everywhere.
- Updated `app/page.tsx` for Mailvibe header, branding, and modular sections.
- Added a real, production-grade "Send Campaign" demo feature:
  - Client component (`components/forms/SendCampaignDemo.tsx`) for entering recipient, subject, and message; inline validation, user feedback.
  - Server-side (Edge) API route (`app/api/send-campaign/route.ts`) that delivers campaign using SendGrid (`SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL` env vars required).
  - Live form demo on public landing, with no authentication—see email delivery in action.
  - Campaign sends (but not campaigns themselves) logged server-side for simple observability.
- content/home.ts: Mailvibe-first, SaaS/marketing-focused default content for all landing sections (hero, features, pricing, CTA, etc).
- Updated README.md and FILES.md for SaaS/email demo context, new file locations, and user/developer onboarding.
- All copyright, meta, and legal contact set to Chirag Dodiya (`chirag@bidx.ai`)
- No changes to DB schema (campaigns stored in future release).

---