export function Dots() {
  return (
    <span className="dots" aria-hidden>
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Loader() {
  return (
    <div className="loader-overlay" role="status" aria-label="Loading">
      <p className="flex items-baseline gap-2">
        <span className="text-xl font-bold tracking-[0.18em]">MAXIMA</span>
        <span className="font-mono text-[10px] tracking-[0.35em] text-accent">
          GROUP
        </span>
      </p>
      <Dots />
    </div>
  );
}
