import { motion } from "framer-motion";
import { Code2, Smartphone, BarChart3, ShieldCheck } from "lucide-react";

export function About() {
  /**
   * Practice areas matrix specifying core operational disciplines.
   * Replaces analytics framing with engineering, architecture, and consultative domains.
   */
  const practiceAreas = [
    {
      title: "Full-Stack Web Development",
      description: "Designing end-to-end web architectures using scalable frameworks, production-grade APIs, and responsive UI components.",
      icon: <Code2 size={20} className="text-[#D8B79A]" />,
    },
    {
      title: "Mobile Application Development",
      description: "Building cross-platform mobile experiences prioritized for low-latency client delivery and native performance benchmarks.",
      icon: <Smartphone size={20} className="text-[#D8B79A]" />,
    },
    {
      title: "Business Intelligence",
      description: "Orchestrating robust data pipelines, dimensional modeling, and interactive semantic layers to drive performance insight.",
      icon: <BarChart3 size={20} className="text-[#D8B79A]" />,
    },
    {
      title: "ICT Consulting",
      description: "Advising on systems auditing, architectural modernizations, infrastructure roadmaps, and secure deployment standards.",
      icon: <ShieldCheck size={20} className="text-[#D8B79A]" />,
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/[0.02]">
      <div className="container-pro grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left Column: Context Narrative Block */}
        <div className="lg:col-span-7 space-y-8">
          {/* Section Heading - Number removed, line asset retained */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
              About Me
            </span>
            <div className="h-[1px] w-full bg-white/10" />
          </div>

          {/* Core Biography structured directly from reference narrative blueprint */}
         <div className="space-y-6 font-sans text-[15px] sm:text-[16px] leading-relaxed text-[#94A3B8]/90">
            <p>
              I am an independent Software Developer passionate about building technology that solves meaningful, real-world problems. 
              My work focuses on designing and developing robust digital systems for education, business, and public safety, 
              with a strong emphasis on systems thinking, usability, and long-term maintainability.
            </p>
            <p>
              Driven by the vision of Tanzania's educational digital transformation, I am actively championing an initiative 
              to ensure local schools and educational institutions bridge the digital divide. By developing custom websites and 
              accessible learning platforms, my goal is to provide schools with the digital infrastructure needed to enhance 
              administrative efficiency and modern learning outcomes.
            </p>
            <p>
              Alongside software engineering, I have a deep interest in languages and communication. I am fluent in Swahili and English, 
              maintain a working knowledge of Spanish and Japanese, and actively explore computational linguistics to understand the 
              powerful intersection of language and technology.
            </p>
            <p>
              I firmly believe that great software is not only technically sound—it must be purposeful, accessible, and engineered 
              capable of creating a measurable, lasting impact in people's lives.
            </p>
          </div>
          </div>

        {/* Right Column: Practice Areas Grid Matrix */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-4 lg:pt-0 pt-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D8B79A] whitespace-nowrap">
              Core Disciplines
            </span>
            <div className="h-[1px] w-full bg-white/10 lg:block hidden" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            {practiceAreas.map((area) => (
              <motion.div
                key={area.title}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-[#D8B79A]/20 hover:bg-white/[0.02] transition-all"
              >
                <div className="flex-shrink-0 mt-0.5 p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#D8B79A]/10 group-hover:bg-[#D8B79A]/5 transition-colors">
                  {area.icon}
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans text-sm font-semibold text-[#F4F4F4] group-hover:text-[#D8B79A] transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[#94A3B8]/70">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}