import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { getDb, LEADS } from "@/lib/db";

export type PromoEntry = {
  email: string;
  name: string;
  source: string;
  service: string;
  page: string;
  savedAt: string;
};

const filePath = path.join(process.cwd(), "data", "promo-emails.json");

async function readList() {
  try {
    const parsed = JSON.parse(await readFile(filePath, "utf8")) as unknown;
    if (!Array.isArray(parsed)) return [];
    return (parsed as PromoEntry[]).map((item) => ({ ...item, page: item.page || "" }));
  } catch {
    return [];
  }
}

async function readMongo(): Promise<PromoEntry[]> {
  try {
    const db = await getDb();
    if (!db) return [];
    const docs = await db.collection(LEADS).find({}).sort({ savedAt: -1 }).limit(500).toArray();
    return docs.flatMap((doc) => {
      const email = String(doc.email ?? "");
      if (!email) return [];
      return [{
        email,
        name: String(doc.name ?? ""),
        source: String(doc.source ?? ""),
        service: String(doc.service ?? ""),
        page: String(doc.page ?? ""),
        savedAt: String(doc.savedAt ?? ""),
      }];
    });
  } catch {
    return [];
  }
}

export async function listPromoEmails() {
  const [file, remote] = await Promise.all([readList(), readMongo()]);
  const merged = new Map<string, PromoEntry>();
  for (const item of file) merged.set(item.email, item);
  for (const item of remote) {
    const existing = merged.get(item.email);
    merged.set(item.email, existing ? { ...existing, ...item } : item);
  }
  return [...merged.values()].sort((a, b) => (a.savedAt < b.savedAt ? 1 : -1));
}

export async function savePromoEmail(entry: Omit<PromoEntry, "savedAt">) {
  const email = entry.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

  const list = await readList();
  const current = list.find((item) => item.email === email);
  const savedAt = new Date().toISOString();
  const page = entry.page || entry.source;
  if (current) {
    current.name = entry.name || current.name;
    current.source = entry.source || current.source;
    current.service = entry.service || current.service;
    current.page = page || current.page;
    current.savedAt = savedAt;
  } else {
    list.push({
      email,
      name: entry.name,
      source: entry.source,
      service: entry.service,
      page,
      savedAt,
    });
  }

  try {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(list, null, 2));
  } catch {
    // Live hosting may not allow a local file. MongoDB is the shared copy.
  }

  const db = await getDb();
  if (!db) return;
  await db.collection(LEADS).updateOne(
    { email },
    {
      $set: {
        email,
        name: entry.name,
        source: entry.source,
        service: entry.service,
        page,
        savedAt,
        origin: "website",
      },
    },
    { upsert: true },
  );
}
