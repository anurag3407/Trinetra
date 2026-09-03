import { AgentTelemetryEvent } from "@/types/swarm";
import { ForensicNode, ForensicEdge } from "@/types/forensics";

export class AgentBeta {
  static reportHop(
    hopNumber: number,
    direction: "UPSTREAM" | "DOWNSTREAM",
    sourceNode: ForensicNode,
    targetNode: ForensicNode,
    edge: ForensicEdge,
    startTime: number
  ): AgentTelemetryEvent {
    const elapsed = Date.now() - startTime;
    return {
      id: `beta-hop-${hopNumber}-${Date.now()}`,
      timestamp: new Date().toISOString(),
      agentId: "BETA",
      agentName: "Agent Beta (Swarm Pathfinder)",
      stage: "GRAPH_EXPANSION",
      level: "INFO",
      message: `[${direction}] Hop #${hopNumber}: Explored flow from ${sourceNode.label} ➔ ${targetNode.label} (${edge.amount} ${edge.currency}) in ${edge.velocityMinutes} mins.`,
      data: {
        hopNumber,
        direction,
        source: sourceNode.address,
        target: targetNode.address,
        amount: edge.amount,
        currency: edge.currency,
      },
      elapsedMs: elapsed,
    };
  }
}
