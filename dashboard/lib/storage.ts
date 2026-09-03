"use client";

// Persistance légère côté navigateur (localStorage) pour ce dashboard mono-poste
// protégé par mot de passe. Les mouvements (BDev -> Converti/Signé) et les
// reclassements manuels (Entreprise <-> Poubelle) survivent aux rechargements
// et aux visites suivantes sur ce même navigateur.

export type BDevStatus = "mql" | "converti" | "signe";

const BDEV_KEY = "gratia-dashboard:bdev-status:v1";
const FORM_OVERRIDE_KEY = "gratia-dashboard:form-override:v1";

function safeRead<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeWrite<T>(key: string, value: T) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // stockage indisponible (navigation privée, quota) — on ignore silencieusement
  }
}

export function readBDevStatuses(): Record<string, BDevStatus> {
  return safeRead(BDEV_KEY, {});
}

export function writeBDevStatus(id: string, status: BDevStatus) {
  const all = readBDevStatuses();
  all[id] = status;
  safeWrite(BDEV_KEY, all);
}

// Reclassement manuel d'une soumission de formulaire : "business" ou "personal"
// (écrase la classification automatique par domaine d'email).
export function readFormOverrides(): Record<string, "business" | "personal"> {
  return safeRead(FORM_OVERRIDE_KEY, {});
}

export function writeFormOverride(id: string, value: "business" | "personal") {
  const all = readFormOverrides();
  all[id] = value;
  safeWrite(FORM_OVERRIDE_KEY, all);
}
