import { NextResponse } from "next/server";
import { VASP_DATABASE } from "@/lib/vasp/registry";

export async function GET() {
  return NextResponse.json({
    totalCount: VASP_DATABASE.length,
    fiuIndCount: VASP_DATABASE.filter((v) => v.fiuIndRegistered).length,
    vasps: VASP_DATABASE,
  });
}
