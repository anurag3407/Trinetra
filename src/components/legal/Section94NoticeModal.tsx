"use client";

import React, { useState } from "react";
import { X, Printer, Download, Check, Copy, ShieldCheck } from "lucide-react";
import { AnalysisSummary } from "@/types/forensics";
import { generateSection94Notice } from "@/lib/legal/statutoryTemplates";

interface NoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  summary: AnalysisSummary;
}

export default function Section94NoticeModal({
  isOpen,
  onClose,
  summary,
}: NoticeModalProps) {
  const [officerName, setOfficerName] = useState(
    "Inspector Vikram S. Rathore, State Cyber Crime Cell"
  );
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const noticeContent = generateSection94Notice(summary, officerName);

  const handleCopy = () => {
    navigator.clipboard.writeText(noticeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-[#121212] shadow-[12px_12px_0px_0px_#121212] w-full max-w-4xl max-h-[90vh] flex flex-col justify-between">
        {/* Modal Header */}
        <div className="bg-[#121212] text-white p-4 flex items-center justify-between border-b-4 border-[#121212]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#F0C020]" />
            <div>
              <h3 className="font-black text-sm uppercase tracking-wider">
                STATUTORY FREEZING DIRECTIVE — SECTION 94 BNSS (SECTION 91 CrPC)
              </h3>
              <p className="text-[10px] text-gray-300">
                CASE #{summary.caseId} | SHA-256 EVIDENCE CERTIFIED
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-800 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input for Officer Name */}
        <div className="bg-[#F0F0F0] p-4 border-b-2 border-[#121212] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[280px]">
            <label className="text-xs font-black uppercase text-[#121212] whitespace-nowrap">
              SIGNING OFFICER:
            </label>
            <input
              type="text"
              value={officerName}
              onChange={(e) => setOfficerName(e.target.value)}
              className="flex-1 px-3 py-1.5 border-2 border-[#121212] text-xs font-bold bg-white focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "COPIED NOTICE" : "COPY NOTICE TEXT"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1.5 active:translate-x-[1px] active:translate-y-[1px]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT COURT NOTICE</span>
            </button>
          </div>
        </div>

        {/* Notice Preview Content */}
        <div className="p-6 overflow-y-auto flex-1 bg-white font-mono text-xs leading-relaxed text-[#121212] whitespace-pre-wrap select-text">
          {noticeContent}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#F0F0F0] border-t-4 border-[#121212] flex flex-wrap items-center justify-between text-[10px] font-bold text-gray-600 gap-2">
          <span>COMPLIANCE WITH SECTION 63 OF BHARATIYA SAKSHYA ADHINIYAM, 2023 (BSA)</span>
          <span className="text-[#1040C0] font-black">MHA / I4C NATIONAL PROTOCOL VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
