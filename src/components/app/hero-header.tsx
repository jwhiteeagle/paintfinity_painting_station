import * as React from "react"

export type HeroHeaderProps = {
  title: React.ReactNode
  tagline?: React.ReactNode
  children?: React.ReactNode
  leftRail?: React.ReactNode
  rightRail?: React.ReactNode
}

export type HeroRailProps = {
  title: React.ReactNode
  children: React.ReactNode
}

export type HeroRailPanelProps = {
  children: React.ReactNode
}

export function HeroRail({ title, children }: HeroRailProps) {
  return (
    <div className="layout-stack h-full gap-3 sm:gap-4">
      <div className="surface-gradient-emphasis layout-center min-h-11 border px-3 py-2 sm:min-h-15 sm:px-4 sm:py-4">
        <h2 className="type-card-title relative sm:text-5xl">
          {title}
        </h2>
      </div>
      <div className="layout-stack flex-1 justify-center gap-3 sm:gap-4">
        {children}
      </div>
    </div>
  )
}

export function HeroRailPanel({ children }: HeroRailPanelProps) {
  return (
    <div className="surface-gradient w-full p-3 text-center sm:p-4">
      {children}
    </div>
  )
}

export function HeroHeader({
  title,
  tagline,
  children,
  leftRail,
  rightRail,
}: HeroHeaderProps) {
  return (
    <section className="mx-auto w-full bg-muted/5 px-2 pb-3 text-center shadow-xs sm:px-6 sm:pb-3 lg:pb-3">
      <div className="grid gap-3 sm:gap-4 md:grid-cols-2 md:items-stretch xl:grid-cols-4">
        {leftRail ? (
          <aside className="surface-card order-2 p-3 text-left shadow-none sm:p-4 xl:order-1 xl:col-span-1">
            {leftRail}
          </aside>
        ) : null}

        <div className="surface-card order-1 p-3 shadow-none sm:p-4 md:col-span-2 xl:order-2 xl:col-span-2">
          <div className="layout-stack items-center gap-3 sm:gap-5">
            <h1
              className="type-display text-5xl leading-[0.85] sm:text-7xl lg:text-8xl"
            >
              {title}
            </h1>

            {tagline ? (
              <div className="layout-center mt-3 w-full max-w-3xl gap-2 sm:mt-5 sm:gap-4">
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <p className="type-meta text-muted-foreground">
                  {tagline}
                </p>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
            ) : null}

            {children ? (
              <div className="surface-gradient mt-4 w-full max-w-4xl px-4 py-4 sm:mt-8 sm:px-8 sm:py-6">
                <div className="type-body layout-stack mx-auto max-w-3xl gap-3 sm:gap-4 sm:text-lg">
                  {children}
                </div>
              </div>
            ) : null}

          </div>
        </div>

        {rightRail ? (
          <aside className="surface-card order-3 p-3 text-left shadow-none sm:p-4 xl:col-span-1">
            {rightRail}
          </aside>
        ) : null}
      </div>
    </section>
  )
}
