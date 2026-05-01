import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ModuleCardProps = {
  title: React.ReactNode
  tagline: React.ReactNode
  heroImage?: string | null
  makerworldUrl?: string | null
  className?: string
}

export function ModuleCard({
  title,
  tagline,
  heroImage,
  makerworldUrl,
  className,
}: ModuleCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-none bg-card shadow-sm ring-1 ring-border/70 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:ring-primary/25 focus-within:-translate-y-1 focus-within:shadow-lg focus-within:ring-primary/25",
        className
      )}
    >
      <CardHeader className="flex min-h-20 items-center justify-center border-b border-primary/20 bg-linear-to-br from-primary/10 via-primary/10 to-secondary/25 px-4 py-4 shadow-xs transition-colors duration-200 group-hover:from-primary/15 group-hover:to-secondary/35">
        <CardTitle className="type-card-title">{title}</CardTitle>
      </CardHeader>

      <div className="aspect-5/4 border-b border-border/70 bg-muted/35">
        {heroImage ? (
          <img
            src={heroImage}
            alt=""
            className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="size-full bg-linear-to-br from-muted/45 via-muted/35 to-secondary/20 transition-colors duration-200 group-hover:to-primary/10"
            aria-hidden="true"
          />
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-0">
        <div className="flex min-h-20 items-center justify-center px-6 py-4">
          <p className="type-copy-sm text-muted-foreground">{tagline}</p>
        </div>

        <div className="mt-auto min-h-20 border-t border-primary/20 bg-linear-to-br from-primary/10 via-primary/10 to-secondary/25 px-6 py-4 text-center shadow-xs transition-colors duration-200 group-hover:from-primary/15 group-hover:to-secondary/35">
          <p className="type-label text-muted-foreground">
            Download this module on:
          </p>
          <div className="mt-3 flex justify-center">
            {makerworldUrl ? (
              <a href={makerworldUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none border-secondary/90"
                >
                  MakerWorld
                </Button>
              </a>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="rounded-none border-secondary/90"
                disabled
              >
                MakerWorld
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
