import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export type ContentImageProps = {
  src: string
  alt: string
  caption?: ReactNode
  maxWidth?: number
  aspect?: "square" | "landscape"
}

export function ContentImage({ src, alt, caption = null, maxWidth = 320, aspect = "square" }: ContentImageProps) {
  return (
    <figure className="mx-auto w-full min-w-0" style={{ maxWidth }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={cn(
          "block w-full border border-primary/50 bg-muted/10 object-contain",
          aspect === "landscape" ? "aspect-4/3" : "aspect-square"
        )}
      />
      {caption != null && (
        <figcaption className="mt-2 text-center text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
