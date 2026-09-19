import { useState } from "react";
import type { ImageAsset } from "@/data/types";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { Lightbox } from "./Lightbox";

export function ImageGallery({ images, title }: { images: ImageAsset[]; title?: string }) {
  const [active, setActive] = useState<number | null>(null);

  if (images.length === 0) {
    return <p className="text-sm text-muted">Gallery images will appear when files are added to the pamphlets folder.</p>;
  }

  return (
    <div>
      {title ? <h3 className="mb-4 text-2xl">{title}</h3> : null}
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <li key={`${image.src}-${index}`}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group w-full text-left"
            >
              <PlaceholderImage
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] rounded-lg border border-border"
                imgClassName="object-contain"
              />
              {image.caption ? (
                <p className="mt-2 text-sm text-muted group-hover:text-deep-forest">{image.caption}</p>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
      <Lightbox images={images} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </div>
  );
}
