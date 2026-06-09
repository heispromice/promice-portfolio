"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, BarChart3, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  const practiceAreas = [
    {
      title: "Full-Stack Web Development",
      description: "Designing reliable end-to-end web applications with modern architectures and responsive UI layouts.",
      skills: ["React", "Next.js", "TypeScript", "ASP .NET Core"],
      icon: <Code2 size={18} className="text-[#D8B79A]" />,
    },
    {
      title: "Mobile Application Development",
      description: "Building fast, high-performance cross-platform mobile experiences tailored for seamless native delivery.",
      skills: ["React Native", "REST APIs", "Expo"],
      icon: <Smartphone size={18} className="text-[#D8B79A]" />,
    },
    {
      title: "Business Intelligence",
      description: "Structuring clean data pipelines and interactive analytical dashboards to extract operational insights.",
      skills: ["SQL", "Power BI", "Excel", "Tableau"],
      icon: <BarChart3 size={18} className="text-[#D8B79A]" />,
    },
    {
      title: "ICT Consulting",
      description: "Advising on systems infrastructure, technical audits, secure deployments, and digital scaling blueprints.",
      skills: ["Systems Analysis", "Security", "Databases", "Digital Strategy"],
      icon: <ShieldCheck size={18} className="text-[#D8B79A]" />,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/[0.02]">
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Context Narrative Block */}
        <div className="lg:col-span-7 space-y-8">
          <ScrollReveal>
            <div className="flex items-center gap-4">
              <span className="font-bold text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
                About Me
              </span>
              <div className="h-[1px] w-full bg-white/10" />
            </div>
          </ScrollReveal>

          <div className="space-y-6 font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#F4F4F4]/90">
            <ScrollReveal delay={0.1}>
              <p>
                I’m Fredrick Claudi, a software developer focused on building reliable software systems for schools, businesses, and public-service organizations.
                My work focuses on web platforms, mobile applications, records systems, dashboards, and tools that help people manage information more clearly and work more efficiently.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p>
                I’m especially interested in education technology and business systems in Tanzania, where reliable software can help schools, teams, and institutions close operational gaps.
                Alongside development, I bring a strong interest in language, communication, and usability, which helps me build systems that are not only technical, but clear, accessible, and useful to the people who depend on them.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right Column: Practice Areas Grid Matrix */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal>
            <div className="flex items-center gap-4 lg:pt-0 pt-4">
              <span className="font-bold text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
                What I Build
              </span>
              <div className="h-[1px] w-full bg-white/10 lg:block hidden" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4">
            {practiceAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 0.12} direction="up">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#D8B79A]/20 hover:bg-white/[0.02] transition-all"
                >
                  <div className="flex-shrink-0 mt-0.5 p-1.5 h-fit rounded-lg bg-white/5 border border-white/5 group-hover:border-[#D8B79A]/10 group-hover:bg-[#D8B79A]/5 transition-colors">
                    {area.icon}
                  </div>
                  <div className="space-y-2 w-full">
                    <div className="space-y-1">
                      <h4 className="font-sans text-sm font-semibold text-[#F4F4F4] group-hover:text-[#D8B79A] transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-[#E2E8F0]/80">
                        {area.description}
                      </p>
                    </div>
                    
                    {/* Skill tags array under the card descriptions */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {area.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-[10px] font-medium font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.05] text-[#94A3B8] group-hover:text-[#D8B79A]/80 group-hover:border-[#D8B79A]/10 transition-colors"
                        >
                          {skill}
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
    </section>
  );
}