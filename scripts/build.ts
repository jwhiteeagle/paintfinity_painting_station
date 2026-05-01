import tailwindPlugin from "bun-plugin-tailwind"
import { rm } from "node:fs/promises"

const staticFiles = [
  { from: "CNAME", to: "CNAME" },
  { from: "robots.txt", to: "robots.txt" },
  { from: "sitemap.xml", to: "sitemap.xml" },
  { from: "site.webmanifest", to: "site.webmanifest" },
  { from: "src/assets/brand/apple-icon.png", to: "apple-icon.png" },
  { from: "src/assets/brand/clg-192.png", to: "clg-192.png" },
  { from: "src/assets/brand/clg-mask-512.png", to: "clg-mask-512.png" },
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
  await Bun.write(`./dist/${file.to}`, Bun.file(`./${file.from}`))
}
