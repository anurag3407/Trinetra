export const TRON_USDT_CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

export interface DecodedTronTransfer {
  contract: string;
  recipient: string;
  rawAmount: string;
  humanAmount: number;
  currency: "USDT";
}

export function decodeTronTrc20Parameter(dataHex: string): DecodedTronTransfer | null {
  // ERC20/TRC20 transfer(address to, uint256 value) method signature: 0xa9059cbb
  const clean = dataHex.startsWith("0x") ? dataHex.slice(2) : dataHex;
  if (clean.length < 136) return null;

  const methodId = clean.slice(0, 8);
  if (methodId.toLowerCase() !== "a9059cbb") return null;

  const toParam = clean.slice(8, 72);
  const valueParam = clean.slice(72, 136);

  const recipientAddress = "0x" + toParam.slice(24);
  const rawValue = BigInt("0x" + valueParam);
  const humanAmount = Number(rawValue) / 1e6; // USDT has 6 decimal places

  return {
    contract: TRON_USDT_CONTRACT,
    recipient: recipientAddress,
    rawAmount: rawValue.toString(),
    humanAmount,
    currency: "USDT",
  };
}
