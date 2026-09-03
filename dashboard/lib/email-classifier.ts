// Classifie une adresse email en "personal" (boîte grand public, poubelle pour la
// qualification B2B), "internal" (domaine Gratia lui-même — soumissions de test internes,
// exclues des deux compteurs), ou "business" (adresse d'entreprise / vérifiée).

const INTERNAL_DOMAIN = "gogratia.com";

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.fr",
  "ymail.com",
  "rocketmail.com",
  "hotmail.com",
  "hotmail.fr",
  "hotmail.co.uk",
  "outlook.com",
  "outlook.fr",
  "live.com",
  "live.fr",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "aol.com",
  "protonmail.com",
  "proton.me",
  "gmx.com",
  "gmx.de",
  "mail.com",
  "yandex.com",
  "yandex.ru",
  "zoho.com",
  "comcast.net",
  "verizon.net",
  "att.net",
  "sbcglobal.net",
  "inbox.com",
  "fastmail.com",
  "hey.com",
  "web.de",
  "laposte.net",
  "orange.fr",
  "free.fr",
]);

// Variantes/typos fréquentes de fournisseurs grand public repérées dans les données
// (ex: "36gmail.com", "gmaio.com", "gam.com" — clairement des adresses jetables/mal
// saisies plutôt que des domaines d'entreprise).
const FREE_EMAIL_HINTS = ["gmail", "gmial", "gmaio", "yaho", "hotmial", "outlok"];

export type EmailClass = "business" | "personal" | "internal";

export function domainOf(email: string): string {
  const at = email.lastIndexOf("@");
  return at === -1 ? "" : email.slice(at + 1).toLowerCase().trim();
}

export function classifyEmail(email: string): EmailClass {
  const domain = domainOf(email);
  if (!domain) return "personal";
  if (domain === INTERNAL_DOMAIN) return "internal";
  if (FREE_EMAIL_DOMAINS.has(domain)) return "personal";
  if (FREE_EMAIL_HINTS.some((hint) => domain.includes(hint))) return "personal";
  return "business";
}
