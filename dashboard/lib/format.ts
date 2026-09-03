const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(iso));
}

export function formatDateTime(iso: string): string {
  return dateTimeFormatter.format(new Date(iso));
}

export function relativeFromNow(iso: string, now: Date = new Date()): string {
  const then = new Date(iso).getTime();
  const diffMs = now.getTime() - then;
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.round(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.round(diffDays / 30)}mo ago`;
  return `${Math.round(diffDays / 365)}y ago`;
}

export function isWithinDays(iso: string, days: number, now: Date = new Date()): boolean {
  const then = new Date(iso).getTime();
  const diffDays = (now.getTime() - then) / (1000 * 60 * 60 * 24);
  return diffDays <= days;
}

export function initials(firstname: string, lastname: string): string {
  const a = firstname?.trim()?.[0] ?? "";
  const b = lastname?.trim()?.[0] ?? "";
  const combo = `${a}${b}`.toUpperCase();
  return combo || "?";
}
