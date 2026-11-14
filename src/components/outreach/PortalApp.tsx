"use client";

import { useCallback, useEffect, useState } from "react";

type LeadRow = Record<string, string>;

export default function PortalApp({
  signedIn,
  websiteUrl,
}: {
  signedIn: boolean;
  websiteUrl: string;
}) {
  const [secret, setSecret] = useState("");
  const [loginError, setLoginError] = useState("");
  const [statusText, setStatusText] = useState("—");
  const [dockerOk, setDockerOk] = useState<boolean | null>(null);
  const [product, setProduct] = useState("");
  const [target, setTarget] = useState("");
  const [count, setCount] = useState(5);
  const [withEmails, setWithEmails] = useState(false);
  const [busy, setBusy] = useState(false);
  const [log, setLog] = useState("");
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const refresh = useCallback(async () => {
    const [statusRes, configRes, leadsRes] = await Promise.all([
      fetch("/api/outreach/status"),
      fetch("/api/outreach/config"),
      fetch("/api/outreach/leads"),
    ]);
    if (statusRes.ok) {
      const data = await statusRes.json();
      setDockerOk(Boolean(data.dockerOk));
      const oo = data.openOutreach;
      setStatusText(
        [oo?.stdout, oo?.stderr].filter(Boolean).join("\n").trim() ||
          (oo?.ok ? "OpenOutreach status OK" : "OpenOutreach status failed — check Docker / keys")
      );
    }
    if (configRes.ok) {
      const data = await configRes.json();
      setProduct(data.product || "");
      setTarget(data.target || "");
    }
    if (leadsRes.ok) {
      const data = await leadsRes.json();
      setHeaders(data.headers || []);
      setLeads(data.rows || []);
    }
  }, []);

  useEffect(() => {
    if (signedIn) void refresh();
  }, [signedIn, refresh]);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/outreach/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret }),
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setLoginError(data.error || "Login failed");
      return;
    }
    window.location.reload();
  };

  const logout = async () => {
    await fetch("/api/outreach/logout", { method: "POST" });
    window.location.reload();
  };

  const saveConfig = async () => {
    setBusy(true);
    setLog("Saving product + target…");
    const res = await fetch("/api/outreach/config", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product, target }),
    });
    setBusy(false);
    setLog(res.ok ? "Saved. OpenOutreach will read these on the next find (via mounted files / init)." : "Save failed");
  };

  const runFind = async () => {
    setBusy(true);
    setLog(`Running OpenOutreach find ${count}${withEmails ? " emails" : ""}…`);
    const res = await fetch("/api/outreach/find", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ count, emails: withEmails }),
    });
    const data = await res.json();
    setBusy(false);
    setLog(
      [
        data.command,
        data.stdout,
        data.stderr,
        data.ok ? "Done." : `Exit ${data.code ?? "error"}`,
      ]
        .filter(Boolean)
        .join("\n\n")
    );
    await refresh();
  };

  if (!signedIn) {
    return (
      <main
        style={{
          position: "relative",
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#000000",
          color: "#ffffff",
          padding: "24px",
        }}
      >
        <div
          aria-hidden
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 20%, rgba(225,6,0,0.28), transparent 52%), radial-gradient(ellipse at 80% 90%, rgba(225,6,0,0.1), transparent 42%)",
          }}
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "28rem",
            border: "1px solid rgba(255,255,255,0.16)",
            background: "#0a0a0a",
            padding: "2rem",
            boxShadow: "0 0 60px rgba(225,6,0,0.14)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#E10600",
            }}
          >
            Bravioniyx · OpenOutreach
          </p>
          <h1
            style={{
              margin: "12px 0 0",
              fontSize: "1.875rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Outreach Portal
          </h1>
          <p style={{ margin: "12px 0 0", fontSize: "0.875rem", lineHeight: 1.6, color: "rgba(255,255,255,0.65)" }}>
            Sign in with the portal secret to find and review B2B leads.
          </p>
          <form onSubmit={login} style={{ marginTop: "2rem", display: "grid", gap: "1rem" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
              Secret key
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="Enter secret"
                autoComplete="current-password"
                style={{
                  marginTop: "8px",
                  width: "100%",
                  boxSizing: "border-box",
                  border: "1px solid rgba(255,255,255,0.28)",
                  background: "#000000",
                  color: "#ffffff",
                  padding: "12px 16px",
                  fontSize: "0.875rem",
                  outline: "none",
                }}
              />
            </label>
            {loginError ? <p style={{ margin: 0, fontSize: "0.875rem", color: "#E10600" }}>{loginError}</p> : null}
            <button
              type="submit"
              style={{
                width: "100%",
                border: "none",
                background: "#E10600",
                color: "#ffffff",
                padding: "12px 16px",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Sign in
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#000000", color: "#ffffff" }}>
      <header className="border-b border-white/10" style={{ background: "#000000" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p
              className="text-[11px] font-semibold uppercase text-[#E10600]"
              style={{ letterSpacing: "0.16em" }}
            >
              Bravioniyx · OpenOutreach
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight" style={{ color: "#ffffff" }}>
              Outreach Portal
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {websiteUrl ? (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] hover:border-white"
              >
                Website
              </a>
            ) : null}
            <a
              href="https://github.com/eracle/OpenOutreach"
              target="_blank"
              rel="noreferrer"
              className="border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] hover:border-white"
            >
              OpenOutreach
            </a>
            <button
              type="button"
              onClick={logout}
              className="bg-[#E10600] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_1fr]">
        <section className="border border-white/10 bg-[#0a0a0a] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Engine</p>
          <h2 className="mt-2 text-xl font-semibold">OpenOutreach status</h2>
          <p className="mt-2 text-sm text-white/60">
            Docker: {dockerOk == null ? "…" : dockerOk ? "ready" : "not reachable"}
          </p>
          <pre className="mt-4 max-h-48 overflow-auto whitespace-pre-wrap border border-white/10 bg-black p-3 text-xs text-white/70">
            {statusText}
          </pre>
          <button
            type="button"
            disabled={busy}
            onClick={() => void refresh()}
            className="mt-4 border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] disabled:opacity-40"
          >
            Refresh
          </button>
        </section>

        <section className="border border-white/10 bg-[#0a0a0a] p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Find</p>
          <h2 className="mt-2 text-xl font-semibold">Run OpenOutreach find</h2>
          <p className="mt-2 text-sm text-white/60">
            Uses the real OpenOutreach image via Docker. Fill{" "}
            <code className="text-[#E10600]">data/outreach/openoutreach.env</code> with LLM / BetterContact / mailbox
            keys before email lookups.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="text-sm text-white/70">
              Count{" "}
              <input
                type="number"
                min={1}
                max={50}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="ml-2 w-20 border border-white/20 bg-black px-2 py-1"
              />
            </label>
            <label className="flex items-center gap-2 text-sm text-white/70">
              <input
                type="checkbox"
                checked={withEmails}
                onChange={(e) => setWithEmails(e.target.checked)}
              />
              With emails (uses credits)
            </label>
            <button
              type="button"
              disabled={busy}
              onClick={() => void runFind()}
              className="bg-[#E10600] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] disabled:opacity-40"
            >
              {busy ? "Running…" : "Find leads"}
            </button>
          </div>
        </section>

        <section className="border border-white/10 bg-[#0a0a0a] p-6 lg:col-span-2">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">ICP</p>
              <h2 className="mt-2 text-xl font-semibold">Product + target for OpenOutreach</h2>
            </div>
            <button
              type="button"
              disabled={busy}
              onClick={() => void saveConfig()}
              className="border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] disabled:opacity-40"
            >
              Save
            </button>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <textarea
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              rows={12}
              className="w-full border border-white/15 bg-black p-3 text-sm text-white/85 outline-none focus:border-[#E10600]"
            />
            <textarea
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              rows={12}
              className="w-full border border-white/15 bg-black p-3 text-sm text-white/85 outline-none focus:border-[#E10600]"
            />
          </div>
        </section>

        <section className="border border-white/10 bg-[#0a0a0a] p-6 lg:col-span-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Leads</p>
          <h2 className="mt-2 text-xl font-semibold">Latest OpenOutreach CSV</h2>
          {leads.length === 0 ? (
            <p className="mt-4 text-sm text-white/55">No leads file yet. Run a find.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-xs uppercase tracking-[0.14em] text-white/50">
                    {headers.slice(0, 8).map((h) => (
                      <th key={h} className="px-3 py-2 font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.slice(0, 40).map((row, i) => (
                    <tr key={i} className="border-b border-white/10">
                      {headers.slice(0, 8).map((h) => (
                        <td key={h} className="max-w-[14rem] truncate px-3 py-2 text-white/75">
                          {row[h]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {log ? (
            <pre className="mt-6 max-h-64 overflow-auto whitespace-pre-wrap border border-white/10 bg-black p-3 text-xs text-white/65">
              {log}
            </pre>
          ) : null}
        </section>
      </div>
    </main>
  );
}
