export function PackIcon({ id }: { id: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (id === "lab") {
    return (
      <svg {...common} aria-hidden>
        <path d="M9 3h6" />
        <path d="M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" />
        <path d="M7.5 15h9" />
      </svg>
    );
  }

  if (id === "a-la-demande") {
    return (
      <svg {...common} aria-hidden>
        <path d="M12 3 4 14h6l-1 7 9-12h-6l1-6Z" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21" />
    </svg>
  );
}
