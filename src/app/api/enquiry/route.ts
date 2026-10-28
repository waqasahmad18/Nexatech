import { NextResponse } from "next/server";
import { brandedEmail, detailRows, getMailer, logoAttachment } from "@/lib/mail";
import { savePromoEmail } from "@/lib/promoList";

const max = { name: 120, email: 200, phone: 40, whatsapp: 40, service: 120, message: 4000 };

function clean(value: unknown, limit: number) {
  return String(value ?? "").trim().slice(0, limit);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The form could not be read." }, { status: 400 });
  }

  const fields = (body ?? {}) as Record<string, unknown>;
  const name = clean(fields.name, max.name);
  const email = clean(fields.email, max.email);
  const phone = clean(fields.phone, max.phone);
  const whatsapp = clean(fields.whatsapp, max.whatsapp);
  const service = clean(fields.service, max.service);
  const message = clean(fields.message, max.message);
  const source = clean(fields.source, 160);
  const extra = fields.extra && typeof fields.extra === "object" ? (fields.extra as Record<string, unknown>) : {};

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }

  const rows: Array<[string, string]> = [];
  if (source) rows.push(["Page", source]);
  const standard: Array<[string, string, string]> = [
    ["Name", name, "name"],
    ["Email", email, "email"],
    ["Contact number", phone, "phone"],
    ["WhatsApp", whatsapp, "whatsapp"],
    ["Service", service, "service"],
    ["Message", message, "message"],
  ];
  for (const [label, value, key] of standard) {
    if (value || Object.prototype.hasOwnProperty.call(fields, key)) rows.push([label, value]);
  }
  for (const [key, value] of Object.entries(extra)) {
    const text = clean(value, 500);
    if (text) rows.push([key, text]);
  }

  if (!rows.some(([, value]) => value)) {
    return NextResponse.json({ error: "The form was empty." }, { status: 400 });
  }

  const mailer = getMailer();
  if (!mailer) {
    return NextResponse.json({ error: "Email is not set up yet. Use Chat on WhatsApp for now." }, { status: 503 });
  }

  const text = rows.map(([label, value]) => `${label}: ${value || "—"}`).join("\n");
  const from = `Bravioniyx Technologies <${mailer.user}>`;

  try {
    await mailer.transporter.sendMail({
      from,
      to: mailer.inbox,
      replyTo: email || mailer.user,
      subject: service ? `Website form — ${name || email || "visitor"} — ${service}` : `Website form — ${name || email || source || "visitor"}`,
      text,
      html: brandedEmail("New enquiry", `<p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#333">Someone sent this from the website.</p>${detailRows(rows)}`),
      attachments: [logoAttachment],
    });

    if (email) {
      await mailer.transporter.sendMail({
        from,
        to: email,
        replyTo: mailer.user,
        subject: "We received your message — Bravioniyx Technologies",
        text: `Bravioniyx Technologies received your message.\n\n${text}`,
        html: brandedEmail(
          "We received your message",
          `<p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#333">Thank you. Bravioniyx Technologies has your enquiry. This is the copy that was sent.</p>${detailRows(rows)}`
        ),
        attachments: [logoAttachment],
      });
    }
  } catch {
    return NextResponse.json({ error: "The message could not be sent. Use Chat on WhatsApp for now." }, { status: 502 });
  }

  if (email) {
    try {
      await savePromoEmail({
        email,
        name,
        source,
        service,
        page: clean(fields.page, 500) || source,
      });
    } catch {
      // The enquiry mail already went out. A storage miss should not fail the visitor.
    }
  }

  return NextResponse.json({ ok: true });
}
