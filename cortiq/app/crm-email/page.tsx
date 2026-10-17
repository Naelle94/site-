import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "CRM / Email",
  description:
    "Audit de délivrabilité et flows automatiques (bienvenue, panier, post-achat) avant toute newsletter. Kickstart 790 €, Complet 1 290 € HT.",
};

export default function CrmEmailPage() {
  return <ServiceLanding id="crm-email" />;
}
