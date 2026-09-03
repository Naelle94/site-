const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const dateTimeFormatter = new Intl.DateTimeFormat("fr-FR", {
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

  if (diffDays <= 0) return "aujourd'hui";
  if (diffDays === 1) return "hier";
  if (diffDays < 7) return `il y a ${diffDays} j`;
  if (diffDays < 30) return `il y a ${Math.round(diffDays / 7)} sem.`;
  if (diffDays < 365) return `il y a ${Math.round(diffDays / 30)} mois`;
  return `il y a ${Math.round(diffDays / 365)} an(s)`;
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
