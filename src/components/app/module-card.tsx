import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"

export type ModuleCardProps = {
  title: React.ReactNode
  highlights: string[]
  heroImage?: string | null
  makerworldUrl?: string | null
}

export function ModuleCard({
  title,
  highlights,
  heroImage,
  makerworldUrl,
}: ModuleCardProps) {
  return (
    <article className="surface-card group flex h-full flex-col border-primary/85 shadow-lg transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1 focus-within:shadow-xl">
      <header className="surface-gradient-emphasis layout-center min-h-20 px-4 py-4 group-hover:border-primary/45 group-hover:from-primary/35 group-hover:to-secondary/40">
        <h3 className="type-card-title relative">{title}</h3>
      </header>

      <div className="aspect-4/3 border-b border-border/70 bg-muted/35">
        {heroImage ? (
          <img
            src={heroImage}
            alt=""
            className="size-full object-cover shadow-[0_5px_5px_rgb(0_0_0_/0.85),0_0_8px_rgb(0_0_0_/0.35)] transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="size-full bg-linear-to-br from-muted/45 via-muted/35 to-secondary/20 transition-colors duration-200 group-hover:to-primary/10"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="layout-center min-h-44 px-5 py-4">
          <ul className="w-full space-y-2 text-left text-xs leading-relaxed text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span className="mt-[0.55em] size-1.5 shrink-0 bg-primary/90" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="surface-gradient mt-auto min-h-20 border-x-0 border-b-0 border-t border-primary/20 px-6 py-4 text-center group-hover:from-primary/15 group-hover:to-secondary/35">
          <p className="type-meta text-muted-foreground">
            Download this module on:
          </p>
          <div className="layout-center mt-3">
            {makerworldUrl ? (
              <a
                href={makerworldUrl}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  className:
                    "border-primary text-foreground/90 shadow-md shadow-primary/25 ring-1 ring-primary/50 hover:shadow-lg hover:shadow-primary/30",
                })}
              >
                MakerWorld
              </a>
            ) : (
              <Button
                className="border-primary text-foreground/90 shadow-md shadow-primary/25"
                disabled
              >
                MakerWorld
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
