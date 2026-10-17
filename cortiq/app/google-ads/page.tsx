import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Google Shopping et PMax construits sur un flux produit propre. Shopping 590 €, Croissance 990 € HT/mois.",
};

export default function GoogleAdsPage() {
  return <ServiceLanding id="google-ads" />;
}
