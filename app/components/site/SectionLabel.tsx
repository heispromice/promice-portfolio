"use client";

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <p className="font-ui text-[11px] uppercase tracking-[0.28em] text-accent">
        {index}
      </p>
      <div className="h-px flex-1 bg-border" />
      <p className="hidden sm:block font-ui text-[11px] uppercase tracking-[0.28em] text-muted">
        {title}
      </p>
    </div>
  );
}
