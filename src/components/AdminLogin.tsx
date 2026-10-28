"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error || "Those details do not match.");
        return;
      }
      router.push("/quote");
      router.refresh();
    } catch {
      setError("Sign-in could not be completed.");
    } finally {
      setPending(false);
    }
  };

  const field = "mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-black";

  return (
    <form onSubmit={onSubmit} className="border border-neutral-300 bg-white text-neutral-950">
      <div className="border-b border-neutral-200 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E10600]">Admin</p>
        <h2 className="mt-1 text-xl font-semibold tracking-tight">Sign in</h2>
      </div>
      <div className="grid gap-4 p-5">
        <label className="block text-xs font-medium">
          Email
          <input required type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} className={field} />
        </label>
        <label className="block text-xs font-medium">
          Password
          <input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className={field} />
        </label>
        {error ? <p className="text-sm text-[#E10600]">{error}</p> : null}
        <button type="submit" disabled={pending} className="bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-[#E10600] disabled:opacity-60">
          {pending ? "Signing in…" : "Sign in"}
        </button>
      </div>
    </form>
  );
}
