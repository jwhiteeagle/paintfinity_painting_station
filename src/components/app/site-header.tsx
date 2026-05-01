import { ThemeToggle } from "@/components/app/theme-toggle"
import clgIconUrl from "@/assets/brand/clg-192.png"
import paintfinityLockupUrl from "@/assets/brand/paintfinity-watermark-clean.png"

export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <a
        href="#"
        className="flex max-w-max items-center gap-3"
        aria-label="Paintfinity home"
      >
        <img
          src={clgIconUrl}
          alt=""
          className="size-10 border border-border bg-background sm:size-12"
          width="192"
          height="192"
        />
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
