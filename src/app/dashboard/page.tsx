"use client";

import React, { useState, useEffect } from "react";
import AppHeader from "@/components/common/AppHeader";
import ForensicGraphCanvas from "@/components/canvas/ForensicGraphCanvas";
import NodeInspectorDrawer from "@/components/inspector/NodeInspectorDrawer";
import SwarmTelemetryTerminal from "@/components/swarm/SwarmTelemetryTerminal";
import Section94NoticeModal from "@/components/legal/Section94NoticeModal";
import ForensicCopilotDrawer from "@/components/copilot/ForensicCopilotDrawer";
import { PRESET_CASES, PresetCase } from "@/lib/providers/presetScams";
import { ForensicNode, ForensicEdge, AnalysisSummary } from "@/types/forensics";
import { AgentTelemetryEvent } from "@/types/swarm";
import { Play, Zap, Bot, FileText, RefreshCw, Search, ShieldCheck } from "lucide-react";

export default function DashboardPage() {
  const [activePresetId, setActivePresetId] = useState("case-digital-arrest-45l");
  const [customAddress, setCustomAddress] = useState("");
  const [currentNodes, setCurrentNodes] = useState<ForensicNode[]>([]);
  const [currentEdges, setCurrentEdges] = useState<ForensicEdge[]>([]);
  const [currentSummary, setCurrentSummary] = useState<AnalysisSummary | null>(null);
  const [selectedNode, setSelectedNode] = useState<ForensicNode | null>(null);

  const [telemetryEvents, setTelemetryEvents] = useState<AgentTelemetryEvent[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  // Load preset data on mount or change
  useEffect(() => {
    const preset = PRESET_CASES.find((p) => p.id === activePresetId) || PRESET_CASES[0];
    setCurrentNodes(preset.nodes);
    setCurrentEdges(preset.edges);
    setCurrentSummary(preset.summary);
    setSelectedNode(preset.nodes[preset.nodes.length - 1]); // Select terminal VASP by default
  }, [activePresetId]);

  // Run Swarm (SSE Stream)
  const handleRunSwarm = async () => {
    setIsStreaming(true);
    setTelemetryEvents([]);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ presetId: activePresetId, mode: "live" }),
      });

      if (!response.body) return;
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        const lines = text.split("\n\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const parsed = JSON.parse(line.replace("data: ", ""));
              if (parsed.type === "EVENT") {
                setTelemetryEvents((prev) => [...prev, parsed.event]);
              } else if (parsed.type === "COMPLETE") {
                setCurrentSummary(parsed.summary);
                setCurrentNodes(parsed.nodes);
                setCurrentEdges(parsed.edges);
              }
            } catch {
              // ignore malformed SSE chunks
            }
          }
        }
      }
    } catch {
      // fallback
    } finally {
      setIsStreaming(false);
    }
  };

  // Run Turbo (Sub-3s Instant Resolution)
  const handleRunTurbo = async () => {
    setIsStreaming(true);
    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ presetId: activePresetId, mode: "turbo" }),
      });
      const data = await res.json();
      if (data.events) {
        setTelemetryEvents(data.events);
      }
      if (data.preset) {
        setCurrentNodes(data.preset.nodes);
        setCurrentEdges(data.preset.edges);
        setCurrentSummary(data.preset.summary);
      }
    } catch {
      // fallback
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <AppHeader />

      {/* Tactical Action Bar */}
      <div className="bg-white border-b-4 border-[#121212] p-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* Preset Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-[#121212]">
              CYBER SCAM PRESET:
            </span>
            <select
              value={activePresetId}
              onChange={(e) => setActivePresetId(e.target.value)}
              className="px-3 py-1.5 bg-[#F0F0F0] border-2 border-[#121212] text-xs font-bold uppercase focus:outline-none"
            >
              {PRESET_CASES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} (₹{(p.lossInr / 100000).toFixed(1)}L)
                </option>
              ))}
            </select>
          </div>

          {/* Quick Custom Input */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Ingest Suspect Address (Tron/BTC/EVM)..."
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                className="w-full px-3 py-1.5 border-2 border-[#121212] font-mono text-xs focus:outline-none focus:bg-[#FFF9C4]"
              />
              <Search className="w-3.5 h-3.5 absolute right-2.5 top-2.5 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Swarm Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRunTurbo}
              disabled={isStreaming}
              className="px-3.5 py-1.5 bg-[#121212] text-white border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#121212] hover:bg-gray-800 flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
              title="Instant sub-3.0s deterministic heuristic pathfinding"
            >
              <Zap className="w-3.5 h-3.5 text-[#F0C020]" />
              <span>TURBO (&lt;3S)</span>
            </button>

            <button
              onClick={handleRunSwarm}
              disabled={isStreaming}
              className="px-3.5 py-1.5 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#121212] hover:bg-[#b01a1a] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
            >
              {isStreaming ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current" />
              )}
              <span>{isStreaming ? "SWARM THINKING..." : "STREAM SWARM"}</span>
            </button>

            <button
              onClick={() => setIsCopilotOpen(true)}
              className="px-3.5 py-1.5 bg-[#1040C0] text-white border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#121212] hover:bg-[#0d349e] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Bot className="w-3.5 h-3.5 text-[#F0C020]" />
              <span>AI COPILOT</span>
            </button>

            <button
              onClick={() => setIsNoticeModalOpen(true)}
              className="px-3.5 py-1.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#121212] hover:bg-[#d9ad1a] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>FREEZE NOTICE</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Forensic Canvas & Drawer Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden min-h-[550px]">
        <div className="flex-1 relative">
          <ForensicGraphCanvas
            nodes={currentNodes}
            edges={currentEdges}
            onNodeSelect={(node) => setSelectedNode(node)}
          />
        </div>

        {/* Slide-over Node Inspector */}
        {selectedNode && (
          <NodeInspectorDrawer
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
            onOpenNoticeModal={() => setIsNoticeModalOpen(true)}
          />
        )}
      </div>

      {/* Bottom Swarm Telemetry Terminal */}
      <SwarmTelemetryTerminal events={telemetryEvents} isStreaming={isStreaming} />

      {/* Court Notice Modal */}
      {currentSummary && (
        <Section94NoticeModal
          isOpen={isNoticeModalOpen}
          onClose={() => setIsNoticeModalOpen(false)}
          summary={currentSummary}
        />
      )}

      {/* Universal AI Copilot */}
      <ForensicCopilotDrawer
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        caseContext={currentSummary as unknown as Record<string, unknown>}
      />
    </div>
  );
}
