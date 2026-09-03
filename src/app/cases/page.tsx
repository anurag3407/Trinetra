"use client";

import React, { useState } from "react";
import Link from "next/link";
import AppHeader from "@/components/common/AppHeader";
import { PRESET_CASES } from "@/lib/providers/presetScams";
import { localCaseRepository } from "@/lib/supabase/client";
import { Database, Search, ArrowRight, ShieldCheck, Plus, Filter } from "lucide-react";

export default function CaseVaultPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const cases = localCaseRepository.getCases();

  const filteredCases = cases.filter(
    (c) =>
      c.victimName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.ncrpAckNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.nearestVasp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.suspectAddress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <AppHeader />

      <main className="max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 flex-1 space-y-6">
        {/* Header Banner */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                NATIONAL CYBER REPOSITORY
              </span>
              <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
                NCRP 1930 / I4C INTEGRATED
              </span>
            </div>
            <h1 className="font-black text-2xl sm:text-4xl uppercase tracking-tighter text-[#121212]">
              CASE VAULT & AUDIT TRAIL
            </h1>
            <p className="text-xs sm:text-sm text-gray-700">
              Persistent repository of verified crypto fraud investigations, digital seizure memos, and statutory freezing orders.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase shadow-[2px_2px_0px_0px_#121212] flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>NEW INVESTIGATION</span>
            </Link>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="relative flex-1 min-w-[280px]">
            <input
              type="text"
              placeholder="Search by Victim, NCRP Ack No, Address, or VASP..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border-2 border-[#121212] bg-[#F0F0F0] text-xs font-bold focus:outline-none focus:bg-[#FFF9C4]"
            />
            <Search className="w-4 h-4 absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
          </div>

          <div className="text-xs font-bold uppercase text-gray-600">
            TOTAL VERIFIED CASES: <span className="text-[#121212] font-black">{filteredCases.length}</span>
          </div>
        </div>

        {/* Case Table */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#121212] text-white uppercase text-[10px] font-black tracking-wider">
              <tr>
                <th className="p-3.5">NCRP ACK NO</th>
                <th className="p-3.5">VICTIM / COMPLAINANT</th>
                <th className="p-3.5">LOSS AMOUNT</th>
                <th className="p-3.5">SUSPECT WALLET</th>
                <th className="p-3.5">ATTRIBUTED VASP</th>
                <th className="p-3.5">STATUS</th>
                <th className="p-3.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-[#121212] font-medium">
              {filteredCases.map((c) => (
                <tr key={c.id} className="hover:bg-[#F0F0F0] transition-colors">
                  <td className="p-3.5 font-mono font-bold text-[#1040C0]">{c.ncrpAckNumber}</td>
                  <td className="p-3.5 font-bold text-[#121212]">{c.victimName}</td>
                  <td className="p-3.5 font-bold text-[#D02020]">₹{c.lossInr.toLocaleString("en-IN")}</td>
                  <td className="p-3.5 font-mono text-[10px] text-gray-600 truncate max-w-[140px]">
                    {c.suspectAddress}
                  </td>
                  <td className="p-3.5 font-bold text-[#121212]">{c.nearestVasp}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 bg-[#F0C020] text-[#121212] border border-[#121212] font-black text-[9px] uppercase">
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <Link
                      href="/dashboard"
                      className="px-2.5 py-1 bg-[#121212] text-white font-bold text-[10px] uppercase hover:bg-gray-800 transition-all inline-flex items-center gap-1"
                    >
                      <span>CANVAS</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
