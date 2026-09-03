export type BlockchainType = "BITCOIN" | "TRON" | "ETHEREUM" | "POLYGON" | "SOLANA";

export type NodeType = "SUSPECT" | "MULE" | "VASP" | "MIXER" | "BRIDGE";

export interface TransactionHop {
  txHash: string;
  from: string;
  to: string;
  amount: number;
  currency: string;
  inrValue: number;
  timestamp: string;
  blockNumber: number;
  heuristicFlag?: string;
  confidence: number;
}

export interface ForensicNode {
  id: string;
  address: string;
  label: string;
  type: NodeType;
  blockchain: BlockchainType;
  balance: number;
  currency: string;
  txCount: number;
  riskScore: number; // 0 - 100
  hopLevel: number;
  isTerminal: boolean;
  attributedVasp?: string;
  heuristicFlags: string[];
  tags: string[];
}

export interface ForensicEdge {
  id: string;
  source: string;
  target: string;
  txHash: string;
  amount: number;
  currency: string;
  timestamp: string;
  velocityMinutes: number;
  label?: string;
  isCriticalPath: boolean;
}

export interface NearestVaspAttribution {
  vaspId: string;
  vaspName: string;
  legalEntity: string;
  country: string;
  fiuIndRegistered: boolean;
  terminalNodeId: string;
  terminalAddress: string;
  hopsFromSuspect: number;
  transitTimeMinutes: number;
  attributionConfidence: number; // 0 - 100
  method: "DIRECT_MATCH" | "HOT_WALLET_SWEEPER" | "CO_SPEND_CLUSTER" | "TOPOLOGICAL_PROXIMITY";
  nodalContact: {
    name?: string;
    email: string;
    phone: string;
    emergencyDesk: string;
  };
}

export interface AnalysisSummary {
  caseId: string;
  victimLossInr: number;
  suspectAddress: string;
  blockchain: BlockchainType;
  totalHops: number;
  nodesTraversed: number;
  launderedAmountCrypto: number;
  currency: string;
  overallRiskScore: number;
  nearestVasp: NearestVaspAttribution | null;
  heuristicsTriggered: string[];
  provenanceChain: string[]; // array of tx hashes
  evidenceSha256: string;
  analyzedAt: string;
}
