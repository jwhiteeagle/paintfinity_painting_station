import { useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { ImageModal } from "@/components/app/image-modal"

export type ContentImageProps = {
  src: string
  alt: string
  caption?: ReactNode
  maxWidth?: number
  aspect?: "square" | "landscape" | "wide"
  zoomable?: boolean
}

export function ContentImage({ src, alt, caption = null, maxWidth = 320, aspect = "square", zoomable = false }: ContentImageProps) {
  const [isOpen, setIsOpen] = useState(false)
  const thumbnail = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        "block w-full border border-primary/50 bg-muted/10 object-contain",
        aspect === "wide" ? "aspect-2/1" : aspect === "landscape" ? "aspect-4/3" : "aspect-square"
      )}
    />
  )

  return (
    <figure className="mx-auto w-full min-w-0" style={{ maxWidth }}>
      {zoomable ? (
        <button
          type="button"
          aria-label={`Enlarge ${alt || "image"}`}
          aria-haspopup="dialog"
          onClick={() => setIsOpen(true)}
          className="interactive block w-full cursor-zoom-in transition-opacity hover:opacity-90"
        >
          {thumbnail}
        </button>
      ) : thumbnail}
      {caption != null && (
        <figcaption className="mt-2 text-center text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
          {caption}
        </figcaption>
      )}
      {isOpen && (
        <ImageModal src={src} alt={alt} caption={caption} onDismiss={() => setIsOpen(false)} />
      )}
    </figure>
  )
}
