import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ContentCardVariant = "default" | "subtle" | "outlined" | "accent"

const variantClasses: Record<ContentCardVariant, string> = {
  default: "bg-card",
  subtle: "bg-muted/35",
  outlined: "bg-card ring-1 ring-border/70",
  accent: "bg-primary/10 ring-1 ring-primary/25",
}

export type ContentCardProps = {
  title?: React.ReactNode
  children: React.ReactNode
  variant?: ContentCardVariant
  className?: string
  contentClassName?: string
  titleClassName?: string
}

export function ContentCard({
  title,
  children,
  variant = "default",
  className,
  contentClassName,
  titleClassName,
}: ContentCardProps) {
  return (
    <Card className={cn(variantClasses[variant], className)}>
      {title ? (
        <CardHeader>
          <CardTitle className={cn("type-card-title", titleClassName)}>
            {title}
          </CardTitle>
        </CardHeader>
      ) : null}
      <CardContent
        className={cn(
          "type-copy-sm text-muted-foreground",
          title ? "pt-0" : "pt-6",
          contentClassName
        )}
      >
        {children}
      </CardContent>
    </Card>
  )
}
