import Image from "next/image";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold text-balance text-primary sm:text-4xl">
            Barrier Repair, Before &amp; After
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/barrierrepair.jpg"
              alt="Before: compromised skin barrier. After: healthy-looking skin barrier."
              width={1464}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl">
            <Image
              src="/images/Frame 292.png"
              alt="Rosacea-Prone Redness-Calming Serum on display"
              width={2928}
              height={1200}
              className="block h-auto w-full"
            />
            <Image
              src="/images/Frame 293.png"
              alt="Barrier repair results with the Rosacea-Prone Redness-Calming Serum"
              width={2928}
              height={1200}
              className="block h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
