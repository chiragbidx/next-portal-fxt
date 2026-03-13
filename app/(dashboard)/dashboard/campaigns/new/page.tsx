"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCampaignPage() {
  const [recipients, setRecipients] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!recipients.trim() || !subject.trim() || !body.trim()) {
      setError("All fields are required.");
      return;
    }
    const recipientList = recipients.split(",").map((v) => v.trim()).filter(Boolean);
    if (recipientList.some(email => !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))) {
      setError("Each recipient must be a valid email.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const resp = await fetch("/api/campaigns", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recipients: recipientList, subject, body }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        setError(data.error || "Failed to create campaign.");
        setLoading(false);
        return;
      }
      router.push("/dashboard/campaigns");
    } catch (err) {
      setError("Failed to create campaign. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-[#d6c2fa]">
      <h2 className="text-2xl font-bold text-[#4321b7] mb-4">Create New Campaign</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label className="block mb-1 font-medium text-[#642be3]">Recipients (comma separated)</label>
          <input
            type="text"
            className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
            value={recipients}
            onChange={e => setRecipients(e.target.value)}
            placeholder="user1@example.com, user2@example.com"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#642be3]">Subject</label>
          <input
            type="text"
            className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Your campaign subject"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#642be3]">Email Body</label>
          <textarea
            className="w-full rounded border border-[#d6c2fa] px-3 py-2 bg-[#f6f3fe] text-black min-h-[100px]"
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder="Write your campaign message here..."
            disabled={loading}
          />
        </div>
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        <button
          type="submit"
          className={`mt-2 px-6 py-3 rounded-lg font-bold transition bg-gradient-to-tr from-[#6c47ff] to-[#642be3] text-white ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}`}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Campaign"}
        </button>
      </form>
    </div>
  );
}