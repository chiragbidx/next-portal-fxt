"use client";

import { useFormState } from "react-dom";
import { registerUser, RegisterFormState } from "./actions";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [formState, formAction] = useFormState(registerUser, { ok: false });
  const router = useRouter();

  useEffect(() => {
    if (formState.ok) {
      // Redirect to login with success message after registration
      router.push("/login?signup=success");
    }
  }, [formState.ok, router]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl mb-4 font-bold text-[#6c47ff]">Create Your Mailvibe Account</h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block font-semibold text-[#642be3]">First Name</label>
          <input
            id="firstName"
            name="firstName"
            className="w-full p-2 border rounded"
            minLength={2}
            required
            autoComplete="given-name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-semibold text-[#642be3]">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            className="w-full p-2 border rounded"
            minLength={2}
            required
            autoComplete="family-name"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-[#642be3]">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold text-[#642be3]">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {formState.error && (
          <div className="bg-red-50 border border-red-200 text-sm text-red-600 p-2 rounded">
            {formState.error}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-[#6c47ff] hover:bg-[#4321b7] transition text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        Already have an account? <Link className="underline text-[#642be3]" href="/login">Sign In</Link>
      </div>
    </div>
  );
}