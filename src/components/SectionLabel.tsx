export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-ink-soft">
      <span className="h-px w-8 bg-accent" />
      {children.toUpperCase()}
    </p>
  );
}

export function SectionLabelDark({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-paper/50">
      <span className="h-px w-8 bg-accent" />
      {children.toUpperCase()}
    </p>
  );
}
