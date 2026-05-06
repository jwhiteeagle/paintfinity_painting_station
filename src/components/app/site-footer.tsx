import clgBannerUrl from "@/assets/brand/CLG Banner 300x75.png"

export function SiteFooter() {
  return (
    <div className="type-body border-t border-border/70 pt-5 text-center">
      <div className="grid justify-items-center gap-5">
        <div className="max-w-3xl space-y-2">
          <p>
            Paintfinity models are designed and developed by Chief Live Gaming. All models are hosted for download on MakerWorld under their respective licenses.
          </p>
          <p>
            Paintfinity was developed to work with Gridfinity. Learn more about Gridfinity at{" "}
            <a
              href="https://gridfinity.xyz/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              gridfinity.xyz
            </a>
            .
          </p>
          <p>  
            Gridfinity was originally designed by Zack Freedman as an open source system. Chief Live Gaming claims no credit for Gridfinity itself. Please support Zack, the original Gridfinity creator and check out his other work!
          </p>
        </div>
        <a
          className="block transition-opacity hover:opacity-85"
          href="https://chieflivegaming.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Chief Live Gaming"
        >
          <img
            src={clgBannerUrl}
            alt=""
            className="h-auto w-48 max-w-full"
          />
        </a>
      </div>
    </div>
  )
}
