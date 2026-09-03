export function computeProvenanceDigest(
  caseId: string,
  rootAddress: string,
  targetVasp: string,
  amount: number,
  timestamp: string,
  txProvenance: string[]
): string {
  const payload = `${caseId}|${rootAddress}|${targetVasp}|${amount}|${timestamp}|${txProvenance.join("->")}`;
  // Simple deterministic DJB2 / Murmur-inspired SHA-256 style 64-character hex generator for browser/node
  let hash1 = 0x811c9dc5;
  let hash2 = 0x9e3779b9;
  for (let i = 0; i < payload.length; i++) {
    const ch = payload.charCodeAt(i);
    hash1 = (hash1 ^ ch) * 0x01000193;
    hash2 = (hash2 ^ (ch << 1)) * 0x01000193;
  }
  const hex1 = Math.abs(hash1).toString(16).padStart(8, "0");
  const hex2 = Math.abs(hash2).toString(16).padStart(8, "0");
  const base64Part = Buffer.from(payload).toString("base64").replace(/[^a-f0-9]/gi, "").toLowerCase().slice(0, 48);
  return (hex1 + hex2 + base64Part).padEnd(64, "7").slice(0, 64);
}
