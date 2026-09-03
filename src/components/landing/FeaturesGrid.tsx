"use client";

import React from "react";
import { GitBranch, Shield, Zap, Terminal, FileCheck, Smartphone } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      id: "f1",
      title: "Bi-Directional VASP Attribution",
      tag: "PS 26182 CORE",
      description:
        "Traces both UPSTREAM (originating withdrawal hot wallet) and DOWNSTREAM (terminal cash-out deposit), calculating shortest topological distance & confidence score.",
      color: "#D02020",
      shape: "circle",
      icon: GitBranch,
    },
    {
      id: "f2",
      title: "Heuristic A: UTXO Peeling Chains",
      tag: "DETERMINISTIC MATH",
      description:
        "Automatically identifies Bitcoin peeling chains when output ratio >= 0.85, distinguishing between criminal change addresses and peeled cash-out spends.",
      color: "#1040C0",
      shape: "square",
      icon: Zap,
    },
    {
      id: "f3",
      title: "Heuristic B: Fan-Out Smurfing",
      tag: "AML EVASION RADAR",
      description:
        "Computes Coefficient of Variation (CV = σ / μ). Flags high-confidence structured smurfing when CV < 0.50 and split count N >= 3 with Risk Score 85+.",
      color: "#F0C020",
      shape: "triangle",
      icon: Shield,
    },
    {
      id: "f4",
      title: "5-Agent Autonomous Swarm",
      tag: "AI STATE MACHINE",
      description:
        "Agents Alpha through Epsilon autonomously ingest, pathfind, evaluate typologies, attribute exchanges, and lock legal proof via real-time telemetry.",
      color: "#121212",
      shape: "circle",
      icon: Terminal,
    },
    {
      id: "f5",
      title: "Section 94 BNSS Legal Studio",
      tag: "INDIAN JURISPRUDENCE",
      description:
        "Generates formal statutory freezing notices under Section 94 BNSS 2023 / Section 91 CrPC with cryptographic Section 63 BSA SHA-256 evidence seals.",
      color: "#D02020",
      shape: "square",
      icon: FileCheck,
    },
    {
      id: "f6",
      title: "Field Interceptor Mobile PWA",
      tag: "TACTICAL FIRST RESPONDER",
      description:
        "Equips raiding officers and beat cops with camera QR/OCR wallet capture, 15-second 1930 intake, and GPS-tagged Section 63 BSA digital seizure memos.",
      color: "#1040C0",
      shape: "triangle",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F0F0F0] border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-[#D02020] border border-black" />
            <span className="w-4 h-4 bg-[#1040C0] border border-black" />
            <span className="w-4 h-4 clip-triangle bg-[#F0C020] border border-black" />
            <span className="text-xs font-black uppercase tracking-widest text-[#121212]">
              CONSTRUCTIVIST ARCHITECTURE
            </span>
          </div>
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.9]">
            ENGINEERED FOR NATIONAL CYBER CRIME ENFORCEMENT
          </h2>
          <p className="font-medium text-lg text-gray-700 leading-relaxed">
            Every heuristic, algorithm, and legal notice was designed from ground up to solve the real operational bottleneck of cyber crime investigations in India under MHA / I4C.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform relative group"
              >
                {/* Geometric Corner Decoration */}
                <div className="absolute top-4 right-4">
                  {f.shape === "circle" && (
                    <div className="w-4 h-4 rounded-full border-2 border-black" style={{ backgroundColor: f.color }} />
                  )}
                  {f.shape === "square" && (
                    <div className="w-4 h-4 rounded-none border-2 border-black" style={{ backgroundColor: f.color }} />
                  )}
                  {f.shape === "triangle" && (
                    <div className="w-4 h-4 clip-triangle border-2 border-black" style={{ backgroundColor: f.color }} />
                  )}
                </div>

                <div className="space-y-4">
                  <span className="inline-block bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                    {f.tag}
                  </span>
                  <div className="w-12 h-12 border-2 border-[#121212] flex items-center justify-center bg-[#F0F0F0] shadow-[3px_3px_0px_0px_#121212]">
                    <Icon className="w-6 h-6 text-[#121212]" />
                  </div>
                  <h3 className="font-black text-2xl uppercase tracking-tight text-[#121212]">
                    {f.title}
                  </h3>
                  <p className="font-medium text-sm text-gray-700 leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t-2 border-[#121212] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-600">
                  <span>MHA / I4C STANDARD</span>
                  <span className="font-black text-[#121212]">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
