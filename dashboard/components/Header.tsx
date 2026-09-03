export function Header() {
  return (
    <header className="border-b border-ink-600/50 bg-ink-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-serif text-base font-semibold text-ink-950">
            G
          </div>
          <div>
            <h1 className="font-serif text-lg font-semibold leading-tight text-paper-50 sm:text-xl">
              Gratia · Leads Dashboard
            </h1>
            <p className="text-xs text-paper-100/50">
              Suivi HubSpot — leads&nbsp;[BDev] &amp; soumissions de formulaire
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
