"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, Zap, Sparkles } from "lucide-react";

export default function SwarmTelemetryShowcase() {
  const [logs, setLogs] = useState<
    Array<{ id: string; agent: string; color: string; message: string; time: string }>
  >([]);

  useEffect(() => {
    const rawEvents = [
      {
        id: "1",
        agent: "AGENT ALPHA",
        color: "#D02020",
        message: "Ingested Tron Base58 seed address: TX9vKb8QzL90... Checksum verified.",
        time: "14:12:01.042",
      },
      {
        id: "2",
        agent: "AGENT BETA",
        color: "#1040C0",
        message: "Recursive walker spawned. Following outbound TRC-20 USDT transfer (51,724 USDT).",
        time: "14:12:01.380",
      },
      {
        id: "3",
        agent: "AGENT GAMMA",
        color: "#F0C020",
        message: "Heuristic A Triggered: Peeling chain confirmed (88.4% retained change).",
        time: "14:12:01.710",
      },
      {
        id: "4",
        agent: "AGENT GAMMA",
        color: "#F0C020",
        message: "Heuristic B Triggered: Fan-out smurfing detected across 3 tranches (CV: 0.18 < 0.50).",
        time: "14:12:02.120",
      },
      {
        id: "5",
        agent: "AGENT DELTA",
        color: "#1040C0",
        message: "TARGET VASP ACQUIRED: CoinDCX Deposit Gateway matched. Halt signal issued.",
        time: "14:12:02.480",
      },
      {
        id: "6",
        agent: "AGENT EPSILON",
        color: "#121212",
        message: "SHA-256 evidence seal computed: c8f391b4a029... Section 94 BNSS notice drafted.",
        time: "14:12:02.890",
      },
    ];

    let cur = 0;
    const interval = setInterval(() => {
      if (cur < rawEvents.length) {
        const item = rawEvents[cur];
        setLogs((prev) => [...prev, item]);
        cur++;
      } else {
        clearInterval(interval);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#121212] text-white border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="bg-[#D02020] text-white text-xs font-black px-2.5 py-1 uppercase tracking-widest">
            REAL-TIME AGENT TELEMETRY (SSE)
          </span>
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-[0.9]">
            WATCH THE 5-AGENT SWARM REASON LIVE
          </h2>
          <p className="font-medium text-base sm:text-lg text-gray-300 leading-relaxed">
            Unlike static query tools, TRINETRA deploys a reactive state machine. When an investigation starts, Agents Alpha through Epsilon stream their internal thought logs, pruned dead-ends, and risk classifications via Server-Sent Events in real time.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 bg-white text-[#121212] border-2 border-white font-black text-xs uppercase">
              ALPHA: Triage
            </span>
            <span className="px-3 py-1 bg-[#1040C0] text-white border-2 border-white font-black text-xs uppercase">
              BETA: Pathfinding
            </span>
            <span className="px-3 py-1 bg-[#F0C020] text-[#121212] border-2 border-white font-black text-xs uppercase">
              GAMMA: Heuristics
            </span>
            <span className="px-3 py-1 bg-[#D02020] text-white border-2 border-white font-black text-xs uppercase">
              DELTA: VASP Target
            </span>
            <span className="px-3 py-1 bg-gray-800 text-white border-2 border-white font-black text-xs uppercase">
              EPSILON: Legal Proof
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#1e1e1e] border-4 border-white shadow-[10px_10px_0px_0px_#F0C020] p-4 sm:p-6 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b-2 border-gray-700 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D02020]" />
              <span className="w-3 h-3 rounded-full bg-[#F0C020]" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400 font-bold ml-2">TRINETRA_SWARM_ORCHESTRATOR.LOG</span>
            </div>
            <span className="text-[#F0C020] font-bold">STREAM: 100% LIVE</span>
          </div>

          <div className="space-y-3 min-h-[280px] overflow-y-auto">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-3 animate-fadeIn">
                <span className="text-gray-500 select-none">[{log.time}]</span>
                <span
                  className="font-black px-1.5 py-0.2 border border-black text-[10px]"
                  style={{
                    backgroundColor: log.color,
                    color: log.color === "#F0C020" ? "#121212" : "#ffffff",
                  }}
                >
                  {log.agent}
                </span>
                <span className="text-gray-200 flex-1 leading-relaxed">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
