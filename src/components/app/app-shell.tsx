import * as React from "react"

import { cn } from "@/lib/utils"

export type AppShellProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  className?: string
  mainClassName?: string
}

export function AppShell({
  header,
  footer,
  children,
  className,
  mainClassName,
}: AppShellProps) {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <div className="layout-shell">
        {header ? <header className="py-4">{header}</header> : null}
        <main className={cn("flex-1 py-6", mainClassName)}>{children}</main>
        {footer ? <footer className="py-6">{footer}</footer> : null}
      </div>
    </div>
  )
}
