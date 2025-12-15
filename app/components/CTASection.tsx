import Link from "next/link";

export function CTASection() {
  return (
    <section className="section" id="cta">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-brand-500/30 bg-brand-500/15 px-6 py-10 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white sm:text-3xl">
              Ready to power your sales?
            </h3>
            <p className="mt-2 max-w-2xl text-slate-100">
              Fast onboarding, local support, and hardware that just works.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5"
            >
              Talk to us
            </Link>
            <a
              href="mailto:info@orangepos.ch"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Email sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

