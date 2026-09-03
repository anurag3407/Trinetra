"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Radio,
  Smartphone,
  Menu,
  X,
  Info,
  GitBranch,
  Layers,
  Presentation,
  Sparkles,
} from "lucide-react";
import EnvironmentBadge from "../common/EnvironmentBadge";

export default function LandingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F0F0F0] border-b-4 border-[#121212]">
      {/* Top Banner */}
      <div className="bg-[#121212] text-white px-4 sm:px-6 py-2 text-xs font-bold flex items-center justify-between tracking-wider">
        <div className="flex items-center gap-2.5">
          <span className="bg-[#D02020] text-white px-2 py-0.5 text-[11px] font-black">SIH 2026</span>
          <span className="hidden sm:inline">MINISTRY OF HOME AFFAIRS (MHA) / I4C PROBLEM STATEMENT:</span>
          <span className="text-[#F0C020] font-black">PS 26182 & 26183</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/presentation"
            className="hidden sm:flex items-center gap-1.5 bg-[#F0C020] text-[#121212] px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors"
          >
            <Presentation className="w-3 h-3" />
            <span>Judge Pitch Deck</span>
          </Link>
          <EnvironmentBadge />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
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

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-wider text-[#121212]">
          <Link
            href="/about"
            className="hover:text-[#D02020] transition-colors flex items-center gap-1.5 py-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>About</span>
          </Link>

          <a
            href="/#flows"
            className="hover:text-[#1040C0] transition-colors flex items-center gap-1.5 py-1"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>Flows</span>
          </a>

          <a
            href="/#features"
            className="hover:text-[#F0C020] transition-colors flex items-center gap-1.5 py-1"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Features</span>
          </a>

          <a
            href="/#interactive-demo"
            className="hover:text-gray-600 transition-colors py-1"
          >
            Simulator
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Prominent Presentation Button for Judges */}
          <Link
            href="/presentation"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#e0b018] transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            title="Launch Slide Deck for Hackathon Judges"
          >
            <Presentation className="w-4 h-4" />
            <span>Presentation</span>
          </Link>

          <Link
            href="/field"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2.5 bg-white text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-bold text-xs uppercase tracking-wider hover:bg-gray-100 transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Field App</span>
          </Link>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#D02020] text-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] font-black text-xs uppercase tracking-wider hover:bg-[#b51919] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <Radio className="w-4 h-4" />
            <span>Canvas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu & Presentation Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/presentation"
            className="px-2.5 py-1.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-[11px] uppercase tracking-wider flex items-center gap-1"
          >
            <Presentation className="w-3 h-3" />
            <span>Deck</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#121212] bg-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-[#121212] bg-white p-6 space-y-4 font-bold text-sm uppercase tracking-wider">
          <Link
            href="/presentation"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 px-3 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black flex items-center gap-2"
          >
            <Presentation className="w-4 h-4" />
            <span>Judge Presentation Deck</span>
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#121212] hover:text-[#D02020]"
          >
            About Trinetra (Specs & Architecture)
          </Link>
          <a
            href="/#flows"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#121212] hover:text-[#1040C0]"
          >
            Investigation Flows
          </a>
          <a
            href="/#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#121212] hover:text-[#F0C020]"
          >
            12-Point Feature Grid
          </a>
          <a
            href="/#interactive-demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#121212]"
          >
            Live Simulator
          </a>
          <div className="pt-4 border-t-2 border-gray-200 flex flex-col gap-3">
            <Link
              href="/field"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#F0F0F0] text-[#121212] border-2 border-[#121212] text-center font-bold"
            >
              Field Interceptor (Mobile PWA)
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 bg-[#D02020] text-white border-2 border-[#121212] text-center font-black"
            >
              Launch Command Canvas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
