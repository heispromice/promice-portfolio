import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, FileText, ArrowRight } from "lucide-react";

type ArchivePortalProps = {
  open: boolean;
  onClose: () => void;
};

export function ArchivePortal({ open, onClose }: ArchivePortalProps) {
  /**
   * Effect listener to handle global keyboard accessibility events.
   * Automatically closes the modal interface upon pressing the 'Escape' key.
   */
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (open) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden"; // Prevents background viewport scrolling when modal is active
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = ""; // Restores layout scrolling mechanics upon unmount
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/95 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          {/* Main dismiss button for interface closure */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#94A3B8] transition-colors hover:border-[#D8B79A]/40 hover:text-[#F4F4F4]"
          >
            <X size={18} />
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 200 }}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-4"
          >
            {/* Shifting background neon rings to establish premium depth visuals */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ff2d55,#007aff,#4cd964,#ffcc00,#ff2d55)] blur-[30px] opacity-40 animate-[spin_8s_linear_infinite]" />
            <div className="pointer-events-none absolute inset-2 rounded-full bg-[conic-gradient(from_180deg,#00f2fe,#4facfe,#000000,#00f2fe)] blur-[12px] opacity-50 animate-[spin_12s_linear_infinite_reverse]" />

            {/* Core structural container inheriting primary application dark styling */}
            <div className="relative w-full aspect-square rounded-full border border-white/10 bg-[#0B0F19] shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,183,154,0.05)_0%,transparent_70%)] pointer-events-none" />

              <div className="relative z-10 w-full max-w-[80%] text-center flex flex-col items-center justify-center mt-[-10px]">
                <h3 className="font-serif text-[16px] sm:text-[20px] font-medium leading-snug text-[#F4F4F4] tracking-tight">
                  Curriculum Vitae
                </h3>
                <p className="mt-1 text-[11px] font-mono tracking-wider text-[#94A3B8]">
                  Professional Background & Core Stack
                </p>

                {/* 3D Render viewport configuration zone */}
                <div 
                  className="mt-6 w-full max-w-[240px] aspect-[1/1.414]"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: -15,
                      rotateX: 10,
                      translateZ: "30px"
                    }}
                    initial={{ rotateY: -8, rotateX: 6 }}
                    className="relative block w-full h-full rounded-lg border border-white/15 bg-white/[0.03] p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden group select-none backdrop-blur-sm"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                    
                    {/* Simulated vector layout serving as an abstract document silhouette */}
                    <div className="w-full h-full border border-white/5 rounded p-3 flex flex-col justify-between bg-[#0F172A]/40">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <FileText size={16} className="text-[#D8B79A]" />
                          <div className="h-1.5 w-12 bg-white/20 rounded" />
                        </div>
                        <div className="space-y-1.5 pt-1">
                          <div className="h-2 w-full bg-white/10 rounded" />
                          <div className="h-2 w-5/6 bg-white/10 rounded" />
                          <div className="h-2 w-4/5 bg-white/10 rounded" />
                        </div>
                        <div className="space-y-1.5 pt-3">
                          <div className="h-1.5 w-1/2 bg-[#D8B79A]/30 rounded" />
                          <div className="grid grid-cols-3 gap-1">
                            <div className="h-3 bg-white/5 rounded-sm border border-white/5" />
                            <div className="h-3 bg-white/5 rounded-sm border border-white/5" />
                            <div className="h-3 bg-white/5 rounded-sm border border-white/5" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-white/5">
                        <span className="font-mono text-[9px] tracking-wider text-[#D8B79A] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          OPEN FILE <ArrowRight size={10} />
                        </span>
                        <div className="h-1 w-6 bg-white/20 rounded" />
                      </div>
                    </div>
                  </motion.a>
                </div>

                <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.25em] text-[#94A3B8]/40">
                  Interactive Access Portal
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}