import { ThemeToggle } from "@/components/app/theme-toggle"
import paintfinityLockupUrl from "@/assets/brand/paintfinity-watermark-clean.png"

export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <a href="#" className="block max-w-max" aria-label="Paintfinity home">
        <img
          src={paintfinityLockupUrl}
          alt=""
          className="h-auto w-44 sm:w-52"
          width="2400"
          height="700"
        />
      </a>

      <div className="flex flex-wrap items-center gap-3">
        <nav
          className="type-label flex items-center gap-3 text-muted-foreground"
          aria-label="Primary navigation"
        >
          <a className="transition-colors hover:text-foreground/90" href="#modules">
            Modules
          </a>
          <a
            className="transition-colors hover:text-foreground/90"
            href="https://makerworld.com/"
            target="_blank"
            rel="noreferrer"
          >
            MakerWorld
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  )
}
