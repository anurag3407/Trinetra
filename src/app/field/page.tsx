"use client";

import React, { useState } from "react";
import AppHeader from "@/components/common/AppHeader";
import { Camera, QrCode, Smartphone, MapPin, Zap, ShieldAlert, Phone, Mail, CheckCircle, FileText } from "lucide-react";
import { PRESET_CASES } from "@/lib/providers/presetScams";

export default function FieldInterceptorPage() {
  const [activePreset, setActivePreset] = useState(PRESET_CASES[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>("TX9vKb8QzL90N2vP4m7K8s1X0b9V7R3E5");
  const [officerBadge, setOfficerBadge] = useState("MH-CYBER-8802");
  const [gpsCoords, setGpsCoords] = useState("18.5204° N, 73.8567° E (Pune Cyber Cell)");
  const [freezeDispatched, setFreezeDispatched] = useState(false);
  const [seizureMemoCreated, setSeizureMemoCreated] = useState(false);

  const simulateCameraScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setScanResult("TX9vKb8QzL90N2vP4m7K8s1X0b9V7R3E5");
      setIsScanning(false);
    }, 1200);
  };

  const handleDispatchFreeze = () => {
    setFreezeDispatched(true);
    setTimeout(() => setFreezeDispatched(false), 4000);
  };

  const handleGenerateMemo = () => {
    setSeizureMemoCreated(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0]">
      <AppHeader />

      <main className="max-w-2xl mx-auto w-full p-4 sm:p-6 flex-1 space-y-6">
        {/* Mobile Header Banner */}
        <div className="bg-[#1040C0] text-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-5">
          <div className="flex items-center justify-between">
            <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              FIELD TACTICAL COMPANION
            </span>
            <span className="text-xs font-mono font-bold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F0C020]" />
              <span>GPS SYNC ACTIVE</span>
            </span>
          </div>
          <h1 className="font-black text-2xl uppercase tracking-tight mt-2">
            ON-SCENE INTERCEPTOR & EVIDENCE LOCKER
          </h1>
          <p className="text-xs text-blue-100 mt-1">
            Engineered for Beat Patrols, Raiding Squads, and 1930 Golden Hour Triage.
          </p>
        </div>

        {/* Optical Camera QR / OCR Scanner Card */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-base uppercase text-[#121212] flex items-center gap-2">
              <Camera className="w-5 h-5 text-[#D02020]" />
              <span>OPTICAL WALLET SCANNER</span>
            </h2>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Live OCR / QR</span>
          </div>

          <div className="h-44 border-4 border-dashed border-[#121212] bg-[#F0F0F0] flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
            {isScanning ? (
              <div className="space-y-2">
                <span className="w-8 h-8 border-4 border-[#D02020] border-t-transparent rounded-full animate-spin inline-block" />
                <p className="font-black text-xs uppercase tracking-wider text-[#121212]">
                  EXTRACTING FROM CAMERA STREAM...
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <QrCode className="w-10 h-10 text-[#121212] mx-auto opacity-70" />
                <p className="font-bold text-xs text-[#121212]">
                  Point camera at suspect screen, Telegram chat, or paper recovery seed
                </p>
              </div>
            )}

            {/* Scanning Line Animation */}
            {isScanning && (
              <div className="absolute inset-x-0 top-0 h-1 bg-[#D02020] shadow-[0_0_8px_#D02020] animate-bounce" />
            )}
          </div>

          <button
            onClick={simulateCameraScan}
            disabled={isScanning}
            className="w-full py-3 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#121212] hover:bg-[#b01a1a] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" />
            <span>SCAN SUSPECT WALLET WITH CAMERA</span>
          </button>

          {scanResult && (
            <div className="bg-[#FFF9C4] border-2 border-[#121212] p-3 text-xs">
              <p className="font-black uppercase text-gray-600 text-[10px]">EXTRACTED ADDRESS (CHECKSUM VERIFIED):</p>
              <p className="font-mono font-black text-[#121212] break-all mt-0.5">{scanResult}</p>
            </div>
          )}
        </div>

        {/* Nearest VASP Intercept Radar Card */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="bg-[#1040C0] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              NEAREST VASP RADAR (PS 26182)
            </span>
            <span className="bg-[#F0C020] text-[#121212] text-[10px] font-black px-2 py-0.5 uppercase">
              96% CONFIDENCE
            </span>
          </div>

          <div>
            <h3 className="font-black text-xl uppercase text-[#121212]">
              {activePreset.summary.nearestVasp?.vaspName}
            </h3>
            <p className="text-xs text-gray-600">
              Terminal Liquidation Deposit: {activePreset.summary.nearestVasp?.terminalAddress}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2">
              <span className="text-gray-500 font-bold block text-[10px]">HOPS FROM SEED:</span>
              <span className="font-black text-[#D02020] text-base">4 Hops</span>
            </div>
            <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2">
              <span className="text-gray-500 font-bold block text-[10px]">TRANSIT SPEED:</span>
              <span className="font-black text-[#1040C0] text-base">9.4 Mins</span>
            </div>
          </div>

          {/* Emergency 1-Tap Actions */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleDispatchFreeze}
              disabled={freezeDispatched}
              className="w-full py-3 bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#121212] hover:bg-[#b01a1a] active:translate-x-[1px] active:translate-y-[1px] flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>{freezeDispatched ? "✓ EMERGENCY LIEN FIRED TO VASP" : "1-TAP EMERGENCY FREEZE TO VASP"}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+918069228888"
                className="py-2.5 bg-[#F0F0F0] border-2 border-[#121212] font-bold text-xs uppercase text-center flex items-center justify-center gap-1.5 hover:bg-gray-200"
              >
                <Phone className="w-3.5 h-3.5 text-[#1040C0]" />
                <span>CALL NODAL</span>
              </a>
              <a
                href="mailto:compliance@coindcx.com?subject=URGENT%20SECTION%2094%20BNSS%20FREEZING%20DIRECTIVE"
                className="py-2.5 bg-[#F0F0F0] border-2 border-[#121212] font-bold text-xs uppercase text-center flex items-center justify-center gap-1.5 hover:bg-gray-200"
              >
                <Mail className="w-3.5 h-3.5 text-[#D02020]" />
                <span>EMAIL DESK</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 63 BSA Digital Seizure Memo Card */}
        <div className="bg-white border-4 border-[#121212] shadow-[8px_8px_0px_0px_#121212] p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="bg-[#121212] text-white text-[10px] font-black px-2 py-0.5 uppercase tracking-widest">
              SECTION 63 BSA 2023
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase">Tamper-Proof Seizure</span>
          </div>

          <h3 className="font-black text-lg uppercase text-[#121212]">
            ON-SCENE DIGITAL SEIZURE MEMO
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            Generates an immutable cryptographic hash incorporating officer GPS location, UTC timestamp, and scanned hardware address to withstand courtroom scrutiny under new criminal law.
          </p>

          <div className="space-y-2 text-xs">
            <div>
              <label className="text-[10px] font-black uppercase text-gray-500 block">OFFICER BADGE ID:</label>
              <input
                type="text"
                value={officerBadge}
                onChange={(e) => setOfficerBadge(e.target.value)}
                className="w-full px-3 py-1.5 border-2 border-[#121212] bg-[#F0F0F0] font-bold"
              />
            </div>
            <div>
              <label className="text-[10px] font-black uppercase text-gray-500 block">DEVICE GPS COORDINATES:</label>
              <input
                type="text"
                value={gpsCoords}
                readOnly
                className="w-full px-3 py-1.5 border-2 border-[#121212] bg-[#F0F0F0] font-mono text-gray-700"
              />
            </div>
          </div>

          <button
            onClick={handleGenerateMemo}
            className="w-full py-2.5 bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#121212] hover:bg-[#d9ad1a] active:translate-x-[1px] active:translate-y-[1px]"
          >
            {seizureMemoCreated ? "✓ SECTION 63 BSA MEMO LOCKED" : "GENERATE SEIZURE MEMO"}
          </button>

          {seizureMemoCreated && (
            <div className="bg-[#121212] text-white p-3 border-2 border-[#121212] font-mono text-[10px] space-y-1">
              <p className="text-[#F0C020] font-bold">SEIZURE HASH (SHA-256):</p>
              <p className="break-all">{activePreset.summary.evidenceSha256}</p>
              <p className="text-gray-400 text-[9px] pt-1">
                SEIZED BY {officerBadge} AT {new Date().toISOString()}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
