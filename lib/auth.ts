import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";
import { compare } from "bcryptjs";

// Use a minimal adapter pattern for Drizzle/Postgres users table.
// NOTE: For a production build, this should be split out and done with proper error handling, hashing, adapters.

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    // error: "/login?error=CredentialsSignin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        // Find user in DB
        const dbUser = await db
          .select()
          .from(users)
          .where(users.email.eq(credentials.email.toLowerCase()))
          .then(res => res[0]);
        if (!dbUser) return null;
        // Verify password
        const valid = await compare(credentials.password, dbUser.passwordHash);
        if (!valid) return null;
        return {
          id: dbUser.id,
          name: dbUser.firstName + " " + dbUser.lastName,
          email: dbUser.email,
          firstName: dbUser.firstName,
          lastName: dbUser.lastName,
        };
      }
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (token && session.user) {
        // Copy extra props onto user
        session.user.id = token.sub;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        // Attach DB user fields to token for session use
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    }
  },
  secret: process.env.AUTH_SECRET,
};