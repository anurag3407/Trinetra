"use client";

import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Landmark, ShieldCheck } from "lucide-react";

export default memo(function VaspNode({ data }: { data: any }) {
  return (
    <div className="bg-white border-4 border-[#1040C0] shadow-[8px_8px_0px_0px_#1040C0] p-3.5 w-72 rounded-none relative">
      <Handle type="target" position={Position.Top} className="!bg-[#1040C0] !w-3 !h-3 !rounded-none" />

      <div className="flex items-center justify-between bg-[#1040C0] text-white px-2 py-0.5 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          <Landmark className="w-3 h-3" />
          <span>TERMINAL VASP GATEWAY</span>
        </span>
        <span className="text-[10px] font-black bg-[#F0C020] text-[#121212] px-1">
          FIU-IND
        </span>
      </div>

      <p className="font-black text-sm text-[#121212] uppercase truncate">
        {data.attributedVasp || data.label}
      </p>
      <p className="font-mono text-[10px] text-[#1040C0] font-bold truncate mt-0.5">
        {data.address}
      </p>

      <div className="mt-2 pt-2 border-t-2 border-[#121212] bg-[#F0F0F0] p-1.5 text-[10px] font-bold space-y-0.5">
        <div className="flex justify-between text-gray-600">
          <span>ATTRIBUTION CONFIDENCE:</span>
          <span className="text-[#1040C0] font-black">96%</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>FREEZING DIRECTIVE:</span>
          <span className="text-[#D02020] font-black">READY</span>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-[#1040C0] !w-3 !h-3 !rounded-none" />
    </div>
  );
});
