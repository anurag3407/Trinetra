import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: "healthy", service: "TRINETRA Forensics", timestamp: new Date().toISOString() });
}
