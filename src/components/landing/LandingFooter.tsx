"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-[#121212] text-white border-t-4 border-[#121212] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-14">
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full bg-[#D02020]" />
            <div className="w-4 h-4 bg-[#1040C0]" />
            <div className="w-4 h-4 clip-triangle bg-[#F0C020]" />
            <span className="font-black text-2xl tracking-tighter uppercase text-white">TRINETRA</span>
            <span className="bg-white text-[#121212] text-[10px] font-black px-2 py-0.5 tracking-widest uppercase">
              त्रिनेत्र
            </span>
          </div>
          <p className="text-sm text-gray-400 max-w-md leading-relaxed">
            Transaction Reconnaissance & Intelligence Network for Exchange Tracking & Real-Time Attribution.
            Engineered for Smart India Hackathon (SIH 2026) Problem Statements 26182 & 26183 for MHA / I4C.
          </p>
          <div className="pt-2">
            <span className="inline-block bg-gray-900 border border-gray-700 px-3 py-1 text-[11px] font-mono text-gray-400 uppercase">
              SEC 94 BNSS • SEC 63 BSA • FIU-IND PMLA
            </span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3">
          <h4 className="font-black text-xs uppercase tracking-widest text-[#F0C020]">EXPLORE PLATFORM</h4>
          <ul className="space-y-2 text-xs font-bold uppercase text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1">
                <span>About Trinetra</span>
                <span className="text-[9px] bg-[#D02020] text-white px-1 font-black">NEW</span>
              </Link>
            </li>
            <li><a href="/#flows" className="hover:text-white transition-colors">Investigation Flows</a></li>
            <li><a href="/#features" className="hover:text-white transition-colors">12-Point Feature Grid</a></li>
            <li><a href="/#interactive-demo" className="hover:text-white transition-colors">Live Simulator</a></li>
          </ul>
        </div>

        {/* Operational Modules Column */}
        <div className="space-y-3">
          <h4 className="font-black text-xs uppercase tracking-widest text-[#1040C0]">OPERATIONAL APPS</h4>
          <ul className="space-y-2 text-xs font-bold uppercase text-gray-300">
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Command Canvas</Link></li>
            <li><Link href="/notice" className="hover:text-white transition-colors">Notice Studio (Sec 94)</Link></li>
            <li><Link href="/field" className="hover:text-white transition-colors">Field Interceptor PWA</Link></li>
            <li><Link href="/cases" className="hover:text-white transition-colors">Case Vault & Dossiers</Link></li>
          </ul>
        </div>

        {/* Legal & Government Compliance */}
        <div className="space-y-3">
          <h4 className="font-black text-xs uppercase tracking-widest text-[#D02020]">AUTHORITIES</h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            Government of India<br />
            Ministry of Home Affairs (MHA)<br />
            Indian Cyber Crime Coordination Centre (I4C)<br />
            1930 National Cyber Helpline<br />
            Financial Intelligence Unit (FIU-IND)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
        <span>© 2026 TRINETRA FORENSICS. ALL RIGHTS RESERVED.</span>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-gray-400 hover:text-white underline">Documentation & Architecture</Link>
          <span className="text-[#F0C020] font-bold">SMART INDIA HACKATHON 2026</span>
        </div>
      </div>
    </footer>
  );
}
