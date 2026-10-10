import { useState } from "react";
import { PLACEHOLDER_IMAGE } from "@/data/constants";
import { toOptimizedSrc } from "@/lib/image";
import { cn } from "@/lib/utils";

type PlaceholderImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  /** Hint for LCP heroes; omit for below-the-fold images. */
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
  width?: number;
  height?: number;
};

/**
 * Default image component for this site.
 * Resolves jpg/png → sibling .webp via `toOptimizedSrc` and uses async decode.
 * Prefer this (or the `OptimizedImage` alias) for every content photo.
 */
export function PlaceholderImage({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
  sizes = "(max-width: 768px) 100vw, 1200px",
  width,
  height,
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const requested = !src || failed ? PLACEHOLDER_IMAGE : src;
  const optimized = toOptimizedSrc(requested) ?? requested;
  const usePicture =
    optimized !== requested &&
    /\.(jpe?g|png)$/i.test(requested) &&
    /\.webp$/i.test(optimized);

  const imgProps = {
    alt,
    loading,
    decoding: "async" as const,
    fetchPriority,
    sizes,
    width,
    height,
    onError: () => setFailed(true),
    className: cn("size-full object-cover", imgClassName),
  };

  return (
    <div className={cn("overflow-hidden bg-cream", className)}>
      {usePicture ? (
        <picture>
          <source srcSet={optimized} type="image/webp" />
          <img src={requested} {...imgProps} />
        </picture>
      ) : (
        <img src={optimized} {...imgProps} />
      )}
    </div>
  );
}

/** Alias used by the optimize-images skill / docs. */
export const OptimizedImage = PlaceholderImage;
