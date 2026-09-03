import { NextResponse } from "next/server";
import { PRESET_CASES } from "@/lib/providers/presetScams";

export async function GET() {
  return NextResponse.json({
    presets: PRESET_CASES.map((p) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      ncrpAckNumber: p.ncrpAckNumber,
      victimName: p.victimName,
      lossInr: p.lossInr,
      currency: p.currency,
      cryptoAmount: p.cryptoAmount,
      blockchain: p.blockchain,
      suspectAddress: p.suspectAddress,
      description: p.description,
    })),
  });
}
