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
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        {header ? <header className="py-4">{header}</header> : null}
        <main className={cn("flex-1 py-6", mainClassName)}>{children}</main>
        {footer ? <footer className="py-6">{footer}</footer> : null}
      </div>
    </div>
  )
}