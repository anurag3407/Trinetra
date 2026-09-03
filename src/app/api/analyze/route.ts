import { NextRequest, NextResponse } from "next/server";
import { SwarmOrchestrator } from "@/lib/agents/SwarmOrchestrator";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const presetId = body.presetId || "case-digital-arrest-45l";
    const mode = body.mode || "live"; // "live" (simulated delay) or "turbo"

    const result = SwarmOrchestrator.runForPreset(presetId);

    if (mode === "turbo") {
      return NextResponse.json(result);
    }

    // SSE Stream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for (const ev of result.events) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "EVENT", event: ev })}\n\n`));
          // brief delay between agent thoughts
          await new Promise((resolve) => setTimeout(resolve, 350));
        }

        controller.enqueue(
          encoder.encode(
            `data: ${JSON.stringify({
              type: "COMPLETE",
              summary: result.preset.summary,
              nodes: result.preset.nodes,
              edges: result.preset.edges,
            })}\n\n`
          )
        );
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
