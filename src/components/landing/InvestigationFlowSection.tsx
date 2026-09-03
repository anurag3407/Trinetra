"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Search,
  GitMerge,
  Building2,
  FileCheck2,
  ChevronRight,
  Activity,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { gsap } from "@/lib/gsap";

interface FlowStage {
  id: string;
  stepNumber: string;
  title: string;
  badge: string;
  badgeColor: string;
  shortDesc: string;
  duration: string;
  agent: string;
  details: {
    heading: string;
    description: string;
    technicalHighlights: string[];
    sampleData: {
      label: string;
      value: string;
      highlight?: boolean;
    }[];
  };
}

const FLOW_STAGES: FlowStage[] = [
  {
    id: "stage-1",
    stepNumber: "01",
    title: "Complaint & Wallet Ingestion",
    badge: "STAGE 1 • INGESTION",
    badgeColor: "#D02020",
    shortDesc: "Triage seed crypto address from NCRP 1930 helpline or Mobile Field Interceptor.",
    duration: "420 ms",
    agent: "Agent Alpha (Triage)",
    details: {
      heading: "Automated Seed Validation & Network Routing",
      description:
        "When an investigating officer enters a suspect wallet or scans an on-scene paper wallet via QR/OCR, Agent Alpha verifies base58/bech32 checksums, detects the network (Tron TRC-20, Bitcoin UTXO, EVM), and queries public explorer RPC nodes at zero marginal cost.",
      technicalHighlights: [
        "Instant Base58Check / Keccak-256 checksum verification",
        "Public RPC auto-switching with failover redundancy",
        "Cross-checks against OFAC, 1930 NCRP fraud registries",
      ],
      sampleData: [
        { label: "Target Address", value: "TX9vKb8QzL90kM71nN8x2PwE5sXz7La4K" },
        { label: "Blockchain", value: "TRON (TRC-20 USDT)" },
        { label: "Reported Loss", value: "₹45,00,000 (~51,724 USDT)", highlight: true },
        { label: "Ingestion Vector", value: "NCRP 1930 Helpline API / Field Mobile" },
      ],
    },
  },
  {
    id: "stage-2",
    stepNumber: "02",
    title: "Multi-Hop Peeling & Typology Heuristics",
    badge: "STAGE 2 • HEURISTICS",
    badgeColor: "#1040C0",
    shortDesc: "Autonomous recursive graph crawler detects peeling chains & fan-out smurfing.",
    duration: "860 ms",
    agent: "Agent Beta & Agent Gamma",
    details: {
      heading: "Algorithmic Peeling Chains & Dispersion Radar",
      description:
        "Agent Beta spawns asynchronous multi-hop traversals tracking outbound fund transfers. In parallel, Agent Gamma computes mathematical AML heuristics: identifying change outputs when ratio >= 0.85 (Heuristic A) and flagging structured fan-out smurfing when CV < 0.50 (Heuristic B).",
      technicalHighlights: [
        "UTXO Peeling Ratio: Retained Change / Total Output ≥ 0.85",
        "Fan-Out Smurfing: Coefficient of Variation CV = σ / μ < 0.50",
        "Pruning algorithm ignores noisy micro-dust & exchange sweepers",
      ],
      sampleData: [
        { label: "Hops Explored", value: "3 Forward Hops Traversed" },
        { label: "Heuristic A (Peeling)", value: "CONFIRMED (Change Ratio 0.884)", highlight: true },
        { label: "Heuristic B (Smurfing)", value: "TRIGGERED (CV = 0.18 < 0.50, 3 Splits)" },
        { label: "Synthesized Graph", value: "8 Connected Nodes, 9 Direct Edges" },
      ],
    },
  },
  {
    id: "stage-3",
    stepNumber: "03",
    title: "Terminal VASP Cluster Attribution",
    badge: "STAGE 3 • ATTRIBUTION",
    badgeColor: "#F0C020",
    shortDesc: "Clusters terminal deposit addresses with FIU-registered Indian exchanges.",
    duration: "610 ms",
    agent: "Agent Delta (VASP Specialist)",
    details: {
      heading: "Bi-Directional Proximity & Indian Exchange Registry Match",
      description:
        "Agent Delta matches the terminal leaf node against Trinetra's curated VASP registry of Indian registered exchanges (CoinDCX, WazirX, ZebPay, Mudrex, Binance India). It calculates shortest topological distance, confirms deposit sweeper linkage, and outputs a high-confidence attribution dossier.",
      technicalHighlights: [
        "Shortest path topological graph traversal (Dijkstra weighted)",
        "Automated aggregation of VASP corporate entity & nodal officer",
        "Attribution confidence score calculation based on cluster density",
      ],
      sampleData: [
        { label: "Identified VASP", value: "CoinDCX (Neblio Technologies Pvt Ltd)", highlight: true },
        { label: "Attribution Confidence", value: "96% Verified Cluster Density" },
        { label: "Terminal Deposit Address", value: "TNeB7xQp91L...km01a (Hop #3)" },
        { label: "FIU-IND Registration", value: "FIU-IND RE: REG-2023-VASP-0042" },
      ],
    },
  },
  {
    id: "stage-4",
    stepNumber: "04",
    title: "Section 94 BNSS Freezing Order & Proof",
    badge: "STAGE 4 • ENFORCEMENT",
    badgeColor: "#121212",
    shortDesc: "Auto-generates court-ready freeze summons with cryptographic Section 63 BSA seal.",
    duration: "440 ms",
    agent: "Agent Epsilon (Legal Counsel)",
    details: {
      heading: "Statutory Freezing Notice & Cryptographic Chain of Custody",
      description:
        "Agent Epsilon synthesizes a formal statutory directive under Section 94 BNSS 2023 (formerly Section 91 CrPC) commanding the exchange nodal officer to freeze the target account within 2 hours. A SHA-256 digital evidence seal is generated under Section 63 BSA 2023 for strict court admissibility.",
      technicalHighlights: [
        "Section 94 Bharatiya Nagarik Suraksha Sanhita (BNSS) statutory order",
        "Section 63 Bharatiya Sakshya Adhiniyam (BSA) SHA-256 certificate",
        "Direct emergency email escalation to nodal compliance officer",
      ],
      sampleData: [
        { label: "Statutory Order", value: "Section 94 BNSS Freezing Directive" },
        { label: "SHA-256 Evidence Seal", value: "c8f391b4a029fe8...19b027d1", highlight: true },
        { label: "Nodal Officer Alert", value: "compliance@coindcx.com (Dispatched)" },
        { label: "Total Swarm Execution Time", value: "2.33 Seconds Total (< 3.0s SLA)", highlight: true },
      ],
    },
  },
];

export default function InvestigationFlowSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = FLOW_STAGES[activeStageIndex];
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".flow-header-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".flow-step-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="flows"
      ref={sectionRef}
      className="py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white border-b-4 border-[#121212] relative overflow-hidden"
    >
      {/* Background Subtle Tech Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0F0F0] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFF9C4] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header with generous negative space */}
        <div className="max-w-3xl space-y-5">
          <div className="flex items-center gap-2.5 flow-header-animate">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border-2 border-black" />
            <span className="w-3.5 h-3.5 bg-[#1040C0] border-2 border-black" />
            <span className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border-2 border-black" />
            <span className="text-xs font-black uppercase tracking-widest text-[#121212]">
              END-TO-END INVESTIGATION PIPELINE
            </span>
          </div>

          <h2 className="flow-header-animate font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
            HOW TRINETRA TRACES & FREEZES IN <span className="text-[#D02020]">UNDER 3s</span>
          </h2>

          <p className="flow-header-animate font-medium text-lg sm:text-xl text-gray-700 leading-relaxed">
            Follow the automated lifecycle from the instant a victim reports stolen funds to the
            moment a court-admissible Section 94 BNSS debit freeze order arrives at the exchange.
          </p>
        </div>

        {/* 4-Stage Interactive Pipeline Navigation */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FLOW_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`flow-step-card text-left p-6 border-4 border-[#121212] transition-all relative flex flex-col justify-between group ${
                  isActive
                    ? "bg-[#F0F0F0] shadow-[8px_8px_0px_0px_#121212] -translate-y-1.5"
                    : "bg-white hover:bg-gray-50 shadow-[4px_4px_0px_0px_#121212] hover:-translate-y-0.5"
                }`}
              >
                {/* Active Indicator Top Strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 transition-all"
                  style={{ backgroundColor: isActive ? stage.badgeColor : "transparent" }}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-2xl text-gray-400 group-hover:text-[#121212] transition-colors">
                      {stage.stepNumber}
                    </span>
                    <span
                      className="px-2 py-0.5 text-[10px] font-black uppercase border border-[#121212] text-white"
                      style={{
                        backgroundColor: stage.badgeColor,
                        color: stage.badgeColor === "#F0C020" ? "#121212" : "#ffffff",
                      }}
                    >
                      {stage.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-black text-xl text-[#121212] uppercase leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      {stage.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t-2 border-gray-200 flex items-center justify-between text-xs font-bold text-gray-700">
                  <span className="text-[11px] truncate max-w-[150px]">{stage.agent}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "translate-x-1 text-[#D02020]" : "text-gray-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Preview Canvas */}
        <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[12px_12px_0px_0px_#121212] p-8 sm:p-10 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Side: Deep Dive Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="px-3 py-1 text-xs font-black uppercase tracking-widest border-2 border-[#121212] text-white shadow-[2px_2px_0px_0px_#121212]"
                  style={{
                    backgroundColor: activeStage.badgeColor,
                    color: activeStage.badgeColor === "#F0C020" ? "#121212" : "#ffffff",
                  }}
                >
                  {activeStage.badge}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#D02020] animate-pulse" />
                  Orchestrated by {activeStage.agent}
                </span>
              </div>

              <h3 className="font-black text-2xl sm:text-4xl text-[#121212] uppercase tracking-tight leading-tight">
                {activeStage.details.heading}
              </h3>

              <p className="font-medium text-base sm:text-lg text-gray-800 leading-relaxed">
                {activeStage.details.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#121212]">
                  Algorithmic Specifications:
                </h4>
                <ul className="space-y-2.5">
                  {activeStage.details.technicalHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-[#1040C0] shrink-0 mt-0.5" />
                      <span className="font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3.5 bg-[#D02020] text-white border-4 border-[#121212] shadow-[5px_5px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#b01a1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Test in Command Canvas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="px-6 py-3.5 bg-white text-[#121212] border-4 border-[#121212] shadow-[5px_5px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-2"
                >
                  <span>Learn the Mathematics</span>
                </Link>
              </div>
            </div>

            {/* Right Side: Live Telemetry / Data Inspector Box */}
            <div className="lg:col-span-6 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#121212]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#D02020]" />
                  <div className="w-3 h-3 bg-[#1040C0]" />
                  <div className="w-3 h-3 clip-triangle bg-[#F0C020]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#121212] ml-2">
                    STAGE TELEMETRY PAYLOAD
                  </span>
                </div>
                <span className="bg-[#121212] text-white font-mono text-[10px] font-bold px-2 py-0.5">
                  LATENCY: {activeStage.duration}
                </span>
              </div>

              {/* Data Table */}
              <div className="space-y-3 font-mono text-xs">
                {activeStage.details.sampleData.map((dataItem, dIdx) => (
                  <div
                    key={dIdx}
                    className={`p-3.5 border-2 border-[#121212] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 ${
                      dataItem.highlight ? "bg-[#FFF9C4]" : "bg-[#F8F9FA]"
                    }`}
                  >
                    <span className="font-bold text-gray-600 uppercase tracking-wider text-[11px]">
                      {dataItem.label}
                    </span>
                    <span className="font-black text-[#121212] break-all sm:text-right">
                      {dataItem.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Swarm State Indicator */}
              <div className="bg-[#121212] text-white p-4 border-2 border-[#121212] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-bold text-gray-300">SWARM ORCHESTRATOR STATUS</span>
                </div>
                <span className="text-[#F0C020] font-bold">STATE VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
