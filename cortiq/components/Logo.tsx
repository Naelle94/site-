import Link from "next/link";

export function Logo({ onLight = false }: { onLight?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight"
    >
      <span className="inline-block h-2 w-2 rounded-[2px] bg-orange-500" />
      <span className={onLight ? "text-black" : "text-fg"}>Cortiq</span>
    </Link>
  );
}
