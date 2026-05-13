import { ThemeToggle } from "@/components/app/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import clgBannerUrl from "@/assets/brand/CLG Banner 250x75.png"
import paintfinityBannerUrl from "@/assets/brand/paintfinity-watermark-clean-250x75.png"

const navLinkClassName = buttonVariants({
  variant: "selector",
  className:
    "h-auto min-h-9 max-w-28 whitespace-normal px-3 py-1 text-center text-[0.56rem] leading-[1.05] tracking-[0.08em] lg:h-8 lg:max-w-none lg:whitespace-nowrap lg:px-4 lg:py-0 lg:text-[0.68rem] lg:leading-none lg:tracking-[0.14em]",
})

export function SiteHeader() {
  return (
    <div className="layout-cluster border-b border-border/70 pb-3 lg:flex-row lg:justify-between">
      <div className="layout-center flex-nowrap gap-2">
        <a
          href="https://chieflivegaming.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Chief Live Gaming"
          className="interactive block transition-opacity hover:opacity-85"
        >
          <img
            src={clgBannerUrl}
            alt=""
            className="h-12 w-auto max-w-[calc(50vw-1rem)]"
            width="250"
            height="75"
          />
        </a>
        <a
          href="#modules"
          aria-label="Jump to Paintfinity modules"
          className="interactive block transition-opacity hover:opacity-85"
        >
          <img
            src={paintfinityBannerUrl}
            alt=""
            className="h-12 w-auto max-w-[calc(50vw-1rem)]"
            width="250"
            height="75"
          />
        </a>
      </div>

      <div className="layout-cluster lg:flex-row lg:gap-3">
        <div className="order-1 lg:order-2">
          <ThemeToggle />
        </div>
        <nav
          className="layout-center order-2 flex-wrap gap-1.5 lg:order-1 lg:gap-2"
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
      </div>
    </div>
  )
}
