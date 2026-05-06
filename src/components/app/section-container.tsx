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
  hero: "pt-0 pb-6",
  moduleGrid: "py-6 scroll-mt-20",
}

const contentClasses: Record<
  NonNullable<SectionContainerProps["variant"]>,
  string
> = {
  hero: "space-y-6",
  moduleGrid:
    "grid gap-4 rounded-none border border-border/60 bg-muted/25 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-4",
}

export function SectionContainer({
  children,
  variant = "hero",
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6", sectionClasses[variant])}
    >
      <div className={cn(contentClasses[variant])}>{children}</div>
    </section>
  )
}
