"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, ArrowUpRight, ArrowRight } from "lucide-react";

export default function ProblemStatementBanner() {
  return (
    <section className="bg-[#F0C020] border-b-4 border-[#121212] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-[#121212] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
                SMART INDIA HACKATHON 2026
              </span>
              <span className="bg-[#D02020] text-white text-xs font-black px-3 py-1 uppercase tracking-widest">
                MHA / I4C SPONSORED
              </span>
            </div>
            <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tighter text-[#121212] leading-tight">
              PRIMARY PS: SIH26182 — AUTOMATED ATTRIBUTION OF UNKNOWN WALLETS TO NEAREST VASPS
            </h2>
            <p className="font-medium text-base sm:text-lg text-[#121212] leading-relaxed max-w-3xl">
              Solved concurrently with sister problem statement <strong>SIH26183</strong> (Real-Time Identification of Fraud-Linked Cryptocurrency Exchanges from Victim-Reported Suspect Addresses). TRINETRA resolves the entire laundering trajectory, clusters the terminal exchange, and synthesizes court-admissible Section 94 BNSS notices in <strong>under 3 seconds</strong>.
            </p>
            <div className="pt-2">
              <Link
                href="/about#problem-statements"
                className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider text-[#121212] hover:text-[#D02020] underline underline-offset-4"
              >
                <span>Read in-depth problem statement breakdown</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black uppercase tracking-widest text-gray-500">
                BENCHMARK METRICS
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#D02020] animate-ping" />
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3">
                <p className="font-black text-3xl text-[#D02020]">&lt; 3.0s</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mt-1">
                  Attribution Latency
                </p>
              </div>
              <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3">
                <p className="font-black text-3xl text-[#1040C0]">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-600 mt-1">
                  FIU-IND Alignment
                </p>
              </div>
            </div>
            <div className="bg-[#121212] text-white p-3 text-center text-xs font-bold uppercase tracking-wider">
              $0 BUDGET • ZERO PAID APIS REQUIRED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
