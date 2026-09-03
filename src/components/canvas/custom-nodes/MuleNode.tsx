"use client";

import React, { memo } from "react";
import { Handle, Position } from "@xyflow/react";
import { GitFork, Layers } from "lucide-react";

export default memo(function MuleNode({ data }: { data: any }) {
  const isPeeling = data.heuristicFlags?.some((f: string) => f.includes("PEELING"));
  const isSmurf = data.heuristicFlags?.some((f: string) => f.includes("SMURFING"));

  return (
    <div className="bg-[#FFF9C4] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-3 w-64 rounded-none relative">
      <Handle type="target" position={Position.Top} className="!bg-[#121212] !w-3 !h-3 !rounded-none" />

      <div className="flex items-center justify-between bg-[#F0C020] text-[#121212] px-2 py-0.5 mb-2 border border-[#121212]">
        <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
          <GitFork className="w-3 h-3" />
          <span>HOP #{data.hopLevel} MULE</span>
        </span>
        <span className="text-[10px] font-black bg-[#121212] text-white px-1">
          RISK {data.riskScore}/100
        </span>
      </div>

      <p className="font-black text-xs text-[#121212] uppercase truncate">{data.label}</p>
      <p className="font-mono text-[10px] text-gray-700 truncate mt-0.5">{data.address}</p>

      {/* Heuristic Flags */}
      <div className="flex flex-wrap gap-1 mt-2">
        {isPeeling && (
          <span className="bg-[#D02020] text-white text-[9px] font-black px-1.5 py-0.2 uppercase">
            HEURISTIC A: PEEL
          </span>
        )}
        {isSmurf && (
          <span className="bg-[#1040C0] text-white text-[9px] font-black px-1.5 py-0.2 uppercase">
            HEURISTIC B: SMURF
          </span>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} className="!bg-[#121212] !w-3 !h-3 !rounded-none" />
    </div>
  );
});
