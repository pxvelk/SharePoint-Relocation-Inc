import { NextResponse } from "next/server";

const requiredFields = ["companyName", "contactName", "phone", "email", "city", "moveType"] as const;

async function sendWithResend(subject: string, html: string, to: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  if (!apiKey || !from) {
    console.info("Email skipped. Set RESEND_API_KEY and QUOTE_FROM_EMAIL for live emails.");
    return;
  }

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());

  for (const field of requiredFields) {
    if (!payload[field]) {
      return NextResponse.json({ error: `Missing ${field}` }, { status: 400 });
    }
  }

  const lang = String(payload.lang ?? "en");
  const to = String(payload.email);
  const admin = process.env.QUOTE_NOTIFICATION_EMAIL ?? "projects@phasepointrelocation.ca";

  const confirmationSubject = lang === "fr" ? "Confirmation de demande - PhasePoint Relocation" : "Quote Request Confirmation - PhasePoint Relocation";
  const confirmationBody =
    lang === "fr"
      ? `<p>Bonjour ${payload.contactName},</p><p>Merci pour votre demande de soumission commerciale. Notre équipe analysera votre projet et communiquera avec vous dans un délai de 1 jour ouvrable.</p>`
      : `<p>Hello ${payload.contactName},</p><p>Thank you for your commercial quote request. Our team will respond within 1 business day.</p>`;

  const internalSubject = lang === "fr" ? `Nouvelle demande de soumission - ${payload.companyName}` : `New Quote Request - ${payload.companyName}`;
  const internalBody = `<h2>${lang === "fr" ? "Nouvelle demande de soumission" : "New quote request"}</h2><pre>${JSON.stringify(payload, null, 2)}</pre>`;

  await Promise.all([
    sendWithResend(confirmationSubject, confirmationBody, to),
    sendWithResend(internalSubject, internalBody, admin),
  ]);

  return NextResponse.json({ ok: true });
}
