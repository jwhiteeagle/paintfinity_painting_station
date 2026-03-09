import tailwindPlugin from "bun-plugin-tailwind"
import { rm } from "node:fs/promises"

const staticFiles = [
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "apple-icon.png",
  "clg-192.png",
  "clg-mask-512.png",
] as const

await rm("./dist", { recursive: true, force: true })

const result = await Bun.build({
  entrypoints: ["./index.html"],
  target: "browser",
  outdir: "./dist",
  minify: true,
  plugins: [tailwindPlugin],
})

if (!result.success) {
  for (const log of result.logs) {
    console.error(log)
  }
  process.exit(1)
}

for (const file of staticFiles) {
  await Bun.write(`./dist/${file}`, Bun.file(`./${file}`))
}
