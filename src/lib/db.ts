import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "fast_and_slow_pos";

let client: MongoClient | null = null;
let connectPromise: Promise<MongoClient> | null = null;

export async function getDb(): Promise<Db | null> {
  if (!uri) return null;
  if (!client) {
    if (!connectPromise) {
      const next = new MongoClient(uri);
      connectPromise = next.connect().then((connected) => {
        client = connected;
        return connected;
      });
    }
    client = await connectPromise;
  }
  return client.db(dbName);
}

export const LEADS = "bx_leads";
