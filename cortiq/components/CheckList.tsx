export function CheckList({
  items,
  variant = "check",
}: {
  items: readonly string[];
  variant?: "check" | "cross";
}) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-fg/80">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] ${
              variant === "check"
                ? "bg-orange-500/15 text-orange-400"
                : "bg-fg/10 text-muted"
            }`}
            aria-hidden
          >
            {variant === "check" ? "✓" : "–"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
