import { NextRequest, NextResponse } from "next/server";
import { brandedEmail, escapeHtml, getMailer, logoAttachment } from "@/lib/mail";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

type Item = { description: string; qty: number; price: number };

function clean(value: unknown, limit: number) {
  return String(value ?? "").trim().slice(0, limit);
}

function money(amount: number, currency: string) {
  const formatted = amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  return `${currency} ${formatted}`;
}

export async function POST(request: NextRequest) {
  if (!verifySessionToken(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: "Sign in as admin to send a quotation." }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "The quotation could not be read." }, { status: 400 });
  }

  const fields = (body ?? {}) as Record<string, unknown>;
  const clientName = clean(fields.clientName, 120);
  const clientEmail = clean(fields.clientEmail, 200);
  const clientPhone = clean(fields.clientPhone, 40);
  const quoteNo = clean(fields.quoteNo, 40) || "BX-QUOTE";
  const service = clean(fields.service, 160);
  const serviceDetail = clean(fields.serviceDetail, 2000);
  const validUntil = clean(fields.validUntil, 40);
  const notes = clean(fields.notes, 2000);
  const currency = clean(fields.currency, 8) || "PKR";

  if (!clientName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
    return NextResponse.json({ error: "Client name and a valid email are required." }, { status: 400 });
  }

  if (!service || serviceDetail.length < 8) {
    return NextResponse.json({ error: "Add the service and a short detail of the work." }, { status: 400 });
  }

  const rawItems = Array.isArray(fields.items) ? fields.items : [];
  const items: Item[] = rawItems.slice(0, 30).flatMap((item) => {
    const row = (item ?? {}) as Record<string, unknown>;
    const description = clean(row.description, 240);
    const qty = Number(row.qty);
    const price = Number(row.price);
    if (!description || !Number.isFinite(qty) || qty <= 0 || !Number.isFinite(price) || price < 0) return [];
    return [{ description, qty, price }];
  });

  if (!items.length) {
    return NextResponse.json({ error: "Add at least one line with a description, quantity, and price." }, { status: 400 });
  }

  const mailer = getMailer();
  if (!mailer) return NextResponse.json({ error: "Email is not set up yet." }, { status: 503 });

  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const issued = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const rows = items
    .map(
      (item, index) => `<tr>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#737373">${index + 1}</td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111">${escapeHtml(item.description)}</td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right">${item.qty}</td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right">${escapeHtml(money(item.price, currency))}</td>
        <td style="padding:12px 0 12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right">${escapeHtml(money(item.qty * item.price, currency))}</td>
      </tr>`
    )
    .join("");

  const bodyHtml = `
    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#E10600">Quotation ${escapeHtml(quoteNo)}</p>
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#333">Prepared for <strong>${escapeHtml(clientName)}</strong>${service ? ` · ${escapeHtml(service)}` : ""}.</p>
    <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap">${escapeHtml(serviceDetail)}</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:18px">
      <tr>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#555;padding-bottom:4px">Issued ${escapeHtml(issued)}</td>
        <td style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#555;text-align:right;padding-bottom:4px">${validUntil ? `Valid until ${escapeHtml(validUntil)}` : ""}</td>
      </tr>
      ${clientPhone ? `<tr><td colspan="2" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#555">Contact ${escapeHtml(clientPhone)}</td></tr>` : ""}
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      <tr>
        <th style="padding:8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:left;color:#111">#</th>
        <th style="padding:8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:left;color:#111">Description</th>
        <th style="padding:8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:right;color:#111">Qty</th>
        <th style="padding:8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:right;color:#111">Price</th>
        <th style="padding:8px 0 8px 8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:right;color:#111">Amount</th>
      </tr>
      ${rows}
    </table>
    <p style="margin:16px 0 0;text-align:right;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;color:#111">Total ${escapeHtml(money(total, currency))}</p>
    ${notes ? `<p style="margin:22px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#333;white-space:pre-wrap"><strong>Notes</strong><br>${escapeHtml(notes)}</p>` : ""}
    <p style="margin:22px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#555">This quotation is issued by Bravioniyx Technologies. Reply to this email to accept it or to ask for a change.</p>
  `;

  const text = [
    `Quotation ${quoteNo}`,
    `Prepared for ${clientName}`,
    service && `Service: ${service}`,
    serviceDetail && serviceDetail,
    `Issued ${issued}`,
    validUntil && `Valid until ${validUntil}`,
    clientPhone && `Contact ${clientPhone}`,
    "",
    ...items.map((item, index) => `${index + 1}. ${item.description} — ${item.qty} x ${money(item.price, currency)} = ${money(item.qty * item.price, currency)}`),
    "",
    `Total ${money(total, currency)}`,
    notes && `Notes: ${notes}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await mailer.transporter.sendMail({
      from: `Bravioniyx Technologies <${mailer.user}>`,
      to: clientEmail,
      bcc: clientEmail.toLowerCase() === mailer.inbox.toLowerCase() ? undefined : mailer.inbox,
      replyTo: mailer.user,
      subject: `Quotation ${quoteNo} — Bravioniyx Technologies`,
      text,
      html: brandedEmail("Quotation", bodyHtml),
      attachments: [logoAttachment],
    });
  } catch {
    return NextResponse.json({ error: "The quotation could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, total });
}
