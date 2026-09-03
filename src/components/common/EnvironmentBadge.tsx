"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, Server } from "lucide-react";

export default function EnvironmentBadge() {
  const [env, setEnv] = useState<string>("local");

  useEffect(() => {
    const current = process.env.NEXT_PUBLIC_APP_ENV || "local";
    setEnv(current);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {env === "local" ? (
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] font-bold text-xs uppercase tracking-wider"
          title="Running in Local Fail-Safe Demo Mode: Zero paid APIs required. Full curated datasets & deterministic heuristics enabled."
        >
          <span className="w-2 h-2 rounded-full bg-[#121212] animate-pulse" />
          <span>ENV: LOCAL DEMO (100% RELIABLE)</span>
        </div>
      ) : (
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1040C0] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] font-bold text-xs uppercase tracking-wider"
          title="Running in Production Mode: Live Supabase database, live Clerk auth, live blockchain RPCs."
        >
          <Server className="w-3.5 h-3.5" />
          <span>ENV: PRODUCTION</span>
        </div>
      )}
    </div>
  );
}
