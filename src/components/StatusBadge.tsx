"use client";

import { useEffect, useState } from "react";

type Status = {
  ok: boolean;
  timestamp: string;
  uptimeSeconds: number;
  message: string;
};

export default function StatusBadge() {
  const [status, setStatus] = useState<Status | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        const response = await fetch("/api/status", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`Status ${response.status}`);
        }
        const data = (await response.json()) as Status;
        if (active) {
          setStatus(data);
          setError(null);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      }
    };

    load();
    const id = setInterval(load, 10000);

    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  if (error) {
    return (
      <span className="rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-red-200">
        Status error
      </span>
    );
  }

  if (!status) {
    return (
      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
        Checking
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
      Live {new Date(status.timestamp).toLocaleTimeString()}
    </span>
  );
}
