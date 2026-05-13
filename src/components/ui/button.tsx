import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "interactive inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none border border-transparent font-mono text-xs font-medium uppercase tracking-[0.12em] transition-colors active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        main: "h-8 bg-primary px-3 text-[0.68rem] tracking-[0.14em] text-primary-foreground shadow-sm hover:bg-primary/90",
        inverted: "h-8 border-primary bg-secondary px-3 text-[0.68rem] tracking-[0.14em] text-secondary-foreground shadow-sm hover:bg-secondary/80",
        selector: "h-8 border-border bg-primary/60 px-3 text-[0.68rem] tracking-[0.14em] text-foreground shadow-sm hover:bg-muted/70 hover:text-foreground/90",
        image: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "main",
    },
  }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { buttonVariants }
