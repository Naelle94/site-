import type { Metadata } from "next";
import { IcpLanding } from "@/components/IcpLanding";

export const metadata: Metadata = {
  title: "Acquisition pour startups pre-seed",
  description:
    "De l'acquisition payante et une présence organique minimale pour générer des signaux de traction, sans équipe growth en interne.",
};

export default function StartupsPreseedPage() {
  return <IcpLanding id="startups-preseed" />;
}
