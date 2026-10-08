"use client";

import React, { useEffect, useRef, memo } from "react";

interface LivingBackgroundProps {
  forceReducedMotion?: boolean;
}

interface FloatingShape {
  id: number;
  type: "hexagon" | "diamond" | "cross" | "brackets" | "circle";
  x: number;
  y: number;
  size: number;
  rotation: number;
  opacity: number;
}

const STATIC_SHAPES: FloatingShape[] = [
  { id: 1, type: "hexagon", x: 6, y: 12, size: 28, rotation: 12, opacity: 0.12 },
  { id: 2, type: "cross", x: 92, y: 18, size: 16, rotation: 45, opacity: 0.14 },
  { id: 3, type: "brackets", x: 12, y: 44, size: 22, rotation: 0, opacity: 0.12 },
  { id: 4, type: "diamond", x: 86, y: 58, size: 24, rotation: 30, opacity: 0.12 },
  { id: 5, type: "circle", x: 94, y: 82, size: 20, rotation: 0, opacity: 0.1 },
  { id: 6, type: "cross", x: 5, y: 86, size: 18, rotation: 0, opacity: 0.12 },
];

export const LivingBackground: React.FC<LivingBackgroundProps> = memo(({
  forceReducedMotion = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isReduced = mediaQuery.matches || forceReducedMotion;

    if (isReduced) return;

    // Direct DOM-based spotlight tracking (0 React re-renders)
    let spotlightRaf: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      mousePosRef.current = { x: e.clientX, y: e.clientY, active: true };

      if (spotlightRef.current && !spotlightRaf) {
        spotlightRaf = requestAnimationFrame(() => {
          if (spotlightRef.current) {
            spotlightRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
            spotlightRef.current.style.opacity = "1";
          }
          spotlightRaf = null;
        });
      }
    };

    const handleMouseLeave = () => {
      mousePosRef.current.active = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Optimized Particle Network Canvas
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }, 150);
    };
    window.addEventListener("resize", handleResize);

    const particleCount = isMobile ? 6 : 16;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      radius: Math.random() * 1.6 + 1.1,
      alpha: Math.random() * 0.28 + 0.16,
    }));

    let isDocumentVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
      if (isDocumentVisible && !animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isDocumentVisible) {
        animFrameRef.current = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const mX = mousePosRef.current.x;
      const mY = mousePosRef.current.y;
      const mActive = mousePosRef.current.active && !isMobile;

      // Draw subtle connection lines between particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < -10) p1.x = width + 10;
        if (p1.x > width + 10) p1.x = -10;
        if (p1.y < -10) p1.y = height + 10;
        if (p1.y > height + 10) p1.y = -10;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 16900) { // 130px dist squared
            const alpha = (1 - Math.sqrt(distSq) / 130) * 0.08;
            ctx.strokeStyle = `rgba(49, 85, 255, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Mouse connection if nearby
        if (mActive) {
          const mdx = p1.x - mX;
          const mdy = p1.y - mY;
          const mDistSq = mdx * mdx + mdy * mdy;

          if (mDistSq < 22500) { // 150px dist squared
            const mAlpha = (1 - Math.sqrt(mDistSq) / 150) * 0.22;
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mX, mY);
            ctx.stroke();

            // Glow ring at particle
            ctx.fillStyle = `rgba(6, 182, 212, ${mAlpha * 1.5})`;
            ctx.beginPath();
            ctx.arc(p1.x, p1.y, p1.radius * 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Draw particle dot
        ctx.fillStyle = `rgba(49, 85, 255, ${p1.alpha})`;
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (spotlightRaf) cancelAnimationFrame(spotlightRaf);
      clearTimeout(resizeTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [forceReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#F6F7F9]"
      aria-hidden="true"
    >
      {/* 1. Subtle Moving Atmosphere & Ambient Mesh Gradient (Hardware-Cached 0ms) */}
      <div
        className="absolute inset-0 opacity-90 will-change-transform"
        style={{
          background: `
            radial-gradient(circle at 8% 12%, rgba(49, 85, 255, 0.055) 0%, transparent 45%),
            radial-gradient(circle at 90% 35%, rgba(79, 70, 229, 0.045) 0%, transparent 42%),
            radial-gradient(circle at 20% 75%, rgba(6, 182, 212, 0.035) 0%, transparent 40%),
            radial-gradient(circle at 80% 88%, rgba(49, 85, 255, 0.03) 0%, transparent 35%),
            linear-gradient(to top right, #F6F7F9, #FAFBFD, #F2F5FA)
          `,
        }}
      />

      {/* 2. Micro SVG Noise Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.022] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Hardware-Accelerated Interactive Follower Spotlight (Zero React re-renders) */}
      <div
        ref={spotlightRef}
        className="absolute rounded-full pointer-events-none opacity-0 transition-opacity duration-300 will-change-transform"
        style={{
          width: "500px",
          height: "500px",
          left: 0,
          top: 0,
          transform: "translate3d(-1000px, -1000px, 0)",
          background: "radial-gradient(circle, rgba(49,85,255,0.065) 0%, rgba(6,182,212,0.028) 45%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* 4. Fine Technical Spatial Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-75"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.028) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 5. Flowing Topological AI Vector Flow Curves (Rich Cybernetic Background Graphic) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <svg
          className="w-full h-full opacity-[0.32]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="bgFlowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3155FF" stopOpacity="0" />
              <stop offset="30%" stopColor="#3155FF" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="bgFlowGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0" />
              <stop offset="40%" stopColor="#3155FF" stopOpacity="0.3" />
              <stop offset="80%" stopColor="#4F46E5" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#3155FF" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="bgFlowGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0" />
              <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3155FF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Flowing Vector Line 1 */}
          <path
            d="M -120 180 C 280 80, 680 280, 1100 140 S 1520 220, 1650 180"
            stroke="url(#bgFlowGrad1)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />

          {/* Flowing Vector Line 2 */}
          <path
            d="M -80 340 C 350 260, 750 440, 1180 320 S 1580 380, 1680 340"
            stroke="url(#bgFlowGrad2)"
            strokeWidth="0.9"
            strokeDasharray="6 10"
          />

          {/* Flowing Vector Line 3 (Mid-Lower Horizon) */}
          <path
            d="M -100 640 C 320 560, 720 740, 1120 600 S 1500 680, 1640 640"
            stroke="url(#bgFlowGrad3)"
            strokeWidth="1.1"
            strokeDasharray="5 9"
          />

          {/* Subtle Vertical Neural Connection Vectors */}
          <line x1="280" y1="120" x2="280" y2="380" stroke="rgba(49,85,255,0.06)" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="720" y1="160" x2="720" y2="520" stroke="rgba(6,182,212,0.07)" strokeWidth="0.8" strokeDasharray="3 3" />
          <line x1="1140" y1="220" x2="1140" y2="640" stroke="rgba(79,70,229,0.06)" strokeWidth="0.8" strokeDasharray="3 3" />

          {/* Subtle Circuit Nodes */}
          <circle cx="280" cy="180" r="3" fill="#3155FF" fillOpacity="0.25" />
          <circle cx="720" cy="270" r="3" fill="#06B6D4" fillOpacity="0.3" />
          <circle cx="1140" cy="320" r="3" fill="#4F46E5" fillOpacity="0.25" />
        </svg>
      </div>

      {/* 6. Geometric Hexagonal Honeycomb Matrix (Subtle Tech Clusters) */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block opacity-[0.065]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hex-pattern" width="60" height="103.923" patternUnits="userSpaceOnUse" patternTransform="scale(0.8)">
              <path
                d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z M30 103.92 L60 86.6 L60 51.96 L30 69.28 L0 51.96 L0 86.6 Z"
                fill="none"
                stroke="#1E293B"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          {/* Masked to corners so it doesn't clutter center */}
          <rect x="0" y="0" width="320" height="400" fill="url(#hex-pattern)" />
          <rect x="100%" y="45%" width="320" height="400" transform="translate(-320, 0)" fill="url(#hex-pattern)" />
        </svg>
      </div>

      {/* 7. Minimal Coordinate Crosshairs Pattern */}
      <div className="absolute inset-0 hidden md:block opacity-[0.045] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="living-cross" width="192" height="192" patternUnits="userSpaceOnUse">
              <path d="M 8 2 L 8 14 M 2 8 L 14 8" stroke="#1E293B" strokeWidth="0.8" fill="none" />
              <circle cx="8" cy="8" r="1" fill="#3155FF" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#living-cross)" />
        </svg>
      </div>

      {/* 8. Static Floating Geometric Accent Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {STATIC_SHAPES.map((shape) => (
          <div
            key={shape.id}
            className="absolute pointer-events-none"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              opacity: shape.opacity,
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            {shape.type === "hexagon" && (
              <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="#3155FF" strokeWidth="1">
                <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
              </svg>
            )}
            {shape.type === "diamond" && (
              <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="1">
                <polygon points="12 2 22 12 12 22 2 12" />
              </svg>
            )}
            {shape.type === "cross" && (
              <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="#101216" strokeWidth="1.2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
            {shape.type === "brackets" && (
              <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="1">
                <path d="M7 4H4v16h3M17 4h3v16h-3" />
              </svg>
            )}
            {shape.type === "circle" && (
              <svg width={shape.size} height={shape.size} viewBox="0 0 24 24" fill="none" stroke="#3155FF" strokeWidth="1" strokeDasharray="3 3">
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* 9. Technical Coordinate Corner Reticles & Watermark Readouts */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block select-none z-0">
        {/* Top-Right Technical Coordinates */}
        <div className="absolute top-24 right-8 font-mono text-[10px] text-[#9CA3AF] space-y-1 text-right opacity-60">
          <div>// RHEVIX_NET: 0x4F8A</div>
          <div>// SYS_TOPOLOGY: DISTRIBUTED</div>
        </div>

        {/* Bottom-Left Technical Metadata */}
        <div className="absolute bottom-16 left-8 font-mono text-[10px] text-[#9CA3AF] space-y-1 opacity-60">
          <div>// LATENCY: &lt;85ms · TENSOR_DIMS: [4096, 4096]</div>
          <div>// REGIONAL_HUBS: NAGPUR · PUNE · DUBAI</div>
        </div>

        {/* Corner Reticles */}
        <div className="absolute top-6 left-6 text-[#9CA3AF] opacity-40 font-mono text-xs">┌</div>
        <div className="absolute top-6 right-6 text-[#9CA3AF] opacity-40 font-mono text-xs">┐</div>
        <div className="absolute bottom-6 left-6 text-[#9CA3AF] opacity-40 font-mono text-xs">└</div>
        <div className="absolute bottom-6 right-6 text-[#9CA3AF] opacity-40 font-mono text-xs">┘</div>
      </div>

      {/* 10. Peripheral HUD Telemetry Indicators */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block z-0">
        <div className="absolute top-[28%] right-[2.5%] px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[rgba(15,23,42,0.06)] shadow-2xs text-[10px] font-mono text-[#4B5563] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>NEURAL SYNC: OPTIMAL</span>
        </div>

        <div className="absolute top-[64%] left-[2.5%] px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[rgba(15,23,42,0.06)] shadow-2xs text-[10px] font-mono text-[#4B5563] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3155FF]" />
          <span>GLOBAL CLUSTER · 128k H100s</span>
        </div>
      </div>

      {/* 11. Lightweight Canvas for connected atmospheric particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ opacity: 0.92 }}
      />

      {/* 12. Soft vignette blend into surface */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(246,247,249,0.3)_70%,#F6F7F9_100%)] pointer-events-none" />
    </div>
  );
});

LivingBackground.displayName = "LivingBackground";
