/**
 * Compresses raster images under public/ to WebP and rewrites src paths in src/.
 *
 * Usage:
 *   node scripts/optimize-images.mjs
 *   node scripts/optimize-images.mjs --dry-run
 *   node scripts/optimize-images.mjs --keep-originals
 *   node scripts/optimize-images.mjs --quiet
 *   node scripts/optimize-images.mjs --recompress   # also re-encode existing .webp
 */
import { createRequire } from "node:module";
import {
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SRC_DIR = path.join(ROOT, "src");

/** New uploads to convert. Existing .webp are skipped unless --recompress. */
const CONVERT_EXT = /\.(jpe?g|png)$/i;
const WEBP_EXT = /\.webp$/i;
const SKIP_DIRS = new Set(["node_modules", ".git", "dist"]);
const MAX_WIDTH = 1920;
const WEBP_QUALITY = 78;
const MIN_BYTES_TO_TOUCH = 40 * 1024;

const dryRun = process.argv.includes("--dry-run");
const keepOriginals = process.argv.includes("--keep-originals");
const quiet = process.argv.includes("--quiet");
const recompress = process.argv.includes("--recompress");

function log(...args) {
  if (!quiet) console.log(...args);
}

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (entry.name.includes(".tmp.")) continue;
    if (CONVERT_EXT.test(entry.name)) files.push(full);
    else if (recompress && WEBP_EXT.test(entry.name)) files.push(full);
  }
  return files;
}

function publicUrl(absPath) {
  return "/" + path.relative(PUBLIC_DIR, absPath).split(path.sep).join("/");
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function collectSourceFiles(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collectSourceFiles(full, files);
    else if (/\.(ts|tsx|js|jsx|css|html|md)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

function rewriteReferences(replacements) {
  if (replacements.size === 0) return 0;
  const sourceFiles = collectSourceFiles(SRC_DIR);
  let touched = 0;

  for (const file of sourceFiles) {
    let content = readFileSync(file, "utf8");
    let next = content;
    for (const [from, to] of replacements) {
      if (from === to) continue;
      next = next.split(from).join(to);
    }
    if (next !== content) {
      if (!dryRun) writeFileSync(file, next, "utf8");
      touched += 1;
      log(`  rewritten refs in ${path.relative(ROOT, file)}`);
    }
  }
  return touched;
}

function writeAtomically(outPath, buffer) {
  const tmpPath = `${outPath}.${process.pid}.tmp.webp`;
  writeFileSync(tmpPath, buffer);
  try {
    try {
      unlinkSync(outPath);
    } catch {
      /* destination may not exist yet */
    }
    renameSync(tmpPath, outPath);
  } catch {
    try {
      writeFileSync(outPath, buffer);
    } finally {
      try {
        unlinkSync(tmpPath);
      } catch {
        /* ignore */
      }
    }
  }
}

async function optimizeOne(inputPath) {
  const inputStat = statSync(inputPath);
  const isAlreadyWebp = WEBP_EXT.test(inputPath);
  const outPath = isAlreadyWebp
    ? inputPath
    : inputPath.replace(CONVERT_EXT, ".webp");

  if (isAlreadyWebp && inputStat.size < MIN_BYTES_TO_TOUCH) {
    return { skipped: true, reason: "small-webp" };
  }

  let meta;
  try {
    meta = await sharp(inputPath, { failOn: "none" }).rotate().metadata();
  } catch (err) {
    if (isAlreadyWebp) return { skipped: true, reason: "locked-webp" };
    throw err;
  }

  const width = meta.width ?? 0;
  const needsResize = width > MAX_WIDTH;

  let transform = sharp(inputPath, { failOn: "none" }).rotate();
  if (needsResize) {
    transform = transform.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  const buffer = await transform
    .webp({ quality: WEBP_QUALITY, effort: 4 })
    .toBuffer();

  if (buffer.length >= inputStat.size * 0.95 && isAlreadyWebp) {
    return { skipped: true, reason: "already-optimal" };
  }
  if (buffer.length >= inputStat.size && !isAlreadyWebp && inputStat.size < 500 * 1024) {
    return { skipped: true, reason: "no-gain" };
  }

  if (!dryRun) {
    writeAtomically(outPath, buffer);
    if (!keepOriginals && outPath !== inputPath) {
      unlinkSync(inputPath);
    }
  }

  return {
    skipped: false,
    from: publicUrl(inputPath),
    to: publicUrl(outPath),
    before: inputStat.size,
    after: buffer.length,
    resized: needsResize,
  };
}

async function main() {
  log(`Optimizing images in ${path.relative(ROOT, PUBLIC_DIR)}/`);
  if (dryRun) log("(dry run — no files written)\n");

  const images = walk(PUBLIC_DIR);
  const replacements = new Map();
  let saved = 0;
  let converted = 0;
  let skipped = 0;
  let failed = 0;

  for (const image of images) {
    try {
      const result = await optimizeOne(image);
      if (result.skipped) {
        skipped += 1;
        continue;
      }
      converted += 1;
      saved += result.before - result.after;
      replacements.set(result.from, result.to);
      log(
        `  ${result.from} → ${result.to}  ${formatBytes(result.before)} → ${formatBytes(result.after)}${result.resized ? " (resized)" : ""}`,
      );
    } catch (err) {
      failed += 1;
      console.warn(`  FAILED ${publicUrl(image)}: ${err.message}`);
    }
  }

  log("\nUpdating source references…");
  const filesTouched = rewriteReferences(replacements);

  const summary = `converted=${converted} skipped=${skipped} failed=${failed} saved=${formatBytes(Math.max(0, saved))} srcFiles=${filesTouched}`;
  if (quiet) {
    if (converted > 0 || failed > 0) console.log(`[optimize:images] ${summary}`);
  } else {
    console.log("\nDone.");
    console.log(`  converted: ${converted}`);
    console.log(`  skipped:   ${skipped}`);
    console.log(`  failed:    ${failed}`);
    console.log(`  saved:     ${formatBytes(Math.max(0, saved))}`);
    console.log(`  src files: ${filesTouched}`);
  }

  // New jpg/png conversions must succeed; locked existing webp is non-fatal.
  if (failed > 0 && !quiet) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
