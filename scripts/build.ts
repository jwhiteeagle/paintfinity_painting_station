import tailwindPlugin from "bun-plugin-tailwind"
import { existsSync } from "node:fs"
import { cp, rm } from "node:fs/promises"

const publicDir = "./public"

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

// Build separately to avoid duplicate CSS outputs from the Tailwind HTML plugin.
for (const entrypoint of [
  "./index.html",
  "./gridfinity/index.html",
  // "./amazonlinks/index.html", // Unpublished; restore alongside the link in App.tsx.
]) {
  const result = await Bun.build({
    entrypoints: [entrypoint],
    root: ".",
    publicPath: "/",
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
}

if (existsSync(publicDir)) {
  await cp(publicDir, "./dist", { recursive: true, force: true })
  await rm("./dist/.gitkeep", { force: true })
}

for (const file of staticFiles) {
  await Bun.write(`./dist/${file.to}`, Bun.file(`./${file.from}`))
}
