import * as React from "react"

import { SectionLabel } from "@/components/app/section-label"

export type HeroHeaderProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  tagline?: React.ReactNode
  children?: React.ReactNode
  leftRail?: React.ReactNode
  rightRail?: React.ReactNode
}

export type HeroRailProps = {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  href?: string
  children: React.ReactNode
}

export type HeroRailPanelProps = {
  children: React.ReactNode
}

export function HeroRail({ subtitle, title, href, children }: HeroRailProps) {
  return (
    <div className="layout-stack gap-3 sm:gap-4">
      {title != null && (
        <SectionLabel variant="title" href={href}>{title}</SectionLabel>
      )}
      {subtitle != null && (
        <SectionLabel variant="subtitle" href={href}>{subtitle}</SectionLabel>
      )}
      <div className="layout-stack justify-start gap-3 sm:gap-4">
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
          <div className="layout-stack items-center justify-start gap-3 sm:gap-3">
            <h1
              className="type-display text-5xl leading-[0.85] sm:text-7xl lg:text-8xl"
            >
              {title}
            </h1>

            {tagline ? (
              <div className="layout-center w-full max-w-3xl gap-2 sm:gap-2">
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <p className="type-meta text-muted-foreground">
                  {tagline}
                </p>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
            ) : null}

            {children ? (
              <div className="surface-gradient mt-4 w-full max-w-4xl px-4 py-4 sm:mt-4 sm:px-8 sm:py-6">
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
