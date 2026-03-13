"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const resp = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await resp.json();
    if (!resp.ok) {
      setError(data.error || "Login failed. Try again.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ede7fc] via-white to-[#f9f6ff]">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-10 border border-[#d6c2fa]">
        <h1 className="text-3xl font-bold text-center text-[#6c47ff] mb-6">Sign in to Mailvibe</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 font-medium text-[#4321b7]">Email</label>
            <input
              type="email"
              className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoFocus
              required
              disabled={loading}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#4321b7]">Password</label>
            <input
              type="password"
              className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              required
              disabled={loading}
            />
          </div>
          {error && (
            <div className="text-red-600 text-center font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-tr from-[#6c47ff] to-[#642be3] shadow hover:opacity-90 transition ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className="mt-6 text-center text-[#642be3]">
          Don&apos;t have an account? <a href="/register" className="font-semibold underline hover:text-[#6c47ff]">Register</a>
        </div>
      </div>
    </div>
  );
}