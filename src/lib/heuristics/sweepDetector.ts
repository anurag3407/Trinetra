export interface SweepPatternResult {
  isSweeper: boolean;
  confidence: number;
  sweepVelocityMinutes: number;
  retainedBalanceRatio: number;
}

export function evaluateHotWalletSweep(
  inboundAmount: number,
  outboundAmount: number,
  timeDiffSeconds: number
): SweepPatternResult {
  if (inboundAmount <= 0) {
    return { isSweeper: false, confidence: 0, sweepVelocityMinutes: 0, retainedBalanceRatio: 1 };
  }

  const sweptRatio = outboundAmount / inboundAmount;
  const timeDiffMinutes = timeDiffSeconds / 60;

  // Hot wallet sweep pattern: nearly 98-100% of funds swept within 15 minutes
  if (sweptRatio >= 0.95 && timeDiffMinutes <= 20) {
    return {
      isSweeper: true,
      confidence: Math.min(99, Math.round(85 + (sweptRatio - 0.95) * 100)),
      sweepVelocityMinutes: parseFloat(timeDiffMinutes.toFixed(1)),
      retainedBalanceRatio: parseFloat((1 - sweptRatio).toFixed(4)),
    };
  }

  return {
    isSweeper: false,
    confidence: 25,
    sweepVelocityMinutes: parseFloat(timeDiffMinutes.toFixed(1)),
    retainedBalanceRatio: parseFloat((1 - sweptRatio).toFixed(4)),
  };
}
