"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Sparkles, X, Bot } from "lucide-react";

interface CopilotProps {
  isOpen: boolean;
  onClose: () => void;
  caseContext?: Record<string, unknown>;
}

export default function ForensicCopilotDrawer({
  isOpen,
  onClose,
  caseContext,
}: CopilotProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        "Namaste Inspector. I am **TRINETRA Forensic Copilot**. I can summarize laundering flows, cite Section 94 BNSS / Section 91 CrPC jurisprudence, evaluate heuristics, or retrieve VASP nodal details. How may I assist your investigation?",
    },
  ]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg = { role: "user" as const, content: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, context: caseContext }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "No response received." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error communicating with forensic copilot." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPills = [
    "Where did the funds go?",
    "Draft Section 94 BNSS Notice",
    "Explain Heuristic B Smurfing",
  ];

  return (
    <aside className="fixed inset-y-0 right-0 w-full sm:w-[440px] bg-white border-l-4 border-[#121212] shadow-[-8px_0px_0px_0px_#121212] z-50 flex flex-col justify-between">
      {/* Header */}
      <div className="p-4 bg-[#1040C0] text-white border-b-4 border-[#121212] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-[#F0C020]" />
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider">TRINETRA AI COPILOT</h3>
            <p className="text-[10px] text-gray-200">OpenAI / OpenRouter Universal Compatible</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1 hover:bg-white/20">
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 flex-1 overflow-y-auto space-y-4 text-xs font-sans bg-[#F0F0F0]">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3.5 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] ${
              m.role === "assistant"
                ? "bg-white text-[#121212]"
                : "bg-[#F0C020] text-[#121212] font-bold"
            }`}
          >
            <p className="text-[10px] font-black uppercase text-gray-500 mb-1">
              {m.role === "assistant" ? "TRINETRA FORENSIC AI" : "INVESTIGATING OFFICER"}
            </p>
            <div className="whitespace-pre-wrap leading-relaxed">{m.content}</div>
          </div>
        ))}
        {loading && (
          <div className="p-3 bg-white border-2 border-[#121212] text-xs font-bold italic animate-pulse">
            Analyzing graph state & synthesizing response...
          </div>
        )}
      </div>

      {/* Quick Pills & Input */}
      <div className="p-4 bg-white border-t-4 border-[#121212] space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {quickPills.map((pill, i) => (
            <button
              key={i}
              onClick={() => handleSend(pill)}
              className="text-[10px] font-bold uppercase px-2 py-1 bg-[#F0F0F0] border border-[#121212] hover:bg-gray-200 transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask forensic or legal query in English/Hindi..."
            className="flex-1 px-3 py-2 border-2 border-[#121212] font-medium text-xs focus:outline-none focus:bg-[#FFF9C4]"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading}
            className="px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] font-black shadow-[2px_2px_0px_0px_#121212] hover:bg-[#b01a1a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
