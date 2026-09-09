import type { ReactNode } from "react"

export type SectionSurfaceProps = {
  children: ReactNode
  heading?: ReactNode
}

export function SectionSurface({ children, heading }: SectionSurfaceProps) {
  return (
    <div className="flex min-w-0 flex-col gap-4 border border-border/60 bg-card bg-linear-to-br from-black/10 to-black/20 p-3 text-foreground sm:gap-5 sm:p-4">
      {heading != null && <div>{heading}</div>}
      {children}
    </div>
  )
}
