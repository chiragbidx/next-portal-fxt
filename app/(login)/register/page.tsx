"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    const resp = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const data = await resp.json();
    if (!resp.ok) {
      setError(data.error || "Registration failed. Try again.");
      setLoading(false);
      return;
    }

    router.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ede7fc] via-white to-[#f9f6ff]">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-10 border border-[#d6c2fa]">
        <h1 className="text-3xl font-bold text-center text-[#6c47ff] mb-6">Create your Mailvibe Account</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex gap-3">
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-[#4321b7]">First Name</label>
              <input
                type="text"
                className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                disabled={loading}
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium text-[#4321b7]">Last Name</label>
              <input
                type="text"
                className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                disabled={loading}
              />
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium text-[#4321b7]">Email</label>
            <input
              type="email"
              className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
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
              placeholder="Create a password"
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-6 text-center text-[#642be3]">
          Already have an account? <a href="/login" className="font-semibold underline hover:text-[#6c47ff]">Login</a>
        </div>
      </div>
    </div>
  );
}