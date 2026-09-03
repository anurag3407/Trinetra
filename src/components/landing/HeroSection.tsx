"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, ShieldAlert, Cpu, Zap, Lock } from "lucide-react";
import WebGLFlowVisualizer from "./WebGLFlowVisualizer";

export default function HeroSection() {
  return (
    <section className="relative border-b-4 border-[#121212] bg-[#F0F0F0] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Constructivist Column */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-[#121212] bg-white">
          <div className="space-y-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
                AUTONOMOUS MULTI-AGENT SWARM
              </span>
              <span className="px-3 py-1 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
                SECTION 94 BNSS / 91 CrPC COMPLIANT
              </span>
            </div>

            {/* Massive Bauhaus Headline */}
            <h1 className="font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.88] text-[#121212]">
              TRANSACTION <span className="text-[#D02020]">RECON</span> FOR VASP <span className="text-[#1040C0]">ATTRIBUTION</span>
            </h1>

            {/* Subheading */}
            <p className="font-medium text-base sm:text-xl text-gray-800 leading-relaxed max-w-2xl">
              TRINETRA empowers state cyber crime cells and the I4C 1930 ecosystem to ingest suspect crypto wallets, trace multi-hop peeling chains forward, cluster terminal Indian exchanges (CoinDCX, WazirX, ZebPay, Binance), and issue court-admissible statutory freezing directives in <strong>under 3 seconds</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/dashboard"
                className="px-6 py-3.5 bg-[#D02020] text-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-[#b01a1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2.5"
              >
                <Zap className="w-4 h-4" />
                <span>Launch Command Canvas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#interactive-demo"
                className="px-6 py-3.5 bg-[#F0C020] text-[#121212] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-[#d9ad1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Try Live Simulator</span>
              </a>
            </div>
          </div>

          {/* Bottom Metric Strip */}
          <div className="grid grid-cols-3 gap-2 pt-8 mt-8 border-t-4 border-[#121212]">
            <div>
              <p className="font-black text-2xl sm:text-3xl text-[#121212]">&lt; 3.0s</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">Attribution Latency</p>
            </div>
            <div>
              <p className="font-black text-2xl sm:text-3xl text-[#D02020]">5 AGENTS</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">Autonomous Swarm</p>
            </div>
            <div>
              <p className="font-black text-2xl sm:text-3xl text-[#1040C0]">₹0.00</p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-600">Zero Paid API Cost</p>
            </div>
          </div>
        </div>

        {/* Right Bauhaus Blue Block with Geometric Composition & WebGL */}
        <div className="lg:col-span-5 bg-[#1040C0] relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Bauhaus Overlapping Geometric Decorative Shapes */}
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-white opacity-20 pointer-events-none" />
          <div className="absolute bottom-12 left-6 w-28 h-28 bg-[#F0C020] rotate-45 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 right-12 w-20 h-20 clip-triangle bg-[#D02020] opacity-40 pointer-events-none" />

          {/* Interactive WebGL Header */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="bg-[#121212] text-white text-xs font-black px-3 py-1 uppercase tracking-widest border-2 border-white shadow-[3px_3px_0px_0px_#121212]">
              REAL-TIME WEBGL FLOW RADAR
            </span>
            <span className="text-white text-xs font-bold flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F0C020] animate-pulse" />
              LIVE TELEMETRY
            </span>
          </div>

          {/* WebGL Particle Canvas */}
          <div className="relative z-10 my-4 h-[300px] sm:h-[340px] border-4 border-[#121212] bg-[#121212] shadow-[8px_8px_0px_0px_#121212] overflow-hidden">
            <WebGLFlowVisualizer />
            <div className="absolute bottom-2 left-2 right-2 bg-black/80 border border-gray-700 p-2 text-[10px] text-gray-300 font-mono flex items-center justify-between">
              <span>ACTIVE FLOW: TRC-20 USDT (51,724)</span>
              <span className="text-[#F0C020] font-bold">TERMINAL: COINDCX</span>
            </div>
          </div>

          {/* Live Attribution Callout */}
          <div className="relative z-10 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#D02020]">
              CONFIRMED NEAREST VASP ATTRIBUTION
            </p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-black text-lg text-[#121212]">CoinDCX (Neblio Tech Pvt Ltd)</span>
              <span className="bg-[#F0C020] px-2 py-0.5 text-xs font-black border border-[#121212]">96% CONF</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              Nodal Officer: compliance@coindcx.com | Emergency Hotline: +91-80-6922-8888
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
