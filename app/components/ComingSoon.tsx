export function ComingSoon() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-brand-500/15 via-slate-900/80 to-indigo-500/15 p-8 shadow-soft">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-200">
              Mobile ready
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              New Orange POS AI mobile app — coming soon to iOS and Android
            </h3>
            <p className="mt-3 max-w-2xl text-slate-200">
              Manage sales, inventory, and payouts on the go with live alerts and quick
              actions built for managers.
            </p>
          </div>
          <div className="flex gap-3 sm:flex-col">
            <span className="inline-flex items-center justify-center rounded-full border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-50">
              iOS (beta)
            </span>
            <span className="inline-flex items-center justify-center rounded-full border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-50">
              Android (beta)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

