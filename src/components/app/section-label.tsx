import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export type SectionLabelProps = {
  children: ReactNode
  variant?: "title" | "subtitle"
  href?: string
  className?: string
}

const labelClasses =
  "surface-gradient-emphasis layout-center min-h-11 w-full border px-3 py-2 sm:min-h-15 sm:px-4 sm:py-4"

export function SectionLabel({
  children,
  variant = "title",
  href,
  className,
}: SectionLabelProps) {
  const Heading = variant === "title" ? "h2" : "h3"
  const label = (
    <span className={cn("type-card-title relative", variant === "title" ? "sm:text-5xl" : "sm:text-3xl")}>
      {children}
    </span>
  )

  return (
    <Heading className={cn("w-full min-w-0", className)}>
      {href ? (
        <a
          href={href}
          className={cn(
            labelClasses,
            "interactive cursor-pointer hover:border-primary hover:from-primary/90 hover:to-secondary/40 focus-visible:border-primary focus-visible:from-primary/90 focus-visible:to-secondary/40"
          )}
        >
          {label}
        </a>
      ) : (
        <span className={labelClasses}>{label}</span>
      )}
    </Heading>
  )
}
