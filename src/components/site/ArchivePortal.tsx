import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Code2, Layers, Cpu, Terminal, ArrowUpRight, Globe } from "lucide-react";

type ArchivePortalProps = {
  open: boolean;
  onClose: () => void;
};

const archiveCards = [
  {
    id: "core-architecture",
    title: "System Architecture",
    description: "Enterprise backend blueprints & microservices.",
    icon: Layers,
    tag: "BACKEND"
  },
  {
    id: "fullstack-ecosystems",
    title: "Full-Stack Dev",
    description: "High-performance apps & type-safe state.",
    icon: Code2,
    tag: "WEB DEV"
  },
  {
    id: "automation-pipelines",
    title: "DevOps & CI/CD",
    description: "Automated pipelines & cloud infrastructure.",
    icon: Terminal,
    tag: "INFRA"
  },
  {
    id: "technical-artifacts",
    title: "Core Blueprints",
    description: "Technical specifications & professional artifacts.",
    icon: Cpu,
    tag: "ARTIFACTS"
  }
];

export function ArchivePortal({ open, onClose }: ArchivePortalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // MATH ENGINE: Canvas 3D Rotation Matrix for Globe
  useEffect(() => {
    if (!open || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const numPoints = 140;
    const points: { x: number; y: number; z: number }[] = [];
    const radius = Math.min(width, height) * 0.42;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      ctx.fillStyle = "rgba(216, 183, 154, 0.25)"; 
      ctx.strokeStyle = "rgba(56, 189, 248, 0.06)"; 

      const projectedPoints = points.map((p) => {
        let y1 = p.y * cosX - p.z * sinX;
        let z1 = p.z * cosX + p.y * sinX;
        let x2 = p.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + p.x * sinY;

        p.x = x2;
        p.y = y1;
        p.z = z2;

        const k = 300 / (300 + z2);
        return { x: x2 * k + width / 2, y: y1 * k + height / 2, opacity: k };
      });

      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dist = Math.hypot(projectedPoints[i].x - projectedPoints[j].x, projectedPoints[i].y - projectedPoints[j].y);
          if (dist < 55) {
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      projectedPoints.forEach((p) => {
        if (p.x >= 0 && p.x <= width && p.y >= 0 && p.y <= height) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.8, 1.8 * p.opacity), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0B0F19]/95 px-3 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          {/* Dismiss button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-[170] inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#94A3B8] transition-colors hover:border-[#D8B79A]/40 hover:text-[#F4F4F4] focus:outline-none"
          >
            <X size={16} />
          </button>

          {/* MOVING GLOBE BACKGROUND (Desktop Pekee) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden flex items-center justify-center">
            <div className="w-[700px] h-[700px] relative opacity-60">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0B0F19_70%)]" />
            </div>
          </div>

          {/* MAIN CARD CONTAINER - Absolute Center */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 190 }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#111625]/90 p-5 shadow-[0_0_60px_rgba(0,0,0,0.9)] md:p-8 backdrop-blur-md"
          >
            <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
              <div className="absolute -inset-[10px] opacity-15 bg-[conic-gradient(from_0deg,#D8B79A,#0B0F19,#38BDF8,#111625,#D8B79A)] blur-[15px] animate-[spin_15s_linear_infinite]" />
            </div>

            {/* HEADER CONTEXT - Font ikiwa ya Kawaida na Bold tu */}
            <div className="relative z-10 border-b border-white/[0.05] pb-4">
              <div className="flex items-center gap-2">
                {/* GLOBE ICON KWENYE DESKTOP VIEW CARD HEADER */}
                <Globe size={14} className="text-[#D8B79A] hidden lg:block animate-pulse" />
                <span className="font-mono text-[8px] tracking-[0.3em] uppercase text-[#D8B79A]">
                  System Architecture Node
                </span>
              </div>
              <h3 className="mt-1 font-sans text-lg sm:text-xl font-bold text-[#F4F4F4] tracking-tight">
                Engineering Archive Portal
              </h3>
              <p className="mt-1 font-sans text-[11px] text-[#94A3B8] leading-normal">
                Select a protocol matrix below to evaluate system blueprints or core analytical execution credentials.
              </p>
            </div>

            {/* GRID SYSTEM: Strict 2x2 Matrix for S20 Compliance */}
            <div className="relative z-10 mt-4 grid grid-cols-2 gap-3">
              {archiveCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.id}
                    whileHover={{ 
                      y: -4, 
                      borderColor: "rgba(216, 183, 154, 0.25)",
                      boxShadow: "0 8px 25px -10px rgba(0,0,0,0.8), 0 0 15px rgba(216, 183, 154, 0.04)"
                    }}
                    transition={{ type: "spring", damping: 14, stiffness: 140 }}
                    className="group flex flex-col justify-between rounded-xl border border-white/[0.04] bg-[#0B0F19]/80 p-3.5 cursor-pointer transition-colors duration-300 hover:bg-[#0B0F19]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/5 bg-white/[0.02] text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors">
                          <Icon size={13} className="stroke-[1.5]" />
                        </div>
                        <span className="font-mono text-[7px] tracking-wider text-[#94A3B8]/40 border border-white/10 rounded px-1.5 py-0.2">
                          {card.tag}
                        </span>
                      </div>

                      {/* SUB-CARD HEADER - Font ya Kawaida yenye Bold tu */}
                      <h4 className="mt-3 font-sans text-[12px] sm:text-[14px] font-bold text-[#F4F4F4] group-hover:text-[#D8B79A] transition-colors line-clamp-1">
                        {card.title}
                      </h4>
                      <p className="mt-1 font-sans text-[10px] leading-normal text-[#94A3B8]/70 line-clamp-2">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/[0.03] flex items-center justify-between">
                      <span className="font-mono text-[7px] tracking-wider text-[#94A3B8]/30 group-hover:text-[#F4F4F4] transition-colors">
                        INITIALIZE //
                      </span>
                      <ArrowUpRight size={10} className="text-[#94A3B8]/30 group-hover:text-[#D8B79A] transition-all" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="relative z-10 mt-4 pt-3 border-t border-white/[0.05] text-center">
              <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-[#94A3B8]/30">
                Secure Core Infrastructure Node // Tanzania Active
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}