"use client";

import React from "react";
import { BaseEdge, EdgeProps, getBezierPath } from "@xyflow/react";

export default function AnimatedFlowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  label,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#121212",
          strokeWidth: 3,
          strokeDasharray: "6,6",
          animation: "dash 1s linear infinite",
        }}
      />
      {label && (
        <foreignObject
          width={160}
          height={32}
          x={labelX - 80}
          y={labelY - 16}
          className="overflow-visible pointer-events-none"
        >
          <div className="bg-white border-2 border-[#121212] px-2 py-0.5 text-[10px] font-mono font-black text-[#121212] shadow-[2px_2px_0px_0px_#121212] text-center truncate">
            {label}
          </div>
        </foreignObject>
      )}
    </>
  );
}
