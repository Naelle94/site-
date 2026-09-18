import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 border border-orange-500 hover:border-orange-600",
  secondary:
    "bg-transparent text-ink border border-ink/15 hover:border-ink/40",
  ghost: "bg-transparent text-ink hover:text-orange-600",
  dark: "bg-white text-ink border border-white hover:bg-white/90",
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
