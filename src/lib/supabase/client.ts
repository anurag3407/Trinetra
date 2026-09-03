import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig, isLocalMode } from "@/lib/env";
import { PRESET_CASES } from "@/lib/providers/presetScams";

const config = getSupabaseConfig();

export const supabase =
  config.isConfigured && !isLocalMode()
    ? createClient(config.url, config.anonKey)
    : null;

// Zero-config in-memory / LocalStorage fallback repository
export interface CaseRecord {
  id: string;
  ncrpAckNumber: string;
  victimName: string;
  lossInr: number;
  suspectAddress: string;
  blockchain: string;
  status: "ACTIVE_TRACE" | "FROZEN" | "NOTICE_ISSUED" | "ESCALATED";
  nearestVasp: string;
  evidenceSha256: string;
  createdAt: string;
}

const LOCAL_STORAGE_KEY = "trinetra_cases_vault";

export const localCaseRepository = {
  getCases: (): CaseRecord[] => {
    if (typeof window === "undefined") {
      return PRESET_CASES.map((p) => ({
        id: p.summary.caseId,
        ncrpAckNumber: p.ncrpAckNumber,
        victimName: p.victimName,
        lossInr: p.lossInr,
        suspectAddress: p.suspectAddress,
        blockchain: p.blockchain,
        status: "NOTICE_ISSUED",
        nearestVasp: p.summary.nearestVasp?.vaspName || "CoinDCX",
        evidenceSha256: p.summary.evidenceSha256,
        createdAt: p.summary.analyzedAt,
      }));
    }

    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // fallback
      }
    }

    const initial = PRESET_CASES.map((p) => ({
      id: p.summary.caseId,
      ncrpAckNumber: p.ncrpAckNumber,
      victimName: p.victimName,
      lossInr: p.lossInr,
      suspectAddress: p.suspectAddress,
      blockchain: p.blockchain,
      status: "NOTICE_ISSUED" as const,
      nearestVasp: p.summary.nearestVasp?.vaspName || "CoinDCX",
      evidenceSha256: p.summary.evidenceSha256,
      createdAt: p.summary.analyzedAt,
    }));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initial));
    return initial;
  },

  addCase: (newCase: CaseRecord): CaseRecord[] => {
    const cases = localCaseRepository.getCases();
    const updated = [newCase, ...cases];
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    }
    return updated;
  },
};
