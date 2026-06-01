import { socials } from '../../data/site';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-pro py-16 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-3">
          <div>
            <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-muted">
              Contact
            </p>
            <a
              href="mailto:fredrick@promice.dev"
              className="mt-3 block text-sm text-foreground transition-colors hover:text-accent"
            >
              fredrick@promice.dev
            </a>
            <p className="mt-1 text-sm text-muted">Dar es Salaam, Tanzania</p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border border-border"
              aria-hidden="true"
            >
              <span className="font-serif text-2xl tracking-tight text-foreground">
                F<span className="text-accent">·</span>C
              </span>
            </div>
            <p className="mt-4 font-ui text-[10px] uppercase tracking-[0.25em] text-muted">
              promice.dev
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-ui text-[10px] uppercase tracking-[0.25em] text-muted">
              Social
            </p>
            <ul className="mt-3 flex gap-3 md:justify-end">
              {socials.map(({ icon: Icon, href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="font-ui text-[11px] text-muted">
            © {new Date().getFullYear()} Fredrick N. Claudi. All rights reserved.
          </p>
          <ul className="flex gap-6 font-ui text-[11px] uppercase tracking-[0.2em] text-muted">
            <li><a href="#" className="hover:text-foreground">Imprint</a></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#top" className="hover:text-foreground">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
