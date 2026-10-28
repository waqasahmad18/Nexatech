import { NextRequest, NextResponse } from "next/server";
import { brandedEmail, deliveryOptions, escapeHtml, getMailer, logoAttachment } from "@/lib/mail";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/adminAuth";

type ServiceItem = { name: string; detail: string; qty: number; price: number };

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
  const validUntil = clean(fields.validUntil, 40);
  const notes = clean(fields.notes, 2000);
  const currency = clean(fields.currency, 8) || "PKR";

  if (!clientName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
    return NextResponse.json({ error: "Client name and a valid email are required." }, { status: 400 });
  }

  const rawServices = Array.isArray(fields.services) ? fields.services : [];
  const services: ServiceItem[] = rawServices.slice(0, 20).flatMap((item) => {
    const row = (item ?? {}) as Record<string, unknown>;
    const name = clean(row.name, 160);
    const detail = clean(row.detail, 2000);
    const qty = Number(row.qty);
    const price = Number(row.price);
    if (!name || detail.length < 8 || !Number.isFinite(qty) || qty <= 0 || !Number.isFinite(price) || price < 0) return [];
    return [{ name, detail, qty, price }];
  });

  if (!services.length || services.length !== rawServices.length) {
    return NextResponse.json({ error: "Each service needs a name, a short detail, a quantity, and a price." }, { status: 400 });
  }

  const mailer = getMailer();
  if (!mailer) return NextResponse.json({ error: "Email is not set up yet." }, { status: 503 });

  const total = services.reduce((sum, item) => sum + item.qty * item.price, 0);
  const issued = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  const rows = services
    .map(
      (item, index) => `<tr>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#737373;vertical-align:top">${index + 1}</td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;vertical-align:top"><strong>${escapeHtml(item.name)}</strong><br><span style="color:#444">${escapeHtml(item.detail)}</span></td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right;vertical-align:top">${item.qty}</td>
        <td style="padding:12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right;vertical-align:top">${escapeHtml(money(item.price, currency))}</td>
        <td style="padding:12px 0 12px 8px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;text-align:right;vertical-align:top">${escapeHtml(money(item.qty * item.price, currency))}</td>
      </tr>`
    )
    .join("");

  const bodyHtml = `
    <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#E10600">Quotation ${escapeHtml(quoteNo)}</p>
    <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#333">Hello ${escapeHtml(clientName)}, this quotation is for the services below.</p>
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
        <th style="padding:8px;border-bottom:2px solid #111;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;text-align:left;color:#111">Service</th>
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
    `Hello ${clientName},`,
    "",
    `Quotation ${quoteNo} from Bravioniyx Technologies.`,
    `Issued ${issued}`,
    validUntil ? `Valid until ${validUntil}` : "",
    clientPhone ? `Contact ${clientPhone}` : "",
    "",
    ...services.map((item, index) => `${index + 1}. ${item.name}\n${item.detail}\n${item.qty} x ${money(item.price, currency)} = ${money(item.qty * item.price, currency)}`),
    "",
    `Total ${money(total, currency)}`,
    notes ? `Notes: ${notes}` : "",
    "",
    "Reply to this email if you want to accept the quotation or change it.",
  ].join("\n");

  const bcc = clientEmail.toLowerCase() === mailer.inbox.toLowerCase() ? undefined : mailer.inbox;

  try {
    await mailer.transporter.sendMail({
      ...deliveryOptions(mailer.user, clientEmail, bcc),
      to: clientEmail,
      bcc,
      subject: `Quotation ${quoteNo} for ${clientName}`,
      text,
      html: brandedEmail(`Quotation for ${clientName}`, bodyHtml),
      attachments: [logoAttachment],
    });
  } catch {
    return NextResponse.json({ error: "The quotation could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, total });
}
