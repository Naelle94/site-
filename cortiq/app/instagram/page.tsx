import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Du contenu Instagram régulier avec un calendrier clair. Contenu 390 €, Contenu+ 790 €, Géré 1 190 € HT/mois.",
};

export default function InstagramPage() {
  return <ServiceLanding id="instagram" />;
}
