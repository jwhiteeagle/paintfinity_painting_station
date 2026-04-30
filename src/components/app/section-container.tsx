import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionContainerProps = {
  children: React.ReactNode
  as?: "section" | "div"
  width?: "narrow" | "default" | "wide"
  surface?: "none" | "subtle" | "card"
  contentLayout?: "stack" | "grid-2" | "grid-3" | "grid-4"
  id?: string
  className?: string
  contentClassName?: string
}

const widthClasses: Record<NonNullable<SectionContainerProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
}

const surfaceClasses: Record<NonNullable<SectionContainerProps["surface"]>, string> = {
  none: "",
  subtle: "rounded-lg border border-border/60 bg-muted/25",
  card: "rounded-xl border border-border bg-card shadow-sm",
}

const contentLayoutClasses: Record<
  NonNullable<SectionContainerProps["contentLayout"]>,
  string
> = {
  stack: "stack-md",
  "grid-2": "grid gap-4 sm:grid-cols-2",
  "grid-3": "grid gap-4 md:grid-cols-3",
  "grid-4": "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
}

export function SectionContainer({
  children,
  as = "section",
  width = "default",
  surface = "none",
  contentLayout = "stack",
  id,
  className,
  contentClassName,
}: SectionContainerProps) {
  const Component = as

  return (
    <Component id={id} className={cn("layout-section", widthClasses[width], className)}>
      <div
        className={cn(
          contentLayoutClasses[contentLayout],
          surfaceClasses[surface],
          surface !== "none" && "p-5 sm:p-6",
          contentClassName
        )}
      >
        {children}
      </div>
    </Component>
  )
}
