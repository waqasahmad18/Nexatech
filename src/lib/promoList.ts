import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export type PromoEntry = {
  email: string;
  name: string;
  source: string;
  service: string;
  savedAt: string;
};

const filePath = path.join(process.cwd(), "data", "promo-emails.json");

async function readList() {
  try {
    const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
    return Array.isArray(parsed) ? (parsed as PromoEntry[]) : [];
  } catch {
    return [];
  }
}

export async function listPromoEmails() {
  const list = await readList();
  return list.sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1));
}

export async function savePromoEmail(entry: Omit<PromoEntry, "savedAt">) {
  const email = entry.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  const list = await readList();
  const current = list.find((item) => item.email === email);
  const savedAt = new Date().toISOString();
  if (current) {
    current.name = entry.name || current.name;
    current.source = entry.source || current.source;
    current.service = entry.service || current.service;
    current.savedAt = savedAt;
  } else {
    list.push({
      email,
      name: entry.name,
      source: entry.source,
      service: entry.service,
      savedAt,
    });
  }

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(list, null, 2));
}
