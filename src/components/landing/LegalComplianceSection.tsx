"use client";

import React from "react";
import Link from "next/link";
import { Scale, CheckCircle2, ShieldCheck, Lock, ArrowRight } from "lucide-react";

export default function LegalComplianceSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#D02020] text-white border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="bg-[#121212] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
            INDIAN EVIDENCE ACT & BNSS 2023
          </span>
          <h2 className="font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.92]">
            COURT-ADMISSIBLE UNDER NEW CRIMINAL LAWS
          </h2>
          <p className="font-medium text-lg sm:text-xl text-white/95 leading-relaxed">
            In July 2024, India replaced the colonial CrPC and Evidence Act with the Bharatiya Nagarik Suraksha Sanhita (BNSS) and Bharatiya Sakshya Adhiniyam (BSA). TRINETRA is 100% aligned with the new statutory mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 sm:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-[#1040C0] text-white text-[10px] font-black px-2.5 py-1 uppercase tracking-widest">
                STATUTORY SUMMONS
              </span>
              <h3 className="font-black text-2xl sm:text-3xl uppercase leading-tight">Section 94 BNSS (Section 91 CrPC)</h3>
              <p className="font-medium text-sm sm:text-base text-gray-700 leading-relaxed">
                Statutory freezing directive commanding registered exchanges (VASPs) to place an immediate custodial debit freeze and produce KYC dossiers within 24 hours.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-gray-200">
              <span className="text-xs font-bold uppercase text-[#1040C0]">Mandatory 24-Hour SLA</span>
            </div>
          </div>

          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 sm:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2.5 py-1 uppercase tracking-widest">
                ELECTRONIC EVIDENCE SEAL
              </span>
              <h3 className="font-black text-2xl sm:text-3xl uppercase leading-tight">Section 63 BSA (Section 65B IEA)</h3>
              <p className="font-medium text-sm sm:text-base text-gray-700 leading-relaxed">
                Cryptographic SHA-256 evidence certificate proving uninterrupted computational chain of custody across every transaction hash in the laundering trajectory.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-gray-200">
              <span className="text-xs font-bold uppercase text-[#121212]">High Court Tamper-Evident</span>
            </div>
          </div>

          <div className="bg-white text-[#121212] border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-8 sm:p-10 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="bg-[#121212] text-white text-[10px] font-black px-2.5 py-1 uppercase tracking-widest">
                FINANCIAL INTELLIGENCE
              </span>
              <h3 className="font-black text-2xl sm:text-3xl uppercase leading-tight">FIU-IND STR PMLA 2002</h3>
              <p className="font-medium text-sm sm:text-base text-gray-700 leading-relaxed">
                Automated compilation of Suspicious Transaction Reports (STRs) in standard machine-readable JSON schema, ready for immediate dispatch to FIU-IND authorities.
              </p>
            </div>
            <div className="pt-4 border-t-2 border-gray-200">
              <span className="text-xs font-bold uppercase text-[#D02020]">PMLA Compliance Standard</span>
            </div>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link
            href="/about#legal-framework"
            className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-white hover:text-[#F0C020] underline underline-offset-4"
          >
            <span>Read complete legal framework & statutory templates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
