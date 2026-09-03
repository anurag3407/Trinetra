"use client";

import React, { useState } from "react";
import AppHeader from "@/components/common/AppHeader";
import { PRESET_CASES } from "@/lib/providers/presetScams";
import { generateSection94Notice } from "@/lib/legal/statutoryTemplates";
import { buildFiuIndStrPayload } from "@/lib/legal/fiuIndExporter";
import { Printer, Copy, Download, ShieldCheck, Check, FileText } from "lucide-react";

export default function NoticeStudioPage() {
  const [selectedCaseId, setSelectedCaseId] = useState("case-digital-arrest-45l");
  const [officerName, setOfficerName] = useState(
    "Inspector Vikram S. Rathore, Cyber Crime Police Station, Maharashtra"
  );
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [copiedStr, setCopiedStr] = useState(false);

  const activeCase =
    PRESET_CASES.find((p) => p.id === selectedCaseId) || PRESET_CASES[0];
  const noticeContent = generateSection94Notice(activeCase.summary, officerName);
  const fiuStr = buildFiuIndStrPayload(activeCase.summary);

  const handleCopyNotice = () => {
    navigator.clipboard.writeText(noticeContent);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 1500);
  };

  const handleCopyStr = () => {
    navigator.clipboard.writeText(JSON.stringify(fiuStr, null, 2));
    setCopiedStr(true);
    setTimeout(() => setCopiedStr(false), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <AppHeader />

      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex-1 space-y-6">
        {/* Title Banner */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#D02020] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                COURT-ADMISSIBLE NOTICE STUDIO
              </span>
              <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                SECTION 94 BNSS 2023 / 91 CrPC
              </span>
            </div>
            <h1 className="font-black text-2xl sm:text-4xl uppercase tracking-tighter text-[#121212]">
              STATUTORY FREEZING DIRECTIVES & FIU-IND STR EXPORTS
            </h1>
          </div>

          {/* Quick Case Switcher */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-black uppercase text-[#121212]">SELECT CASE:</label>
            <select
              value={selectedCaseId}
              onChange={(e) => setSelectedCaseId(e.target.value)}
              className="px-3 py-2 bg-[#F0F0F0] border-2 border-[#121212] text-xs font-bold uppercase focus:outline-none"
            >
              {PRESET_CASES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Action Controls & Officer Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#121212]">
              <div className="flex-1 min-w-[260px]">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">
                  AUTHORIZING INVESTIGATING OFFICER (IO):
                </label>
                <input
                  type="text"
                  value={officerName}
                  onChange={(e) => setOfficerName(e.target.value)}
                  className="w-full px-3 py-1.5 border-2 border-[#121212] text-xs font-bold bg-[#F0F0F0] focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyNotice}
                  className="px-4 py-2 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
                >
                  {copiedNotice ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedNotice ? "COPIED" : "COPY NOTICE"}</span>
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT NOTICE</span>
                </button>
              </div>
            </div>

            {/* Formal Text View */}
            <div className="bg-[#F0F0F0] border-2 border-[#121212] p-5 font-mono text-xs leading-relaxed max-h-[600px] overflow-y-auto whitespace-pre-wrap select-text">
              {noticeContent}
            </div>
          </div>

          {/* Right Column: FIU-IND Export & Cryptographic Seal */}
          <div className="lg:col-span-4 space-y-6">
            {/* Cryptographic Seal Box */}
            <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-5 space-y-3">
              <div className="flex items-center gap-2 text-[#1040C0]">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="font-black text-sm uppercase tracking-wider text-[#121212]">
                  SECTION 63 BSA EVIDENCE SEAL
                </h3>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                Cryptographic SHA-256 seal computed across transaction provenance hashes proves data authenticity in trial court.
              </p>
              <div className="bg-[#121212] text-white p-3 border-2 border-[#121212] font-mono text-[10px] break-all">
                {activeCase.summary.evidenceSha256}
              </div>
            </div>

            {/* FIU-IND STR Payload */}
            <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest bg-[#1040C0] text-white px-2 py-0.5">
                  REGULATORY COMPLIANCE
                </span>
                <button
                  onClick={handleCopyStr}
                  className="p-1 border border-[#121212] bg-[#F0F0F0] hover:bg-gray-200 text-xs font-bold"
                  title="Copy JSON Payload"
                >
                  {copiedStr ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <h4 className="font-black text-base uppercase text-[#121212]">
                FIU-IND STR JSON PAYLOAD
              </h4>
              <p className="text-xs text-gray-700">
                Machine-readable Suspicious Transaction Report structured to Prevention of Money Laundering Act (PMLA 2002) reporting standards.
              </p>
              <pre className="bg-[#F0F0F0] border-2 border-[#121212] p-3 text-[10px] font-mono max-h-48 overflow-y-auto">
                {JSON.stringify(fiuStr, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
