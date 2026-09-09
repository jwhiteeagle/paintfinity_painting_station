import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export function TextEmphasis({ className, ...props }: ComponentProps<"span">) {
  return <span className={cn("text-emphasis", className)} {...props} />
}
