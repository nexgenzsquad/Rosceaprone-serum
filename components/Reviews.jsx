import Image from "next/image";
import { BadgeCheck, Star, StarHalf } from "lucide-react";
import Reveal from "./Reveal";

const SUMMARY = {
  score: "4.8",
  distribution: [82, 12, 4, 1, 1],
};

const SCREENSHOTS = [
  { src: "/Screenshot%202026-08-27%20214030.png", width: 377, height: 668 },
  { src: "/Screenshot%202026-08-27%20214059.png", width: 376, height: 667 },
  { src: "/Screenshot%202026-08-27%20214121.png", width: 502, height: 665 },
  { src: "/Screenshot%202026-08-27%20214142.png", width: 502, height: 667 },
  { src: "/Screenshot%202026-08-27%20214204.png", width: 501, height: 667 },
  { src: "/Screenshot%202026-08-27%20214234.png", width: 501, height: 665 },
  { src: "/Screenshot%202026-08-27%20214254.png", width: 665, height: 667 },
];

const REVIEWS = [
  {
    name: "Jasmine A",
    label: "Verified Purchase",
    rating: 5,
    title: "Gently melts into your skin",
    body: "I love this cream! It has the most luxurious texture that gently melts into the skin. And a little goes a long way! This jar will last me a long time. Once it's rubbed it, it doesn't leave any sticky or greasy residue, so it even sits beautifully under makeup. My skin feels instantly cooled and happier as soon as I put this cream on.",
  },
  {
    name: "FranFran",
    label: "Vine Customer Review of Free Product",
    rating: 5,
    title: "Nice Lather and Easy to Rinse",
    body: "This anti-redness cleanser comes with a plastic safety seal that is easy to remove before the first use. The clear gel turns into a milky, bubbly lather when worked into damp skin. It rinses off easily and leaves my skin feeling clean without that tight, stripped feeling afterward. It has a classic soap-like scent that I find pleasant. Getting two tubes in the pack also makes this a good value for the price.",
  },
  {
    name: "Amazon Prime Treasure Hunter",
    label: "Vine Customer Review of Free Product",
    rating: 4.5,
    title: "Soft and elegant barrier cream for stressed skin",
    body: "I ordered this double pack of cream because redness is one of my ongoing skin concerns. I had too much sun as a kid and voila, I sure pay for it now. Also, I have reactive skin that gets flushy when I eat spicy foods and whatever else triggers it. This formula sounded perfect. The jars are a generous size. The cream glides easily and is fragrance-free… perfect for my sensitive, redness-prone skin. So far it has helped calm my temporary bouts of redness after they happen but hasn't prevented them from occurring. It hasn't fixed my visible vessels on my chin, but I wouldn't expect any OTC formula to fix that. This is loaded with interesting ingredients. PDRN is a luxurious bonus that I don't typically see in calming face products. This cream feels oh so nourishing and isn't too heavy for my oily skin. Having a calmer, better-hydrated skin barrier is what I wanted and got. A supportive, comfortable cream.",
  },
  {
    name: "Elienay M Estrada",
    label: "Verified Purchase",
    rating: 5,
    title: "Funciona muy bien",
    body: "Llevo unos dias usando esta crema y mi cara parece otra, no estoy diagnosticada medicamente de que tenga rosacea o otra afectacion en mi cara, pero si llevo meses con el rostro enrojecido por partes y unos puntitos y desde que estoy usando esta crema, ademas de otros cambios en mi rutina de lavado de la cara, me ha mejorado demasiado.",
  },
];

function RenderStars({ rating }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className="flex items-center gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) return <Star key={i} className="h-4 w-4 fill-current" />;
        if (half && i === full)
          return (
            <span key={i} className="relative inline-flex">
              <Star className="h-4 w-4 stroke-current text-accent/30" />
              <StarHalf className="absolute inset-0 h-4 w-4 fill-current" />
            </span>
          );
        return <Star key={i} className="h-4 w-4 text-accent/30" />;
      })}
    </div>
  );
}

export default function Reviews() {
  const max = Math.max(...SUMMARY.distribution);

  return (
    <section id="reviews" className="scroll-mt-16 bg-bg-muted py-16 md:scroll-mt-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-accent">REVIEWS</p>
          <h2 className="mt-4 text-3xl font-bold text-balance text-primary sm:text-4xl lg:text-5xl">
            Loved by Redness-Prone Skin
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            Real feedback from customers with sensitive, redness-prone skin.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-6 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
            <div className="flex items-center gap-4">
              <p className="text-5xl font-bold text-primary sm:text-6xl">{SUMMARY.score}</p>
              <div className="flex flex-col gap-1">
                <div className="flex text-accent">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-ink/70">Average customer rating</p>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-1.5">
              {SUMMARY.distribution.map((pct, i) => {
                const stars = 5 - i;
                return (
                  <div key={stars} className="flex items-center gap-3 text-xs text-ink/60">
                    <span className="w-6 text-right font-medium">{stars}★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg-muted">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${(pct / max) * 100}%` }}
                      />
                    </div>
                    <span className="w-8">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm">
                <RenderStars rating={review.rating} />
                <h3 className="mt-3 text-lg font-semibold text-ink">{review.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{review.body}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink">{review.name}</p>
                    <p className="text-xs text-ink/60">{review.label}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-primary/60">
            Authentic Customer Screenshots
          </h3>
          <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 md:grid-cols-4">
            {SCREENSHOTS.map((shot) => (
              <div
                key={shot.src}
                className="w-[75vw] shrink-0 snap-center overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm sm:w-auto"
              >
                <Image
                  src={shot.src}
                  alt="Rosacea-Prone Redness-Calming Serum customer review screenshot"
                  width={shot.width}
                  height={shot.height}
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
