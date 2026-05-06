import * as React from "react"

export type HeroHeaderProps = {
  title: React.ReactNode
  tagline?: React.ReactNode
  children?: React.ReactNode
  leftRail?: React.ReactNode
  rightRail?: React.ReactNode
}

export function HeroHeader({
  title,
  tagline,
  children,
  leftRail,
  rightRail,
}: HeroHeaderProps) {
  return (
    <section className="mx-auto w-full bg-muted/5 px-4 pt-4 pb-4 text-center shadow-xs sm:px-6 sm:pt-6 sm:pb-5 lg:pt-8 lg:pb-6">
      <div className="grid gap-4 md:grid-cols-2 md:items-stretch xl:grid-cols-4">
        {leftRail ? (
          <aside className="order-2 border border-border/60 bg-card p-4 text-left xl:order-1 xl:col-span-1">
            {leftRail}
          </aside>
        ) : null}

        <div className="order-1 border border-border/60 bg-card p-4 md:col-span-2 xl:order-2 xl:col-span-2">
          <div className="flex flex-col items-center">
            <h1
              className="type-title text-6xl leading-[0.85] sm:text-7xl lg:text-8xl"
            >
              {title}
            </h1>

            {tagline ? (
              <div className="mt-5 flex w-full max-w-3xl items-center gap-4">
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <p className="type-label text-muted-foreground">
                  {tagline}
                </p>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
            ) : null}

            {children ? (
              <div className="surface-gradient mt-8 w-full max-w-4xl px-5 py-5 sm:px-8 sm:py-6">
                <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {children}
                </div>
              </div>
            ) : null}

          </div>
        </div>

        {rightRail ? (
          <aside className="order-3 border border-border/60 bg-card p-4 text-left xl:col-span-1">
            {rightRail}
          </aside>
        ) : null}
      </div>
    </section>
  )
}
