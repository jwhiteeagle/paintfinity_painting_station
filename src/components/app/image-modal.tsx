import { useEffect, useId, useRef, type ReactNode } from "react"
import { createPortal } from "react-dom"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ImageModalProps = {
  src: string
  alt: string
  caption?: ReactNode
  onDismiss: () => void
}

export function ImageModal({ src, alt, caption, onDismiss }: ImageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const captionId = useId()

  useEffect(() => {
    const dialog = dialogRef.current!
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = "hidden"
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-label={alt || "Image preview"}
      aria-describedby={caption != null ? captionId : undefined}
      className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-[800px] overflow-y-auto border border-border bg-background p-3 text-foreground shadow-2xl backdrop:bg-black/75 sm:p-4"
      onCancel={(event) => {
        event.preventDefault()
        onDismiss()
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const bounds = event.currentTarget.getBoundingClientRect()
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) {
          onDismiss()
        }
      }}
    >
      <div className="mb-3 flex justify-end">
        <button
          type="button"
          autoFocus
          onClick={onDismiss}
          className={cn(buttonVariants({ variant: "inverted" }), "min-h-11 px-4")}
          aria-label="Close image preview"
        >
          Close
        </button>
      </div>
      <figure>
        <img
          src={src}
          alt={alt}
          className="mx-auto block h-auto max-h-[65dvh] w-auto max-w-full object-contain"
        />
        {caption != null && (
          <figcaption id={captionId} className="mt-3 text-center text-sm leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">
            {caption}
          </figcaption>
        )}
      </figure>
    </dialog>,
    document.body
  )
}
