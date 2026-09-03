import { NextRequest, NextResponse } from "next/server";
import { PRESET_CASES } from "@/lib/providers/presetScams";
import { generateSection94Notice } from "@/lib/legal/statutoryTemplates";
import { buildFiuIndStrPayload } from "@/lib/legal/fiuIndExporter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const presetId = body.presetId || "case-digital-arrest-45l";
    const officerName = body.officerName || "Inspector Vikram S. Rathore, Cyber Crime Police Station";

    const preset = PRESET_CASES.find((p) => p.id === presetId) || PRESET_CASES[0];
    const noticeText = generateSection94Notice(preset.summary, officerName);
    const fiuStr = buildFiuIndStrPayload(preset.summary);

    return NextResponse.json({
      caseId: preset.summary.caseId,
      noticeText,
      fiuStr,
      sha256Seal: preset.summary.evidenceSha256,
      targetVasp: preset.summary.nearestVasp?.vaspName,
      nodalContact: preset.summary.nearestVasp?.nodalContact,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
