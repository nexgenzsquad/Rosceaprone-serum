import Image from "next/image";
import Reveal from "./Reveal";

const STATS = [
  { value: "89%", label: "Felt Visible Redness Looked Calmer" },
  { value: "93%", label: "Found Skin More Comfortable" },
  { value: "96%", label: "Reported Better Hydration" },
  { value: "91%", label: "Said Barrier Felt Stronger" },
];

export default function StatsBand() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-deep">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/15">
              <Image
                src="/images/visibleresults1.jpg"
                alt="Rosacea-Prone Redness-Calming Serum — visible results"
                width={1600}
                height={1600}
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
                VISIBLE RESULTS
              </h2>
              <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light ring-1 ring-white/20">
                In As Little As 2 Weeks*
              </span>
              <p className="mt-2 text-base text-white/75 sm:text-lg">
                Clinically tested to calm visible redness, strengthen the skin barrier, and deliver lasting hydration for reactive, rosacea-prone skin.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="border-l-2 border-accent pl-5">
                <p className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-white/75">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-xs text-white/55">
            *Consumer perception study. Individual results may vary.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
