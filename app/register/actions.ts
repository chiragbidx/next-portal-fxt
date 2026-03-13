"use server";

import { db } from "@/lib/db/client";
import { users } from "@/lib/db/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { z } from "zod";

const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type RegisterFormState = {
  ok: boolean;
  error?: string;
};

export async function registerUser(prevState: RegisterFormState, formData: FormData): Promise<RegisterFormState> {
  try {
    const payload = RegisterSchema.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    // Check for duplicate email
    const existing = await db.select().from(users).where(eq(users.email, payload.email.toLowerCase()));
    if (existing.length > 0) {
      return { ok: false, error: "Email address already in use." };
    }

    // Hash password
    const passwordHash = await hash(payload.password, 10);

    // Create user
    await db.insert(users).values({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email.toLowerCase(),
      passwordHash,
    });

    return { ok: true };
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return { ok: false, error: err.errors[0].message };
    }
    return { ok: false, error: "Registration failed. Please try again." };
  }
}