import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type ModuleCardProps = {
  title: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export function ModuleCard({ title, children, className }: ModuleCardProps) {
  return (
    <Card className={cn("bg-card", className)}>
      <CardHeader>
        <CardTitle className="type-card-title">{title}</CardTitle>
      </CardHeader>
      {children ? (
        <CardContent className="type-copy-sm pt-0 text-muted-foreground">
          {children}
        </CardContent>
      ) : null}
    </Card>
  )
}
