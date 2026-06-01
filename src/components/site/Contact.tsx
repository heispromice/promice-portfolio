import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { socials } from '../../data/site';

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-pro">
        <div className="border-t border-border pt-16 md:pt-24">
          <SectionLabel index="— Contact" title="Make contact." />

          <h2 className="mt-10 max-w-4xl font-serif text-[40px] leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Let's build something{" "}
            <span className="italic text-foreground/90">considered</span>
            <span className="text-accent">.</span>
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-muted">
                Direct
              </p>
              <a
                href="mailto:fredrick@promice.dev"
                className="mt-3 inline-flex items-center gap-3 font-serif text-2xl text-foreground transition-colors hover:text-accent md:text-3xl"
              >
                fredrick@promice.dev
                <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
                For project enquiries, consulting engagements or a quiet conversation about data and systems — I read every message.
              </p>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-muted">
                Elsewhere
              </p>
              <ul className="mt-3 space-y-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between border-b border-border py-4 text-foreground transition-colors hover:text-accent"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="h-4 w-4" />
                        <span className="font-ui text-[13px] tracking-wide">{label}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
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
