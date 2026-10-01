"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/companies/clearing-forwarding", label: "Clearing & Forwarding" },
  { href: "/companies/transport", label: "Transport" },
  { href: "/companies/terminal", label: "Terminal" },
  { href: "/companies/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        open
          ? "bg-ink"
          : "bg-paper border-b border-line shadow-[0_1px_12px_rgba(11,14,19,0.05)]"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className={`flex items-baseline gap-2 ${open ? "text-paper" : "text-ink"}`}
        >
          <span className="text-lg font-bold tracking-[0.18em]">MAXIMA</span>
          <span className="font-mono text-[10px] tracking-[0.35em] text-accent">
            GROUP
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide transition-colors ${
                pathname === l.href
                  ? "text-accent"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
            open ? "text-paper" : "text-ink"
          }`}
        >
          <span
            className={`h-px w-6 bg-current transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex h-[calc(100dvh-4rem)] flex-col justify-center gap-2 bg-ink px-8 lg:hidden">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-4 py-3"
            >
              <span className="font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl font-medium text-paper group-hover:text-accent">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
