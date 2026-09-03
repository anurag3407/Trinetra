import { NextRequest, NextResponse } from "next/server";
import { PRESET_CASES } from "@/lib/providers/presetScams";

export async function GET() {
  const cases = PRESET_CASES.map((p) => ({
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
  return NextResponse.json({ cases });
}
