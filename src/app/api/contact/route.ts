import { Resend } from "resend";
import { site } from "@/lib/content";

// Route handlers are not cached for POST; this always runs at request time.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const service = String(body.service ?? "").trim();
  const budget = String(body.budget ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? "").trim(); // spam trap (hidden field)

  // Silently accept bot submissions so we don't tip them off.
  if (honeypot) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !message) {
    return Response.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return Response.json(
      { error: "Email isn't configured yet. Please email us directly." },
      { status: 503 }
    );
  }

  const from = process.env.CONTACT_FROM || `StangScales <noreply@${site.domain}>`;
  const to = process.env.CONTACT_TO || site.email;

  const lines = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Service: ${service || "—"}`,
    `Budget:  ${budget || "—"}`,
    "",
    "Message:",
    message,
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#20201d;line-height:1.6">
      <h2 style="margin:0 0 16px;font-size:18px">New project inquiry</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:2px 16px 2px 0;color:#6c685e">Name</td><td><strong>${escape(name)}</strong></td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#6c685e">Email</td><td><a href="mailto:${escape(email)}">${escape(email)}</a></td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#6c685e">Service</td><td>${escape(service) || "—"}</td></tr>
        <tr><td style="padding:2px 16px 2px 0;color:#6c685e">Budget</td><td>${escape(budget) || "—"}</td></tr>
      </table>
      <p style="margin:16px 0 6px;color:#6c685e;font-size:14px">Message</p>
      <p style="margin:0;white-space:pre-wrap;font-size:15px">${escape(message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email, // reply goes straight to the visitor
      subject: `New inquiry — ${name}`,
      text: lines.join("\n"),
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "We couldn't send your message. Please try again or email us directly." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact route failed:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}

function escape(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
