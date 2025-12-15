const stats = [
  { label: "Transactions processed", value: "2M+" },
  { label: "Avg. checkout time", value: "2.1s" },
  { label: "Support satisfaction", value: "98%" },
  { label: "Retail & hospitality", value: "14 countries" }
];

export function StatsStrip() {
  return (
    <section className="section pt-0" aria-label="Performance stats">
      <div className="mx-auto max-w-6xl rounded-3xl border border-slate-800 bg-slate-900/60 px-4 py-6 shadow-soft sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </div>
              <div className="text-xs text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

