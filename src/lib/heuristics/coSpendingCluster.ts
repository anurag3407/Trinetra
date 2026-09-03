export function evaluateCoSpendingInputs(inputAddresses: string[]): {
  isCommonInputCluster: boolean;
  clusterSize: number;
  confidence: number;
} {
  const unique = Array.from(new Set(inputAddresses));
  if (unique.length >= 2) {
    return {
      isCommonInputCluster: true,
      clusterSize: unique.length,
      confidence: 90,
    };
  }
  return {
    isCommonInputCluster: false,
    clusterSize: unique.length,
    confidence: 0,
  };
}
