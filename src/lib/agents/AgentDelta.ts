import { AgentTelemetryEvent } from "@/types/swarm";
import { NearestVaspAttribution } from "@/types/forensics";

export class AgentDelta {
  static reportVaspTarget(
    vasp: NearestVaspAttribution,
    startTime: number
  ): AgentTelemetryEvent {
    const elapsed = Date.now() - startTime;
    return {
      id: `delta-vasp-${Date.now()}`,
      timestamp: new Date().toISOString(),
      agentId: "DELTA",
      agentName: "Agent Delta (VASP Attribution)",
      stage: "TERMINAL_TARGET_ACQUIRED",
      level: "SUCCESS",
      message: `TARGET VASP ACQUIRED! Attributed ${vasp.vaspName} (${vasp.legalEntity}) at Hop #${vasp.hopsFromSuspect} with ${vasp.attributionConfidence}% confidence via ${vasp.method}. HALT SIGNAL SENT TO BETA.`,
      data: {
        vaspName: vasp.vaspName,
        fiuRegistered: vasp.fiuIndRegistered,
        hops: vasp.hopsFromSuspect,
        nodalEmail: vasp.nodalContact.email,
      },
      elapsedMs: elapsed,
    };
  }
}
