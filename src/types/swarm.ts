export type AgentId = "ALPHA" | "BETA" | "GAMMA" | "DELTA" | "EPSILON";

export type AgentStatus = "IDLE" | "ACTIVE" | "THINKING" | "ALERT" | "COMPLETED" | "ERROR";

export interface AgentTelemetryEvent {
  id: string;
  timestamp: string;
  agentId: AgentId;
  agentName: string;
  stage: string;
  level: "INFO" | "WARN" | "ALERT" | "SUCCESS";
  message: string;
  data?: Record<string, unknown>;
  elapsedMs: number;
}

export interface SwarmState {
  currentStage: AgentId | "DONE";
  activeAgent: AgentId | null;
  progressPercent: number;
  agentStatus: Record<AgentId, AgentStatus>;
  events: AgentTelemetryEvent[];
}
