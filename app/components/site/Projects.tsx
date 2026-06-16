"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Smartphone, ShieldCheck, ExternalLink, LineChart, X } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import SalamaDashboard from "./SalamaDashboard";

export function Projects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const projectList = [
    {
      title: "Salama SOS Emergency App",
      // FIX: Natural & transparent description
      description: "Emergency response application enabling users to share SOS alerts and location information with trusted contacts in real time.",
      // FIX: High-end professional engineering tags
      stack: ["React Native", "Location Services", "Event-Driven Messaging"],
      icon: <Smartphone size={20} className="text-[#D8B79A]" />,
      gitHubUrl: "https://github.com/fredrickclaudi", // Updated dynamically based on profile identity tracking
      isSalama: true,
    },
    {
      title: "School Website Template",
      description: "A comprehensive digital portal structured for national institutions, integrating streamlined systems for academic tracking.",
      stack: ["Next.js", "Tailwind CSS", "CMS Ready"],
      icon: <ShieldCheck size={20} className="text-[#D8B79A]" />,
      gitHubUrl: "https://github.com/fredrickclaudi", // Aligned consistently
      isSalama: false,
    },
    {
      title: "EduRecord Digital System",
      description: "A performance-tuned records management platform built to centralize student profiles and secure documentation.",
      stack: ["Next.js", "PostgreSQL", "Prisma ORM"],
      icon: <FolderGit2 size={20} className="text-[#D8B79A]" />,
      gitHubUrl: "https://github.com/fredrickclaudi",
      isSalama: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const numPoints = 160;
    const points: { x: number; y: number; z: number }[] = [];
    const radius = Math.min(width, height) * 0.46;

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(Math.random() * 2 - 1);
      const phi = Math.random() * Math.PI * 2;
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angleX = 0.0004;
    let angleY = 0.0006;

    function render() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, width, height);

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      ctx.fillStyle = "rgba(216, 183, 154, 0.35)";
      ctx.strokeStyle = "rgba(226, 232, 240, 0.12)";
      ctx.lineWidth = 0.85;

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
          if (dist < 78) {
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
          ctx.arc(p.x, p.y, Math.max(0.6, 1.5 * p.opacity), 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 border-b border-white/[0.02] bg-[#0B0F19] overflow-hidden"
    >
      <div className="container-pro space-y-12 relative z-10">
        
        <ScrollReveal>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="font-bold text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
                Selected Projects
              </span>
              <div className="h-[1px] w-full bg-white/10" />
            </div>
            <p className="text-sm font-sans text-[#94A3B8] max-w-2xl leading-relaxed">
              A selection of systems I am building around education, public safety, records, and practical digital infrastructure.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative p-1 md:p-4 rounded-3xl">
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <div className="absolute w-[800px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 bg-[conic-gradient(from_0deg,#D8B79A,#0B0F19,#38BDF8,#111625,#D8B79A)] blur-[120px] animate-[spin_50s_linear_infinite]" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-65 mix-blend-screen">
              <div className="w-[850px] h-[520px] relative">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0B0F19_78%)]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr relative z-20">
            {projectList.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.15} direction="up">
                <motion.div
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(216, 183, 154, 0.25)",
                    boxShadow: "0 12px 40px -15px rgba(0,0,0,0.85), 0 0 25px rgba(226, 232, 240, 0.03)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex flex-col justify-between h-full p-6 rounded-2xl border border-white/5 bg-[#111625]/80 hover:bg-[#111625]/95 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#D8B79A]/10 group-hover:bg-[#D8B79A]/5 transition-colors">
                        {project.icon}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.isSalama && (
                          <button
                            onClick={() => setIsDashboardOpen(true)}
                            className="p-2 text-[#94A3B8] hover:text-[#D8B79A] transition-colors"
                            title="Open Telemetry Simulation"
                          >
                            <LineChart size={16} />
                          </button>
                        )}
                        {project.gitHubUrl && (
                          <a
                            href={project.gitHubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-[#94A3B8] hover:text-[#D8B79A] transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-xl tracking-tight text-[#F4F4F4] group-hover:text-[#D8B79A] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#94A3B8]/80 text-left">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-auto relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/5 bg-white/[0.02] text-[#94A3B8]/70 group-hover:border-[#D8B79A]/10 group-hover:text-[#D8B79A]/80 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>

      {/* Overlay Popover Dashboard */}
      <AnimatePresence>
        {isDashboardOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md md:max-w-4xl bg-[#111625] border border-white/10 p-4 rounded-3xl shadow-2xl"
            >
              <button
                onClick={() => setIsDashboardOpen(false)}
                className="absolute top-4 right-4 z-30 p-2 text-[#94A3B8] hover:text-white rounded-full bg-white/5 transition-colors"
              >
                <X size={16} />
              </button>
              
              <div className="w-full">
                <SalamaDashboard />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}