import { AnalysisSummary } from "@/types/forensics";

export function buildFiuIndStrPayload(summary: AnalysisSummary) {
  return {
    reportType: "SUSPICIOUS_TRANSACTION_REPORT_STR",
    regulatoryFramework: "FIU-IND PMLA 2002 / VDA GUIDELINES",
    batchId: `FIU-${Date.now()}`,
    caseReferenceNumber: summary.caseId,
    timestamp: summary.analyzedAt,
    reportingEntity: {
      source: "TRINETRA_I4C_GATEWAY",
      authority: "Indian Cyber Crime Coordination Centre (I4C)",
      ministry: "Ministry of Home Affairs, Government of India",
    },
    suspiciousIndicators: {
      lossInr: summary.victimLossInr,
      cryptoAmount: summary.launderedAmountCrypto,
      token: summary.currency,
      blockchain: summary.blockchain,
      riskScore: summary.overallRiskScore,
      heuristics: summary.heuristicsTriggered,
      peelingChainDetected: summary.heuristicsTriggered.some((h) => h.includes("Peeling")),
      smurfingStructuringDetected: summary.heuristicsTriggered.some((h) => h.includes("Smurfing")),
    },
    attributedExchange: {
      vaspName: summary.nearestVasp?.vaspName,
      legalEntity: summary.nearestVasp?.legalEntity,
      fiuRegistered: summary.nearestVasp?.fiuIndRegistered,
      depositAddress: summary.nearestVasp?.terminalAddress,
      transitHops: summary.nearestVasp?.hopsFromSuspect,
      transitTimeMinutes: summary.nearestVasp?.transitTimeMinutes,
    },
    blockchainProvenance: summary.provenanceChain,
    evidenceSha256: summary.evidenceSha256,
  };
}
