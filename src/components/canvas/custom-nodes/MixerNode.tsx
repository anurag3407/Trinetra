"use client";

import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Skull, AlertOctagon } from "lucide-react";

export default memo(function MixerNode({ data }: { data: any }) {
  return (
    <div className="bg-[#121212] text-white border-4 border-[#D02020] shadow-[8px_8px_0px_0px_#D02020] p-3 w-64 rounded-none relative">
      <Handle type="target" position={Position.Top} className="!bg-[#D02020] !w-3 !h-3 !rounded-none" />

      <div className="flex items-center justify-between bg-[#D02020] text-white px-2 py-0.5 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          <Skull className="w-3 h-3" />
          <span>SANCTIONED MIXER</span>
        </span>
        <span className="text-[10px] font-black bg-white text-[#D02020] px-1">
          OFAC
        </span>
      </div>

      <p className="font-black text-xs text-white uppercase truncate">{data.label}</p>
      <p className="font-mono text-[10px] text-gray-400 truncate mt-0.5">{data.address}</p>

      <div className="mt-2 text-[10px] font-bold text-[#F0C020] uppercase">
        NON-CUSTODIAL ANONYMIZER (RISK 100/100)
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-[#D02020] !w-3 !h-3 !rounded-none" />
    </div>
  );
});
