"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Radio, Smartphone } from "lucide-react";
import EnvironmentBadge from "../common/EnvironmentBadge";

export default function LandingNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F0F0F0] border-b-4 border-[#121212]">
      {/* Top Banner */}
      <div className="bg-[#121212] text-white px-4 py-1.5 text-xs font-bold flex items-center justify-between tracking-wider">
        <div className="flex items-center gap-2">
          <span className="bg-[#D02020] text-white px-2 py-0.5 text-[11px] font-black">SIH 2026</span>
          <span className="hidden sm:inline">MINISTRY OF HOME AFFAIRS (MHA) / I4C PROBLEM STATEMENT:</span>
          <span className="text-[#F0C020] font-black">PS 26182 & 26183</span>
        </div>
        <EnvironmentBadge />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Bauhaus Geometric Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />
            <div className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />
            <div className="w-5 h-5 clip-triangle bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212]" />
          </div>
          <div>
            <span className="font-black text-2xl tracking-tighter uppercase text-[#121212]">TRINETRA</span>
            <span className="ml-2 bg-[#121212] text-white text-[10px] font-black px-1.5 py-0.5 tracking-widest uppercase">
              त्रिनेत्र
            </span>
          </div>
        </Link>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/field"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 bg-white text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Field App</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#b51919] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <Radio className="w-4 h-4" />
            <span>Launch Command Canvas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
