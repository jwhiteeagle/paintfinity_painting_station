import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type ContentCardVariant = "default" | "text" | "utility" | "gallery" | "cta"

const variantClasses: Record<ContentCardVariant, string> = {
  default: "",
  text: "bg-card",
  utility: "bg-muted/50",
  gallery: "bg-card ring-1 ring-border/60",
  cta: "bg-primary/10 ring-1 ring-primary/25",
}

export type ContentCardProps = {
  title?: React.ReactNode
  children: React.ReactNode
  variant?: ContentCardVariant
  className?: string
  contentClassName?: string
}

export function ContentCard({
  title,
  children,
  variant = "default",
  className,
  contentClassName,
}: ContentCardProps) {
  return (
    <Card className={cn(variantClasses[variant], className)}>
      {title ? (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      ) : null}
      <CardContent className={cn("type-body-sm", title ? "pt-0" : "pt-6", contentClassName)}>
        {children}
      </CardContent>
    </Card>
  )
}
