"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "HOW DOES TRINETRA SOLVE SIH26182 (NEAREST VASP ATTRIBUTION)?",
      a: "SIH26182 requires attributing unknown cryptocurrency wallets to their nearest Virtual Asset Service Providers (VASPs). TRINETRA implements bi-directional graph pathfinding: tracing upstream to identify originating withdrawal hot wallets and downstream to find terminal cash-out deposit addresses. It clusters user addresses with exchange hot vaults using peeling chain heuristics and sweeper patterns, computing the exact hop distance and confidence score in under 3 seconds.",
    },
    {
      q: "HOW DOES TRINETRA SIMULTANEOUSLY SOLVE SISTER PS SIH26183?",
      a: "SIH26183 focuses on real-time identification of fraud-linked crypto exchanges from victim-reported addresses. TRINETRA ingests NCRP 1930 victim complaints, traces the multi-hop laundering flow forward, identifies the exchange where the stolen funds were liquidated, and instantly drafts court-admissible Section 94 BNSS freezing notices to prevent cash-out.",
    },
    {
      q: "DOES TRINETRA REQUIRE ANY PAID API SUBSCRIPTIONS ($0 BUDGET)?",
      a: "Zero paid APIs! All live queries run on free public blockchain explorers (Blockstream.info for Bitcoin, TronGrid public for Tron TRC-20, and Cloudflare public RPC for EVM). Additionally, TRINETRA includes an offline preset replay engine for 100% demo safety during hackathon evaluations.",
    },
    {
      q: "CAN INVESTIGATING OFFICERS USE THE MOBILE FIELD COMPANION?",
      a: "Yes! The mobile companion includes an optical camera scanner that extracts cryptocurrency addresses from suspect phones or paper wallets via OCR/QR code in the field, immediately generates a Section 63 BSA digital seizure memo with GPS coordinates, and syncs with the central Command Canvas.",
    },
    {
      q: "CAN I SWAP OUT THE AI COPILOT FOR OPENROUTER, OLLAMA, OR GROQ?",
      a: "Yes! TRINETRA's /api/copilot route is built to standard OpenAI-compatible specifications. By simply changing AI_PROVIDER_BASE_URL and AI_PROVIDER_API_KEY in .env, you can use OpenRouter, Groq, Ollama, LocalAI, or Claude at any time.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-[#F0F0F0] border-b-4 border-[#121212]">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3 text-center">
          <span className="bg-[#1040C0] text-white text-xs font-black px-2.5 py-1 uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.9]">
            OPERATIONAL CLARITY
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className={`w-full text-left p-5 flex items-center justify-between font-black text-lg sm:text-xl uppercase tracking-tight transition-colors ${
                    isOpen ? "bg-[#D02020] text-white" : "bg-white text-[#121212] hover:bg-gray-100"
                  }`}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="p-6 bg-[#FFF9C4] text-[#121212] border-t-4 border-[#121212] font-medium text-base sm:text-lg leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
