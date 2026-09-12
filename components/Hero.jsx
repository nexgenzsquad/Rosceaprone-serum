import Image from "next/image";
import { CircleCheck } from "lucide-react";

const TARGETS = [
  "Visible Redness",
  "Reactive Skin",
  "Tight, Dry Skin",
  "Compromised Barrier",
];

const STRIP = ["FRAGRANCE-FREE", "NON-COMEDOGENIC", "DERMATOLOGIST-TESTED"];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-16 bg-primary md:scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pb-20 md:pt-16 lg:pt-24">
        <div className="min-w-0 text-white">
          <p className="text-xs font-semibold tracking-[0.32em] text-accent-light">
            MURASAKI BEAUTY
          </p>

          <h1 className="mt-5 text-3xl leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
            Rosacea-Prone
            <span className="mt-1 block font-bold">
              <span className="text-accent-light">Redness-Calming</span> Serum
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
            A feather-light daily serum that helps calm visible redness, soothe
            reactivity, and support the skin barrier on sensitive skin.
          </p>

          <p className="mt-3 text-sm font-medium tracking-wide text-accent-light">
            30 ml / 1 fl oz
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {TARGETS.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <CircleCheck className="h-5 w-5 shrink-0 text-accent-light" />
                <span className="text-sm font-medium text-white/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.amazon.com/gp/product/B0GKJ5MJHP"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-accent-light"
            >
              Shop Now
            </a>
            <a
              href="#how-to-use"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              How to Use
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-md md:max-w-none">
          <Image
            src="/images/heromain.png"
            alt="RosceaProne Redness-Calming Serum bottle against a soft pink background"
            width={2000}
            height={2000}
            priority
            className="h-auto w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>

      <div className="border-t border-white/15 bg-primary-deep">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-5 py-3.5 text-center md:px-8">
          {STRIP.map((word, i) => (
            <span key={word} className="flex items-center gap-4">
              <span className="text-xs font-bold tracking-[0.28em] text-white/85">
                {word}
              </span>
              {i < STRIP.length - 1 && (
                <span className="hidden h-1 w-1 rounded-full bg-accent sm:block" aria-hidden />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
