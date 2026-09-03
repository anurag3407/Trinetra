"use client";

import React from "react";
import { X, ShieldAlert, Landmark, Phone, Mail, ExternalLink, Copy, Check } from "lucide-react";
import { ForensicNode } from "@/types/forensics";

interface NodeInspectorDrawerProps {
  node: ForensicNode | null;
  onClose: () => void;
  onOpenNoticeModal?: () => void;
}

export default function NodeInspectorDrawer({
  node,
  onClose,
  onOpenNoticeModal,
}: NodeInspectorDrawerProps) {
  const [copied, setCopied] = React.useState(false);

  if (!node) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(node.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <aside className="w-full sm:w-96 bg-white border-l-4 border-[#121212] shadow-[-6px_0px_0px_0px_#121212] p-6 flex flex-col justify-between overflow-y-auto z-20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b-4 border-[#121212]">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">NODE INSPECTOR</span>
            <h3 className="font-black text-xl uppercase text-[#121212] truncate max-w-[240px]">
              {node.label}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 border-2 border-[#121212] hover:bg-[#D02020] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Address Card */}
        <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3 shadow-[3px_3px_0px_0px_#121212] space-y-1">
          <p className="text-[10px] font-black uppercase tracking-wider text-gray-500">
            {node.blockchain} WALLET ADDRESS
          </p>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs font-bold break-all">{node.address}</span>
            <button
              onClick={copyAddress}
              className="p-1 border border-[#121212] bg-white hover:bg-gray-100 flex-shrink-0"
              title="Copy Address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Balance & Risk Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border-2 border-[#121212] p-3 shadow-[3px_3px_0px_0px_#121212]">
            <span className="text-[10px] font-bold text-gray-500 uppercase">CURRENT BALANCE</span>
            <p className="font-black text-xl text-[#121212] mt-0.5">
              {node.balance} <span className="text-xs text-gray-600">{node.currency}</span>
            </p>
          </div>
          <div className="bg-white border-2 border-[#121212] p-3 shadow-[3px_3px_0px_0px_#121212]">
            <span className="text-[10px] font-bold text-gray-500 uppercase">AML RISK SCORE</span>
            <p className={`font-black text-xl mt-0.5 ${node.riskScore >= 75 ? "text-[#D02020]" : "text-[#1040C0]"}`}>
              {node.riskScore} <span className="text-xs text-gray-600">/ 100</span>
            </p>
          </div>
        </div>

        {/* Heuristic Tags */}
        <div className="space-y-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">HEURISTIC FLAGS</span>
          <div className="flex flex-wrap gap-1.5">
            {node.heuristicFlags.map((flag, idx) => (
              <span
                key={idx}
                className="bg-[#121212] text-white text-[10px] font-mono font-bold px-2 py-0.5 border border-black uppercase"
              >
                {flag}
              </span>
            ))}
          </div>
        </div>

        {/* If Terminal VASP Node */}
        {node.type === "VASP" && (
          <div className="bg-[#FFF9C4] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest bg-[#1040C0] text-white px-2 py-0.5">
                VASP PROFILE
              </span>
              <span className="text-[10px] font-black bg-[#D02020] text-white px-2 py-0.5">
                FIU-IND REGISTERED
              </span>
            </div>
            <h4 className="font-black text-lg text-[#121212] uppercase">
              {node.attributedVasp || "Registered Indian VASP"}
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed">
              Custodial deposit address identified. Emergency freezing directive ready for immediate issuance under Section 94 BNSS.
            </p>
            <div className="pt-2 border-t-2 border-[#121212] space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1040C0]" />
                <span className="font-bold">compliance@coindcx.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1040C0]" />
                <span className="font-bold">+91-80-6922-8888</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Button */}
      <div className="pt-6 border-t-4 border-[#121212] mt-6">
        <button
          onClick={onOpenNoticeModal}
          className="w-full py-3 bg-[#D02020] text-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#b01a1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          GENERATE SECTION 94 BNSS NOTICE
        </button>
      </div>
    </aside>
  );
}
