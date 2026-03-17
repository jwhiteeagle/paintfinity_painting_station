import * as React from "react"

import { cn } from "@/lib/utils"

export type PageHeaderProps = {
  title: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
  align?: "left" | "center"
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function PageHeader({
  title,
  description,
  actions,
  align = "left",
  className,
  titleClassName,
  descriptionClassName,
}: PageHeaderProps) {
  const centered = align === "center"

  return (
    <section className={cn("stack-sm", centered && "text-center", className)}>
      <div
        className={cn(
          "flex gap-3",
          centered
            ? "flex-col items-center"
            : "flex-col sm:flex-row sm:items-end sm:justify-between"
        )}
      >
        <div className={cn("space-y-2", centered && "max-w-3xl")}> 
          <h1 className={cn("type-title-display", titleClassName)}>{title}</h1>
          {description ? (
            <div className={cn("type-copy-muted", descriptionClassName)}>
              {description}
            </div>
          ) : null}
        </div>

        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </section>
  )
}
