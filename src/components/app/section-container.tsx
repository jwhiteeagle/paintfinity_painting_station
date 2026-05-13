import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionContainerProps = {
  children: React.ReactNode
  variant?: "hero" | "moduleGrid"
  id?: string
}

const sectionClasses: Record<
  NonNullable<SectionContainerProps["variant"]>,
  string
> = {
  hero: "pt-0 pb-4 sm:pb-6",
  moduleGrid: "py-4 scroll-mt-20 sm:py-6",
}

const contentClasses: Record<
  NonNullable<SectionContainerProps["variant"]>,
  string
> = {
  hero: "layout-stack",
  moduleGrid:
    "grid gap-3 rounded-none border border-border/60 bg-muted/25 p-3 sm:grid-cols-2 sm:gap-4 sm:p-6 lg:grid-cols-4",
}

export function SectionContainer({
  children,
  variant = "hero",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-0 sm:px-6", sectionClasses[variant])}
    >
      <div className={cn(contentClasses[variant])}>{children}</div>
    </section>
  )
}
