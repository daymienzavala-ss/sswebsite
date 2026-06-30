import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC =
  "/Users/daymienzavala/Desktop/Stang Scales, LLC/stang-scales-marketing-website (2)/public/ss-logo.jpg";
const OUT = resolve(__dirname, "../public/ss-logo.png");

// Load, derive alpha from darkness (black -> opaque, white -> transparent),
// force RGB to pure black so the mark tints cleanly via CSS.
const base = sharp(SRC).removeAlpha();
const { data, info } = await base
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.alloc(width * height * 4);

for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  // Perceptual luminance
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  let alpha = 255 - lum; // dark ink -> opaque
  // Clean up faint JPEG noise in the near-white field
  if (alpha < 10) alpha = 0;
  out[j] = 0;
  out[j + 1] = 0;
  out[j + 2] = 0;
  out[j + 3] = Math.round(alpha);
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .trim({ threshold: 8 }) // crop the transparent margin to the mark
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const meta = await sharp(OUT).metadata();
console.log(`Wrote ${OUT} (${meta.width}x${meta.height})`);
