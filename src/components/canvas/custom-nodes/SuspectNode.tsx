"use client";

import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { AlertTriangle, ShieldAlert } from "lucide-react";

export default memo(function SuspectNode({ data }: { data: any }) {
  return (
    <div className="bg-white border-4 border-[#D02020] shadow-[6px_6px_0px_0px_#121212] p-3 w-64 rounded-none relative">
      <Handle type="target" position={Position.Top} className="!bg-[#121212] !w-3 !h-3 !rounded-none" />
      
      {/* Top Banner */}
      <div className="flex items-center justify-between bg-[#D02020] text-white px-2 py-0.5 mb-2">
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" />
          <span>SUSPECT ORIGIN</span>
        </span>
        <span className="text-[10px] font-black bg-white text-[#D02020] px-1">
          RISK {data.riskScore}/100
        </span>
      </div>

      <p className="font-black text-xs text-[#121212] uppercase truncate">{data.label}</p>
      <p className="font-mono text-[10px] text-gray-600 truncate mt-0.5">{data.address}</p>

      <div className="mt-2 pt-2 border-t-2 border-[#121212] flex items-center justify-between text-[10px] font-bold">
        <span>HOLDING:</span>
        <span className="text-[#D02020]">{data.balance} {data.currency}</span>
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-[#D02020] !w-3 !h-3 !rounded-none" />
    </div>
  );
});
