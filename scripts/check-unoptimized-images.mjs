/**
 * Fails if public/ still has jpg/jpeg/png files that should have been WebP'd.
 * SVG is allowed. Tiny PNGs under 8KB (icons) are allowed.
 */
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const HEAVY = /\.(jpe?g|png)$/i;
const ALLOW_TINY_PNG_BYTES = 8 * 1024;
const SKIP_DIRS = new Set(["node_modules", ".git", "dist"]);

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.includes(".tmp.")) continue;
    else if (HEAVY.test(entry.name)) files.push(full);
  }
  return files;
}

const offenders = walk(PUBLIC_DIR).filter((file) => {
  const size = statSync(file).size;
  if (/\.png$/i.test(file) && size <= ALLOW_TINY_PNG_BYTES) return false;
  return true;
});

if (offenders.length === 0) {
  console.log("OK: no unoptimized jpg/jpeg/png under public/");
  process.exit(0);
}

console.error("Unoptimized raster images found (run npm run optimize:images):\n");
for (const file of offenders) {
  const rel = path.relative(ROOT, file);
  const kb = (statSync(file).size / 1024).toFixed(1);
  console.error(`  - ${rel} (${kb} KB)`);
}
process.exit(1);
