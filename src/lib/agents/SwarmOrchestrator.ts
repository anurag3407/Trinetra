import { PRESET_CASES, PresetCase } from "@/lib/providers/presetScams";
import { AgentAlpha } from "./AgentAlpha";
import { AgentBeta } from "./AgentBeta";
import { AgentGamma } from "./AgentGamma";
import { AgentDelta } from "./AgentDelta";
import { AgentEpsilon } from "./AgentEpsilon";
import { AgentTelemetryEvent } from "@/types/swarm";

export interface SwarmExecutionResult {
  preset: PresetCase;
  events: AgentTelemetryEvent[];
  totalElapsedMs: number;
}

export class SwarmOrchestrator {
  static runForPreset(presetId: string): SwarmExecutionResult {
    const preset =
      PRESET_CASES.find((p) => p.id === presetId) || PRESET_CASES[0];
    const startTime = Date.now();
    const events: AgentTelemetryEvent[] = [];

    // Stage 1: Alpha Triage
    const alphaRes = AgentAlpha.triage(preset.suspectAddress, startTime);
    events.push(alphaRes.event);

    // Stage 2: Beta Pathfinding + Gamma Risk profiling across hops
    for (let i = 0; i < preset.edges.length; i++) {
      const edge = preset.edges[i];
      const source = preset.nodes.find((n) => n.id === edge.source) || preset.nodes[0];
      const target = preset.nodes.find((n) => n.id === edge.target) || preset.nodes[1];

      const betaEv = AgentBeta.reportHop(i + 1, "DOWNSTREAM", source, target, edge, startTime);
      events.push(betaEv);

      // Gamma evaluates heuristic
      if (source.heuristicFlags.includes("PEELING_CHAIN_88%")) {
        const gammaEv = AgentGamma.evaluateNodeRisk(source.address, [45000, 6200], startTime);
        events.push(gammaEv);
      } else if (source.heuristicFlags.includes("FAN_OUT_SMURFING")) {
        const gammaEv = AgentGamma.evaluateNodeRisk(source.address, [22800, 22600, 22750], startTime);
        events.push(gammaEv);
      }
    }

    // Stage 3: Delta VASP Attribution
    if (preset.summary.nearestVasp) {
      const deltaEv = AgentDelta.reportVaspTarget(preset.summary.nearestVasp, startTime);
      events.push(deltaEv);
    }

    // Stage 4: Epsilon Legal Notice Synthesis
    const epsilonEv = AgentEpsilon.reportLegalEvidence(
      preset.summary.caseId,
      preset.summary.evidenceSha256,
      preset.summary.nearestVasp?.vaspName || "Target VASP",
      startTime
    );
    events.push(epsilonEv);

    return {
      preset,
      events,
      totalElapsedMs: Date.now() - startTime,
    };
  }
}
