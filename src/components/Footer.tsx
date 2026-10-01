import Link from "next/link";
import { companies } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-[0.18em]">
                MAXIMA
              </span>
              <span className="font-mono text-[10px] tracking-[0.35em] text-accent">
                GROUP
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Moving Cargo. Connecting Markets. Enabling Growth.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.25em] text-paper/40">
              TANZANIA
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-paper/40">
              COMPANIES
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/companies/${c.slug}`}
                    className="text-paper/70 transition-colors hover:text-accent"
                  >
                    {c.fullName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-paper/40">
              EXPLORE
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-paper/70 transition-colors hover:text-accent">
                  About the Group
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-paper/70 transition-colors hover:text-accent">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/companies/terminal" className="text-paper/70 transition-colors hover:text-accent">
                  Terminal Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-paper/70 transition-colors hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-paper/40">
              LOCATIONS
            </p>
            <ul className="mt-5 space-y-3 text-sm text-paper/70">
              <li>Dar es Salaam — Head Office</li>
              <li>Dar es Salaam — Kurasini Terminals</li>
              <li>Mtwara — Mtepwezi Terminal</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/40">
            © {new Date().getFullYear()} Maxima Group. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.25em] text-paper/40">
            CLEARING & FORWARDING · TRANSPORT · TERMINAL · SOLUTIONS
          </p>
        </div>
      </div>
    </footer>
  );
}
