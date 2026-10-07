import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Crash-test créatif pour SaaS B2B",
  description:
    "Testez 5 angles publicitaires en vidéo IA pensés pour un cycle de vente B2B, avant de les pousser en LinkedIn Ads ou Meta Ads. Prix public, livré en 5 jours.",
};

export default function SaasB2bPage() {
  return <IcpLanding id="saas-b2b" />;
}
