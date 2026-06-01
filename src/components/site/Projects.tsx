import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Database, Cpu } from "lucide-react";

export function Projects() {
  /**
   * Technical projects dataset curated for an enterprise software development profile.
   * All conceptual overviews, implementation definitions, and functional scopes are written in English.
   */
  const projectList = [
    {
      title: "EduRecord Digital System",
      description: "A centralized cloud infrastructure engineered for academic records lifecycle management within secondary schools. Built to automate document indexing, minimize paper dependencies, and implement role-based access control.",
      stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma ORM"],
      icon: <FolderGit2 size={20} className="text-[#D8B79A]" />,
      liveUrl: "#",
    },
    {
      title: "Pulse Finance Dashboard",
      description: "An enterprise financial tracking microservice designed to ingest raw transactional logs and output high-throughput reconciliation models. Eliminates legacy spreadsheet pipelines by enforcing single-source-of-truth accuracy.",
      stack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
      icon: <Database size={20} className="text-[#D8B79A]" />,
      liveUrl: "#",
    },
    {
      title: "Hifadhi Records Architecture",
      description: "A secure archival system featuring optical character recognition engines and automated digital audits. Implements structured storage protocols engineered for immediate legal and operational compliance.",
      stack: ["TypeScript", "PostgreSQL", "AWS S3", "Tesseract Engine"],
      icon: <Cpu size={20} className="text-[#D8B79A]" />,
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-white/[0.02]">
      <div className="container-pro space-y-12">
        
        {/* Section Heading Layout - Numerical indicator removed, trailing design line preserved */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
            Considered Output
          </span>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        {/* Responsive Grid Matrix - Enforces safe, single-column structures on smaller viewports 
            and maps dynamically into strict multi-column profiles on desktop setups to neutralize overlap. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projectList.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-[#D8B79A]/20 hover:bg-white/[0.02] transition-all shadow-[0_4px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm"
            >
              <div className="space-y-4">
                {/* Visual identity and external anchor container */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-[#D8B79A]/10 group-hover:bg-[#D8B79A]/5 transition-colors">
                    {project.icon}
                  </div>
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-[#94A3B8] hover:text-[#D8B79A] transition-colors"
                      aria-label={`View live implementation of ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {/* Typography metadata definition */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl tracking-tight text-[#F4F4F4] group-hover:text-[#D8B79A] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#94A3B8]/80 text-left">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technology stack compilation badges */}
              <div className="pt-6 mt-auto">
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
          ))}
        </div>

      </div>
    </section>
  );
}