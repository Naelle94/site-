import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Meta Ads",
  description:
    "Campagnes Meta Ads pilotées avec plusieurs angles créatifs testés en continu. Lancement 790 €, Croissance 1 290 €, Scale 1 990 € HT/mois.",
};

export default function MetaAdsPage() {
  return <ServiceLanding id="meta-ads" />;
}
