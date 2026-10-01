import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Maxima Group supports businesses across agriculture, mining, manufacturing, FMCG, construction, pharmaceuticals and general commercial cargo.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="px-6 pb-20 pt-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionLabel>Industries We Serve</SectionLabel>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
              Capabilities that support businesses across multiple sectors.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <div className="flex h-full min-h-56 flex-col bg-paper p-8">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">
                    {ind.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {ind.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={industries.length * 60}>
              <div className="flex h-full min-h-56 flex-col justify-between bg-ink p-8 text-paper">
                <p className="text-lg font-semibold leading-snug">
                  Don&apos;t see your industry? Talk to us about your cargo.
                </p>
                <Link
                  href="/contact"
                  className="font-mono text-[11px] tracking-[0.25em] text-accent underline-offset-4 hover:underline"
                >
                  CONTACT US →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
