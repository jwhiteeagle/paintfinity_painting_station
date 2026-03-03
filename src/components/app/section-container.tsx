import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionContainerProps = {
  children: React.ReactNode
  as?: "section" | "div"
  width?: "narrow" | "default" | "wide"
  surface?: "none" | "subtle" | "card"
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
  subtle: "rounded-lg border border-border/60 bg-muted/30",
  card: "rounded-xl border border-border bg-card shadow-sm",
}

export function SectionContainer({
  children,
  as = "section",
  width = "default",
  surface = "none",
  className,
  contentClassName,
}: SectionContainerProps) {
  const Component = as

  return (
    <Component className={cn("mx-auto w-full px-4 py-6 sm:px-6", widthClasses[width], className)}>
      <div
        className={cn(
          "space-y-4",
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