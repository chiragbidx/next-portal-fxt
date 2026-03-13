import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  // Parse
  const { to, subject, body } = await req.json();

  // Validate input
  if (
    !to ||
    typeof to !== "string" ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to) ||
    !subject ||
    !body
  ) {
    return NextResponse.json({ error: "Missing or invalid input." }, { status: 400 });
  }

  // Check env vars
  const apiKey = process.env.SENDGRID_API_KEY;
  const from = process.env.SENDGRID_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          "SendGrid is not configured. Please set SENDGRID_API_KEY and SENDGRID_FROM_EMAIL in your environment.",
      },
      { status: 500 }
    );
  }

  // Build SendGrid request
  const payload = {
    personalizations: [
      {
        to: [{ email: to }],
        subject,
      },
    ],
    from: { email: from, name: "Mailvibe Demo" },
    content: [{ type: "text/plain", value: body }],
    reply_to: { email: from, name: "Mailvibe Demo" },
  };

  // Call SendGrid REST API
  const resp = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!resp.ok) {
    const err = await resp.text();
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { error: "Failed to send campaign. Please check your SendGrid config." },
      { status: 500 }
    );
  }

  // Log to server (simple for demo)
  console.log(`[Mailvibe] Campaign sent — to: ${to}, subject: "${subject}"`);

  return NextResponse.json({ ok: true });
}