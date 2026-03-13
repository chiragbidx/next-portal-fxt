import NextAuth, { DefaultSession } from "next-auth";

// Extend default session user to include "id" (and other fields as needed)
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      firstName?: string | null;
      lastName?: string | null;
    }
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    firstName?: string | null;
    lastName?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    firstName?: string | null;
    lastName?: string | null;
  }
}