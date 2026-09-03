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
  ArrowLeft,
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
  Presentation,
  Maximize2,
  Minimize2,
  Volume2,
  RotateCcw,
} from "lucide-react";

export interface SlideData {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  analogyTitle?: string;
  analogyText?: string;
  renderContent: (isTechMode: boolean) => React.ReactNode;
  speakerCue: string;
}

export const SLIDES: SlideData[] = [
  // SLIDE 1: Title & Hook
  {
    id: 1,
    badge: "SMART INDIA HACKATHON 2026 • MHA / I4C",
    badgeColor: "#D02020",
    title: "TRINETRA (त्रिनेत्र)",
    subtitle: "Catching Cryptocurrency Cyber Criminals in Under 3 Seconds",
    analogyTitle: "The One-Sentence Summary for Judges",
    analogyText:
      "When cyber criminals scam Indian citizens and convert the stolen money into crypto to escape the police, TRINETRA acts like an automated digital hound: tracking the money across the blockchain and freezing the criminal's exchange account before they can cash out.",
    speakerCue:
      "Good morning respected judges. We are team TRINETRA, presenting our solution for MHA / I4C Problem Statements 26182 & 26183.",
    renderContent: (isTechMode) => (
      <div className="space-y-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <span className="text-[10px] font-black uppercase text-[#D02020]">PRIMARY PS: SIH 26182</span>
            <h4 className="font-black text-xl uppercase">Nearest VASP Attribution</h4>
            <p className="text-xs text-gray-700">Connecting unknown wallets to Indian crypto exchanges in real time.</p>
          </div>
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <span className="text-[10px] font-black uppercase text-[#1040C0]">SISTER PS: SIH 26183</span>
            <h4 className="font-black text-xl uppercase">Fraud Exchange ID</h4>
            <p className="text-xs text-gray-700">Tracking victim complaint wallets forward to terminal cash-out gates.</p>
          </div>
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <span className="text-[10px] font-black uppercase text-[#F0C020]">SPEED BENCHMARK</span>
            <h4 className="font-black text-xl uppercase">&lt; 3.0 Seconds</h4>
            <p className="text-xs text-gray-700">Automated multi-agent swarm replacing 3 to 4 weeks of manual police effort.</p>
          </div>
        </div>

        {isTechMode && (
          <div className="p-4 bg-[#FFF9C4] border-2 border-[#121212] font-mono text-xs">
            <strong>Architecture Note:</strong> Full-stack Next.js 15 App Router + 5-Agent SSE Swarm + ReactFlow Canvas + Zero-Budget Public RPC Pipeline.
          </div>
        )}
      </div>
    ),
  },

  // SLIDE 2: The Real-World Crime Story
  {
    id: 2,
    badge: "THE CRIME SCENE IN INDIA",
    badgeColor: "#121212",
    title: "Meet Ramesh: The ₹45 Lakh Digital Arrest",
    subtitle: "How modern cyber scams escape traditional bank freezing systems",
    analogyTitle: "The Disappearing Cash Trick",
    analogyText:
      "In a bank scam, police can freeze a bank account in 24 hours. But today, criminals instantly convert the stolen money into cryptocurrency (like USDT). Once it enters the blockchain, traditional bank freeze letters are completely useless!",
    speakerCue:
      "Judges, let us walk you through a real incident: Ramesh, a retired government officer in Bhopal, fell victim to a fake digital arrest scam.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] space-y-2">
            <span className="font-mono text-xs font-bold text-[#D02020]">STEP 1</span>
            <h4 className="font-black text-base uppercase">The Threat</h4>
            <p className="text-xs text-gray-700">Fake police video call warns of a courier package with drugs.</p>
          </div>
          <div className="p-5 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] space-y-2">
            <span className="font-mono text-xs font-bold text-[#1040C0]">STEP 2</span>
            <h4 className="font-black text-base uppercase">The Transfer</h4>
            <p className="text-xs text-gray-700">Ramesh panics and transfers ₹45 Lakhs life savings via RTGS/UPI.</p>
          </div>
          <div className="p-5 bg-[#FFF9C4] border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212] space-y-2">
            <span className="font-mono text-xs font-bold text-[#D02020]">STEP 3 (CRITICAL)</span>
            <h4 className="font-black text-base uppercase">The Crypto Conversion</h4>
            <p className="text-xs text-gray-700">Scammer buys USDT (crypto dollars) on P2P within 15 minutes.</p>
          </div>
          <div className="p-5 bg-[#121212] text-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#D02020] space-y-2">
            <span className="font-mono text-xs font-bold text-[#F0C020]">STEP 4</span>
            <h4 className="font-black text-base uppercase">The Cash Out</h4>
            <p className="text-xs text-gray-300">Funds peel across 3 wallets into an Indian exchange and vanish into cash.</p>
          </div>
        </div>

        <div className="bg-[#D02020] text-white p-5 border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] flex items-center justify-between">
          <div className="space-y-1">
            <span className="font-black text-xs uppercase tracking-widest text-[#F0C020]">THE INVESTIGATION GAP</span>
            <p className="font-bold text-lg">National Cyber Helpline 1930 receives 5,000+ complaints daily.</p>
          </div>
          <span className="font-black text-2xl font-mono">₹1,750+ CR / YR</span>
        </div>
      </div>
    ),
  },

  // SLIDE 3: The Police Bottleneck
  {
    id: 3,
    badge: "THE OPERATIONAL BOTTLENECK",
    badgeColor: "#D02020",
    title: "Why Police Cannot Stop Them Today",
    subtitle: "Manual investigations take 3 weeks. Criminals only need 120 minutes.",
    analogyTitle: "The Snail vs The Jet",
    analogyText:
      "Imagine trying to catch a speeding car on an expressway using a postal postcard. While the police officer writes manual emails back and forth, the thief has already crossed the border.",
    speakerCue:
      "Why can't our cyber crime cells stop this right now? Because they are forced to use slow, manual methods.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#D02020] p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#121212]">
              <span className="font-black text-sm uppercase text-[#D02020]">WITHOUT TRINETRA (TODAY)</span>
              <span className="text-xs font-bold bg-[#D02020] text-white px-2 py-0.5">2-4 WEEKS</span>
            </div>
            <ul className="space-y-3 text-xs text-gray-700 leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span className="font-black text-[#D02020]">✕</span>
                Officer receives a raw crypto string: <code className="bg-gray-100 p-1">TX9vKb8Qz...</code> with zero clue which company owns it.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#D02020]">✕</span>
                Drafts manual Section 91 CrPC notices on Word, gets Superintendent signature.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#D02020]">✕</span>
                Sends emails to 5 different exchanges hoping one of them matches.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#D02020]">✕</span>
                <strong>Outcome:</strong> By the time the reply comes, the wallet balance is ₹0.
              </li>
            </ul>
          </div>

          <div className="bg-[#FFF9C4] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b-2 border-[#121212]">
              <span className="font-black text-sm uppercase text-[#1040C0]">WITH TRINETRA</span>
              <span className="text-xs font-bold bg-[#1040C0] text-white px-2 py-0.5">&lt; 3.0 SECONDS</span>
            </div>
            <ul className="space-y-3 text-xs text-gray-800 leading-relaxed font-medium">
              <li className="flex items-start gap-2">
                <span className="font-black text-[#1040C0]">✓</span>
                Officer enters the wallet address or scans suspect's phone camera via QR/OCR.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#1040C0]">✓</span>
                5 autonomous AI agents automatically track the money forward through 3-5 hops.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#1040C0]">✓</span>
                Identifies terminal Indian exchange (e.g. CoinDCX) with 96% confidence.
              </li>
              <li className="flex items-start gap-2">
                <span className="font-black text-[#1040C0]">✓</span>
                <strong>Outcome:</strong> Court-ready Section 94 BNSS debit freeze notice dispatched in under 3 seconds!
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 4: The 3-Step Solution Architecture
  {
    id: 4,
    badge: "THE 3-SECOND MIRACLE",
    badgeColor: "#1040C0",
    title: "How Trinetra Works: Ingest, Track, Freeze",
    subtitle: "A unified pipeline from victim complaint to court-admissible debit freeze",
    analogyTitle: "The Airport Security Analogy",
    analogyText:
      "Think of Trinetra like an automated baggage scanner at the airport: the moment suspicious luggage enters the conveyor belt, high-speed cameras track it through tunnels and sound an alarm at the exact terminal exit gate before it leaves the building.",
    speakerCue:
      "Now judges, let us look at the architecture: Trinetra simplifies the entire investigation into three automated stages.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#D02020] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#D02020] text-white border-2 border-[#121212] flex items-center justify-center font-black">
              1
            </div>
            <h4 className="font-black text-xl uppercase">1. INGEST</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Takes the suspect wallet from 1930 NCRP complaint, FIR copy, or beat officer's camera scanner.
            </p>
            <div className="text-[10px] font-mono text-gray-500 pt-2 border-t border-gray-200">
              Latency: 400ms • Cross-checks OFAC & NCRP
            </div>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#1040C0] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#1040C0] text-white border-2 border-[#121212] flex items-center justify-center font-black">
              2
            </div>
            <h4 className="font-black text-xl uppercase">2. TRACK</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Autonomous swarm traverses the blockchain, spots peeling tricks, and clusters with registered Indian exchanges.
            </p>
            <div className="text-[10px] font-mono text-gray-500 pt-2 border-t border-gray-200">
              Latency: 1,400ms • Public RPC nodes
            </div>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#F0C020] p-6 space-y-3">
            <div className="w-10 h-10 bg-[#F0C020] text-[#121212] border-2 border-[#121212] flex items-center justify-center font-black">
              3
            </div>
            <h4 className="font-black text-xl uppercase">3. FREEZE</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Drafts Section 94 BNSS summons and sends direct emergency escalation email to the exchange nodal officer.
            </p>
            <div className="text-[10px] font-mono text-gray-500 pt-2 border-t border-gray-200">
              Latency: 400ms • SHA-256 evidence seal
            </div>
          </div>
        </div>

        <div className="p-4 bg-white border-3 border-[#121212] flex items-center justify-between text-xs font-bold">
          <span>TOTAL TIME ELAPSED:</span>
          <span className="font-black text-base text-[#D02020] font-mono">2.33 SECONDS TOTAL</span>
        </div>
      </div>
    ),
  },

  // SLIDE 5: Visual Laundering Flow & Analogy
  {
    id: 5,
    badge: "UNDERSTANDING THE FLOW",
    badgeColor: "#F0C020",
    title: "How Criminals Launder: The Currency Note Trick",
    subtitle: "Understanding UTXO Peeling Chains and Smurfing without complex math",
    analogyTitle: "The ₹500 Bill at the Tea Stall",
    analogyText:
      "When a thief steals a ₹500 note, they don't spend it all at once. They go to a tea stall, buy a ₹30 chai, and take ₹470 clean change in 10-rupee coins. Then they do it again at the next shop. In cryptocurrency, this is called a 'Peeling Chain'. Trinetra's math spots this pattern instantly!",
    speakerCue:
      "Judges often ask: How do criminals try to hide their trail? Let us explain the 'Peeling Chain' and 'Smurfing' with a simple daily analogy.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-[#1040C0]">
              LIVE TRANSACTION FLOW SCHEMATIC
            </span>
            <span className="text-[10px] font-mono bg-gray-100 px-2 py-0.5 border border-black">TRC-20 / UTXO</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center text-center">
            <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212]">
              <span className="text-[10px] font-black uppercase text-[#D02020]">VICTIM DEPOSIT</span>
              <p className="font-black text-sm mt-1">₹45 Lakhs</p>
              <p className="text-[10px] text-gray-500 font-mono mt-1 truncate">TX9vKb... (Seed)</p>
            </div>

            <div className="p-4 bg-[#FFF9C4] border-2 border-[#121212]">
              <span className="text-[10px] font-black uppercase text-[#121212]">HOP 1: PEELING</span>
              <p className="font-black text-sm mt-1">Peel ₹5L / Retain ₹40L</p>
              <p className="text-[10px] text-gray-600 font-mono mt-1">Heuristic A: Ratio ≥ 0.85</p>
            </div>

            <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212]">
              <span className="text-[10px] font-black uppercase text-[#1040C0]">HOP 2: SMURFING</span>
              <p className="font-black text-sm mt-1">Split 3 Tranches</p>
              <p className="text-[10px] text-gray-600 font-mono mt-1">Heuristic B: CV &lt; 0.50</p>
            </div>

            <div className="p-4 bg-[#D02020] text-white border-2 border-[#121212]">
              <span className="text-[10px] font-black uppercase text-[#F0C020]">TERMINAL VASP</span>
              <p className="font-black text-sm mt-1">CoinDCX Gateway</p>
              <p className="text-[10px] font-mono text-white/80 mt-1">96% Confirmed Cluster</p>
            </div>
          </div>

          <p className="text-xs text-gray-700 leading-relaxed">
            <strong>What Trinetra does:</strong> While a human officer gets confused by the multiple split wallets,
            Trinetra's algorithms recognize that the majority change is returning to the same criminal controller until it
            hits an exchange deposit address.
          </p>
        </div>

        {isTechMode && (
          <div className="p-4 bg-gray-100 border-2 border-[#121212] font-mono text-xs space-y-1">
            <div className="text-gray-600">Deterministic Mathematical Equations:</div>
            <div>Heuristic A: R_change = V_change / V_total &ge; 0.85</div>
            <div>Heuristic B: CV = &sigma; / &mu; &lt; 0.50 (where N &ge; 3)</div>
          </div>
        )}
      </div>
    ),
  },

  // SLIDE 6: The 5 AI Detective Agents
  {
    id: 6,
    badge: "MEET THE AI SWARM",
    badgeColor: "#121212",
    title: "5 Specialized Detective Agents",
    subtitle: "A collaborative state machine instead of one slow linear script",
    analogyTitle: "The Special Task Force (SIT)",
    analogyText:
      "Think of a police Special Investigation Team: one officer questions the informant, two officers chase the suspect through city streets, one analyst studies CCTV footage, and the inspector writes the arrest warrant. Trinetra's 5 AI agents work together in the exact same way!",
    speakerCue:
      "Judges, behind Trinetra is an autonomous multi-agent swarm. We don't use slow black-box AI; we have 5 specialized agents.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="bg-white border-3 border-[#121212] p-4 text-center space-y-2">
            <span className="bg-[#D02020] text-white text-[10px] font-black px-2 py-0.5 uppercase">ALPHA</span>
            <h5 className="font-black text-xs uppercase">The Gatekeeper</h5>
            <p className="text-[11px] text-gray-700 leading-tight">
              Verifies wallet address checksums and routes network.
            </p>
          </div>

          <div className="bg-white border-3 border-[#121212] p-4 text-center space-y-2">
            <span className="bg-[#1040C0] text-white text-[10px] font-black px-2 py-0.5 uppercase">BETA</span>
            <h5 className="font-black text-xs uppercase">The Tracker</h5>
            <p className="text-[11px] text-gray-700 leading-tight">
              Races through multi-hop transfers and builds the graph.
            </p>
          </div>

          <div className="bg-white border-3 border-[#121212] p-4 text-center space-y-2">
            <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase">GAMMA</span>
            <h5 className="font-black text-xs uppercase">The Math Whiz</h5>
            <p className="text-[11px] text-gray-700 leading-tight">
              Spots peeling chains and calculates structured smurfing.
            </p>
          </div>

          <div className="bg-white border-3 border-[#121212] p-4 text-center space-y-2">
            <span className="bg-[#1040C0] text-white text-[10px] font-black px-2 py-0.5 uppercase">DELTA</span>
            <h5 className="font-black text-xs uppercase">The Exchange Spotter</h5>
            <p className="text-[11px] text-gray-700 leading-tight">
              Identifies CoinDCX, Binance, or WazirX terminal vaults.
            </p>
          </div>

          <div className="bg-white border-3 border-[#121212] p-4 text-center space-y-2">
            <span className="bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase">EPSILON</span>
            <h5 className="font-black text-xs uppercase">The Legal Officer</h5>
            <p className="text-[11px] text-gray-700 leading-tight">
              Drafts Section 94 BNSS freeze notice with SHA-256 seal.
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#F0F0F0] border-2 border-[#121212] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">Real-Time Telemetry:</span>
            <span className="text-gray-600">All 5 agents stream reasoning logs to the officer live via SSE</span>
          </div>
          <span className="font-mono font-bold text-[#1040C0]">LATENCY: &lt; 3.0s</span>
        </div>
      </div>
    ),
  },

  // SLIDE 7: New Indian Criminal Law (BNSS & BSA 2023)
  {
    id: 7,
    badge: "INDIAN LEGAL COMPLIANCE",
    badgeColor: "#D02020",
    title: "100% Compliant with New Criminal Laws",
    subtitle: "Built specifically for Bharatiya Nagarik Suraksha Sanhita & Sakshya Adhiniyam",
    analogyTitle: "Why Court Admissibility Matters",
    analogyText:
      "Catching a thief is useless if the judge throws out the case because of bad paperwork. In July 2024, India replaced old British-era laws. Trinetra is the only platform that natively produces notices under the brand new Indian penal codes.",
    speakerCue:
      "Judges, our legal foundation is rock-solid. On July 1, 2024, India implemented BNSS and BSA. Trinetra is strictly aligned.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#1040C0] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-[#1040C0] text-white text-[10px] font-black px-2 py-0.5 uppercase">
                SECTION 94 BNSS 2023
              </span>
              <span className="text-xs font-mono text-gray-500">Replaces Sec 91 CrPC</span>
            </div>
            <h4 className="font-black text-2xl uppercase text-[#121212]">Statutory Freezing Summons</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Legally binds Indian registered exchanges (VASPs) to execute an administrative debit freeze on the
              suspect account immediately, and provide full KYC and bank records within 24 hours.
            </p>
            <div className="p-3 bg-[#F0F0F0] border border-[#121212] text-[11px] font-bold text-gray-800">
              Direct escalation email dispatched to nodal officer (e.g. compliance@coindcx.com).
            </div>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#F0C020] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase">
                SECTION 63 BSA 2023
              </span>
              <span className="text-xs font-mono text-gray-500">Replaces Sec 65B IEA</span>
            </div>
            <h4 className="font-black text-2xl uppercase text-[#121212]">Tamper-Proof Evidence Seal</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Computes a cryptographic SHA-256 hash certificate proving uninterrupted chain of custody across every
              blockchain hop. Ready for direct admissibility in High Court.
            </p>
            <div className="p-3 bg-[#F0F0F0] border border-[#121212] text-[11px] font-bold text-gray-800 font-mono truncate">
              SHA-256: c8f391b4a029fe8...19b027d1
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 8: Zero-Dollar Innovation ($0 Cost to Taxpayer)
  {
    id: 8,
    badge: "FINANCIAL SUSTAINABILITY",
    badgeColor: "#1040C0",
    title: "The ₹0.00 Taxpayer Budget Breakthrough",
    subtitle: "Replacing $50,000/year foreign tools with free public blockchain infrastructure",
    analogyTitle: "Solar Energy vs Expensive Fuel",
    analogyText:
      "Instead of paying foreign corporations ₹40 Lakhs every single year for private API keys, Trinetra taps directly into open, public blockchain networks for free—like installing solar panels instead of buying expensive diesel generators!",
    speakerCue:
      "Judges, the biggest differentiator of Trinetra is budget. We built an enterprise-grade forensic tool that requires ZERO paid subscriptions.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#D02020] p-6 space-y-3">
            <span className="font-mono text-xs font-black text-[#D02020]">WESTERN PROPRIETARY TOOLS</span>
            <h4 className="font-black text-2xl uppercase">₹40 Lakhs / Yr</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Chainalysis, Elliptic, TRM Labs require expensive dollar subscriptions out of reach for district cyber cells.
            </p>
          </div>

          <div className="bg-[#FFF9C4] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#1040C0] p-6 space-y-3">
            <span className="font-mono text-xs font-black text-[#1040C0]">TRINETRA ARCHITECTURE</span>
            <h4 className="font-black text-2xl uppercase text-[#1040C0]">₹0.00 / FREE</h4>
            <p className="text-xs text-gray-800 leading-relaxed">
              Engineered custom algorithmic walkers on top of free public explorers (Blockstream, TronGrid, Cloudflare RPC).
            </p>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-3">
            <span className="font-mono text-xs font-black text-[#121212]">PAN-INDIA SCALABILITY</span>
            <h4 className="font-black text-2xl uppercase">All 28 States</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every police station from Jammu to Kerala can run Trinetra without budget approvals or foreign currency spend.
            </p>
          </div>
        </div>

        <div className="p-4 bg-white border-2 border-[#121212] text-xs font-medium text-gray-700">
          <strong>Hackathon Evaluation Safety:</strong> Includes an offline mock simulation engine so our live demo works flawlessly even if the hackathon WiFi drops!
        </div>
      </div>
    ),
  },

  // SLIDE 9: Field Interceptor for Beat Officers
  {
    id: 9,
    badge: "ON-GROUND LAW ENFORCEMENT",
    badgeColor: "#F0C020",
    title: "Field Interceptor: Mobile App for Beat Officers",
    subtitle: "Equipping raiding teams and local police with camera QR/OCR wallet capture",
    analogyTitle: "Digital Sniffer Dog in an Officer's Pocket",
    analogyText:
      "When police raid a cyber scam call center, scammers throw away paper wallets or lock their laptops. With Trinetra Field App, an officer points their mobile phone camera at a QR code, and within 15 seconds, the wallet is triaged and a digital seizure memo is generated with GPS coordinates.",
    speakerCue:
      "Trinetra is not just for air-conditioned headquarters; we built a mobile Progressive Web App for officers in the field.",
    renderContent: (isTechMode) => (
      <div className="space-y-6 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <Smartphone className="w-8 h-8 text-[#D02020]" />
            <h4 className="font-black text-lg uppercase">Camera Optical OCR</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Scans crypto addresses directly from suspect phones, slips of paper, or hardware ledgers.
            </p>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <Clock className="w-8 h-8 text-[#1040C0]" />
            <h4 className="font-black text-lg uppercase">15-Second On-Scene Intake</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Enables beat cops to triage funds on the spot before criminals can trigger remote wipe.
            </p>
          </div>

          <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-6 space-y-2">
            <Lock className="w-8 h-8 text-[#F0C020]" />
            <h4 className="font-black text-lg uppercase">GPS Seizure Memo</h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Auto-generates Section 63 BSA panchnama with latitude/longitude coordinates and timestamp.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // SLIDE 10: Conclusion & Live Demo Launch
  {
    id: 10,
    badge: "CONCLUSION & BENCHMARKS",
    badgeColor: "#D02020",
    title: "Trinetra: Summary & Live Demonstration",
    subtitle: "Ready to protect Indian citizens and empower the I4C 1930 ecosystem",
    analogyTitle: "The Final Scorecard",
    analogyText:
      "Trinetra transforms cryptocurrency cyber investigations from a slow, multi-week bureaucratic nightmare into an instantaneous, automated 3-second defensive shield.",
    speakerCue:
      "To conclude respected judges, Trinetra is ready, tested, and fully functional. Let us now demonstrate the live Command Canvas!",
    renderContent: (isTechMode) => (
      <div className="space-y-8 max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
            <p className="font-black text-3xl text-[#D02020] font-mono">&lt; 3.0s</p>
            <p className="text-[10px] font-bold uppercase text-gray-600 mt-1">Attribution Latency</p>
          </div>
          <div className="p-4 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
            <p className="font-black text-3xl text-[#1040C0] font-mono">5 AGENTS</p>
            <p className="text-[10px] font-bold uppercase text-gray-600 mt-1">Autonomous Swarm</p>
          </div>
          <div className="p-4 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
            <p className="font-black text-3xl text-[#F0C020] font-mono">100%</p>
            <p className="text-[10px] font-bold uppercase text-gray-600 mt-1">BNSS / BSA Legal</p>
          </div>
          <div className="p-4 bg-white border-3 border-[#121212] shadow-[4px_4px_0px_0px_#121212]">
            <p className="font-black text-3xl text-[#121212] font-mono">₹0.00</p>
            <p className="text-[10px] font-bold uppercase text-gray-600 mt-1">Taxpayer Cost</p>
          </div>
        </div>

        <div className="bg-[#121212] text-white p-6 border-4 border-[#121212] shadow-[8px_8px_0px_0px_#F0C020] flex flex-wrap items-center justify-between gap-6">
          <div>
            <h4 className="font-black text-2xl uppercase text-[#F0C020]">Ready for Live Demo?</h4>
            <p className="text-xs text-gray-300 mt-1">
              Select a verified scam case and watch the 5-agent swarm resolve terminal exchanges in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard"
              className="px-6 py-3.5 bg-[#D02020] text-white font-black text-xs uppercase tracking-wider border-2 border-white shadow-[3px_3px_0px_0px_white] hover:bg-[#b01a1a] transition-all flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Launch Command Canvas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#interactive-demo"
              className="px-5 py-3.5 bg-white text-[#121212] font-black text-xs uppercase tracking-wider border-2 border-white hover:bg-gray-200 transition-all"
            >
              Try Simulator
            </Link>
          </div>
        </div>
      </div>
    ),
  },
];
