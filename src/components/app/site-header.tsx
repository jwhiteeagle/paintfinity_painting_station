import { ThemeToggle } from "@/components/app/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import clgBannerUrl from "@/assets/brand/CLG Banner 250x75.png"
import paintfinityBannerUrl from "@/assets/brand/paintfinity-watermark-blue-250x75.png"

const brandLinkClassName =
  "block transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
const iconLinkClassName =
  "inline-flex size-7 items-center justify-center rounded-none border border-border bg-primary/60 text-foreground shadow-sm transition-colors hover:bg-muted/70 hover:text-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:size-8"
const navLinkClassName = buttonVariants({
  variant: "selector",
  className:
    "h-auto min-h-9 max-w-24 whitespace-normal px-2 py-1 text-center text-[0.56rem] leading-[1.05] tracking-[0.08em] sm:h-8 sm:max-w-none sm:whitespace-nowrap sm:px-3 sm:py-0 sm:text-[0.68rem] sm:leading-none sm:tracking-[0.14em]",
})

export function SiteHeader() {
  return (
    <div className="flex flex-col gap-4 border-b border-border/70 pb-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <a
          href="https://chieflivegaming.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Chief Live Gaming"
          className={brandLinkClassName}
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
          className={brandLinkClassName}
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

      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <nav
          className="flex flex-wrap items-center gap-1.5 sm:gap-2"
          aria-label="Primary navigation"
        >
          <a
            className={navLinkClassName}
            href="https://chieflivegaming.com/gallery/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Some Stuff
              <br />
              I've Painted
            </span>
          </a>
          <a className={navLinkClassName} href="#modules">
            <span>
              Module
              <br />
              List
            </span>
          </a>
          <a
            className={navLinkClassName}
            href="https://makerworld.com/en/collections/17272977-paintfinity"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              MakerWorld
              <br />
              Collection
            </span>
          </a>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/jwhiteeagle/paintfinity_painting_station"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Paintfinity repository on GitHub"
            className={iconLinkClassName}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.07 10.07 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
