-- TRINETRA Database Schema (Supabase PostgreSQL)
-- Target: SIH 2026 MHA / I4C Crypto Forensics Architecture

-- 1. Cases Table (NCRP 1930 Integration)
CREATE TABLE IF NOT EXISTS cases (
  id TEXT PRIMARY KEY,
  ncrp_ack_number TEXT NOT NULL,
  victim_name TEXT NOT NULL,
  loss_inr NUMERIC(14, 2) NOT NULL,
  suspect_address TEXT NOT NULL,
  blockchain TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'ACTIVE_TRACE',
  nearest_vasp TEXT,
  evidence_sha256 TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Digital Seizure Memos (Section 63 BSA 2023 / 65B IEA)
CREATE TABLE IF NOT EXISTS seizure_memos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id TEXT REFERENCES cases(id),
  officer_badge TEXT NOT NULL,
  gps_latitude NUMERIC(9, 6) NOT NULL,
  gps_longitude NUMERIC(9, 6) NOT NULL,
  device_imei TEXT,
  scanned_wallet_address TEXT NOT NULL,
  seizure_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Statutory Freezing Directives (Section 94 BNSS 2023)
CREATE TABLE IF NOT EXISTS freezing_directives (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id TEXT REFERENCES cases(id),
  vasp_id TEXT NOT NULL,
  vasp_name TEXT NOT NULL,
  nodal_email TEXT NOT NULL,
  amount_crypto NUMERIC(18, 6),
  token TEXT NOT NULL,
  directive_status TEXT DEFAULT 'PENDING_ACK',
  dispatched_at TIMESTAMPTZ DEFAULT NOW()
);

-- Realtime enablement
ALTER PUBLICATION supabase_realtime ADD TABLE cases;
ALTER PUBLICATION supabase_realtime ADD TABLE seizure_memos;
