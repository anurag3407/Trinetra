import { AgentTelemetryEvent } from "@/types/swarm";
import { evaluatePeelingChain } from "@/lib/heuristics/peelingChain";
import { evaluateFanOutSmurfing } from "@/lib/heuristics/smurfingDetector";

export class AgentGamma {
  static evaluateNodeRisk(
    address: string,
    outboundAmounts: number[],
    startTime: number
  ): AgentTelemetryEvent {
    const elapsed = Date.now() - startTime;

    // Check peeling
    if (outboundAmounts.length === 2) {
      const peel = evaluatePeelingChain(outboundAmounts);
      if (peel.isPeeling) {
        return {
          id: `gamma-peel-${Date.now()}`,
          timestamp: new Date().toISOString(),
          agentId: "GAMMA",
          agentName: "Agent Gamma (Laundering Profiler)",
          stage: "TYPOLOGY_FLAG",
          level: "ALERT",
          message: `Heuristic A Alert: Peeling Chain confirmed on ${address.slice(0, 8)}... with ${(peel.ratio * 100).toFixed(1)}% retained change. Risk Score: 88/100.`,
          data: { heuristic: "PEELING_CHAIN", ratio: peel.ratio },
          elapsedMs: elapsed,
        };
      }
    }

    // Check smurfing
    if (outboundAmounts.length >= 3) {
      const smurf = evaluateFanOutSmurfing(outboundAmounts);
      if (smurf.isSmurfing) {
        return {
          id: `gamma-smurf-${Date.now()}`,
          timestamp: new Date().toISOString(),
          agentId: "GAMMA",
          agentName: "Agent Gamma (Laundering Profiler)",
          stage: "TYPOLOGY_FLAG",
          level: "ALERT",
          message: `Heuristic B Alert: High-Confidence Smurfing on ${address.slice(0, 8)}... across ${smurf.count} splits (CV: ${smurf.coefficientOfVariation} < 0.50). Risk Score: ${smurf.riskScore}/100.`,
          data: { heuristic: "SMURFING", cv: smurf.coefficientOfVariation },
          elapsedMs: elapsed,
        };
      }
    }

    return {
      id: `gamma-eval-${Date.now()}`,
      timestamp: new Date().toISOString(),
      agentId: "GAMMA",
      agentName: "Agent Gamma (Laundering Profiler)",
      stage: "RISK_EVALUATION",
      level: "INFO",
      message: `Node ${address.slice(0, 8)}... profiled. AML risk parameters calculated.`,
      elapsedMs: elapsed,
    };
  }
}
