import path from "path";

export const rootDir = process.cwd();
export const dataDir = path.join(rootDir, "data", "outreach");
export const productPath = path.join(dataDir, "product.md");
export const targetPath = path.join(dataDir, "target.md");
export const leadsCsvPath = path.join(dataDir, "leads.csv");
export const openoutreachDataDir = path.resolve(
  process.env.OPENOUTREACH_DATA_DIR || path.join(dataDir, "openoutreach")
);
export const openoutreachEnvFile = path.resolve(
  process.env.OPENOUTREACH_ENV_FILE || path.join(dataDir, "openoutreach.env")
);
