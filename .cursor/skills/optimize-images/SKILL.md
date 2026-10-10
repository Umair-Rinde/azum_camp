---
name: optimize-images
description: >-
  Optimize conference site images under public/ to WebP, register them in
  src/data/images.ts, and render via PlaceholderImage. Use when adding, replacing,
  or referencing photos, logos, pamphlets, speaker portraits, hero/venue assets,
  or any jpg/jpeg/png under public/; when images feel slow to load; or when the
  user mentions image optimization, WebP, or large image files.
---

# Optimize Images (azum_camp)

## Rules

1. Never commit large raw photos as the served asset. Raster images under `public/` must be WebP (max width 1920, quality ~78) before ship.
2. Register every site image in `src/data/images.ts` (`SITE_IMAGES` + galleries). Components import from there — do not hardcode `/conference-assets/...` paths in JSX except temporary placeholders.
3. Render photos with `PlaceholderImage` from `@/components/media/PlaceholderImage` (lazy by default; `loading="eager"` + `fetchPriority="high"` only for LCP/hero).
4. Skip SVGs — leave them as-is.
5. After adding or replacing any `.jpg` / `.jpeg` / `.png` under `public/`, run the optimizer before finishing.

## Workflow when adding images

```
Progress:
- [ ] Drop files under the right public/ folder
- [ ] Run npm run optimize:images
- [ ] Register WebP paths in src/data/images.ts
- [ ] Render with PlaceholderImage
- [ ] Confirm no leftover jpg/png refs in src/
```

### 1. Place files

| Kind | Folder |
|------|--------|
| Hero / covers | `public/conference-assets/hero/` |
| Campus / halls | `public/conference-assets/venue/campus/` |
| Labs | `public/conference-assets/venue/labs/` |
| Landmarks | `public/conference-assets/venue/landmarks/` |
| People / patrons | `public/conference-assets/people/` |
| Events | `public/conference-assets/events/` |
| Logos | `public/conference-assets/logos/` or `public/logo*.png` |
| Speakers | `public/Speaker/` |
| Past pamphlets | `public/conference-assets/past-conferences/` or `pamphlets/` |

### 2. Optimize

```bash
npm run optimize:images
```

Dry run first if unsure:

```bash
npm run optimize:images:dry
```

This converts rasters to `.webp`, deletes originals (unless `--keep-originals`), and rewrites matching paths under `src/`.

### 3. Register and render

```ts
// src/data/images.ts
NEW_SHOT: {
  id: "img-XX",
  src: "/conference-assets/.../name.webp",
  alt: "Descriptive alt text",
},
```

```tsx
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { SITE_IMAGES } from "@/data/images";

<PlaceholderImage
  src={SITE_IMAGES.NEW_SHOT.src}
  alt={SITE_IMAGES.NEW_SHOT.alt}
  className="aspect-video w-full"
/>
```

For a one-off path still ending in `.jpg`/`.png`, `PlaceholderImage` / `toOptimizedSrc()` prefer the sibling `.webp`.

### 4. Verify

```bash
npm run optimize:images:check

# Paths in src should prefer .webp for rasters
rg '\.(jpe?g|png)"' src -g '*.{ts,tsx}'
```

## Build integration

- `prebuild` runs `optimize:images --quiet` so assets added later still get compressed before deploy. Do not remove that hook.
- `npm run optimize:images:check` fails if jpg/jpeg/png remain under `public/` (tiny PNG icons ≤8KB allowed).

## Agent checklist

When the user adds images or you touch image files:

1. Read this skill.
2. Run `npm run optimize:images`.
3. Update `SITE_IMAGES` / galleries to `.webp` if the script did not rewrite them.
4. Use `PlaceholderImage` — not bare `<img>` for content photos.
5. Keep hero eager + `fetchPriority="high"`; everything else lazy.
