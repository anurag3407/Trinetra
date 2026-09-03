"use client";

import React, { useEffect, useRef } from "react";
import {
  GitBranch,
  Shield,
  Zap,
  Terminal,
  FileCheck,
  Smartphone,
  Layers,
  Database,
  Search,
  Scale,
  Cpu,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

interface FeatureItem {
  id: string;
  pillar: string;
  pillarColor: string;
  title: string;
  tag: string;
  description: string;
  metric?: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  shape: "circle" | "square" | "triangle";
  span?: string;
}

export default function FeaturesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  const features: FeatureItem[] = [
    {
      id: "f1",
      pillar: "CORE ENGINE",
      pillarColor: "#D02020",
      title: "Bi-Directional VASP Attribution",
      tag: "SIH 26182 CORE",
      description:
        "Traces both UPSTREAM (originating withdrawal hot wallet) and DOWNSTREAM (terminal cash-out deposit), calculating shortest topological graph distance and statistical confidence score.",
      metric: "< 3.0s SLA",
      icon: GitBranch,
      accentColor: "#D02020",
      shape: "circle",
      span: "lg:col-span-2",
    },
    {
      id: "f2",
      pillar: "DETERMINISTIC AML",
      pillarColor: "#1040C0",
      title: "Heuristic A: UTXO Peeling Chains",
      tag: "BITCOIN FORENSICS",
      description:
        "Automatically identifies Bitcoin peeling chains when output ratio >= 0.85, distinguishing between criminal change addresses and peeled cash-out spends without false positives.",
      metric: "Ratio ≥ 0.85",
      icon: Zap,
      accentColor: "#1040C0",
      shape: "square",
    },
    {
      id: "f3",
      pillar: "DETERMINISTIC AML",
      pillarColor: "#1040C0",
      title: "Heuristic B: Fan-Out Smurfing Radar",
      tag: "AML DISPERSION",
      description:
        "Computes Coefficient of Variation (CV = σ / μ). Flags high-confidence structured smurfing when CV < 0.50 across multi-recipient splits with Risk Score 85+.",
      metric: "CV < 0.50",
      icon: Shield,
      accentColor: "#F0C020",
      shape: "triangle",
    },
    {
      id: "f4",
      pillar: "AI ORCHESTRATION",
      pillarColor: "#121212",
      title: "5-Agent Autonomous Swarm",
      tag: "STATE MACHINE",
      description:
        "Agents Alpha through Epsilon autonomously ingest, pathfind, evaluate typologies, attribute exchanges, and lock legal proof via real-time SSE telemetry.",
      metric: "5 Reactive Agents",
      icon: Terminal,
      accentColor: "#121212",
      shape: "circle",
      span: "lg:col-span-2",
    },
    {
      id: "f5",
      pillar: "INDIAN LAW",
      pillarColor: "#D02020",
      title: "Section 94 BNSS Legal Studio",
      tag: "STATUTORY FREEZE",
      description:
        "Generates formal statutory freezing notices under Section 94 BNSS 2023 (formerly Section 91 CrPC) with direct emergency email escalation to registered exchange nodal officers.",
      metric: "24h Legal Mandate",
      icon: FileCheck,
      accentColor: "#D02020",
      shape: "square",
    },
    {
      id: "f6",
      pillar: "INDIAN LAW",
      pillarColor: "#D02020",
      title: "Section 63 BSA Cryptographic Proof",
      tag: "EVIDENCE ACT 2023",
      description:
        "Creates tamper-evident SHA-256 cryptographic certificates proving uninterrupted algorithmic chain-of-custody across all transaction hashes for direct high court admissibility.",
      metric: "SHA-256 Certified",
      icon: Lock,
      accentColor: "#1040C0",
      shape: "triangle",
    },
    {
      id: "f7",
      pillar: "TACTICAL FIELD",
      pillarColor: "#F0C020",
      title: "Field Interceptor Mobile PWA",
      tag: "BEAT COP COMPANION",
      description:
        "Equips raiding officers and beat cops with camera QR/OCR wallet capture, 15-second 1930 intake, and GPS-tagged digital seizure memos that operate completely offline.",
      metric: "15s On-Scene Intake",
      icon: Smartphone,
      accentColor: "#F0C020",
      shape: "circle",
    },
    {
      id: "f8",
      pillar: "ZERO BUDGET",
      pillarColor: "#1040C0",
      title: "Zero-Cost Public Explorer Pipeline",
      tag: "$0 RECURRING COST",
      description:
        "Replaces $50,000/yr proprietary subscriptions (Chainalysis / TRM Labs) by engineering custom algorithmic parsers atop public Blockstream, TronGrid, and Cloudflare RPCs.",
      metric: "₹0.00 Paid APIs",
      icon: Database,
      accentColor: "#1040C0",
      shape: "square",
      span: "lg:col-span-2",
    },
    {
      id: "f9",
      pillar: "CROSS-CHAIN",
      pillarColor: "#121212",
      title: "Multi-Chain Protocol Coverage",
      tag: "TRON • BTC • EVM",
      description:
        "Seamlessly decodes TRON TRC-20 USDT, Bitcoin UTXOs, and Ethereum/EVM token transfers with unified node representations and automated bridge traversal.",
      metric: "Multi-Protocol",
      icon: Layers,
      accentColor: "#121212",
      shape: "triangle",
    },
    {
      id: "f10",
      pillar: "FINANCIAL INTEL",
      pillarColor: "#D02020",
      title: "FIU-IND Suspicious Transaction Compiler",
      tag: "PMLA 2002 REGULATORY",
      description:
        "Compiles Suspicious Transaction Reports (STRs) in standard machine-readable JSON format, ready for direct integration with the Financial Intelligence Unit - India.",
      metric: "PMLA Ready",
      icon: Scale,
      accentColor: "#D02020",
      shape: "circle",
    },
    {
      id: "f11",
      pillar: "VISUAL FORENSICS",
      pillarColor: "#1040C0",
      title: "Interactive Forensic Graph Canvas",
      tag: "COMMAND CANVAS",
      description:
        "High-performance interactive ReactFlow canvas featuring animated fund streams, terminal cluster bounding hulls, hop-level inspection drawers, and PDF dossier export.",
      metric: "60 FPS Interactive",
      icon: Search,
      accentColor: "#1040C0",
      shape: "square",
      span: "lg:col-span-2",
    },
    {
      id: "f12",
      pillar: "AI ADAPTABILITY",
      pillarColor: "#F0C020",
      title: "Adaptive AI Forensic Copilot",
      tag: "PLUGGABLE LLM",
      description:
        "Standardized OpenAI-compatible copilot interface. Hot-swap between Groq (Llama 3 70B), Ollama (local air-gapped models), or OpenRouter via simple environment variable switches.",
      metric: "Air-Gap Compatible",
      icon: Cpu,
      accentColor: "#F0C020",
      shape: "triangle",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".feature-grid-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".feature-bento-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0] border-b-4 border-[#121212]"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        {/* Header with balanced spacing */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 feature-grid-header">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border-2 border-black" />
            <span className="w-3.5 h-3.5 bg-[#1040C0] border-2 border-black" />
            <span className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border-2 border-black" />
            <span className="text-xs font-black uppercase tracking-widest text-[#121212]">
              12-POINT COMPREHENSIVE CAPABILITY MATRIX
            </span>
          </div>

          <h2 className="feature-grid-header font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.95]">
            ENGINEERED FOR NATIONAL <span className="text-[#1040C0]">CYBER CRIME</span> ENFORCEMENT
          </h2>

          <p className="feature-grid-header font-medium text-base sm:text-lg text-gray-700 leading-relaxed">
            Every heuristic, algorithm, legal notice, and telemetry event was designed from the ground up
            to eliminate the operational bottlenecks faced by State Cyber Crime Cells, I4C 1930 operators,
            and raiding officers across India.
          </p>
        </div>

        {/* Spacious Bento Grid (12 Items) */}
        <div className="feature-bento-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className={`feature-bento-card bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-200 relative group ${
                  f.span || ""
                }`}
              >
                {/* Decorative Geometric Corner */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  {f.metric && (
                    <span className="bg-[#F0F0F0] border-2 border-[#121212] text-[10px] font-mono font-bold px-2 py-0.5 text-[#121212]">
                      {f.metric}
                    </span>
                  )}
                  {f.shape === "circle" && (
                    <div
                      className="w-4 h-4 rounded-full border-2 border-black"
                      style={{ backgroundColor: f.accentColor }}
                    />
                  )}
                  {f.shape === "square" && (
                    <div
                      className="w-4 h-4 rounded-none border-2 border-black"
                      style={{ backgroundColor: f.accentColor }}
                    />
                  )}
                  {f.shape === "triangle" && (
                    <div
                      className="w-4 h-4 clip-triangle border-2 border-black"
                      style={{ backgroundColor: f.accentColor }}
                    />
                  )}
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-black px-2.5 py-1 uppercase tracking-widest text-white border border-[#121212]"
                      style={{
                        backgroundColor: f.pillarColor,
                        color: f.pillarColor === "#F0C020" ? "#121212" : "#ffffff",
                      }}
                    >
                      {f.pillar}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {f.tag}
                    </span>
                  </div>

                  <div className="w-14 h-14 border-3 border-[#121212] flex items-center justify-center bg-[#F0F0F0] shadow-[4px_4px_0px_0px_#121212] group-hover:bg-[#FFF9C4] transition-colors">
                    <Icon className="w-7 h-7 text-[#121212]" />
                  </div>

                  <div>
                    <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#121212] leading-tight">
                      {f.title}
                    </h3>
                    <p className="font-medium text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
                      {f.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t-2 border-[#121212] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-600">
                  <span>MHA / I4C STANDARDS</span>
                  <span className="font-black text-[#121212] flex items-center gap-1 group-hover:text-[#D02020] transition-colors">
                    VERIFIED SPEC <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
