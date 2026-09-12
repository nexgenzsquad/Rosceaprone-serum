import Image from "next/image";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

const ROWS = [
  {
    label: "Targeted Calming Actives (Cica + PDRN + Madecassoside)",
    ours: "Yes",
    theirs: "Basic Formula",
  },
  {
    label: "Fragrance-Free, Non-Comedogenic",
    ours: "Yes",
    theirs: "Heavy & Fragranced",
  },
  {
    label: "Formulated for Reactive, Redness-Prone Skin",
    ours: "Yes",
    theirs: "One-Size-Fits-All",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-choose-it"
      className="scroll-mt-16 bg-bg-muted py-16 md:scroll-mt-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            WHY CHOOSE MURASAKI BEAUTY?
          </h2>
          <p className="mt-3 text-base text-ink/70 sm:text-lg">
            Targeted Actives. Real Barrier Support.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white text-center shadow-sm">
              <div className="bg-primary px-6 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white">
                  Murasaki Beauty
                </p>
              </div>
              <div className="px-6 py-8">
                <Image
                  src="/images/Frame 245.png"
                  alt="Murasaki Beauty Rosacea-Prone Redness-Calming Serum bottle"
                  width={2000}
                  height={2000}
                  className="mx-auto h-auto w-full max-w-[180px] object-contain sm:max-w-[220px]"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white text-center shadow-sm">
              <div className="bg-ink/10 px-6 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/50">
                  Ordinary Serums
                </p>
              </div>
              <div className="px-6 py-8">
                <div className="relative mx-auto flex h-full w-full max-w-[180px] items-center justify-center sm:max-w-[220px]">
                  <Image
                    src="/images/66987-removebg-preview.png"
                    alt=""
                    width={512}
                    height={512}
                    aria-hidden
                    className="h-auto w-full object-contain opacity-50 grayscale"
                  />
                  <span className="absolute bottom-2 rounded-full bg-ink/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink/40">
                    Placeholder
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <div className="hidden border-b border-ink/10 bg-bg-muted px-5 py-4 text-sm font-bold uppercase tracking-wider text-ink sm:grid sm:grid-cols-[1fr_180px_180px]">
              <span className="text-sm">What you get</span>
              <span className="text-right text-primary">MURASAKI</span>
              <span className="text-right text-ink/50">Others</span>
            </div>
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="border-b border-ink/5 px-4 py-5 last:border-b-0 sm:grid sm:grid-cols-[1fr_180px_180px] sm:items-center sm:gap-2 sm:px-5"
              >
                <p className="text-sm leading-snug text-ink/85 sm:text-base">
                  {row.label}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3 sm:hidden">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
                    <Check className="h-3.5 w-3.5" />
                    Murasaki
                  </span>
                  <span className="inline-flex min-w-0 items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5">
                    <span className="text-xs font-medium leading-snug text-ink/60">
                      {row.theirs}
                    </span>
                    <X className="h-3.5 w-3.5 shrink-0 text-ink/40" />
                  </span>
                </div>
                <div className="hidden items-center justify-end sm:flex">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                </div>
                <div className="hidden items-center justify-end gap-1.5 sm:flex">
                  <span className="text-right text-xs text-ink/50 sm:text-sm">{row.theirs}</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/5">
                    <X className="h-4 w-4 text-ink/40" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
