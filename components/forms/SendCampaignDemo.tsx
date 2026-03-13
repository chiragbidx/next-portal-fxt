"use client";

import { useState } from "react";

type SendState = "idle" | "loading" | "success" | "error";

export default function SendCampaignDemo({ fromEmail }: { fromEmail: string }) {
  const [state, setState] = useState<SendState>("idle");
  const [error, setError] = useState<string | null>(null);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  async function handleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError(null);

    // Validate client-side
    if (!to || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to)) {
      setState("error");
      setError("Please provide a valid recipient email.");
      return;
    }
    if (!subject || !body) {
      setState("error");
      setError("Subject and message body are required.");
      return;
    }

    try {
      const resp = await fetch("/api/send-campaign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to, subject, body }),
      });
      if (!resp.ok) {
        const { error } = await resp.json();
        setState("error");
        setError(error || "Failed to send campaign.");
        return;
      }
      setState("success");
      setTo("");
      setSubject("");
      setBody("");
    } catch (err: any) {
      setState("error");
      setError("Failed to send campaign. Please try again.");
    }
  }

  return (
    <section className="my-8 rounded-2xl border border-[#6c47ff]/15 bg-white/90 px-6 py-8 shadow-sm sm:px-10 animate-section hover-lift max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-[#6c47ff]">Send an Email Campaign (Live Demo)</h2>
      <p className="text-sm text-zinc-700 mb-3">
        Enter an email, subject, and message — and see Mailvibe in action! No signup required.
      </p>
      <form className="space-y-4" onSubmit={handleSend} autoComplete="off">
        <div>
          <label className="block text-sm font-medium mb-1 text-[#642be3]">Recipient email</label>
          <input
            className="w-full rounded-md border px-3 py-2 outline-none border-[#6c47ff]/30 bg-[#f6f3fe] text-black"
            type="email"
            value={to}
            onChange={e => setTo(e.target.value)}
            placeholder="you@example.com"
            required
            disabled={state === "loading"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-[#642be3]">Subject</label>
          <input
            className="w-full rounded-md border px-3 py-2 outline-none border-[#6c47ff]/30 bg-[#f6f3fe] text-black"
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Welcome to Mailvibe!"
            required
            disabled={state === "loading"}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-[#642be3]">Message</label>
          <textarea
            className="w-full min-h-[80px] rounded-md border px-3 py-2 outline-none border-[#6c47ff]/30 bg-[#f6f3fe] text-black"
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Type your campaign message here…"
            required
            disabled={state === "loading"}
          />
        </div>
        <button
          type="submit"
          className={`rounded-lg w-full bg-[#6c47ff] text-white font-bold px-4 py-2 transition hover:bg-[#642be3] ${state === "loading" ? "opacity-40 cursor-not-allowed" : ""}`}
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sending…" : "Send Campaign"}
        </button>
        {state === "success" && (
          <p className="mt-2 text-green-600 text-sm font-bold">
            Campaign sent successfully! 🎉
          </p>
        )}
        {state === "error" && (
          <p className="mt-2 text-red-600 text-sm font-bold">{error}</p>
        )}
      </form>
      <p className="mt-6 text-xs text-zinc-400">
        Powered by SendGrid. Emails sent from <span className="font-mono">{fromEmail}</span>
      </p>
    </section>
  );
}