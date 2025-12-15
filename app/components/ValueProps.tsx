const values = [
  {
    title: "Built for speed & stability",
    desc: "Optimized checkout flows, offline-ready modes, and fast reconciliation so you never keep a line waiting.",
    tag: "Reliable Performance"
  },
  {
    title: "Smarter payments",
    desc: "Accept cards, contactless, wallets, and QR seamlessly. Automatic batching and settlement visibility.",
    tag: "Payments"
  },
  {
    title: "Operations without friction",
    desc: "Inventory, staff permissions, and reporting that work together. Less tapping, fewer errors, more selling.",
    tag: "Operations"
  }
];

export function ValueProps() {
  return (
    <section className="section" id="features">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-300">
              Why choose us
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Modern POS technology built for real businesses
            </h2>
          </div>
          <p className="max-w-xl text-slate-300">
            From retail to hospitality, Orange POS AI brings the speed, security, and
            insights you need to serve customers without downtime.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="glass h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-soft"
            >
              <div className="mb-3 inline-flex rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-brand-200">
                {value.tag}
              </div>
              <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

