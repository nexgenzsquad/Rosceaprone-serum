"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

const WHEN = ["Morning", "Evening"];
const WHERE = ["Face", "Neck", "Cheeks", "Under-Eye Area"];

const STEPS = [
  "Apply 2–3 drops of serum to clean fingertips",
  "Gently press and smooth over your face and neck",
  "Layer moisturizer and SPF on top, morning and evening",
];

function Pills({ label, items }) {
  const [selected, setSelected] = useState([]);

  const toggle = (item) =>
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );

  return (
    <div className="text-center">
      <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
        {label}
      </h3>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        {items.map((item) => {
          const active = selected.includes(item);
          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(item)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-primary/30 bg-white text-ink hover:border-primary"
              }`}
            >
              {active && <Check className="h-4 w-4" />}
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function HowToUse() {
  return (
    <section id="how-to-use" className="scroll-mt-16 bg-white py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            DAILY BARRIER CARE ROUTINE
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="flex flex-col gap-10">
              <Pills label="WHEN" items={WHEN} />
              <Pills label="WHERE" items={WHERE} />

              <div className="text-center">
                <h3 className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                  HOW
                </h3>
                <ol className="mx-auto mt-6 max-w-xl space-y-4 text-left">
                  {STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-base leading-relaxed text-ink/80">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-xs overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-sm sm:max-w-sm">
                <Image
                  src="/images/howtouse1.jpg"
                  alt="Rosacea-Prone Redness-Calming Serum — daily barrier care routine"
                  width={1600}
                  height={1600}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
