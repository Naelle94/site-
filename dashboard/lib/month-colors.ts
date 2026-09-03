// Fixed categorical color per calendar month (Jan..Dec), assigned in a fixed hue
// order — never re-cycled by "which months are present," so April is always the
// same color everywhere in the app. Built from the dataviz skill's validated
// 8-slot dark categorical palette (worst adjacent CVD ΔE 8.4, normal-vision ΔE
// 19.3, all >=3:1 against our #0A2621 surface — verified with
// scripts/validate_palette.js). Only 8 hues clear the CVD gates as an ordered
// set, so months 8 apart share a hue (Jan/Sep, Feb/Oct, Mar/Nov, Apr/Dec) — they
// are never adjacent in a rolling few-month view, and every badge also carries
// its month name as a text label, so identity never rests on color alone.

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const SLOT_HEX = [
  "#3987e5", // blue
  "#d95926", // orange
  "#199e70", // aqua
  "#c98500", // yellow
  "#d55181", // magenta
  "#008300", // green
  "#9085e9", // violet
  "#e66767", // red
] as const;

const MONTH_HEX = [
  SLOT_HEX[0], // Jan
  SLOT_HEX[1], // Feb
  SLOT_HEX[2], // Mar
  SLOT_HEX[3], // Apr
  SLOT_HEX[4], // May
  SLOT_HEX[5], // Jun
  SLOT_HEX[6], // Jul
  SLOT_HEX[7], // Aug
  SLOT_HEX[0], // Sep (reuses Jan's hue — 8 months apart)
  SLOT_HEX[1], // Oct (reuses Feb's hue)
  SLOT_HEX[2], // Nov (reuses Mar's hue)
  SLOT_HEX[3], // Dec (reuses Apr's hue)
] as const;

export function monthIndex(iso: string): number {
  return new Date(iso).getUTCMonth();
}

export function monthColor(index: number): string {
  return MONTH_HEX[index];
}

export function monthLabel(index: number): string {
  return MONTH_LABELS[index];
}

// "Apr 2026" — the label used for grouping/sorting in the monthly recap.
export function yearMonthKey(iso: string): string {
  const d = new Date(iso);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
}

export function yearMonthLabel(iso: string): string {
  const d = new Date(iso);
  return `${monthLabel(d.getUTCMonth())} ${d.getUTCFullYear()}`;
}
