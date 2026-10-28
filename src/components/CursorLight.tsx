"use client";

import { useEffect, useRef } from "react";

export default function CursorLight() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let x = -300;
    let y = -300;
    let gx = x;
    let gy = y;
    let rx = x;
    let ry = y;
    let frame = 0;
    let shown = false;

    const place = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${gx}px, ${gy}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      gx += (x - gx) * 0.18;
      gy += (y - gy) * 0.18;
      rx += (x - rx) * 0.28;
      ry += (y - ry) * 0.28;
      place();
      const still = Math.abs(x - gx) < 0.4 && Math.abs(y - gy) < 0.4;
      frame = still ? 0 : requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!shown) {
        shown = true;
        if (glowRef.current) glowRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block" aria-hidden>
      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-36 w-36 rounded-full opacity-0 will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.08) 42%, rgba(255,255,255,0) 72%)",
          mixBlendMode: "normal",
        }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-7 w-7 rounded-full border border-white/70 opacity-0 will-change-transform"
        style={{ boxShadow: "0 0 12px 2px rgba(255,255,255,0.35)" }}
      />
    </div>
  );
}
