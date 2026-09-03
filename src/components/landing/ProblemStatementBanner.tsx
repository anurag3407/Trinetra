"use client";

import React from "react";
import { ShieldCheck, Target, ArrowUpRight } from "lucide-react";

export default function ProblemStatementBanner() {
  return (
    <section className="bg-[#F0C020] border-b-4 border-[#121212] py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[#121212] text-white text-xs font-black px-2.5 py-1 uppercase tracking-widest">
                SMART INDIA HACKATHON 2026
              </span>
              <span className="bg-[#D02020] text-white text-xs font-black px-2.5 py-1 uppercase tracking-widest">
                MHA / I4C SPONSORED
              </span>
            </div>
            <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tighter text-[#121212] leading-tight">
              PRIMARY PS: SIH26182 — AUTOMATED ATTRIBUTION OF UNKNOWN WALLETS TO NEAREST VASPS
            </h2>
            <p className="font-medium text-sm sm:text-base text-[#121212] leading-relaxed max-w-3xl">
              Solved concurrently with sister problem statement <strong>SIH26183</strong> (Real-Time Identification of Fraud-Linked Cryptocurrency Exchanges from Victim-Reported Suspect Addresses). TRINETRA resolves the entire laundering trajectory, clusters the terminal exchange, and synthesizes court-admissible Section 94 BNSS notices in <strong>under 3 seconds</strong>.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">BENCHMARK METRICS</span>
              <span className="w-2 h-2 rounded-full bg-[#D02020] animate-ping" />
            </div>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2">
                <p className="font-black text-2xl text-[#D02020]">&lt; 3.0s</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Attribution Latency</p>
              </div>
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2">
                <p className="font-black text-2xl text-[#1040C0]">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600">FIU-IND Alignment</p>
              </div>
            </div>
            <div className="bg-[#121212] text-white p-2 text-center text-xs font-bold uppercase tracking-wider">
              $0 BUDGET ZERO-COST PUBLIC APIS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
