"use client";

import React, { useEffect, useRef } from "react";

interface ParticleNetworkProps {
  reducedMotion?: boolean;
}

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
}

interface Packet {
  fromNodeIndex: number;
  toNodeIndex: number;
  progress: number;
  speed: number;
}

export const ParticleNetwork: React.FC<ParticleNetworkProps> = ({
  reducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });
  const parallaxOffset = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    if (reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = () => window.innerWidth < 768;

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile()) return; // Disabled on mobile
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      // 3-8px max subconscious parallax shift
      parallaxOffset.current.targetX = ((e.clientX - cx) / cx) * 5;
      parallaxOffset.current.targetY = ((e.clientY - cy) / cy) * 5;

      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      parallaxOffset.current.targetX = 0;
      parallaxOffset.current.targetY = 0;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const initNodes = () => {
      const mobile = isMobile();
      // 20-36 nodes desktop, 12-16 mobile
      const nodeCount = mobile ? 14 : 28;
      nodes = [];
      packets = [];

      for (let i = 0; i < nodeCount; i++) {
        const baseRadius = 1.6 + Math.random() * 1.4;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          baseRadius,
          radius: baseRadius,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    handleResize();

    const maxDist = 180;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth dampening for parallax offset
      parallaxOffset.current.x += (parallaxOffset.current.targetX - parallaxOffset.current.x) * 0.05;
      parallaxOffset.current.y += (parallaxOffset.current.targetY - parallaxOffset.current.y) * 0.05;

      ctx.save();
      ctx.translate(parallaxOffset.current.x, parallaxOffset.current.y);

      // Update nodes positions & gentle pulsing
      const mouse = mouseRef.current;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Wrap gently at borders
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;

        // Soft pulse
        n.pulsePhase += 0.015;
        n.radius = n.baseRadius + Math.sin(n.pulsePhase) * 0.4;

        // Subconscious mouse reaction (nearby nodes shift slightly)
        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140 && dist > 0) {
            const force = (1 - dist / 140) * 0.6;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      }

      // Draw connection lines (Layer B)
      const activeConnections: { i: number; j: number; p1: Node; p2: Node }[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            activeConnections.push({ i, j, p1, p2 });
            let alpha = (1 - dist / maxDist) * 0.10; // 0.04 - 0.10 opacity

            // Nearby connections marginally more visible on mouse proximity
            if (mouse.active) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const mDist = Math.hypot(midX - mouse.x, midY - mouse.y);
              if (mDist < 120) {
                alpha = Math.min(0.18, alpha + (1 - mDist / 120) * 0.06);
              }
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Thin dark blue/indigo lines
            ctx.strokeStyle = `rgba(49, 85, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Manage Data Flow Packets (Layer C)
      // Keep ~4-7 active traveling points
      if (activeConnections.length > 0 && packets.length < Math.min(6, activeConnections.length)) {
        if (Math.random() < 0.06) {
          const conn = activeConnections[Math.floor(Math.random() * activeConnections.length)];
          packets.push({
            fromNodeIndex: conn.i,
            toNodeIndex: conn.j,
            progress: 0,
            speed: 0.003 + Math.random() * 0.004, // slow continuous movement
          });
        }
      }

      // Draw & update traveling packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const nA = nodes[pkt.fromNodeIndex];
        const nB = nodes[pkt.toNodeIndex];
        if (!nA || !nB) {
          packets.splice(k, 1);
          continue;
        }

        const curX = nA.x + (nB.x - nA.x) * pkt.progress;
        const curY = nA.y + (nB.y - nA.y) * pkt.progress;

        // Draw small traveling point
        ctx.beginPath();
        ctx.arc(curX, curY, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(49, 85, 255, 0.65)";
        ctx.fill();

        // Subtle glow tail
        ctx.beginPath();
        ctx.arc(curX, curY, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(49, 85, 255, 0.12)";
        ctx.fill();
      }

      // Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // Core node dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(49, 85, 255, 0.45)";
        ctx.fill();

        // Subtle soft pulse halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(49, 85, 255, 0.05)";
        ctx.fill();
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none select-none z-[1]"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
