# CHANGELOG

## 2024-03-13

### Added: Full Database-Backed Registration and Secure Login

- Introduced `app/register/actions.ts` server action to handle user registration with strong validation and bcrypt password hashing.
- Rebuilt registration page (`app/register/page.tsx`) with live DB integration, robust error handling, and redirect on success.
- Rebuilt login page (`app/login/page.tsx`) for credential sign-in with NextAuth, proper feedback, and registration success display.
- Registration enforces unique emails and strong password requirements.
- All user data handled and validated server-side; credentials never exposed in the client.
- End-to-end: new users can sign up and log in, with full error/success feedback for every auth scenario.

---