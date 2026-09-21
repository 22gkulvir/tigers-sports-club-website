// Rewrites the committed source images in place at the sizes the site actually
// displays. Re-running is safe: anything already at or below its target is left
// alone, and a re-encode is only kept when it comes out smaller.
//
// No WebP: measured against these files, mozjpeg output was within 0-4% of the
// equivalent WebP, which does not justify shipping a second copy of every image.
//
//   npm run optimize:images

import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

// maxWidth is generous enough for a 2x phone screen at the size each image is
// displayed; see the mobile audit for the measured display sizes.
const GROUPS = [
  { dir: 'src/assets/images/hero', maxWidth: 1280, quality: 78 },
  { dir: 'src/assets/images/sponsors', maxWidth: 600, quality: 74, recursive: true },
  { dir: 'public/images/founders', maxWidth: 320, quality: 78 },
  { dir: 'public/images/logo', maxWidth: 200, quality: 82 },
]

const IMAGE_RE = /\.(jpe?g|png)$/i

async function listImages(dir, recursive) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (recursive) files.push(...(await listImages(full, recursive)))
    } else if (IMAGE_RE.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

async function processFile(file, maxWidth, quality) {
  const before = (await fs.stat(file)).size
  const input = await fs.readFile(file)
  const meta = await sharp(input).metadata()

  const resize = meta.width > maxWidth ? { width: maxWidth, withoutEnlargement: true } : null
  const base = () => (resize ? sharp(input).resize(resize) : sharp(input))

  // Re-encode in place, keeping the original extension so nothing that
  // references these files has to change.
  const isPng = /\.png$/i.test(file)
  const encoded = isPng
    ? await base().png({ quality, compressionLevel: 9 }).toBuffer()
    : await base().jpeg({ quality, mozjpeg: true }).toBuffer()

  if (encoded.length < before) await fs.writeFile(file, encoded)

  return { before, after: Math.min(encoded.length, before) }
}

// A 1200x630 card for og:image. Cropped from the hero so a shared link shows
// the event rather than a letterboxed logo.
async function buildSocialPreview() {
  const src = path.join(root, 'src/assets/images/hero/hero-1.jpg')
  const out = path.join(root, 'public/images/social-preview.jpg')
  await sharp(src)
    .resize({ width: 1200, height: 630, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer()
    .then((buf) => fs.writeFile(out, buf))
  const { size } = await fs.stat(out)
  return { file: 'public/images/social-preview.jpg', size }
}

const kb = (n) => (n / 1024).toFixed(0) + ' KB'

let totalBefore = 0
let totalAfter = 0

for (const group of GROUPS) {
  const dir = path.join(root, group.dir)
  const files = await listImages(dir, group.recursive)
  if (!files.length) continue

  let gBefore = 0
  let gAfter = 0
  for (const file of files) {
    const r = await processFile(file, group.maxWidth, group.quality)
    gBefore += r.before
    gAfter += r.after
  }
  totalBefore += gBefore
  totalAfter += gAfter
  const pct = gBefore ? Math.round((1 - gAfter / gBefore) * 100) : 0
  console.log(`${group.dir.padEnd(30)} ${String(files.length).padStart(3)} files  ${kb(gBefore).padStart(9)} -> ${kb(gAfter).padStart(9)}  (-${pct}%)`)
}

const social = await buildSocialPreview()
console.log(`${social.file.padEnd(30)}   1 file   ${kb(social.size).padStart(9)}  (og:image)`)

console.log('')
console.log(`TOTAL  ${kb(totalBefore)} -> ${kb(totalAfter)}  (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`)
