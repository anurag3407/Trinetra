# TRINETRA (त्रिनेत्र)
### Autonomous Crypto Forensics & Nearest VASP Attribution Platform
**Smart India Hackathon 2026 (SIH 2026)**
- **Primary Problem Statement:** `SIH26182` — *Automated Attribution of Unknown Cryptocurrency Wallets to Nearest Virtual Asset Service Providers (VASPs) through Blockchain Intelligence APIs*
- **Sister Problem Statement:** `SIH26183` — *Real-Time Identification of Fraud-Linked Cryptocurrency Exchanges from Victim-Reported Suspect Wallet Addresses through Automated Blockchain Analytics*
- **Sponsor & Partner:** Ministry of Home Affairs (MHA) / Indian Cyber Crime Coordination Centre (I4C)

---

## 🏛️ System Overview

In India, cyber syndicates (Digital Arrest scams, Telegram task rating scams, illegal betting apps) coerce victims into transferring funds, which are rapidly converted into cryptocurrency (primarily Tron TRC-20 USDT and Bitcoin). Fraudsters route these funds through 3–5 hops of intermediate "mule" wallets using peeling chains and micro-structuring (smurfing) before cashing out at KYC-verified exchanges (VASPs like CoinDCX, WazirX, ZebPay, Binance).

Manual tracing by police officers currently takes 2–4 days, by which time funds are cashed out.  
**TRINETRA solves this end-to-end in under 3 seconds:**
1. **Ingest** suspect wallet address or transaction hash.
2. **Recursively trace** fund trajectories forward and backward (bi-directional pathfinding).
3. **Automatically cluster and attribute** the nearest exchange (VASP) deposit address.
4. **Generate court-admissible** Section 94 BNSS (Section 91 CrPC) statutory freezing directives with a cryptographic Section 63 BSA (Section 65B IEA) SHA-256 evidence seal.

---

## 🎨 Bauhaus Constructivist Design System

TRINETRA's UI follows pure **Bauhaus Constructivism** ("Form follows function"):
- **Primary Color Palette:** Bauhaus Red (`#D02020`), Bauhaus Blue (`#1040C0`), Bauhaus Yellow (`#F0C020`), Stark Black (`#121212`), Off-White (`#F0F0F0`).
- **Typography:** Google Font **'Outfit'** with massive uppercase display headlines (`text-6xl` to `text-8xl`), tight tracking, and relaxed body text.
- **Hard Geometry:** Binary radii (strictly `rounded-none` or `rounded-full`), 4px stark black borders, hard offset shadows (`shadow-[8px_8px_0px_0px_#121212]`), and mechanical snappy button-press micro-interactions.

---

## 🔬 Deterministic Blockchain Heuristics

1. **Heuristic A: Bitcoin UTXO Peeling Chain Detection**
   - Evaluates two-output transactions: `ratio = max(out1, out2) / (out1 + out2)`.
   - If `ratio >= 0.85`, classifies as a **Peeling Chain**: large output is change address, small output is peeled cash-out spend.
2. **Heuristic B: Fan-Out Smurfing (Structuring) Detection**
   - Evaluates outbound transfer amounts when $N \ge 3$.
   - Computes Coefficient of Variation: $CV = \sigma / \mu$.
   - If $CV < 0.50$, flags as **High-Confidence Smurfing** with Risk Score $\ge 85/100$.
3. **Heuristic C: Tron TRC-20 USDT Parameter Decoding**
   - Decodes `transfer(address to, uint256 value)` for contract `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t` with 6-decimal precision.
4. **Heuristic D: Exchange Hot-Wallet Sweeper Detection**
   - Detects when user deposit addresses sweep 95%+ of funds into a centralized hot vault within 20 minutes.
5. **Heuristic E: Common-Input Co-Spending Clustering**
   - Clusters addresses sharing inputs in multi-input Bitcoin transactions.

---

## 🤖 5-Agent Autonomous Swarm Architecture

- **Agent Alpha (Ingestion & Triage):** Validates address checksums across Tron (Base58), Bitcoin (Bech32/Base58), EVM (Hex), and Solana.
- **Agent Beta (Autonomous Pathfinder):** Executes bi-directional recursive BFS/A* pathfinding with loop/cycle detection.
- **Agent Gamma (Laundering Typology & Risk):** Applies Heuristics A through E, computing dynamic AML risk scores (0–100).
- **Agent Delta (VASP Attribution Specialist):** Matches against the VASP Knowledge Base and triggers early halt upon reaching a terminal VASP.
- **Agent Epsilon (Legal & Evidence Synthesizer):** Locks transaction provenance, computes SHA-256 evidence digests, and drafts statutory directives.

---

## ⚖️ Indian Legal Framework

- **Statutory Freezing Notice:** Issued under **Section 94 of Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023** [read with Section 91 CrPC, 1973] and Section 69 & 79(3)(b) of IT Act, 2000.
- **Digital Evidence Certification:** Issued under **Section 63 of Bharatiya Sakshya Adhiniyam (BSA), 2023** [read with Section 65B of Indian Evidence Act, 1872] with tamper-proof cryptographic SHA-256 digest.
- **FIU-IND Reporting:** Instant JSON export for Suspicious Transaction Reports (STR) under PMLA 2002.

---

## ⚙️ Quickstart & Local Setup ($0 Budget)

### Prerequisites
- Node.js 18+ or 20+

### Installation
```bash
git clone https://github.com/anurag3407/Trinetra.git
cd Trinetra

# Install dependencies
npm install

# Copy environment config (runs in local fail-safe mode by default)
cp .env.example .env.local

# Run development server
npm run dev # or npm run start (port 3001)
```

Visit **http://localhost:3000** (or **http://localhost:3001**).

---

## 📱 Navigation & Routes

- `/` — **Bauhaus Landing Page** with Three.js WebGL Particle Flow Visualizer and interactive demo simulator.
- `/dashboard` — **Forensic Command Canvas** with React Flow interactive graph and real-time Swarm Telemetry Terminal.
- `/notice` — **Notice Studio** for generating and printing court-admissible Section 94 BNSS directives and FIU-IND STR exports.
- `/field` — **Field Interceptor (Mobile PWA)** with optical camera QR/OCR wallet scanner and GPS-tagged Section 63 BSA Digital Seizure Memo.
- `/cases` — **Case Vault & Audit Trail** storing NCRP 1930 complaint records.

---

## 📜 License
MIT License. Built for the Smart India Hackathon (SIH 2026).
