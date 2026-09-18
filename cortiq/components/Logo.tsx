import Link from "next/link";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight"
    >
      <span
        className={`inline-block h-2 w-2 rounded-[2px] ${
          dark ? "bg-orange-500" : "bg-orange-500"
        }`}
      />
      <span className={dark ? "text-white" : "text-ink"}>Cortiq</span>
    </Link>
  );
}
