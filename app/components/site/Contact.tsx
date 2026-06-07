"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { ScrollReveal } from "./ScrollReveal";

const directContactLinks = [
  { 
    label: "Email", 
    value: "heispromice@gmail.com", 
    href: "mailto:heispromice@gmail.com", 
    icon: <Mail size={14} />, 
    type: "button" 
  },
  { 
    label: "WhatsApp", 
    value: "wa.me/Fredrick", 
    href: "https://wa.me/255750465919", 
    icon: (
      <svg width={14} height={14} className="fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.498 5.352 1.499 5.485 0 9.948-4.467 9.951-9.96.001-2.659-1.026-5.158-2.894-7.03C17.13 1.79 14.635.764 12.012.764c-5.495 0-9.959 4.468-9.963 9.961-.001 2.083.541 4.116 1.566 5.86l-.99 3.614 3.701-.971zm11.514-4.814c-.312-.156-1.848-.912-2.126-1.013-.279-.102-.482-.156-.684.156-.202.311-.782.156-.959 1.164-.176.102-.353.156-.665.001-.312-.156-1.317-.486-2.51-1.549-.928-.827-1.554-1.849-1.737-2.16-.182-.312-.02-.481.136-.635.14-.139.312-.363.468-.545.156-.182.208-.312.312-.519.104-.208.052-.389-.026-.545-.078-.156-.684-1.649-.938-2.259-.247-.595-.5-.514-.684-.523-.176-.009-.38-.01-.584-.01-.204 0-.537.077-.817.382-.28.305-1.071 1.046-1.071 2.551 0 1.505 1.094 2.959 1.246 3.166.152.208 2.152 3.286 5.213 4.602.728.313 1.297.5 1.74.641.73.232 1.395.2 1.92.121.585-.088 1.848-.756 2.109-1.449.261-.693.261-1.288.182-1.411-.078-.123-.28-.195-.593-.351z" />
      </svg>
    ), 
    type: "button"
  }
];

const elsewhereSocials = [
  { 
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/fredrick-claudi-5a162230b", 
    icon: (
      <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ) 
  },
  { 
    label: "GitHub", 
    href: "https://github.com/heispromice", 
    icon: (
      <svg width={18} height={18} className="fill-current" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    ) 
  },
  { 
    label: "Instagram", 
    href: "https://www.instagram.com/_promicee", 
    icon: (
      <svg width={18} height={18} className="fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ) 
  },
  { 
    label: "Phone", 
    href: "tel:+255670844973", 
    icon: <Phone size={18} className="stroke-2" /> 
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="border-t border-white/[0.04] pt-16 md:pt-24 w-full">
          
          <ScrollReveal>
            <SectionLabel index="— Contact" title="Start a conversation." />
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.05}>
            <h2 className="mt-6 max-w-xl font-semibold text-[18px] leading-relaxed tracking-normal text-[#F4F4F4] sm:text-[20px] md:text-2xl">
              If you are planning a system that needs clarity, reliability, and long-term value, I would be glad to help build it.{" "}
              <span className="text-[#94A3B8]">I build reliable software for education, business, and public safety</span>
              <span className="text-[#D8B79A]">.</span>
            </h2>
          </ScrollReveal>

          {/* Main Layout Grid */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start">
            
            {/* LEFT COLUMN: Narrative & CTAs */}
            <div className="space-y-10 lg:col-span-6 w-full min-w-0">
              
              <div className="space-y-4 max-w-xl w-full">
                <ScrollReveal direction="up" delay={0.1}>
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-bold">
                    Direct Engagement
                  </p>
                </ScrollReveal>
              
                <ScrollReveal direction="up" delay={0.15}>
                  <div className="space-y-4 text-[14px] md:text-[15px] leading-relaxed text-[#F4F4F4]/90 font-medium">
                    <p>
                      Whether you need a new platform, a cleaner backend, or help turning a complex workflow into a simple digital product, I build with clarity, structure, and long-term maintainability in mind. 
                    </p>
                    <p>
                      I prefer direct communication, thoughtful planning, and work that is technically sound. If the brief is clear, I will turn it into something practical and well built.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* DUAL BUTTON CTAs: Removed className from ScrollReveal to fix TS error */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl w-full">
                {directContactLinks.map((contact, index) => {
                  return (
                    <ScrollReveal key={contact.label} delay={0.2 + index * 0.08} direction="up">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                        className={`inline-flex items-center justify-center gap-3 rounded-full border px-7 py-3.5 font-sans text-[11px] font-semibold transition-all group w-full sm:w-auto text-center ${
                          index === 0 
                            ? "bg-[#D8B79A] text-[#0B0F19] hover:bg-[#c9a687] hover:shadow-[0_4px_20px_rgba(216,183,154,0.15)]"
                            : "border-white/10 bg-white/5 text-[#F4F4F4] hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
                        }`}
                      >
                        {contact.icon}
                        {contact.label === "Email" ? "Drop an Email Directly" : "Schedule a Tech Consultation"}
                      </a>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: Elsewhere Social Links */}
            <div className="lg:col-span-6 w-full min-w-0 lg:pl-6">
              <ScrollReveal delay={0.25}>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#94A3B8] font-bold">
                  Find me elsewhere
                </p>
              </ScrollReveal>
              
              <ul className="mt-3 space-y-3 w-full">
                {elsewhereSocials.map(({ icon, label, href }, index) => (
                  <ScrollReveal key={label} delay={0.3 + index * 0.05} direction="up">
                    <li>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between border-b border-white/[0.04] py-4 text-[#F4F4F4] transition-colors hover:text-[#D8B79A] w-full"
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <span className="text-[#94A3B8] group-hover:text-[#D8B79A] transition-colors flex-shrink-0">
                            {icon}
                          </span>
                          <span className="font-sans text-[13px] tracking-wide truncate">{label}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#94A3B8] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D8B79A] flex-shrink-0" />
                      </a>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}