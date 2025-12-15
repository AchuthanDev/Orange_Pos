import Link from "next/link";

export function Hero() {
  return (
    <section className="section" id="top">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-3 py-1 text-xs font-semibold text-slate-200">
            Built for retail & hospitality
            <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] text-navy">
              New
            </span>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Smart POS for modern businesses.
            <span className="text-brand-400"> Fast. Reliable. Intelligent.</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-200">
            Orange POS AI keeps your sales moving with lightning-fast checkout,
            stable payments, and real-time inventory so your team stays focused
            on customers.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Book a demo
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-100"
            >
              Explore features
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-200 sm:grid-cols-4">
            {[
              { label: "Years of POS experience", value: "10+" },
              { label: "Businesses using us", value: "150+" },
              { label: "Hardware & software", value: "Full stack" },
              { label: "Uptime", value: "99.95%" }
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
              >
                <div className="text-xl font-semibold text-white">{item.value}</div>
                <div className="text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="glass relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
              <span>Orange POS Dashboard</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-300">
                Live
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-slate-800/60 px-4 py-3">
                <div>
                  <div className="text-sm text-slate-300">Today&apos;s revenue</div>
                  <div className="text-2xl font-semibold text-white">$12,840</div>
                </div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-300">
                  +12.4%
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Orders", value: "486" },
                  { label: "Avg. ticket", value: "$26.43" },
                  { label: "Refunds", value: "0.4%" },
                  { label: "Top device", value: "T3 Pro" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-800/80 bg-slate-900/60 px-4 py-3"
                  >
                    <div className="text-xs text-slate-400">{item.label}</div>
                    <div className="text-lg font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-14 bottom-8 hidden h-36 w-36 rounded-full bg-brand-500/30 blur-3xl lg:block" />
            <div className="absolute -left-10 -top-10 hidden h-36 w-36 rounded-full bg-sky-500/20 blur-3xl lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

