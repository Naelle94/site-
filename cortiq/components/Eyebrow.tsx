export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-orange-600">
      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  );
}
