export function Header() {
  return (
    <header className="px-4 pt-5 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl bg-paper-50 px-4 py-3 shadow-card sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-surface-950">
            ↗
          </span>
          <span className="font-sans text-base font-bold tracking-tight text-surface-950">
            Gratia
          </span>
          <span className="hidden text-surface-500 sm:inline">·</span>
          <span className="hidden text-sm font-medium text-surface-600 sm:inline">
            Leads Dashboard
          </span>
        </div>
        <p className="hidden text-xs text-surface-500 md:block">
          HubSpot [BDev] leads &amp; form submissions
        </p>
      </div>
    </header>
  );
}
