import Image from "next/image";
import { Leaf, Layers, Droplets } from "lucide-react";
import Reveal from "./Reveal";

const ACTIVES = [
  {
    name: "Centella Asiatica (Cica)",
    benefit: "Soothes and comforts reactive, easily irritated skin",
    icon: Leaf,
  },
  {
    name: "PDRN (Sodium DNA)",
    benefit: "Supports skin repair and barrier recovery",
    icon: Droplets,
  },
  {
    name: "Madecassoside",
    benefit: "Helps calm visible redness and supports skin recovery",
    icon: Layers,
  },
];

export default function PoweredBy() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-accent">
            SCIENCE-BACKED FORMULA
          </p>
          <h2 className="mt-4 text-2xl font-bold text-balance text-primary sm:text-4xl">
            Powered by{" "}
            <span className="text-accent">Centella Asiatica, PDRN &amp; Madecassoside</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
            Seven targeted actives — including Cica, PDRN and Madecassoside —
            formulated to calm redness, replenish the skin barrier, and support
            long-term comfort for reactive skin.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-12 md:gap-10 lg:gap-14">
          <div className="grid gap-5 md:col-span-7">
            {ACTIVES.map((active, i) => {
              const Icon = active.icon;
              return (
                <Reveal key={active.name} delay={i * 120}>
                  <div className="flex items-center gap-5 rounded-2xl border border-primary/10 bg-bg-muted/60 p-6 transition-colors hover:border-accent/40">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-ink">{active.name}</h3>
                      <p className="mt-0.5 text-sm text-ink/70">{active.benefit}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            
          </div>

          <div className="order-first mx-auto max-w-xs md:order-none md:col-span-5 md:mx-0 md:max-w-none">
            <Reveal direction="right">
              <Image
                  src="/images/Frame 241.png"
                  alt="Murasaki Beauty Rosacea-Prone Redness-Calming Serum bottle"
                  width={2000}
                  height={2000}
                  className="h-auto w-full"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
