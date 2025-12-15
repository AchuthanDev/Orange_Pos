"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#hardware", label: "Hardware" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        <Link href="#" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Orange POS AI" width={40} height={40} />
          <div className="flex flex-col leading-tight">
            <span className="text-sm text-slate-300">Orange POS AI</span>
            <span className="text-lg font-semibold text-white">Smart POS</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link
            href="#cta"
            className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-navy shadow-soft transition hover:bg-brand-400"
          >
            Book a Demo
          </Link>
        </nav>
        <button
          className="rounded-md border border-slate-700 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <div className="h-0.5 w-5 bg-current" />
          <div className="mt-1 h-0.5 w-5 bg-current" />
          <div className="mt-1 h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="mx-4 mb-3 rounded-2xl border border-slate-800 bg-[#0c1326] px-4 py-3 shadow-soft lg:hidden">
          <div className="flex flex-col gap-3 text-sm text-slate-100">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-slate-800"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand-500 px-3 py-2 text-center font-semibold text-navy hover:bg-brand-400"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

