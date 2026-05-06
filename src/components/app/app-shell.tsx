import * as React from "react"

export type AppShellProps = {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
}

export function AppShell({
  header,
  footer,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-360 flex-col px-4 sm:px-6 lg:px-8">
        {header ? <header className="py-4">{header}</header> : null}
        <main className="flex-1 pb-6">{children}</main>
        {footer ? <footer className="py-6">{footer}</footer> : null}
      </div>
    </div>
  )
}
