"use client";

import { useFormState } from "react-dom";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState<{error?: string; loading?: boolean;}>({});

  // Handle NextAuth credential login
  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ loading: true });
    const form = event.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setFormState({ error: "Invalid email or password." });
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow border">
      <h2 className="text-2xl mb-4 font-bold text-[#6c47ff]">Sign In to Mailvibe</h2>
      <form onSubmit={handleLogin} className="space-y-4">
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
            autoComplete="current-password"
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
        {searchParams.get("signup") === "success" && (
          <div className="bg-green-50 border border-green-200 text-sm text-green-700 p-2 rounded">
            Registration successful. You can sign in now!
          </div>
        )}
        <button
          type="submit"
          disabled={formState.loading}
          className="w-full bg-[#6c47ff] hover:bg-[#4321b7] transition text-white font-bold py-2 px-4 rounded"
        >
          {formState.loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      <div className="mt-4 text-center text-sm">
        New to Mailvibe? <Link className="underline text-[#642be3]" href="/register">Create Account</Link>
      </div>
    </div>
  );
}