import { buttonVariants } from "@/components/ui/button"
import { useTheme } from "@/components/app/theme-provider"
import { cn } from "@/lib/utils"

const themeOptions = [
  { value: "light", label: "Use light theme", icon: SunIcon },
  { value: "dark", label: "Use dark theme", icon: MoonIcon },
  { value: "system", label: "Use system theme", icon: SystemIcon },
] as const

const iconButtonClassName = buttonVariants({
  variant: "image",
  className: "size-7 p-0 text-muted-foreground hover:bg-muted/70 hover:text-foreground lg:size-8",
})

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="layout-center gap-2">
      <a
        href="https://github.com/jwhiteeagle/paintfinity_painting_station"
        target="_blank"
        rel="noreferrer"
        aria-label="Open Paintfinity repository on GitHub"
        title="Open Paintfinity repository on GitHub"
        className={buttonVariants({
          className: "size-7.5 bg-[#181717] p-0 text-white hover:bg-[#181717]/85 hover:text-white lg:size-9",
        })}
      >
        <GitHubIcon className="size-5.5" />
      </a>
      <div
        className="inline-flex rounded-none border border-border bg-background p-px shadow-sm lg:p-0.5"
        role="group"
        aria-label="Theme selection"
      >
        {themeOptions.map((option) => {
          const Icon = option.icon

          return (
            <button
              key={option.value}
              type="button"
              className={cn(
                iconButtonClassName,
                theme === option.value && "bg-primary text-primary-foreground shadow-xs"
              )}
              aria-label={option.label}
              aria-pressed={theme === option.value}
              title={option.label}
              onClick={() => setTheme(option.value)}
            >
              <Icon className="size-4" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

type ThemeIconProps = {
  className?: string
}

function SunIcon({ className }: ThemeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}

function MoonIcon({ className }: ThemeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z" />
    </svg>
  )
}

function SystemIcon({ className }: ThemeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  )
}

function GitHubIcon({ className }: ThemeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-.89-.01-1.75-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.95c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.89 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.07 10.07 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}
