"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Zap,
  Terminal,
  FileCheck,
  Scale,
  Smartphone,
  Layers,
  Search,
  Database,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
  Building2,
  Clock,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  GitBranch,
  ExternalLink,
} from "lucide-react";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "swarm" | "math" | "legal" | "budget">("overview");

  return (
    <main className="min-h-screen flex flex-col bg-[#F0F0F0] selection:bg-[#D02020] selection:text-white">
      <LandingNavbar />

      {/* Hero Master Header */}
      <section className="bg-white border-b-4 border-[#121212] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFF9C4] rounded-full blur-3xl opacity-40 -z-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
              TRINETRA ARCHITECTURE SPECIFICATION
            </span>
            <span className="px-3 py-1 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
              SIH 2026 • PROBLEM STATEMENTS 26182 & 26183
            </span>
            <span className="px-3 py-1 bg-[#1040C0] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
              MINISTRY OF HOME AFFAIRS (MHA) / I4C
            </span>
          </div>

          <h1 className="font-black text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
            THE COMPLETE GUIDE TO <span className="text-[#D02020]">TRINETRA</span>
          </h1>

          <p className="font-medium text-xl sm:text-2xl text-gray-800 max-w-4xl leading-relaxed">
            Everything you need to know about India’s autonomous, multi-agent cryptocurrency
            forensic engine: genesis, mathematical heuristics, 5-agent state machine, new BNSS/BSA
            criminal statutory compliance, and zero-dollar public architecture.
          </p>

          {/* Quick Anchor Sub-Navigation */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-gray-200">
            <a
              href="#mission-genesis"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              1. Mission & Genesis
            </a>
            <a
              href="#problem-statements"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              2. PS 26182 & 26183
            </a>
            <a
              href="#swarm-architecture"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              3. 5-Agent Swarm
            </a>
            <a
              href="#mathematical-heuristics"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              4. Math Heuristics
            </a>
            <a
              href="#legal-framework"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              5. BNSS & BSA 2023 Law
            </a>
            <a
              href="#zero-dollar-budget"
              className="px-4 py-2 bg-[#F0F0F0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#F0C020] transition-colors"
            >
              6. $0 Budget Architecture
            </a>
            <a
              href="#executive-summary"
              className="px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] text-xs font-black uppercase hover:bg-[#b01a1a] transition-colors"
            >
              7. 60-Sec Summary
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: MISSION & GENESIS */}
      <section id="mission-genesis" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#D02020] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 01 • GENESIS & THE INDIAN FRAUD LANDSCAPE
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              WHY TRINETRA WAS BUILT: THE ₹1,750+ CR CRISIS
            </h2>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
              Cyber crime syndicates have industrialized fraud across India. By shifting from traditional
              UPI mule bank accounts to cryptocurrency laundering chains, criminal networks evade bank freezes
              in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#D02020] text-white border-2 border-[#121212] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="font-black text-2xl uppercase text-[#121212]">The Golden 2-Hour Window</h3>
              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                When a victim reports a fraud on the 1930 helpline, money travels through 3-5 mule wallets
                in under 120 minutes before being deposited into Indian registered exchanges (CoinDCX, WazirX)
                or cashed out via P2P. Manual police tracing takes 2 to 4 weeks, during which stolen funds vanish.
              </p>
            </div>

            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#1040C0] text-white border-2 border-[#121212] flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="font-black text-2xl uppercase text-[#121212]">The Tooling Cost Chasm</h3>
              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                State police departments rarely have the $50,000/year annual subscriptions required for proprietary
                Western tools like Chainalysis Reactor or TRM Labs. Beat officers and district cyber cells
                need an enterprise-grade solution that costs ₹0 in recurring licenses.
              </p>
            </div>

            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#F0C020] text-[#121212] border-2 border-[#121212] flex items-center justify-center font-black text-xl">
                03
              </div>
              <h3 className="font-black text-2xl uppercase text-[#121212]">The New Legal Mandates</h3>
              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                In July 2024, the Indian legal code was fundamentally rewritten. Investigations can no longer
                rely on outdated Section 91 CrPC notices or Section 65B Evidence Act certificates. Officers must
                comply with Section 94 BNSS and Section 63 BSA electronic evidence standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TWIN PROBLEM STATEMENTS */}
      <section id="problem-statements" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#1040C0] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 02 • MHA / I4C PROBLEM STATEMENTS
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              CONCURRENT RESOLUTION: SIH26182 & SIH26183
            </h2>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
              Smart India Hackathon 2026 posed two tightly coupled challenges for the Ministry of Home Affairs.
              TRINETRA is engineered to solve both simultaneously in a single unified architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SIH 26182 Card */}
            <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#D02020] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#D02020] text-white font-black text-xs px-3 py-1 uppercase tracking-widest">
                  PRIMARY PS: SIH26182
                </span>
                <span className="font-mono text-xs font-bold text-gray-600">ATTRIBUTION LATENCY: &lt; 3.0s</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl uppercase text-[#121212]">
                Automated Attribution of Unknown Wallets to Nearest VASPs
              </h3>

              <div className="space-y-3 text-sm text-gray-800 leading-relaxed">
                <p>
                  <strong>The Challenge:</strong> Law enforcement receives an unlabelled crypto wallet address
                  (e.g., TRON Base58 or Bitcoin SegWit) without knowing which exchange issued it or where funds
                  are flowing.
                </p>
                <p>
                  <strong>Trinetra’s Solution:</strong> Executes bi-directional pathfinding. Traces UPSTREAM to
                  identify originating hot wallet sweeps, and DOWNSTREAM to track multi-hop peeling chains into
                  terminal cash-out deposit vaults. Calculates shortest topological graph distance and statistical
                  confidence score.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#121212] font-mono text-xs space-y-1">
                <div className="text-gray-500 uppercase font-bold">Heuristic Implementation:</div>
                <div className="text-[#121212] font-black">Bi-Directional Graph BFS/DFS + Dijkstra Topo Weighting</div>
              </div>
            </div>

            {/* SIH 26183 Card */}
            <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#1040C0] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#1040C0] text-white font-black text-xs px-3 py-1 uppercase tracking-widest">
                  SISTER PS: SIH26183
                </span>
                <span className="font-mono text-xs font-bold text-gray-600">STATUTORY LEGAL ORDER: INSTANT</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl uppercase text-[#121212]">
                Real-Time Identification of Fraud-Linked Exchanges from Victim Addresses
              </h3>

              <div className="space-y-3 text-sm text-gray-800 leading-relaxed">
                <p>
                  <strong>The Challenge:</strong> Victim calls the 1930 Cyber Crime Helpline or files an NCRP complaint.
                  Investigators must identify which exchange holds the stolen funds before the criminal withdraws INR via P2P.
                </p>
                <p>
                  <strong>Trinetra’s Solution:</strong> Immediately triages the victim deposit address, tracks outbound
                  smurfing across tranches, clusters terminal exchange deposit gateways, and synthesizes a binding Section 94
                  BNSS freezing order with direct nodal escalation within 3 seconds.
                </p>
              </div>

              <div className="p-4 bg-white border-2 border-[#121212] font-mono text-xs space-y-1">
                <div className="text-gray-500 uppercase font-bold">Legal Action Engine:</div>
                <div className="text-[#121212] font-black">Section 94 BNSS Mandate + Section 63 BSA Evidence Hashing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 5-AGENT AUTONOMOUS SWARM */}
      <section id="swarm-architecture" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#121212] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#D02020] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 03 • AI SWARM STATE MACHINE
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-[0.92]">
              THE 5-AGENT AUTONOMOUS SWARM
            </h2>
            <p className="font-medium text-lg text-gray-300 leading-relaxed">
              Unlike static query tools that make linear database calls, TRINETRA executes a reactive multi-agent
              state machine. Five specialized autonomous agents collaborate in parallel via Server-Sent Events (SSE).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Agent Alpha */}
            <div className="bg-[#1e1e1e] border-4 border-white shadow-[8px_8px_0px_0px_#D02020] p-8 space-y-4">
              <span className="bg-[#D02020] text-white font-black text-xs px-2.5 py-1 uppercase">
                AGENT ALPHA • TRIAGE SPECIALIST
              </span>
              <h3 className="font-black text-2xl uppercase">Seed Ingestion & Network Triage</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ingests suspect addresses from 1930 NCRP or Field Interceptor. Validates Base58/Bech32/Keccak checksums,
                detects blockchain protocol, checks sanctions blocklists, and queries live public explorer RPC nodes.
              </p>
              <div className="pt-2 font-mono text-xs text-[#F0C020]">Execution: 0.0s - 0.4s</div>
            </div>

            {/* Agent Beta */}
            <div className="bg-[#1e1e1e] border-4 border-white shadow-[8px_8px_0px_0px_#1040C0] p-8 space-y-4">
              <span className="bg-[#1040C0] text-white font-black text-xs px-2.5 py-1 uppercase">
                AGENT BETA • GRAPH PATHFINDER
              </span>
              <h3 className="font-black text-2xl uppercase">Multi-Hop Traversal Walker</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Spawns recursive traversal workers to trace fund flows forward and backward. Prunes dead-ends,
                discards dusting noise ($&lt; 0.50), and compiles transaction graphs into weighted node-edge networks.
              </p>
              <div className="pt-2 font-mono text-xs text-[#F0C020]">Execution: 0.4s - 1.2s</div>
            </div>

            {/* Agent Gamma */}
            <div className="bg-[#1e1e1e] border-4 border-white shadow-[8px_8px_0px_0px_#F0C020] p-8 space-y-4">
              <span className="bg-[#F0C020] text-[#121212] font-black text-xs px-2.5 py-1 uppercase">
                AGENT GAMMA • AML TYPOLOGY ENGINE
              </span>
              <h3 className="font-black text-2xl uppercase">Mathematical Heuristics</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Evaluates transactions using deterministic mathematical typologies: UTXO Peeling Chain ratio calculation
                (Heuristic A) and Fan-Out Smurfing dispersion radar with Coefficient of Variation (Heuristic B).
              </p>
              <div className="pt-2 font-mono text-xs text-[#F0C020]">Execution: 0.8s - 1.8s</div>
            </div>

            {/* Agent Delta */}
            <div className="bg-[#1e1e1e] border-4 border-white shadow-[8px_8px_0px_0px_#1040C0] p-8 space-y-4">
              <span className="bg-[#1040C0] text-white font-black text-xs px-2.5 py-1 uppercase">
                AGENT DELTA • VASP ATTRIBUTION
              </span>
              <h3 className="font-black text-2xl uppercase">Exchange Cluster Attribution</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Matches terminal leaf nodes against the curated Indian VASP registry (CoinDCX, WazirX, ZebPay, Mudrex,
                Binance India). Identifies deposit sweepers, computes topological distance, and calculates confidence score.
              </p>
              <div className="pt-2 font-mono text-xs text-[#F0C020]">Execution: 1.5s - 2.4s</div>
            </div>

            {/* Agent Epsilon */}
            <div className="bg-[#1e1e1e] border-4 border-white shadow-[8px_8px_0px_0px_white] p-8 space-y-4">
              <span className="bg-white text-[#121212] font-black text-xs px-2.5 py-1 uppercase">
                AGENT EPSILON • LEGAL & EVIDENCE
              </span>
              <h3 className="font-black text-2xl uppercase">Section 94 Notice & Hashing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Synthesizes court-admissible Section 94 BNSS freezing directives, generates cryptographic SHA-256 evidence
                certificates under Section 63 BSA, and dispatches emergency alerts to the exchange nodal compliance officer.
              </p>
              <div className="pt-2 font-mono text-xs text-[#F0C020]">Execution: 2.0s - 2.8s</div>
            </div>

            {/* Swarm Telemetry Hub */}
            <div className="bg-[#242424] border-4 border-[#F0C020] p-8 space-y-4 flex flex-col justify-between">
              <div>
                <span className="bg-[#F0C020] text-[#121212] font-black text-xs px-2.5 py-1 uppercase">
                  SWARM TELEMETRY BUS
                </span>
                <h3 className="font-black text-2xl uppercase mt-2">Server-Sent Events (SSE)</h3>
                <p className="text-sm text-gray-300 leading-relaxed mt-2">
                  All 5 agents stream their internal thoughts, prune decisions, and confidence updates to the UI in real
                  time via standard HTTP/2 Server-Sent Events with sub-50ms latency.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="w-full py-3 bg-[#D02020] text-white font-black text-xs uppercase tracking-wider text-center border-2 border-white hover:bg-[#b01a1a] transition-colors"
              >
                Watch Swarm in Canvas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: MATHEMATICAL FORMULATIONS */}
      <section id="mathematical-heuristics" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#F0C020] text-[#121212] text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 04 • ALGORITHMIC FOUNDATIONS
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              DETERMINISTIC AML MATHEMATICS
            </h2>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
              TRINETRA rejects unexplainable black-box machine learning for forensic attribution. Every risk score
              and laundering classification is derived from deterministic, court-defensible mathematical algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Heuristic A Card */}
            <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#1040C0] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#1040C0] text-white font-black text-xs px-3 py-1 uppercase tracking-widest">
                  HEURISTIC A: PEELING CHAIN DETECTION
                </span>
                <span className="font-mono text-xs font-black text-[#D02020]">THRESHOLD: R ≥ 0.85</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl uppercase text-[#121212]">
                UTXO Peeling Ratio Formulation
              </h3>

              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                In Bitcoin and UTXO-based transactions, syndicates peel small sums to mule wallets while returning
                the majority change to their own hot vault. TRINETRA evaluates the retained change ratio:
              </p>

              <div className="bg-white border-2 border-[#121212] p-5 font-mono text-sm space-y-2">
                <div className="text-gray-500 font-bold uppercase text-xs">Mathematical Formula:</div>
                <div className="text-[#121212] font-black text-base">
                  R_change = V_change / V_total
                </div>
                <div className="text-xs text-gray-600 pt-1">
                  When R_change ≥ 0.85 across sequential transaction hops, the path is classified as a
                  Deterministic Peeling Chain with Risk Score 90+.
                </div>
              </div>

              <ul className="space-y-2 text-xs font-medium text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1040C0]" />
                  Distinguishes legitimate commerce payments from criminal peeling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1040C0]" />
                  Eliminates false positives on change address identification
                </li>
              </ul>
            </div>

            {/* Heuristic B Card */}
            <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#F0C020] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#F0C020] text-[#121212] font-black text-xs px-3 py-1 uppercase tracking-widest">
                  HEURISTIC B: FAN-OUT SMURFING RADAR
                </span>
                <span className="font-mono text-xs font-black text-[#1040C0]">THRESHOLD: CV &lt; 0.50</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl uppercase text-[#121212]">
                Coefficient of Variation Dispersion
              </h3>

              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                To bypass AML monitoring thresholds, syndicates fan out large sums into near-equal tranches
                across multiple mule addresses. TRINETRA computes the Coefficient of Variation:
              </p>

              <div className="bg-white border-2 border-[#121212] p-5 font-mono text-sm space-y-2">
                <div className="text-gray-500 font-bold uppercase text-xs">Mathematical Formula:</div>
                <div className="text-[#121212] font-black text-base">
                  CV = σ / μ = sqrt((1/N) * Σ(x_i - μ)²) / μ
                </div>
                <div className="text-xs text-gray-600 pt-1">
                  When split count N ≥ 3 and CV &lt; 0.50 (low variance), the transaction structure is flagged
                  as Structured Smurfing with high confidence.
                </div>
              </div>

              <ul className="space-y-2 text-xs font-medium text-gray-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C020]" />
                  Detects structured smurfing designed to fly under mandatory reporting limits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F0C020]" />
                  Identifies automated bot dispersal vs manual user transfers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEW INDIAN CRIMINAL JURISPRUDENCE */}
      <section id="legal-framework" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#D02020] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#121212] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 05 • INDIAN EVIDENCE ACT & CRIMINAL PROCEDURE 2024
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-[0.92]">
              100% ALIGNED WITH BNSS & BSA 2023
            </h2>
            <p className="font-medium text-lg text-white/95 leading-relaxed">
              On 1 July 2024, the colonial Indian Penal Code (IPC), Code of Criminal Procedure (CrPC), and
              Indian Evidence Act (IEA) were replaced. TRINETRA is native to the new legal statutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Section 94 BNSS Card */}
            <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#121212] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#1040C0] text-white font-black text-xs px-2.5 py-1 uppercase tracking-widest">
                  STATUTORY FREEZING SUMMONS
                </span>
                <span className="font-mono text-xs font-bold text-gray-500">REPLACES SEC 91 CrPC</span>
              </div>

              <h3 className="font-black text-3xl uppercase">Section 94 BNSS 2023</h3>

              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                Section 94 of the Bharatiya Nagarik Suraksha Sanhita, 2023 empowers an Investigating Officer
                or court to issue a summons to produce documents, electronic devices, and execute an immediate
                administrative debit freeze on crypto accounts suspected of holding stolen proceeds.
              </p>

              <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212] space-y-2 text-xs font-mono">
                <div className="font-bold text-[#D02020] uppercase">Statutory Mandate:</div>
                <p className="text-gray-800">
                  Registered VASPs are legally bound to acknowledge receipt within 2 hours, enforce custodial
                  freezes, and furnish full KYC, bank withdrawal logs, and IP access records within 24 hours.
                </p>
              </div>

              <Link
                href="/notice"
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-[#1040C0] hover:text-[#D02020] underline"
              >
                <span>Generate Section 94 Notice in Notice Studio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Section 63 BSA Card */}
            <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#121212] p-8 sm:p-10 space-y-6">
              <div className="flex items-center justify-between">
                <span className="bg-[#F0C020] text-[#121212] font-black text-xs px-2.5 py-1 uppercase tracking-widest">
                  ELECTRONIC EVIDENCE CERTIFICATE
                </span>
                <span className="font-mono text-xs font-bold text-gray-500">REPLACES SEC 65B IEA</span>
              </div>

              <h3 className="font-black text-3xl uppercase">Section 63 BSA 2023</h3>

              <p className="font-medium text-sm text-gray-700 leading-relaxed">
                Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 governs the admissibility of electronic
                records. TRINETRA computes cryptographic SHA-256 hash seals over the entire pathfinding graph,
                raw explorer transaction dumps, and investigator notes.
              </p>

              <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212] space-y-2 text-xs font-mono">
                <div className="font-bold text-[#1040C0] uppercase">Cryptographic Integrity:</div>
                <p className="text-gray-800">
                  Evidence seals ensure the prosecution can prove an unbroken, tamper-evident digital chain
                  of custody from the first block query to the final court charge sheet.
                </p>
              </div>

              <Link
                href="/cases"
                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-[#1040C0] hover:text-[#D02020] underline"
              >
                <span>View Sealed Evidence in Case Vault</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ZERO-DOLLAR PUBLIC INFRASTRUCTURE */}
      <section id="zero-dollar-budget" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#1040C0] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 06 • ZERO-COST ARCHITECTURE
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              ₹0.00 RECURRING BUDGET: FREE PUBLIC RPC PIPELINE
            </h2>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
              How TRINETRA delivers enterprise-tier blockchain forensics for police forces without expensive
              multi-million dollar software contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#D02020] text-white border-2 border-[#121212] flex items-center justify-center font-black">
                BTC
              </div>
              <h3 className="font-black text-2xl uppercase">Bitcoin UTXO Pipeline</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Connects directly to Blockstream.info public explorer API endpoints. Extracts raw inputs,
                outputs, script types, and locktimes with zero paid subscription keys required.
              </p>
              <div className="font-mono text-xs font-bold text-[#D02020]">Cost: $0.00 / Free Tier</div>
            </div>

            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#1040C0] text-white border-2 border-[#121212] flex items-center justify-center font-black">
                TRX
              </div>
              <h3 className="font-black text-2xl uppercase">Tron TRC-20 USDT Pipeline</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Queries public TronGrid community gateways and StrongMind public RPCs. Decodes transfer smart
                contract payloads and parses base58 addresses in client-side WebAssembly.
              </p>
              <div className="font-mono text-xs font-bold text-[#1040C0]">Cost: $0.00 / Community RPC</div>
            </div>

            <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 space-y-4">
              <div className="w-12 h-12 bg-[#F0C020] text-[#121212] border-2 border-[#121212] flex items-center justify-center font-black">
                EVM
              </div>
              <h3 className="font-black text-2xl uppercase">Ethereum & EVM Pipeline</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Uses Cloudflare Public Ethereum RPC and public Polygon/BSC nodes to inspect ERC-20 stablecoin
                balances, approvals, and contract sweeps without Infura/Alchemy credit limits.
              </p>
              <div className="font-mono text-xs font-bold text-[#121212]">Cost: $0.00 / Public Gateway</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAST-ABSORBING 60-SECOND EXECUTIVE CHEAT SHEET */}
      <section id="executive-summary" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="bg-[#D02020] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
              SECTION 07 • FAST ABSORPTION SUMMARY
            </span>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.92]">
              THE 60-SECOND PLATFORM CHEAT SHEET
            </h2>
            <p className="font-medium text-lg text-gray-700 leading-relaxed">
              Designed for SIH evaluators, police leadership, and judges who need every core fact in one view.
            </p>
          </div>

          <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[12px_12px_0px_0px_#121212] p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black/20">
              <div className="space-y-2 pb-6 md:pb-0 md:pr-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D02020]">PROBLEM SOLVED</span>
                <p className="font-black text-xl text-[#121212]">SIH 26182 & 26183</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Attributing unknown suspect crypto addresses to registered Indian exchanges under 3 seconds.
                </p>
              </div>

              <div className="space-y-2 pt-6 md:pt-0 md:px-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1040C0]">AI CORE</span>
                <p className="font-black text-xl text-[#121212]">5-Agent State Machine</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Alpha (Triage), Beta (Pathfinder), Gamma (Typology), Delta (VASP), Epsilon (Legal Counsel).
                </p>
              </div>

              <div className="space-y-2 pt-6 md:pt-0 md:px-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F0C020]">MATHEMATICS</span>
                <p className="font-black text-xl text-[#121212]">Heuristics A & B</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  UTXO Peeling Ratio ($R \ge 0.85$) and Fan-Out Smurfing Coefficient of Variation ($CV &lt; 0.50$).
                </p>
              </div>

              <div className="space-y-2 pt-6 md:pt-0 md:pl-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#121212]">LEGAL STANDING</span>
                <p className="font-black text-xl text-[#121212]">BNSS 94 & BSA 63</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Statutory freezing notice + SHA-256 evidence certificate for direct High Court admissibility.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-[#121212] flex flex-wrap items-center justify-between gap-6">
              <div className="text-xs font-mono text-gray-700">
                <strong>DEPLOYMENT SPEC:</strong> Next.js 15 App Router • GSAP ScrollTrigger • Three.js WebGL • Dockerized
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/dashboard"
                  className="px-6 py-3.5 bg-[#D02020] text-white border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#b01a1a] transition-all flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Launch Command Canvas</span>
                </Link>

                <Link
                  href="/field"
                  className="px-6 py-3.5 bg-[#F0C020] text-[#121212] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#d9ad1a] transition-all flex items-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Try Field App</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </main>
  );
}
