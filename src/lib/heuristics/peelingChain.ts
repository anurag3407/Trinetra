export interface PeelingResult {
  isPeeling: boolean;
  ratio: number;
  changeOutputIndex: number;
  spendOutputIndex: number;
  changeAmount: number;
  spendAmount: number;
  confidence: number;
}

export function evaluatePeelingChain(outputValues: number[]): PeelingResult {
  if (outputValues.length !== 2) {
    return {
      isPeeling: false,
      ratio: 0,
      changeOutputIndex: -1,
      spendOutputIndex: -1,
      changeAmount: 0,
      spendAmount: 0,
      confidence: 0,
    };
  }

  const [v0, v1] = outputValues;
  const total = v0 + v1;
  if (total <= 0) {
    return {
      isPeeling: false,
      ratio: 0,
      changeOutputIndex: -1,
      spendOutputIndex: -1,
      changeAmount: 0,
      spendAmount: 0,
      confidence: 0,
    };
  }

  const maxVal = Math.max(v0, v1);
  const ratio = maxVal / total;

  if (ratio >= 0.85) {
    const changeIndex = v0 >= v1 ? 0 : 1;
    const spendIndex = changeIndex === 0 ? 1 : 0;
    return {
      isPeeling: true,
      ratio: parseFloat(ratio.toFixed(4)),
      changeOutputIndex: changeIndex,
      spendOutputIndex: spendIndex,
      changeAmount: outputValues[changeIndex],
      spendAmount: outputValues[spendIndex],
      confidence: Math.min(99, Math.round(ratio * 100)),
    };
  }

  return {
    isPeeling: false,
    ratio: parseFloat(ratio.toFixed(4)),
    changeOutputIndex: -1,
    spendOutputIndex: -1,
    changeAmount: 0,
    spendAmount: 0,
    confidence: 0,
  };
}
