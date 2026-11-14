import { spawn } from "child_process";
import fs from "fs/promises";
import path from "path";
import {
  leadsCsvPath,
  openoutreachDataDir,
  openoutreachEnvFile,
  productPath,
  targetPath,
} from "./paths";

const IMAGE = process.env.OPENOUTREACH_IMAGE || "ghcr.io/eracle/openoutreach:latest";
const RUNTIME = (process.env.OPENOUTREACH_RUNTIME || "docker").toLowerCase();

export type RunResult = {
  ok: boolean;
  code: number | null;
  stdout: string;
  stderr: string;
  command: string;
};

async function ensureDirs() {
  await fs.mkdir(openoutreachDataDir, { recursive: true });
  try {
    await fs.access(openoutreachEnvFile);
  } catch {
    await fs.writeFile(
      openoutreachEnvFile,
      [
        "# Fill before find/send with emails — https://github.com/eracle/OpenOutreach",
        "# OPENOUTFIND_LLM_API_KEY=",
        "# OPENOUTFIND_BETTERCONTACT_API_KEY=",
        "# OUTSEND_SMTP_HOST=",
        "# OUTSEND_SMTP_USER=",
        "# OUTSEND_SMTP_PASSWORD=",
        "",
      ].join("\n"),
      "utf8"
    );
  }
}

function run(cmd: string, args: string[], timeoutMs = 10 * 60 * 1000): Promise<RunResult> {
  return new Promise((resolve) => {
    const child = spawn(cmd, args, { windowsHide: true, env: process.env });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      child.kill();
      resolve({
        ok: false,
        code: null,
        stdout,
        stderr: stderr + "\nTimed out.",
        command: [cmd, ...args].join(" "),
      });
    }, timeoutMs);

    child.stdout.on("data", (d) => {
      stdout += d.toString();
    });
    child.stderr.on("data", (d) => {
      stderr += d.toString();
    });
    child.on("error", (err) => {
      clearTimeout(timer);
      resolve({
        ok: false,
        code: null,
        stdout,
        stderr: err.message,
        command: [cmd, ...args].join(" "),
      });
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({ ok: code === 0, code, stdout, stderr, command: [cmd, ...args].join(" ") });
    });
  });
}

async function dockerArgs(verbArgs: string[]) {
  await ensureDirs();
  const args = [
    "run",
    "--rm",
    "-v",
    `${openoutreachDataDir}:/app/data`,
    "-v",
    `${productPath}:/app/product.md:ro`,
    "-v",
    `${targetPath}:/app/target.md:ro`,
  ];
  try {
    await fs.access(openoutreachEnvFile);
    args.push("--env-file", openoutreachEnvFile);
  } catch {
    /* optional */
  }
  args.push(IMAGE, ...verbArgs);
  return args;
}

export async function checkDocker(): Promise<boolean> {
  const r = await run("docker", ["version", "--format", "{{.Server.Version}}"], 15_000);
  return r.ok;
}

export async function openOutreachStatus(): Promise<RunResult> {
  if (RUNTIME === "cli") return run("openoutreach", ["status"]);
  const args = await dockerArgs(["openoutreach", "status"]);
  return run("docker", args, 60_000);
}

export async function openOutreachFind(count: number, withEmails: boolean): Promise<RunResult> {
  const n = Math.max(1, Math.min(50, Math.floor(count) || 5));
  const verb = withEmails ? [String(n), "emails"] : [String(n)];

  let result: RunResult;
  if (RUNTIME === "cli") {
    result = await run("openoutreach", ["find", ...verb], 15 * 60 * 1000);
  } else {
    const args = await dockerArgs(verb);
    result = await run("docker", args, 15 * 60 * 1000);
  }

  if (result.stdout.trim()) {
    await fs.mkdir(path.dirname(leadsCsvPath), { recursive: true });
    await fs.writeFile(leadsCsvPath, result.stdout, "utf8");
  }
  return result;
}

export async function readLeadsCsv(): Promise<string> {
  try {
    return await fs.readFile(leadsCsvPath, "utf8");
  } catch {
    return "";
  }
}

export function parseLeadsCsv(csv: string) {
  const lines = csv
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) return { headers: [] as string[], rows: [] as Record<string, string>[] };

  const headers = splitCsvLine(lines[0]);
  const rows = lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((h, i) => {
      row[h] = cells[i] ?? "";
    });
    return row;
  });
  return { headers, rows };
}

function splitCsvLine(line: string) {
  const out: string[] = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i++;
      } else inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      out.push(cur);
      cur = "";
    } else cur += ch;
  }
  out.push(cur);
  return out;
}

export async function readConfigFiles() {
  const [product, target] = await Promise.all([
    fs.readFile(productPath, "utf8"),
    fs.readFile(targetPath, "utf8"),
  ]);
  return { product, target };
}

export async function writeConfigFiles(product: string, target: string) {
  await fs.mkdir(path.dirname(productPath), { recursive: true });
  await fs.writeFile(productPath, product, "utf8");
  await fs.writeFile(targetPath, target, "utf8");
}
