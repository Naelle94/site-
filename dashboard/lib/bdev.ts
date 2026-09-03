import type { BDevStatus } from "./storage";

export const STATUS_LABEL: Record<BDevStatus, string> = {
  mql: "MQL",
  converti: "Converted",
  signe: "Signed",
};

export const STATUS_COLOR_CLASS: Record<BDevStatus, string> = {
  mql: "text-signal-info",
  converti: "text-brand-400",
  signe: "text-signal-success",
};

export const NEXT_STATUS: Record<BDevStatus, BDevStatus | null> = {
  mql: "converti",
  converti: "signe",
  signe: null,
};

export const PREV_STATUS: Record<BDevStatus, BDevStatus | null> = {
  mql: null,
  converti: "mql",
  signe: "converti",
};
