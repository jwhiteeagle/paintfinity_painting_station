export function SiteFooter() {
  return (
    <div className="border-t border-border/70 pt-5 text-sm text-muted-foreground">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl space-y-2">
          <p>
            Paintfinity models are designed by Jake / Chief Live Gaming and will
            be hosted on MakerWorld under their respective licenses.
          </p>
          <p>
            Built for Zack Freedman's open source Gridfinity standard, with
            smooth-bottom variants available for non-Gridfinity setups.
          </p>
        </div>
        <a
          className="type-label text-muted-foreground transition-colors hover:text-foreground/90"
          href="https://chieflivegaming.com/"
          target="_blank"
          rel="noreferrer"
        >
          Chief Live Gaming
        </a>
      </div>
    </div>
  )
}
