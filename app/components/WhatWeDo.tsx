export function WhatWeDo() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">What we do</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
          We power sales and payments
        </h2>
        <p className="mt-3 text-slate-300">
          Orange POS AI provides modern POS systems and payment terminals designed for
          retail and hospitality businesses. Sell faster, accept secure payments, and manage
          daily operations with ease.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            "Fast checkout with offline-ready resilience",
            "Inventory and staff controls that stay in sync",
            "Hardware + software support from one partner"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

