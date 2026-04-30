import * as React from "react"

import { cn } from "@/lib/utils"

export type HeroHeaderProps = {
  title: React.ReactNode
  tagline?: React.ReactNode
  children?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  titleClassName?: string
}

export function HeroHeader({
  title,
  tagline,
  children,
  actions,
  className,
  titleClassName,
}: HeroHeaderProps) {
  return (
    <section
      className={cn(
        "mx-auto flex w-full flex-col items-center border-b border-border/70 bg-muted/25 px-4 pt-4 pb-12 text-center shadow-xs sm:px-6 sm:pt-6 sm:pb-16 lg:pt-8 lg:pb-20",
        className
      )}
    >
      <h1
        className={cn(
          "type-title text-7xl leading-[0.85] sm:text-8xl lg:text-9xl",
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
        <div className="mt-8 w-full max-w-4xl rounded-lg border border-border/60 bg-background/80 px-5 py-5 sm:px-8 sm:py-6">
          <div className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {children}
          </div>
        </div>
      ) : null}

      {actions ? (
        <div className="mt-8 flex flex-wrap justify-center gap-2">{actions}</div>
      ) : null}
    </section>
  )
}
