import * as React from "react"

import { cn } from "@/lib/utils"

export type SectionContainerProps = {
  children: React.ReactNode
  as?: "section" | "div"
  width?: "narrow" | "default" | "wide"
  surface?: "none" | "subtle" | "card"
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
  subtle: "surface-subtle",
  card: "surface-card",
}

export function SectionContainer({
  children,
  as = "section",
  width = "default",
  surface = "none",
  id,
  className,
  contentClassName,
}: SectionContainerProps) {
  const Component = as

  return (
    <Component id={id} className={cn("layout-section", widthClasses[width], className)}>
      <div
        className={cn(
          "stack-sm",
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
