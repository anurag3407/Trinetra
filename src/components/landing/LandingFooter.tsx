"use client";

import React from "react";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="bg-[#121212] text-white border-t-4 border-[#121212] py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#D02020]" />
            <div className="w-4 h-4 bg-[#1040C0]" />
            <div className="w-4 h-4 clip-triangle bg-[#F0C020]" />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">TRINETRA</span>
            <span className="bg-white text-[#121212] text-[10px] font-black px-1.5 py-0.5 tracking-widest uppercase">
              त्रिनेत्र
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-md leading-relaxed">
            Transaction Reconnaissance & Intelligence Network for Exchange Tracking & Real-Time Attribution.
            Engineered for Smart India Hackathon (SIH 2026) Problem Statements 26182 & 26183 for MHA / I4C.
          </p>
          <p className="text-[10px] text-gray-500 uppercase font-mono">
            LEGAL JURISDICTION: SECTION 94 BNSS 2023 | SECTION 63 BSA 2023 | FIU-IND PMLA
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-black text-sm uppercase tracking-widest text-[#F0C020]">QUICK NAVIGATION</h4>
          <ul className="space-y-1 text-xs font-bold uppercase text-gray-300">
            <li><Link href="/dashboard" className="hover:text-white">Command Canvas</Link></li>
            <li><Link href="/notice" className="hover:text-white">Notice Studio (Sec 94)</Link></li>
            <li><Link href="/field" className="hover:text-white">Field Interceptor (Mobile)</Link></li>
            <li><Link href="/cases" className="hover:text-white">Case Vault</Link></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="font-black text-sm uppercase tracking-widest text-[#D02020]">COMPLIANCE</h4>
          <p className="text-xs text-gray-400">
            Government of India<br />
            Ministry of Home Affairs (MHA)<br />
            Indian Cyber Crime Coordination Centre (I4C)<br />
            1930 National Cyber Helpline
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <span>© 2026 TRINETRA FORENSICS. ALL RIGHTS RESERVED.</span>
        <span className="text-[#F0C020] font-bold">BUILT FOR SIH 2026</span>
      </div>
    </footer>
  );
}
