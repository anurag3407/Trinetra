"use client";

import React from "react";
import { Scale, CheckCircle2, ShieldCheck, Lock } from "lucide-react";

export default function LegalComplianceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#D02020] text-white border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="bg-[#121212] text-white text-xs font-black px-2.5 py-1 uppercase tracking-widest">
            INDIAN EVIDENCE ACT & BNSS 2023
          </span>
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter leading-[0.9]">
            COURT-ADMISSIBLE UNDER NEW CRIMINAL LAWS
          </h2>
          <p className="font-medium text-lg text-white/90 leading-relaxed">
            In July 2024, India replaced the colonial CrPC and Evidence Act with the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA). TRINETRA is 100% aligned with the new legal statutory mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <span className="bg-[#1040C0] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              STATUTORY SUMMONS
            </span>
            <h3 className="font-black text-2xl uppercase">Section 94 BNSS (Section 91 CrPC)</h3>
            <p className="font-medium text-sm text-gray-700 leading-relaxed">
              Statutory freezing directive commanding registered exchanges (VASPs) to place an immediate custodial debit freeze and produce KYC dossiers within 24 hours.
            </p>
          </div>

          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              ELECTRONIC EVIDENCE SEAL
            </span>
            <h3 className="font-black text-2xl uppercase">Section 63 BSA (Section 65B IEA)</h3>
            <p className="font-medium text-sm text-gray-700 leading-relaxed">
              Cryptographic SHA-256 evidence certificate proving uninterrupted computational chain of custody across every transaction hash in the laundering trajectory.
            </p>
          </div>

          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <span className="bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              FINANCIAL INTELLIGENCE
            </span>
            <h3 className="font-black text-2xl uppercase">FIU-IND STR PMLA 2002</h3>
            <p className="font-medium text-sm text-gray-700 leading-relaxed">
              Automated compilation of Suspicious Transaction Reports (STRs) in standard machine-readable JSON schema, ready for immediate dispatch to FIU-IND authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
