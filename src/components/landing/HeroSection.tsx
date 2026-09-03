"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, ShieldAlert, Cpu, Zap, Lock, Info } from "lucide-react";
import WebGLFlowVisualizer from "./WebGLFlowVisualizer";
import { gsap } from "@/lib/gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge-item", {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      })
        .from(
          ".hero-title-main",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".hero-subheading",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-cta-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".hero-metric-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.2"
        )
        .from(
          ".hero-radar-panel",
          {
            scale: 0.95,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative border-b-4 border-[#121212] bg-[#F0F0F0] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Constructivist Column */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b-4 lg:border-b-0 lg:border-r-4 border-[#121212] bg-white">
          <div className="space-y-8">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="hero-badge-item px-3.5 py-1.5 bg-[#D02020] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
                AUTONOMOUS MULTI-AGENT SWARM
              </span>
              <span className="hero-badge-item px-3.5 py-1.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] font-black text-xs uppercase tracking-widest">
                SECTION 94 BNSS / 91 CrPC COMPLIANT
              </span>
            </div>

            {/* Massive Bauhaus Headline with breathing room */}
            <h1 className="hero-title-main font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9] text-[#121212]">
              TRANSACTION <span className="text-[#D02020]">RECON</span> FOR VASP <span className="text-[#1040C0]">ATTRIBUTION</span>
            </h1>

            {/* Subheading with relaxed leading */}
            <p className="hero-subheading font-medium text-lg sm:text-xl text-gray-800 leading-relaxed max-w-2xl">
              TRINETRA empowers state cyber crime cells and the I4C 1930 ecosystem to ingest suspect crypto wallets, trace multi-hop peeling chains forward, cluster terminal Indian exchanges (CoinDCX, WazirX, ZebPay, Mudrex, Binance), and issue court-admissible statutory freezing directives in <strong>under 3 seconds</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/dashboard"
                className="hero-cta-btn px-7 py-4 bg-[#D02020] text-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-[#b01a1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2.5"
              >
                <Zap className="w-4 h-4" />
                <span>Launch Command Canvas</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#flows"
                className="hero-cta-btn px-6 py-4 bg-[#F0C020] text-[#121212] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-[#d9ad1a] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Explore Investigation Flows</span>
              </a>

              <Link
                href="/about"
                className="hero-cta-btn px-6 py-4 bg-white text-[#121212] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] font-black text-sm uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-2"
              >
                <Info className="w-4 h-4" />
                <span>About Trinetra</span>
              </Link>
            </div>
          </div>

          {/* Bottom Metric Strip with generous top margin */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-12 border-t-4 border-[#121212]">
            <div className="hero-metric-item">
              <p className="font-black text-3xl sm:text-4xl text-[#121212]">&lt; 3.0s</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">Attribution Latency</p>
            </div>
            <div className="hero-metric-item">
              <p className="font-black text-3xl sm:text-4xl text-[#D02020]">5 AGENTS</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">Autonomous Swarm</p>
            </div>
            <div className="hero-metric-item">
              <p className="font-black text-3xl sm:text-4xl text-[#1040C0]">₹0.00</p>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mt-1">Zero Paid API Cost</p>
            </div>
          </div>
        </div>

        {/* Right Bauhaus Blue Block with Geometric Composition & WebGL */}
        <div className="lg:col-span-5 bg-[#1040C0] relative p-8 sm:p-12 flex flex-col justify-between overflow-hidden hero-radar-panel">
          {/* Bauhaus Overlapping Geometric Decorative Shapes */}
          <div className="absolute top-6 right-6 w-28 h-28 rounded-full bg-white opacity-20 pointer-events-none" />
          <div className="absolute bottom-12 left-6 w-32 h-32 bg-[#F0C020] rotate-45 opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 right-12 w-24 h-24 clip-triangle bg-[#D02020] opacity-40 pointer-events-none" />

          {/* Interactive Radar Header */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="bg-[#121212] text-white text-xs font-black px-3.5 py-1.5 uppercase tracking-widest border-2 border-white shadow-[3px_3px_0px_0px_#121212]">
              REAL-TIME FORENSIC RADAR
            </span>
            <span className="text-white text-xs font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00E676] animate-pulse" />
              SWARM ACTIVE
            </span>
          </div>

          {/* Forensic Radar Canvas */}
          <div className="relative z-10 my-6 h-[320px] sm:h-[360px] border-4 border-[#121212] bg-[#0A0D14] shadow-[8px_8px_0px_0px_#121212] overflow-hidden">
            <WebGLFlowVisualizer />
          </div>

          {/* Live Attribution Callout */}
          <div className="relative z-10 bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-5">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#D02020]">
              CONFIRMED NEAREST VASP ATTRIBUTION
            </p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-black text-xl text-[#121212]">CoinDCX (Neblio Tech Pvt Ltd)</span>
              <span className="bg-[#F0C020] px-2.5 py-0.5 text-xs font-black border-2 border-[#121212]">96% CONF</span>
            </div>
            <p className="text-xs text-gray-600 mt-2 font-mono">
              Nodal Officer: compliance@coindcx.com | Hotline: +91-80-6922-8888
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
