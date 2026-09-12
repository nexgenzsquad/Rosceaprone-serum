import { Sparkles, Flower2, Droplets, Heart, Ban } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  { label: "Visibly Calms Redness", icon: Heart },
  { label: "Feather-Light Hydration", icon: Sparkles },
  { label: "Gentle, Fragrance-Free", icon: Flower2 },
  { label: "Sensitive-Skin Safe", icon: Droplets },
];

const BADGES = [
  { label: "Fragrance-Free", icon: Flower2 },
  { label: "Paraben-Free", icon: ShieldMark },
  { label: "Sensitive Skin", icon: Heart },
  { label: "Alcohol-Free", icon: Ban },
  { label: "Soap-Free", icon: Sparkles },
];

function ShieldMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function BenefitsBand() {
  return (
    <section id="benefits" className="scroll-mt-16 bg-primary-dark md:scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="text-sm italic text-accent-light">Daily Relief</p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-balance text-white sm:text-4xl lg:text-5xl">
            REDNESS CALM &amp; BARRIER COMFORT
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Formulated for Sensitive, Reactivity-Prone Skin
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.label} delay={i * 100}>
                <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-white">
                    {feature.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>

      <div className="bg-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 py-8 md:px-8">
          {BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex items-center gap-2.5">
                <Icon className="h-6 w-6 text-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-ink">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
