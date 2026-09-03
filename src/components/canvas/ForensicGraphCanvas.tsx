"use client";

import React, { useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import SuspectNode from "./custom-nodes/SuspectNode";
import MuleNode from "./custom-nodes/MuleNode";
import VaspNode from "./custom-nodes/VaspNode";
import MixerNode from "./custom-nodes/MixerNode";
import AnimatedFlowEdge from "./custom-edges/AnimatedFlowEdge";
import { ForensicNode, ForensicEdge } from "@/types/forensics";

interface ForensicGraphCanvasProps {
  nodes: ForensicNode[];
  edges: ForensicEdge[];
  onNodeSelect?: (node: ForensicNode) => void;
}

export default function ForensicGraphCanvas({
  nodes: rawNodes,
  edges: rawEdges,
  onNodeSelect,
}: ForensicGraphCanvasProps) {
  const nodeTypes = useMemo(
    () => ({
      SUSPECT: SuspectNode,
      MULE: MuleNode,
      VASP: VaspNode,
      MIXER: MixerNode,
    }),
    []
  );

  const edgeTypes = useMemo(
    () => ({
      animatedFlow: AnimatedFlowEdge,
    }),
    []
  );

  // Position calculation for clean auto-layout tree
  const initialNodes: Node[] = useMemo(() => {
    return rawNodes.map((n, idx) => {
      const x = 120 + (idx % 2 === 0 ? 0 : 340);
      const y = 80 + idx * 140;
      return {
        id: n.id,
        type: n.type,
        position: { x, y },
        data: {
          ...n,
        },
      };
    });
  }, [rawNodes]);

  const initialEdges: Edge[] = useMemo(() => {
    return rawEdges.map((e) => ({
      id: e.id,
      source: e.source,
      target: e.target,
      type: "animatedFlow",
      label: e.label,
      data: { ...e },
    }));
  }, [rawEdges]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Synchronize when rawNodes / rawEdges change (e.g. preset switch)
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      const match = rawNodes.find((n) => n.id === node.id);
      if (match && onNodeSelect) {
        onNodeSelect(match);
      }
    },
    [rawNodes, onNodeSelect]
  );

  return (
    <div className="w-full h-full min-h-[500px] border-4 border-[#121212] bg-[#F0F0F0] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        className="bg-dot-grid"
      >
        <Background color="#121212" gap={20} size={1} />
        <Controls className="!bg-white !border-2 !border-[#121212] !shadow-[4px_4px_0px_0px_#121212] !rounded-none" />
        <MiniMap
          nodeColor={(n) => {
            if (n.type === "SUSPECT") return "#D02020";
            if (n.type === "VASP") return "#1040C0";
            if (n.type === "MIXER") return "#121212";
            return "#F0C020";
          }}
          className="!bg-white !border-2 !border-[#121212] !rounded-none"
        />
      </ReactFlow>

      {/* Canvas Watermark Overlay */}
      <div className="absolute top-4 left-4 bg-white border-2 border-[#121212] px-3 py-1 shadow-[3px_3px_0px_0px_#121212] text-[10px] font-black uppercase tracking-widest text-[#121212] pointer-events-none">
        TRINETRA RECON CANVAS — INTERACTIVE GRAPH MODE
      </div>
    </div>
  );
}
