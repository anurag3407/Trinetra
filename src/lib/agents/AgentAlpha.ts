import { BlockchainType } from "@/types/forensics";
import { AgentTelemetryEvent } from "@/types/swarm";

export interface TriageResult {
  blockchain: BlockchainType;
  isValid: boolean;
  addressFormat: string;
  normalizedAddress: string;
  event: AgentTelemetryEvent;
}

export class AgentAlpha {
  static triage(address: string, startTime: number): TriageResult {
    const trimmed = address.trim();
    let blockchain: BlockchainType = "TRON";
    let isValid = false;
    let format = "UNKNOWN";

    if (trimmed.startsWith("T") && trimmed.length === 34) {
      blockchain = "TRON";
      isValid = true;
      format = "Tron Base58Check Address";
    } else if (
      trimmed.startsWith("1") ||
      trimmed.startsWith("3") ||
      trimmed.startsWith("bc1")
    ) {
      blockchain = "BITCOIN";
      isValid = true;
      format = trimmed.startsWith("bc1") ? "Bitcoin Bech32 (SegWit)" : "Bitcoin Legacy Base58";
    } else if (trimmed.startsWith("0x") && trimmed.length === 42) {
      blockchain = "ETHEREUM";
      isValid = true;
      format = "EVM 20-Byte Hex Address";
    }

    const elapsed = Date.now() - startTime;
    const event: AgentTelemetryEvent = {
      id: `alpha-${Date.now()}`,
      timestamp: new Date().toISOString(),
      agentId: "ALPHA",
      agentName: "Agent Alpha (Ingestion & Triage)",
      stage: "SYNTAX_TRIAGE",
      level: isValid ? "INFO" : "WARN",
      message: isValid
        ? `Validated ${format}: ${trimmed.slice(0, 8)}...${trimmed.slice(-6)} on ${blockchain}. Handing off seed to Agent Beta.`
        : `Unknown or invalid cryptocurrency address syntax: ${trimmed}`,
      data: { blockchain, format, address: trimmed },
      elapsedMs: elapsed,
    };

    return {
      blockchain,
      isValid,
      addressFormat: format,
      normalizedAddress: trimmed,
      event,
    };
  }
}
