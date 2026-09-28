import { useState } from "react";
import type { ImageAsset } from "@/data/types";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

/**
 * Bento mosaic spans — mirrors a PhytoTMed-style collage:
 * tall center feature, paired small tiles, tall bottom-left, then a denser bottom band.
 */
const MOSAIC_SPANS = [
  "col-span-2 row-span-1 md:col-span-2", // top-left landscape
  "col-span-2 row-span-2 md:col-span-2", // tall center feature
  "col-span-2 row-span-1 md:col-span-2", // top-right landscape
  "col-span-1 row-span-1 md:col-span-1", // mid-left small
  "col-span-1 row-span-1 md:col-span-1", // mid-left small
  "col-span-2 row-span-1 md:col-span-2", // mid-right
  "col-span-2 row-span-2 md:col-span-2", // tall bottom-left
  "col-span-1 row-span-1 md:col-span-1", // bottom band
  "col-span-1 row-span-1 md:col-span-1",
  "col-span-2 row-span-1 md:col-span-2",
  "col-span-2 row-span-1 md:col-span-2",
  "col-span-2 row-span-1 md:col-span-2",
] as const;

export function PastHighlightsCarousel({ images }: { images: ImageAsset[] }) {
  const [active, setActive] = useState<number | null>(null);
  const tiles = images.slice(0, MOSAIC_SPANS.length);

  if (tiles.length === 0) {
    return (
      <p className="text-center text-sm text-warm-white/70">
        Archive images will appear here when available.
      </p>
    );
  }

  return (
    <div>
      <ul
        className={cn(
          "grid grid-cols-2 gap-2.5 md:grid-cols-6 md:gap-3",
          "auto-rows-[clamp(7.5rem,14vw,9.5rem)] md:auto-rows-[clamp(8.5rem,11vw,11rem)]",
        )}
      >
        {tiles.map((image, index) => (
          <li key={`${image.src}-${index}`} className={MOSAIC_SPANS[index]}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative size-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              aria-label={image.caption ?? image.alt}
            >
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                className="size-full bg-deep-forest/40"
                imgClassName="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </button>
          </li>
        ))}
      </ul>

      <Lightbox
        images={tiles}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </div>
  );
}
