import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ModuleCardProps = {
  title: React.ReactNode
  highlights: string[]
  heroImage?: string | null
  makerworldUrl?: string | null
  className?: string
}

export function ModuleCard({
  title,
  highlights,
  heroImage,
  makerworldUrl,
  className,
}: ModuleCardProps) {
  return (
      <Card
        className={cn(
        "group flex h-full flex-col overflow-hidden rounded-none border-primary/85 bg-card shadow-lg ring-3 ring-primary/5 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl hover:ring-primary/65 focus-within:-translate-y-1 focus-within:shadow-xl focus-within:ring-primary/65",
        className
      )}
    >
      <CardHeader className="relative flex min-h-15 items-center justify-center overflow-hidden border-b border-primary/35 bg-linear-to-br from-primary/25 via-primary/12 to-secondary/30 px-4 py-4 shadow-xl transition-colors duration-200 before:absolute before:inset-0 before:bg-linear-to-r before:from-primary/20 before:via-transparent before:to-primary/10 before:opacity-80 before:content-[''] group-hover:border-primary/45 group-hover:from-primary/35 group-hover:to-secondary/40">
        <CardTitle className="type-card-title relative">{title}</CardTitle>
      </CardHeader>

      <div className="aspect-4/3 border-b border-border/70 bg-muted/35">
        {heroImage ? (
          <img
            src={heroImage}
            alt=""
            className="size-full object-cover shadow-[0_5px_5px_rgb(0_0_0_/_0.85),0_0_8px_rgb(0_0_0_/_0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="size-full bg-linear-to-br from-muted/45 via-muted/35 to-secondary/20 transition-colors duration-200 group-hover:to-primary/10"
            aria-hidden="true"
          />
        )}
      </div>

      <CardContent className="flex flex-1 flex-col p-0">
        <div className="flex min-h-44 items-center px-5 py-4">
          <ul className="w-full space-y-2 text-left text-xs leading-relaxed text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-[0.55em] size-1.5 shrink-0 bg-primary/90" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto min-h-20 border-t border-primary/20 bg-linear-to-br from-primary/10 via-primary/10 to-secondary/25 px-6 py-4 text-center shadow-xs transition-colors duration-200 group-hover:from-primary/15 group-hover:to-secondary/35">
          <p className="type-label text-muted-foreground">
            Download this module on:
          </p>
          <div className="mt-3 flex justify-center">
            {makerworldUrl ? (
              <a href={makerworldUrl} target="_blank" rel="noreferrer">
                <Button
                  variant="main"
                  size="sm"
                  className="rounded-none border-primary bg-primary text-foreground/90 ring-1 ring-primary/50 shadow-md shadow-primary/25 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                >
                  MakerWorld
                </Button>
              </a>
            ) : (
              <Button
                variant="main"
                size="sm"
                className="rounded-none border-primary bg-primary text-foreground/90 shadow-md shadow-primary/25"
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
