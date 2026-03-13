import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";

export default async function DashboardHome() {
  const session = await getServerSession(authOptions);
  const userName = session?.user?.firstName || session?.user?.email || "User";

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#4321b7] mb-2">Welcome, {userName}!</h2>
      <p className="text-lg text-[#6c47ff] mb-8">Ready to create your next campaign or review your results?</p>
      <div className="flex gap-6 mb-8">
        <Link href="/dashboard/campaigns/new" className="px-6 py-3 rounded-lg bg-gradient-to-tr from-[#6c47ff] to-[#642be3] text-white font-semibold hover:opacity-80 transition shadow">
          Create Campaign
        </Link>
        <Link href="/dashboard/campaigns" className="px-6 py-3 rounded-lg border border-[#642be3] bg-white text-[#642be3] font-semibold hover:bg-[#ede7fc] transition shadow">
          View Campaigns
        </Link>
      </div>
      <div>
        <span className="text-sm text-[#642be3]">Your stats and recent activity will appear here in future updates.</span>
      </div>
    </div>
  );
}