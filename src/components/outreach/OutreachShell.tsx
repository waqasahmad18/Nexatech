"use client";

import { useEffect } from "react";

/** Forces a dark canvas on /outreach even when the site root layout is white. */
export default function OutreachShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.cssText;
    const prevBody = body.style.cssText;
    html.style.background = "#000000";
    html.style.colorScheme = "dark";
    body.style.background = "#000000";
    body.style.color = "#ffffff";
    body.style.minHeight = "100vh";
    return () => {
      html.style.cssText = prevHtml;
      body.style.cssText = prevBody;
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
      }}
    >
      {children}
    </div>
  );
}
