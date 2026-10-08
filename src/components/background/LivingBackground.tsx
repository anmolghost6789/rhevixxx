"use client";

import React, { useEffect, useRef, useState } from "react";

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
  speed: number;
  opacity: number;
}

const INITIAL_SHAPES: FloatingShape[] = [
  { id: 1, type: "hexagon", x: 8, y: 14, size: 28, rotation: 12, speed: 0.04, opacity: 0.08 },
  { id: 2, type: "cross", x: 88, y: 22, size: 16, rotation: 45, speed: 0.06, opacity: 0.1 },
  { id: 3, type: "brackets", x: 14, y: 46, size: 22, rotation: 0, speed: 0.03, opacity: 0.09 },
  { id: 4, type: "diamond", x: 82, y: 62, size: 24, rotation: 30, speed: 0.05, opacity: 0.08 },
  { id: 5, type: "circle", x: 92, y: 80, size: 20, rotation: 0, speed: 0.04, opacity: 0.07 },
  { id: 6, type: "cross", x: 6, y: 88, size: 18, rotation: 0, speed: 0.05, opacity: 0.09 },
];

export const LivingBackground: React.FC<LivingBackgroundProps> = ({
  forceReducedMotion = false,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -1000, y: -1000, active: false });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    canvasX: -1000,
    canvasY: -1000,
    isActive: false,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      mouseRef.current.targetX = ((e.clientX - cx) / cx) * 6;
      mouseRef.current.targetY = ((e.clientY - cy) / cy) * 6;
      mouseRef.current.canvasX = e.clientX;
      mouseRef.current.canvasY = e.clientY;
      mouseRef.current.isActive = true;

      setCursorPos({ x: e.clientX, y: e.clientY, active: true });
    };

    const handleMouseLeave = () => {
      mouseRef.current.canvasX = -1000;
      mouseRef.current.canvasY = -1000;
      mouseRef.current.isActive = false;
      setCursorPos((prev) => ({ ...prev, active: false }));
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Connected Particle Canvas with Interactive Cursor Bridging
  useEffect(() => {
    const isReduced = prefersReducedMotion || forceReducedMotion;
    if (isReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const particleCount = isMobile ? 8 : 22;
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      phase: number;
    }

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      radius: Math.random() * 1.6 + 1.2,
      baseAlpha: Math.random() * 0.3 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      // Smooth lerp mouse parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const mX = mouseRef.current.canvasX;
      const mY = mouseRef.current.canvasY;
      const mActive = mouseRef.current.isActive && !isMobile;

      // Draw subtle connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.08;
            ctx.strokeStyle = `rgba(49, 85, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // LIVE EFFECT: Interactive connection from particle to mouse cursor!
        if (mActive) {
          const mdx = particles[i].x - mX;
          const mdy = particles[i].y - mY;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < 150) {
            const mAlpha = (1 - mDist / 150) * 0.25;
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mX, mY);
            ctx.stroke();

            // Glow point at particle
            ctx.fillStyle = `rgba(6, 182, 212, ${mAlpha * 1.5})`;
            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, particles[i].radius * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.02;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        const pulseAlpha = p.baseAlpha * (0.8 + 0.2 * Math.sin(p.phase));
        ctx.fillStyle = `rgba(49, 85, 255, ${pulseAlpha * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(16, 18, 22, ${pulseAlpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Live Cursor Anchor Dot when mouse active
      if (mActive) {
        ctx.fillStyle = "rgba(49, 85, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(mX, mY, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(6, 182, 212, 0.8)";
        ctx.beginPath();
        ctx.arc(mX, mY, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile, prefersReducedMotion, forceReducedMotion]);

  const isReduced = prefersReducedMotion || forceReducedMotion;
  const gridShiftY = isReduced ? 0 : (scrollY * 0.05) % 48;
  const lightShiftY1 = isReduced ? 0 : (scrollY * 0.02) % 60;
  const lightShiftY2 = isReduced ? 0 : (scrollY * -0.018) % 50;

  return (
    <div
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#F6F7F9]"
      aria-hidden="true"
    >
      {/* 1. Subtle Moving Atmosphere & Gradient Drift */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F6F7F9] via-[#FAFBFD] to-[#F2F5FA] opacity-90" />

      {/* 2. Micro SVG Noise Texture Layer for tactile 2026 tech aesthetic */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. LIVE EFFECT: Interactive Follower Spotlight Aura (glows around cursor) */}
      {cursorPos.active && !isMobile && (
        <div
          className="absolute rounded-full pointer-events-none transition-transform duration-75 ease-out will-change-transform"
          style={{
            width: "500px",
            height: "500px",
            left: -250,
            top: -250,
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
            background: "radial-gradient(circle, rgba(49,85,255,0.075) 0%, rgba(6,182,212,0.035) 45%, transparent 70%)",
            filter: "blur(35px)",
          }}
        />
      )}

      {/* 4. Soft Blurred Light Fields (Deep Blue + Indigo + Subtle Cyan) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[10%] -left-[10%] w-[680px] h-[680px] rounded-full blur-[160px] opacity-[0.045] transition-transform duration-700 ease-out will-change-transform pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3155FF 0%, rgba(49,85,255,0) 70%)",
            transform: `translate3d(0, ${lightShiftY1}px, 0)`,
          }}
        />

        <div
          className="absolute top-[40%] -right-[12%] w-[720px] h-[720px] rounded-full blur-[180px] opacity-[0.038] transition-transform duration-700 ease-out will-change-transform pointer-events-none"
          style={{
            background: "radial-gradient(circle, #4F46E5 0%, rgba(79,70,229,0) 70%)",
            transform: `translate3d(0, ${lightShiftY2}px, 0)`,
          }}
        />

        <div
          className="absolute top-[75%] left-[5%] w-[580px] h-[580px] rounded-full blur-[150px] opacity-[0.025] transition-transform duration-700 ease-out will-change-transform pointer-events-none"
          style={{
            background: "radial-gradient(circle, #06B6D4 0%, rgba(6,182,212,0) 70%)",
            transform: `translate3d(0, ${lightShiftY1 * 0.7}px, 0)`,
          }}
        />
      </div>

      {/* 5. Fine Technical Spatial Grid */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out will-change-transform"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.028) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.028) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          transform: `translate3d(0, ${-gridShiftY}px, 0)`,
        }}
      />

      {/* 6. LIVE EFFECT: Cybernetic Horizontal Radar Scan Line */}
      {!isReduced && (
        <div className="absolute inset-x-0 h-[2px] pointer-events-none animate-radar-scan z-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[#3155FF]/40 via-[#06B6D4]/50 to-transparent" />
          <div className="w-full h-8 -mt-4 bg-gradient-to-b from-[#3155FF]/[0.02] to-transparent blur-xs" />
        </div>
      )}

      {/* 7. LIVE EFFECT: Animated Flowing AI Signal Paths & Traveling Data Packets */}
      {!isReduced && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-[1]" aria-hidden="true">
          <svg
            className="w-full h-full opacity-[0.25]"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="liveSignalGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="liveSignalGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818CF8" stopOpacity="0" />
                <stop offset="70%" stopColor="#0284C7" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>

              <filter id="liveGlowSubtle" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Path 1: Upper flowing curve */}
            <path
              d="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
              stroke="url(#liveSignalGrad1)"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />

            {/* Traveling Data Packet 1 */}
            <circle r="3" fill="#3155FF" filter="url(#liveGlowSubtle)">
              <animateMotion
                path="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
                dur="16s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="1.5" fill="#38BDF8">
              <animateMotion
                path="M -100 220 C 350 140, 720 310, 1150 180 S 1500 240, 1600 220"
                dur="16s"
                begin="-8s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Path 2: Mid-lower connecting network trajectory */}
            <path
              d="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
              stroke="url(#liveSignalGrad2)"
              strokeWidth="1.2"
              strokeDasharray="6 10"
            />

            {/* Traveling Data Packet 2 */}
            <circle r="3" fill="#0284C7" filter="url(#liveGlowSubtle)">
              <animateMotion
                path="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="1.5" fill="#06B6D4">
              <animateMotion
                path="M -50 620 C 280 540, 680 720, 1050 590 S 1400 660, 1550 620"
                dur="20s"
                begin="-10s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}

      {/* 8. Minimal Coordinate Rulers / Crosshairs pattern */}
      <div className="absolute inset-0 hidden md:block opacity-[0.05] pointer-events-none">
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

      {/* 9. Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        {INITIAL_SHAPES.map((shape) => {
          const parallaxY = (scrollY * shape.speed) % 40;
          return (
            <div
              key={shape.id}
              className="absolute transition-transform duration-1000 ease-out will-change-transform"
              style={{
                left: `${shape.x}%`,
                top: `${shape.y}%`,
                opacity: shape.opacity,
                transform: `translate3d(0, ${-parallaxY}px, 0) rotate(${shape.rotation}deg)`,
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
          );
        })}
      </div>

      {/* 10. LIVE EFFECT: Floating Peripheral HUD Telemetry Indicators */}
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

      {/* 11. Canvas for connected atmospheric particles + live cursor linking */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{ opacity: 0.95 }}
      />

      {/* 12. Soft vignette blend into surface */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(246,247,249,0.3)_70%,#F6F7F9_100%)] pointer-events-none" />
    </div>
  );
};
