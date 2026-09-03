"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight, CheckCircle2, ShieldAlert, Zap, Copy, Check } from "lucide-react";
import { PRESET_CASES, PresetCase } from "@/lib/providers/presetScams";

export default function InteractiveDemo() {
  const [selectedPresetId, setSelectedPresetId] = useState("case-digital-arrest-45l");
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(3); // finished by default for immediate preview
  const [copied, setCopied] = useState(false);

  const activeCase: PresetCase =
    PRESET_CASES.find((p) => p.id === selectedPresetId) || PRESET_CASES[0];

  const handleSimulate = () => {
    setIsRunning(true);
    setActiveStep(0);

    const timer1 = setTimeout(() => setActiveStep(1), 500);
    const timer2 = setTimeout(() => setActiveStep(2), 1200);
    const timer3 = setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
    }, 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  };

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="interactive-demo" className="py-20 px-4 sm:px-6 bg-white border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#D02020] text-white px-2.5 py-1 text-xs font-black uppercase tracking-widest">
              HANDS-ON SIMULATOR
            </span>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              100% Client-Side Demo
            </span>
          </div>
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.9]">
            TEST LIVE ATTRIBUTION IN UNDER 3 SECONDS
          </h2>
          <p className="font-medium text-base sm:text-lg text-gray-700 max-w-3xl">
            Select a verified Indian cyber fraud scenario below, run the autonomous pathfinder swarm, and watch the fund trail resolve into the nearest VASP deposit gateway.
          </p>
        </div>

        {/* Preset Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PRESET_CASES.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setSelectedPresetId(preset.id);
                setActiveStep(3);
              }}
              className={`p-4 text-left border-4 border-[#121212] transition-all ${
                selectedPresetId === preset.id
                  ? "bg-[#F0C020] shadow-[6px_6px_0px_0px_#121212] -translate-y-1"
                  : "bg-[#F0F0F0] hover:bg-gray-100 shadow-[3px_3px_0px_0px_#121212]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#121212] text-white px-2 py-0.5">
                  {preset.category}
                </span>
                <span className="text-xs font-bold text-gray-700">₹{(preset.lossInr / 100000).toFixed(1)} Lakhs</span>
              </div>
              <h4 className="font-black text-lg text-[#121212] uppercase leading-tight mt-1">
                {preset.title}
              </h4>
              <p className="text-xs font-mono text-gray-600 truncate mt-1">
                {preset.suspectAddress}
              </p>
            </button>
          ))}
        </div>

        {/* Live Simulator Workspace Box */}
        <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#121212] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-4 border-[#121212]">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#D02020]">ACTIVE CASE DOSSIER</span>
              <h3 className="font-black text-2xl sm:text-3xl uppercase text-[#121212]">
                {activeCase.title}
              </h3>
              <p className="text-xs text-gray-600 mt-1 max-w-2xl">{activeCase.description}</p>
            </div>

            <button
              onClick={handleSimulate}
              disabled={isRunning}
              className="px-6 py-3.5 bg-[#D02020] text-white border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-[#b01a1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>SWARM TRAVERSING...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>RE-RUN SWARM ATTRIBUTION</span>
                </>
              )}
            </button>
          </div>

          {/* Stepper Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
            <div className={`p-4 border-2 border-[#121212] ${activeStep >= 0 ? "bg-white shadow-[4px_4px_0px_0px_#121212]" : "bg-gray-200 opacity-60"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#D02020] text-white px-1.5 py-0.5">AGENT ALPHA</span>
                {activeStep >= 0 && <CheckCircle2 className="w-4 h-4 text-[#D02020]" />}
              </div>
              <p className="font-black text-sm uppercase">1. Ingestion & Triage</p>
              <p className="text-xs text-gray-600 mt-1">Validated {activeCase.blockchain} checksum & parsed seed inputs.</p>
            </div>

            <div className={`p-4 border-2 border-[#121212] ${activeStep >= 1 ? "bg-white shadow-[4px_4px_0px_0px_#121212]" : "bg-gray-200 opacity-60"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#1040C0] text-white px-1.5 py-0.5">AGENT BETA & GAMMA</span>
                {activeStep >= 1 && <CheckCircle2 className="w-4 h-4 text-[#1040C0]" />}
              </div>
              <p className="font-black text-sm uppercase">2. Multi-Hop Peeling</p>
              <p className="text-xs text-gray-600 mt-1">Followed {activeCase.summary.totalHops} hops. Triggered Heuristics A & B.</p>
            </div>

            <div className={`p-4 border-2 border-[#121212] ${activeStep >= 2 ? "bg-white shadow-[4px_4px_0px_0px_#121212]" : "bg-gray-200 opacity-60"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#F0C020] text-[#121212] px-1.5 py-0.5">AGENT DELTA</span>
                {activeStep >= 2 && <CheckCircle2 className="w-4 h-4 text-[#121212]" />}
              </div>
              <p className="font-black text-sm uppercase">3. Nearest VASP</p>
              <p className="text-xs text-gray-600 mt-1">Attributed: {activeCase.summary.nearestVasp?.vaspName} ({activeCase.summary.nearestVasp?.attributionConfidence}% Conf).</p>
            </div>

            <div className={`p-4 border-2 border-[#121212] ${activeStep >= 3 ? "bg-white shadow-[4px_4px_0px_0px_#121212]" : "bg-gray-200 opacity-60"}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#121212] text-white px-1.5 py-0.5">AGENT EPSILON</span>
                {activeStep >= 3 && <CheckCircle2 className="w-4 h-4 text-[#121212]" />}
              </div>
              <p className="font-black text-sm uppercase">4. Section 94 Notice</p>
              <p className="text-xs text-gray-600 mt-1">SHA-256 seal computed. Court freeze order generated.</p>
            </div>
          </div>

          {/* Attribution Result Callout */}
          <div className="bg-white border-4 border-[#121212] p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#1040C0]">IDENTIFIED TERMINAL EXCHANGE (VASP)</span>
                <h4 className="font-black text-2xl text-[#121212]">
                  {activeCase.summary.nearestVasp?.vaspName} ({activeCase.summary.nearestVasp?.legalEntity})
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase">
                  {activeCase.summary.nearestVasp?.attributionConfidence}% CONFIDENCE
                </span>
                <span className="px-3 py-1 bg-[#1040C0] text-white border-2 border-[#121212] font-black text-xs uppercase">
                  {activeCase.summary.nearestVasp?.hopsFromSuspect} HOPS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3">
                <p className="font-bold text-gray-500 uppercase">Terminal Deposit Address:</p>
                <p className="text-[#121212] font-black break-all mt-0.5">
                  {activeCase.summary.nearestVasp?.terminalAddress}
                </p>
              </div>
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3">
                <p className="font-bold text-gray-500 uppercase">Emergency Nodal Escalation Email:</p>
                <p className="text-[#1040C0] font-black mt-0.5">
                  {activeCase.summary.nearestVasp?.nodalContact.email}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#121212]">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                <span className="font-bold uppercase text-[#121212]">SHA-256 SEAL:</span>
                <span className="truncate max-w-[200px] sm:max-w-[340px]">{activeCase.summary.evidenceSha256}</span>
                <button
                  onClick={() => copyHash(activeCase.summary.evidenceSha256)}
                  className="p-1 hover:bg-gray-200 border border-gray-400"
                  title="Copy SHA-256 Hash"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <Link
                href={`/dashboard?preset=${activeCase.id}`}
                className="px-4 py-2 bg-[#121212] text-white font-bold text-xs uppercase tracking-wider hover:bg-gray-800 transition-all flex items-center gap-2"
              >
                <span>Open in Full Command Canvas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
