export function VideoSlot({ label }: { label?: string }) {
  return (
    <div className="video-slot group relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-dashed border-line bg-surface transition-colors hover:border-orange-500/50">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fg/40 transition-colors group-hover:border-orange-500/60 group-hover:text-orange-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 2.5v11l9-5.5-9-5.5Z" fill="currentColor" />
          </svg>
        </span>
        <span className="text-center font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          {label ?? "Emplacement vidéo"}
        </span>
      </div>
      <span className="absolute left-3 top-3 flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulseSoft" />
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
          À livrer
        </span>
      </span>
    </div>
  );
}
