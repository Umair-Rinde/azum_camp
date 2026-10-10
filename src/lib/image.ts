/** Raster extensions we optimize to WebP at content time. */
const RASTER_EXT = /\.(jpe?g|png)$/i;

/**
 * Prefer a sibling `.webp` path when the source is a heavy raster.
 * Paths that are already WebP/SVG (or empty) are returned unchanged.
 *
 * Always pass image URLs through this helper (or render via PlaceholderImage)
 * so newly added jpg/png still resolve to optimized siblings after
 * `npm run optimize:images`.
 */
export function toOptimizedSrc(src?: string): string | undefined {
  if (!src) return src;
  if (!RASTER_EXT.test(src)) return src;
  return src.replace(RASTER_EXT, ".webp");
}

export function isOptimizedRaster(src?: string): boolean {
  return Boolean(src && /\.webp$/i.test(src));
}

/** True when a path still points at an unoptimized raster. */
export function needsImageOptimization(src?: string): boolean {
  return Boolean(src && RASTER_EXT.test(src));
}
