import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Meta Ads, Google Ads, CRM et SEO pour l'e-commerce",
  description:
    "Les 4 canaux qui comptent pour un e-commerce Shopify autour de 15 000 € de CA par mois, avec des prix publics et un dashboard commun.",
};

export default function EcommercePage() {
  return <IcpLanding id="ecommerce" />;
}
