"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Tabs, type TabKey } from "@/components/Tabs";
import { BDevBoard } from "@/components/BDevBoard";
import { FormSubmissionsPanel } from "@/components/FormSubmissionsPanel";
import { BDEV_LEADS, FORM_SUBMISSIONS } from "@/lib/seed-data";

const SNAPSHOT_DATE = "3 septembre 2026";

export default function Page() {
  const [tab, setTab] = useState<TabKey>("bdev");

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Tabs
          active={tab}
          onChange={setTab}
          counts={{ bdev: BDEV_LEADS.length, forms: FORM_SUBMISSIONS.length }}
        />
        <div className="pt-5">
          {tab === "bdev" ? <BDevBoard /> : <FormSubmissionsPanel />}
        </div>
        <footer className="mt-10 border-t border-ink-600/40 pt-4 text-xs text-paper-100/30">
          Instantané HubSpot au {SNAPSHOT_DATE} (portail Gratia). Les statuts et reclassements que
          vous choisissez sont sauvegardés dans ce navigateur.
        </footer>
      </main>
    </div>
  );
}
