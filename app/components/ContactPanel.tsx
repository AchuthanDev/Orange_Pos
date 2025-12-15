"use client";

import { FormEvent, useState } from "react";

export function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  return (
    <section className="section" id="contact">
      <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass rounded-3xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-300">
            Get started
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Book a demo or request a free trial
          </h3>
          <p className="mt-3 text-slate-300">
            Tell us about your business, and we&apos;ll tailor the right setup with hardware
            and software support.
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Name*</span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                <span>Email*</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                  placeholder="you@company.com"
                />
              </label>
            </div>
            <label className="space-y-2 text-sm text-slate-200">
              <span>Message*</span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-3 text-sm text-white outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30"
                placeholder="We need 3 terminals for our café, going live in March..."
              />
            </label>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && (
              <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                Message ready! Connect to your email/API to deliver submissions.
              </div>
            )}
            {status === "error" && (
              <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                Please fill in all fields before sending.
              </div>
            )}
          </form>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold text-white">Contact info</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-200">
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <span>Email</span>
              <span className="font-semibold text-white">info@orangepos.ch</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <span>Phone</span>
              <span className="font-semibold text-white">+41 78 335 55 77</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3">
              <span>Region</span>
              <span className="font-semibold text-white">Switzerland</span>
            </div>
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 px-4 py-3 text-sm text-brand-50">
              Need something custom? We can bundle hardware, deployment, and training for
              multi-site rollouts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

