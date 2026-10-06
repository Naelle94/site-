import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "onLight";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 hover:border-orange-600 shadow-[0_0_24px_rgba(255,90,31,0.35)]",
  secondary:
    "bg-transparent text-fg border border-fg/15 hover:border-fg/40",
  ghost: "bg-transparent text-fg hover:text-orange-400",
  onLight: "bg-black text-white border border-black hover:bg-black/80",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const content = (
    <span className="inline-flex items-center gap-2">
      {children}
      {arrow && (
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      )}
    </span>
  );

  const classes = `group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
