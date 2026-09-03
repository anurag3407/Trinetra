"use client";

import React, { useState } from "react";
import { Terminal, ChevronUp, ChevronDown, Sparkles } from "lucide-react";
import { AgentTelemetryEvent } from "@/types/swarm";

interface SwarmTelemetryTerminalProps {
  events: AgentTelemetryEvent[];
  isStreaming?: boolean;
}

export default function SwarmTelemetryTerminal({
  events,
  isStreaming,
}: SwarmTelemetryTerminalProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#121212] text-white border-t-4 border-[#121212] relative z-30">
      {/* Terminal Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 bg-[#1e1e1e] border-b-2 border-gray-800 flex items-center justify-between cursor-pointer select-none"
      >
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#F0C020]" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            SWARM TELEMETRY LOGS (AGENTS ALPHA ➔ EPSILON)
          </span>
          {isStreaming && (
            <span className="ml-2 px-2 py-0.2 bg-[#D02020] text-white text-[10px] font-black uppercase animate-pulse">
              STREAMING
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>{events.length} EVENTS RECORDED</span>
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </div>
      </div>

      {/* Terminal Body */}
      {isOpen && (
        <div className="p-4 max-h-48 overflow-y-auto font-mono text-xs space-y-2 bg-[#121212]">
          {events.length === 0 ? (
            <p className="text-gray-500 italic">Swarm state machine idle. Click &apos;Run Swarm&apos; or pick a preset.</p>
          ) : (
            events.map((ev) => (
              <div key={ev.id} className="flex items-start gap-2.5 animate-fadeIn">
                <span className="text-gray-500">[{ev.timestamp.slice(11, 19)}]</span>
                <span
                  className={`px-1.5 py-0.2 font-black text-[10px] ${
                    ev.agentId === "ALPHA"
                      ? "bg-[#D02020] text-white"
                      : ev.agentId === "BETA"
                      ? "bg-[#1040C0] text-white"
                      : ev.agentId === "GAMMA"
                      ? "bg-[#F0C020] text-[#121212]"
                      : ev.agentId === "DELTA"
                      ? "bg-green-600 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  [{ev.agentId}]
                </span>
                <span className="text-gray-300 leading-relaxed flex-1">{ev.message}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
