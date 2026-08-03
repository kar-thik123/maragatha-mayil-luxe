import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[image:var(--gradient-emerald)] transition-opacity duration-[900ms] ${
        done ? "opacity-0" : "opacity-100"
      }`}
      style={{ visibility: done ? "hidden" : "visible" }}
    >
      <div className="text-center">
        <div className="mx-auto size-16 rounded-full border border-ivory/20 border-t-[var(--gold)] [animation:ring-spin_1.1s_linear_infinite]" />
        <p className="mt-8 text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft/80">
          Maragatha Mayil
        </p>
      </div>
    </div>
  );
}