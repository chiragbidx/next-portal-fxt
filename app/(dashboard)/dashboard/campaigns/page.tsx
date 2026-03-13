import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db/client";
import { campaigns } from "@/lib/db/schema";
import Link from "next/link";

export default async function CampaignsListPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return (
      <div className="text-red-600">
        Not authenticated. <Link href="/login" className="underline text-[#642be3]">Login</Link>
      </div>
    );
  }

  // Fetch user campaigns
  const userCampaigns = await db
    .select()
    .from(campaigns)
    .where(campaigns.userId.eq(session.user.id))
    .orderBy(campaigns.createdAt.desc());

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#4321b7] mb-6">Your Campaigns</h2>
      <Link href="/dashboard/campaigns/new" className="inline-block mb-6 px-5 py-2 rounded bg-[#6c47ff] text-white font-semibold hover:bg-[#4321b7] transition">+ New Campaign</Link>
      <div className="bg-white rounded-xl shadow border border-[#d6c2fa] overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-[#642be3]">
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-left">Recipients</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Created</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userCampaigns.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-400 p-6">
                  No campaigns yet.
                </td>
              </tr>
            )}
            {userCampaigns.map((campaign: any) => (
              <tr key={campaign.id} className="border-t last:border-b">
                <td className="py-3 px-4">{campaign.subject}</td>
                <td className="py-3 px-4">{Array.isArray(campaign.recipients) ? campaign.recipients.join(", ") : (campaign.recipients || '')}</td>
                <td className="py-3 px-4 capitalize">{campaign.status}</td>
                <td className="py-3 px-4">{new Date(campaign.createdAt).toLocaleString()}</td>
                <td className="py-3 px-4 space-x-2">
                  {campaign.status === "draft" && (
                    <Link href={`/dashboard/campaigns/${campaign.id}/send`} className="px-2 py-1 rounded bg-[#6c47ff] text-white text-xs font-semibold hover:bg-[#4321b7] transition">Send</Link>
                  )}
                  <Link href={`/dashboard/campaigns/${campaign.id}`} className="px-2 py-1 rounded bg-[#ede7fc] text-[#642be3] text-xs font-semibold hover:bg-[#d6c2fa] transition">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}