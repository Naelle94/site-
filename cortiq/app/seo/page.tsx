import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "SEO",
  description:
    "Audit technique Shopify avant tout plan de contenu. Audit 390 €, Pack 10 fiches produit 590 €, SEO Mensuel 590 € HT/mois.",
};

export default function SeoPage() {
  return <ServiceLanding id="seo" />;
}
