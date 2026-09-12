"use client";

import { useEffect, useRef } from "react";
import Reveal, { useInView } from "./Reveal";

export default function VideoSection() {
  const videoRef = useRef(null);
  const { ref, inView } = useInView(0.4);

  useEffect(() => {
    if (inView && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [inView]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-accent">
            IN ACTION
          </p>
          <h2 className="mt-4 text-2xl font-bold text-balance text-primary sm:text-4xl">
            See the Redness-Calming Serum in Action
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div
            ref={ref}
            className="overflow-hidden rounded-2xl border border-primary/10 bg-bg-muted shadow-xl"
          >
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/Rosacea%20Prone%20Anti-Redness%20Serum.mp4"
                title="Murasaki Beauty Rosacea-Prone Redness-Calming Serum video"
                preload="metadata"
                controls
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
