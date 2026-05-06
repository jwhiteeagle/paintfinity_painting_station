import { ThemeToggle } from "@/components/app/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import paintfinityClgBannerUrl from "@/assets/brand/paintfinity-clg-banner-500x75.png"

export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <img
        src={paintfinityClgBannerUrl}
        alt=""
        className="h-auto w-64 max-w-full sm:w-80"
        width="500"
        height="75"
      />

      <div className="flex flex-wrap items-center gap-3">
        <nav
          className="flex items-center gap-2"
          aria-label="Primary navigation"
        >
          <a className={buttonVariants({ variant: "selector", size: "sm" })} href="#modules">
            Modules
          </a>
          <a
            className={buttonVariants({ variant: "selector", size: "sm" })}
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
