import nodemailer from "nodemailer";
import path from "path";
import { brand, whatsappHref } from "@/data/site";

export const logoAttachment = {
  filename: "logo.png",
  path: path.join(process.cwd(), "public", "logo.png"),
  cid: "bravioniyx-logo",
};

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function brandedEmail(title: string, bodyHtml: string) {
  const year = new Date().getFullYear();
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f3f3">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f3f3;padding:28px 12px">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:640px;max-width:640px;background:#ffffff;border:1px solid #e6e6e6">
            <tr>
              <td style="background:#000000;padding:28px 32px 22px">
                <img src="cid:bravioniyx-logo" alt="Bravioniyx Technologies" width="240" style="display:block;width:240px;max-width:100%;height:auto;border:0" />
                <div style="width:72px;height:3px;background:#E10600;margin-top:18px;line-height:3px;font-size:0">&nbsp;</div>
                <p style="margin:14px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#ffffff">Bravioniyx Technologies</p>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;font-family:Arial,Helvetica,sans-serif;color:#111111">
                <h1 style="margin:0 0 18px;font-size:26px;line-height:1.25;font-weight:700;color:#111111">${escapeHtml(title)}</h1>
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background:#0a0a0a;padding:22px 32px;font-family:Arial,Helvetica,sans-serif">
                <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#ffffff">Bravioniyx Technologies</p>
                <p style="margin:6px 0 0;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#E10600">${escapeHtml(brand.tagline)}</p>
                <p style="margin:12px 0 0;font-size:13px;line-height:1.6;color:#cfcfcf">${escapeHtml(brand.location)}</p>
                <p style="margin:10px 0 0;font-size:13px"><a href="${whatsappHref}" style="color:#ffffff;text-decoration:none;font-weight:700">Chat on WhatsApp</a></p>
                <p style="margin:16px 0 0;font-size:11px;line-height:1.5;color:#8a8a8a">© ${year} Bravioniyx Technologies. This message was sent for a website enquiry or quotation.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function detailRows(rows: Array<[string, string]>) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
    ${rows
      .map(
        ([label, value]) => `<tr>
          <td style="width:150px;padding:11px 12px 11px 0;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#737373;vertical-align:top">${escapeHtml(label)}</td>
          <td style="padding:11px 0;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.45;color:#111111;white-space:pre-wrap">${escapeHtml(value || "—")}</td>
        </tr>`
      )
      .join("")}
  </table>`;
}

export function getMailer() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, "");
  const inbox = process.env.MAIL_TO || user;
  if (!user || !pass || !inbox) return null;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    requireTLS: true,
    auth: { user, pass },
  });

  return { user, inbox, transporter };
}
