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
    <section className={cn("stack-md", centered && "text-center", className)}>
      <div
        className={cn(
          "layout-cluster",
          centered
            ? "flex-col justify-center"
            : "flex-col sm:flex-row sm:items-end sm:justify-between"
        )}
      >
        <div className={cn("stack-sm", centered && "max-w-3xl")}>
          <h1 className={cn("type-title type-title-lg", titleClassName)}>{title}</h1>
          {description ? (
            <div
              className={cn(
                "max-w-3xl text-base leading-relaxed text-muted-foreground",
                centered && "mx-auto text-center",
                descriptionClassName
              )}
            >
              {description}
            </div>
          ) : null}
        </div>

        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </section>
  )
}
