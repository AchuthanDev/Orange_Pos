import Image from "next/image";

const hardware = [
  { name: "T2 Mini", desc: "Compact, countertop-ready POS with fast tap-to-pay.", img: "/devices/t2-mini.svg" },
  { name: "T2s Lite", desc: "Lightweight with built-in printer for quick lanes.", img: "/devices/t2s-lite.svg" },
  { name: "T3 Pro", desc: "Flagship dual-screen experience for premium venues.", img: "/devices/t3-pro.svg" }
];

export function HardwareShowcase() {
  return (
    <section className="section" id="hardware">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">
            Hardware lineup
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Devices that keep up with your floor
          </h2>
          <p className="max-w-3xl text-slate-300">
            Orange POS AI ships with tested hardware, software updates, and local support.
            Choose the footprint and capability your business needs.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {hardware.map((item) => (
            <div key={item.name} className="glass flex h-full flex-col rounded-3xl p-5">
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-contain p-6"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              <span className="mt-4 inline-flex w-fit rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
                Included support
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

