import * as React from "react"

import { cn } from "@/lib/utils"
import { SectionSurface } from "@/components/app/section-surface"

export type SectionContainerProps = {
  children: React.ReactNode
  variant?: "hero" | "moduleGrid" | "content"
  id?: string
  heading?: React.ReactNode
}

const sectionClasses: Record<
  NonNullable<SectionContainerProps["variant"]>,
  string
> = {
  hero: "pt-0 pb-4 sm:pb-6",
  content: "py-3 sm:py-4",
  moduleGrid: "py-4 sm:py-6",
}

const contentClasses: Record<
  NonNullable<SectionContainerProps["variant"]>,
  string
> = {
  hero: "layout-stack",
  content:
    "surface-card type-body mx-auto flex w-full min-w-0 max-w-4xl flex-col gap-4 p-4 sm:gap-5 sm:p-5 [&_img]:max-w-full",
  moduleGrid:
    "grid min-w-0 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4",
}

export function SectionContainer({
  children,
  variant = "hero",
  id,
  heading,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-0 sm:px-6", sectionClasses[variant])}
    >
      {variant === "moduleGrid" ? (
        <SectionSurface heading={heading}>
          <div className={contentClasses[variant]}>{children}</div>
        </SectionSurface>
      ) : (
        <div className={contentClasses[variant]}>
          {heading}
          {children}
        </div>
      )}
    </section>
  )
}
