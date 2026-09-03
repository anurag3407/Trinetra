export interface SmurfingResult {
  isSmurfing: boolean;
  count: number;
  mean: number;
  stdDev: number;
  coefficientOfVariation: number;
  riskScore: number;
  reason: string;
}

export function evaluateFanOutSmurfing(amounts: number[]): SmurfingResult {
  const n = amounts.length;
  if (n < 3) {
    return {
      isSmurfing: false,
      count: n,
      mean: 0,
      stdDev: 0,
      coefficientOfVariation: 0,
      riskScore: 20,
      reason: "Insufficient fan-out count (N < 3)",
    };
  }

  const mean = amounts.reduce((acc, v) => acc + v, 0) / n;
  const variance = amounts.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / n;
  const stdDev = Math.sqrt(variance);
  const cv = mean > 0 ? stdDev / mean : 1.0;

  if (cv < 0.5) {
    const riskScore = Math.min(98, Math.round(85 + (0.5 - cv) * 25));
    return {
      isSmurfing: true,
      count: n,
      mean: parseFloat(mean.toFixed(2)),
      stdDev: parseFloat(stdDev.toFixed(2)),
      coefficientOfVariation: parseFloat(cv.toFixed(4)),
      riskScore,
      reason: `High-Confidence Smurfing: ${n} structured outbound splits with low CV (${cv.toFixed(2)} < 0.50)`,
    };
  }

  return {
    isSmurfing: false,
    count: n,
    mean: parseFloat(mean.toFixed(2)),
    stdDev: parseFloat(stdDev.toFixed(2)),
    coefficientOfVariation: parseFloat(cv.toFixed(4)),
    riskScore: 45,
    reason: `Normal distribution fan-out (CV = ${cv.toFixed(2)} >= 0.50)`,
  };
}
