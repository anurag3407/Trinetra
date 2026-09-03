"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Radio, FileText, Smartphone, Database, ChevronDown, User, Info } from "lucide-react";
import EnvironmentBadge from "./EnvironmentBadge";

export default function AppHeader() {
  const pathname = usePathname();
  const [selectedRole, setSelectedRole] = useState("Investigating Officer (I4C)");
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const roles = [
    "Investigating Officer (I4C / Cyber Cell)",
    "Field Patrol Agent (Raid Unit)",
    "VASP Nodal Officer (CoinDCX Compliance)",
    "I4C Supervisory Director",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-[#121212]">
      {/* Top Banner */}
      <div className="bg-[#121212] text-white px-4 py-1 text-xs font-bold flex flex-wrap items-center justify-between gap-2 tracking-wider">
        <div className="flex items-center gap-3">
          <span className="bg-[#D02020] px-2 py-0.5 text-white">SMART INDIA HACKATHON 2026</span>
          <span>PRIMARY PS: <span className="text-[#F0C020]">SIH26182</span> (Nearest VASP Attribution)</span>
          <span className="hidden md:inline">|</span>
          <span className="hidden md:inline">SISTER PS: <span className="text-[#F0C020]">SIH26183</span> (Fraud Exchange Identification)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-300 hidden sm:inline">SPONSORED BY MHA / I4C (INDIAN CYBER CRIME COORDINATION CENTRE)</span>
          <EnvironmentBadge />
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand with Bauhaus Geometric Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1.5">
            {/* Bauhaus Logo: Red Circle, Blue Square, Yellow Triangle */}
            <div className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212] shadow-[1px_1px_0px_0px_#121212]" />
            <div className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-[#121212] shadow-[1px_1px_0px_0px_#121212]" />
            <div className="w-5 h-5 clip-triangle bg-[#F0C020] border-2 border-[#121212] shadow-[1px_1px_0px_0px_#121212]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-2xl tracking-tighter uppercase text-[#121212]">TRINETRA</span>
              <span className="bg-[#121212] text-white text-[10px] font-black px-1.5 py-0.5 tracking-widest uppercase">
                त्रिनेत्र
              </span>
            </div>
            <p className="text-[10px] font-bold text-gray-600 tracking-wider uppercase hidden sm:block">
              Autonomous Crypto Forensics & VASP Attribution
            </p>
          </div>
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/dashboard"
            className={`px-3.5 py-1.5 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider transition-all ${
              pathname === "/dashboard"
                ? "bg-[#D02020] text-white shadow-[3px_3px_0px_0px_#121212]"
                : "bg-white text-[#121212] hover:bg-gray-100 shadow-[2px_2px_0px_0px_#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" />
              <span>Command Canvas</span>
            </div>
          </Link>

          <Link
            href="/notice"
            className={`px-3.5 py-1.5 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider transition-all ${
              pathname === "/notice"
                ? "bg-[#1040C0] text-white shadow-[3px_3px_0px_0px_#121212]"
                : "bg-white text-[#121212] hover:bg-gray-100 shadow-[2px_2px_0px_0px_#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              <span>Notice Studio (Sec 94)</span>
            </div>
          </Link>

          <Link
            href="/field"
            className={`px-3.5 py-1.5 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider transition-all ${
              pathname === "/field"
                ? "bg-[#F0C020] text-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                : "bg-white text-[#121212] hover:bg-gray-100 shadow-[2px_2px_0px_0px_#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Field Interceptor</span>
            </div>
          </Link>

          <Link
            href="/cases"
            className={`px-3.5 py-1.5 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider transition-all ${
              pathname === "/cases"
                ? "bg-[#121212] text-white shadow-[3px_3px_0px_0px_#121212]"
                : "bg-white text-[#121212] hover:bg-gray-100 shadow-[2px_2px_0px_0px_#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>Case Vault</span>
            </div>
          </Link>

          <Link
            href="/about"
            className={`px-3.5 py-1.5 border-2 border-[#121212] font-bold text-xs uppercase tracking-wider transition-all ${
              pathname === "/about"
                ? "bg-[#F0C020] text-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                : "bg-white text-[#121212] hover:bg-gray-100 shadow-[2px_2px_0px_0px_#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>About & Specs</span>
            </div>
          </Link>
        </nav>

        {/* Officer Profile & Switcher */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center gap-2 bg-[#F0F0F0] border-2 border-[#121212] px-3 py-1.5 shadow-[2px_2px_0px_0px_#121212] text-xs font-bold tracking-wide"
          >
            <User className="w-3.5 h-3.5 text-[#1040C0]" />
            <span className="truncate max-w-[160px] sm:max-w-none">{selectedRole}</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-2 z-50">
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 px-2 py-1">
                Simulated Officer Identity (RBAC)
              </p>
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setSelectedRole(role);
                    setRoleDropdownOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 text-xs font-bold uppercase transition-all mb-1 border-2 ${
                    selectedRole === role
                      ? "bg-[#121212] text-white border-[#121212]"
                      : "bg-white text-[#121212] border-transparent hover:border-[#121212]"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
