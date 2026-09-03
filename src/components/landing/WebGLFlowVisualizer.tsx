"use client";

import React, { useEffect, useRef, useState } from "react";
import { Shield, Target, Radio, CheckCircle2, Lock } from "lucide-react";

interface RadarNode {
  id: string;
  x: number;
  y: number;
  label: string;
  sublabel: string;
  type: "suspect" | "mule" | "smurf" | "terminal";
  color: string;
  pulseRadius: number;
}

export default function WebGLFlowVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<string>("terminal");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let sweepAngle = 0;
    let packetT = 0; // 0 to 1 for animated fund flow

    // Responsive setup with high DPI
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Node locations normalized to [0..1]
    const rawNodes = [
      {
        id: "suspect",
        nx: 0.18,
        ny: 0.72,
        label: "SUSPECT SEED",
        sublabel: "TX9v...kM71",
        type: "suspect" as const,
        color: "#D02020",
        pulseRadius: 0,
      },
      {
        id: "mule",
        nx: 0.38,
        ny: 0.32,
        label: "HOP 1: PEEL",
        sublabel: "Change 88.4%",
        type: "mule" as const,
        color: "#1040C0",
        pulseRadius: 0,
      },
      {
        id: "smurf",
        nx: 0.65,
        ny: 0.68,
        label: "HOP 2: SMURF",
        sublabel: "3 Tranches (CV 0.18)",
        type: "smurf" as const,
        color: "#F0C020",
        pulseRadius: 0,
      },
      {
        id: "terminal",
        nx: 0.84,
        ny: 0.28,
        label: "TERMINAL VASP",
        sublabel: "CoinDCX Vault",
        type: "terminal" as const,
        color: "#00E676",
        pulseRadius: 0,
      },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Radar Background (Dark Obsidian Grid)
      ctx.fillStyle = "#0A0D14";
      ctx.fillRect(0, 0, width, height);

      // Radar center
      const cx = width / 2;
      const cy = height / 2;
      const maxR = Math.min(width, height) * 0.46;

      // Draw Range Circles
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      for (let r = 0.25; r <= 1.0; r += 0.25) {
        ctx.beginPath();
        ctx.arc(cx, cy, maxR * r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw Crosshairs
      ctx.beginPath();
      ctx.moveTo(cx - maxR, cy);
      ctx.lineTo(cx + maxR, cy);
      ctx.moveTo(cx, cy - maxR);
      ctx.lineTo(cx, cy + maxR);
      ctx.stroke();

      // Draw Compass Degree Ticks
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      ctx.font = "9px monospace";
      ctx.fillText("000°", cx - 12, cy - maxR - 4);
      ctx.fillText("090°", cx + maxR + 4, cy + 3);
      ctx.fillText("180°", cx - 12, cy + maxR + 12);
      ctx.fillText("270°", cx - maxR - 28, cy + 3);

      // 2. Rotating Radar Sweep Beam
      sweepAngle += 0.025;
      if (sweepAngle > Math.PI * 2) sweepAngle -= Math.PI * 2;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(sweepAngle);

      // Sweep gradient sector
      const sweepGrad = ctx.createLinearGradient(0, 0, maxR, -maxR * 0.35);
      sweepGrad.addColorStop(0, "rgba(240, 192, 32, 0.25)");
      sweepGrad.addColorStop(1, "rgba(240, 192, 32, 0.0)");

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxR, 0, -Math.PI / 4, true);
      ctx.closePath();
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Lead line
      ctx.strokeStyle = "#F0C020";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(maxR, 0);
      ctx.stroke();
      ctx.restore();

      // Absolute node positions
      const nodes = rawNodes.map((n) => ({
        ...n,
        x: n.nx * width,
        y: n.ny * height,
      }));

      // 3. Connect Nodes with Forensic Flow Paths
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      for (let i = 0; i < nodes.length - 1; i++) {
        const from = nodes[i];
        const to = nodes[i + 1];

        // Gradient connector
        const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        grad.addColorStop(0, from.color);
        grad.addColorStop(1, to.color);

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);

        // Slight curved bezier for aesthetic path
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2 - 15;
        ctx.quadraticCurveTo(midX, midY, to.x, to.y);
        ctx.stroke();
      }
      ctx.setLineDash([]); // Reset dash

      // 4. Animated Fund Packets Traveling Along the Chain
      packetT = (packetT + 0.008) % 1;
      const totalSegments = nodes.length - 1;
      const segIndex = Math.min(Math.floor(packetT * totalSegments), totalSegments - 1);
      const segT = (packetT * totalSegments) - segIndex;

      const pFrom = nodes[segIndex];
      const pTo = nodes[segIndex + 1];
      const pMidX = (pFrom.x + pTo.x) / 2;
      const pMidY = (pFrom.y + pTo.y) / 2 - 15;

      // Quadratic bezier point calculation: B(t) = (1-t)^2*P0 + 2(1-t)t*P1 + t^2*P2
      const pktX = Math.pow(1 - segT, 2) * pFrom.x + 2 * (1 - segT) * segT * pMidX + Math.pow(segT, 2) * pTo.x;
      const pktY = Math.pow(1 - segT, 2) * pFrom.y + 2 * (1 - segT) * segT * pMidY + Math.pow(segT, 2) * pTo.y;

      // Glowing fund particle
      ctx.beginPath();
      ctx.arc(pktX, pktY, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#FFF9C4";
      ctx.shadowColor = "#F0C020";
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0; // Reset shadow

      // 5. Draw Forensic Nodes
      nodes.forEach((node) => {
        // Distance from radar center to compute sweep collision
        const dx = node.x - cx;
        const dy = node.y - cy;
        const nodeAngle = Math.atan2(dy, dx);
        const normNodeAngle = (nodeAngle + Math.PI * 2) % (Math.PI * 2);
        const angleDiff = Math.abs(sweepAngle - normNodeAngle);

        if (angleDiff < 0.1 || angleDiff > Math.PI * 2 - 0.1) {
          node.pulseRadius = 24;
        }

        // Pulse wave
        if (node.pulseRadius > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 24 - node.pulseRadius + 10, 0, Math.PI * 2);
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = node.pulseRadius / 24;
          ctx.stroke();
          ctx.globalAlpha = 1.0;
          node.pulseRadius -= 0.6;
        }

        // Target Reticle for Terminal Node
        if (node.type === "terminal") {
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.rotate(-sweepAngle * 1.5);
          ctx.strokeStyle = "#00E676";
          ctx.lineWidth = 1.5;

          // Reticle brackets
          const bSize = 14;
          ctx.beginPath();
          // Top Left
          ctx.moveTo(-bSize, -bSize + 5);
          ctx.lineTo(-bSize, -bSize);
          ctx.lineTo(-bSize + 5, -bSize);
          // Top Right
          ctx.moveTo(bSize - 5, -bSize);
          ctx.lineTo(bSize, -bSize);
          ctx.lineTo(bSize, -bSize + 5);
          // Bottom Right
          ctx.moveTo(bSize, bSize - 5);
          ctx.lineTo(bSize, bSize);
          ctx.lineTo(bSize - 5, bSize);
          // Bottom Left
          ctx.moveTo(-bSize + 5, bSize);
          ctx.lineTo(-bSize, bSize);
          ctx.lineTo(-bSize, bSize - 5);
          ctx.stroke();
          ctx.restore();
        }

        // Node Outer Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = "#121212";
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Node Inner Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node Pill Tag & Label
        ctx.font = "bold 9px monospace";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(node.label, node.x - 22, node.y - 14);

        ctx.font = "8px monospace";
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.fillText(node.sublabel, node.x - 22, node.y + 20);
      });

      // 6. Top Left HUD Telemetry Overlay
      ctx.fillStyle = "rgba(10, 13, 20, 0.75)";
      ctx.fillRect(8, 8, 140, 52);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.strokeRect(8, 8, 140, 52);

      ctx.font = "bold 8px monospace";
      ctx.fillStyle = "#00E676";
      ctx.fillText("● SWARM_ATTRIBUTION: ACTIVE", 14, 22);

      ctx.fillStyle = "#FFFFFF";
      ctx.fillText("HEURISTIC: PEEL+SMURF", 14, 34);

      ctx.fillStyle = "#F0C020";
      ctx.fillText("TARGET: COINDCX (96% CONF)", 14, 46);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[360px] bg-[#0A0D14] flex flex-col justify-between overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full absolute inset-0 block cursor-crosshair"
      />
    </div>
  );
}
