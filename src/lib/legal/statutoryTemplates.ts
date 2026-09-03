import { AnalysisSummary } from "@/types/forensics";

export function generateSection94Notice(summary: AnalysisSummary, officerName = "Inspector Vikram S. Rathore, Cyber Crime Police Station") {
  const vasp = summary.nearestVasp;
  const vaspName = vasp?.vaspName || "Identified VASP";
  const legalEntity = vasp?.legalEntity || "Virtual Asset Service Provider";
  const nodalEmail = vasp?.nodalContact.email || "compliance@vasp.com";

  return `
========================================================================================================
           FORMAL STATUTORY NOTICE UNDER SECTION 94 OF BHARATIYA NAGARIK SURAKSHA SANHITA (BNSS), 2023
                    [READ WITH SECTION 91 OF CODE OF CRIMINAL PROCEDURE (CrPC), 1973]
                    READ WITH SECTION 69 & SECTION 79(3)(b) OF THE INFORMATION TECHNOLOGY ACT, 2000
========================================================================================================

DIRECTIVE FOR IMMEDIATE PREVENTIVE FREEZING & PRODUCTION OF ELECTRONIC RECORDS
CASE RECORD NUMBER: ${summary.caseId}
NCRP ACKNOWLEDGEMENT ID: NCRP/2026/09/882193
POLICE STATION: STATE CYBER CRIME INVESTIGATION CELL, HEADQUARTERS
DATE & TIME OF ISSUANCE: ${summary.analyzedAt}

TO:
  THE NODAL OFFICER / LAW ENFORCEMENT ESCALATION DESK
  ${legalEntity} (${vaspName})
  REGISTERED WITH FIU-IND: ${vasp?.fiuIndRegistered ? "YES (REPORTING ENTITY RE-0042)" : "NON-REGISTERED OFFSHORE"}
  OFFICIAL ESCALATION EMAIL: ${nodalEmail}

WHEREAS:
1. An urgent investigation has been initiated into severe cyber fraud / digital extortion involving an aggregate victim loss of ₹${summary.victimLossInr.toLocaleString("en-IN")}.
2. Through automated autonomous multi-hop blockchain analytics conducted on TRINETRA, illicitly siphoned funds totaling ${summary.launderedAmountCrypto} ${summary.currency} originated from suspect address:
   [ ${summary.suspectAddress} ]
3. Said funds have been deterministically traced forward across ${summary.totalHops} consecutive hops and attributed with ${vasp?.attributionConfidence || 95}% confidence to deposit/sweeper address registered on your exchange platform:
   [ ${vasp?.terminalAddress || "N/A"} ]
   Method of Attribution: ${vasp?.method} (${vasp?.transitTimeMinutes} minutes transit velocity)

YOU ARE HEREBY DIRECTED TO COMPLY WITH THE FOLLOWING MANDATORY STATUTORY DIRECTIVES FORTHWITH:

DIRECTIVE 1: IMMEDIATE FREEZING & CUSTODIAL LIEN
Under Section 94 BNSS 2023, you are commanded to immediately place a total debit and withdrawal freeze (lien) on the custodial account/UID corresponding to deposit address [ ${vasp?.terminalAddress} ]. Any attempted withdrawal, crypto swap, or off-ramp transfer must be blocked instantly upon receipt of this statutory notice.

DIRECTIVE 2: PRODUCTION OF ELECTRONIC RECORDS WITHIN 24 HOURS
You are compelled to produce before the undersigned Investigating Officer within twenty-four (24) hours:
  (a) Complete KYC verification dossier (Aadhaar Card, PAN Card, Passport, or Corporate Incorporations).
  (b) Registered Mobile Number, Primary/Recovery Email Address, and alternate contact records.
  (c) Associated Fiat Banking Records (Beneficiary Bank Name, Account Number, IFSC, UPI VPA).
  (d) Complete UTC Login Access Logs, including Source IPv4/IPv6 Addresses, Device User-Agents, and Device Fingerprints.

EVIDENCE INTEGRITY CERTIFICATE UNDER SECTION 63 OF BHARATIYA SAKSHYA ADHINIYAM (BSA), 2023
[READ WITH SECTION 65B OF INDIAN EVIDENCE ACT, 1872]

I hereby certify that the electronic record of fund provenance comprising transaction hashes:
${summary.provenanceChain.map((tx, idx) => `  [Hop ${idx + 1}] ${tx}`).join("\n")}
was generated autonomously by TRINETRA forensic computing nodes under uninterrupted operational integrity.
CRYPTOGRAPHIC EVIDENCE HASH (SHA-256):
[ ${summary.evidenceSha256} ]

ISSUED UNDER MY HAND AND SEAL:
${officerName}
Badge No: MH-CYBER-8802
State Cyber Crime Police Station, Maharashtra
Contact: io.cyber@mahapolice.gov.in | +91-22-2215-9900
========================================================================================================
`.trim();
}
