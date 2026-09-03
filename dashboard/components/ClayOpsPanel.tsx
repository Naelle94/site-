const CLAY_URL =
  "https://app.clay.com/workspaces/1129947/workbooks/wb_0tkn2t3mZ5pZTyFBvp3/tables/t_0tks4peBXvbxXpKRws8/views/gv_0tks4pfwmSSEv5A3xwa";

export function ClayOpsPanel() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-surface-600 bg-surface-900/50 px-6 py-16 text-center">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-xl font-bold text-surface-950">
        ↗
      </span>
      <h3 className="mt-4 text-lg font-bold text-paper-50">Ops Campaign — coming soon</h3>
      <p className="mt-2 max-w-md text-sm text-paper-100/50">
        This campaign is being built in Clay and isn&apos;t live yet. Once it starts
        sending, its leads will get their own board here — same layout as [BDev]:
        MQL → Converted → Signed, dated and color-coded by month.
      </p>
      <a
        href={CLAY_URL}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-500/15 px-4 py-2 text-sm font-medium text-brand-400 hover:bg-brand-500/25"
      >
        Open the campaign in Clay ↗
      </a>
      <p className="mt-4 max-w-md text-xs text-paper-100/30">
        Note: this dashboard is connected to the Gratia Clay workspace, but the
        current connection only reaches Clay Audiences (accounts/contacts/deals) —
        not this workbook&apos;s raw table rows. Once the campaign is live, its leads
        will need to land in HubSpot (like [BDev] and the form) or the connection
        will need workbook-level access to read them directly.
      </p>
    </div>
  );
}
