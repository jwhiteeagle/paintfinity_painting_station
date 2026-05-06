import { ThemeToggle } from "@/components/app/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import clgBannerUrl from "@/assets/brand/CLG Banner 250x75.png"
import paintfinityBannerUrl from "@/assets/brand/paintfinity-watermark-blue-250x75.png"

export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <a
          href="https://chieflivegaming.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Chief Live Gaming"
          className="block transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={clgBannerUrl}
            alt=""
            className="h-12 w-auto max-w-full"
            width="250"
            height="75"
          />
        </a>
        <a
          href="#modules"
          aria-label="Jump to Paintfinity modules"
          className="block transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={paintfinityBannerUrl}
            alt=""
            className="h-12 w-auto max-w-full"
            width="250"
            height="75"
          />
        </a>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <nav
          className="flex items-center gap-2"
          aria-label="Primary navigation"
        >
          <a
            className={buttonVariants({ variant: "selector" })}
            href="https://chieflivegaming.com/gallery/"
            target="_blank"
            rel="noreferrer"
          >
            Some Stuff I've Painted
          </a>
          <a className={buttonVariants({ variant: "selector" })} href="#modules">
            Module List
          </a>
          <a
            className={buttonVariants({ variant: "selector" })}
            href="https://makerworld.com/"
            target="_blank"
            rel="noreferrer"
          >
            MakerWorld Collection
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </div>
  )
}
