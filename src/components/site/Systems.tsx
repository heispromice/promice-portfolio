import { useState } from "react";
import { Clock, Globe } from "lucide-react";
import { ArchivePortal } from "./ArchivePortal";

export function Systems() {
  // Local state container tracking display configurations of the modal instance
  const [open, setOpen] = useState(false);

  return (
    <section id="systems" className="py-24 md:py-32 border-b border-white/[0.02]">
      <div className="container-pro">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#94A3B8]">
          <span className="text-[#D8B79A]"> — Systems</span>
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-[24px] border border-white/5 bg-white/[0.01] p-6 md:p-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-semibold text-3xl tracking-tight text-[#F4F4F4] md:text-5xl">
              A smaller doorway to older systems.
            </h2>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#94A3B8]">
              Click to reveal the archive portal containing historical design systems, career documentation, and background records.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 self-start md:self-auto rounded-full border border-white/10 bg-white/5 px-5 py-3 font-ui text-xs font-semibold text-[#F4F4F4] transition-all hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D8B79A]/10 text-[#D8B79A]">
              <Clock size={14} />
            </span>
            Open archive portal
          </button>
        </div>
      </div>

      {/* Floating persistent trigger element dedicated entirely to mobile user configurations */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0B0F19]/80 text-[#D8B79A] backdrop-blur-md shadow-lg shadow-black/40"
          aria-label="Open archive portal"
        >
          {/* Extended animation timeline to reduce rendering compute load and provide low-friction visual updates */}
          <Globe className="h-5 w-5 animate-spin" style={{ animationDuration: "12s" }} />
        </button>
      </div>

      {/* Mounting point for the portal container layout */}
      <ArchivePortal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}