import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Phone, CalendarCheck } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const directContactLinks = [
  { 
    label: "Email", 
    value: "heispromice@gmail.com", 
    href: "mailto:heispromice@gmail.com", 
    icon: Mail, 
    type: "button" 
  },
  { 
    label: "WhatsApp", 
    value: "wa.me/Fredrick", 
    href: "https://wa.me/255750465919", 
    icon: CalendarCheck, 
    type: "button"
  }
];

const elsewhereSocials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fredrick-claudi-5a162230b", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/heispromice", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/_promicee", icon: Instagram },
  { label: "Phone", href: "tel:+255670844973", icon: Phone }
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0B0F19]">
      <div className="container-pro">
        <div className="border-t border-white/[0.04] pt-16 md:pt-24">
          <SectionLabel index="— Connection" title="Start a conversation." />

          <h2 className="mt-10 max-w-4xl font-serif text-[32px] leading-[1.1] tracking-tight text-[#F4F4F4] md:text-5xl">
            Let's design and engineer solutions that scale.{" "}
            <span className="italic text-[#94A3B8]">Crafting software with absolute purpose</span>
            <span className="text-[#D8B79A]">.</span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-12">
            
            {/* LEFT COLUMN: Professional Narrative & CTAs */}
            <div className="space-y-10 lg:col-span-6">
              
              <div className="space-y-4 max-w-xl">
                <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#94A3B8]">
                  Direct Engagement
                </p>
              
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#94A3B8]/90">
                  Whether you have a fully mapped architectural requirement, a complex product idea that needs full-stack development, or simply want to explore how robust backends can elevate your platform's reliability—I am always open to strategic engineering discussions. 
                </p>
                <p className="text-[14px] md:text-[15px] leading-relaxed text-[#94A3B8]/90">
                  No generic forms, no automated handoffs. When you reach out, you connect directly with me to talk tech stacks, architecture, and deployment pipelines. I read and respond to every intentional inquiry.
                </p>
              </div>

              {/* DUAL BUTTON CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                {directContactLinks.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={contact.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                      className={`inline-flex items-center justify-center gap-3 rounded-full border px-7 py-3.5 font-ui text-[11px] font-semibold transition-all group ${
                        index === 0 
                          ? "bg-[#D8B79A] text-[#0B0F19] hover:bg-[#c9a687] hover:shadow-[0_4px_20px_rgba(216,183,154,0.15)]"
                          : "border-white/10 bg-white/5 text-[#F4F4F4] hover:border-[#D8B79A]/40 hover:text-[#D8B79A]"
                      }`}
                    >
                      <Icon size={14} />
                      {contact.label === "Email" ? "Drop an Email Directly" : "Schedule a Tech Consultation"}
                    </a>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: Elsewhere Social Links */}
            <div className="md:col-span-5 md:col-start-8">
              <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-[#94A3B8]">
                Elsewhere
              </p>
              
              <ul className="mt-3 space-y-3">
                {elsewhereSocials.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-white/[0.04] py-4 text-[#F4F4F4] transition-colors hover:text-[#D8B79A]"
                    >
                      <span className="flex items-center gap-3">
                        <Icon size={18} className="stroke-2" />
                        <span className="font-ui text-[13px] tracking-wide">{label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#94A3B8] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#D8B79A]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}