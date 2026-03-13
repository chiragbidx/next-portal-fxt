# CHANGELOG

## 2024-03-13

### Fixed: NextAuth Session Typing for user.id

- Extended NextAuth types via `types/nextauth.d.ts` to ensure `session.user.id` is recognized and typed throughout the app.
- Updated `lib/auth.ts` to always set `token.sub` to user.id during sign-in and propagate that field to `session.user.id` in the session callback, guaranteeing type safety and runtime correctness.
- No changes to database structure or UI/UX; enables error-free access to `session.user.id` for all dashboard campaign/CRUD logic.

---

### Previous updates (same day):

[list of previous changes as documented in prior entries remains unchanged; do not remove or alter historical log content]