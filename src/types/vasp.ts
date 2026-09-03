export interface VaspEntity {
  id: string;
  name: string;
  legalEntity: string;
  country: string;
  fiuIndRegistered: boolean;
  registrationNumber?: string;
  hotWalletPrefixes: string[];
  exactHotWallets: string[];
  depositPrefixes: string[];
  nodalOfficer: {
    name: string;
    email: string;
    phone: string;
    emergencyDesk: string;
  };
  supportedBlockchains: string[];
  description: string;
}
