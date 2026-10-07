import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Cortiq"
      className="inline-flex items-baseline text-[17px] font-semibold leading-none tracking-tight text-fg"
    >
      <span>cort</span>
      <span className="relative inline-block leading-none">
        <span aria-hidden>ı</span>
        <span className="absolute left-1/2 top-0 h-[3px] w-[3px] -translate-x-1/2 -translate-y-[2px] rounded-[1px] bg-orange-500" />
      </span>
      <span>q</span>
    </Link>
  );
}
