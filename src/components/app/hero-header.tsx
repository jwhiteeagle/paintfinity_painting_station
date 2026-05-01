import * as React from "react"

import { cn } from "@/lib/utils"

export type HeroHeaderProps = {
  title: React.ReactNode
  tagline?: React.ReactNode
  children?: React.ReactNode
  actions?: React.ReactNode
  leftRail?: React.ReactNode
  rightRail?: React.ReactNode
  className?: string
  titleClassName?: string
}

export function HeroHeader({
  title,
  tagline,
  children,
  actions,
  leftRail,
  rightRail,
  className,
  titleClassName,
}: HeroHeaderProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full border-b border-border/70 bg-muted/25 px-4 pt-4 pb-10 text-center shadow-xs sm:px-6 sm:pt-6 sm:pb-12 lg:pt-8 lg:pb-14",
        className
      )}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_3fr_1fr] lg:items-stretch">
        {leftRail ? (
          <aside className="order-2 border border-border/60 bg-background/70 p-4 text-left lg:order-1">
            {leftRail}
          </aside>
        ) : null}

        <div className="order-1 flex flex-col items-center lg:order-2">
          <h1
            className={cn(
              "type-title text-6xl leading-[0.85] sm:text-7xl lg:text-8xl",
              titleClassName
            )}
          >
            {title}
          </h1>

          {tagline ? (
            <div className="mt-5 flex w-full max-w-3xl items-center gap-4">
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
              <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {tagline}
              </p>
              <span className="h-px flex-1 bg-border" aria-hidden="true" />
            </div>
          ) : null}

          {children ? (
            <div className="mt-8 w-full max-w-4xl rounded-none border border-border/60 bg-background/80 px-5 py-5 sm:px-8 sm:py-6">
              <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {children}
              </div>
            </div>
          ) : null}

          {actions ? (
            <div className="mt-8 flex flex-wrap justify-center gap-2">{actions}</div>
          ) : null}
        </div>

        {rightRail ? (
          <aside className="order-3 border border-border/60 bg-background/70 p-4 text-left">
            {rightRail}
          </aside>
        ) : null}
      </div>
    </section>
  )
}
