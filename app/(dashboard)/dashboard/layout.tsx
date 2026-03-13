import React from "react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#ede7fc] via-white to-[#f9f6ff] text-[#10042c]">
      <aside className="w-60 min-h-screen bg-white/85 border-r border-[#d6c2fa] flex flex-col py-8 px-6">
        <h1 className="text-purple-700 font-black text-2xl mb-8 tracking-tight">Mailvibe</h1>
        <nav className="flex flex-col gap-2 mb-8">
          <Link href="/dashboard" className="py-2 px-3 rounded-md text-[#642be3] font-semibold hover:bg-[#ede7fc] transition">Home</Link>
          <Link href="/dashboard/campaigns" className="py-2 px-3 rounded-md text-[#642be3] font-semibold hover:bg-[#ede7fc] transition">Campaigns</Link>
          <Link href="/dashboard/campaigns/new" className="py-2 px-3 rounded-md text-[#6c47ff] font-semibold border border-[#6c47ff]/30 bg-[#ede7fc] hover:bg-[#d6c2fa] transition mt-2">+ New Campaign</Link>
          <Link href="/dashboard/account" className="py-2 px-3 rounded-md text-[#4321b7] font-semibold hover:bg-[#ede7fc] transition">Account</Link>
        </nav>
        <form method="post" action="/api/auth/signout" className="mt-auto">
          <button type="submit" className="w-full py-2 px-3 rounded-lg text-[#fff] bg-gradient-to-r from-[#6c47ff] to-[#642be3] font-bold hover:opacity-75 transition">Logout</button>
        </form>
        <div className="mt-8 text-xs text-[#642be3]/80">Powered by Mailvibe</div>
      </aside>
      <main className="flex-1 min-h-screen p-10 bg-transparent">
        {children}
      </main>
    </div>
  );
}